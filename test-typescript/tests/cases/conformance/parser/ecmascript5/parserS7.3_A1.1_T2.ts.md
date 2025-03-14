parserS7.3_A1.1_T2.ts
```json
{
  "type": "Program",
  "start": 308,
  "end": 398,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 308,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 317,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 313,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 316,
            "end": 317,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 319,
      "end": 396,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 332,
        "end": 396,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 336,
            "end": 394,
            "expression": {
              "type": "CallExpression",
              "start": 336,
              "end": 393,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 343,
                  "end": 392,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 343,
                    "end": 386,
                    "raw": "'#1: var\\\\nx\\\\n=\\\\n1\\\\n; x === 1. Actual: '",
                    "value": "#1: var\\nx\\n=\\n1\\n; x === 1. Actual: "
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 391,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 336,
                "end": 342,
                "decorators": [],
                "name": "$ERROR",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 323,
        "end": 330,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 329,
          "end": 330,
          "raw": "1",
          "value": 1
        }
      }
    }
  ],
  "sourceType": "script"
}
```
