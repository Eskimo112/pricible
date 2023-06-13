import { Box } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

    useEffect(() => {
        if(!id) return;
        //Fetch product

    }, [id])

  return <Box></Box>;
}
