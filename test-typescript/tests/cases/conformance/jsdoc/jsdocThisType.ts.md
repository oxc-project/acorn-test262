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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 45,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 45,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 43,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 30,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 30,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 32,
                  "end": 42,
                  "typeParameters": null,
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
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 47,
      "end": 83,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 54,
        "end": 83,
        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 60,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 63,
          "end": 82,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 64,
              "end": 73,
              "name": "this",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 68,
                "end": 73,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 70,
                  "end": 73,
                  "typeName": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 73,
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
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
