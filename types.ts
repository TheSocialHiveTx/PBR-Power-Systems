
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}