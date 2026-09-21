import crypto from "crypto";

export const generateVerificationCode = () => {
  const code = crypto.randomInt(100000, 1000000).toString();

  const hashedCode = crypto.createHash("sha256").update(code).digest("hex");

  return { code, hashedCode };
};
