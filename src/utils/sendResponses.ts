import {Response} from 'express';

function sendNack(res: Response, error?: object, statusCode?: number) {
  return res.status(statusCode || 500).json({
    message: {
      ack: {
        status: 'NACK',
      },
    },
    error,
  });
}

function sendAck(res: Response, statusCode?: number) {
  return res.status(statusCode || 200).json({
    message: {
      ack: {
        status: 'ACK',
      },
    },
  });
}

export {sendNack, sendAck};
