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
        "name": "KeysWithoutStringIndex",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 79
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
              "start": 80,
              "end": 81
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 81
          }
        ],
        "start": 79,
        "end": 82
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "constraint": {
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
                "start": 103,
                "end": 104
              },
              "typeArguments": null,
              "start": 103,
              "end": 104
            },
            "start": 97,
            "end": 104
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSStringKeyword",
              "start": 107,
              "end": 113
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 123
              },
              "typeArguments": null,
              "start": 122,
              "end": 123
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 126,
              "end": 131
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 135
              },
              "typeArguments": null,
              "start": 134,
              "end": 135
            },
            "start": 107,
            "end": 135
          },
          "optional": false,
          "readonly": null,
          "start": 89,
          "end": 137
        },
        "extendsType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 150
          },
          "constraint": {
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
                "start": 160,
                "end": 161
              },
              "typeArguments": null,
              "start": 160,
              "end": 161
            },
            "start": 154,
            "end": 161
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 171
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 170,
              "end": 171
            },
            "start": 164,
            "end": 171
          },
          "optional": false,
          "readonly": null,
          "start": 146,
          "end": 173
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 181
          },
          "typeArguments": null,
          "start": 180,
          "end": 181
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 188,
          "end": 193
        },
        "start": 89,
        "end": 193
      },
      "declare": false,
      "start": 52,
      "end": 193
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 272
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "KeysWithoutStringIndex",
          "optional": false,
          "typeAnnotation": null,
          "start": 275,
          "end": 297
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 308,
                          "end": 314
                        },
                        "start": 306,
                        "end": 314
                      },
                      "start": 301,
                      "end": 314
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 317,
                      "end": 323
                    },
                    "start": 315,
                    "end": 323
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 300,
                  "end": 324
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 328
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 330,
                      "end": 336
                    },
                    "start": 328,
                    "end": 336
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 325,
                  "end": 337
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 338,
                    "end": 341
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "baz",
                        "raw": "'baz'",
                        "start": 343,
                        "end": 348
                      },
                      "start": 343,
                      "end": 348
                    },
                    "start": 341,
                    "end": 348
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 338,
                  "end": 348
                }
              ],
              "start": 298,
              "end": 350
            }
          ],
          "start": 297,
          "end": 351
        },
        "start": 275,
        "end": 351
      },
      "declare": false,
      "start": 263,
      "end": 351
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RemoveIdxSgn",
          "optional": false,
          "typeAnnotation": null,
          "start": 461,
          "end": 473
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
                "start": 474,
                "end": 475
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 474,
              "end": 475
            }
          ],
          "start": 473,
          "end": 476
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 479,
            "end": 483
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
                  "start": 484,
                  "end": 485
                },
                "typeArguments": null,
                "start": 484,
                "end": 485
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KeysWithoutStringIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 509
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
                        "start": 510,
                        "end": 511
                      },
                      "typeArguments": null,
                      "start": 510,
                      "end": 511
                    }
                  ],
                  "start": 509,
                  "end": 512
                },
                "start": 487,
                "end": 512
              }
            ],
            "start": 483,
            "end": 513
          },
          "start": 479,
          "end": 513
        },
        "declare": false,
        "start": 456,
        "end": 513
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 449,
      "end": 513
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 52,
  "end": 670
}
```
