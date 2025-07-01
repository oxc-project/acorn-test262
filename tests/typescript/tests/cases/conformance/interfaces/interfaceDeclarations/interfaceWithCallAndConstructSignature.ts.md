__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 24,
                "end": 30
              },
              "start": 22,
              "end": 30
            },
            "start": 20,
            "end": 31
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 44,
                "end": 47
              },
              "start": 42,
              "end": 47
            },
            "start": 36,
            "end": 48
          }
        ],
        "start": 14,
        "end": 50
      },
      "declare": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 62
                },
                "typeArguments": null,
                "start": 59,
                "end": 62
              },
              "start": 57,
              "end": 62
            },
            "start": 56,
            "end": 62
          },
          "init": null,
          "definite": false,
          "start": 56,
          "end": 62
        }
      ],
      "declare": false,
      "start": 52,
      "end": 63
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 69
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 72,
            "end": 75
          },
          "definite": false,
          "start": 68,
          "end": 75
        }
      ],
      "declare": false,
      "start": 64,
      "end": 76
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 83
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "typeArguments": null,
            "arguments": [],
            "start": 86,
            "end": 93
          },
          "definite": false,
          "start": 81,
          "end": 93
        }
      ],
      "declare": false,
      "start": 77,
      "end": 94
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 94
}
```
