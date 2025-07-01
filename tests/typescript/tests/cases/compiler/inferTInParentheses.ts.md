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
        "name": "F1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 17,
                    "end": 23
                  }
                ],
                "start": 16,
                "end": 24
              },
              "start": 14,
              "end": 24
            },
            "start": 11,
            "end": 24
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 29,
            "end": 33
          },
          "start": 26,
          "end": 33
        },
        "start": 10,
        "end": 33
      },
      "declare": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
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
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 59,
              "end": 65
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 49,
            "end": 65
          }
        ],
        "start": 48,
        "end": 66
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 70
        },
        "typeArguments": null,
        "start": 69,
        "end": 70
      },
      "declare": false,
      "start": 35,
      "end": 71
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 80
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F1",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 85
          },
          "typeArguments": null,
          "start": 83,
          "end": 85
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 102
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
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
                  },
                  "start": 105,
                  "end": 112
                },
                "start": 102,
                "end": 113
              },
              "value": null,
              "start": 95,
              "end": 113
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 118,
              "end": 122
            },
            "start": 115,
            "end": 122
          },
          "start": 94,
          "end": 122
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 126
          },
          "typeArguments": null,
          "start": 125,
          "end": 126
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 129,
          "end": 134
        },
        "start": 83,
        "end": 134
      },
      "declare": false,
      "start": 73,
      "end": 135
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 143
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F1",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 148
          },
          "typeArguments": null,
          "start": 146,
          "end": 148
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 175,
                            "end": 176
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 175,
                          "end": 176
                        },
                        "start": 169,
                        "end": 176
                      },
                      "start": 165,
                      "end": 177
                    }
                  ],
                  "start": 164,
                  "end": 178
                },
                "start": 162,
                "end": 178
              },
              "start": 158,
              "end": 178
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 183,
              "end": 187
            },
            "start": 180,
            "end": 187
          },
          "start": 157,
          "end": 187
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 191
          },
          "typeArguments": null,
          "start": 190,
          "end": 191
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 194,
          "end": 199
        },
        "start": 146,
        "end": 199
      },
      "declare": false,
      "start": 136,
      "end": 200
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 208
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
              "start": 209,
              "end": 210
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 209,
            "end": 210
          }
        ],
        "start": 208,
        "end": 211
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
            "start": 214,
            "end": 215
          },
          "typeArguments": null,
          "start": 214,
          "end": 215
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IsNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 232
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
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 240,
                    "end": 241
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 240,
                  "end": 241
                },
                "start": 234,
                "end": 241
              }
            ],
            "start": 232,
            "end": 243
          },
          "start": 224,
          "end": 243
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 246,
            "end": 250
          },
          "start": 246,
          "end": 250
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 253,
            "end": 258
          },
          "start": 253,
          "end": 258
        },
        "start": 214,
        "end": 258
      },
      "declare": false,
      "start": 201,
      "end": 259
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 268
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F1",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 273
          },
          "typeArguments": null,
          "start": 271,
          "end": 273
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 290
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 300,
                      "end": 301
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 300,
                    "end": 301
                  },
                  "start": 294,
                  "end": 301
                },
                "start": 290,
                "end": 303
              },
              "value": null,
              "start": 283,
              "end": 303
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 308,
              "end": 312
            },
            "start": 305,
            "end": 312
          },
          "start": 282,
          "end": 312
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 315,
            "end": 316
          },
          "typeArguments": null,
          "start": 315,
          "end": 316
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 319,
          "end": 324
        },
        "start": 271,
        "end": 324
      },
      "declare": false,
      "start": 261,
      "end": 325
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 331,
        "end": 333
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F1",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 338
          },
          "typeArguments": null,
          "start": 336,
          "end": 338
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 366,
                            "end": 367
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 366,
                          "end": 367
                        },
                        "start": 360,
                        "end": 367
                      },
                      "start": 355,
                      "end": 369
                    }
                  ],
                  "start": 354,
                  "end": 370
                },
                "start": 352,
                "end": 370
              },
              "start": 348,
              "end": 370
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 375,
              "end": 379
            },
            "start": 372,
            "end": 379
          },
          "start": 347,
          "end": 379
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 383
          },
          "typeArguments": null,
          "start": 382,
          "end": 383
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 386,
          "end": 391
        },
        "start": 336,
        "end": 391
      },
      "declare": false,
      "start": 326,
      "end": 392
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 400
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
              "start": 401,
              "end": 402
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 401,
            "end": 402
          }
        ],
        "start": 400,
        "end": 403
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
            "start": 406,
            "end": 407
          },
          "typeArguments": null,
          "start": 406,
          "end": 407
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IsNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 416,
            "end": 424
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
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 433,
                    "end": 434
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 433,
                  "end": 434
                },
                "start": 427,
                "end": 434
              }
            ],
            "start": 424,
            "end": 437
          },
          "start": 416,
          "end": 437
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 440,
            "end": 444
          },
          "start": 440,
          "end": 444
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 447,
            "end": 452
          },
          "start": 447,
          "end": 452
        },
        "start": 406,
        "end": 452
      },
      "declare": false,
      "start": 393,
      "end": 453
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T7",
        "optional": false,
        "typeAnnotation": null,
        "start": 460,
        "end": 462
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F1",
            "optional": false,
            "typeAnnotation": null,
            "start": 465,
            "end": 467
          },
          "typeArguments": null,
          "start": 465,
          "end": 467
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 484
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 496,
                      "end": 497
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 496,
                    "end": 497
                  },
                  "start": 490,
                  "end": 497
                },
                "start": 484,
                "end": 501
              },
              "value": null,
              "start": 477,
              "end": 501
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 506,
              "end": 510
            },
            "start": 503,
            "end": 510
          },
          "start": 476,
          "end": 510
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 513,
            "end": 514
          },
          "typeArguments": null,
          "start": 513,
          "end": 514
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 517,
          "end": 522
        },
        "start": 465,
        "end": 522
      },
      "declare": false,
      "start": 455,
      "end": 523
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T8",
        "optional": false,
        "typeAnnotation": null,
        "start": 529,
        "end": 531
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F1",
            "optional": false,
            "typeAnnotation": null,
            "start": 534,
            "end": 536
          },
          "typeArguments": null,
          "start": 534,
          "end": 536
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 566,
                            "end": 567
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 566,
                          "end": 567
                        },
                        "start": 560,
                        "end": 567
                      },
                      "start": 553,
                      "end": 571
                    }
                  ],
                  "start": 552,
                  "end": 572
                },
                "start": 550,
                "end": 572
              },
              "start": 546,
              "end": 572
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 577,
              "end": 581
            },
            "start": 574,
            "end": 581
          },
          "start": 545,
          "end": 581
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 584,
            "end": 585
          },
          "typeArguments": null,
          "start": 584,
          "end": 585
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 588,
          "end": 593
        },
        "start": 534,
        "end": 593
      },
      "declare": false,
      "start": 524,
      "end": 594
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T9",
        "optional": false,
        "typeAnnotation": null,
        "start": 600,
        "end": 602
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
              "start": 603,
              "end": 604
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 603,
            "end": 604
          }
        ],
        "start": 602,
        "end": 605
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
            "start": 608,
            "end": 609
          },
          "typeArguments": null,
          "start": 608,
          "end": 609
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IsNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 618,
            "end": 626
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
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 637,
                    "end": 638
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 637,
                  "end": 638
                },
                "start": 631,
                "end": 638
              }
            ],
            "start": 626,
            "end": 643
          },
          "start": 618,
          "end": 643
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 646,
            "end": 650
          },
          "start": 646,
          "end": 650
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 653,
            "end": 658
          },
          "start": 653,
          "end": 658
        },
        "start": 608,
        "end": 658
      },
      "declare": false,
      "start": 595,
      "end": 659
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 659
}
```
