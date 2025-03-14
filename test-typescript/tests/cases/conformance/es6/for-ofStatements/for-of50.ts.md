for-of50.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 92,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 23,
            "decorators": [],
            "name": "map",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 26,
            "end": 47,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 34,
                "end": 46,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 35,
                    "end": 45,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 36,
                        "end": 38,
                        "raw": "\"\"",
                        "value": ""
                      },
                      {
                        "type": "Literal",
                        "start": 40,
                        "end": 44,
                        "raw": "true",
                        "value": true
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 30,
              "end": 33,
              "decorators": [],
              "name": "Map",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 49,
      "end": 92,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 75,
        "end": 92,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 81,
            "end": 83,
            "expression": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "k",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 88,
            "end": 90,
            "expression": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "v",
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 54,
        "end": 66,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 60,
            "end": 66,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 60,
              "end": 66,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "decorators": [],
                  "name": "k",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ],
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "Identifier",
        "start": 70,
        "end": 73,
        "decorators": [],
        "name": "map",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
