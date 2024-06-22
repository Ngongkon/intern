const express = require('express')

const app = express();
const bodyParser = require('body-parser');
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
res.status(200).json({
   status: 'success',
   message:'woohoo! REST APIs are working',
});
});
const PORT = process.env.PORT || 3000;
// Dummy data for initial testing
let accountingData = {
    income: 10000,
    expenses: 5000,
    profits: 5000
};

// Routes
// GET endpoint to fetch accounting data
app.get('/accounting', (req, res) => {
    res.json(accountingData);
});

// POST endpoint to update accounting data
app.post('/updateAccount', (req, res) => {
    const { income, expenses } = req.body;

 // Calculate profits
    const profits = income - expenses;

    // Update accounting data
    accountingData = {
        income,
        expenses,
        profits
    };

    res.json({ message: 'Accounting data updated successfully', accountingData });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
