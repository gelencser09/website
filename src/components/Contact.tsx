import * as React from "react";
import { Card, CardBody, CardHeader, SmallText } from "./Card";
import { ListItem } from "./List";
import mail from "../images/mail.svg";
import phone from "../images/phone.svg";

export default function Contact() {
  return (
    <Card>
      <CardHeader>Contact me</CardHeader>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <ul>
        <ListItem>
          <a
            className="block flex items-center"
            href="mailto:gelencser09@gmail.com"
          >
            <img className="w-5 h-5 m-3" src={mail} alt="mail" />
            <SmallText>gelencser09 [at] gmail.com</SmallText>
          </a>
        </ListItem>
        <ListItem>
          <a className="block flex items-center" href="tel:+36309970444">
            <img className="w-5 h-5 m-3" src={phone} alt="phone" />
            <SmallText>+36 30 997 0444</SmallText>
          </a>
        </ListItem>
        <ListItem>
          <a className="block flex items-center" href="tel:+4571342901">
            <img className="w-5 h-5 m-3" src={phone} alt="phone" />
            <SmallText>+45 71 34 29 01</SmallText>
          </a>
        </ListItem>
      </ul>
    </Card>
  );
}
