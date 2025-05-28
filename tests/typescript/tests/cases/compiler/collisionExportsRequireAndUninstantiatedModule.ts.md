__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 247,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 69,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 69,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 21,
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 22,
          "end": 69,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 41,
              "end": 67,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 48,
                "end": 67,
                "id": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 60,
                  "end": 67,
                  "body": []
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 70,
      "end": 123,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 77,
        "end": 123,
        "id": {
          "type": "Identifier",
          "start": 86,
          "end": 89,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 91,
          "end": 102,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 93,
            "end": 102,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 93,
              "end": 102,
              "left": {
                "type": "Identifier",
                "start": 93,
                "end": 100,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 103,
          "end": 123,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 109,
              "end": 121,
              "argument": {
                "type": "Literal",
                "start": 116,
                "end": 120,
                "value": null,
                "raw": "null"
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 192,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 131,
        "end": 192,
        "id": {
          "type": "Identifier",
          "start": 138,
          "end": 145,
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 146,
          "end": 192,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 164,
              "end": 190,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 171,
                "end": 190,
                "id": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 183,
                  "end": 190,
                  "body": []
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 193,
      "end": 247,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 200,
        "end": 247,
        "id": {
          "type": "Identifier",
          "start": 209,
          "end": 213,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 215,
          "end": 226,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 217,
            "end": 226,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 217,
              "end": 226,
              "left": {
                "type": "Identifier",
                "start": 217,
                "end": 224,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 225,
                "end": 226,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 227,
          "end": 247,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 233,
              "end": 245,
              "argument": {
                "type": "Literal",
                "start": 240,
                "end": 244,
                "value": null,
                "raw": "null"
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
