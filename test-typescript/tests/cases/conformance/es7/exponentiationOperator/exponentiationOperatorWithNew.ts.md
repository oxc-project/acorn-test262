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
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 11,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 11,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 8,
                "end": 11
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 23,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 23,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 20,
                "end": 23
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 35,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 35,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 53,
      "expression": {
        "type": "BinaryExpression",
        "start": 37,
        "end": 52,
        "left": {
          "type": "NewExpression",
          "start": 37,
          "end": 42,
          "callee": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 46,
          "end": 52,
          "left": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "**",
          "right": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 74,
      "expression": {
        "type": "BinaryExpression",
        "start": 54,
        "end": 73,
        "left": {
          "type": "NewExpression",
          "start": 54,
          "end": 59,
          "callee": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 63,
          "end": 73,
          "left": {
            "type": "NewExpression",
            "start": 63,
            "end": 68,
            "callee": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "operator": "**",
          "right": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 93,
      "expression": {
        "type": "NewExpression",
        "start": 75,
        "end": 92,
        "callee": {
          "type": "BinaryExpression",
          "start": 80,
          "end": 91,
          "left": {
            "type": "Identifier",
            "start": 80,
            "end": 81,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "**",
          "right": {
            "type": "BinaryExpression",
            "start": 85,
            "end": 91,
            "left": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
