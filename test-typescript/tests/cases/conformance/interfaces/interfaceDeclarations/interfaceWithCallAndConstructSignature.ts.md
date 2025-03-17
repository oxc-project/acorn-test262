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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 50,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 20,
            "end": 31,
            "typeParameters": null,
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
            "typeParameters": null,
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 62,
            "name": "f",
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
                  "name": "Foo",
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
      "start": 64,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 72,
            "end": 75,
            "callee": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "f",
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 83,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 86,
            "end": 93,
            "callee": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
