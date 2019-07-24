// Load SDK for JavaScript
const AWS = require('aws-sdk');
const AWS_REGION = process.env.REGION || 'ap-south-1';
const QUEUE_NAME = process.env.QUEUE_NAME;
const API_VERSION = process.env.API_VERSION || '2012-11-05';

AWS.config.update({
    region: AWS_REGION,
});

// Create SQS service object
const sqs = AWS.SQS({
    apiVersion: AWS_VERSION,
});

class CreateQueue {
    async getQueueInfo(queueName) {
        console.log(`Executing getQueueInfo for Queue ${queueName}`);
        const params = {
            QueueName: queueName,
            Attributes: {
                DelaySeconds: '60',
                MessageRetentionPeriod: '86400',
            },
        };
    }
}

module.exports = CreateQueue;
