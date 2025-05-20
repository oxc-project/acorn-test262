__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
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
      "start": 12,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 22,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
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
      "start": 24,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 34,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 34,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 31,
                "end": 34
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
      "start": 36,
      "end": 52,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 36,
        "end": 51,
        "operator": "**",
        "left": {
          "type": "NewExpression",
          "start": 36,
          "end": 41,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 45,
          "end": 51,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
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
      "start": 53,
      "end": 73,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 53,
        "end": 72,
        "operator": "**",
        "left": {
          "type": "NewExpression",
          "start": 53,
          "end": 58,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 62,
          "end": 72,
          "operator": "**",
          "left": {
            "type": "NewExpression",
            "start": 62,
            "end": 67,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "right": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
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
      "start": 74,
      "end": 92,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 74,
        "end": 91,
        "arguments": [],
        "callee": {
          "type": "BinaryExpression",
          "start": 79,
          "end": 90,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "BinaryExpression",
            "start": 84,
            "end": 90,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
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
