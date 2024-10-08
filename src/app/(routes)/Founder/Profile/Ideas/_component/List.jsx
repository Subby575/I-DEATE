import * as React from "react"

import { Button } from './../../../../../../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./../../../../../../components/ui/card"
import { Input } from "./../../../../../../components/ui/input"
import { Label } from "./../../../../../../components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../../@/components/ui/select"

export function CardWithForm({params}) {
  return (
    <Card className="w-[350px] border-2 border-lime-800">
      <CardHeader>
        <CardTitle className='text-lime-800'>Idea Details</CardTitle>
        <CardDescription>Project Id: {params.idea_id}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-neutral-400">Title</Label>
              <p >{params.idea_title}</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework" className="text-neutral-400">Description</Label>
             <p>{params.idea_desc}</p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href={`/Founder/Profile/Ideas/${params.idea_id}`}>
          <Button>View</Button></a>
      </CardFooter>
    </Card>
  )
}
