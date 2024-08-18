import * as React from "react";
import { Card, CardBody, CardHeader, SmallText } from "./Card";

export default function Basic({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <section className="flex my-10">
        <img
          className="w-32 h-32 rounded"
          src="https://placehold.co/400"
          alt="Profile picture"
        />
        <div className="flex flex-col justify-center items-start px-10">
          <CardHeader>Ákos Gelencsér</CardHeader>
          <SmallText>Software developer</SmallText>
        </div>
      </section>

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
      </CardBody>
    </Card>
  );
}
