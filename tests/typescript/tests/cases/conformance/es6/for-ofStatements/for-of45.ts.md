__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
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
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 25,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 58,
          "definite": false,
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
                        "raw": "\"\"",
                        "value": ""
                      },
                      {
                        "type": "Literal",
                        "start": 51,
                        "end": 55,
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
              "start": 41,
              "end": 44,
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
      "start": 60,
      "end": 110,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 93,
        "end": 110,
        "body": [
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
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 106,
            "end": 108,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 65,
        "end": 84,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 66,
            "end": 72,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 70,
              "end": 72,
              "raw": "\"\"",
              "value": ""
            },
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 74,
            "end": 83,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 78,
              "end": 83,
              "raw": "false",
              "value": false
            },
            "typeAnnotation": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 88,
        "end": 91,
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
