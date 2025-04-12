import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const CampusRankWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Campus Rank Waitlist, {userFirstname}! 🎓</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://campus-rank.priynshuchouhn.engineer/logo.jpg`}
          width="220"
          height="100"
          alt="Campus Rank Logo"
          style={logo}
        />
        <Text style={greeting}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thank you for joining the Campus Rank waitlist! We&apos;re excited to have you on board as we build the future of campus rankings and student insights.
        </Text>
        <Text style={paragraph}>
          We&apos;ll keep you updated on our progress and notify you as soon as Campus Rank is ready for you to explore. If you have any questions or suggestions, feel free to reach out by replying directly to{" "}
          <a href="mailto:priynshuchouhn@gmail.com" style={link}>
            this email {""}
          </a>
          — we&apos;d love to hear from you!
        </Text>
        <Text style={paragraph}>
          Stay connected with us on social media for updates and campus insights:{" "}
          <a href="https://x.com/priynshuchouhn" style={link}>
            @priynshuchouhn
          </a>
        </Text>
        <Text style={signOff}>
          Best regards,
          <br />
          The Campus Rank Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you signed up for the Campus Rank waitlist.
          If you believe this is a mistake, feel free to ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

CampusRankWaitlistEmail.PreviewProps = {
  userFirstname: "Student",
} as EmailProps;

  export default CampusRankWaitlistEmail;

const main = {
  background: "linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#cccccc",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const link = {
  color: "#F7FF9B",
  textDecoration: "underline",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};
