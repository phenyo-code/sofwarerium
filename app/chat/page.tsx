'use client';

import { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaSpinner, FaPaperPlane, FaUser, FaRedo } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { sendChat } from '../actions/sendChat'; // Adjust path as needed
import { useRouter } from 'next/navigation';

// Move styles to a separate CSS file or handle via layout
import './chat.css'; // Create this file with the styles below

const colors = {
  primary: '#6393FF',
  secondary: '#FF6B6B',
  black: '#1A1A1A',
  gray: '#4A4A4A',
  lightGray: '#F1F3F5',
  white: '#FFFFFF',
  success: '#2ECC71',
  error: '#E74C3C',
};

type Message = { 
  sender: 'user' | 'bot'; 
  text: string; 
  timestamp: string;
  typing?: boolean;
};

interface ChatData {
  name: string;
  email: string;
  services: string[];
  budget: string;
  support: string;
  description: string;
  company?: string;
  timeline?: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);
  const [chatData, setChatData] = useState<ChatData>({
    name: '', email: '', services: [], budget: '', support: '', description: '', company: '', timeline: '',
  });
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Initialize messages only on the client
  useEffect(() => {
    setMessages([
      { 
        sender: 'bot', 
        text: 'Hi👋, Welcome to Softwarerium! I’m RiumBot, your AI assistant. How can I help you today?\n\n1) Project Inquiry\n2) Support\n3) General Chat', 
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      },
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const simulateTyping = (text: string, callback: () => void) => {
    setMessages(prev => [...prev, { 
      sender: 'bot', text: '', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), typing: true 
    }]);
    setTimeout(() => {
      setMessages(prev => prev.filter(m => !m.typing).concat({ 
        sender: 'bot', text, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }));
      callback();
    }, 1000);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = { sender: 'user', text: input, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, newMessage]);
    setInput('');

    const processInput = () => {
      switch (step) {
        case 0:
          if (input === '1') { setStep(1); simulateTyping('Awesome! Let’s start with your name ?', () => {}); }
          else if (input === '2') { simulateTyping('For support, email support@softwarerium.co.za or describe your issue here!', () => {}); }
          else if (input === '3') { simulateTyping('Cool! What’s on your mind?', () => {}); }
          else { simulateTyping('Hmm, I couldnt understand that, please reply "1" to get started!', () => {}); }
          break;
        case 1:
          if (!/^[a-zA-Z\s]{2,}$/.test(input)) { simulateTyping('Please enter a valid name (at least 2 letters, no numbers).', () => {}); return; }
          setChatData(prev => ({ ...prev, name: input })); setStep(2); simulateTyping(`Nice to meet you, ${input}! What’s your email?`, () => {});
          break;
        case 2:
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) { simulateTyping('Oops! That doesn’t look like a valid email. Try again?', () => {}); return; }
          setChatData(prev => ({ ...prev, email: input })); setStep(3); simulateTyping(`Thanks, ${chatData.name}! Which services are you looking for? (e.g "1" ) \n1) Web Development\n2) Desktop Apps\n3) Mobile Apps`, () => {});
          break;
        case 3:
          const serviceOptions = ['Web Development', 'Desktop Apps', 'Mobile Apps'];
          const selected = input.split(',').map(i => parseInt(i.trim()) - 1);
          const validSelections = selected.filter(i => i >= 0 && i < serviceOptions.length);
          if (validSelections.length === 0) { simulateTyping('Please select at least one valid option (e.g., "1").', () => {}); return; }
          setChatData(prev => ({ ...prev, services: validSelections.map(i => serviceOptions[i]) })); setStep(4);
          simulateTyping(`Great! And what is your budget in for this project? Please choose a number (e.g "3" ) \n1) < R3,500\n2) R3,500-R10,000\n3) R10,000-R25,000\n4) R25,000-R50,000\n5) R50,000+`, () => {});
          break;
        case 4:
          const budgetOptions = ['< R3,500', 'R3,500-R10,000', 'R10,000-R25,000', 'R25,000-R50,000', 'R50,000+'];
          const budgetIndex = parseInt(input) - 1;
          if (isNaN(budgetIndex) || budgetIndex < 0 || budgetIndex >= budgetOptions.length) { simulateTyping('Pick 1-5 for budget.', () => {}); return; }
          setChatData(prev => ({ ...prev, budget: budgetOptions[budgetIndex] })); setStep(5); simulateTyping(`Need ongoing support?\n1) Yes\n2) No\n3) Maybe`, () => {});
          break;
        case 5:
          const supportOptions = ['Yes', 'No', 'Maybe'];
          const supportIndex = parseInt(input) - 1;
          if (isNaN(supportIndex) || supportIndex < 0 || supportIndex >= supportOptions.length) { simulateTyping('Choose 1, 2, or 3.', () => {}); return; }
          setChatData(prev => ({ ...prev, support: supportOptions[supportIndex] })); setStep(6); simulateTyping(`What’s your company name? (Type "skip" if none)`, () => {});
          break;
        case 6:
          setChatData(prev => ({ ...prev, company: input.toLowerCase() === 'skip' ? 'N/A' : input })); setStep(7); simulateTyping(`When do you need it done? (e.g., "2 months")`, () => {});
          break;
        case 7:
          setChatData(prev => ({ ...prev, timeline: input })); setStep(8); simulateTyping(`Describe your project? (Type "skip" to finish)`, () => {});
          break;
        case 8:
          setChatData(prev => ({ ...prev, description: input.toLowerCase() === 'skip' ? 'Not provided' : input })); setStep(9); simulateTyping(`All set, ${chatData.name}! Type "submit" to send.`, () => {});
          break;
        case 9:
          if (input.toLowerCase() === 'submit') { handleSubmit(); } else { simulateTyping(`Type "submit" when ready, ${chatData.name}!`, () => {}); }
          break;
        default:
          if (input.toLowerCase() === 'restart') { resetChat(); } else { simulateTyping('Type "restart" to begin again!', () => {}); }
      }
    };
    processInput();
  };

  const handleSubmit = async () => {
    setIsPending(true);
    const formData = new FormData();
    Object.entries(chatData).forEach(([key, value]) => {
      if (Array.isArray(value)) value.forEach(v => formData.append(key, v));
      else formData.append(key, value);
    });
    formData.append('conversation', messages.map(m => `${m.sender}: ${m.text}`).join('\n'));

    const result = await sendChat(formData);
    setIsPending(false);
    if (result.success) {
      setStatus('✅ Submitted! We’ll reach out soon.');
      setTimeout(() => router.push('/'), 3000);
    } else {
      setStatus('❌ Oops! Try again?');
      setTimeout(() => setStatus(null), 3000);
    }
  };

  const resetChat = () => {
    setStep(0);
    setChatData({ name: '', email: '', services: [], budget: '', support: '', description: '', company: '', timeline: '' });
    setMessages([{ sender: 'bot', text: '👋 Welcome back! I’m RiumBot. How can I help?\n\n1) Project Inquiry\n2) Support\n3) General Chat', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setStatus(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-full flex flex-col bg-gradient-to-b from-gray-50 to-white relative"
    >
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-primary text-white shadow-md">
        <div className="flex items-center gap-2">
          <FaRobot size={24} />
          <h1 className="text-xl font-semibold">RiumBot</h1>
        </div>
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={resetChat}
            className="hover:text-gray-200"
          >
            <FaRedo size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => router.push('/')}
            className="hover:text-gray-200"
          >
            <FaTimes size={22} />
          </motion.button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 pt-20 pb-20">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
          >
            <div className="flex items-end gap-2 max-w-[85%]">
              {msg.sender === 'bot' && <FaRobot className="text-primary" size={20} />}
              <div
                className={`p-3 rounded-2xl shadow-sm ${
                  msg.sender === 'user' ? 'bg-primary text-white' : 'bg-lightGray text-black'
                }`}
              >
                {msg.typing ? (
                  <div className="flex gap-1">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-100">.</span>
                    <span className="animate-bounce delay-200">.</span>
                  </div>
                ) : (
                  <p className="whitespace-pre-wrap text-sm">{msg.text}</p>
                )}
                <span className="text-xs opacity-70 mt-1 block">{msg.timestamp}</span>
              </div>
              {msg.sender === 'user' && <FaUser className="text-primary" size={20} />}
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Fixed Input Area */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg" style={{ borderColor: colors.lightGray }}>
        <div className="max-w-2xl mx-auto flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 p-3 rounded-full border focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300"
            style={{ borderColor: colors.gray, background: colors.white, fontSize: '16px' }}
            placeholder="Type your message..."
            disabled={isPending}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSend}
            className="p-3 rounded-full disabled:opacity-50"
            style={{ background: colors.primary, color: colors.white }}
            disabled={isPending}
          >
            {isPending ? <FaSpinner className="animate-spin" size={18} /> : <FaPaperPlane size={18} />}
          </motion.button>
        </div>
        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center mt-2 text-sm ${status.includes('success') ? 'text-success' : 'text-error'}`}
          >
            {status}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}