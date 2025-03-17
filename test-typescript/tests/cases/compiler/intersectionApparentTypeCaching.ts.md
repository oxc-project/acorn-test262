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
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 64,
        "name": "TX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 93,
        "end": 104,
        "objectType": {
          "type": "TSTypeReference",
          "start": 93,
          "end": 94,
          "typeName": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 95,
          "end": 103,
          "literal": {
            "type": "Literal",
            "start": 95,
            "end": 103,
            "value": "length",
            "raw": "\"length\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 106,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 113,
        "name": "T0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 142,
        "end": 143,
        "typeName": {
          "type": "Identifier",
          "start": 142,
          "end": 143,
          "name": "U",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 145,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 152,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 155,
        "end": 167,
        "typeName": {
          "type": "Identifier",
          "start": 155,
          "end": 157,
          "name": "T0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
