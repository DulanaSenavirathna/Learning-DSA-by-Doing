# Day 01 - Problem 1: Find Maximum in Array

## 🧠 Problem Description

**Given** an array of numbers,  
**Return** the largest number in the array.

Example:
Input: [3, 7, 2, 9, 5]  
Output: 9

🔍 Step 1: Understand the Problem
---------------------------------

*   **Input**: An array of numbers (\[number\])
    
*   **Output**: A single number (maximum in array)
    
*   **Edge Cases**:
    
    *   Empty array → return null?
        
    *   Negative numbers?
        

🧠 Step 2: Think With Examples
------------------------------

InputExpected Output\[3, 7, 2, 9, 5\]9\[-1, -5, -8\]-1\[\]null\[10\]10

✍️ Step 3: Pseudocode
---------------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   sqlCopyEdit- If array is empty, return null  - Initialize max = arr[0]  - Loop through the array:      - If current element > max        - update max  - Return max   `

💻 Step 4: My Solution (Code)
-----------------------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   jsCopyEditfunction findMax(arr) {    if (arr.length === 0) return null;    let max = arr[0];    for (let i = 1; i < arr.length; i++) {      if (arr[i] > max) max = arr[i];    }    return max;  }   `

🧪 Step 5: Test Cases
---------------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   jsCopyEditconsole.log(findMax([3, 7, 2, 9, 5])); // 9  console.log(findMax([-1, -5, -8]));    // -1  console.log(findMax([]));              // null  console.log(findMax([10]));            // 10   `

🤔 What I Learned
-----------------

*   How to handle edge cases
    
*   Importance of writing pseudocode first
    
*   I got stuck when \_\_\_ but solved it by \_\_\_
    

🔁 Can I Improve This?
----------------------

*   Use .reduce() method?
    
*   Add TypeScript types?
    
*   What if input isn’t an array?