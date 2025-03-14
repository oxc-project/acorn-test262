for-of45.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 126,
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
      "end": 126,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 109,
        "end": 126,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 115,
            "end": 117,
            "expression": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "k",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 122,
            "end": 124,
            "expression": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
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
        "end": 100,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 82,
            "end": 88,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "k",
              "optional": false
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 86,
              "end": 88,
              "raw": "\"\"",
              "value": ""
            }
          },
          {
            "type": "AssignmentPattern",
            "start": 90,
            "end": 99,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 94,
              "end": 99,
              "raw": "false",
              "value": false
            }
          }
        ],
        "optional": false
      },
      "right": {
        "type": "Identifier",
        "start": 104,
        "end": 107,
        "decorators": [],
        "name": "map",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
