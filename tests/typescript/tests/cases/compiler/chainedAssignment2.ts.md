__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
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
            "name": "a",
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
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
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
      "start": 30,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 44,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 44,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 37,
                "end": 44
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
      "start": 46,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 57,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 57,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 57,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 57,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 57,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "start": 59,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 72,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 72,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 72,
                  "decorators": [],
                  "name": "RegExp",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "start": 75,
      "end": 100,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 75,
        "end": 99,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 79,
          "end": 99,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "AssignmentExpression",
            "start": 83,
            "end": 99,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "AssignmentExpression",
              "start": 87,
              "end": 99,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "AssignmentExpression",
                "start": 91,
                "end": 99,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 95,
                  "end": 99,
                  "raw": "null",
                  "value": null
                }
              }
            }
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
