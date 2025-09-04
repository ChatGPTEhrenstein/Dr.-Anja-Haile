#!/usr/bin/env python3
"""
Backend API Testing for Dr. Anja Haile Website
Tests all backend API endpoints including health checks, contact form, and database connectivity.
"""

import requests
import json
import os
import sys
from datetime import datetime

# Get the base URL from environment or use default
BASE_URL = os.getenv('NEXT_PUBLIC_BASE_URL', 'https://business-presence.preview.emergentagent.com')
API_BASE = f"{BASE_URL}/api"

class BackendTester:
    def __init__(self):
        self.results = []
        self.passed = 0
        self.failed = 0
        
    def log_result(self, test_name, success, message, details=None):
        """Log test result"""
        result = {
            'test': test_name,
            'success': success,
            'message': message,
            'details': details,
            'timestamp': datetime.now().isoformat()
        }
        self.results.append(result)
        
        if success:
            self.passed += 1
            print(f"✅ {test_name}: {message}")
        else:
            self.failed += 1
            print(f"❌ {test_name}: {message}")
            if details:
                print(f"   Details: {details}")
    
    def test_api_root(self):
        """Test GET /api/ - Root API endpoint"""
        try:
            response = requests.get(f"{API_BASE}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                expected_fields = ['message', 'status', 'timestamp']
                
                if all(field in data for field in expected_fields):
                    if 'Dr. Anja Haile' in data.get('message', ''):
                        self.log_result(
                            "API Root Endpoint",
                            True,
                            "Root endpoint returns correct welcome message with all required fields",
                            f"Response: {data}"
                        )
                    else:
                        self.log_result(
                            "API Root Endpoint",
                            False,
                            "Root endpoint missing Dr. Anja Haile in message",
                            f"Response: {data}"
                        )
                else:
                    self.log_result(
                        "API Root Endpoint",
                        False,
                        f"Missing required fields. Expected: {expected_fields}",
                        f"Response: {data}"
                    )
            else:
                self.log_result(
                    "API Root Endpoint",
                    False,
                    f"Unexpected status code: {response.status_code}",
                    f"Response: {response.text}"
                )
                
        except Exception as e:
            self.log_result(
                "API Root Endpoint",
                False,
                f"Request failed: {str(e)}",
                f"URL: {API_BASE}/"
            )
    
    def test_health_endpoint(self):
        """Test GET /api/health - Health check endpoint"""
        try:
            response = requests.get(f"{API_BASE}/health", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                expected_fields = ['status', 'database', 'timestamp']
                
                if all(field in data for field in expected_fields):
                    if data.get('status') == 'healthy' and data.get('database') == 'connected':
                        self.log_result(
                            "Health Check Endpoint",
                            True,
                            "Health endpoint shows healthy status with database connected",
                            f"Response: {data}"
                        )
                    else:
                        self.log_result(
                            "Health Check Endpoint",
                            False,
                            f"Unhealthy status or database not connected",
                            f"Response: {data}"
                        )
                else:
                    self.log_result(
                        "Health Check Endpoint",
                        False,
                        f"Missing required fields. Expected: {expected_fields}",
                        f"Response: {data}"
                    )
            else:
                self.log_result(
                    "Health Check Endpoint",
                    False,
                    f"Unexpected status code: {response.status_code}",
                    f"Response: {response.text}"
                )
                
        except Exception as e:
            self.log_result(
                "Health Check Endpoint",
                False,
                f"Request failed: {str(e)}",
                f"URL: {API_BASE}/health"
            )
    
    def test_contact_form_submission(self):
        """Test POST /api/contact - Contact form submission"""
        # Test valid submission
        valid_contact_data = {
            "name": "Maria Schmidt",
            "email": "maria.schmidt@example.com",
            "phone": "+49 89 12345678",
            "subject": "Terminanfrage für Psychotherapie",
            "message": "Guten Tag Dr. Haile, ich würde gerne einen Termin für ein Erstgespräch vereinbaren. Ich leide unter Angstzuständen und suche professionelle Hilfe."
        }
        
        try:
            response = requests.post(
                f"{API_BASE}/contact",
                json=valid_contact_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                
                if data.get('success') and 'id' in data:
                    self.log_result(
                        "Contact Form - Valid Submission",
                        True,
                        "Valid contact form submission successful with German response",
                        f"Response: {data}"
                    )
                    # Store the ID for later retrieval test
                    self.contact_id = data.get('id')
                else:
                    self.log_result(
                        "Contact Form - Valid Submission",
                        False,
                        "Valid submission did not return success=true or missing ID",
                        f"Response: {data}"
                    )
            else:
                self.log_result(
                    "Contact Form - Valid Submission",
                    False,
                    f"Unexpected status code: {response.status_code}",
                    f"Response: {response.text}"
                )
                
        except Exception as e:
            self.log_result(
                "Contact Form - Valid Submission",
                False,
                f"Request failed: {str(e)}",
                f"URL: {API_BASE}/contact"
            )
    
    def test_contact_form_validation(self):
        """Test POST /api/contact - Validation with missing fields"""
        # Test missing required fields
        invalid_contact_data = {
            "name": "Test User",
            # Missing email and message
            "phone": "+49 89 12345678"
        }
        
        try:
            response = requests.post(
                f"{API_BASE}/contact",
                json=invalid_contact_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            if response.status_code == 400:
                data = response.json()
                
                if not data.get('success') and 'error' in data:
                    # Check if error message is in German
                    error_msg = data.get('error', '')
                    if 'erforderlich' in error_msg.lower():
                        self.log_result(
                            "Contact Form - Validation",
                            True,
                            "Validation correctly rejects missing required fields with German error message",
                            f"Response: {data}"
                        )
                    else:
                        self.log_result(
                            "Contact Form - Validation",
                            True,
                            "Validation correctly rejects missing required fields",
                            f"Response: {data}"
                        )
                else:
                    self.log_result(
                        "Contact Form - Validation",
                        False,
                        "Validation response format incorrect",
                        f"Response: {data}"
                    )
            else:
                self.log_result(
                    "Contact Form - Validation",
                    False,
                    f"Expected 400 status code for validation error, got: {response.status_code}",
                    f"Response: {response.text}"
                )
                
        except Exception as e:
            self.log_result(
                "Contact Form - Validation",
                False,
                f"Request failed: {str(e)}",
                f"URL: {API_BASE}/contact"
            )
    
    def test_get_contacts(self):
        """Test GET /api/contacts - Retrieve contact submissions"""
        try:
            response = requests.get(f"{API_BASE}/contacts", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                expected_fields = ['success', 'data', 'count']
                
                if all(field in data for field in expected_fields):
                    if data.get('success') and isinstance(data.get('data'), list):
                        contact_count = data.get('count', 0)
                        self.log_result(
                            "Get Contacts Endpoint",
                            True,
                            f"Successfully retrieved {contact_count} contact submissions",
                            f"Response structure: success={data.get('success')}, count={contact_count}"
                        )
                    else:
                        self.log_result(
                            "Get Contacts Endpoint",
                            False,
                            "Response format incorrect - success not true or data not array",
                            f"Response: {data}"
                        )
                else:
                    self.log_result(
                        "Get Contacts Endpoint",
                        False,
                        f"Missing required fields. Expected: {expected_fields}",
                        f"Response: {data}"
                    )
            else:
                self.log_result(
                    "Get Contacts Endpoint",
                    False,
                    f"Unexpected status code: {response.status_code}",
                    f"Response: {response.text}"
                )
                
        except Exception as e:
            self.log_result(
                "Get Contacts Endpoint",
                False,
                f"Request failed: {str(e)}",
                f"URL: {API_BASE}/contacts"
            )
    
    def test_database_persistence(self):
        """Test database persistence by submitting and retrieving data"""
        # Submit a test contact
        test_contact = {
            "name": "Dr. Test Patient",
            "email": "test.patient@example.com",
            "message": "Test message for database persistence verification"
        }
        
        try:
            # Submit contact
            submit_response = requests.post(
                f"{API_BASE}/contact",
                json=test_contact,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            if submit_response.status_code == 200:
                submit_data = submit_response.json()
                
                if submit_data.get('success'):
                    # Wait a moment then retrieve contacts
                    import time
                    time.sleep(1)
                    
                    retrieve_response = requests.get(f"{API_BASE}/contacts", timeout=10)
                    
                    if retrieve_response.status_code == 200:
                        retrieve_data = retrieve_response.json()
                        
                        if retrieve_data.get('success'):
                            contacts = retrieve_data.get('data', [])
                            
                            # Check if our test contact is in the retrieved data
                            found_contact = False
                            for contact in contacts:
                                if (contact.get('email') == test_contact['email'] and 
                                    contact.get('name') == test_contact['name']):
                                    found_contact = True
                                    break
                            
                            if found_contact:
                                self.log_result(
                                    "Database Persistence",
                                    True,
                                    "Data successfully persisted and retrieved from database",
                                    f"Test contact found in {len(contacts)} total contacts"
                                )
                            else:
                                self.log_result(
                                    "Database Persistence",
                                    False,
                                    "Submitted contact not found in retrieved data",
                                    f"Searched in {len(contacts)} contacts for email: {test_contact['email']}"
                                )
                        else:
                            self.log_result(
                                "Database Persistence",
                                False,
                                "Failed to retrieve contacts for persistence test",
                                f"Retrieve response: {retrieve_data}"
                            )
                    else:
                        self.log_result(
                            "Database Persistence",
                            False,
                            f"Failed to retrieve contacts, status: {retrieve_response.status_code}",
                            f"Response: {retrieve_response.text}"
                        )
                else:
                    self.log_result(
                        "Database Persistence",
                        False,
                        "Failed to submit test contact for persistence test",
                        f"Submit response: {submit_data}"
                    )
            else:
                self.log_result(
                    "Database Persistence",
                    False,
                    f"Failed to submit test contact, status: {submit_response.status_code}",
                    f"Response: {submit_response.text}"
                )
                
        except Exception as e:
            self.log_result(
                "Database Persistence",
                False,
                f"Database persistence test failed: {str(e)}",
                f"URL: {API_BASE}/contact and {API_BASE}/contacts"
            )
    
    def test_invalid_endpoints(self):
        """Test invalid endpoints return 404"""
        try:
            response = requests.get(f"{API_BASE}/nonexistent", timeout=10)
            
            if response.status_code == 404:
                data = response.json()
                if 'error' in data:
                    self.log_result(
                        "Invalid Endpoint Handling",
                        True,
                        "Invalid endpoints correctly return 404 with error message",
                        f"Response: {data}"
                    )
                else:
                    self.log_result(
                        "Invalid Endpoint Handling",
                        True,
                        "Invalid endpoints correctly return 404",
                        f"Response: {response.text}"
                    )
            else:
                self.log_result(
                    "Invalid Endpoint Handling",
                    False,
                    f"Expected 404 for invalid endpoint, got: {response.status_code}",
                    f"Response: {response.text}"
                )
                
        except Exception as e:
            self.log_result(
                "Invalid Endpoint Handling",
                False,
                f"Request failed: {str(e)}",
                f"URL: {API_BASE}/nonexistent"
            )
    
    def run_all_tests(self):
        """Run all backend tests"""
        print(f"🚀 Starting Backend API Tests for Dr. Anja Haile Website")
        print(f"📍 Base URL: {BASE_URL}")
        print(f"🔗 API Base: {API_BASE}")
        print("=" * 80)
        
        # Run all tests
        self.test_api_root()
        self.test_health_endpoint()
        self.test_contact_form_submission()
        self.test_contact_form_validation()
        self.test_get_contacts()
        self.test_database_persistence()
        self.test_invalid_endpoints()
        
        # Print summary
        print("=" * 80)
        print(f"📊 Test Summary:")
        print(f"✅ Passed: {self.passed}")
        print(f"❌ Failed: {self.failed}")
        print(f"📈 Success Rate: {(self.passed / (self.passed + self.failed) * 100):.1f}%")
        
        if self.failed == 0:
            print("🎉 All backend tests passed successfully!")
        else:
            print("⚠️  Some tests failed. Check the details above.")
        
        return self.failed == 0

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    sys.exit(0 if success else 1)