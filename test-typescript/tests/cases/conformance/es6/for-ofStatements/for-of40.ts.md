__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 103,
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
            "optional": false,
            "typeAnnotation": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 49,
      "end": 103,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 103,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 92,
            "end": 94,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 99,
            "end": 101,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 54,
        "end": 77,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 58,
            "end": 77,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 58,
              "end": 77,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 59,
                  "end": 65,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 63,
                    "end": 65,
                    "raw": "\"\"",
                    "value": ""
                  },
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 67,
                  "end": 76,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 71,
                    "end": 76,
                    "raw": "false",
                    "value": false
                  },
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 81,
        "end": 84,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
