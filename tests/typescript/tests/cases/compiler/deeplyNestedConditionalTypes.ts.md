__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
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
              "start": 9,
              "end": 10
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 9,
            "end": 10
          }
        ],
        "start": 8,
        "end": 11
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
            "start": 18,
            "end": 19
          },
          "typeArguments": null,
          "start": 18,
          "end": 19
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 28,
            "end": 29
          },
          "start": 28,
          "end": 29
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "'0'",
            "start": 32,
            "end": 35
          },
          "start": 32,
          "end": 35
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
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
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 52,
              "end": 53
            },
            "start": 52,
            "end": 53
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 56,
              "end": 59
            },
            "start": 56,
            "end": 59
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 67
              },
              "typeArguments": null,
              "start": 66,
              "end": 67
            },
            "extendsType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 76,
                "end": 77
              },
              "start": 76,
              "end": 77
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "2",
                "raw": "'2'",
                "start": 80,
                "end": 83
              },
              "start": 80,
              "end": 83
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 91
                },
                "typeArguments": null,
                "start": 90,
                "end": 91
              },
              "extendsType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 100,
                  "end": 101
                },
                "start": 100,
                "end": 101
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "3",
                  "raw": "'3'",
                  "start": 104,
                  "end": 107
                },
                "start": 104,
                "end": 107
              },
              "falseType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 115
                  },
                  "typeArguments": null,
                  "start": 114,
                  "end": 115
                },
                "extendsType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 124,
                    "end": 125
                  },
                  "start": 124,
                  "end": 125
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "4",
                    "raw": "'4'",
                    "start": 128,
                    "end": 131
                  },
                  "start": 128,
                  "end": 131
                },
                "falseType": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 138,
                      "end": 139
                    },
                    "typeArguments": null,
                    "start": 138,
                    "end": 139
                  },
                  "extendsType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 148,
                      "end": 149
                    },
                    "start": 148,
                    "end": 149
                  },
                  "trueType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "5",
                      "raw": "'5'",
                      "start": 152,
                      "end": 155
                    },
                    "start": 152,
                    "end": 155
                  },
                  "falseType": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 162,
                        "end": 163
                      },
                      "typeArguments": null,
                      "start": 162,
                      "end": 163
                    },
                    "extendsType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 172,
                        "end": 173
                      },
                      "start": 172,
                      "end": 173
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "6",
                        "raw": "'6'",
                        "start": 176,
                        "end": 179
                      },
                      "start": 176,
                      "end": 179
                    },
                    "falseType": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 186,
                          "end": 187
                        },
                        "typeArguments": null,
                        "start": 186,
                        "end": 187
                      },
                      "extendsType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 7,
                          "raw": "7",
                          "start": 196,
                          "end": 197
                        },
                        "start": 196,
                        "end": 197
                      },
                      "trueType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "7",
                          "raw": "'7'",
                          "start": 200,
                          "end": 203
                        },
                        "start": 200,
                        "end": 203
                      },
                      "falseType": {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 210,
                            "end": 211
                          },
                          "typeArguments": null,
                          "start": 210,
                          "end": 211
                        },
                        "extendsType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 8,
                            "raw": "8",
                            "start": 220,
                            "end": 221
                          },
                          "start": 220,
                          "end": 221
                        },
                        "trueType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "8",
                            "raw": "'8'",
                            "start": 224,
                            "end": 227
                          },
                          "start": 224,
                          "end": 227
                        },
                        "falseType": {
                          "type": "TSConditionalType",
                          "checkType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 234,
                              "end": 235
                            },
                            "typeArguments": null,
                            "start": 234,
                            "end": 235
                          },
                          "extendsType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 9,
                              "raw": "9",
                              "start": 244,
                              "end": 245
                            },
                            "start": 244,
                            "end": 245
                          },
                          "trueType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "9",
                              "raw": "'9'",
                              "start": 248,
                              "end": 251
                            },
                            "start": 248,
                            "end": 251
                          },
                          "falseType": {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 258,
                                "end": 259
                              },
                              "typeArguments": null,
                              "start": 258,
                              "end": 259
                            },
                            "extendsType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 268,
                                "end": 270
                              },
                              "start": 268,
                              "end": 270
                            },
                            "trueType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "10",
                                "raw": "'10'",
                                "start": 273,
                                "end": 277
                              },
                              "start": 273,
                              "end": 277
                            },
                            "falseType": {
                              "type": "TSConditionalType",
                              "checkType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 284,
                                  "end": 285
                                },
                                "typeArguments": null,
                                "start": 284,
                                "end": 285
                              },
                              "extendsType": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 11,
                                  "raw": "11",
                                  "start": 294,
                                  "end": 296
                                },
                                "start": 294,
                                "end": 296
                              },
                              "trueType": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "11",
                                  "raw": "'11'",
                                  "start": 299,
                                  "end": 303
                                },
                                "start": 299,
                                "end": 303
                              },
                              "falseType": {
                                "type": "TSConditionalType",
                                "checkType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 310,
                                    "end": 311
                                  },
                                  "typeArguments": null,
                                  "start": 310,
                                  "end": 311
                                },
                                "extendsType": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": 12,
                                    "raw": "12",
                                    "start": 320,
                                    "end": 322
                                  },
                                  "start": 320,
                                  "end": 322
                                },
                                "trueType": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "12",
                                    "raw": "'12'",
                                    "start": 325,
                                    "end": 329
                                  },
                                  "start": 325,
                                  "end": 329
                                },
                                "falseType": {
                                  "type": "TSConditionalType",
                                  "checkType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 336,
                                      "end": 337
                                    },
                                    "typeArguments": null,
                                    "start": 336,
                                    "end": 337
                                  },
                                  "extendsType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": 13,
                                      "raw": "13",
                                      "start": 346,
                                      "end": 348
                                    },
                                    "start": 346,
                                    "end": 348
                                  },
                                  "trueType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "13",
                                      "raw": "'13'",
                                      "start": 351,
                                      "end": 355
                                    },
                                    "start": 351,
                                    "end": 355
                                  },
                                  "falseType": {
                                    "type": "TSConditionalType",
                                    "checkType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 362,
                                        "end": 363
                                      },
                                      "typeArguments": null,
                                      "start": 362,
                                      "end": 363
                                    },
                                    "extendsType": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": 14,
                                        "raw": "14",
                                        "start": 372,
                                        "end": 374
                                      },
                                      "start": 372,
                                      "end": 374
                                    },
                                    "trueType": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": "14",
                                        "raw": "'14'",
                                        "start": 377,
                                        "end": 381
                                      },
                                      "start": 377,
                                      "end": 381
                                    },
                                    "falseType": {
                                      "type": "TSConditionalType",
                                      "checkType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 388,
                                          "end": 389
                                        },
                                        "typeArguments": null,
                                        "start": 388,
                                        "end": 389
                                      },
                                      "extendsType": {
                                        "type": "TSLiteralType",
                                        "literal": {
                                          "type": "Literal",
                                          "value": 15,
                                          "raw": "15",
                                          "start": 398,
                                          "end": 400
                                        },
                                        "start": 398,
                                        "end": 400
                                      },
                                      "trueType": {
                                        "type": "TSLiteralType",
                                        "literal": {
                                          "type": "Literal",
                                          "value": "15",
                                          "raw": "'15'",
                                          "start": 403,
                                          "end": 407
                                        },
                                        "start": 403,
                                        "end": 407
                                      },
                                      "falseType": {
                                        "type": "TSConditionalType",
                                        "checkType": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "T",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 414,
                                            "end": 415
                                          },
                                          "typeArguments": null,
                                          "start": 414,
                                          "end": 415
                                        },
                                        "extendsType": {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 16,
                                            "raw": "16",
                                            "start": 424,
                                            "end": 426
                                          },
                                          "start": 424,
                                          "end": 426
                                        },
                                        "trueType": {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": "16",
                                            "raw": "'16'",
                                            "start": 429,
                                            "end": 433
                                          },
                                          "start": 429,
                                          "end": 433
                                        },
                                        "falseType": {
                                          "type": "TSConditionalType",
                                          "checkType": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 440,
                                              "end": 441
                                            },
                                            "typeArguments": null,
                                            "start": 440,
                                            "end": 441
                                          },
                                          "extendsType": {
                                            "type": "TSLiteralType",
                                            "literal": {
                                              "type": "Literal",
                                              "value": 17,
                                              "raw": "17",
                                              "start": 450,
                                              "end": 452
                                            },
                                            "start": 450,
                                            "end": 452
                                          },
                                          "trueType": {
                                            "type": "TSLiteralType",
                                            "literal": {
                                              "type": "Literal",
                                              "value": "17",
                                              "raw": "'17'",
                                              "start": 455,
                                              "end": 459
                                            },
                                            "start": 455,
                                            "end": 459
                                          },
                                          "falseType": {
                                            "type": "TSConditionalType",
                                            "checkType": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "T",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 466,
                                                "end": 467
                                              },
                                              "typeArguments": null,
                                              "start": 466,
                                              "end": 467
                                            },
                                            "extendsType": {
                                              "type": "TSLiteralType",
                                              "literal": {
                                                "type": "Literal",
                                                "value": 18,
                                                "raw": "18",
                                                "start": 476,
                                                "end": 478
                                              },
                                              "start": 476,
                                              "end": 478
                                            },
                                            "trueType": {
                                              "type": "TSLiteralType",
                                              "literal": {
                                                "type": "Literal",
                                                "value": "18",
                                                "raw": "'18'",
                                                "start": 481,
                                                "end": 485
                                              },
                                              "start": 481,
                                              "end": 485
                                            },
                                            "falseType": {
                                              "type": "TSConditionalType",
                                              "checkType": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 492,
                                                  "end": 493
                                                },
                                                "typeArguments": null,
                                                "start": 492,
                                                "end": 493
                                              },
                                              "extendsType": {
                                                "type": "TSLiteralType",
                                                "literal": {
                                                  "type": "Literal",
                                                  "value": 19,
                                                  "raw": "19",
                                                  "start": 502,
                                                  "end": 504
                                                },
                                                "start": 502,
                                                "end": 504
                                              },
                                              "trueType": {
                                                "type": "TSLiteralType",
                                                "literal": {
                                                  "type": "Literal",
                                                  "value": "19",
                                                  "raw": "'19'",
                                                  "start": 507,
                                                  "end": 511
                                                },
                                                "start": 507,
                                                "end": 511
                                              },
                                              "falseType": {
                                                "type": "TSConditionalType",
                                                "checkType": {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "T",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 518,
                                                    "end": 519
                                                  },
                                                  "typeArguments": null,
                                                  "start": 518,
                                                  "end": 519
                                                },
                                                "extendsType": {
                                                  "type": "TSLiteralType",
                                                  "literal": {
                                                    "type": "Literal",
                                                    "value": 20,
                                                    "raw": "20",
                                                    "start": 528,
                                                    "end": 530
                                                  },
                                                  "start": 528,
                                                  "end": 530
                                                },
                                                "trueType": {
                                                  "type": "TSLiteralType",
                                                  "literal": {
                                                    "type": "Literal",
                                                    "value": "20",
                                                    "raw": "'20'",
                                                    "start": 533,
                                                    "end": 537
                                                  },
                                                  "start": 533,
                                                  "end": 537
                                                },
                                                "falseType": {
                                                  "type": "TSConditionalType",
                                                  "checkType": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "T",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 544,
                                                      "end": 545
                                                    },
                                                    "typeArguments": null,
                                                    "start": 544,
                                                    "end": 545
                                                  },
                                                  "extendsType": {
                                                    "type": "TSLiteralType",
                                                    "literal": {
                                                      "type": "Literal",
                                                      "value": 21,
                                                      "raw": "21",
                                                      "start": 554,
                                                      "end": 556
                                                    },
                                                    "start": 554,
                                                    "end": 556
                                                  },
                                                  "trueType": {
                                                    "type": "TSLiteralType",
                                                    "literal": {
                                                      "type": "Literal",
                                                      "value": "21",
                                                      "raw": "'21'",
                                                      "start": 559,
                                                      "end": 563
                                                    },
                                                    "start": 559,
                                                    "end": 563
                                                  },
                                                  "falseType": {
                                                    "type": "TSConditionalType",
                                                    "checkType": {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "T",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 570,
                                                        "end": 571
                                                      },
                                                      "typeArguments": null,
                                                      "start": 570,
                                                      "end": 571
                                                    },
                                                    "extendsType": {
                                                      "type": "TSLiteralType",
                                                      "literal": {
                                                        "type": "Literal",
                                                        "value": 22,
                                                        "raw": "22",
                                                        "start": 580,
                                                        "end": 582
                                                      },
                                                      "start": 580,
                                                      "end": 582
                                                    },
                                                    "trueType": {
                                                      "type": "TSLiteralType",
                                                      "literal": {
                                                        "type": "Literal",
                                                        "value": "22",
                                                        "raw": "'22'",
                                                        "start": 585,
                                                        "end": 589
                                                      },
                                                      "start": 585,
                                                      "end": 589
                                                    },
                                                    "falseType": {
                                                      "type": "TSConditionalType",
                                                      "checkType": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "T",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 596,
                                                          "end": 597
                                                        },
                                                        "typeArguments": null,
                                                        "start": 596,
                                                        "end": 597
                                                      },
                                                      "extendsType": {
                                                        "type": "TSLiteralType",
                                                        "literal": {
                                                          "type": "Literal",
                                                          "value": 23,
                                                          "raw": "23",
                                                          "start": 606,
                                                          "end": 608
                                                        },
                                                        "start": 606,
                                                        "end": 608
                                                      },
                                                      "trueType": {
                                                        "type": "TSLiteralType",
                                                        "literal": {
                                                          "type": "Literal",
                                                          "value": "23",
                                                          "raw": "'23'",
                                                          "start": 611,
                                                          "end": 615
                                                        },
                                                        "start": 611,
                                                        "end": 615
                                                      },
                                                      "falseType": {
                                                        "type": "TSConditionalType",
                                                        "checkType": {
                                                          "type": "TSTypeReference",
                                                          "typeName": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "T",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 622,
                                                            "end": 623
                                                          },
                                                          "typeArguments": null,
                                                          "start": 622,
                                                          "end": 623
                                                        },
                                                        "extendsType": {
                                                          "type": "TSLiteralType",
                                                          "literal": {
                                                            "type": "Literal",
                                                            "value": 24,
                                                            "raw": "24",
                                                            "start": 632,
                                                            "end": 634
                                                          },
                                                          "start": 632,
                                                          "end": 634
                                                        },
                                                        "trueType": {
                                                          "type": "TSLiteralType",
                                                          "literal": {
                                                            "type": "Literal",
                                                            "value": "24",
                                                            "raw": "'24'",
                                                            "start": 637,
                                                            "end": 641
                                                          },
                                                          "start": 637,
                                                          "end": 641
                                                        },
                                                        "falseType": {
                                                          "type": "TSConditionalType",
                                                          "checkType": {
                                                            "type": "TSTypeReference",
                                                            "typeName": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "T",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 648,
                                                              "end": 649
                                                            },
                                                            "typeArguments": null,
                                                            "start": 648,
                                                            "end": 649
                                                          },
                                                          "extendsType": {
                                                            "type": "TSLiteralType",
                                                            "literal": {
                                                              "type": "Literal",
                                                              "value": 25,
                                                              "raw": "25",
                                                              "start": 658,
                                                              "end": 660
                                                            },
                                                            "start": 658,
                                                            "end": 660
                                                          },
                                                          "trueType": {
                                                            "type": "TSLiteralType",
                                                            "literal": {
                                                              "type": "Literal",
                                                              "value": "25",
                                                              "raw": "'25'",
                                                              "start": 663,
                                                              "end": 667
                                                            },
                                                            "start": 663,
                                                            "end": 667
                                                          },
                                                          "falseType": {
                                                            "type": "TSConditionalType",
                                                            "checkType": {
                                                              "type": "TSTypeReference",
                                                              "typeName": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "T",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 674,
                                                                "end": 675
                                                              },
                                                              "typeArguments": null,
                                                              "start": 674,
                                                              "end": 675
                                                            },
                                                            "extendsType": {
                                                              "type": "TSLiteralType",
                                                              "literal": {
                                                                "type": "Literal",
                                                                "value": 26,
                                                                "raw": "26",
                                                                "start": 684,
                                                                "end": 686
                                                              },
                                                              "start": 684,
                                                              "end": 686
                                                            },
                                                            "trueType": {
                                                              "type": "TSLiteralType",
                                                              "literal": {
                                                                "type": "Literal",
                                                                "value": "26",
                                                                "raw": "'26'",
                                                                "start": 689,
                                                                "end": 693
                                                              },
                                                              "start": 689,
                                                              "end": 693
                                                            },
                                                            "falseType": {
                                                              "type": "TSConditionalType",
                                                              "checkType": {
                                                                "type": "TSTypeReference",
                                                                "typeName": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "T",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 700,
                                                                  "end": 701
                                                                },
                                                                "typeArguments": null,
                                                                "start": 700,
                                                                "end": 701
                                                              },
                                                              "extendsType": {
                                                                "type": "TSLiteralType",
                                                                "literal": {
                                                                  "type": "Literal",
                                                                  "value": 27,
                                                                  "raw": "27",
                                                                  "start": 710,
                                                                  "end": 712
                                                                },
                                                                "start": 710,
                                                                "end": 712
                                                              },
                                                              "trueType": {
                                                                "type": "TSLiteralType",
                                                                "literal": {
                                                                  "type": "Literal",
                                                                  "value": "27",
                                                                  "raw": "'27'",
                                                                  "start": 715,
                                                                  "end": 719
                                                                },
                                                                "start": 715,
                                                                "end": 719
                                                              },
                                                              "falseType": {
                                                                "type": "TSConditionalType",
                                                                "checkType": {
                                                                  "type": "TSTypeReference",
                                                                  "typeName": {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "T",
                                                                    "optional": false,
                                                                    "typeAnnotation": null,
                                                                    "start": 726,
                                                                    "end": 727
                                                                  },
                                                                  "typeArguments": null,
                                                                  "start": 726,
                                                                  "end": 727
                                                                },
                                                                "extendsType": {
                                                                  "type": "TSLiteralType",
                                                                  "literal": {
                                                                    "type": "Literal",
                                                                    "value": 28,
                                                                    "raw": "28",
                                                                    "start": 736,
                                                                    "end": 738
                                                                  },
                                                                  "start": 736,
                                                                  "end": 738
                                                                },
                                                                "trueType": {
                                                                  "type": "TSLiteralType",
                                                                  "literal": {
                                                                    "type": "Literal",
                                                                    "value": "28",
                                                                    "raw": "'28'",
                                                                    "start": 741,
                                                                    "end": 745
                                                                  },
                                                                  "start": 741,
                                                                  "end": 745
                                                                },
                                                                "falseType": {
                                                                  "type": "TSConditionalType",
                                                                  "checkType": {
                                                                    "type": "TSTypeReference",
                                                                    "typeName": {
                                                                      "type": "Identifier",
                                                                      "decorators": [],
                                                                      "name": "T",
                                                                      "optional": false,
                                                                      "typeAnnotation": null,
                                                                      "start": 752,
                                                                      "end": 753
                                                                    },
                                                                    "typeArguments": null,
                                                                    "start": 752,
                                                                    "end": 753
                                                                  },
                                                                  "extendsType": {
                                                                    "type": "TSLiteralType",
                                                                    "literal": {
                                                                      "type": "Literal",
                                                                      "value": 29,
                                                                      "raw": "29",
                                                                      "start": 762,
                                                                      "end": 764
                                                                    },
                                                                    "start": 762,
                                                                    "end": 764
                                                                  },
                                                                  "trueType": {
                                                                    "type": "TSLiteralType",
                                                                    "literal": {
                                                                      "type": "Literal",
                                                                      "value": "29",
                                                                      "raw": "'29'",
                                                                      "start": 767,
                                                                      "end": 771
                                                                    },
                                                                    "start": 767,
                                                                    "end": 771
                                                                  },
                                                                  "falseType": {
                                                                    "type": "TSConditionalType",
                                                                    "checkType": {
                                                                      "type": "TSTypeReference",
                                                                      "typeName": {
                                                                        "type": "Identifier",
                                                                        "decorators": [],
                                                                        "name": "T",
                                                                        "optional": false,
                                                                        "typeAnnotation": null,
                                                                        "start": 778,
                                                                        "end": 779
                                                                      },
                                                                      "typeArguments": null,
                                                                      "start": 778,
                                                                      "end": 779
                                                                    },
                                                                    "extendsType": {
                                                                      "type": "TSLiteralType",
                                                                      "literal": {
                                                                        "type": "Literal",
                                                                        "value": 30,
                                                                        "raw": "30",
                                                                        "start": 788,
                                                                        "end": 790
                                                                      },
                                                                      "start": 788,
                                                                      "end": 790
                                                                    },
                                                                    "trueType": {
                                                                      "type": "TSLiteralType",
                                                                      "literal": {
                                                                        "type": "Literal",
                                                                        "value": "30",
                                                                        "raw": "'30'",
                                                                        "start": 793,
                                                                        "end": 797
                                                                      },
                                                                      "start": 793,
                                                                      "end": 797
                                                                    },
                                                                    "falseType": {
                                                                      "type": "TSConditionalType",
                                                                      "checkType": {
                                                                        "type": "TSTypeReference",
                                                                        "typeName": {
                                                                          "type": "Identifier",
                                                                          "decorators": [],
                                                                          "name": "T",
                                                                          "optional": false,
                                                                          "typeAnnotation": null,
                                                                          "start": 804,
                                                                          "end": 805
                                                                        },
                                                                        "typeArguments": null,
                                                                        "start": 804,
                                                                        "end": 805
                                                                      },
                                                                      "extendsType": {
                                                                        "type": "TSLiteralType",
                                                                        "literal": {
                                                                          "type": "Literal",
                                                                          "value": 31,
                                                                          "raw": "31",
                                                                          "start": 814,
                                                                          "end": 816
                                                                        },
                                                                        "start": 814,
                                                                        "end": 816
                                                                      },
                                                                      "trueType": {
                                                                        "type": "TSLiteralType",
                                                                        "literal": {
                                                                          "type": "Literal",
                                                                          "value": "31",
                                                                          "raw": "'31'",
                                                                          "start": 819,
                                                                          "end": 823
                                                                        },
                                                                        "start": 819,
                                                                        "end": 823
                                                                      },
                                                                      "falseType": {
                                                                        "type": "TSConditionalType",
                                                                        "checkType": {
                                                                          "type": "TSTypeReference",
                                                                          "typeName": {
                                                                            "type": "Identifier",
                                                                            "decorators": [],
                                                                            "name": "T",
                                                                            "optional": false,
                                                                            "typeAnnotation": null,
                                                                            "start": 830,
                                                                            "end": 831
                                                                          },
                                                                          "typeArguments": null,
                                                                          "start": 830,
                                                                          "end": 831
                                                                        },
                                                                        "extendsType": {
                                                                          "type": "TSLiteralType",
                                                                          "literal": {
                                                                            "type": "Literal",
                                                                            "value": 32,
                                                                            "raw": "32",
                                                                            "start": 840,
                                                                            "end": 842
                                                                          },
                                                                          "start": 840,
                                                                          "end": 842
                                                                        },
                                                                        "trueType": {
                                                                          "type": "TSLiteralType",
                                                                          "literal": {
                                                                            "type": "Literal",
                                                                            "value": "32",
                                                                            "raw": "'32'",
                                                                            "start": 845,
                                                                            "end": 849
                                                                          },
                                                                          "start": 845,
                                                                          "end": 849
                                                                        },
                                                                        "falseType": {
                                                                          "type": "TSConditionalType",
                                                                          "checkType": {
                                                                            "type": "TSTypeReference",
                                                                            "typeName": {
                                                                              "type": "Identifier",
                                                                              "decorators": [],
                                                                              "name": "T",
                                                                              "optional": false,
                                                                              "typeAnnotation": null,
                                                                              "start": 856,
                                                                              "end": 857
                                                                            },
                                                                            "typeArguments": null,
                                                                            "start": 856,
                                                                            "end": 857
                                                                          },
                                                                          "extendsType": {
                                                                            "type": "TSLiteralType",
                                                                            "literal": {
                                                                              "type": "Literal",
                                                                              "value": 33,
                                                                              "raw": "33",
                                                                              "start": 866,
                                                                              "end": 868
                                                                            },
                                                                            "start": 866,
                                                                            "end": 868
                                                                          },
                                                                          "trueType": {
                                                                            "type": "TSLiteralType",
                                                                            "literal": {
                                                                              "type": "Literal",
                                                                              "value": "33",
                                                                              "raw": "'33'",
                                                                              "start": 871,
                                                                              "end": 875
                                                                            },
                                                                            "start": 871,
                                                                            "end": 875
                                                                          },
                                                                          "falseType": {
                                                                            "type": "TSConditionalType",
                                                                            "checkType": {
                                                                              "type": "TSTypeReference",
                                                                              "typeName": {
                                                                                "type": "Identifier",
                                                                                "decorators": [],
                                                                                "name": "T",
                                                                                "optional": false,
                                                                                "typeAnnotation": null,
                                                                                "start": 882,
                                                                                "end": 883
                                                                              },
                                                                              "typeArguments": null,
                                                                              "start": 882,
                                                                              "end": 883
                                                                            },
                                                                            "extendsType": {
                                                                              "type": "TSLiteralType",
                                                                              "literal": {
                                                                                "type": "Literal",
                                                                                "value": 34,
                                                                                "raw": "34",
                                                                                "start": 892,
                                                                                "end": 894
                                                                              },
                                                                              "start": 892,
                                                                              "end": 894
                                                                            },
                                                                            "trueType": {
                                                                              "type": "TSLiteralType",
                                                                              "literal": {
                                                                                "type": "Literal",
                                                                                "value": "34",
                                                                                "raw": "'34'",
                                                                                "start": 897,
                                                                                "end": 901
                                                                              },
                                                                              "start": 897,
                                                                              "end": 901
                                                                            },
                                                                            "falseType": {
                                                                              "type": "TSConditionalType",
                                                                              "checkType": {
                                                                                "type": "TSTypeReference",
                                                                                "typeName": {
                                                                                  "type": "Identifier",
                                                                                  "decorators": [],
                                                                                  "name": "T",
                                                                                  "optional": false,
                                                                                  "typeAnnotation": null,
                                                                                  "start": 908,
                                                                                  "end": 909
                                                                                },
                                                                                "typeArguments": null,
                                                                                "start": 908,
                                                                                "end": 909
                                                                              },
                                                                              "extendsType": {
                                                                                "type": "TSLiteralType",
                                                                                "literal": {
                                                                                  "type": "Literal",
                                                                                  "value": 35,
                                                                                  "raw": "35",
                                                                                  "start": 918,
                                                                                  "end": 920
                                                                                },
                                                                                "start": 918,
                                                                                "end": 920
                                                                              },
                                                                              "trueType": {
                                                                                "type": "TSLiteralType",
                                                                                "literal": {
                                                                                  "type": "Literal",
                                                                                  "value": "35",
                                                                                  "raw": "'35'",
                                                                                  "start": 923,
                                                                                  "end": 927
                                                                                },
                                                                                "start": 923,
                                                                                "end": 927
                                                                              },
                                                                              "falseType": {
                                                                                "type": "TSConditionalType",
                                                                                "checkType": {
                                                                                  "type": "TSTypeReference",
                                                                                  "typeName": {
                                                                                    "type": "Identifier",
                                                                                    "decorators": [],
                                                                                    "name": "T",
                                                                                    "optional": false,
                                                                                    "typeAnnotation": null,
                                                                                    "start": 934,
                                                                                    "end": 935
                                                                                  },
                                                                                  "typeArguments": null,
                                                                                  "start": 934,
                                                                                  "end": 935
                                                                                },
                                                                                "extendsType": {
                                                                                  "type": "TSLiteralType",
                                                                                  "literal": {
                                                                                    "type": "Literal",
                                                                                    "value": 36,
                                                                                    "raw": "36",
                                                                                    "start": 944,
                                                                                    "end": 946
                                                                                  },
                                                                                  "start": 944,
                                                                                  "end": 946
                                                                                },
                                                                                "trueType": {
                                                                                  "type": "TSLiteralType",
                                                                                  "literal": {
                                                                                    "type": "Literal",
                                                                                    "value": "36",
                                                                                    "raw": "'36'",
                                                                                    "start": 949,
                                                                                    "end": 953
                                                                                  },
                                                                                  "start": 949,
                                                                                  "end": 953
                                                                                },
                                                                                "falseType": {
                                                                                  "type": "TSConditionalType",
                                                                                  "checkType": {
                                                                                    "type": "TSTypeReference",
                                                                                    "typeName": {
                                                                                      "type": "Identifier",
                                                                                      "decorators": [],
                                                                                      "name": "T",
                                                                                      "optional": false,
                                                                                      "typeAnnotation": null,
                                                                                      "start": 960,
                                                                                      "end": 961
                                                                                    },
                                                                                    "typeArguments": null,
                                                                                    "start": 960,
                                                                                    "end": 961
                                                                                  },
                                                                                  "extendsType": {
                                                                                    "type": "TSLiteralType",
                                                                                    "literal": {
                                                                                      "type": "Literal",
                                                                                      "value": 37,
                                                                                      "raw": "37",
                                                                                      "start": 970,
                                                                                      "end": 972
                                                                                    },
                                                                                    "start": 970,
                                                                                    "end": 972
                                                                                  },
                                                                                  "trueType": {
                                                                                    "type": "TSLiteralType",
                                                                                    "literal": {
                                                                                      "type": "Literal",
                                                                                      "value": "37",
                                                                                      "raw": "'37'",
                                                                                      "start": 975,
                                                                                      "end": 979
                                                                                    },
                                                                                    "start": 975,
                                                                                    "end": 979
                                                                                  },
                                                                                  "falseType": {
                                                                                    "type": "TSConditionalType",
                                                                                    "checkType": {
                                                                                      "type": "TSTypeReference",
                                                                                      "typeName": {
                                                                                        "type": "Identifier",
                                                                                        "decorators": [],
                                                                                        "name": "T",
                                                                                        "optional": false,
                                                                                        "typeAnnotation": null,
                                                                                        "start": 986,
                                                                                        "end": 987
                                                                                      },
                                                                                      "typeArguments": null,
                                                                                      "start": 986,
                                                                                      "end": 987
                                                                                    },
                                                                                    "extendsType": {
                                                                                      "type": "TSLiteralType",
                                                                                      "literal": {
                                                                                        "type": "Literal",
                                                                                        "value": 38,
                                                                                        "raw": "38",
                                                                                        "start": 996,
                                                                                        "end": 998
                                                                                      },
                                                                                      "start": 996,
                                                                                      "end": 998
                                                                                    },
                                                                                    "trueType": {
                                                                                      "type": "TSLiteralType",
                                                                                      "literal": {
                                                                                        "type": "Literal",
                                                                                        "value": "38",
                                                                                        "raw": "'38'",
                                                                                        "start": 1001,
                                                                                        "end": 1005
                                                                                      },
                                                                                      "start": 1001,
                                                                                      "end": 1005
                                                                                    },
                                                                                    "falseType": {
                                                                                      "type": "TSConditionalType",
                                                                                      "checkType": {
                                                                                        "type": "TSTypeReference",
                                                                                        "typeName": {
                                                                                          "type": "Identifier",
                                                                                          "decorators": [],
                                                                                          "name": "T",
                                                                                          "optional": false,
                                                                                          "typeAnnotation": null,
                                                                                          "start": 1012,
                                                                                          "end": 1013
                                                                                        },
                                                                                        "typeArguments": null,
                                                                                        "start": 1012,
                                                                                        "end": 1013
                                                                                      },
                                                                                      "extendsType": {
                                                                                        "type": "TSLiteralType",
                                                                                        "literal": {
                                                                                          "type": "Literal",
                                                                                          "value": 39,
                                                                                          "raw": "39",
                                                                                          "start": 1022,
                                                                                          "end": 1024
                                                                                        },
                                                                                        "start": 1022,
                                                                                        "end": 1024
                                                                                      },
                                                                                      "trueType": {
                                                                                        "type": "TSLiteralType",
                                                                                        "literal": {
                                                                                          "type": "Literal",
                                                                                          "value": "39",
                                                                                          "raw": "'39'",
                                                                                          "start": 1027,
                                                                                          "end": 1031
                                                                                        },
                                                                                        "start": 1027,
                                                                                        "end": 1031
                                                                                      },
                                                                                      "falseType": {
                                                                                        "type": "TSConditionalType",
                                                                                        "checkType": {
                                                                                          "type": "TSTypeReference",
                                                                                          "typeName": {
                                                                                            "type": "Identifier",
                                                                                            "decorators": [],
                                                                                            "name": "T",
                                                                                            "optional": false,
                                                                                            "typeAnnotation": null,
                                                                                            "start": 1038,
                                                                                            "end": 1039
                                                                                          },
                                                                                          "typeArguments": null,
                                                                                          "start": 1038,
                                                                                          "end": 1039
                                                                                        },
                                                                                        "extendsType": {
                                                                                          "type": "TSLiteralType",
                                                                                          "literal": {
                                                                                            "type": "Literal",
                                                                                            "value": 40,
                                                                                            "raw": "40",
                                                                                            "start": 1048,
                                                                                            "end": 1050
                                                                                          },
                                                                                          "start": 1048,
                                                                                          "end": 1050
                                                                                        },
                                                                                        "trueType": {
                                                                                          "type": "TSLiteralType",
                                                                                          "literal": {
                                                                                            "type": "Literal",
                                                                                            "value": "40",
                                                                                            "raw": "'40'",
                                                                                            "start": 1053,
                                                                                            "end": 1057
                                                                                          },
                                                                                          "start": 1053,
                                                                                          "end": 1057
                                                                                        },
                                                                                        "falseType": {
                                                                                          "type": "TSConditionalType",
                                                                                          "checkType": {
                                                                                            "type": "TSTypeReference",
                                                                                            "typeName": {
                                                                                              "type": "Identifier",
                                                                                              "decorators": [],
                                                                                              "name": "T",
                                                                                              "optional": false,
                                                                                              "typeAnnotation": null,
                                                                                              "start": 1064,
                                                                                              "end": 1065
                                                                                            },
                                                                                            "typeArguments": null,
                                                                                            "start": 1064,
                                                                                            "end": 1065
                                                                                          },
                                                                                          "extendsType": {
                                                                                            "type": "TSLiteralType",
                                                                                            "literal": {
                                                                                              "type": "Literal",
                                                                                              "value": 41,
                                                                                              "raw": "41",
                                                                                              "start": 1074,
                                                                                              "end": 1076
                                                                                            },
                                                                                            "start": 1074,
                                                                                            "end": 1076
                                                                                          },
                                                                                          "trueType": {
                                                                                            "type": "TSLiteralType",
                                                                                            "literal": {
                                                                                              "type": "Literal",
                                                                                              "value": "41",
                                                                                              "raw": "'41'",
                                                                                              "start": 1079,
                                                                                              "end": 1083
                                                                                            },
                                                                                            "start": 1079,
                                                                                            "end": 1083
                                                                                          },
                                                                                          "falseType": {
                                                                                            "type": "TSConditionalType",
                                                                                            "checkType": {
                                                                                              "type": "TSTypeReference",
                                                                                              "typeName": {
                                                                                                "type": "Identifier",
                                                                                                "decorators": [],
                                                                                                "name": "T",
                                                                                                "optional": false,
                                                                                                "typeAnnotation": null,
                                                                                                "start": 1090,
                                                                                                "end": 1091
                                                                                              },
                                                                                              "typeArguments": null,
                                                                                              "start": 1090,
                                                                                              "end": 1091
                                                                                            },
                                                                                            "extendsType": {
                                                                                              "type": "TSLiteralType",
                                                                                              "literal": {
                                                                                                "type": "Literal",
                                                                                                "value": 42,
                                                                                                "raw": "42",
                                                                                                "start": 1100,
                                                                                                "end": 1102
                                                                                              },
                                                                                              "start": 1100,
                                                                                              "end": 1102
                                                                                            },
                                                                                            "trueType": {
                                                                                              "type": "TSLiteralType",
                                                                                              "literal": {
                                                                                                "type": "Literal",
                                                                                                "value": "42",
                                                                                                "raw": "'42'",
                                                                                                "start": 1105,
                                                                                                "end": 1109
                                                                                              },
                                                                                              "start": 1105,
                                                                                              "end": 1109
                                                                                            },
                                                                                            "falseType": {
                                                                                              "type": "TSConditionalType",
                                                                                              "checkType": {
                                                                                                "type": "TSTypeReference",
                                                                                                "typeName": {
                                                                                                  "type": "Identifier",
                                                                                                  "decorators": [],
                                                                                                  "name": "T",
                                                                                                  "optional": false,
                                                                                                  "typeAnnotation": null,
                                                                                                  "start": 1116,
                                                                                                  "end": 1117
                                                                                                },
                                                                                                "typeArguments": null,
                                                                                                "start": 1116,
                                                                                                "end": 1117
                                                                                              },
                                                                                              "extendsType": {
                                                                                                "type": "TSLiteralType",
                                                                                                "literal": {
                                                                                                  "type": "Literal",
                                                                                                  "value": 43,
                                                                                                  "raw": "43",
                                                                                                  "start": 1126,
                                                                                                  "end": 1128
                                                                                                },
                                                                                                "start": 1126,
                                                                                                "end": 1128
                                                                                              },
                                                                                              "trueType": {
                                                                                                "type": "TSLiteralType",
                                                                                                "literal": {
                                                                                                  "type": "Literal",
                                                                                                  "value": "43",
                                                                                                  "raw": "'43'",
                                                                                                  "start": 1131,
                                                                                                  "end": 1135
                                                                                                },
                                                                                                "start": 1131,
                                                                                                "end": 1135
                                                                                              },
                                                                                              "falseType": {
                                                                                                "type": "TSConditionalType",
                                                                                                "checkType": {
                                                                                                  "type": "TSTypeReference",
                                                                                                  "typeName": {
                                                                                                    "type": "Identifier",
                                                                                                    "decorators": [],
                                                                                                    "name": "T",
                                                                                                    "optional": false,
                                                                                                    "typeAnnotation": null,
                                                                                                    "start": 1142,
                                                                                                    "end": 1143
                                                                                                  },
                                                                                                  "typeArguments": null,
                                                                                                  "start": 1142,
                                                                                                  "end": 1143
                                                                                                },
                                                                                                "extendsType": {
                                                                                                  "type": "TSLiteralType",
                                                                                                  "literal": {
                                                                                                    "type": "Literal",
                                                                                                    "value": 44,
                                                                                                    "raw": "44",
                                                                                                    "start": 1152,
                                                                                                    "end": 1154
                                                                                                  },
                                                                                                  "start": 1152,
                                                                                                  "end": 1154
                                                                                                },
                                                                                                "trueType": {
                                                                                                  "type": "TSLiteralType",
                                                                                                  "literal": {
                                                                                                    "type": "Literal",
                                                                                                    "value": "44",
                                                                                                    "raw": "'44'",
                                                                                                    "start": 1157,
                                                                                                    "end": 1161
                                                                                                  },
                                                                                                  "start": 1157,
                                                                                                  "end": 1161
                                                                                                },
                                                                                                "falseType": {
                                                                                                  "type": "TSConditionalType",
                                                                                                  "checkType": {
                                                                                                    "type": "TSTypeReference",
                                                                                                    "typeName": {
                                                                                                      "type": "Identifier",
                                                                                                      "decorators": [],
                                                                                                      "name": "T",
                                                                                                      "optional": false,
                                                                                                      "typeAnnotation": null,
                                                                                                      "start": 1168,
                                                                                                      "end": 1169
                                                                                                    },
                                                                                                    "typeArguments": null,
                                                                                                    "start": 1168,
                                                                                                    "end": 1169
                                                                                                  },
                                                                                                  "extendsType": {
                                                                                                    "type": "TSLiteralType",
                                                                                                    "literal": {
                                                                                                      "type": "Literal",
                                                                                                      "value": 45,
                                                                                                      "raw": "45",
                                                                                                      "start": 1178,
                                                                                                      "end": 1180
                                                                                                    },
                                                                                                    "start": 1178,
                                                                                                    "end": 1180
                                                                                                  },
                                                                                                  "trueType": {
                                                                                                    "type": "TSLiteralType",
                                                                                                    "literal": {
                                                                                                      "type": "Literal",
                                                                                                      "value": "45",
                                                                                                      "raw": "'45'",
                                                                                                      "start": 1183,
                                                                                                      "end": 1187
                                                                                                    },
                                                                                                    "start": 1183,
                                                                                                    "end": 1187
                                                                                                  },
                                                                                                  "falseType": {
                                                                                                    "type": "TSConditionalType",
                                                                                                    "checkType": {
                                                                                                      "type": "TSTypeReference",
                                                                                                      "typeName": {
                                                                                                        "type": "Identifier",
                                                                                                        "decorators": [],
                                                                                                        "name": "T",
                                                                                                        "optional": false,
                                                                                                        "typeAnnotation": null,
                                                                                                        "start": 1194,
                                                                                                        "end": 1195
                                                                                                      },
                                                                                                      "typeArguments": null,
                                                                                                      "start": 1194,
                                                                                                      "end": 1195
                                                                                                    },
                                                                                                    "extendsType": {
                                                                                                      "type": "TSLiteralType",
                                                                                                      "literal": {
                                                                                                        "type": "Literal",
                                                                                                        "value": 46,
                                                                                                        "raw": "46",
                                                                                                        "start": 1204,
                                                                                                        "end": 1206
                                                                                                      },
                                                                                                      "start": 1204,
                                                                                                      "end": 1206
                                                                                                    },
                                                                                                    "trueType": {
                                                                                                      "type": "TSLiteralType",
                                                                                                      "literal": {
                                                                                                        "type": "Literal",
                                                                                                        "value": "46",
                                                                                                        "raw": "'46'",
                                                                                                        "start": 1209,
                                                                                                        "end": 1213
                                                                                                      },
                                                                                                      "start": 1209,
                                                                                                      "end": 1213
                                                                                                    },
                                                                                                    "falseType": {
                                                                                                      "type": "TSConditionalType",
                                                                                                      "checkType": {
                                                                                                        "type": "TSTypeReference",
                                                                                                        "typeName": {
                                                                                                          "type": "Identifier",
                                                                                                          "decorators": [],
                                                                                                          "name": "T",
                                                                                                          "optional": false,
                                                                                                          "typeAnnotation": null,
                                                                                                          "start": 1220,
                                                                                                          "end": 1221
                                                                                                        },
                                                                                                        "typeArguments": null,
                                                                                                        "start": 1220,
                                                                                                        "end": 1221
                                                                                                      },
                                                                                                      "extendsType": {
                                                                                                        "type": "TSLiteralType",
                                                                                                        "literal": {
                                                                                                          "type": "Literal",
                                                                                                          "value": 47,
                                                                                                          "raw": "47",
                                                                                                          "start": 1230,
                                                                                                          "end": 1232
                                                                                                        },
                                                                                                        "start": 1230,
                                                                                                        "end": 1232
                                                                                                      },
                                                                                                      "trueType": {
                                                                                                        "type": "TSLiteralType",
                                                                                                        "literal": {
                                                                                                          "type": "Literal",
                                                                                                          "value": "47",
                                                                                                          "raw": "'47'",
                                                                                                          "start": 1235,
                                                                                                          "end": 1239
                                                                                                        },
                                                                                                        "start": 1235,
                                                                                                        "end": 1239
                                                                                                      },
                                                                                                      "falseType": {
                                                                                                        "type": "TSConditionalType",
                                                                                                        "checkType": {
                                                                                                          "type": "TSTypeReference",
                                                                                                          "typeName": {
                                                                                                            "type": "Identifier",
                                                                                                            "decorators": [],
                                                                                                            "name": "T",
                                                                                                            "optional": false,
                                                                                                            "typeAnnotation": null,
                                                                                                            "start": 1246,
                                                                                                            "end": 1247
                                                                                                          },
                                                                                                          "typeArguments": null,
                                                                                                          "start": 1246,
                                                                                                          "end": 1247
                                                                                                        },
                                                                                                        "extendsType": {
                                                                                                          "type": "TSLiteralType",
                                                                                                          "literal": {
                                                                                                            "type": "Literal",
                                                                                                            "value": 48,
                                                                                                            "raw": "48",
                                                                                                            "start": 1256,
                                                                                                            "end": 1258
                                                                                                          },
                                                                                                          "start": 1256,
                                                                                                          "end": 1258
                                                                                                        },
                                                                                                        "trueType": {
                                                                                                          "type": "TSLiteralType",
                                                                                                          "literal": {
                                                                                                            "type": "Literal",
                                                                                                            "value": "48",
                                                                                                            "raw": "'48'",
                                                                                                            "start": 1261,
                                                                                                            "end": 1265
                                                                                                          },
                                                                                                          "start": 1261,
                                                                                                          "end": 1265
                                                                                                        },
                                                                                                        "falseType": {
                                                                                                          "type": "TSConditionalType",
                                                                                                          "checkType": {
                                                                                                            "type": "TSTypeReference",
                                                                                                            "typeName": {
                                                                                                              "type": "Identifier",
                                                                                                              "decorators": [],
                                                                                                              "name": "T",
                                                                                                              "optional": false,
                                                                                                              "typeAnnotation": null,
                                                                                                              "start": 1272,
                                                                                                              "end": 1273
                                                                                                            },
                                                                                                            "typeArguments": null,
                                                                                                            "start": 1272,
                                                                                                            "end": 1273
                                                                                                          },
                                                                                                          "extendsType": {
                                                                                                            "type": "TSLiteralType",
                                                                                                            "literal": {
                                                                                                              "type": "Literal",
                                                                                                              "value": 49,
                                                                                                              "raw": "49",
                                                                                                              "start": 1282,
                                                                                                              "end": 1284
                                                                                                            },
                                                                                                            "start": 1282,
                                                                                                            "end": 1284
                                                                                                          },
                                                                                                          "trueType": {
                                                                                                            "type": "TSLiteralType",
                                                                                                            "literal": {
                                                                                                              "type": "Literal",
                                                                                                              "value": "49",
                                                                                                              "raw": "'49'",
                                                                                                              "start": 1287,
                                                                                                              "end": 1291
                                                                                                            },
                                                                                                            "start": 1287,
                                                                                                            "end": 1291
                                                                                                          },
                                                                                                          "falseType": {
                                                                                                            "type": "TSConditionalType",
                                                                                                            "checkType": {
                                                                                                              "type": "TSTypeReference",
                                                                                                              "typeName": {
                                                                                                                "type": "Identifier",
                                                                                                                "decorators": [],
                                                                                                                "name": "T",
                                                                                                                "optional": false,
                                                                                                                "typeAnnotation": null,
                                                                                                                "start": 1298,
                                                                                                                "end": 1299
                                                                                                              },
                                                                                                              "typeArguments": null,
                                                                                                              "start": 1298,
                                                                                                              "end": 1299
                                                                                                            },
                                                                                                            "extendsType": {
                                                                                                              "type": "TSLiteralType",
                                                                                                              "literal": {
                                                                                                                "type": "Literal",
                                                                                                                "value": 50,
                                                                                                                "raw": "50",
                                                                                                                "start": 1308,
                                                                                                                "end": 1310
                                                                                                              },
                                                                                                              "start": 1308,
                                                                                                              "end": 1310
                                                                                                            },
                                                                                                            "trueType": {
                                                                                                              "type": "TSLiteralType",
                                                                                                              "literal": {
                                                                                                                "type": "Literal",
                                                                                                                "value": "50",
                                                                                                                "raw": "'50'",
                                                                                                                "start": 1313,
                                                                                                                "end": 1317
                                                                                                              },
                                                                                                              "start": 1313,
                                                                                                              "end": 1317
                                                                                                            },
                                                                                                            "falseType": {
                                                                                                              "type": "TSConditionalType",
                                                                                                              "checkType": {
                                                                                                                "type": "TSTypeReference",
                                                                                                                "typeName": {
                                                                                                                  "type": "Identifier",
                                                                                                                  "decorators": [],
                                                                                                                  "name": "T",
                                                                                                                  "optional": false,
                                                                                                                  "typeAnnotation": null,
                                                                                                                  "start": 1324,
                                                                                                                  "end": 1325
                                                                                                                },
                                                                                                                "typeArguments": null,
                                                                                                                "start": 1324,
                                                                                                                "end": 1325
                                                                                                              },
                                                                                                              "extendsType": {
                                                                                                                "type": "TSLiteralType",
                                                                                                                "literal": {
                                                                                                                  "type": "Literal",
                                                                                                                  "value": 51,
                                                                                                                  "raw": "51",
                                                                                                                  "start": 1334,
                                                                                                                  "end": 1336
                                                                                                                },
                                                                                                                "start": 1334,
                                                                                                                "end": 1336
                                                                                                              },
                                                                                                              "trueType": {
                                                                                                                "type": "TSLiteralType",
                                                                                                                "literal": {
                                                                                                                  "type": "Literal",
                                                                                                                  "value": "51",
                                                                                                                  "raw": "'51'",
                                                                                                                  "start": 1339,
                                                                                                                  "end": 1343
                                                                                                                },
                                                                                                                "start": 1339,
                                                                                                                "end": 1343
                                                                                                              },
                                                                                                              "falseType": {
                                                                                                                "type": "TSConditionalType",
                                                                                                                "checkType": {
                                                                                                                  "type": "TSTypeReference",
                                                                                                                  "typeName": {
                                                                                                                    "type": "Identifier",
                                                                                                                    "decorators": [],
                                                                                                                    "name": "T",
                                                                                                                    "optional": false,
                                                                                                                    "typeAnnotation": null,
                                                                                                                    "start": 1350,
                                                                                                                    "end": 1351
                                                                                                                  },
                                                                                                                  "typeArguments": null,
                                                                                                                  "start": 1350,
                                                                                                                  "end": 1351
                                                                                                                },
                                                                                                                "extendsType": {
                                                                                                                  "type": "TSLiteralType",
                                                                                                                  "literal": {
                                                                                                                    "type": "Literal",
                                                                                                                    "value": 52,
                                                                                                                    "raw": "52",
                                                                                                                    "start": 1360,
                                                                                                                    "end": 1362
                                                                                                                  },
                                                                                                                  "start": 1360,
                                                                                                                  "end": 1362
                                                                                                                },
                                                                                                                "trueType": {
                                                                                                                  "type": "TSLiteralType",
                                                                                                                  "literal": {
                                                                                                                    "type": "Literal",
                                                                                                                    "value": "52",
                                                                                                                    "raw": "'52'",
                                                                                                                    "start": 1365,
                                                                                                                    "end": 1369
                                                                                                                  },
                                                                                                                  "start": 1365,
                                                                                                                  "end": 1369
                                                                                                                },
                                                                                                                "falseType": {
                                                                                                                  "type": "TSConditionalType",
                                                                                                                  "checkType": {
                                                                                                                    "type": "TSTypeReference",
                                                                                                                    "typeName": {
                                                                                                                      "type": "Identifier",
                                                                                                                      "decorators": [],
                                                                                                                      "name": "T",
                                                                                                                      "optional": false,
                                                                                                                      "typeAnnotation": null,
                                                                                                                      "start": 1376,
                                                                                                                      "end": 1377
                                                                                                                    },
                                                                                                                    "typeArguments": null,
                                                                                                                    "start": 1376,
                                                                                                                    "end": 1377
                                                                                                                  },
                                                                                                                  "extendsType": {
                                                                                                                    "type": "TSLiteralType",
                                                                                                                    "literal": {
                                                                                                                      "type": "Literal",
                                                                                                                      "value": 53,
                                                                                                                      "raw": "53",
                                                                                                                      "start": 1386,
                                                                                                                      "end": 1388
                                                                                                                    },
                                                                                                                    "start": 1386,
                                                                                                                    "end": 1388
                                                                                                                  },
                                                                                                                  "trueType": {
                                                                                                                    "type": "TSLiteralType",
                                                                                                                    "literal": {
                                                                                                                      "type": "Literal",
                                                                                                                      "value": "53",
                                                                                                                      "raw": "'53'",
                                                                                                                      "start": 1391,
                                                                                                                      "end": 1395
                                                                                                                    },
                                                                                                                    "start": 1391,
                                                                                                                    "end": 1395
                                                                                                                  },
                                                                                                                  "falseType": {
                                                                                                                    "type": "TSConditionalType",
                                                                                                                    "checkType": {
                                                                                                                      "type": "TSTypeReference",
                                                                                                                      "typeName": {
                                                                                                                        "type": "Identifier",
                                                                                                                        "decorators": [],
                                                                                                                        "name": "T",
                                                                                                                        "optional": false,
                                                                                                                        "typeAnnotation": null,
                                                                                                                        "start": 1402,
                                                                                                                        "end": 1403
                                                                                                                      },
                                                                                                                      "typeArguments": null,
                                                                                                                      "start": 1402,
                                                                                                                      "end": 1403
                                                                                                                    },
                                                                                                                    "extendsType": {
                                                                                                                      "type": "TSLiteralType",
                                                                                                                      "literal": {
                                                                                                                        "type": "Literal",
                                                                                                                        "value": 54,
                                                                                                                        "raw": "54",
                                                                                                                        "start": 1412,
                                                                                                                        "end": 1414
                                                                                                                      },
                                                                                                                      "start": 1412,
                                                                                                                      "end": 1414
                                                                                                                    },
                                                                                                                    "trueType": {
                                                                                                                      "type": "TSLiteralType",
                                                                                                                      "literal": {
                                                                                                                        "type": "Literal",
                                                                                                                        "value": "54",
                                                                                                                        "raw": "'54'",
                                                                                                                        "start": 1417,
                                                                                                                        "end": 1421
                                                                                                                      },
                                                                                                                      "start": 1417,
                                                                                                                      "end": 1421
                                                                                                                    },
                                                                                                                    "falseType": {
                                                                                                                      "type": "TSConditionalType",
                                                                                                                      "checkType": {
                                                                                                                        "type": "TSTypeReference",
                                                                                                                        "typeName": {
                                                                                                                          "type": "Identifier",
                                                                                                                          "decorators": [],
                                                                                                                          "name": "T",
                                                                                                                          "optional": false,
                                                                                                                          "typeAnnotation": null,
                                                                                                                          "start": 1428,
                                                                                                                          "end": 1429
                                                                                                                        },
                                                                                                                        "typeArguments": null,
                                                                                                                        "start": 1428,
                                                                                                                        "end": 1429
                                                                                                                      },
                                                                                                                      "extendsType": {
                                                                                                                        "type": "TSLiteralType",
                                                                                                                        "literal": {
                                                                                                                          "type": "Literal",
                                                                                                                          "value": 55,
                                                                                                                          "raw": "55",
                                                                                                                          "start": 1438,
                                                                                                                          "end": 1440
                                                                                                                        },
                                                                                                                        "start": 1438,
                                                                                                                        "end": 1440
                                                                                                                      },
                                                                                                                      "trueType": {
                                                                                                                        "type": "TSLiteralType",
                                                                                                                        "literal": {
                                                                                                                          "type": "Literal",
                                                                                                                          "value": "55",
                                                                                                                          "raw": "'55'",
                                                                                                                          "start": 1443,
                                                                                                                          "end": 1447
                                                                                                                        },
                                                                                                                        "start": 1443,
                                                                                                                        "end": 1447
                                                                                                                      },
                                                                                                                      "falseType": {
                                                                                                                        "type": "TSConditionalType",
                                                                                                                        "checkType": {
                                                                                                                          "type": "TSTypeReference",
                                                                                                                          "typeName": {
                                                                                                                            "type": "Identifier",
                                                                                                                            "decorators": [],
                                                                                                                            "name": "T",
                                                                                                                            "optional": false,
                                                                                                                            "typeAnnotation": null,
                                                                                                                            "start": 1454,
                                                                                                                            "end": 1455
                                                                                                                          },
                                                                                                                          "typeArguments": null,
                                                                                                                          "start": 1454,
                                                                                                                          "end": 1455
                                                                                                                        },
                                                                                                                        "extendsType": {
                                                                                                                          "type": "TSLiteralType",
                                                                                                                          "literal": {
                                                                                                                            "type": "Literal",
                                                                                                                            "value": 56,
                                                                                                                            "raw": "56",
                                                                                                                            "start": 1464,
                                                                                                                            "end": 1466
                                                                                                                          },
                                                                                                                          "start": 1464,
                                                                                                                          "end": 1466
                                                                                                                        },
                                                                                                                        "trueType": {
                                                                                                                          "type": "TSLiteralType",
                                                                                                                          "literal": {
                                                                                                                            "type": "Literal",
                                                                                                                            "value": "56",
                                                                                                                            "raw": "'56'",
                                                                                                                            "start": 1469,
                                                                                                                            "end": 1473
                                                                                                                          },
                                                                                                                          "start": 1469,
                                                                                                                          "end": 1473
                                                                                                                        },
                                                                                                                        "falseType": {
                                                                                                                          "type": "TSConditionalType",
                                                                                                                          "checkType": {
                                                                                                                            "type": "TSTypeReference",
                                                                                                                            "typeName": {
                                                                                                                              "type": "Identifier",
                                                                                                                              "decorators": [],
                                                                                                                              "name": "T",
                                                                                                                              "optional": false,
                                                                                                                              "typeAnnotation": null,
                                                                                                                              "start": 1480,
                                                                                                                              "end": 1481
                                                                                                                            },
                                                                                                                            "typeArguments": null,
                                                                                                                            "start": 1480,
                                                                                                                            "end": 1481
                                                                                                                          },
                                                                                                                          "extendsType": {
                                                                                                                            "type": "TSLiteralType",
                                                                                                                            "literal": {
                                                                                                                              "type": "Literal",
                                                                                                                              "value": 57,
                                                                                                                              "raw": "57",
                                                                                                                              "start": 1490,
                                                                                                                              "end": 1492
                                                                                                                            },
                                                                                                                            "start": 1490,
                                                                                                                            "end": 1492
                                                                                                                          },
                                                                                                                          "trueType": {
                                                                                                                            "type": "TSLiteralType",
                                                                                                                            "literal": {
                                                                                                                              "type": "Literal",
                                                                                                                              "value": "57",
                                                                                                                              "raw": "'57'",
                                                                                                                              "start": 1495,
                                                                                                                              "end": 1499
                                                                                                                            },
                                                                                                                            "start": 1495,
                                                                                                                            "end": 1499
                                                                                                                          },
                                                                                                                          "falseType": {
                                                                                                                            "type": "TSConditionalType",
                                                                                                                            "checkType": {
                                                                                                                              "type": "TSTypeReference",
                                                                                                                              "typeName": {
                                                                                                                                "type": "Identifier",
                                                                                                                                "decorators": [],
                                                                                                                                "name": "T",
                                                                                                                                "optional": false,
                                                                                                                                "typeAnnotation": null,
                                                                                                                                "start": 1506,
                                                                                                                                "end": 1507
                                                                                                                              },
                                                                                                                              "typeArguments": null,
                                                                                                                              "start": 1506,
                                                                                                                              "end": 1507
                                                                                                                            },
                                                                                                                            "extendsType": {
                                                                                                                              "type": "TSLiteralType",
                                                                                                                              "literal": {
                                                                                                                                "type": "Literal",
                                                                                                                                "value": 58,
                                                                                                                                "raw": "58",
                                                                                                                                "start": 1516,
                                                                                                                                "end": 1518
                                                                                                                              },
                                                                                                                              "start": 1516,
                                                                                                                              "end": 1518
                                                                                                                            },
                                                                                                                            "trueType": {
                                                                                                                              "type": "TSLiteralType",
                                                                                                                              "literal": {
                                                                                                                                "type": "Literal",
                                                                                                                                "value": "58",
                                                                                                                                "raw": "'58'",
                                                                                                                                "start": 1521,
                                                                                                                                "end": 1525
                                                                                                                              },
                                                                                                                              "start": 1521,
                                                                                                                              "end": 1525
                                                                                                                            },
                                                                                                                            "falseType": {
                                                                                                                              "type": "TSConditionalType",
                                                                                                                              "checkType": {
                                                                                                                                "type": "TSTypeReference",
                                                                                                                                "typeName": {
                                                                                                                                  "type": "Identifier",
                                                                                                                                  "decorators": [],
                                                                                                                                  "name": "T",
                                                                                                                                  "optional": false,
                                                                                                                                  "typeAnnotation": null,
                                                                                                                                  "start": 1532,
                                                                                                                                  "end": 1533
                                                                                                                                },
                                                                                                                                "typeArguments": null,
                                                                                                                                "start": 1532,
                                                                                                                                "end": 1533
                                                                                                                              },
                                                                                                                              "extendsType": {
                                                                                                                                "type": "TSLiteralType",
                                                                                                                                "literal": {
                                                                                                                                  "type": "Literal",
                                                                                                                                  "value": 59,
                                                                                                                                  "raw": "59",
                                                                                                                                  "start": 1542,
                                                                                                                                  "end": 1544
                                                                                                                                },
                                                                                                                                "start": 1542,
                                                                                                                                "end": 1544
                                                                                                                              },
                                                                                                                              "trueType": {
                                                                                                                                "type": "TSLiteralType",
                                                                                                                                "literal": {
                                                                                                                                  "type": "Literal",
                                                                                                                                  "value": "59",
                                                                                                                                  "raw": "'59'",
                                                                                                                                  "start": 1547,
                                                                                                                                  "end": 1551
                                                                                                                                },
                                                                                                                                "start": 1547,
                                                                                                                                "end": 1551
                                                                                                                              },
                                                                                                                              "falseType": {
                                                                                                                                "type": "TSConditionalType",
                                                                                                                                "checkType": {
                                                                                                                                  "type": "TSTypeReference",
                                                                                                                                  "typeName": {
                                                                                                                                    "type": "Identifier",
                                                                                                                                    "decorators": [],
                                                                                                                                    "name": "T",
                                                                                                                                    "optional": false,
                                                                                                                                    "typeAnnotation": null,
                                                                                                                                    "start": 1558,
                                                                                                                                    "end": 1559
                                                                                                                                  },
                                                                                                                                  "typeArguments": null,
                                                                                                                                  "start": 1558,
                                                                                                                                  "end": 1559
                                                                                                                                },
                                                                                                                                "extendsType": {
                                                                                                                                  "type": "TSLiteralType",
                                                                                                                                  "literal": {
                                                                                                                                    "type": "Literal",
                                                                                                                                    "value": 60,
                                                                                                                                    "raw": "60",
                                                                                                                                    "start": 1568,
                                                                                                                                    "end": 1570
                                                                                                                                  },
                                                                                                                                  "start": 1568,
                                                                                                                                  "end": 1570
                                                                                                                                },
                                                                                                                                "trueType": {
                                                                                                                                  "type": "TSLiteralType",
                                                                                                                                  "literal": {
                                                                                                                                    "type": "Literal",
                                                                                                                                    "value": "60",
                                                                                                                                    "raw": "'60'",
                                                                                                                                    "start": 1573,
                                                                                                                                    "end": 1577
                                                                                                                                  },
                                                                                                                                  "start": 1573,
                                                                                                                                  "end": 1577
                                                                                                                                },
                                                                                                                                "falseType": {
                                                                                                                                  "type": "TSConditionalType",
                                                                                                                                  "checkType": {
                                                                                                                                    "type": "TSTypeReference",
                                                                                                                                    "typeName": {
                                                                                                                                      "type": "Identifier",
                                                                                                                                      "decorators": [],
                                                                                                                                      "name": "T",
                                                                                                                                      "optional": false,
                                                                                                                                      "typeAnnotation": null,
                                                                                                                                      "start": 1584,
                                                                                                                                      "end": 1585
                                                                                                                                    },
                                                                                                                                    "typeArguments": null,
                                                                                                                                    "start": 1584,
                                                                                                                                    "end": 1585
                                                                                                                                  },
                                                                                                                                  "extendsType": {
                                                                                                                                    "type": "TSLiteralType",
                                                                                                                                    "literal": {
                                                                                                                                      "type": "Literal",
                                                                                                                                      "value": 61,
                                                                                                                                      "raw": "61",
                                                                                                                                      "start": 1594,
                                                                                                                                      "end": 1596
                                                                                                                                    },
                                                                                                                                    "start": 1594,
                                                                                                                                    "end": 1596
                                                                                                                                  },
                                                                                                                                  "trueType": {
                                                                                                                                    "type": "TSLiteralType",
                                                                                                                                    "literal": {
                                                                                                                                      "type": "Literal",
                                                                                                                                      "value": "61",
                                                                                                                                      "raw": "'61'",
                                                                                                                                      "start": 1599,
                                                                                                                                      "end": 1603
                                                                                                                                    },
                                                                                                                                    "start": 1599,
                                                                                                                                    "end": 1603
                                                                                                                                  },
                                                                                                                                  "falseType": {
                                                                                                                                    "type": "TSConditionalType",
                                                                                                                                    "checkType": {
                                                                                                                                      "type": "TSTypeReference",
                                                                                                                                      "typeName": {
                                                                                                                                        "type": "Identifier",
                                                                                                                                        "decorators": [],
                                                                                                                                        "name": "T",
                                                                                                                                        "optional": false,
                                                                                                                                        "typeAnnotation": null,
                                                                                                                                        "start": 1610,
                                                                                                                                        "end": 1611
                                                                                                                                      },
                                                                                                                                      "typeArguments": null,
                                                                                                                                      "start": 1610,
                                                                                                                                      "end": 1611
                                                                                                                                    },
                                                                                                                                    "extendsType": {
                                                                                                                                      "type": "TSLiteralType",
                                                                                                                                      "literal": {
                                                                                                                                        "type": "Literal",
                                                                                                                                        "value": 62,
                                                                                                                                        "raw": "62",
                                                                                                                                        "start": 1620,
                                                                                                                                        "end": 1622
                                                                                                                                      },
                                                                                                                                      "start": 1620,
                                                                                                                                      "end": 1622
                                                                                                                                    },
                                                                                                                                    "trueType": {
                                                                                                                                      "type": "TSLiteralType",
                                                                                                                                      "literal": {
                                                                                                                                        "type": "Literal",
                                                                                                                                        "value": "62",
                                                                                                                                        "raw": "'62'",
                                                                                                                                        "start": 1625,
                                                                                                                                        "end": 1629
                                                                                                                                      },
                                                                                                                                      "start": 1625,
                                                                                                                                      "end": 1629
                                                                                                                                    },
                                                                                                                                    "falseType": {
                                                                                                                                      "type": "TSConditionalType",
                                                                                                                                      "checkType": {
                                                                                                                                        "type": "TSTypeReference",
                                                                                                                                        "typeName": {
                                                                                                                                          "type": "Identifier",
                                                                                                                                          "decorators": [],
                                                                                                                                          "name": "T",
                                                                                                                                          "optional": false,
                                                                                                                                          "typeAnnotation": null,
                                                                                                                                          "start": 1636,
                                                                                                                                          "end": 1637
                                                                                                                                        },
                                                                                                                                        "typeArguments": null,
                                                                                                                                        "start": 1636,
                                                                                                                                        "end": 1637
                                                                                                                                      },
                                                                                                                                      "extendsType": {
                                                                                                                                        "type": "TSLiteralType",
                                                                                                                                        "literal": {
                                                                                                                                          "type": "Literal",
                                                                                                                                          "value": 63,
                                                                                                                                          "raw": "63",
                                                                                                                                          "start": 1646,
                                                                                                                                          "end": 1648
                                                                                                                                        },
                                                                                                                                        "start": 1646,
                                                                                                                                        "end": 1648
                                                                                                                                      },
                                                                                                                                      "trueType": {
                                                                                                                                        "type": "TSLiteralType",
                                                                                                                                        "literal": {
                                                                                                                                          "type": "Literal",
                                                                                                                                          "value": "63",
                                                                                                                                          "raw": "'63'",
                                                                                                                                          "start": 1651,
                                                                                                                                          "end": 1655
                                                                                                                                        },
                                                                                                                                        "start": 1651,
                                                                                                                                        "end": 1655
                                                                                                                                      },
                                                                                                                                      "falseType": {
                                                                                                                                        "type": "TSConditionalType",
                                                                                                                                        "checkType": {
                                                                                                                                          "type": "TSTypeReference",
                                                                                                                                          "typeName": {
                                                                                                                                            "type": "Identifier",
                                                                                                                                            "decorators": [],
                                                                                                                                            "name": "T",
                                                                                                                                            "optional": false,
                                                                                                                                            "typeAnnotation": null,
                                                                                                                                            "start": 1662,
                                                                                                                                            "end": 1663
                                                                                                                                          },
                                                                                                                                          "typeArguments": null,
                                                                                                                                          "start": 1662,
                                                                                                                                          "end": 1663
                                                                                                                                        },
                                                                                                                                        "extendsType": {
                                                                                                                                          "type": "TSLiteralType",
                                                                                                                                          "literal": {
                                                                                                                                            "type": "Literal",
                                                                                                                                            "value": 64,
                                                                                                                                            "raw": "64",
                                                                                                                                            "start": 1672,
                                                                                                                                            "end": 1674
                                                                                                                                          },
                                                                                                                                          "start": 1672,
                                                                                                                                          "end": 1674
                                                                                                                                        },
                                                                                                                                        "trueType": {
                                                                                                                                          "type": "TSLiteralType",
                                                                                                                                          "literal": {
                                                                                                                                            "type": "Literal",
                                                                                                                                            "value": "64",
                                                                                                                                            "raw": "'64'",
                                                                                                                                            "start": 1677,
                                                                                                                                            "end": 1681
                                                                                                                                          },
                                                                                                                                          "start": 1677,
                                                                                                                                          "end": 1681
                                                                                                                                        },
                                                                                                                                        "falseType": {
                                                                                                                                          "type": "TSConditionalType",
                                                                                                                                          "checkType": {
                                                                                                                                            "type": "TSTypeReference",
                                                                                                                                            "typeName": {
                                                                                                                                              "type": "Identifier",
                                                                                                                                              "decorators": [],
                                                                                                                                              "name": "T",
                                                                                                                                              "optional": false,
                                                                                                                                              "typeAnnotation": null,
                                                                                                                                              "start": 1688,
                                                                                                                                              "end": 1689
                                                                                                                                            },
                                                                                                                                            "typeArguments": null,
                                                                                                                                            "start": 1688,
                                                                                                                                            "end": 1689
                                                                                                                                          },
                                                                                                                                          "extendsType": {
                                                                                                                                            "type": "TSLiteralType",
                                                                                                                                            "literal": {
                                                                                                                                              "type": "Literal",
                                                                                                                                              "value": 65,
                                                                                                                                              "raw": "65",
                                                                                                                                              "start": 1698,
                                                                                                                                              "end": 1700
                                                                                                                                            },
                                                                                                                                            "start": 1698,
                                                                                                                                            "end": 1700
                                                                                                                                          },
                                                                                                                                          "trueType": {
                                                                                                                                            "type": "TSLiteralType",
                                                                                                                                            "literal": {
                                                                                                                                              "type": "Literal",
                                                                                                                                              "value": "65",
                                                                                                                                              "raw": "'65'",
                                                                                                                                              "start": 1703,
                                                                                                                                              "end": 1707
                                                                                                                                            },
                                                                                                                                            "start": 1703,
                                                                                                                                            "end": 1707
                                                                                                                                          },
                                                                                                                                          "falseType": {
                                                                                                                                            "type": "TSConditionalType",
                                                                                                                                            "checkType": {
                                                                                                                                              "type": "TSTypeReference",
                                                                                                                                              "typeName": {
                                                                                                                                                "type": "Identifier",
                                                                                                                                                "decorators": [],
                                                                                                                                                "name": "T",
                                                                                                                                                "optional": false,
                                                                                                                                                "typeAnnotation": null,
                                                                                                                                                "start": 1714,
                                                                                                                                                "end": 1715
                                                                                                                                              },
                                                                                                                                              "typeArguments": null,
                                                                                                                                              "start": 1714,
                                                                                                                                              "end": 1715
                                                                                                                                            },
                                                                                                                                            "extendsType": {
                                                                                                                                              "type": "TSLiteralType",
                                                                                                                                              "literal": {
                                                                                                                                                "type": "Literal",
                                                                                                                                                "value": 66,
                                                                                                                                                "raw": "66",
                                                                                                                                                "start": 1724,
                                                                                                                                                "end": 1726
                                                                                                                                              },
                                                                                                                                              "start": 1724,
                                                                                                                                              "end": 1726
                                                                                                                                            },
                                                                                                                                            "trueType": {
                                                                                                                                              "type": "TSLiteralType",
                                                                                                                                              "literal": {
                                                                                                                                                "type": "Literal",
                                                                                                                                                "value": "66",
                                                                                                                                                "raw": "'66'",
                                                                                                                                                "start": 1729,
                                                                                                                                                "end": 1733
                                                                                                                                              },
                                                                                                                                              "start": 1729,
                                                                                                                                              "end": 1733
                                                                                                                                            },
                                                                                                                                            "falseType": {
                                                                                                                                              "type": "TSConditionalType",
                                                                                                                                              "checkType": {
                                                                                                                                                "type": "TSTypeReference",
                                                                                                                                                "typeName": {
                                                                                                                                                  "type": "Identifier",
                                                                                                                                                  "decorators": [],
                                                                                                                                                  "name": "T",
                                                                                                                                                  "optional": false,
                                                                                                                                                  "typeAnnotation": null,
                                                                                                                                                  "start": 1740,
                                                                                                                                                  "end": 1741
                                                                                                                                                },
                                                                                                                                                "typeArguments": null,
                                                                                                                                                "start": 1740,
                                                                                                                                                "end": 1741
                                                                                                                                              },
                                                                                                                                              "extendsType": {
                                                                                                                                                "type": "TSLiteralType",
                                                                                                                                                "literal": {
                                                                                                                                                  "type": "Literal",
                                                                                                                                                  "value": 67,
                                                                                                                                                  "raw": "67",
                                                                                                                                                  "start": 1750,
                                                                                                                                                  "end": 1752
                                                                                                                                                },
                                                                                                                                                "start": 1750,
                                                                                                                                                "end": 1752
                                                                                                                                              },
                                                                                                                                              "trueType": {
                                                                                                                                                "type": "TSLiteralType",
                                                                                                                                                "literal": {
                                                                                                                                                  "type": "Literal",
                                                                                                                                                  "value": "67",
                                                                                                                                                  "raw": "'67'",
                                                                                                                                                  "start": 1755,
                                                                                                                                                  "end": 1759
                                                                                                                                                },
                                                                                                                                                "start": 1755,
                                                                                                                                                "end": 1759
                                                                                                                                              },
                                                                                                                                              "falseType": {
                                                                                                                                                "type": "TSConditionalType",
                                                                                                                                                "checkType": {
                                                                                                                                                  "type": "TSTypeReference",
                                                                                                                                                  "typeName": {
                                                                                                                                                    "type": "Identifier",
                                                                                                                                                    "decorators": [],
                                                                                                                                                    "name": "T",
                                                                                                                                                    "optional": false,
                                                                                                                                                    "typeAnnotation": null,
                                                                                                                                                    "start": 1766,
                                                                                                                                                    "end": 1767
                                                                                                                                                  },
                                                                                                                                                  "typeArguments": null,
                                                                                                                                                  "start": 1766,
                                                                                                                                                  "end": 1767
                                                                                                                                                },
                                                                                                                                                "extendsType": {
                                                                                                                                                  "type": "TSLiteralType",
                                                                                                                                                  "literal": {
                                                                                                                                                    "type": "Literal",
                                                                                                                                                    "value": 68,
                                                                                                                                                    "raw": "68",
                                                                                                                                                    "start": 1776,
                                                                                                                                                    "end": 1778
                                                                                                                                                  },
                                                                                                                                                  "start": 1776,
                                                                                                                                                  "end": 1778
                                                                                                                                                },
                                                                                                                                                "trueType": {
                                                                                                                                                  "type": "TSLiteralType",
                                                                                                                                                  "literal": {
                                                                                                                                                    "type": "Literal",
                                                                                                                                                    "value": "68",
                                                                                                                                                    "raw": "'68'",
                                                                                                                                                    "start": 1781,
                                                                                                                                                    "end": 1785
                                                                                                                                                  },
                                                                                                                                                  "start": 1781,
                                                                                                                                                  "end": 1785
                                                                                                                                                },
                                                                                                                                                "falseType": {
                                                                                                                                                  "type": "TSConditionalType",
                                                                                                                                                  "checkType": {
                                                                                                                                                    "type": "TSTypeReference",
                                                                                                                                                    "typeName": {
                                                                                                                                                      "type": "Identifier",
                                                                                                                                                      "decorators": [],
                                                                                                                                                      "name": "T",
                                                                                                                                                      "optional": false,
                                                                                                                                                      "typeAnnotation": null,
                                                                                                                                                      "start": 1792,
                                                                                                                                                      "end": 1793
                                                                                                                                                    },
                                                                                                                                                    "typeArguments": null,
                                                                                                                                                    "start": 1792,
                                                                                                                                                    "end": 1793
                                                                                                                                                  },
                                                                                                                                                  "extendsType": {
                                                                                                                                                    "type": "TSLiteralType",
                                                                                                                                                    "literal": {
                                                                                                                                                      "type": "Literal",
                                                                                                                                                      "value": 69,
                                                                                                                                                      "raw": "69",
                                                                                                                                                      "start": 1802,
                                                                                                                                                      "end": 1804
                                                                                                                                                    },
                                                                                                                                                    "start": 1802,
                                                                                                                                                    "end": 1804
                                                                                                                                                  },
                                                                                                                                                  "trueType": {
                                                                                                                                                    "type": "TSLiteralType",
                                                                                                                                                    "literal": {
                                                                                                                                                      "type": "Literal",
                                                                                                                                                      "value": "69",
                                                                                                                                                      "raw": "'69'",
                                                                                                                                                      "start": 1807,
                                                                                                                                                      "end": 1811
                                                                                                                                                    },
                                                                                                                                                    "start": 1807,
                                                                                                                                                    "end": 1811
                                                                                                                                                  },
                                                                                                                                                  "falseType": {
                                                                                                                                                    "type": "TSConditionalType",
                                                                                                                                                    "checkType": {
                                                                                                                                                      "type": "TSTypeReference",
                                                                                                                                                      "typeName": {
                                                                                                                                                        "type": "Identifier",
                                                                                                                                                        "decorators": [],
                                                                                                                                                        "name": "T",
                                                                                                                                                        "optional": false,
                                                                                                                                                        "typeAnnotation": null,
                                                                                                                                                        "start": 1818,
                                                                                                                                                        "end": 1819
                                                                                                                                                      },
                                                                                                                                                      "typeArguments": null,
                                                                                                                                                      "start": 1818,
                                                                                                                                                      "end": 1819
                                                                                                                                                    },
                                                                                                                                                    "extendsType": {
                                                                                                                                                      "type": "TSLiteralType",
                                                                                                                                                      "literal": {
                                                                                                                                                        "type": "Literal",
                                                                                                                                                        "value": 70,
                                                                                                                                                        "raw": "70",
                                                                                                                                                        "start": 1828,
                                                                                                                                                        "end": 1830
                                                                                                                                                      },
                                                                                                                                                      "start": 1828,
                                                                                                                                                      "end": 1830
                                                                                                                                                    },
                                                                                                                                                    "trueType": {
                                                                                                                                                      "type": "TSLiteralType",
                                                                                                                                                      "literal": {
                                                                                                                                                        "type": "Literal",
                                                                                                                                                        "value": "70",
                                                                                                                                                        "raw": "'70'",
                                                                                                                                                        "start": 1833,
                                                                                                                                                        "end": 1837
                                                                                                                                                      },
                                                                                                                                                      "start": 1833,
                                                                                                                                                      "end": 1837
                                                                                                                                                    },
                                                                                                                                                    "falseType": {
                                                                                                                                                      "type": "TSConditionalType",
                                                                                                                                                      "checkType": {
                                                                                                                                                        "type": "TSTypeReference",
                                                                                                                                                        "typeName": {
                                                                                                                                                          "type": "Identifier",
                                                                                                                                                          "decorators": [],
                                                                                                                                                          "name": "T",
                                                                                                                                                          "optional": false,
                                                                                                                                                          "typeAnnotation": null,
                                                                                                                                                          "start": 1844,
                                                                                                                                                          "end": 1845
                                                                                                                                                        },
                                                                                                                                                        "typeArguments": null,
                                                                                                                                                        "start": 1844,
                                                                                                                                                        "end": 1845
                                                                                                                                                      },
                                                                                                                                                      "extendsType": {
                                                                                                                                                        "type": "TSLiteralType",
                                                                                                                                                        "literal": {
                                                                                                                                                          "type": "Literal",
                                                                                                                                                          "value": 71,
                                                                                                                                                          "raw": "71",
                                                                                                                                                          "start": 1854,
                                                                                                                                                          "end": 1856
                                                                                                                                                        },
                                                                                                                                                        "start": 1854,
                                                                                                                                                        "end": 1856
                                                                                                                                                      },
                                                                                                                                                      "trueType": {
                                                                                                                                                        "type": "TSLiteralType",
                                                                                                                                                        "literal": {
                                                                                                                                                          "type": "Literal",
                                                                                                                                                          "value": "71",
                                                                                                                                                          "raw": "'71'",
                                                                                                                                                          "start": 1859,
                                                                                                                                                          "end": 1863
                                                                                                                                                        },
                                                                                                                                                        "start": 1859,
                                                                                                                                                        "end": 1863
                                                                                                                                                      },
                                                                                                                                                      "falseType": {
                                                                                                                                                        "type": "TSConditionalType",
                                                                                                                                                        "checkType": {
                                                                                                                                                          "type": "TSTypeReference",
                                                                                                                                                          "typeName": {
                                                                                                                                                            "type": "Identifier",
                                                                                                                                                            "decorators": [],
                                                                                                                                                            "name": "T",
                                                                                                                                                            "optional": false,
                                                                                                                                                            "typeAnnotation": null,
                                                                                                                                                            "start": 1870,
                                                                                                                                                            "end": 1871
                                                                                                                                                          },
                                                                                                                                                          "typeArguments": null,
                                                                                                                                                          "start": 1870,
                                                                                                                                                          "end": 1871
                                                                                                                                                        },
                                                                                                                                                        "extendsType": {
                                                                                                                                                          "type": "TSLiteralType",
                                                                                                                                                          "literal": {
                                                                                                                                                            "type": "Literal",
                                                                                                                                                            "value": 72,
                                                                                                                                                            "raw": "72",
                                                                                                                                                            "start": 1880,
                                                                                                                                                            "end": 1882
                                                                                                                                                          },
                                                                                                                                                          "start": 1880,
                                                                                                                                                          "end": 1882
                                                                                                                                                        },
                                                                                                                                                        "trueType": {
                                                                                                                                                          "type": "TSLiteralType",
                                                                                                                                                          "literal": {
                                                                                                                                                            "type": "Literal",
                                                                                                                                                            "value": "72",
                                                                                                                                                            "raw": "'72'",
                                                                                                                                                            "start": 1885,
                                                                                                                                                            "end": 1889
                                                                                                                                                          },
                                                                                                                                                          "start": 1885,
                                                                                                                                                          "end": 1889
                                                                                                                                                        },
                                                                                                                                                        "falseType": {
                                                                                                                                                          "type": "TSConditionalType",
                                                                                                                                                          "checkType": {
                                                                                                                                                            "type": "TSTypeReference",
                                                                                                                                                            "typeName": {
                                                                                                                                                              "type": "Identifier",
                                                                                                                                                              "decorators": [],
                                                                                                                                                              "name": "T",
                                                                                                                                                              "optional": false,
                                                                                                                                                              "typeAnnotation": null,
                                                                                                                                                              "start": 1896,
                                                                                                                                                              "end": 1897
                                                                                                                                                            },
                                                                                                                                                            "typeArguments": null,
                                                                                                                                                            "start": 1896,
                                                                                                                                                            "end": 1897
                                                                                                                                                          },
                                                                                                                                                          "extendsType": {
                                                                                                                                                            "type": "TSLiteralType",
                                                                                                                                                            "literal": {
                                                                                                                                                              "type": "Literal",
                                                                                                                                                              "value": 73,
                                                                                                                                                              "raw": "73",
                                                                                                                                                              "start": 1906,
                                                                                                                                                              "end": 1908
                                                                                                                                                            },
                                                                                                                                                            "start": 1906,
                                                                                                                                                            "end": 1908
                                                                                                                                                          },
                                                                                                                                                          "trueType": {
                                                                                                                                                            "type": "TSLiteralType",
                                                                                                                                                            "literal": {
                                                                                                                                                              "type": "Literal",
                                                                                                                                                              "value": "73",
                                                                                                                                                              "raw": "'73'",
                                                                                                                                                              "start": 1911,
                                                                                                                                                              "end": 1915
                                                                                                                                                            },
                                                                                                                                                            "start": 1911,
                                                                                                                                                            "end": 1915
                                                                                                                                                          },
                                                                                                                                                          "falseType": {
                                                                                                                                                            "type": "TSConditionalType",
                                                                                                                                                            "checkType": {
                                                                                                                                                              "type": "TSTypeReference",
                                                                                                                                                              "typeName": {
                                                                                                                                                                "type": "Identifier",
                                                                                                                                                                "decorators": [],
                                                                                                                                                                "name": "T",
                                                                                                                                                                "optional": false,
                                                                                                                                                                "typeAnnotation": null,
                                                                                                                                                                "start": 1922,
                                                                                                                                                                "end": 1923
                                                                                                                                                              },
                                                                                                                                                              "typeArguments": null,
                                                                                                                                                              "start": 1922,
                                                                                                                                                              "end": 1923
                                                                                                                                                            },
                                                                                                                                                            "extendsType": {
                                                                                                                                                              "type": "TSLiteralType",
                                                                                                                                                              "literal": {
                                                                                                                                                                "type": "Literal",
                                                                                                                                                                "value": 74,
                                                                                                                                                                "raw": "74",
                                                                                                                                                                "start": 1932,
                                                                                                                                                                "end": 1934
                                                                                                                                                              },
                                                                                                                                                              "start": 1932,
                                                                                                                                                              "end": 1934
                                                                                                                                                            },
                                                                                                                                                            "trueType": {
                                                                                                                                                              "type": "TSLiteralType",
                                                                                                                                                              "literal": {
                                                                                                                                                                "type": "Literal",
                                                                                                                                                                "value": "74",
                                                                                                                                                                "raw": "'74'",
                                                                                                                                                                "start": 1937,
                                                                                                                                                                "end": 1941
                                                                                                                                                              },
                                                                                                                                                              "start": 1937,
                                                                                                                                                              "end": 1941
                                                                                                                                                            },
                                                                                                                                                            "falseType": {
                                                                                                                                                              "type": "TSConditionalType",
                                                                                                                                                              "checkType": {
                                                                                                                                                                "type": "TSTypeReference",
                                                                                                                                                                "typeName": {
                                                                                                                                                                  "type": "Identifier",
                                                                                                                                                                  "decorators": [],
                                                                                                                                                                  "name": "T",
                                                                                                                                                                  "optional": false,
                                                                                                                                                                  "typeAnnotation": null,
                                                                                                                                                                  "start": 1948,
                                                                                                                                                                  "end": 1949
                                                                                                                                                                },
                                                                                                                                                                "typeArguments": null,
                                                                                                                                                                "start": 1948,
                                                                                                                                                                "end": 1949
                                                                                                                                                              },
                                                                                                                                                              "extendsType": {
                                                                                                                                                                "type": "TSLiteralType",
                                                                                                                                                                "literal": {
                                                                                                                                                                  "type": "Literal",
                                                                                                                                                                  "value": 75,
                                                                                                                                                                  "raw": "75",
                                                                                                                                                                  "start": 1958,
                                                                                                                                                                  "end": 1960
                                                                                                                                                                },
                                                                                                                                                                "start": 1958,
                                                                                                                                                                "end": 1960
                                                                                                                                                              },
                                                                                                                                                              "trueType": {
                                                                                                                                                                "type": "TSLiteralType",
                                                                                                                                                                "literal": {
                                                                                                                                                                  "type": "Literal",
                                                                                                                                                                  "value": "75",
                                                                                                                                                                  "raw": "'75'",
                                                                                                                                                                  "start": 1963,
                                                                                                                                                                  "end": 1967
                                                                                                                                                                },
                                                                                                                                                                "start": 1963,
                                                                                                                                                                "end": 1967
                                                                                                                                                              },
                                                                                                                                                              "falseType": {
                                                                                                                                                                "type": "TSConditionalType",
                                                                                                                                                                "checkType": {
                                                                                                                                                                  "type": "TSTypeReference",
                                                                                                                                                                  "typeName": {
                                                                                                                                                                    "type": "Identifier",
                                                                                                                                                                    "decorators": [],
                                                                                                                                                                    "name": "T",
                                                                                                                                                                    "optional": false,
                                                                                                                                                                    "typeAnnotation": null,
                                                                                                                                                                    "start": 1974,
                                                                                                                                                                    "end": 1975
                                                                                                                                                                  },
                                                                                                                                                                  "typeArguments": null,
                                                                                                                                                                  "start": 1974,
                                                                                                                                                                  "end": 1975
                                                                                                                                                                },
                                                                                                                                                                "extendsType": {
                                                                                                                                                                  "type": "TSLiteralType",
                                                                                                                                                                  "literal": {
                                                                                                                                                                    "type": "Literal",
                                                                                                                                                                    "value": 76,
                                                                                                                                                                    "raw": "76",
                                                                                                                                                                    "start": 1984,
                                                                                                                                                                    "end": 1986
                                                                                                                                                                  },
                                                                                                                                                                  "start": 1984,
                                                                                                                                                                  "end": 1986
                                                                                                                                                                },
                                                                                                                                                                "trueType": {
                                                                                                                                                                  "type": "TSLiteralType",
                                                                                                                                                                  "literal": {
                                                                                                                                                                    "type": "Literal",
                                                                                                                                                                    "value": "76",
                                                                                                                                                                    "raw": "'76'",
                                                                                                                                                                    "start": 1989,
                                                                                                                                                                    "end": 1993
                                                                                                                                                                  },
                                                                                                                                                                  "start": 1989,
                                                                                                                                                                  "end": 1993
                                                                                                                                                                },
                                                                                                                                                                "falseType": {
                                                                                                                                                                  "type": "TSConditionalType",
                                                                                                                                                                  "checkType": {
                                                                                                                                                                    "type": "TSTypeReference",
                                                                                                                                                                    "typeName": {
                                                                                                                                                                      "type": "Identifier",
                                                                                                                                                                      "decorators": [],
                                                                                                                                                                      "name": "T",
                                                                                                                                                                      "optional": false,
                                                                                                                                                                      "typeAnnotation": null,
                                                                                                                                                                      "start": 2000,
                                                                                                                                                                      "end": 2001
                                                                                                                                                                    },
                                                                                                                                                                    "typeArguments": null,
                                                                                                                                                                    "start": 2000,
                                                                                                                                                                    "end": 2001
                                                                                                                                                                  },
                                                                                                                                                                  "extendsType": {
                                                                                                                                                                    "type": "TSLiteralType",
                                                                                                                                                                    "literal": {
                                                                                                                                                                      "type": "Literal",
                                                                                                                                                                      "value": 77,
                                                                                                                                                                      "raw": "77",
                                                                                                                                                                      "start": 2010,
                                                                                                                                                                      "end": 2012
                                                                                                                                                                    },
                                                                                                                                                                    "start": 2010,
                                                                                                                                                                    "end": 2012
                                                                                                                                                                  },
                                                                                                                                                                  "trueType": {
                                                                                                                                                                    "type": "TSLiteralType",
                                                                                                                                                                    "literal": {
                                                                                                                                                                      "type": "Literal",
                                                                                                                                                                      "value": "77",
                                                                                                                                                                      "raw": "'77'",
                                                                                                                                                                      "start": 2015,
                                                                                                                                                                      "end": 2019
                                                                                                                                                                    },
                                                                                                                                                                    "start": 2015,
                                                                                                                                                                    "end": 2019
                                                                                                                                                                  },
                                                                                                                                                                  "falseType": {
                                                                                                                                                                    "type": "TSConditionalType",
                                                                                                                                                                    "checkType": {
                                                                                                                                                                      "type": "TSTypeReference",
                                                                                                                                                                      "typeName": {
                                                                                                                                                                        "type": "Identifier",
                                                                                                                                                                        "decorators": [],
                                                                                                                                                                        "name": "T",
                                                                                                                                                                        "optional": false,
                                                                                                                                                                        "typeAnnotation": null,
                                                                                                                                                                        "start": 2026,
                                                                                                                                                                        "end": 2027
                                                                                                                                                                      },
                                                                                                                                                                      "typeArguments": null,
                                                                                                                                                                      "start": 2026,
                                                                                                                                                                      "end": 2027
                                                                                                                                                                    },
                                                                                                                                                                    "extendsType": {
                                                                                                                                                                      "type": "TSLiteralType",
                                                                                                                                                                      "literal": {
                                                                                                                                                                        "type": "Literal",
                                                                                                                                                                        "value": 78,
                                                                                                                                                                        "raw": "78",
                                                                                                                                                                        "start": 2036,
                                                                                                                                                                        "end": 2038
                                                                                                                                                                      },
                                                                                                                                                                      "start": 2036,
                                                                                                                                                                      "end": 2038
                                                                                                                                                                    },
                                                                                                                                                                    "trueType": {
                                                                                                                                                                      "type": "TSLiteralType",
                                                                                                                                                                      "literal": {
                                                                                                                                                                        "type": "Literal",
                                                                                                                                                                        "value": "78",
                                                                                                                                                                        "raw": "'78'",
                                                                                                                                                                        "start": 2041,
                                                                                                                                                                        "end": 2045
                                                                                                                                                                      },
                                                                                                                                                                      "start": 2041,
                                                                                                                                                                      "end": 2045
                                                                                                                                                                    },
                                                                                                                                                                    "falseType": {
                                                                                                                                                                      "type": "TSConditionalType",
                                                                                                                                                                      "checkType": {
                                                                                                                                                                        "type": "TSTypeReference",
                                                                                                                                                                        "typeName": {
                                                                                                                                                                          "type": "Identifier",
                                                                                                                                                                          "decorators": [],
                                                                                                                                                                          "name": "T",
                                                                                                                                                                          "optional": false,
                                                                                                                                                                          "typeAnnotation": null,
                                                                                                                                                                          "start": 2052,
                                                                                                                                                                          "end": 2053
                                                                                                                                                                        },
                                                                                                                                                                        "typeArguments": null,
                                                                                                                                                                        "start": 2052,
                                                                                                                                                                        "end": 2053
                                                                                                                                                                      },
                                                                                                                                                                      "extendsType": {
                                                                                                                                                                        "type": "TSLiteralType",
                                                                                                                                                                        "literal": {
                                                                                                                                                                          "type": "Literal",
                                                                                                                                                                          "value": 79,
                                                                                                                                                                          "raw": "79",
                                                                                                                                                                          "start": 2062,
                                                                                                                                                                          "end": 2064
                                                                                                                                                                        },
                                                                                                                                                                        "start": 2062,
                                                                                                                                                                        "end": 2064
                                                                                                                                                                      },
                                                                                                                                                                      "trueType": {
                                                                                                                                                                        "type": "TSLiteralType",
                                                                                                                                                                        "literal": {
                                                                                                                                                                          "type": "Literal",
                                                                                                                                                                          "value": "79",
                                                                                                                                                                          "raw": "'79'",
                                                                                                                                                                          "start": 2067,
                                                                                                                                                                          "end": 2071
                                                                                                                                                                        },
                                                                                                                                                                        "start": 2067,
                                                                                                                                                                        "end": 2071
                                                                                                                                                                      },
                                                                                                                                                                      "falseType": {
                                                                                                                                                                        "type": "TSConditionalType",
                                                                                                                                                                        "checkType": {
                                                                                                                                                                          "type": "TSTypeReference",
                                                                                                                                                                          "typeName": {
                                                                                                                                                                            "type": "Identifier",
                                                                                                                                                                            "decorators": [],
                                                                                                                                                                            "name": "T",
                                                                                                                                                                            "optional": false,
                                                                                                                                                                            "typeAnnotation": null,
                                                                                                                                                                            "start": 2078,
                                                                                                                                                                            "end": 2079
                                                                                                                                                                          },
                                                                                                                                                                          "typeArguments": null,
                                                                                                                                                                          "start": 2078,
                                                                                                                                                                          "end": 2079
                                                                                                                                                                        },
                                                                                                                                                                        "extendsType": {
                                                                                                                                                                          "type": "TSLiteralType",
                                                                                                                                                                          "literal": {
                                                                                                                                                                            "type": "Literal",
                                                                                                                                                                            "value": 80,
                                                                                                                                                                            "raw": "80",
                                                                                                                                                                            "start": 2088,
                                                                                                                                                                            "end": 2090
                                                                                                                                                                          },
                                                                                                                                                                          "start": 2088,
                                                                                                                                                                          "end": 2090
                                                                                                                                                                        },
                                                                                                                                                                        "trueType": {
                                                                                                                                                                          "type": "TSLiteralType",
                                                                                                                                                                          "literal": {
                                                                                                                                                                            "type": "Literal",
                                                                                                                                                                            "value": "80",
                                                                                                                                                                            "raw": "'80'",
                                                                                                                                                                            "start": 2093,
                                                                                                                                                                            "end": 2097
                                                                                                                                                                          },
                                                                                                                                                                          "start": 2093,
                                                                                                                                                                          "end": 2097
                                                                                                                                                                        },
                                                                                                                                                                        "falseType": {
                                                                                                                                                                          "type": "TSConditionalType",
                                                                                                                                                                          "checkType": {
                                                                                                                                                                            "type": "TSTypeReference",
                                                                                                                                                                            "typeName": {
                                                                                                                                                                              "type": "Identifier",
                                                                                                                                                                              "decorators": [],
                                                                                                                                                                              "name": "T",
                                                                                                                                                                              "optional": false,
                                                                                                                                                                              "typeAnnotation": null,
                                                                                                                                                                              "start": 2104,
                                                                                                                                                                              "end": 2105
                                                                                                                                                                            },
                                                                                                                                                                            "typeArguments": null,
                                                                                                                                                                            "start": 2104,
                                                                                                                                                                            "end": 2105
                                                                                                                                                                          },
                                                                                                                                                                          "extendsType": {
                                                                                                                                                                            "type": "TSLiteralType",
                                                                                                                                                                            "literal": {
                                                                                                                                                                              "type": "Literal",
                                                                                                                                                                              "value": 81,
                                                                                                                                                                              "raw": "81",
                                                                                                                                                                              "start": 2114,
                                                                                                                                                                              "end": 2116
                                                                                                                                                                            },
                                                                                                                                                                            "start": 2114,
                                                                                                                                                                            "end": 2116
                                                                                                                                                                          },
                                                                                                                                                                          "trueType": {
                                                                                                                                                                            "type": "TSLiteralType",
                                                                                                                                                                            "literal": {
                                                                                                                                                                              "type": "Literal",
                                                                                                                                                                              "value": "81",
                                                                                                                                                                              "raw": "'81'",
                                                                                                                                                                              "start": 2119,
                                                                                                                                                                              "end": 2123
                                                                                                                                                                            },
                                                                                                                                                                            "start": 2119,
                                                                                                                                                                            "end": 2123
                                                                                                                                                                          },
                                                                                                                                                                          "falseType": {
                                                                                                                                                                            "type": "TSConditionalType",
                                                                                                                                                                            "checkType": {
                                                                                                                                                                              "type": "TSTypeReference",
                                                                                                                                                                              "typeName": {
                                                                                                                                                                                "type": "Identifier",
                                                                                                                                                                                "decorators": [],
                                                                                                                                                                                "name": "T",
                                                                                                                                                                                "optional": false,
                                                                                                                                                                                "typeAnnotation": null,
                                                                                                                                                                                "start": 2130,
                                                                                                                                                                                "end": 2131
                                                                                                                                                                              },
                                                                                                                                                                              "typeArguments": null,
                                                                                                                                                                              "start": 2130,
                                                                                                                                                                              "end": 2131
                                                                                                                                                                            },
                                                                                                                                                                            "extendsType": {
                                                                                                                                                                              "type": "TSLiteralType",
                                                                                                                                                                              "literal": {
                                                                                                                                                                                "type": "Literal",
                                                                                                                                                                                "value": 82,
                                                                                                                                                                                "raw": "82",
                                                                                                                                                                                "start": 2140,
                                                                                                                                                                                "end": 2142
                                                                                                                                                                              },
                                                                                                                                                                              "start": 2140,
                                                                                                                                                                              "end": 2142
                                                                                                                                                                            },
                                                                                                                                                                            "trueType": {
                                                                                                                                                                              "type": "TSLiteralType",
                                                                                                                                                                              "literal": {
                                                                                                                                                                                "type": "Literal",
                                                                                                                                                                                "value": "82",
                                                                                                                                                                                "raw": "'82'",
                                                                                                                                                                                "start": 2145,
                                                                                                                                                                                "end": 2149
                                                                                                                                                                              },
                                                                                                                                                                              "start": 2145,
                                                                                                                                                                              "end": 2149
                                                                                                                                                                            },
                                                                                                                                                                            "falseType": {
                                                                                                                                                                              "type": "TSConditionalType",
                                                                                                                                                                              "checkType": {
                                                                                                                                                                                "type": "TSTypeReference",
                                                                                                                                                                                "typeName": {
                                                                                                                                                                                  "type": "Identifier",
                                                                                                                                                                                  "decorators": [],
                                                                                                                                                                                  "name": "T",
                                                                                                                                                                                  "optional": false,
                                                                                                                                                                                  "typeAnnotation": null,
                                                                                                                                                                                  "start": 2156,
                                                                                                                                                                                  "end": 2157
                                                                                                                                                                                },
                                                                                                                                                                                "typeArguments": null,
                                                                                                                                                                                "start": 2156,
                                                                                                                                                                                "end": 2157
                                                                                                                                                                              },
                                                                                                                                                                              "extendsType": {
                                                                                                                                                                                "type": "TSLiteralType",
                                                                                                                                                                                "literal": {
                                                                                                                                                                                  "type": "Literal",
                                                                                                                                                                                  "value": 83,
                                                                                                                                                                                  "raw": "83",
                                                                                                                                                                                  "start": 2166,
                                                                                                                                                                                  "end": 2168
                                                                                                                                                                                },
                                                                                                                                                                                "start": 2166,
                                                                                                                                                                                "end": 2168
                                                                                                                                                                              },
                                                                                                                                                                              "trueType": {
                                                                                                                                                                                "type": "TSLiteralType",
                                                                                                                                                                                "literal": {
                                                                                                                                                                                  "type": "Literal",
                                                                                                                                                                                  "value": "83",
                                                                                                                                                                                  "raw": "'83'",
                                                                                                                                                                                  "start": 2171,
                                                                                                                                                                                  "end": 2175
                                                                                                                                                                                },
                                                                                                                                                                                "start": 2171,
                                                                                                                                                                                "end": 2175
                                                                                                                                                                              },
                                                                                                                                                                              "falseType": {
                                                                                                                                                                                "type": "TSConditionalType",
                                                                                                                                                                                "checkType": {
                                                                                                                                                                                  "type": "TSTypeReference",
                                                                                                                                                                                  "typeName": {
                                                                                                                                                                                    "type": "Identifier",
                                                                                                                                                                                    "decorators": [],
                                                                                                                                                                                    "name": "T",
                                                                                                                                                                                    "optional": false,
                                                                                                                                                                                    "typeAnnotation": null,
                                                                                                                                                                                    "start": 2182,
                                                                                                                                                                                    "end": 2183
                                                                                                                                                                                  },
                                                                                                                                                                                  "typeArguments": null,
                                                                                                                                                                                  "start": 2182,
                                                                                                                                                                                  "end": 2183
                                                                                                                                                                                },
                                                                                                                                                                                "extendsType": {
                                                                                                                                                                                  "type": "TSLiteralType",
                                                                                                                                                                                  "literal": {
                                                                                                                                                                                    "type": "Literal",
                                                                                                                                                                                    "value": 84,
                                                                                                                                                                                    "raw": "84",
                                                                                                                                                                                    "start": 2192,
                                                                                                                                                                                    "end": 2194
                                                                                                                                                                                  },
                                                                                                                                                                                  "start": 2192,
                                                                                                                                                                                  "end": 2194
                                                                                                                                                                                },
                                                                                                                                                                                "trueType": {
                                                                                                                                                                                  "type": "TSLiteralType",
                                                                                                                                                                                  "literal": {
                                                                                                                                                                                    "type": "Literal",
                                                                                                                                                                                    "value": "84",
                                                                                                                                                                                    "raw": "'84'",
                                                                                                                                                                                    "start": 2197,
                                                                                                                                                                                    "end": 2201
                                                                                                                                                                                  },
                                                                                                                                                                                  "start": 2197,
                                                                                                                                                                                  "end": 2201
                                                                                                                                                                                },
                                                                                                                                                                                "falseType": {
                                                                                                                                                                                  "type": "TSConditionalType",
                                                                                                                                                                                  "checkType": {
                                                                                                                                                                                    "type": "TSTypeReference",
                                                                                                                                                                                    "typeName": {
                                                                                                                                                                                      "type": "Identifier",
                                                                                                                                                                                      "decorators": [],
                                                                                                                                                                                      "name": "T",
                                                                                                                                                                                      "optional": false,
                                                                                                                                                                                      "typeAnnotation": null,
                                                                                                                                                                                      "start": 2208,
                                                                                                                                                                                      "end": 2209
                                                                                                                                                                                    },
                                                                                                                                                                                    "typeArguments": null,
                                                                                                                                                                                    "start": 2208,
                                                                                                                                                                                    "end": 2209
                                                                                                                                                                                  },
                                                                                                                                                                                  "extendsType": {
                                                                                                                                                                                    "type": "TSLiteralType",
                                                                                                                                                                                    "literal": {
                                                                                                                                                                                      "type": "Literal",
                                                                                                                                                                                      "value": 85,
                                                                                                                                                                                      "raw": "85",
                                                                                                                                                                                      "start": 2218,
                                                                                                                                                                                      "end": 2220
                                                                                                                                                                                    },
                                                                                                                                                                                    "start": 2218,
                                                                                                                                                                                    "end": 2220
                                                                                                                                                                                  },
                                                                                                                                                                                  "trueType": {
                                                                                                                                                                                    "type": "TSLiteralType",
                                                                                                                                                                                    "literal": {
                                                                                                                                                                                      "type": "Literal",
                                                                                                                                                                                      "value": "85",
                                                                                                                                                                                      "raw": "'85'",
                                                                                                                                                                                      "start": 2223,
                                                                                                                                                                                      "end": 2227
                                                                                                                                                                                    },
                                                                                                                                                                                    "start": 2223,
                                                                                                                                                                                    "end": 2227
                                                                                                                                                                                  },
                                                                                                                                                                                  "falseType": {
                                                                                                                                                                                    "type": "TSConditionalType",
                                                                                                                                                                                    "checkType": {
                                                                                                                                                                                      "type": "TSTypeReference",
                                                                                                                                                                                      "typeName": {
                                                                                                                                                                                        "type": "Identifier",
                                                                                                                                                                                        "decorators": [],
                                                                                                                                                                                        "name": "T",
                                                                                                                                                                                        "optional": false,
                                                                                                                                                                                        "typeAnnotation": null,
                                                                                                                                                                                        "start": 2234,
                                                                                                                                                                                        "end": 2235
                                                                                                                                                                                      },
                                                                                                                                                                                      "typeArguments": null,
                                                                                                                                                                                      "start": 2234,
                                                                                                                                                                                      "end": 2235
                                                                                                                                                                                    },
                                                                                                                                                                                    "extendsType": {
                                                                                                                                                                                      "type": "TSLiteralType",
                                                                                                                                                                                      "literal": {
                                                                                                                                                                                        "type": "Literal",
                                                                                                                                                                                        "value": 86,
                                                                                                                                                                                        "raw": "86",
                                                                                                                                                                                        "start": 2244,
                                                                                                                                                                                        "end": 2246
                                                                                                                                                                                      },
                                                                                                                                                                                      "start": 2244,
                                                                                                                                                                                      "end": 2246
                                                                                                                                                                                    },
                                                                                                                                                                                    "trueType": {
                                                                                                                                                                                      "type": "TSLiteralType",
                                                                                                                                                                                      "literal": {
                                                                                                                                                                                        "type": "Literal",
                                                                                                                                                                                        "value": "86",
                                                                                                                                                                                        "raw": "'86'",
                                                                                                                                                                                        "start": 2249,
                                                                                                                                                                                        "end": 2253
                                                                                                                                                                                      },
                                                                                                                                                                                      "start": 2249,
                                                                                                                                                                                      "end": 2253
                                                                                                                                                                                    },
                                                                                                                                                                                    "falseType": {
                                                                                                                                                                                      "type": "TSConditionalType",
                                                                                                                                                                                      "checkType": {
                                                                                                                                                                                        "type": "TSTypeReference",
                                                                                                                                                                                        "typeName": {
                                                                                                                                                                                          "type": "Identifier",
                                                                                                                                                                                          "decorators": [],
                                                                                                                                                                                          "name": "T",
                                                                                                                                                                                          "optional": false,
                                                                                                                                                                                          "typeAnnotation": null,
                                                                                                                                                                                          "start": 2260,
                                                                                                                                                                                          "end": 2261
                                                                                                                                                                                        },
                                                                                                                                                                                        "typeArguments": null,
                                                                                                                                                                                        "start": 2260,
                                                                                                                                                                                        "end": 2261
                                                                                                                                                                                      },
                                                                                                                                                                                      "extendsType": {
                                                                                                                                                                                        "type": "TSLiteralType",
                                                                                                                                                                                        "literal": {
                                                                                                                                                                                          "type": "Literal",
                                                                                                                                                                                          "value": 87,
                                                                                                                                                                                          "raw": "87",
                                                                                                                                                                                          "start": 2270,
                                                                                                                                                                                          "end": 2272
                                                                                                                                                                                        },
                                                                                                                                                                                        "start": 2270,
                                                                                                                                                                                        "end": 2272
                                                                                                                                                                                      },
                                                                                                                                                                                      "trueType": {
                                                                                                                                                                                        "type": "TSLiteralType",
                                                                                                                                                                                        "literal": {
                                                                                                                                                                                          "type": "Literal",
                                                                                                                                                                                          "value": "87",
                                                                                                                                                                                          "raw": "'87'",
                                                                                                                                                                                          "start": 2275,
                                                                                                                                                                                          "end": 2279
                                                                                                                                                                                        },
                                                                                                                                                                                        "start": 2275,
                                                                                                                                                                                        "end": 2279
                                                                                                                                                                                      },
                                                                                                                                                                                      "falseType": {
                                                                                                                                                                                        "type": "TSConditionalType",
                                                                                                                                                                                        "checkType": {
                                                                                                                                                                                          "type": "TSTypeReference",
                                                                                                                                                                                          "typeName": {
                                                                                                                                                                                            "type": "Identifier",
                                                                                                                                                                                            "decorators": [],
                                                                                                                                                                                            "name": "T",
                                                                                                                                                                                            "optional": false,
                                                                                                                                                                                            "typeAnnotation": null,
                                                                                                                                                                                            "start": 2286,
                                                                                                                                                                                            "end": 2287
                                                                                                                                                                                          },
                                                                                                                                                                                          "typeArguments": null,
                                                                                                                                                                                          "start": 2286,
                                                                                                                                                                                          "end": 2287
                                                                                                                                                                                        },
                                                                                                                                                                                        "extendsType": {
                                                                                                                                                                                          "type": "TSLiteralType",
                                                                                                                                                                                          "literal": {
                                                                                                                                                                                            "type": "Literal",
                                                                                                                                                                                            "value": 88,
                                                                                                                                                                                            "raw": "88",
                                                                                                                                                                                            "start": 2296,
                                                                                                                                                                                            "end": 2298
                                                                                                                                                                                          },
                                                                                                                                                                                          "start": 2296,
                                                                                                                                                                                          "end": 2298
                                                                                                                                                                                        },
                                                                                                                                                                                        "trueType": {
                                                                                                                                                                                          "type": "TSLiteralType",
                                                                                                                                                                                          "literal": {
                                                                                                                                                                                            "type": "Literal",
                                                                                                                                                                                            "value": "88",
                                                                                                                                                                                            "raw": "'88'",
                                                                                                                                                                                            "start": 2301,
                                                                                                                                                                                            "end": 2305
                                                                                                                                                                                          },
                                                                                                                                                                                          "start": 2301,
                                                                                                                                                                                          "end": 2305
                                                                                                                                                                                        },
                                                                                                                                                                                        "falseType": {
                                                                                                                                                                                          "type": "TSConditionalType",
                                                                                                                                                                                          "checkType": {
                                                                                                                                                                                            "type": "TSTypeReference",
                                                                                                                                                                                            "typeName": {
                                                                                                                                                                                              "type": "Identifier",
                                                                                                                                                                                              "decorators": [],
                                                                                                                                                                                              "name": "T",
                                                                                                                                                                                              "optional": false,
                                                                                                                                                                                              "typeAnnotation": null,
                                                                                                                                                                                              "start": 2312,
                                                                                                                                                                                              "end": 2313
                                                                                                                                                                                            },
                                                                                                                                                                                            "typeArguments": null,
                                                                                                                                                                                            "start": 2312,
                                                                                                                                                                                            "end": 2313
                                                                                                                                                                                          },
                                                                                                                                                                                          "extendsType": {
                                                                                                                                                                                            "type": "TSLiteralType",
                                                                                                                                                                                            "literal": {
                                                                                                                                                                                              "type": "Literal",
                                                                                                                                                                                              "value": 89,
                                                                                                                                                                                              "raw": "89",
                                                                                                                                                                                              "start": 2322,
                                                                                                                                                                                              "end": 2324
                                                                                                                                                                                            },
                                                                                                                                                                                            "start": 2322,
                                                                                                                                                                                            "end": 2324
                                                                                                                                                                                          },
                                                                                                                                                                                          "trueType": {
                                                                                                                                                                                            "type": "TSLiteralType",
                                                                                                                                                                                            "literal": {
                                                                                                                                                                                              "type": "Literal",
                                                                                                                                                                                              "value": "89",
                                                                                                                                                                                              "raw": "'89'",
                                                                                                                                                                                              "start": 2327,
                                                                                                                                                                                              "end": 2331
                                                                                                                                                                                            },
                                                                                                                                                                                            "start": 2327,
                                                                                                                                                                                            "end": 2331
                                                                                                                                                                                          },
                                                                                                                                                                                          "falseType": {
                                                                                                                                                                                            "type": "TSConditionalType",
                                                                                                                                                                                            "checkType": {
                                                                                                                                                                                              "type": "TSTypeReference",
                                                                                                                                                                                              "typeName": {
                                                                                                                                                                                                "type": "Identifier",
                                                                                                                                                                                                "decorators": [],
                                                                                                                                                                                                "name": "T",
                                                                                                                                                                                                "optional": false,
                                                                                                                                                                                                "typeAnnotation": null,
                                                                                                                                                                                                "start": 2338,
                                                                                                                                                                                                "end": 2339
                                                                                                                                                                                              },
                                                                                                                                                                                              "typeArguments": null,
                                                                                                                                                                                              "start": 2338,
                                                                                                                                                                                              "end": 2339
                                                                                                                                                                                            },
                                                                                                                                                                                            "extendsType": {
                                                                                                                                                                                              "type": "TSLiteralType",
                                                                                                                                                                                              "literal": {
                                                                                                                                                                                                "type": "Literal",
                                                                                                                                                                                                "value": 90,
                                                                                                                                                                                                "raw": "90",
                                                                                                                                                                                                "start": 2348,
                                                                                                                                                                                                "end": 2350
                                                                                                                                                                                              },
                                                                                                                                                                                              "start": 2348,
                                                                                                                                                                                              "end": 2350
                                                                                                                                                                                            },
                                                                                                                                                                                            "trueType": {
                                                                                                                                                                                              "type": "TSLiteralType",
                                                                                                                                                                                              "literal": {
                                                                                                                                                                                                "type": "Literal",
                                                                                                                                                                                                "value": "90",
                                                                                                                                                                                                "raw": "'90'",
                                                                                                                                                                                                "start": 2353,
                                                                                                                                                                                                "end": 2357
                                                                                                                                                                                              },
                                                                                                                                                                                              "start": 2353,
                                                                                                                                                                                              "end": 2357
                                                                                                                                                                                            },
                                                                                                                                                                                            "falseType": {
                                                                                                                                                                                              "type": "TSConditionalType",
                                                                                                                                                                                              "checkType": {
                                                                                                                                                                                                "type": "TSTypeReference",
                                                                                                                                                                                                "typeName": {
                                                                                                                                                                                                  "type": "Identifier",
                                                                                                                                                                                                  "decorators": [],
                                                                                                                                                                                                  "name": "T",
                                                                                                                                                                                                  "optional": false,
                                                                                                                                                                                                  "typeAnnotation": null,
                                                                                                                                                                                                  "start": 2364,
                                                                                                                                                                                                  "end": 2365
                                                                                                                                                                                                },
                                                                                                                                                                                                "typeArguments": null,
                                                                                                                                                                                                "start": 2364,
                                                                                                                                                                                                "end": 2365
                                                                                                                                                                                              },
                                                                                                                                                                                              "extendsType": {
                                                                                                                                                                                                "type": "TSLiteralType",
                                                                                                                                                                                                "literal": {
                                                                                                                                                                                                  "type": "Literal",
                                                                                                                                                                                                  "value": 91,
                                                                                                                                                                                                  "raw": "91",
                                                                                                                                                                                                  "start": 2374,
                                                                                                                                                                                                  "end": 2376
                                                                                                                                                                                                },
                                                                                                                                                                                                "start": 2374,
                                                                                                                                                                                                "end": 2376
                                                                                                                                                                                              },
                                                                                                                                                                                              "trueType": {
                                                                                                                                                                                                "type": "TSLiteralType",
                                                                                                                                                                                                "literal": {
                                                                                                                                                                                                  "type": "Literal",
                                                                                                                                                                                                  "value": "91",
                                                                                                                                                                                                  "raw": "'91'",
                                                                                                                                                                                                  "start": 2379,
                                                                                                                                                                                                  "end": 2383
                                                                                                                                                                                                },
                                                                                                                                                                                                "start": 2379,
                                                                                                                                                                                                "end": 2383
                                                                                                                                                                                              },
                                                                                                                                                                                              "falseType": {
                                                                                                                                                                                                "type": "TSConditionalType",
                                                                                                                                                                                                "checkType": {
                                                                                                                                                                                                  "type": "TSTypeReference",
                                                                                                                                                                                                  "typeName": {
                                                                                                                                                                                                    "type": "Identifier",
                                                                                                                                                                                                    "decorators": [],
                                                                                                                                                                                                    "name": "T",
                                                                                                                                                                                                    "optional": false,
                                                                                                                                                                                                    "typeAnnotation": null,
                                                                                                                                                                                                    "start": 2390,
                                                                                                                                                                                                    "end": 2391
                                                                                                                                                                                                  },
                                                                                                                                                                                                  "typeArguments": null,
                                                                                                                                                                                                  "start": 2390,
                                                                                                                                                                                                  "end": 2391
                                                                                                                                                                                                },
                                                                                                                                                                                                "extendsType": {
                                                                                                                                                                                                  "type": "TSLiteralType",
                                                                                                                                                                                                  "literal": {
                                                                                                                                                                                                    "type": "Literal",
                                                                                                                                                                                                    "value": 92,
                                                                                                                                                                                                    "raw": "92",
                                                                                                                                                                                                    "start": 2400,
                                                                                                                                                                                                    "end": 2402
                                                                                                                                                                                                  },
                                                                                                                                                                                                  "start": 2400,
                                                                                                                                                                                                  "end": 2402
                                                                                                                                                                                                },
                                                                                                                                                                                                "trueType": {
                                                                                                                                                                                                  "type": "TSLiteralType",
                                                                                                                                                                                                  "literal": {
                                                                                                                                                                                                    "type": "Literal",
                                                                                                                                                                                                    "value": "92",
                                                                                                                                                                                                    "raw": "'92'",
                                                                                                                                                                                                    "start": 2405,
                                                                                                                                                                                                    "end": 2409
                                                                                                                                                                                                  },
                                                                                                                                                                                                  "start": 2405,
                                                                                                                                                                                                  "end": 2409
                                                                                                                                                                                                },
                                                                                                                                                                                                "falseType": {
                                                                                                                                                                                                  "type": "TSConditionalType",
                                                                                                                                                                                                  "checkType": {
                                                                                                                                                                                                    "type": "TSTypeReference",
                                                                                                                                                                                                    "typeName": {
                                                                                                                                                                                                      "type": "Identifier",
                                                                                                                                                                                                      "decorators": [],
                                                                                                                                                                                                      "name": "T",
                                                                                                                                                                                                      "optional": false,
                                                                                                                                                                                                      "typeAnnotation": null,
                                                                                                                                                                                                      "start": 2416,
                                                                                                                                                                                                      "end": 2417
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "typeArguments": null,
                                                                                                                                                                                                    "start": 2416,
                                                                                                                                                                                                    "end": 2417
                                                                                                                                                                                                  },
                                                                                                                                                                                                  "extendsType": {
                                                                                                                                                                                                    "type": "TSLiteralType",
                                                                                                                                                                                                    "literal": {
                                                                                                                                                                                                      "type": "Literal",
                                                                                                                                                                                                      "value": 93,
                                                                                                                                                                                                      "raw": "93",
                                                                                                                                                                                                      "start": 2426,
                                                                                                                                                                                                      "end": 2428
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "start": 2426,
                                                                                                                                                                                                    "end": 2428
                                                                                                                                                                                                  },
                                                                                                                                                                                                  "trueType": {
                                                                                                                                                                                                    "type": "TSLiteralType",
                                                                                                                                                                                                    "literal": {
                                                                                                                                                                                                      "type": "Literal",
                                                                                                                                                                                                      "value": "93",
                                                                                                                                                                                                      "raw": "'93'",
                                                                                                                                                                                                      "start": 2431,
                                                                                                                                                                                                      "end": 2435
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "start": 2431,
                                                                                                                                                                                                    "end": 2435
                                                                                                                                                                                                  },
                                                                                                                                                                                                  "falseType": {
                                                                                                                                                                                                    "type": "TSConditionalType",
                                                                                                                                                                                                    "checkType": {
                                                                                                                                                                                                      "type": "TSTypeReference",
                                                                                                                                                                                                      "typeName": {
                                                                                                                                                                                                        "type": "Identifier",
                                                                                                                                                                                                        "decorators": [],
                                                                                                                                                                                                        "name": "T",
                                                                                                                                                                                                        "optional": false,
                                                                                                                                                                                                        "typeAnnotation": null,
                                                                                                                                                                                                        "start": 2442,
                                                                                                                                                                                                        "end": 2443
                                                                                                                                                                                                      },
                                                                                                                                                                                                      "typeArguments": null,
                                                                                                                                                                                                      "start": 2442,
                                                                                                                                                                                                      "end": 2443
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "extendsType": {
                                                                                                                                                                                                      "type": "TSLiteralType",
                                                                                                                                                                                                      "literal": {
                                                                                                                                                                                                        "type": "Literal",
                                                                                                                                                                                                        "value": 94,
                                                                                                                                                                                                        "raw": "94",
                                                                                                                                                                                                        "start": 2452,
                                                                                                                                                                                                        "end": 2454
                                                                                                                                                                                                      },
                                                                                                                                                                                                      "start": 2452,
                                                                                                                                                                                                      "end": 2454
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "trueType": {
                                                                                                                                                                                                      "type": "TSLiteralType",
                                                                                                                                                                                                      "literal": {
                                                                                                                                                                                                        "type": "Literal",
                                                                                                                                                                                                        "value": "94",
                                                                                                                                                                                                        "raw": "'94'",
                                                                                                                                                                                                        "start": 2457,
                                                                                                                                                                                                        "end": 2461
                                                                                                                                                                                                      },
                                                                                                                                                                                                      "start": 2457,
                                                                                                                                                                                                      "end": 2461
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "falseType": {
                                                                                                                                                                                                      "type": "TSConditionalType",
                                                                                                                                                                                                      "checkType": {
                                                                                                                                                                                                        "type": "TSTypeReference",
                                                                                                                                                                                                        "typeName": {
                                                                                                                                                                                                          "type": "Identifier",
                                                                                                                                                                                                          "decorators": [],
                                                                                                                                                                                                          "name": "T",
                                                                                                                                                                                                          "optional": false,
                                                                                                                                                                                                          "typeAnnotation": null,
                                                                                                                                                                                                          "start": 2468,
                                                                                                                                                                                                          "end": 2469
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "typeArguments": null,
                                                                                                                                                                                                        "start": 2468,
                                                                                                                                                                                                        "end": 2469
                                                                                                                                                                                                      },
                                                                                                                                                                                                      "extendsType": {
                                                                                                                                                                                                        "type": "TSLiteralType",
                                                                                                                                                                                                        "literal": {
                                                                                                                                                                                                          "type": "Literal",
                                                                                                                                                                                                          "value": 95,
                                                                                                                                                                                                          "raw": "95",
                                                                                                                                                                                                          "start": 2478,
                                                                                                                                                                                                          "end": 2480
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "start": 2478,
                                                                                                                                                                                                        "end": 2480
                                                                                                                                                                                                      },
                                                                                                                                                                                                      "trueType": {
                                                                                                                                                                                                        "type": "TSLiteralType",
                                                                                                                                                                                                        "literal": {
                                                                                                                                                                                                          "type": "Literal",
                                                                                                                                                                                                          "value": "95",
                                                                                                                                                                                                          "raw": "'95'",
                                                                                                                                                                                                          "start": 2483,
                                                                                                                                                                                                          "end": 2487
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "start": 2483,
                                                                                                                                                                                                        "end": 2487
                                                                                                                                                                                                      },
                                                                                                                                                                                                      "falseType": {
                                                                                                                                                                                                        "type": "TSConditionalType",
                                                                                                                                                                                                        "checkType": {
                                                                                                                                                                                                          "type": "TSTypeReference",
                                                                                                                                                                                                          "typeName": {
                                                                                                                                                                                                            "type": "Identifier",
                                                                                                                                                                                                            "decorators": [],
                                                                                                                                                                                                            "name": "T",
                                                                                                                                                                                                            "optional": false,
                                                                                                                                                                                                            "typeAnnotation": null,
                                                                                                                                                                                                            "start": 2494,
                                                                                                                                                                                                            "end": 2495
                                                                                                                                                                                                          },
                                                                                                                                                                                                          "typeArguments": null,
                                                                                                                                                                                                          "start": 2494,
                                                                                                                                                                                                          "end": 2495
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "extendsType": {
                                                                                                                                                                                                          "type": "TSLiteralType",
                                                                                                                                                                                                          "literal": {
                                                                                                                                                                                                            "type": "Literal",
                                                                                                                                                                                                            "value": 96,
                                                                                                                                                                                                            "raw": "96",
                                                                                                                                                                                                            "start": 2504,
                                                                                                                                                                                                            "end": 2506
                                                                                                                                                                                                          },
                                                                                                                                                                                                          "start": 2504,
                                                                                                                                                                                                          "end": 2506
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "trueType": {
                                                                                                                                                                                                          "type": "TSLiteralType",
                                                                                                                                                                                                          "literal": {
                                                                                                                                                                                                            "type": "Literal",
                                                                                                                                                                                                            "value": "96",
                                                                                                                                                                                                            "raw": "'96'",
                                                                                                                                                                                                            "start": 2509,
                                                                                                                                                                                                            "end": 2513
                                                                                                                                                                                                          },
                                                                                                                                                                                                          "start": 2509,
                                                                                                                                                                                                          "end": 2513
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "falseType": {
                                                                                                                                                                                                          "type": "TSConditionalType",
                                                                                                                                                                                                          "checkType": {
                                                                                                                                                                                                            "type": "TSTypeReference",
                                                                                                                                                                                                            "typeName": {
                                                                                                                                                                                                              "type": "Identifier",
                                                                                                                                                                                                              "decorators": [],
                                                                                                                                                                                                              "name": "T",
                                                                                                                                                                                                              "optional": false,
                                                                                                                                                                                                              "typeAnnotation": null,
                                                                                                                                                                                                              "start": 2520,
                                                                                                                                                                                                              "end": 2521
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "typeArguments": null,
                                                                                                                                                                                                            "start": 2520,
                                                                                                                                                                                                            "end": 2521
                                                                                                                                                                                                          },
                                                                                                                                                                                                          "extendsType": {
                                                                                                                                                                                                            "type": "TSLiteralType",
                                                                                                                                                                                                            "literal": {
                                                                                                                                                                                                              "type": "Literal",
                                                                                                                                                                                                              "value": 97,
                                                                                                                                                                                                              "raw": "97",
                                                                                                                                                                                                              "start": 2530,
                                                                                                                                                                                                              "end": 2532
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "start": 2530,
                                                                                                                                                                                                            "end": 2532
                                                                                                                                                                                                          },
                                                                                                                                                                                                          "trueType": {
                                                                                                                                                                                                            "type": "TSLiteralType",
                                                                                                                                                                                                            "literal": {
                                                                                                                                                                                                              "type": "Literal",
                                                                                                                                                                                                              "value": "97",
                                                                                                                                                                                                              "raw": "'97'",
                                                                                                                                                                                                              "start": 2535,
                                                                                                                                                                                                              "end": 2539
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "start": 2535,
                                                                                                                                                                                                            "end": 2539
                                                                                                                                                                                                          },
                                                                                                                                                                                                          "falseType": {
                                                                                                                                                                                                            "type": "TSConditionalType",
                                                                                                                                                                                                            "checkType": {
                                                                                                                                                                                                              "type": "TSTypeReference",
                                                                                                                                                                                                              "typeName": {
                                                                                                                                                                                                                "type": "Identifier",
                                                                                                                                                                                                                "decorators": [],
                                                                                                                                                                                                                "name": "T",
                                                                                                                                                                                                                "optional": false,
                                                                                                                                                                                                                "typeAnnotation": null,
                                                                                                                                                                                                                "start": 2546,
                                                                                                                                                                                                                "end": 2547
                                                                                                                                                                                                              },
                                                                                                                                                                                                              "typeArguments": null,
                                                                                                                                                                                                              "start": 2546,
                                                                                                                                                                                                              "end": 2547
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "extendsType": {
                                                                                                                                                                                                              "type": "TSLiteralType",
                                                                                                                                                                                                              "literal": {
                                                                                                                                                                                                                "type": "Literal",
                                                                                                                                                                                                                "value": 98,
                                                                                                                                                                                                                "raw": "98",
                                                                                                                                                                                                                "start": 2556,
                                                                                                                                                                                                                "end": 2558
                                                                                                                                                                                                              },
                                                                                                                                                                                                              "start": 2556,
                                                                                                                                                                                                              "end": 2558
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "trueType": {
                                                                                                                                                                                                              "type": "TSLiteralType",
                                                                                                                                                                                                              "literal": {
                                                                                                                                                                                                                "type": "Literal",
                                                                                                                                                                                                                "value": "98",
                                                                                                                                                                                                                "raw": "'98'",
                                                                                                                                                                                                                "start": 2561,
                                                                                                                                                                                                                "end": 2565
                                                                                                                                                                                                              },
                                                                                                                                                                                                              "start": 2561,
                                                                                                                                                                                                              "end": 2565
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "falseType": {
                                                                                                                                                                                                              "type": "TSConditionalType",
                                                                                                                                                                                                              "checkType": {
                                                                                                                                                                                                                "type": "TSTypeReference",
                                                                                                                                                                                                                "typeName": {
                                                                                                                                                                                                                  "type": "Identifier",
                                                                                                                                                                                                                  "decorators": [],
                                                                                                                                                                                                                  "name": "T",
                                                                                                                                                                                                                  "optional": false,
                                                                                                                                                                                                                  "typeAnnotation": null,
                                                                                                                                                                                                                  "start": 2572,
                                                                                                                                                                                                                  "end": 2573
                                                                                                                                                                                                                },
                                                                                                                                                                                                                "typeArguments": null,
                                                                                                                                                                                                                "start": 2572,
                                                                                                                                                                                                                "end": 2573
                                                                                                                                                                                                              },
                                                                                                                                                                                                              "extendsType": {
                                                                                                                                                                                                                "type": "TSLiteralType",
                                                                                                                                                                                                                "literal": {
                                                                                                                                                                                                                  "type": "Literal",
                                                                                                                                                                                                                  "value": 99,
                                                                                                                                                                                                                  "raw": "99",
                                                                                                                                                                                                                  "start": 2582,
                                                                                                                                                                                                                  "end": 2584
                                                                                                                                                                                                                },
                                                                                                                                                                                                                "start": 2582,
                                                                                                                                                                                                                "end": 2584
                                                                                                                                                                                                              },
                                                                                                                                                                                                              "trueType": {
                                                                                                                                                                                                                "type": "TSLiteralType",
                                                                                                                                                                                                                "literal": {
                                                                                                                                                                                                                  "type": "Literal",
                                                                                                                                                                                                                  "value": "99",
                                                                                                                                                                                                                  "raw": "'99'",
                                                                                                                                                                                                                  "start": 2587,
                                                                                                                                                                                                                  "end": 2591
                                                                                                                                                                                                                },
                                                                                                                                                                                                                "start": 2587,
                                                                                                                                                                                                                "end": 2591
                                                                                                                                                                                                              },
                                                                                                                                                                                                              "falseType": {
                                                                                                                                                                                                                "type": "TSNeverKeyword",
                                                                                                                                                                                                                "start": 2598,
                                                                                                                                                                                                                "end": 2603
                                                                                                                                                                                                              },
                                                                                                                                                                                                              "start": 2572,
                                                                                                                                                                                                              "end": 2603
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "start": 2546,
                                                                                                                                                                                                            "end": 2603
                                                                                                                                                                                                          },
                                                                                                                                                                                                          "start": 2520,
                                                                                                                                                                                                          "end": 2603
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "start": 2494,
                                                                                                                                                                                                        "end": 2603
                                                                                                                                                                                                      },
                                                                                                                                                                                                      "start": 2468,
                                                                                                                                                                                                      "end": 2603
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "start": 2442,
                                                                                                                                                                                                    "end": 2603
                                                                                                                                                                                                  },
                                                                                                                                                                                                  "start": 2416,
                                                                                                                                                                                                  "end": 2603
                                                                                                                                                                                                },
                                                                                                                                                                                                "start": 2390,
                                                                                                                                                                                                "end": 2603
                                                                                                                                                                                              },
                                                                                                                                                                                              "start": 2364,
                                                                                                                                                                                              "end": 2603
                                                                                                                                                                                            },
                                                                                                                                                                                            "start": 2338,
                                                                                                                                                                                            "end": 2603
                                                                                                                                                                                          },
                                                                                                                                                                                          "start": 2312,
                                                                                                                                                                                          "end": 2603
                                                                                                                                                                                        },
                                                                                                                                                                                        "start": 2286,
                                                                                                                                                                                        "end": 2603
                                                                                                                                                                                      },
                                                                                                                                                                                      "start": 2260,
                                                                                                                                                                                      "end": 2603
                                                                                                                                                                                    },
                                                                                                                                                                                    "start": 2234,
                                                                                                                                                                                    "end": 2603
                                                                                                                                                                                  },
                                                                                                                                                                                  "start": 2208,
                                                                                                                                                                                  "end": 2603
                                                                                                                                                                                },
                                                                                                                                                                                "start": 2182,
                                                                                                                                                                                "end": 2603
                                                                                                                                                                              },
                                                                                                                                                                              "start": 2156,
                                                                                                                                                                              "end": 2603
                                                                                                                                                                            },
                                                                                                                                                                            "start": 2130,
                                                                                                                                                                            "end": 2603
                                                                                                                                                                          },
                                                                                                                                                                          "start": 2104,
                                                                                                                                                                          "end": 2603
                                                                                                                                                                        },
                                                                                                                                                                        "start": 2078,
                                                                                                                                                                        "end": 2603
                                                                                                                                                                      },
                                                                                                                                                                      "start": 2052,
                                                                                                                                                                      "end": 2603
                                                                                                                                                                    },
                                                                                                                                                                    "start": 2026,
                                                                                                                                                                    "end": 2603
                                                                                                                                                                  },
                                                                                                                                                                  "start": 2000,
                                                                                                                                                                  "end": 2603
                                                                                                                                                                },
                                                                                                                                                                "start": 1974,
                                                                                                                                                                "end": 2603
                                                                                                                                                              },
                                                                                                                                                              "start": 1948,
                                                                                                                                                              "end": 2603
                                                                                                                                                            },
                                                                                                                                                            "start": 1922,
                                                                                                                                                            "end": 2603
                                                                                                                                                          },
                                                                                                                                                          "start": 1896,
                                                                                                                                                          "end": 2603
                                                                                                                                                        },
                                                                                                                                                        "start": 1870,
                                                                                                                                                        "end": 2603
                                                                                                                                                      },
                                                                                                                                                      "start": 1844,
                                                                                                                                                      "end": 2603
                                                                                                                                                    },
                                                                                                                                                    "start": 1818,
                                                                                                                                                    "end": 2603
                                                                                                                                                  },
                                                                                                                                                  "start": 1792,
                                                                                                                                                  "end": 2603
                                                                                                                                                },
                                                                                                                                                "start": 1766,
                                                                                                                                                "end": 2603
                                                                                                                                              },
                                                                                                                                              "start": 1740,
                                                                                                                                              "end": 2603
                                                                                                                                            },
                                                                                                                                            "start": 1714,
                                                                                                                                            "end": 2603
                                                                                                                                          },
                                                                                                                                          "start": 1688,
                                                                                                                                          "end": 2603
                                                                                                                                        },
                                                                                                                                        "start": 1662,
                                                                                                                                        "end": 2603
                                                                                                                                      },
                                                                                                                                      "start": 1636,
                                                                                                                                      "end": 2603
                                                                                                                                    },
                                                                                                                                    "start": 1610,
                                                                                                                                    "end": 2603
                                                                                                                                  },
                                                                                                                                  "start": 1584,
                                                                                                                                  "end": 2603
                                                                                                                                },
                                                                                                                                "start": 1558,
                                                                                                                                "end": 2603
                                                                                                                              },
                                                                                                                              "start": 1532,
                                                                                                                              "end": 2603
                                                                                                                            },
                                                                                                                            "start": 1506,
                                                                                                                            "end": 2603
                                                                                                                          },
                                                                                                                          "start": 1480,
                                                                                                                          "end": 2603
                                                                                                                        },
                                                                                                                        "start": 1454,
                                                                                                                        "end": 2603
                                                                                                                      },
                                                                                                                      "start": 1428,
                                                                                                                      "end": 2603
                                                                                                                    },
                                                                                                                    "start": 1402,
                                                                                                                    "end": 2603
                                                                                                                  },
                                                                                                                  "start": 1376,
                                                                                                                  "end": 2603
                                                                                                                },
                                                                                                                "start": 1350,
                                                                                                                "end": 2603
                                                                                                              },
                                                                                                              "start": 1324,
                                                                                                              "end": 2603
                                                                                                            },
                                                                                                            "start": 1298,
                                                                                                            "end": 2603
                                                                                                          },
                                                                                                          "start": 1272,
                                                                                                          "end": 2603
                                                                                                        },
                                                                                                        "start": 1246,
                                                                                                        "end": 2603
                                                                                                      },
                                                                                                      "start": 1220,
                                                                                                      "end": 2603
                                                                                                    },
                                                                                                    "start": 1194,
                                                                                                    "end": 2603
                                                                                                  },
                                                                                                  "start": 1168,
                                                                                                  "end": 2603
                                                                                                },
                                                                                                "start": 1142,
                                                                                                "end": 2603
                                                                                              },
                                                                                              "start": 1116,
                                                                                              "end": 2603
                                                                                            },
                                                                                            "start": 1090,
                                                                                            "end": 2603
                                                                                          },
                                                                                          "start": 1064,
                                                                                          "end": 2603
                                                                                        },
                                                                                        "start": 1038,
                                                                                        "end": 2603
                                                                                      },
                                                                                      "start": 1012,
                                                                                      "end": 2603
                                                                                    },
                                                                                    "start": 986,
                                                                                    "end": 2603
                                                                                  },
                                                                                  "start": 960,
                                                                                  "end": 2603
                                                                                },
                                                                                "start": 934,
                                                                                "end": 2603
                                                                              },
                                                                              "start": 908,
                                                                              "end": 2603
                                                                            },
                                                                            "start": 882,
                                                                            "end": 2603
                                                                          },
                                                                          "start": 856,
                                                                          "end": 2603
                                                                        },
                                                                        "start": 830,
                                                                        "end": 2603
                                                                      },
                                                                      "start": 804,
                                                                      "end": 2603
                                                                    },
                                                                    "start": 778,
                                                                    "end": 2603
                                                                  },
                                                                  "start": 752,
                                                                  "end": 2603
                                                                },
                                                                "start": 726,
                                                                "end": 2603
                                                              },
                                                              "start": 700,
                                                              "end": 2603
                                                            },
                                                            "start": 674,
                                                            "end": 2603
                                                          },
                                                          "start": 648,
                                                          "end": 2603
                                                        },
                                                        "start": 622,
                                                        "end": 2603
                                                      },
                                                      "start": 596,
                                                      "end": 2603
                                                    },
                                                    "start": 570,
                                                    "end": 2603
                                                  },
                                                  "start": 544,
                                                  "end": 2603
                                                },
                                                "start": 518,
                                                "end": 2603
                                              },
                                              "start": 492,
                                              "end": 2603
                                            },
                                            "start": 466,
                                            "end": 2603
                                          },
                                          "start": 440,
                                          "end": 2603
                                        },
                                        "start": 414,
                                        "end": 2603
                                      },
                                      "start": 388,
                                      "end": 2603
                                    },
                                    "start": 362,
                                    "end": 2603
                                  },
                                  "start": 336,
                                  "end": 2603
                                },
                                "start": 310,
                                "end": 2603
                              },
                              "start": 284,
                              "end": 2603
                            },
                            "start": 258,
                            "end": 2603
                          },
                          "start": 234,
                          "end": 2603
                        },
                        "start": 210,
                        "end": 2603
                      },
                      "start": 186,
                      "end": 2603
                    },
                    "start": 162,
                    "end": 2603
                  },
                  "start": 138,
                  "end": 2603
                },
                "start": 114,
                "end": 2603
              },
              "start": 90,
              "end": 2603
            },
            "start": 66,
            "end": 2603
          },
          "start": 42,
          "end": 2603
        },
        "start": 18,
        "end": 2603
      },
      "declare": false,
      "start": 0,
      "end": 2604
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null,
        "start": 2611,
        "end": 2613
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 2616,
          "end": 2619
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 99,
                "raw": "99",
                "start": 2620,
                "end": 2622
              },
              "start": 2620,
              "end": 2622
            }
          ],
          "start": 2619,
          "end": 2623
        },
        "start": 2616,
        "end": 2623
      },
      "declare": false,
      "start": 2606,
      "end": 2624
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2630,
        "end": 2632
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 2635,
          "end": 2638
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 2639,
              "end": 2642
            }
          ],
          "start": 2638,
          "end": 2643
        },
        "start": 2635,
        "end": 2643
      },
      "declare": false,
      "start": 2625,
      "end": 2644
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2644
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 5,
    "end": 8,
    "range": [
      5,
      8
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 20,
    "end": 27,
    "range": [
      20,
      27
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "String",
    "value": "'0'",
    "start": 32,
    "end": 35,
    "range": [
      32,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 44,
    "end": 51,
    "range": [
      44,
      51
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 56,
    "end": 59,
    "range": [
      56,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 68,
    "end": 75,
    "range": [
      68,
      75
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 80,
    "end": 83,
    "range": [
      80,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 92,
    "end": 99,
    "range": [
      92,
      99
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "String",
    "value": "'3'",
    "start": 104,
    "end": 107,
    "range": [
      104,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 116,
    "end": 123,
    "range": [
      116,
      123
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "String",
    "value": "'4'",
    "start": 128,
    "end": 131,
    "range": [
      128,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 140,
    "end": 147,
    "range": [
      140,
      147
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "String",
    "value": "'5'",
    "start": 152,
    "end": 155,
    "range": [
      152,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 164,
    "end": 171,
    "range": [
      164,
      171
    ]
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "String",
    "value": "'6'",
    "start": 176,
    "end": 179,
    "range": [
      176,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 188,
    "end": 195,
    "range": [
      188,
      195
    ]
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "String",
    "value": "'7'",
    "start": 200,
    "end": 203,
    "range": [
      200,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 212,
    "end": 219,
    "range": [
      212,
      219
    ]
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "String",
    "value": "'8'",
    "start": 224,
    "end": 227,
    "range": [
      224,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 236,
    "end": 243,
    "range": [
      236,
      243
    ]
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "String",
    "value": "'9'",
    "start": 248,
    "end": 251,
    "range": [
      248,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 260,
    "end": 267,
    "range": [
      260,
      267
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 268,
    "end": 270,
    "range": [
      268,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "String",
    "value": "'10'",
    "start": 273,
    "end": 277,
    "range": [
      273,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 286,
    "end": 293,
    "range": [
      286,
      293
    ]
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 294,
    "end": 296,
    "range": [
      294,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "String",
    "value": "'11'",
    "start": 299,
    "end": 303,
    "range": [
      299,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 312,
    "end": 319,
    "range": [
      312,
      319
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 320,
    "end": 322,
    "range": [
      320,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "String",
    "value": "'12'",
    "start": 325,
    "end": 329,
    "range": [
      325,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 338,
    "end": 345,
    "range": [
      338,
      345
    ]
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 346,
    "end": 348,
    "range": [
      346,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "String",
    "value": "'13'",
    "start": 351,
    "end": 355,
    "range": [
      351,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 364,
    "end": 371,
    "range": [
      364,
      371
    ]
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 372,
    "end": 374,
    "range": [
      372,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "String",
    "value": "'14'",
    "start": 377,
    "end": 381,
    "range": [
      377,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 390,
    "end": 397,
    "range": [
      390,
      397
    ]
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 398,
    "end": 400,
    "range": [
      398,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "String",
    "value": "'15'",
    "start": 403,
    "end": 407,
    "range": [
      403,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 416,
    "end": 423,
    "range": [
      416,
      423
    ]
  },
  {
    "type": "Numeric",
    "value": "16",
    "start": 424,
    "end": 426,
    "range": [
      424,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "String",
    "value": "'16'",
    "start": 429,
    "end": 433,
    "range": [
      429,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 442,
    "end": 449,
    "range": [
      442,
      449
    ]
  },
  {
    "type": "Numeric",
    "value": "17",
    "start": 450,
    "end": 452,
    "range": [
      450,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "String",
    "value": "'17'",
    "start": 455,
    "end": 459,
    "range": [
      455,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 468,
    "end": 475,
    "range": [
      468,
      475
    ]
  },
  {
    "type": "Numeric",
    "value": "18",
    "start": 476,
    "end": 478,
    "range": [
      476,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "String",
    "value": "'18'",
    "start": 481,
    "end": 485,
    "range": [
      481,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 494,
    "end": 501,
    "range": [
      494,
      501
    ]
  },
  {
    "type": "Numeric",
    "value": "19",
    "start": 502,
    "end": 504,
    "range": [
      502,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "String",
    "value": "'19'",
    "start": 507,
    "end": 511,
    "range": [
      507,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 520,
    "end": 527,
    "range": [
      520,
      527
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 528,
    "end": 530,
    "range": [
      528,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "String",
    "value": "'20'",
    "start": 533,
    "end": 537,
    "range": [
      533,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 546,
    "end": 553,
    "range": [
      546,
      553
    ]
  },
  {
    "type": "Numeric",
    "value": "21",
    "start": 554,
    "end": 556,
    "range": [
      554,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "String",
    "value": "'21'",
    "start": 559,
    "end": 563,
    "range": [
      559,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 572,
    "end": 579,
    "range": [
      572,
      579
    ]
  },
  {
    "type": "Numeric",
    "value": "22",
    "start": 580,
    "end": 582,
    "range": [
      580,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "String",
    "value": "'22'",
    "start": 585,
    "end": 589,
    "range": [
      585,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 598,
    "end": 605,
    "range": [
      598,
      605
    ]
  },
  {
    "type": "Numeric",
    "value": "23",
    "start": 606,
    "end": 608,
    "range": [
      606,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "String",
    "value": "'23'",
    "start": 611,
    "end": 615,
    "range": [
      611,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 624,
    "end": 631,
    "range": [
      624,
      631
    ]
  },
  {
    "type": "Numeric",
    "value": "24",
    "start": 632,
    "end": 634,
    "range": [
      632,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "String",
    "value": "'24'",
    "start": 637,
    "end": 641,
    "range": [
      637,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 650,
    "end": 657,
    "range": [
      650,
      657
    ]
  },
  {
    "type": "Numeric",
    "value": "25",
    "start": 658,
    "end": 660,
    "range": [
      658,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "String",
    "value": "'25'",
    "start": 663,
    "end": 667,
    "range": [
      663,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 676,
    "end": 683,
    "range": [
      676,
      683
    ]
  },
  {
    "type": "Numeric",
    "value": "26",
    "start": 684,
    "end": 686,
    "range": [
      684,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "String",
    "value": "'26'",
    "start": 689,
    "end": 693,
    "range": [
      689,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 702,
    "end": 709,
    "range": [
      702,
      709
    ]
  },
  {
    "type": "Numeric",
    "value": "27",
    "start": 710,
    "end": 712,
    "range": [
      710,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "String",
    "value": "'27'",
    "start": 715,
    "end": 719,
    "range": [
      715,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 728,
    "end": 735,
    "range": [
      728,
      735
    ]
  },
  {
    "type": "Numeric",
    "value": "28",
    "start": 736,
    "end": 738,
    "range": [
      736,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "String",
    "value": "'28'",
    "start": 741,
    "end": 745,
    "range": [
      741,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 754,
    "end": 761,
    "range": [
      754,
      761
    ]
  },
  {
    "type": "Numeric",
    "value": "29",
    "start": 762,
    "end": 764,
    "range": [
      762,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "String",
    "value": "'29'",
    "start": 767,
    "end": 771,
    "range": [
      767,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 780,
    "end": 787,
    "range": [
      780,
      787
    ]
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 788,
    "end": 790,
    "range": [
      788,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "String",
    "value": "'30'",
    "start": 793,
    "end": 797,
    "range": [
      793,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 806,
    "end": 813,
    "range": [
      806,
      813
    ]
  },
  {
    "type": "Numeric",
    "value": "31",
    "start": 814,
    "end": 816,
    "range": [
      814,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "String",
    "value": "'31'",
    "start": 819,
    "end": 823,
    "range": [
      819,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 832,
    "end": 839,
    "range": [
      832,
      839
    ]
  },
  {
    "type": "Numeric",
    "value": "32",
    "start": 840,
    "end": 842,
    "range": [
      840,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "String",
    "value": "'32'",
    "start": 845,
    "end": 849,
    "range": [
      845,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 858,
    "end": 865,
    "range": [
      858,
      865
    ]
  },
  {
    "type": "Numeric",
    "value": "33",
    "start": 866,
    "end": 868,
    "range": [
      866,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "String",
    "value": "'33'",
    "start": 871,
    "end": 875,
    "range": [
      871,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 884,
    "end": 891,
    "range": [
      884,
      891
    ]
  },
  {
    "type": "Numeric",
    "value": "34",
    "start": 892,
    "end": 894,
    "range": [
      892,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "String",
    "value": "'34'",
    "start": 897,
    "end": 901,
    "range": [
      897,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 910,
    "end": 917,
    "range": [
      910,
      917
    ]
  },
  {
    "type": "Numeric",
    "value": "35",
    "start": 918,
    "end": 920,
    "range": [
      918,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "String",
    "value": "'35'",
    "start": 923,
    "end": 927,
    "range": [
      923,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 936,
    "end": 943,
    "range": [
      936,
      943
    ]
  },
  {
    "type": "Numeric",
    "value": "36",
    "start": 944,
    "end": 946,
    "range": [
      944,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "String",
    "value": "'36'",
    "start": 949,
    "end": 953,
    "range": [
      949,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 962,
    "end": 969,
    "range": [
      962,
      969
    ]
  },
  {
    "type": "Numeric",
    "value": "37",
    "start": 970,
    "end": 972,
    "range": [
      970,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "String",
    "value": "'37'",
    "start": 975,
    "end": 979,
    "range": [
      975,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 988,
    "end": 995,
    "range": [
      988,
      995
    ]
  },
  {
    "type": "Numeric",
    "value": "38",
    "start": 996,
    "end": 998,
    "range": [
      996,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "String",
    "value": "'38'",
    "start": 1001,
    "end": 1005,
    "range": [
      1001,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1014,
    "end": 1021,
    "range": [
      1014,
      1021
    ]
  },
  {
    "type": "Numeric",
    "value": "39",
    "start": 1022,
    "end": 1024,
    "range": [
      1022,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "String",
    "value": "'39'",
    "start": 1027,
    "end": 1031,
    "range": [
      1027,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1040,
    "end": 1047,
    "range": [
      1040,
      1047
    ]
  },
  {
    "type": "Numeric",
    "value": "40",
    "start": 1048,
    "end": 1050,
    "range": [
      1048,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "String",
    "value": "'40'",
    "start": 1053,
    "end": 1057,
    "range": [
      1053,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1066,
    "end": 1073,
    "range": [
      1066,
      1073
    ]
  },
  {
    "type": "Numeric",
    "value": "41",
    "start": 1074,
    "end": 1076,
    "range": [
      1074,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "String",
    "value": "'41'",
    "start": 1079,
    "end": 1083,
    "range": [
      1079,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1092,
    "end": 1099,
    "range": [
      1092,
      1099
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1100,
    "end": 1102,
    "range": [
      1100,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "String",
    "value": "'42'",
    "start": 1105,
    "end": 1109,
    "range": [
      1105,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1118,
    "end": 1125,
    "range": [
      1118,
      1125
    ]
  },
  {
    "type": "Numeric",
    "value": "43",
    "start": 1126,
    "end": 1128,
    "range": [
      1126,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "String",
    "value": "'43'",
    "start": 1131,
    "end": 1135,
    "range": [
      1131,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1144,
    "end": 1151,
    "range": [
      1144,
      1151
    ]
  },
  {
    "type": "Numeric",
    "value": "44",
    "start": 1152,
    "end": 1154,
    "range": [
      1152,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "String",
    "value": "'44'",
    "start": 1157,
    "end": 1161,
    "range": [
      1157,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1170,
    "end": 1177,
    "range": [
      1170,
      1177
    ]
  },
  {
    "type": "Numeric",
    "value": "45",
    "start": 1178,
    "end": 1180,
    "range": [
      1178,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "String",
    "value": "'45'",
    "start": 1183,
    "end": 1187,
    "range": [
      1183,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1196,
    "end": 1203,
    "range": [
      1196,
      1203
    ]
  },
  {
    "type": "Numeric",
    "value": "46",
    "start": 1204,
    "end": 1206,
    "range": [
      1204,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "String",
    "value": "'46'",
    "start": 1209,
    "end": 1213,
    "range": [
      1209,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1220,
    "end": 1221,
    "range": [
      1220,
      1221
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1222,
    "end": 1229,
    "range": [
      1222,
      1229
    ]
  },
  {
    "type": "Numeric",
    "value": "47",
    "start": 1230,
    "end": 1232,
    "range": [
      1230,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "String",
    "value": "'47'",
    "start": 1235,
    "end": 1239,
    "range": [
      1235,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1248,
    "end": 1255,
    "range": [
      1248,
      1255
    ]
  },
  {
    "type": "Numeric",
    "value": "48",
    "start": 1256,
    "end": 1258,
    "range": [
      1256,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "String",
    "value": "'48'",
    "start": 1261,
    "end": 1265,
    "range": [
      1261,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1274,
    "end": 1281,
    "range": [
      1274,
      1281
    ]
  },
  {
    "type": "Numeric",
    "value": "49",
    "start": 1282,
    "end": 1284,
    "range": [
      1282,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "String",
    "value": "'49'",
    "start": 1287,
    "end": 1291,
    "range": [
      1287,
      1291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1300,
    "end": 1307,
    "range": [
      1300,
      1307
    ]
  },
  {
    "type": "Numeric",
    "value": "50",
    "start": 1308,
    "end": 1310,
    "range": [
      1308,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "String",
    "value": "'50'",
    "start": 1313,
    "end": 1317,
    "range": [
      1313,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1326,
    "end": 1333,
    "range": [
      1326,
      1333
    ]
  },
  {
    "type": "Numeric",
    "value": "51",
    "start": 1334,
    "end": 1336,
    "range": [
      1334,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "String",
    "value": "'51'",
    "start": 1339,
    "end": 1343,
    "range": [
      1339,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1352,
    "end": 1359,
    "range": [
      1352,
      1359
    ]
  },
  {
    "type": "Numeric",
    "value": "52",
    "start": 1360,
    "end": 1362,
    "range": [
      1360,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "String",
    "value": "'52'",
    "start": 1365,
    "end": 1369,
    "range": [
      1365,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1378,
    "end": 1385,
    "range": [
      1378,
      1385
    ]
  },
  {
    "type": "Numeric",
    "value": "53",
    "start": 1386,
    "end": 1388,
    "range": [
      1386,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "String",
    "value": "'53'",
    "start": 1391,
    "end": 1395,
    "range": [
      1391,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1404,
    "end": 1411,
    "range": [
      1404,
      1411
    ]
  },
  {
    "type": "Numeric",
    "value": "54",
    "start": 1412,
    "end": 1414,
    "range": [
      1412,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "String",
    "value": "'54'",
    "start": 1417,
    "end": 1421,
    "range": [
      1417,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1430,
    "end": 1437,
    "range": [
      1430,
      1437
    ]
  },
  {
    "type": "Numeric",
    "value": "55",
    "start": 1438,
    "end": 1440,
    "range": [
      1438,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "String",
    "value": "'55'",
    "start": 1443,
    "end": 1447,
    "range": [
      1443,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1456,
    "end": 1463,
    "range": [
      1456,
      1463
    ]
  },
  {
    "type": "Numeric",
    "value": "56",
    "start": 1464,
    "end": 1466,
    "range": [
      1464,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "String",
    "value": "'56'",
    "start": 1469,
    "end": 1473,
    "range": [
      1469,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1482,
    "end": 1489,
    "range": [
      1482,
      1489
    ]
  },
  {
    "type": "Numeric",
    "value": "57",
    "start": 1490,
    "end": 1492,
    "range": [
      1490,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "String",
    "value": "'57'",
    "start": 1495,
    "end": 1499,
    "range": [
      1495,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1508,
    "end": 1515,
    "range": [
      1508,
      1515
    ]
  },
  {
    "type": "Numeric",
    "value": "58",
    "start": 1516,
    "end": 1518,
    "range": [
      1516,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "String",
    "value": "'58'",
    "start": 1521,
    "end": 1525,
    "range": [
      1521,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1534,
    "end": 1541,
    "range": [
      1534,
      1541
    ]
  },
  {
    "type": "Numeric",
    "value": "59",
    "start": 1542,
    "end": 1544,
    "range": [
      1542,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "String",
    "value": "'59'",
    "start": 1547,
    "end": 1551,
    "range": [
      1547,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1560,
    "end": 1567,
    "range": [
      1560,
      1567
    ]
  },
  {
    "type": "Numeric",
    "value": "60",
    "start": 1568,
    "end": 1570,
    "range": [
      1568,
      1570
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "String",
    "value": "'60'",
    "start": 1573,
    "end": 1577,
    "range": [
      1573,
      1577
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1586,
    "end": 1593,
    "range": [
      1586,
      1593
    ]
  },
  {
    "type": "Numeric",
    "value": "61",
    "start": 1594,
    "end": 1596,
    "range": [
      1594,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "String",
    "value": "'61'",
    "start": 1599,
    "end": 1603,
    "range": [
      1599,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1612,
    "end": 1619,
    "range": [
      1612,
      1619
    ]
  },
  {
    "type": "Numeric",
    "value": "62",
    "start": 1620,
    "end": 1622,
    "range": [
      1620,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "String",
    "value": "'62'",
    "start": 1625,
    "end": 1629,
    "range": [
      1625,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1638,
    "end": 1645,
    "range": [
      1638,
      1645
    ]
  },
  {
    "type": "Numeric",
    "value": "63",
    "start": 1646,
    "end": 1648,
    "range": [
      1646,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "String",
    "value": "'63'",
    "start": 1651,
    "end": 1655,
    "range": [
      1651,
      1655
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1664,
    "end": 1671,
    "range": [
      1664,
      1671
    ]
  },
  {
    "type": "Numeric",
    "value": "64",
    "start": 1672,
    "end": 1674,
    "range": [
      1672,
      1674
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "String",
    "value": "'64'",
    "start": 1677,
    "end": 1681,
    "range": [
      1677,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1690,
    "end": 1697,
    "range": [
      1690,
      1697
    ]
  },
  {
    "type": "Numeric",
    "value": "65",
    "start": 1698,
    "end": 1700,
    "range": [
      1698,
      1700
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "String",
    "value": "'65'",
    "start": 1703,
    "end": 1707,
    "range": [
      1703,
      1707
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1708,
    "end": 1709,
    "range": [
      1708,
      1709
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1716,
    "end": 1723,
    "range": [
      1716,
      1723
    ]
  },
  {
    "type": "Numeric",
    "value": "66",
    "start": 1724,
    "end": 1726,
    "range": [
      1724,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "String",
    "value": "'66'",
    "start": 1729,
    "end": 1733,
    "range": [
      1729,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1742,
    "end": 1749,
    "range": [
      1742,
      1749
    ]
  },
  {
    "type": "Numeric",
    "value": "67",
    "start": 1750,
    "end": 1752,
    "range": [
      1750,
      1752
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "String",
    "value": "'67'",
    "start": 1755,
    "end": 1759,
    "range": [
      1755,
      1759
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1766,
    "end": 1767,
    "range": [
      1766,
      1767
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1768,
    "end": 1775,
    "range": [
      1768,
      1775
    ]
  },
  {
    "type": "Numeric",
    "value": "68",
    "start": 1776,
    "end": 1778,
    "range": [
      1776,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "String",
    "value": "'68'",
    "start": 1781,
    "end": 1785,
    "range": [
      1781,
      1785
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1794,
    "end": 1801,
    "range": [
      1794,
      1801
    ]
  },
  {
    "type": "Numeric",
    "value": "69",
    "start": 1802,
    "end": 1804,
    "range": [
      1802,
      1804
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "String",
    "value": "'69'",
    "start": 1807,
    "end": 1811,
    "range": [
      1807,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1820,
    "end": 1827,
    "range": [
      1820,
      1827
    ]
  },
  {
    "type": "Numeric",
    "value": "70",
    "start": 1828,
    "end": 1830,
    "range": [
      1828,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1831,
    "end": 1832,
    "range": [
      1831,
      1832
    ]
  },
  {
    "type": "String",
    "value": "'70'",
    "start": 1833,
    "end": 1837,
    "range": [
      1833,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1838,
    "end": 1839,
    "range": [
      1838,
      1839
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1846,
    "end": 1853,
    "range": [
      1846,
      1853
    ]
  },
  {
    "type": "Numeric",
    "value": "71",
    "start": 1854,
    "end": 1856,
    "range": [
      1854,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "String",
    "value": "'71'",
    "start": 1859,
    "end": 1863,
    "range": [
      1859,
      1863
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1864,
    "end": 1865,
    "range": [
      1864,
      1865
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1870,
    "end": 1871,
    "range": [
      1870,
      1871
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1872,
    "end": 1879,
    "range": [
      1872,
      1879
    ]
  },
  {
    "type": "Numeric",
    "value": "72",
    "start": 1880,
    "end": 1882,
    "range": [
      1880,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "String",
    "value": "'72'",
    "start": 1885,
    "end": 1889,
    "range": [
      1885,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1898,
    "end": 1905,
    "range": [
      1898,
      1905
    ]
  },
  {
    "type": "Numeric",
    "value": "73",
    "start": 1906,
    "end": 1908,
    "range": [
      1906,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "String",
    "value": "'73'",
    "start": 1911,
    "end": 1915,
    "range": [
      1911,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1924,
    "end": 1931,
    "range": [
      1924,
      1931
    ]
  },
  {
    "type": "Numeric",
    "value": "74",
    "start": 1932,
    "end": 1934,
    "range": [
      1932,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "String",
    "value": "'74'",
    "start": 1937,
    "end": 1941,
    "range": [
      1937,
      1941
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1942,
    "end": 1943,
    "range": [
      1942,
      1943
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1950,
    "end": 1957,
    "range": [
      1950,
      1957
    ]
  },
  {
    "type": "Numeric",
    "value": "75",
    "start": 1958,
    "end": 1960,
    "range": [
      1958,
      1960
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1961,
    "end": 1962,
    "range": [
      1961,
      1962
    ]
  },
  {
    "type": "String",
    "value": "'75'",
    "start": 1963,
    "end": 1967,
    "range": [
      1963,
      1967
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1974,
    "end": 1975,
    "range": [
      1974,
      1975
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1976,
    "end": 1983,
    "range": [
      1976,
      1983
    ]
  },
  {
    "type": "Numeric",
    "value": "76",
    "start": 1984,
    "end": 1986,
    "range": [
      1984,
      1986
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1987,
    "end": 1988,
    "range": [
      1987,
      1988
    ]
  },
  {
    "type": "String",
    "value": "'76'",
    "start": 1989,
    "end": 1993,
    "range": [
      1989,
      1993
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1994,
    "end": 1995,
    "range": [
      1994,
      1995
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2002,
    "end": 2009,
    "range": [
      2002,
      2009
    ]
  },
  {
    "type": "Numeric",
    "value": "77",
    "start": 2010,
    "end": 2012,
    "range": [
      2010,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  },
  {
    "type": "String",
    "value": "'77'",
    "start": 2015,
    "end": 2019,
    "range": [
      2015,
      2019
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2020,
    "end": 2021,
    "range": [
      2020,
      2021
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2028,
    "end": 2035,
    "range": [
      2028,
      2035
    ]
  },
  {
    "type": "Numeric",
    "value": "78",
    "start": 2036,
    "end": 2038,
    "range": [
      2036,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2039,
    "end": 2040,
    "range": [
      2039,
      2040
    ]
  },
  {
    "type": "String",
    "value": "'78'",
    "start": 2041,
    "end": 2045,
    "range": [
      2041,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2052,
    "end": 2053,
    "range": [
      2052,
      2053
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2054,
    "end": 2061,
    "range": [
      2054,
      2061
    ]
  },
  {
    "type": "Numeric",
    "value": "79",
    "start": 2062,
    "end": 2064,
    "range": [
      2062,
      2064
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2065,
    "end": 2066,
    "range": [
      2065,
      2066
    ]
  },
  {
    "type": "String",
    "value": "'79'",
    "start": 2067,
    "end": 2071,
    "range": [
      2067,
      2071
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2072,
    "end": 2073,
    "range": [
      2072,
      2073
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2078,
    "end": 2079,
    "range": [
      2078,
      2079
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2080,
    "end": 2087,
    "range": [
      2080,
      2087
    ]
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 2088,
    "end": 2090,
    "range": [
      2088,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2091,
    "end": 2092,
    "range": [
      2091,
      2092
    ]
  },
  {
    "type": "String",
    "value": "'80'",
    "start": 2093,
    "end": 2097,
    "range": [
      2093,
      2097
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2098,
    "end": 2099,
    "range": [
      2098,
      2099
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2104,
    "end": 2105,
    "range": [
      2104,
      2105
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2106,
    "end": 2113,
    "range": [
      2106,
      2113
    ]
  },
  {
    "type": "Numeric",
    "value": "81",
    "start": 2114,
    "end": 2116,
    "range": [
      2114,
      2116
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2117,
    "end": 2118,
    "range": [
      2117,
      2118
    ]
  },
  {
    "type": "String",
    "value": "'81'",
    "start": 2119,
    "end": 2123,
    "range": [
      2119,
      2123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2132,
    "end": 2139,
    "range": [
      2132,
      2139
    ]
  },
  {
    "type": "Numeric",
    "value": "82",
    "start": 2140,
    "end": 2142,
    "range": [
      2140,
      2142
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2143,
    "end": 2144,
    "range": [
      2143,
      2144
    ]
  },
  {
    "type": "String",
    "value": "'82'",
    "start": 2145,
    "end": 2149,
    "range": [
      2145,
      2149
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2150,
    "end": 2151,
    "range": [
      2150,
      2151
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2156,
    "end": 2157,
    "range": [
      2156,
      2157
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2158,
    "end": 2165,
    "range": [
      2158,
      2165
    ]
  },
  {
    "type": "Numeric",
    "value": "83",
    "start": 2166,
    "end": 2168,
    "range": [
      2166,
      2168
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2169,
    "end": 2170,
    "range": [
      2169,
      2170
    ]
  },
  {
    "type": "String",
    "value": "'83'",
    "start": 2171,
    "end": 2175,
    "range": [
      2171,
      2175
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2182,
    "end": 2183,
    "range": [
      2182,
      2183
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2184,
    "end": 2191,
    "range": [
      2184,
      2191
    ]
  },
  {
    "type": "Numeric",
    "value": "84",
    "start": 2192,
    "end": 2194,
    "range": [
      2192,
      2194
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2195,
    "end": 2196,
    "range": [
      2195,
      2196
    ]
  },
  {
    "type": "String",
    "value": "'84'",
    "start": 2197,
    "end": 2201,
    "range": [
      2197,
      2201
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2202,
    "end": 2203,
    "range": [
      2202,
      2203
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2208,
    "end": 2209,
    "range": [
      2208,
      2209
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2210,
    "end": 2217,
    "range": [
      2210,
      2217
    ]
  },
  {
    "type": "Numeric",
    "value": "85",
    "start": 2218,
    "end": 2220,
    "range": [
      2218,
      2220
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2221,
    "end": 2222,
    "range": [
      2221,
      2222
    ]
  },
  {
    "type": "String",
    "value": "'85'",
    "start": 2223,
    "end": 2227,
    "range": [
      2223,
      2227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2228,
    "end": 2229,
    "range": [
      2228,
      2229
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2234,
    "end": 2235,
    "range": [
      2234,
      2235
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2236,
    "end": 2243,
    "range": [
      2236,
      2243
    ]
  },
  {
    "type": "Numeric",
    "value": "86",
    "start": 2244,
    "end": 2246,
    "range": [
      2244,
      2246
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2247,
    "end": 2248,
    "range": [
      2247,
      2248
    ]
  },
  {
    "type": "String",
    "value": "'86'",
    "start": 2249,
    "end": 2253,
    "range": [
      2249,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2254,
    "end": 2255,
    "range": [
      2254,
      2255
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2260,
    "end": 2261,
    "range": [
      2260,
      2261
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2262,
    "end": 2269,
    "range": [
      2262,
      2269
    ]
  },
  {
    "type": "Numeric",
    "value": "87",
    "start": 2270,
    "end": 2272,
    "range": [
      2270,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "String",
    "value": "'87'",
    "start": 2275,
    "end": 2279,
    "range": [
      2275,
      2279
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2286,
    "end": 2287,
    "range": [
      2286,
      2287
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2288,
    "end": 2295,
    "range": [
      2288,
      2295
    ]
  },
  {
    "type": "Numeric",
    "value": "88",
    "start": 2296,
    "end": 2298,
    "range": [
      2296,
      2298
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2299,
    "end": 2300,
    "range": [
      2299,
      2300
    ]
  },
  {
    "type": "String",
    "value": "'88'",
    "start": 2301,
    "end": 2305,
    "range": [
      2301,
      2305
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2312,
    "end": 2313,
    "range": [
      2312,
      2313
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2314,
    "end": 2321,
    "range": [
      2314,
      2321
    ]
  },
  {
    "type": "Numeric",
    "value": "89",
    "start": 2322,
    "end": 2324,
    "range": [
      2322,
      2324
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2325,
    "end": 2326,
    "range": [
      2325,
      2326
    ]
  },
  {
    "type": "String",
    "value": "'89'",
    "start": 2327,
    "end": 2331,
    "range": [
      2327,
      2331
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2332,
    "end": 2333,
    "range": [
      2332,
      2333
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2338,
    "end": 2339,
    "range": [
      2338,
      2339
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2340,
    "end": 2347,
    "range": [
      2340,
      2347
    ]
  },
  {
    "type": "Numeric",
    "value": "90",
    "start": 2348,
    "end": 2350,
    "range": [
      2348,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "String",
    "value": "'90'",
    "start": 2353,
    "end": 2357,
    "range": [
      2353,
      2357
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2358,
    "end": 2359,
    "range": [
      2358,
      2359
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2366,
    "end": 2373,
    "range": [
      2366,
      2373
    ]
  },
  {
    "type": "Numeric",
    "value": "91",
    "start": 2374,
    "end": 2376,
    "range": [
      2374,
      2376
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2377,
    "end": 2378,
    "range": [
      2377,
      2378
    ]
  },
  {
    "type": "String",
    "value": "'91'",
    "start": 2379,
    "end": 2383,
    "range": [
      2379,
      2383
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2384,
    "end": 2385,
    "range": [
      2384,
      2385
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2390,
    "end": 2391,
    "range": [
      2390,
      2391
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2392,
    "end": 2399,
    "range": [
      2392,
      2399
    ]
  },
  {
    "type": "Numeric",
    "value": "92",
    "start": 2400,
    "end": 2402,
    "range": [
      2400,
      2402
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2403,
    "end": 2404,
    "range": [
      2403,
      2404
    ]
  },
  {
    "type": "String",
    "value": "'92'",
    "start": 2405,
    "end": 2409,
    "range": [
      2405,
      2409
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2416,
    "end": 2417,
    "range": [
      2416,
      2417
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2418,
    "end": 2425,
    "range": [
      2418,
      2425
    ]
  },
  {
    "type": "Numeric",
    "value": "93",
    "start": 2426,
    "end": 2428,
    "range": [
      2426,
      2428
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2429,
    "end": 2430,
    "range": [
      2429,
      2430
    ]
  },
  {
    "type": "String",
    "value": "'93'",
    "start": 2431,
    "end": 2435,
    "range": [
      2431,
      2435
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2436,
    "end": 2437,
    "range": [
      2436,
      2437
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2442,
    "end": 2443,
    "range": [
      2442,
      2443
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2444,
    "end": 2451,
    "range": [
      2444,
      2451
    ]
  },
  {
    "type": "Numeric",
    "value": "94",
    "start": 2452,
    "end": 2454,
    "range": [
      2452,
      2454
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2455,
    "end": 2456,
    "range": [
      2455,
      2456
    ]
  },
  {
    "type": "String",
    "value": "'94'",
    "start": 2457,
    "end": 2461,
    "range": [
      2457,
      2461
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2468,
    "end": 2469,
    "range": [
      2468,
      2469
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2470,
    "end": 2477,
    "range": [
      2470,
      2477
    ]
  },
  {
    "type": "Numeric",
    "value": "95",
    "start": 2478,
    "end": 2480,
    "range": [
      2478,
      2480
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2481,
    "end": 2482,
    "range": [
      2481,
      2482
    ]
  },
  {
    "type": "String",
    "value": "'95'",
    "start": 2483,
    "end": 2487,
    "range": [
      2483,
      2487
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2488,
    "end": 2489,
    "range": [
      2488,
      2489
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2494,
    "end": 2495,
    "range": [
      2494,
      2495
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2496,
    "end": 2503,
    "range": [
      2496,
      2503
    ]
  },
  {
    "type": "Numeric",
    "value": "96",
    "start": 2504,
    "end": 2506,
    "range": [
      2504,
      2506
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2507,
    "end": 2508,
    "range": [
      2507,
      2508
    ]
  },
  {
    "type": "String",
    "value": "'96'",
    "start": 2509,
    "end": 2513,
    "range": [
      2509,
      2513
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2514,
    "end": 2515,
    "range": [
      2514,
      2515
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2520,
    "end": 2521,
    "range": [
      2520,
      2521
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2522,
    "end": 2529,
    "range": [
      2522,
      2529
    ]
  },
  {
    "type": "Numeric",
    "value": "97",
    "start": 2530,
    "end": 2532,
    "range": [
      2530,
      2532
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2533,
    "end": 2534,
    "range": [
      2533,
      2534
    ]
  },
  {
    "type": "String",
    "value": "'97'",
    "start": 2535,
    "end": 2539,
    "range": [
      2535,
      2539
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2540,
    "end": 2541,
    "range": [
      2540,
      2541
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2546,
    "end": 2547,
    "range": [
      2546,
      2547
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2548,
    "end": 2555,
    "range": [
      2548,
      2555
    ]
  },
  {
    "type": "Numeric",
    "value": "98",
    "start": 2556,
    "end": 2558,
    "range": [
      2556,
      2558
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2559,
    "end": 2560,
    "range": [
      2559,
      2560
    ]
  },
  {
    "type": "String",
    "value": "'98'",
    "start": 2561,
    "end": 2565,
    "range": [
      2561,
      2565
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2566,
    "end": 2567,
    "range": [
      2566,
      2567
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2572,
    "end": 2573,
    "range": [
      2572,
      2573
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2574,
    "end": 2581,
    "range": [
      2574,
      2581
    ]
  },
  {
    "type": "Numeric",
    "value": "99",
    "start": 2582,
    "end": 2584,
    "range": [
      2582,
      2584
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2585,
    "end": 2586,
    "range": [
      2585,
      2586
    ]
  },
  {
    "type": "String",
    "value": "'99'",
    "start": 2587,
    "end": 2591,
    "range": [
      2587,
      2591
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2592,
    "end": 2593,
    "range": [
      2592,
      2593
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2598,
    "end": 2603,
    "range": [
      2598,
      2603
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2603,
    "end": 2604,
    "range": [
      2603,
      2604
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2606,
    "end": 2610,
    "range": [
      2606,
      2610
    ]
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 2611,
    "end": 2613,
    "range": [
      2611,
      2613
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2614,
    "end": 2615,
    "range": [
      2614,
      2615
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2616,
    "end": 2619,
    "range": [
      2616,
      2619
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2619,
    "end": 2620,
    "range": [
      2619,
      2620
    ]
  },
  {
    "type": "Numeric",
    "value": "99",
    "start": 2620,
    "end": 2622,
    "range": [
      2620,
      2622
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2622,
    "end": 2623,
    "range": [
      2622,
      2623
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2623,
    "end": 2624,
    "range": [
      2623,
      2624
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2625,
    "end": 2629,
    "range": [
      2625,
      2629
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 2630,
    "end": 2632,
    "range": [
      2630,
      2632
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2633,
    "end": 2634,
    "range": [
      2633,
      2634
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2635,
    "end": 2638,
    "range": [
      2635,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2639,
    "end": 2642,
    "range": [
      2639,
      2642
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2642,
    "end": 2643,
    "range": [
      2642,
      2643
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2643,
    "end": 2644,
    "range": [
      2643,
      2644
    ]
  }
]
```
