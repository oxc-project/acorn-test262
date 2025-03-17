__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 74,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 74,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 27,
          "decorators": [],
          "name": "LionRequestInit",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSImportType",
          "start": 30,
          "end": 73,
          "argument": {
            "type": "TSLiteralType",
            "start": 37,
            "end": 56,
            "literal": {
              "type": "Literal",
              "start": 37,
              "end": 56,
              "raw": "'../types/types.js'",
              "value": "../types/types.js"
            }
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "start": 58,
            "end": 73,
            "decorators": [],
            "name": "LionRequestInit",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 63,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 62,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 62,
        "body": {
          "type": "TSInterfaceBody",
          "start": 33,
          "end": 62,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 39,
              "end": 60,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 43,
                "decorators": [],
                "name": "body",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 59,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 46,
                  "end": 59,
                  "types": [
                    {
                      "type": "TSNullKeyword",
                      "start": 46,
                      "end": 50
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 53,
                      "end": 59,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 59,
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
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
          "end": 32,
          "decorators": [],
          "name": "LionRequestInit",
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
