
export const printMessage = (req, res) => {
    console.log(req.body.message);
    res.send("HI!");
}