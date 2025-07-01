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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 93
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 101
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 102,
                "end": 108
              }
            ],
            "start": 101,
            "end": 109
          },
          "start": 96,
          "end": 109
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 123
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 124,
                "end": 127
              }
            ],
            "start": 123,
            "end": 128
          },
          "start": 118,
          "end": 128
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 136
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 137,
                  "end": 143
                }
              ],
              "start": 136,
              "end": 144
            },
            "start": 131,
            "end": 144
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 158
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 166
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 165,
                    "end": 166
                  },
                  "start": 159,
                  "end": 166
                }
              ],
              "start": 158,
              "end": 167
            },
            "start": 153,
            "end": 167
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 171
            },
            "typeArguments": null,
            "start": 170,
            "end": 171
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 174,
            "end": 179
          },
          "start": 131,
          "end": 179
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 182,
          "end": 187
        },
        "start": 96,
        "end": 187
      },
      "declare": false,
      "start": 87,
      "end": 187
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 87,
  "end": 187
}
```
