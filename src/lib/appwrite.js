import { Client, Account } from 'appwrite';

const client = new Client();

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

client
  .setEndpoint(endpoint)
  .setProject(projectId);

const account = new Account(client);

export { client, account };