import * as React from "react";
import { Card, CardBody, CardHeader, SmallText } from "./Card";
import ButtonLink from "./ButtonLink";
import profile from "../images/profile-cropped.jpg";
import Separator from "./Separator";

export default function Basic({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <section className="flex flex-wrap flex-col items-center md:flex-row my-10">
        <div className="mx-5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5">
          <img
            className="w-32 h-32 rounded-lg"
            src={profile}
            alt="Profile picture"
          />
        </div>
        <div className="mx-5 flex flex-col justify-center items-center py-5">
          <CardHeader>Ákos Gelencsér</CardHeader>
          <SmallText>Software developer</SmallText>
        </div>
      </section>
      <Separator />
      <CardBody>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
          ante sed mauris rhoncus commodo vel ac quam. Integer condimentum
          ligula ex, id dignissim mauris facilisis at. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Sed placerat lectus erat, nec auctor ante efficitur in.
          Mauris luctus iaculis libero, eget auctor nulla tincidunt vitae. In at
          volutpat felis, ac ultricies est. Suspendisse potenti. Sed at nisl
          magna.
        </p>
        <p>
          Duis lacus erat, consectetur vel purus sed, finibus accumsan risus.
          Vestibulum a erat at libero dictum gravida. Morbi tincidunt, libero ac
          malesuada pellentesque, mi nisi sodales libero, eu molestie libero
          augue a lectus. Vivamus condimentum a nunc venenatis consequat. Duis
          varius ornare magna, at elementum lectus ornare vitae. Nullam massa
          enim, ornare sagittis metus ut, vehicula lacinia sem. Fusce pretium
          nibh lacus. Ut suscipit est enim, a sollicitudin lacus mollis id.
          Vestibulum id efficitur purus. Proin egestas metus at accumsan
          fringilla.
        </p>
        <ButtonLink href="/akos-gelencser-cv-v1.pdf">Download CV</ButtonLink>
      </CardBody>
    </Card>
  );
}
