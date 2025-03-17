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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 26,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 25,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 17,
              "end": 25,
              "callee": {
                "type": "Identifier",
                "start": 17,
                "end": 23,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 53,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 53,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 40,
            "end": 52,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 44,
              "end": 52,
              "callee": {
                "type": "Identifier",
                "start": 44,
                "end": 50,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSDeclareFunction",
      "start": 54,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 75,
        "name": "rand",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 95,
        "end": 138,
        "id": {
          "type": "Identifier",
          "start": 104,
          "end": 105,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
                "test": {
                  "type": "CallExpression",
                  "start": 121,
                  "end": 127,
                  "callee": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 125,
                    "name": "rand",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "consequent": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "alternate": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
