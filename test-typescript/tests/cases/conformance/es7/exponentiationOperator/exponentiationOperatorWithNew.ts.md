__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 93,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 11,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 11,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 11,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 8,
                "end": 11
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
      "start": 13,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 23,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 23,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 20,
                "end": 23
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
      "start": 25,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 35,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 35,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
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
      "type": "ExpressionStatement",
      "start": 37,
      "end": 53,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 37,
        "end": 52,
        "operator": "**",
        "left": {
          "type": "NewExpression",
          "start": 37,
          "end": 42,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 46,
          "end": 52,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 74,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 54,
        "end": 73,
        "operator": "**",
        "left": {
          "type": "NewExpression",
          "start": 54,
          "end": 59,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 63,
          "end": 73,
          "operator": "**",
          "left": {
            "type": "NewExpression",
            "start": 63,
            "end": 68,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "right": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 93,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 75,
        "end": 92,
        "arguments": [],
        "callee": {
          "type": "BinaryExpression",
          "start": 80,
          "end": 91,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 80,
            "end": 81,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "BinaryExpression",
            "start": 85,
            "end": 91,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
