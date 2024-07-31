/* Handle the logic for fetching and processing suggestions. */

const amazonService = require('../services/amazonService');

exports.getSuggestions = async (req, res) => {
    const { budget, usage } = req.body;
    try {
        const suggestions = await amazonService.getSuggestions(budget, usage);
        res.json({
            RAM: suggestions.RAM,
            SSD: suggestions.SSD,
            Motherboard: suggestions.Motherboard,
            PowerSupply: suggestions.PowerSupply,
            GPU: suggestions.GPU,
            CPU: suggestions.CPU,
            CPUCooler: suggestions.CPUCooler
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}