import { LoginPayloadDto } from '../main/routes/dto/loginPayload.dto';

export const authorizationToLoginPayload = (
  authorization: string,
): LoginPayloadDto | undefined => {
  const authorizationSplitted = authorization.split('.');

  if (authorizationSplitted.length < 3 || !authorizationSplitted) {
    return undefined;
  }

  return JSON.parse(
    Buffer.from(authorizationSplitted[1], 'base64').toString('ascii'),
  );
};
