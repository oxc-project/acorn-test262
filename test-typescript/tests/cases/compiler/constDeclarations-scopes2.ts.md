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
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 20,
            "end": 28,
            "value": "string",
            "raw": "\"string\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 44,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
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
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 60,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 60,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 53,
                "end": 60
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
      "type": "ForStatement",
      "start": 76,
      "end": 162,
      "init": {
        "type": "VariableDeclaration",
        "start": 81,
        "end": 92,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 87,
            "end": 92,
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 91,
              "end": 92,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 94,
        "end": 100,
        "left": {
          "type": "Identifier",
          "start": 94,
          "end": 95,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 98,
          "end": 100,
          "value": 10,
          "raw": "10"
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
          "name": "n",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 143,
                  "end": 148,
                  "value": false,
                  "raw": "false"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 154,
            "end": 160,
            "expression": {
              "type": "AssignmentExpression",
              "start": 154,
              "end": 159,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 158,
                "end": 159,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
