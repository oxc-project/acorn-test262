__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 60,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 60,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "decorators": [],
          "name": "StringKeyOf",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 23,
          "end": 29,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 24,
              "end": 28,
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 28,
                "decorators": [],
                "name": "TObj",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 32,
          "end": 59,
          "typeName": {
            "type": "Identifier",
            "start": 32,
            "end": 39,
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 39,
            "end": 59,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              },
              {
                "type": "TSTypeOperator",
                "start": 48,
                "end": 58,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 54,
                  "end": 58,
                  "typeName": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 58,
                    "decorators": [],
                    "name": "TObj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
  "end": 83,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 83,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 83,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 24,
          "decorators": [],
          "name": "RowToColumns",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 24,
          "end": 34,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 25,
              "end": 33,
              "name": {
                "type": "Identifier",
                "start": 25,
                "end": 33,
                "decorators": [],
                "name": "TColumns",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 37,
          "end": 83,
          "key": {
            "type": "Identifier",
            "start": 44,
            "end": 49,
            "decorators": [],
            "name": "TName",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 53,
            "end": 74,
            "typeName": {
              "type": "Identifier",
              "start": 53,
              "end": 64,
              "decorators": [],
              "name": "StringKeyOf",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 64,
              "end": 74,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 65,
                  "end": 73,
                  "typeName": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 73,
                    "decorators": [],
                    "name": "TColumns",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 77,
            "end": 80
          },
          "optional": false,
          "readonly": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
