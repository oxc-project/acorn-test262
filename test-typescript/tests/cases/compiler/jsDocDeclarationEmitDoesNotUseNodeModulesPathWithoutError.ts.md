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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 74,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 27,
          "name": "LionRequestInit",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
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
              "value": "../types/types.js",
              "raw": "'../types/types.js'"
            }
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "start": 58,
            "end": 73,
            "name": "LionRequestInit",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 62,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 32,
          "name": "LionRequestInit",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 33,
          "end": 62,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 39,
              "end": 60,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 43,
                "name": "body",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 59,
                        "name": "Object",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
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
