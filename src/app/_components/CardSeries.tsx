import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type Props = {
  title: string;
  episodes: number;
  image: string;
};

function CardSeries(props: Props) {
  return (
    <div className="group relative">
      <Card className="absolute w-[200px]">
        <CardContent className="">
          <Image
            className="rounded shadow"
            src={props.image}
            alt={props.title}
            width={200}
            height={200}
          />
        </CardContent>
        <CardFooter>
          <CardDescription>{props.title}</CardDescription>
        </CardFooter>
      </Card>
      <Card className="absolute left-0 top-0 z-10 hidden h-[350px] w-[200px] rounded-sm bg-black/70 transition-opacity delay-1000 ease-in group-hover:block">
        <CardContent className="text-primary-foreground">
          <div>teto prueba</div>
          <div>teto prueba</div>
          <div>teto prueba</div>
          <div>teto prueba</div>
          <div>teto prueba</div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardSeries;
