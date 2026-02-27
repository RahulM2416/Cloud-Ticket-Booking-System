import express from 'express';
import cors from 'cors';
import ticketRoutes from '../backend/routes/ticketRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/tickets",ticketRoutes);

app.listen(3000, ()=> {
    console.log("Server Running on port 3000 successfully..!");
});

