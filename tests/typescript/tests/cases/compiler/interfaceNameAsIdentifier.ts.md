__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 29,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 18,
            "end": 27,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 26,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 22,
                "end": 26
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 34,
      "expression": {
        "type": "CallExpression",
        "start": 30,
        "end": 33,
        "callee": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 36,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 45,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 46,
        "end": 98,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 52,
            "end": 96,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 59,
              "end": 96,
              "id": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 71,
                "end": 96,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 81,
                    "end": 90,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 83,
                      "end": 89,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 85,
                        "end": 89
                      }
                    }
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 107,
      "expression": {
        "type": "CallExpression",
        "start": 100,
        "end": 106,
        "callee": {
          "type": "MemberExpression",
          "start": 100,
          "end": 104,
          "object": {
            "type": "Identifier",
            "start": 100,
            "end": 102,
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
