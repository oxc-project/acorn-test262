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
        "name": "AddPropToObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 20
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 24
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 33,
              "end": 39
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 39
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 45
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 41,
            "end": 60
          }
        ],
        "start": 20,
        "end": 61
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 68
          },
          "typeArguments": null,
          "start": 64,
          "end": 68
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 86
            },
            "typeArguments": null,
            "start": 83,
            "end": 86
          },
          "start": 77,
          "end": 86
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 94
              },
              "typeArguments": null,
              "start": 91,
              "end": 94
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 99
              },
              "typeArguments": null,
              "start": 95,
              "end": 99
            },
            "start": 91,
            "end": 100
          },
          "extendsType": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSUnknownKeyword",
              "start": 109,
              "end": 116
            },
            "start": 109,
            "end": 118
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 129,
                      "end": 132
                    },
                    "typeArguments": null,
                    "start": 129,
                    "end": 132
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 133,
                      "end": 137
                    },
                    "typeArguments": null,
                    "start": 133,
                    "end": 137
                  },
                  "start": 129,
                  "end": 138
                },
                "start": 126,
                "end": 138
              }
            ],
            "start": 125,
            "end": 139
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 146,
            "end": 151
          },
          "start": 91,
          "end": 151
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 156,
          "end": 161
        },
        "start": 64,
        "end": 161
      },
      "declare": false,
      "start": 0,
      "end": 161
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 161
}
```
