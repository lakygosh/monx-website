import { notFound } from "next/navigation"

// Sends every unknown address to the branded 404 inside this layout.
export default function Missing() {
  notFound()
}
