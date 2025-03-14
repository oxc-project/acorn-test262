nongenericConditionalNotPartiallyComputed.ts
```json
{
  "type": "Program",
  "start": 87,
  "end": 187,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 87,
      "end": 187,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 96,
        "end": 187,
        "checkType": {
          "type": "TSTypeReference",
          "start": 96,
          "end": 109,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 101,
            "end": 109,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 102,
                "end": 108
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 96,
            "end": 101,
            "decorators": [],
            "name": "Array",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 118,
          "end": 128,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 123,
            "end": 128,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 124,
                "end": 127
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 118,
            "end": 123,
            "decorators": [],
            "name": "Array",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 182,
          "end": 187
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 131,
          "end": 179,
          "checkType": {
            "type": "TSTypeReference",
            "start": 131,
            "end": 144,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 136,
              "end": 144,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 137,
                  "end": 143
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 131,
              "end": 136,
              "decorators": [],
              "name": "Array",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 153,
            "end": 167,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 158,
              "end": 167,
              "params": [
                {
                  "type": "TSInferType",
                  "start": 159,
                  "end": 166,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 165,
                    "end": 166,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 153,
              "end": 158,
              "decorators": [],
              "name": "Array",
              "optional": false
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 174,
            "end": 179
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 170,
            "end": 171,
            "typeName": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
