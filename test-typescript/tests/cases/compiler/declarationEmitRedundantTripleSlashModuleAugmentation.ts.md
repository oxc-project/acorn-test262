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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "foo",
        "raw": "\"foo\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 57,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 55,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 34,
              "end": 55,
              "id": {
                "type": "Identifier",
                "start": 44,
                "end": 52,
                "name": "Original",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 53,
                "end": 55,
                "body": []
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
      "kind": "module",
      "declare": true,
      "global": false
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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 30,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 27,
          "name": "FooOptions",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 28,
          "end": 30,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 31,
      "end": 92,
      "id": {
        "type": "Literal",
        "start": 46,
        "end": 51,
        "value": "foo",
        "raw": "\"foo\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 52,
        "end": 92,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 58,
            "end": 90,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 65,
              "end": 90,
              "id": {
                "type": "Identifier",
                "start": 75,
                "end": 87,
                "name": "Augmentation",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 88,
                "end": 90,
                "body": []
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
      "kind": "module",
      "declare": true,
      "global": false
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
  "end": 200,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 45,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "name": "Original",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "name": "Original",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 19,
          "end": 31,
          "imported": {
            "type": "Identifier",
            "start": 19,
            "end": 31,
            "name": "Augmentation",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 31,
            "name": "Augmentation",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 44,
        "value": "foo",
        "raw": "\"foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 46,
      "end": 95,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 70,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 70,
            "name": "FooOptions",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 70,
            "name": "FooOptions",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 78,
        "end": 94,
        "value": "./augmentation",
        "raw": "\"./augmentation\""
      },
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 96,
      "end": 199,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 103,
        "end": 199,
        "id": {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "name": "_",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 115,
          "end": 199,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 121,
              "end": 140,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 121,
                "end": 129,
                "name": "original",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 129,
                "end": 139,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 131,
                  "end": 139,
                  "typeName": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 139,
                    "name": "Original",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 145,
              "end": 172,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 145,
                "end": 157,
                "name": "augmentation",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 157,
                "end": 171,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 159,
                  "end": 171,
                  "typeName": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 171,
                    "name": "Augmentation",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 177,
              "end": 197,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 177,
                "end": 184,
                "name": "options",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 184,
                "end": 196,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 186,
                  "end": 196,
                  "typeName": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 196,
                    "name": "FooOptions",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
