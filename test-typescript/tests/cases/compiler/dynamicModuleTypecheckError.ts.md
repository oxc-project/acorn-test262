dynamicModuleTypecheckError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ForStatement",
      "start": 20,
      "end": 104,
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
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 60,
                "end": 68,
                "operator": "*",
                "left": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 64,
                  "end": 68,
                  "raw": "1000",
                  "value": 1000
                }
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 24,
        "end": 33,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 28,
            "end": 33,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 32,
              "end": 33,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 35,
        "end": 41,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 39,
          "end": 41,
          "raw": "30",
          "value": 30
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 43,
        "end": 46,
        "argument": {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    }
  ],
  "sourceType": "script"
}
```
