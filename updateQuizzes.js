const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/dines/Documents/REACT_PROJECT/Project 14 (Quiz_APP)_PUBLISHED/quiz/src/components';

function getFiles(dir, files = []) {
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory() && filePath.includes('subComponents')) {
            getFiles(filePath, files);
        } else if (file.endsWith('.js') && dir.includes('subComponents')) {
            files.push(filePath);
        }
    }
    return files;
}

const files = getFiles(srcDir);
let updatedCount = 0;

for (const file of files) {
    if (file.includes('Crime_scene_quiz.js')) continue;

    let content = fs.readFileSync(file, 'utf8');

    const mapRegex = /\{([a-zA-Z0-9_]+\.[a-zA-Z0-9_]+)\[level\]\[currentQuestion\]\.options\.map/;
    const mapMatch = content.match(mapRegex);
    if (!mapMatch) {
         continue; 
    }
    const dataObj = mapMatch[1]; 

    // Handle missing SelectedOption and isAnswered
    if (!content.includes('const [selectedOption, setSelectedOption]')) {
        content = content.replace(
            /(const \[level, setLevel\] = useState\([^)]+\);)/,
            '$1\n    const [selectedOption, setSelectedOption] = useState(null);\n    const [isAnswered, setIsAnswered] = useState(false);'
        );
    } else if (!content.includes('isAnswered')) {
        content = content.replace(
            /const \[selectedOption, setSelectedOption\] = useState\([^)]+\);/,
            'const [selectedOption, setSelectedOption] = useState(null);\n    const [isAnswered, setIsAnswered] = useState(false);'
        );
    }
    
    content = content.replace(/const \[isAnswerClicked, setIsAnswerClicked\] = useState\([^)]+\);\n?/g, '');

    // Replace handleAnswerOptionClick
    const handlerRegex = /const handleAnswerOptionClick = \([^)]+\) => \{[\s\S]*?(?=const handleRetake = \(\) => \{)/;
    if (content.match(handlerRegex)) {
        const replacementHandler = `const handleAnswerOptionClick = (isCorrect, index) => {
        if (isAnswered) return;

        setSelectedOption(index);
        setIsAnswered(true);

        if (isCorrect) {
            setScore(score + 1);
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < ${dataObj}[level].length) {
                setCurrentQuestion(nextQuestion);
            } else {
                setShowScore(true);
            }
            setSelectedOption(null);
            setIsAnswered(false);
        }, 1500);
    };

    `;
        content = content.replace(handlerRegex, replacementHandler);
    }

    // Update handleRetake
    const retakeRegex = /(const handleRetake = \(\) => \{[\s\S]*?setShowScore\(false\);)/;
    if (content.match(retakeRegex) && !content.includes('setSelectedOption(null)')) {
        content = content.replace(retakeRegex, `$1\n        setSelectedOption(null);\n        setIsAnswered(false);`);
    }

    // Update handleNextLevel
    const nextLevelRegex = /(const handleNextLevel = \(\) => \{[\s\S]*?setShowScore\(false\);)/;
    if (content.match(nextLevelRegex) && !content.includes('setSelectedOption(null)')) {
        content = content.replace(nextLevelRegex, `$1\n        setSelectedOption(null);\n        setIsAnswered(false);`);
    }

    // Replace render block
    const sectionRegex = /<div className="answer-section">[\s\S]*?<\/button>\s*(?:\)|\})\)\}\s*<\/div>/;
    const targetBlock = `<div className="answer-section">
                {${dataObj}[level][currentQuestion].options.map((option, index) => {
                    let buttonStyle = { transition: 'background-color 0.3s ease' };
                    if (isAnswered) {
                        if (option.isCorrect) {
                            buttonStyle.backgroundColor = '#4CAF50';
                            buttonStyle.color = 'white';
                        } else if (index === selectedOption) {
                            buttonStyle.backgroundColor = '#f44336';
                            buttonStyle.color = 'white';
                        }
                    }

                    return (
                        <button 
                            key={index} 
                            onClick={() => handleAnswerOptionClick(option.isCorrect, index)}
                            style={buttonStyle}
                            disabled={isAnswered}
                        >
                        {option.text}
                        </button>
                    );
                })}
                </div>`;
    content = content.replace(sectionRegex, targetBlock);

    fs.writeFileSync(file, content);
    updatedCount++;
}

console.log('Successfully updated ' + updatedCount + ' files.');
