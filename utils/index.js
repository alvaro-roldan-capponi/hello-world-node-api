
export const generateSuccessResponse = body => ({
    ...body,
});

export const generateErrorResponse = message => ({
  data: {
    message,
    status: 'error',
  },
});
