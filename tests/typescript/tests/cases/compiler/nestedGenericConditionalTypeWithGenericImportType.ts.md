__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Name",
          "optional": false,
          "typeAnnotation": null,
          "start": 23,
          "end": 27
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
                "start": 28,
                "end": 29
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 28,
              "end": 29
            }
          ],
          "start": 27,
          "end": 30
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 33,
          "end": 36
        },
        "declare": false,
        "start": 18,
        "end": 37
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 11,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 11,
  "end": 38
}
```
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
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 7,
              "end": 8
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 7,
            "end": 8
          }
        ],
        "start": 6,
        "end": 9
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSAnyKeyword",
          "start": 12,
          "end": 15
        },
        "extendsType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSAnyKeyword",
              "start": 26,
              "end": 29
            },
            "extendsType": {
              "type": "TSAnyKeyword",
              "start": 38,
              "end": 41
            },
            "trueType": {
              "type": "TSAnyKeyword",
              "start": 44,
              "end": 47
            },
            "falseType": {
              "type": "TSStringKeyword",
              "start": 50,
              "end": 56
            },
            "start": 26,
            "end": 56
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 66,
            "end": 69
          },
          "trueType": {
            "type": "TSImportType",
            "source": {
              "type": "Literal",
              "value": "./name",
              "raw": "\"./name\"",
              "start": 79,
              "end": 87
            },
            "options": null,
            "qualifier": {
              "type": "Identifier",
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 93
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 95
                  },
                  "typeArguments": null,
                  "start": 94,
                  "end": 95
                }
              ],
              "start": 93,
              "end": 96
            },
            "start": 72,
            "end": 96
          },
          "falseType": {
            "type": "TSAnyKeyword",
            "start": 99,
            "end": 102
          },
          "start": 25,
          "end": 102
        },
        "trueType": {
          "type": "TSAnyKeyword",
          "start": 108,
          "end": 111
        },
        "falseType": {
          "type": "TSAnyKeyword",
          "start": 116,
          "end": 119
        },
        "start": 12,
        "end": 119
      },
      "declare": false,
      "start": 0,
      "end": 120
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 120
}
```
