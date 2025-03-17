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
          "name": "StringKeyOf",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "TObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "name": "Extract",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                    "name": "TObj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
          "name": "RowToColumns",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "TColumns",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 74,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 49,
              "name": "TName",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 53,
              "end": 74,
              "typeName": {
                "type": "Identifier",
                "start": 53,
                "end": 64,
                "name": "StringKeyOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "TColumns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 77,
            "end": 80
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeReference",
            "start": 53,
            "end": 74,
            "typeName": {
              "type": "Identifier",
              "start": 53,
              "end": 64,
              "name": "StringKeyOf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "TColumns",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "key": {
            "type": "Identifier",
            "start": 44,
            "end": 49,
            "name": "TName",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
