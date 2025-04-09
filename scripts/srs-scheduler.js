const fs = require("fs");
const path = require("path");

const trackerPath = path.join(__dirname, "..", "weekly-tracker.json");
const configPath = path.join(__dirname, "..", "ligma.config.js");
const testFolderPath = path.join(__dirname, "..", "/src/__tests__");

const KATA_SIZE = 5;

function loadTracker() {
    if (!fs.existsSync(trackerPath)) {
        console.log("weekly-tracker.json not found. Initializing...");

        // Initialize tracker with all algorithms from the __test__ folder
        const practiceHistory = {};
        const testFiles = fs.readdirSync(testFolderPath).filter(file => file.endsWith(".ts"));

        testFiles.forEach(file => {
            const baseName = path.basename(file, path.extname(file));
            if (!['tree', 'graph'].includes(baseName)) {
                practiceHistory[baseName] = 0;
            }
        });

        const tracker = {
            lastWeeklyUpdate: new Date(0).toISOString(),
            practiceHistory
        };

        saveTracker(tracker);
        return tracker;
    }

    return JSON.parse(fs.readFileSync(trackerPath, "utf-8"));
}

function saveTracker(tracker) {
    fs.writeFileSync(trackerPath, JSON.stringify(tracker, null, 4), "utf-8");
}

function loadConfig() {
    delete require.cache[require.resolve(configPath)];
    return require(configPath);
}

function saveConfig(selectedAlgorithms) {
    const newConfig = `module.exports = {
    dsa: ${JSON.stringify(selectedAlgorithms, null, 4)}
};`;
    fs.writeFileSync(configPath, newConfig, "utf-8");
}

function ensurePracticeHistory(tracker, algorithms) {
    algorithms.forEach(algorithm => {
        if (!tracker.practiceHistory.hasOwnProperty(algorithm)) {
            tracker.practiceHistory[algorithm] = 0; // Initialize with 0 if not present
        }
    });
}

function updateWeeklyAlgorithms() {
    const tracker = loadTracker();
    const config = loadConfig();

    // Ensure all algorithms in ligma.config.js are in practiceHistory
    ensurePracticeHistory(tracker, config.dsa);

    const lastWeeklyUpdate = new Date(tracker.lastWeeklyUpdate);
    const now = new Date();
    const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;

    if (now - lastWeeklyUpdate >= oneWeekInMs) {
        console.log("A week has passed. Updating weekly algorithms...");

        // Sort algorithms by practice count (ascending)
        const sortedAlgorithms = Object.entries(tracker.practiceHistory)
            .sort(([, countA], [, countB]) => countA - countB)
            .map(([algorithm]) => algorithm);

        // Select the 5 least-practiced algorithms
        const selectedAlgorithms = sortedAlgorithms.slice(0, KATA_SIZE);

        // Update ligma.config.js
        saveConfig(selectedAlgorithms);

        // Reset weekly tracker
        tracker.lastWeeklyUpdate = now.toISOString();
        console.log("Selected algorithms for the week:", selectedAlgorithms);

        saveTracker(tracker);

        // Return the updated config
        return selectedAlgorithms;
    }

    // Return the current config if no weekly update is needed
    return config.dsa;
}

function updatePracticeHistory(algorithms) {
    const tracker = loadTracker();

    algorithms.forEach(algorithm => {
        tracker.practiceHistory[algorithm] = (tracker.practiceHistory[algorithm] || 0) + 1;
    });

    saveTracker(tracker);
}

module.exports = {
    updateWeeklyAlgorithms,
    updatePracticeHistory
};