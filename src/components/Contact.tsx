import * as React from "react";
import { Card, CardBody, CardHeader, SmallText } from "./Card";
import { ListItem } from "./ListItem";
import mail from "../images/mail.svg";
import phone from "../images/phone.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/insta.svg";
import facebook from "../images/facebook.svg";
import Separator from "./Separator";
import Logo from "./Logo";

export default function Contact() {
  return (
    <Card>
      <CardHeader>Contact me</CardHeader>
      <Separator />
      <ul>
        <ListItem
          src={mail}
          alt="mail"
          href="mailto:gelencser09@gmail.com"
          hide
        >
          gelencser09 [at] gmail.com
        </ListItem>
        <ListItem src={phone} alt="phone" href="tel:+36309970444" hide>
          +36 30 997 0444
        </ListItem>
        <ListItem src={phone} alt="phone" href="tel:+4571342901" hide>
          +45 71 34 29 01
        </ListItem>
      </ul>
      <Separator />
      <ul className="flex flex-wrap justify-around">
        <ListItem src={facebook} alt="facebook">
          Ákos Gelencsér
        </ListItem>
        <ListItem
          src={instagram}
          alt="instagram"
          href="https://www.instagram.com/g.akos19/"
        >
          @g.akos19
        </ListItem>
        <ListItem
          src={github}
          alt="github"
          href="https://github.com/gelencser09"
        >
          @gelencser09
        </ListItem>
        <ListItem
          src={linkedin}
          alt="linkedin"
          href="https://www.linkedin.com/in/%C3%A1kos-gelencs%C3%A9r-b204b0322/"
        >
          Ákos Gelencsér
        </ListItem>
      </ul>
    </Card>
  );
}
