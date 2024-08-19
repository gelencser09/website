import * as React from "react";
import { Card, CardBody, CardHeader, SmallText } from "./Card";
import { ListItem } from "./ListItem";
import mail from "../images/mail.svg";
import phone from "../images/phone.svg";
import Separator from "./Separator";

export default function Contact() {
  return (
    <Card>
      <CardHeader>Contact me</CardHeader>
      <Separator />
      <ul>
        <ListItem src={mail} alt="mail" href="mailto:gelencser09@gmail.com">
          gelencser09 [at] gmail.com
        </ListItem>
        <ListItem src={phone} alt="phone" href="tel:+36309970444">
          +36 30 997 0444
        </ListItem>
        <ListItem src={phone} alt="phone" href="tel:+4571342901">
          +45 71 34 29 01
        </ListItem>
        <ListItem src={phone} alt="phone">
          test
        </ListItem>
      </ul>
      <Separator />
      asd
    </Card>
  );
}
