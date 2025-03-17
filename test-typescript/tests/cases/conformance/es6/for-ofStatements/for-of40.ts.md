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
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 23,
            "name": "map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 26,
            "end": 47,
            "callee": {
              "type": "Identifier",
              "start": 30,
              "end": 33,
              "name": "Map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                        "value": "",
                        "raw": "\"\""
                      },
                      {
                        "type": "Literal",
                        "start": 40,
                        "end": 44,
                        "value": true,
                        "raw": "true"
                      }
                    ]
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 49,
      "end": 103,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 54,
        "end": 77,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 58,
            "end": 77,
            "id": {
              "type": "ArrayPattern",
              "start": 58,
              "end": 77,
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 59,
                  "end": 65,
                  "left": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 63,
                    "end": 65,
                    "value": "",
                    "raw": "\"\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 67,
                  "end": 76,
                  "left": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 71,
                    "end": 76,
                    "value": false,
                    "raw": "false"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 81,
        "end": 84,
        "name": "map",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 103,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 92,
            "end": 94,
            "expression": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 99,
            "end": 101,
            "expression": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
