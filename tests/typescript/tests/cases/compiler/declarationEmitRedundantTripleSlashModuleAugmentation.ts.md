__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 15,
        "end": 20
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
                "name": "Original",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 52
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 53,
                "end": 55
              },
              "declare": false,
              "start": 34,
              "end": 55
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 27,
            "end": 55
          }
        ],
        "start": 21,
        "end": 57
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 57
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 58
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FooOptions",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 27
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 28,
          "end": 30
        },
        "declare": false,
        "start": 7,
        "end": 30
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 30
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 46,
        "end": 51
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
                "name": "Augmentation",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 87
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 88,
                "end": 90
              },
              "declare": false,
              "start": 65,
              "end": 90
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 58,
            "end": 90
          }
        ],
        "start": 52,
        "end": 92
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 31,
      "end": 92
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 93
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Original",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Original",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "importKind": "value",
          "start": 9,
          "end": 17
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Augmentation",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 31
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Augmentation",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 31
          },
          "importKind": "value",
          "start": 19,
          "end": 31
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 39,
        "end": 44
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 45
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "FooOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 70
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "FooOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 70
          },
          "importKind": "value",
          "start": 60,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./augmentation",
        "raw": "\"./augmentation\"",
        "start": 78,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 46,
      "end": 95
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 114
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "original",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 129
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Original",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 139
                  },
                  "typeArguments": null,
                  "start": 131,
                  "end": 139
                },
                "start": 129,
                "end": 139
              },
              "accessibility": null,
              "static": false,
              "start": 121,
              "end": 140
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "augmentation",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 157
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Augmentation",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 171
                  },
                  "typeArguments": null,
                  "start": 159,
                  "end": 171
                },
                "start": 157,
                "end": 171
              },
              "accessibility": null,
              "static": false,
              "start": 145,
              "end": 172
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "options",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 184
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FooOptions",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 196
                  },
                  "typeArguments": null,
                  "start": 186,
                  "end": 196
                },
                "start": 184,
                "end": 196
              },
              "accessibility": null,
              "static": false,
              "start": 177,
              "end": 197
            }
          ],
          "start": 115,
          "end": 199
        },
        "declare": false,
        "start": 103,
        "end": 199
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 96,
      "end": 199
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 199
}
```
