__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ForStatement",
      "start": 20,
      "end": 104,
      "init": {
        "type": "VariableDeclaration",
        "start": 24,
        "end": 33,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 28,
            "end": 33,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 32,
              "end": 33,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 35,
        "end": 41,
        "left": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 39,
          "end": 41,
          "value": 30,
          "raw": "30"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 43,
        "end": 46,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 48,
        "end": 104,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 56,
            "end": 69,
            "expression": {
              "type": "AssignmentExpression",
              "start": 56,
              "end": 68,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 60,
                "end": 68,
                "left": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "start": 64,
                  "end": 68,
                  "value": 1000,
                  "raw": "1000"
                }
              }
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
