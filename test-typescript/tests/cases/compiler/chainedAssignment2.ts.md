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
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
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
      "start": 15,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
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
      "start": 30,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 44,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 44,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 44,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 37,
                "end": 44
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
      "start": 46,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 57,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 57,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 57,
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 57,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 59,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 72,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 72,
                  "name": "RegExp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 75,
      "end": 100,
      "expression": {
        "type": "AssignmentExpression",
        "start": 75,
        "end": 99,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 95,
                  "end": 99,
                  "value": null,
                  "raw": "null"
                }
              }
            }
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
