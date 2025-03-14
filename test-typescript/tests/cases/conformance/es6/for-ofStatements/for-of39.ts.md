__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 100,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 57,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 24,
            "decorators": [],
            "name": "map",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 27,
            "end": 57,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 35,
                "end": 56,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 36,
                    "end": 46,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 37,
                        "end": 39,
                        "raw": "\"\"",
                        "value": ""
                      },
                      {
                        "type": "Literal",
                        "start": 41,
                        "end": 45,
                        "raw": "true",
                        "value": true
                      }
                    ]
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 48,
                    "end": 55,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 49,
                        "end": 51,
                        "raw": "\"\"",
                        "value": ""
                      },
                      {
                        "type": "Literal",
                        "start": 53,
                        "end": 54,
                        "raw": "0",
                        "value": 0
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
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
      "start": 59,
      "end": 100,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 100,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 89,
            "end": 91,
            "expression": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "k",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 96,
            "end": 98,
            "expression": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "v",
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 74,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 74,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 68,
              "end": 74,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "decorators": [],
                  "name": "k",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
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
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 78,
        "end": 81,
        "decorators": [],
        "name": "map",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
