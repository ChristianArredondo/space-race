export interface DecodedToken {
  exp: number; // token expiration date in numeric value
  iat: number; // token issue date in numeric value
  nameid: string; // equivalent to the `id` in the Db
  nbf: number; // date in number value for which the token must not be accepted
  unique_name: string; // equivalent o the `username` in the Db
}
