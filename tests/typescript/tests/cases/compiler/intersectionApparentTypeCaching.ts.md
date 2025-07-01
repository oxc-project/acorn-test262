__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TX",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 64
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 75,
                    "end": 78
                  },
                  "start": 75,
                  "end": 80
                },
                {
                  "type": "TSObjectKeyword",
                  "start": 83,
                  "end": 89
                }
              ],
              "start": 75,
              "end": 89
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 65,
            "end": 89
          }
        ],
        "start": 64,
        "end": 90
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "typeArguments": null,
          "start": 93,
          "end": 94
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "length",
            "raw": "\"length\"",
            "start": 95,
            "end": 103
          },
          "start": 95,
          "end": 103
        },
        "start": 93,
        "end": 104
      },
      "declare": false,
      "start": 57,
      "end": 105
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 113
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 124,
                    "end": 127
                  },
                  "start": 124,
                  "end": 129
                },
                {
                  "type": "TSObjectKeyword",
                  "start": 132,
                  "end": 138
                }
              ],
              "start": 124,
              "end": 138
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 114,
            "end": 138
          }
        ],
        "start": 113,
        "end": 139
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "U",
          "optional": false,
          "typeAnnotation": null,
          "start": 142,
          "end": 143
        },
        "typeArguments": null,
        "start": 142,
        "end": 143
      },
      "declare": false,
      "start": 106,
      "end": 144
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 152
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T0",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 157
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
              },
              "start": 158,
              "end": 166
            }
          ],
          "start": 157,
          "end": 167
        },
        "start": 155,
        "end": 167
      },
      "declare": false,
      "start": 145,
      "end": 168
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 168
}
```
