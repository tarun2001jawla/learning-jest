"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
// Serve static files from the "src/public" directory
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'src', 'public')));
// Handle the root route
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'src', 'public', 'index.html'));
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
