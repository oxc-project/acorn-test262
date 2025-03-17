__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 164,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 10,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 20,
            "end": 28,
            "raw": "\"string\"",
            "value": "string"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 44,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
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
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 60,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 60,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 53,
                "end": 60
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
      "type": "ForStatement",
      "start": 76,
      "end": 162,
      "body": {
        "type": "BlockStatement",
        "start": 110,
        "end": 162,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 133,
            "end": 149,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 139,
                "end": 148,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 143,
                  "end": 148,
                  "raw": "false",
                  "value": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 154,
            "end": 160,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 154,
              "end": 159,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 158,
                "end": 159,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 81,
        "end": 92,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 87,
            "end": 92,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 91,
              "end": 92,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 94,
        "end": 100,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 94,
          "end": 95,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 98,
          "end": 100,
          "raw": "10",
          "value": 10
        }
      },
      "update": {
        "type": "AssignmentExpression",
        "start": 102,
        "end": 107,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 102,
          "end": 103,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
