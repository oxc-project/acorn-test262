recursivelyExpandingUnionNoStackoverflow.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 59,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "N",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 30,
        "end": 58,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 30,
            "end": 31,
            "typeName": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSIndexedAccessType",
            "start": 34,
            "end": 58,
            "indexType": {
              "type": "TSTypeReference",
              "start": 56,
              "end": 57,
              "typeName": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSMappedType",
              "start": 34,
              "end": 55,
              "constraint": {
                "type": "TSTypeReference",
                "start": 42,
                "end": 43,
                "typeName": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              },
              "key": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "P",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 53,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 47,
                  "end": 53,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 48,
                      "end": 49,
                      "typeName": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 49,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 51,
                      "end": 52,
                      "typeName": {
                        "type": "Identifier",
                        "start": 51,
                        "end": 52,
                        "decorators": [],
                        "name": "K",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "decorators": [],
                  "name": "N",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6,
        "end": 27,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 7,
            "end": 8,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 7,
              "end": 8,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 26,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 20,
              "end": 26
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 61,
      "end": 85,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 70,
        "end": 84,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 71,
          "end": 84,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 72,
              "end": 78
            },
            {
              "type": "TSLiteralType",
              "start": 80,
              "end": 83,
              "literal": {
                "type": "Literal",
                "start": 80,
                "end": 83,
                "raw": "\"M\"",
                "value": "M"
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 70,
          "end": 71,
          "decorators": [],
          "name": "N",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
