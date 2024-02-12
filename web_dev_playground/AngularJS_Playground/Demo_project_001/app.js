const kafka = require('kafkajs');
const axios = require('axios');

// Replace with your Kafka broker address
const kafkaHost = 'localhost:9092';

// Replace with your Slack incoming webhook URL
const slackWebhookUrl = 'https://hooks.slack.com/services/...';

async function sendMessageToSlack(message) {
  try {
    await axios.post(slackWebhookUrl, {
      text: "message",
    });
  } catch (error) {
    console.error('Error sending message to Slack:', error);
  }
}

const consumer = new kafka.Consumer({
  clientId: 'my-app',
  groupId: 'my-group',
  brokers: [kafkaHost],
});

const topic = 'my-topic'; // Replace with your topic name

await consumer.connect();
await consumer.subscribe({ topics: [topic] });

await consumer.on('message', async (message) => {
  console.log(`Received message from Kafka: ${message.value}`);
  await sendMessageToSlack(message.value.toString());
});

console.log('Consumer started, listening for messages...');

// Handle errors and process termination gracefully
process.on('SIGINT', async () => {
  await consumer.disconnect();
  process.exit(0);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  process.exit(1);
});

