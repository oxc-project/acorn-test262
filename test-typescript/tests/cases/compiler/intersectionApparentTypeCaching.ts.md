__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 169,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 105,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 64,
        "decorators": [],
        "name": "TX",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 93,
        "end": 104,
        "indexType": {
          "type": "TSLiteralType",
          "start": 95,
          "end": 103,
          "literal": {
            "type": "Literal",
            "start": 95,
            "end": 103,
            "raw": "\"length\"",
            "value": "length"
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 93,
          "end": 94,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 89,
            "const": false,
            "constraint": {
              "type": "TSIntersectionType",
              "start": 75,
              "end": 89,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 75,
                  "end": 80,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 75,
                    "end": 78
                  }
                },
                {
                  "type": "TSObjectKeyword",
                  "start": 83,
                  "end": 89
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 106,
      "end": 144,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 113,
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 142,
        "end": 143,
        "typeArguments": null,
        "typeName": {
          "type": "Identifier",
          "start": 142,
          "end": 143,
          "decorators": [],
          "name": "U",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 113,
        "end": 139,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 114,
            "end": 138,
            "const": false,
            "constraint": {
              "type": "TSIntersectionType",
              "start": 124,
              "end": 138,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 124,
                  "end": 129,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 124,
                    "end": 127
                  }
                },
                {
                  "type": "TSObjectKeyword",
                  "start": 132,
                  "end": 138
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 145,
      "end": 168,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 152,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 155,
        "end": 167,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 157,
          "end": 167,
          "params": [
            {
              "type": "TSArrayType",
              "start": 158,
              "end": 166,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 155,
          "end": 157,
          "decorators": [],
          "name": "T0",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
