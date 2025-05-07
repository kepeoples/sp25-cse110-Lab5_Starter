# Lab 5 - Starter
Name: William Peoples  
PID: A17465911

1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.  
   No, a unit test may not be ideal for the full “message” feature, because sending a message usually involves multiple components (input, validation, sending code, network call, etc.).  
   Integration or end-to-end tests would be better for this because they check how different parts of the system work together, not just one unit.
2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.  
   Yes, this is a great time to use a unit test.
   You can test just the "max message length" rule (for example, limited to 80 characters) without having to test the whole messaging system. You can just give input to the validator method and see if it rejects or cuts off messages that are longer than 80 characters.