import { promises as fs } from 'fs';
import { join } from 'path';

interface FormSubmission {
  type: 'contact' | 'quote' | 'consultation';
  data: any;
  timestamp: string;
  email: string;
}

// Create a simple file-based email logger
export class EmailLogger {
  private logFilePath: string;

  constructor() {
    this.logFilePath = join(process.cwd(), 'form-submissions.log');
  }

  async logSubmission(submission: FormSubmission): Promise<void> {
    try {
      const logEntry = {
        ...submission,
        timestamp: new Date().toISOString(),
        formattedTime: new Date().toLocaleString()
      };

      const logLine = JSON.stringify(logEntry, null, 2) + '\n' + '='.repeat(50) + '\n';
      
      await fs.appendFile(this.logFilePath, logLine);
      
      // Also log to console for immediate visibility
      console.log(`\n📧 NEW ${submission.type.toUpperCase()} SUBMISSION 📧`);
      console.log('='.repeat(40));
      console.log(`Timestamp: ${logEntry.formattedTime}`);
      console.log(`Email: ${submission.email}`);
      console.log(`Type: ${submission.type}`);
      console.log('Data:', JSON.stringify(submission.data, null, 2));
      console.log('='.repeat(40));
      console.log(`📁 Saved to: ${this.logFilePath}\n`);
      
    } catch (error) {
      console.error('Error logging submission:', error);
    }
  }

  async getSubmissions(): Promise<FormSubmission[]> {
    try {
      const content = await fs.readFile(this.logFilePath, 'utf-8');
      const entries = content.split('='.repeat(50));
      return entries
        .filter(entry => entry.trim())
        .map(entry => {
          try {
            return JSON.parse(entry.trim());
          } catch {
            return null;
          }
        })
        .filter(Boolean);
    } catch {
      return [];
    }
  }
}

// Export a singleton instance
export const emailLogger = new EmailLogger();