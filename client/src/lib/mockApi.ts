// Mock API handlers to replace server endpoints
interface SubscribeData {
  email: string;
}

interface ContactData {
  name: string;
  email: string;
  message: string;
}

export const mockApiHandlers = {
  // Mock subscribe endpoint
  "/api/subscribe": async (data?: SubscribeData) => {
    console.log("Mock API: Subscribe request received", data);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Simulate successful response
    return {
      success: true,
      message: "Subscription successful"
    };
  },
  
  // Mock contact endpoint
  "/api/contact": async (data?: ContactData) => {
    console.log("Mock API: Contact request received", data);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Simulate successful response
    return {
      success: true,
      message: "Contact message received"
    };
  }
};
