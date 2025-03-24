__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 143,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 130,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 18,
            "end": 56,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 30,
              "end": 56,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 40,
                  "end": 50,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 44,
                    "name": "kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 46,
                      "end": 49,
                      "literal": {
                        "type": "Literal",
                        "start": 46,
                        "end": 49,
                        "value": "a",
                        "raw": "'a'"
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
          {
            "type": "TSInterfaceDeclaration",
            "start": 62,
            "end": 100,
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 74,
              "end": 100,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 84,
                  "end": 94,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 88,
                    "name": "kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 90,
                      "end": 93,
                      "literal": {
                        "type": "Literal",
                        "start": 90,
                        "end": 93,
                        "value": "b",
                        "raw": "'b'"
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
          {
            "type": "ExportNamedDeclaration",
            "start": 106,
            "end": 128,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 113,
              "end": 128,
              "id": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 122,
                "end": 127,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 122,
                    "end": 123,
                    "typeName": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 123,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 126,
                    "end": 127,
                    "typeName": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 127,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 132,
      "end": 143,
      "expression": {
        "type": "Identifier",
        "start": 141,
        "end": 142,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
