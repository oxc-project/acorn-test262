__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 25,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 25,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 18,
                "end": 25
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 59,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 58,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 34,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 37,
            "end": 58,
            "callee": {
              "type": "Identifier",
              "start": 41,
              "end": 44,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 45,
                "end": 57,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 46,
                    "end": 56,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 47,
                        "end": 49,
                        "value": "",
                        "raw": "\"\""
                      },
                      {
                        "type": "Literal",
                        "start": 51,
                        "end": 55,
                        "value": true,
                        "raw": "true"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 60,
      "end": 102,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 65,
        "end": 76,
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "RestElement",
            "start": 69,
            "end": 75,
            "decorators": [],
            "argument": {
              "type": "ArrayPattern",
              "start": 72,
              "end": 75,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeAnnotation": null,
            "value": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 102,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 91,
            "end": 93,
            "expression": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 98,
            "end": 100,
            "expression": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
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
