__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 313,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 316,
            "end": 317,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 319,
      "end": 396,
      "test": {
        "type": "BinaryExpression",
        "start": 323,
        "end": 330,
        "left": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 329,
          "end": 330,
          "value": 1,
          "raw": "1"
        }
      },
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
              "callee": {
                "type": "Identifier",
                "start": 336,
                "end": 342,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 343,
                  "end": 392,
                  "left": {
                    "type": "Literal",
                    "start": 343,
                    "end": 386,
                    "value": "#1: var\\nx\\n=\\n1\\n; x === 1. Actual: ",
                    "raw": "'#1: var\\\\nx\\\\n=\\\\n1\\\\n; x === 1. Actual: '"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 391,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
