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
        "name": "UnionKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
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
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 21
          },
          "typeArguments": null,
          "start": 20,
          "end": 21
        },
        "extendsType": {
          "type": "TSAnyKeyword",
          "start": 30,
          "end": 33
        },
        "trueType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 43
            },
            "typeArguments": null,
            "start": 42,
            "end": 43
          },
          "start": 36,
          "end": 43
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 46,
          "end": 51
        },
        "start": 20,
        "end": 51
      },
      "declare": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BugHelper",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 67
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
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TAll",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 75
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 71,
            "end": 75
          }
        ],
        "start": 67,
        "end": 76
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "typeArguments": null,
          "start": 79,
          "end": 80
        },
        "extendsType": {
          "type": "TSAnyKeyword",
          "start": 89,
          "end": 92
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Exclude",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 102
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnionKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 112
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TAll",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 113,
                        "end": 117
                      },
                      "typeArguments": null,
                      "start": 113,
                      "end": 117
                    }
                  ],
                  "start": 112,
                  "end": 118
                },
                "start": 103,
                "end": 118
              },
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 127
                  },
                  "typeArguments": null,
                  "start": 126,
                  "end": 127
                },
                "start": 120,
                "end": 127
              }
            ],
            "start": 102,
            "end": 128
          },
          "start": 95,
          "end": 128
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 131,
          "end": 136
        },
        "start": 79,
        "end": 136
      },
      "declare": false,
      "start": 53,
      "end": 136
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bug",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 145
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TAll",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 150
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 146,
            "end": 150
          }
        ],
        "start": 145,
        "end": 151
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BugHelper",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 164
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TAll",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 169
              },
              "typeArguments": null,
              "start": 165,
              "end": 169
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TAll",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 175
              },
              "typeArguments": null,
              "start": 171,
              "end": 175
            }
          ],
          "start": 164,
          "end": 176
        },
        "start": 155,
        "end": 176
      },
      "declare": false,
      "start": 137,
      "end": 176
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 183
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnionKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 186,
          "end": 195
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 198,
                        "end": 199
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 202,
                          "end": 205
                        },
                        "start": 200,
                        "end": 205
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 198,
                      "end": 205
                    }
                  ],
                  "start": 196,
                  "end": 207
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 212,
                        "end": 213
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 215,
                          "end": 218
                        },
                        "start": 213,
                        "end": 218
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 212,
                      "end": 218
                    }
                  ],
                  "start": 210,
                  "end": 220
                }
              ],
              "start": 196,
              "end": 220
            }
          ],
          "start": 195,
          "end": 221
        },
        "start": 186,
        "end": 221
      },
      "declare": false,
      "start": 177,
      "end": 221
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 253,
        "end": 254
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bug",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 260
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 263,
                        "end": 264
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 267,
                          "end": 270
                        },
                        "start": 265,
                        "end": 270
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 263,
                      "end": 270
                    }
                  ],
                  "start": 261,
                  "end": 272
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 277,
                        "end": 278
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 280,
                          "end": 283
                        },
                        "start": 278,
                        "end": 283
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 277,
                      "end": 283
                    }
                  ],
                  "start": 275,
                  "end": 285
                }
              ],
              "start": 261,
              "end": 285
            }
          ],
          "start": 260,
          "end": 286
        },
        "start": 257,
        "end": 286
      },
      "declare": false,
      "start": 248,
      "end": 286
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 318
}
```
