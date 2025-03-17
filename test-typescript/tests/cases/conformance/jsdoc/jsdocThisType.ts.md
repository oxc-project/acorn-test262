__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 45,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 45,
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 45,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 43,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 30,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 30,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 32,
                  "end": 42,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 38,
                      "end": 42
                    }
                  },
                  "typeParameters": null
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 47,
      "end": 83,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 54,
        "end": 83,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 60,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 63,
          "end": 82,
          "params": [
            {
              "type": "Identifier",
              "start": 64,
              "end": 73,
              "decorators": [],
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 68,
                "end": 73,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 70,
                  "end": 73,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 73,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 75,
            "end": 82,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 78,
              "end": 82
            }
          },
          "typeParameters": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
