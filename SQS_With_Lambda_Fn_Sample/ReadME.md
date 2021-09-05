## SQS with AWS Lambda Function as a trigger

From SQS Queue, a Lambda function can be added as a trigger for every message that is pushed into the queue with the attributes of batch size. Every message that is pushed into SQS Queue is a stringified content so when processing the message, it has to be parsed. 