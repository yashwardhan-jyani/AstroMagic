import OpenAI from 'openai';
import { OPEN_AI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: "sk-proj-zFsBCRWFh3r3f4KkfbCZT3BlbkFJCPqcEhGIWJqq5HzFduKw",
  dangerouslyAllowBrowser:true,
});
export default openai;