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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                "type": "TSVoidKeyword",
                "start": 22,
                "end": 26
              },
              "start": 20,
              "end": 26
            },
            "start": 18,
            "end": 27
          }
        ],
        "start": 12,
        "end": 29
      },
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 31
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 30,
        "end": 33
      },
      "directive": null,
      "start": 30,
      "end": 34
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 48
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 73
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
                        "type": "TSVoidKeyword",
                        "start": 88,
                        "end": 92
                      },
                      "start": 86,
                      "end": 92
                    },
                    "start": 84,
                    "end": 93
                  }
                ],
                "start": 74,
                "end": 99
              },
              "declare": false,
              "start": 62,
              "end": 99
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 55,
            "end": 99
          }
        ],
        "start": 49,
        "end": 101
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 36,
      "end": 101
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 105
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 107
          },
          "optional": false,
          "computed": false,
          "start": 103,
          "end": 107
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 103,
        "end": 109
      },
      "directive": null,
      "start": 103,
      "end": 110
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
