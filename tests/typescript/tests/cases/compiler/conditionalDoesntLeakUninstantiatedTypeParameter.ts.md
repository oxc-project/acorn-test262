__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Synthetic",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 21
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 34
              },
              "typeArguments": null,
              "start": 33,
              "end": 34
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 34
          }
        ],
        "start": 19,
        "end": 35
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 36,
        "end": 38
      },
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SyntheticDestination",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
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
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 65,
            "end": 66
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 68,
            "end": 69
          }
        ],
        "start": 64,
        "end": 70
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 74
          },
          "typeArguments": null,
          "start": 73,
          "end": 74
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Synthetic",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 92
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
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
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 102,
                    "end": 103
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 102,
                  "end": 103
                },
                "start": 96,
                "end": 103
              }
            ],
            "start": 92,
            "end": 104
          },
          "start": 83,
          "end": 104
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 108
          },
          "typeArguments": null,
          "start": 107,
          "end": 108
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 111,
          "end": 116
        },
        "start": 73,
        "end": 116
      },
      "declare": false,
      "start": 39,
      "end": 117
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestSynthetic",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 136
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SyntheticDestination",
          "optional": false,
          "typeAnnotation": null,
          "start": 216,
          "end": 236
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 237,
              "end": 243
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Synthetic",
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 254
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 255,
                    "end": 261
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 263,
                    "end": 269
                  }
                ],
                "start": 254,
                "end": 270
              },
              "start": 245,
              "end": 270
            }
          ],
          "start": 236,
          "end": 271
        },
        "start": 216,
        "end": 271
      },
      "declare": false,
      "start": 118,
      "end": 272
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestSynthetic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 283,
                  "end": 296
                },
                "typeArguments": null,
                "start": 283,
                "end": 296
              },
              "start": 281,
              "end": 296
            },
            "start": 280,
            "end": 296
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 299,
            "end": 300
          },
          "definite": false,
          "start": 280,
          "end": 300
        }
      ],
      "declare": false,
      "start": 274,
      "end": 301
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestSynthetic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 385
                },
                "typeArguments": null,
                "start": 372,
                "end": 385
              },
              "start": 370,
              "end": 385
            },
            "start": 369,
            "end": 385
          },
          "init": {
            "type": "Literal",
            "value": "3",
            "raw": "'3'",
            "start": 388,
            "end": 391
          },
          "definite": false,
          "start": 369,
          "end": 391
        }
      ],
      "declare": false,
      "start": 363,
      "end": 392
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 461
}
```
