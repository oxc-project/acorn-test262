__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 57,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 57,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 55,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 34,
              "end": 55,
              "body": {
                "type": "TSInterfaceBody",
                "start": 53,
                "end": 55,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 44,
                "end": 52,
                "decorators": [],
                "name": "Original",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"foo\"",
        "value": "foo",
        "regex": null,
        "bigint": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 30,
        "body": {
          "type": "TSInterfaceBody",
          "start": 28,
          "end": 30,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 27,
          "decorators": [],
          "name": "FooOptions",
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
      "type": "TSModuleDeclaration",
      "start": 31,
      "end": 92,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 52,
        "end": 92,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 58,
            "end": 90,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 65,
              "end": 90,
              "body": {
                "type": "TSInterfaceBody",
                "start": 88,
                "end": 90,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 75,
                "end": 87,
                "decorators": [],
                "name": "Augmentation",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 46,
        "end": 51,
        "raw": "\"foo\"",
        "value": "foo",
        "regex": null,
        "bigint": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 199,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 45,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 44,
        "raw": "\"foo\"",
        "value": "foo",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "Original",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "Original",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 19,
          "end": 31,
          "imported": {
            "type": "Identifier",
            "start": 19,
            "end": 31,
            "decorators": [],
            "name": "Augmentation",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 31,
            "decorators": [],
            "name": "Augmentation",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 46,
      "end": 95,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 78,
        "end": 94,
        "raw": "\"./augmentation\"",
        "value": "./augmentation",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 70,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 70,
            "decorators": [],
            "name": "FooOptions",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 70,
            "decorators": [],
            "name": "FooOptions",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 96,
      "end": 199,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 103,
        "end": 199,
        "body": {
          "type": "TSInterfaceBody",
          "start": 115,
          "end": 199,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 121,
              "end": 140,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 121,
                "end": 129,
                "decorators": [],
                "name": "original",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 129,
                "end": 139,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 131,
                  "end": 139,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 139,
                    "decorators": [],
                    "name": "Original",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 145,
              "end": 172,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 145,
                "end": 157,
                "decorators": [],
                "name": "augmentation",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 157,
                "end": 171,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 159,
                  "end": 171,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 171,
                    "decorators": [],
                    "name": "Augmentation",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 177,
              "end": 197,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 177,
                "end": 184,
                "decorators": [],
                "name": "options",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 184,
                "end": 196,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 186,
                  "end": 196,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 196,
                    "decorators": [],
                    "name": "FooOptions",
                    "optional": false,
                    "typeAnnotation": null
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
          "start": 113,
          "end": 114,
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": null
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
