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
        "name": "Mapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 48
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
              "start": 49,
              "end": 50
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 49,
            "end": 50
          }
        ],
        "start": 48,
        "end": 51
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 57,
          "end": 58
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
              "start": 68,
              "end": 69
            },
            "typeArguments": null,
            "start": 68,
            "end": 69
          },
          "start": 62,
          "end": 69
        },
        "nameType": null,
        "typeAnnotation": {
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
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 78
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                      "start": 80,
                      "end": 81
                    },
                    "typeArguments": null,
                    "start": 80,
                    "end": 81
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 82,
                      "end": 83
                    },
                    "typeArguments": null,
                    "start": 82,
                    "end": 83
                  },
                  "start": 80,
                  "end": 84
                },
                "start": 78,
                "end": 84
              },
              "accessibility": null,
              "static": false,
              "start": 74,
              "end": 84
            }
          ],
          "start": 72,
          "end": 86
        },
        "optional": false,
        "readonly": null,
        "start": 54,
        "end": 88
      },
      "declare": false,
      "start": 37,
      "end": 89
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferFromMapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 110
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
              "start": 111,
              "end": 112
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 111,
            "end": 112
          }
        ],
        "start": 110,
        "end": 113
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
            "start": 116,
            "end": 117
          },
          "typeArguments": null,
          "start": 116,
          "end": 117
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 132
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
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 140
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 139,
                  "end": 140
                },
                "start": 133,
                "end": 140
              }
            ],
            "start": 132,
            "end": 141
          },
          "start": 126,
          "end": 141
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "typeArguments": null,
          "start": 144,
          "end": 145
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 148,
          "end": 153
        },
        "start": 116,
        "end": 153
      },
      "declare": false,
      "start": 90,
      "end": 154
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LiteralType",
        "optional": false,
        "typeAnnotation": null,
        "start": 289,
        "end": 300
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 311
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "first",
                  "raw": "\"first\"",
                  "start": 313,
                  "end": 320
                },
                "start": 313,
                "end": 320
              },
              "start": 311,
              "end": 320
            },
            "accessibility": null,
            "static": false,
            "start": 306,
            "end": 321
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "second",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 329
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "second",
                  "raw": "\"second\"",
                  "start": 331,
                  "end": 339
                },
                "start": 331,
                "end": 339
              },
              "start": 329,
              "end": 339
            },
            "accessibility": null,
            "static": false,
            "start": 323,
            "end": 340
          }
        ],
        "start": 303,
        "end": 342
      },
      "declare": false,
      "start": 284,
      "end": 342
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MappedLiteralType",
        "optional": false,
        "typeAnnotation": null,
        "start": 348,
        "end": 365
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 371,
              "end": 376
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 380,
                      "end": 384
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "first",
                          "raw": "\"first\"",
                          "start": 386,
                          "end": 393
                        },
                        "start": 386,
                        "end": 393
                      },
                      "start": 384,
                      "end": 393
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 380,
                    "end": 393
                  }
                ],
                "start": 378,
                "end": 395
              },
              "start": 376,
              "end": 395
            },
            "accessibility": null,
            "static": false,
            "start": 371,
            "end": 396
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "second",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 404
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 408,
                      "end": 412
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "second",
                          "raw": "\"second\"",
                          "start": 414,
                          "end": 422
                        },
                        "start": 414,
                        "end": 422
                      },
                      "start": 412,
                      "end": 422
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 408,
                    "end": 422
                  }
                ],
                "start": 406,
                "end": 424
              },
              "start": 404,
              "end": 424
            },
            "accessibility": null,
            "static": false,
            "start": 398,
            "end": 425
          }
        ],
        "start": 368,
        "end": 427
      },
      "declare": false,
      "start": 343,
      "end": 428
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Inferred",
        "optional": false,
        "typeAnnotation": null,
        "start": 435,
        "end": 443
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferFromMapped",
          "optional": false,
          "typeAnnotation": null,
          "start": 446,
          "end": 461
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MappedLiteralType",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 479
              },
              "typeArguments": null,
              "start": 462,
              "end": 479
            }
          ],
          "start": 461,
          "end": 480
        },
        "start": 446,
        "end": 480
      },
      "declare": false,
      "start": 430,
      "end": 481
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 520,
        "end": 525
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Inferred",
            "optional": false,
            "typeAnnotation": null,
            "start": 528,
            "end": 536
          },
          "typeArguments": null,
          "start": 528,
          "end": 536
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 545,
            "end": 551
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 552,
                "end": 555
              },
              {
                "type": "TSStringKeyword",
                "start": 557,
                "end": 563
              }
            ],
            "start": 551,
            "end": 564
          },
          "start": 545,
          "end": 564
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 567,
            "end": 571
          },
          "start": 567,
          "end": 571
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 574,
            "end": 579
          },
          "start": 574,
          "end": 579
        },
        "start": 528,
        "end": 579
      },
      "declare": false,
      "start": 515,
      "end": 580
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 37,
  "end": 580
}
```
