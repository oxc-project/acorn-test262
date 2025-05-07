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
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 130,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 18,
            "end": 56,
            "body": {
              "type": "TSInterfaceBody",
              "start": 30,
              "end": 56,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 40,
                  "end": 50,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 44,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "raw": "'a'",
                        "value": "a",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 62,
            "end": 100,
            "body": {
              "type": "TSInterfaceBody",
              "start": 74,
              "end": 100,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 84,
                  "end": 94,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 88,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "raw": "'b'",
                        "value": "b",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 106,
            "end": 128,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 113,
              "end": 128,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 122,
                "end": 127,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 122,
                    "end": 123,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 123,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 126,
                    "end": 127,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 127,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSExportAssignment",
      "start": 132,
      "end": 143,
      "expression": {
        "type": "Identifier",
        "start": 141,
        "end": 142,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
