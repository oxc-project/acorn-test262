__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 50,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 50,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 20,
            "end": 31,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 24,
                "end": 30
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 36,
            "end": 48,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 47,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 44,
                "end": 47
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 62,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 62,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 59,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 62,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
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
      "start": 64,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 72,
            "end": 75,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 83,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 86,
            "end": 93,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "f",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
