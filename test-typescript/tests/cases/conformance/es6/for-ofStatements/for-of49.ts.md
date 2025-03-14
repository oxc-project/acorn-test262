for-of49.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 118,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 29,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 41,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 41,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 34,
                "end": 41
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 50,
            "decorators": [],
            "name": "map",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 53,
            "end": 74,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 61,
                "end": 73,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 62,
                    "end": 72,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 63,
                        "end": 65,
                        "raw": "\"\"",
                        "value": ""
                      },
                      {
                        "type": "Literal",
                        "start": 67,
                        "end": 71,
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
              "start": 57,
              "end": 60,
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
      "start": 76,
      "end": 118,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 101,
        "end": 118,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 107,
            "end": 109,
            "expression": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "decorators": [],
              "name": "k",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 114,
            "end": 116,
            "expression": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "v",
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 81,
        "end": 92,
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "k",
            "optional": false
          },
          {
            "type": "RestElement",
            "start": 85,
            "end": 91,
            "argument": {
              "type": "ArrayPattern",
              "start": 88,
              "end": 91,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ],
              "optional": false
            },
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false
      },
      "right": {
        "type": "Identifier",
        "start": 96,
        "end": 99,
        "decorators": [],
        "name": "map",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
