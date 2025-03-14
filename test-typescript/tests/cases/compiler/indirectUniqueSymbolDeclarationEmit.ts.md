__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 26,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 25,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 17,
              "end": 25,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 17,
                "end": 23,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 53,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 53,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 40,
            "end": 52,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 44,
              "end": 52,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 44,
                "end": 50,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 54,
      "end": 87,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 75,
        "decorators": [],
        "name": "rand",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 77,
        "end": 86,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 79,
          "end": 86
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 88,
      "end": 138,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 95,
        "end": 138,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 108,
          "end": 138,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 114,
              "end": 136,
              "argument": {
                "type": "ConditionalExpression",
                "start": 121,
                "end": 135,
                "alternate": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "consequent": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "test": {
                  "type": "CallExpression",
                  "start": 121,
                  "end": 127,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 125,
                    "decorators": [],
                    "name": "rand",
                    "optional": false
                  },
                  "optional": false
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 104,
          "end": 105,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
