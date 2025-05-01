import { 
  users, type User, type InsertUser,
  type ContactMessage, type InsertContactMessage, 
  type Subscription, type InsertSubscription 
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact message methods
  saveContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  
  // Subscription methods
  saveSubscription(subscription: InsertSubscription): Promise<Subscription>;
  getSubscriptions(): Promise<Subscription[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private subscriptions: Map<number, Subscription>;
  private userIdCounter: number;
  private messageIdCounter: number;
  private subscriptionIdCounter: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.subscriptions = new Map();
    this.userIdCounter = 1;
    this.messageIdCounter = 1;
    this.subscriptionIdCounter = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async saveContactMessage(messageData: InsertContactMessage): Promise<ContactMessage> {
    const id = this.messageIdCounter++;
    const now = new Date();
    const message: ContactMessage = { 
      ...messageData, 
      id, 
      createdAt: now 
    };
    this.contactMessages.set(id, message);
    return message;
  }
  
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
  
  async saveSubscription(subscriptionData: InsertSubscription): Promise<Subscription> {
    // Check if email already exists
    const existingSubscription = Array.from(this.subscriptions.values()).find(
      (sub) => sub.email === subscriptionData.email
    );
    
    if (existingSubscription) {
      return existingSubscription; // Return existing subscription if email already subscribed
    }
    
    const id = this.subscriptionIdCounter++;
    const now = new Date();
    const subscription: Subscription = { 
      ...subscriptionData, 
      id, 
      createdAt: now 
    };
    this.subscriptions.set(id, subscription);
    return subscription;
  }
  
  async getSubscriptions(): Promise<Subscription[]> {
    return Array.from(this.subscriptions.values());
  }
}

export const storage = new MemStorage();
