__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 659,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "name": "F1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 10,
        "end": 33,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 11,
            "end": 24,
            "name": "num",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 14,
              "end": 24,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 16,
                "end": 24,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 17,
                    "end": 23
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 26,
          "end": 33,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 29,
            "end": 33
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 35,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 48,
        "name": "IsNumber",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 48,
        "end": 66,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 49,
            "end": 65,
            "name": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 59,
              "end": 65
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 69,
        "end": 70,
        "typeName": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "name": "T",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 73,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 80,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 83,
        "end": 134,
        "checkType": {
          "type": "TSTypeReference",
          "start": 83,
          "end": 85,
          "typeName": {
            "type": "Identifier",
            "start": 83,
            "end": 85,
            "name": "F1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 94,
          "end": 122,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 95,
              "end": 113,
              "argument": {
                "type": "Identifier",
                "start": 98,
                "end": 102,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 102,
                "end": 113,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 105,
                  "end": 112,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 111,
                    "end": 112,
                    "name": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 112,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 115,
            "end": 122,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 118,
              "end": 122
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 125,
          "end": 126,
          "typeName": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 129,
          "end": 134
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 136,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 143,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 146,
        "end": 199,
        "checkType": {
          "type": "TSTypeReference",
          "start": 146,
          "end": 148,
          "typeName": {
            "type": "Identifier",
            "start": 146,
            "end": 148,
            "name": "F1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 157,
          "end": 187,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 158,
              "end": 178,
              "name": "args",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 162,
                "end": 178,
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 164,
                  "end": 178,
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "start": 165,
                      "end": 177,
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "start": 169,
                        "end": 176,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 175,
                          "end": 176,
                          "name": {
                            "type": "Identifier",
                            "start": 175,
                            "end": 176,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      }
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 180,
            "end": 187,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 183,
              "end": 187
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 190,
          "end": 191,
          "typeName": {
            "type": "Identifier",
            "start": 190,
            "end": 191,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 194,
          "end": 199
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 201,
      "end": 259,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 208,
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 208,
        "end": 211,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 209,
            "end": 210,
            "name": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 214,
        "end": 258,
        "checkType": {
          "type": "TSTypeReference",
          "start": 214,
          "end": 215,
          "typeName": {
            "type": "Identifier",
            "start": 214,
            "end": 215,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 224,
          "end": 243,
          "typeName": {
            "type": "Identifier",
            "start": 224,
            "end": 232,
            "name": "IsNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 232,
            "end": 243,
            "params": [
              {
                "type": "TSInferType",
                "start": 234,
                "end": 241,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 240,
                  "end": 241,
                  "name": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 241,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 246,
          "end": 250,
          "literal": {
            "type": "Literal",
            "start": 246,
            "end": 250,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 253,
          "end": 258,
          "literal": {
            "type": "Literal",
            "start": 253,
            "end": 258,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 261,
      "end": 325,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 268,
        "name": "T4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 271,
        "end": 324,
        "checkType": {
          "type": "TSTypeReference",
          "start": 271,
          "end": 273,
          "typeName": {
            "type": "Identifier",
            "start": 271,
            "end": 273,
            "name": "F1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 282,
          "end": 312,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 283,
              "end": 303,
              "argument": {
                "type": "Identifier",
                "start": 286,
                "end": 290,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 290,
                "end": 303,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 294,
                  "end": 301,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 300,
                    "end": 301,
                    "name": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 301,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 305,
            "end": 312,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 308,
              "end": 312
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 315,
          "end": 316,
          "typeName": {
            "type": "Identifier",
            "start": 315,
            "end": 316,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 319,
          "end": 324
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 326,
      "end": 392,
      "id": {
        "type": "Identifier",
        "start": 331,
        "end": 333,
        "name": "T5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 336,
        "end": 391,
        "checkType": {
          "type": "TSTypeReference",
          "start": 336,
          "end": 338,
          "typeName": {
            "type": "Identifier",
            "start": 336,
            "end": 338,
            "name": "F1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 347,
          "end": 379,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 348,
              "end": 370,
              "name": "args",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 352,
                "end": 370,
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 354,
                  "end": 370,
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "start": 355,
                      "end": 369,
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "start": 360,
                        "end": 367,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 366,
                          "end": 367,
                          "name": {
                            "type": "Identifier",
                            "start": 366,
                            "end": 367,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      }
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 372,
            "end": 379,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 375,
              "end": 379
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 382,
          "end": 383,
          "typeName": {
            "type": "Identifier",
            "start": 382,
            "end": 383,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 386,
          "end": 391
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 393,
      "end": 453,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 400,
        "name": "T6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 400,
        "end": 403,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 401,
            "end": 402,
            "name": {
              "type": "Identifier",
              "start": 401,
              "end": 402,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 406,
        "end": 452,
        "checkType": {
          "type": "TSTypeReference",
          "start": 406,
          "end": 407,
          "typeName": {
            "type": "Identifier",
            "start": 406,
            "end": 407,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 416,
          "end": 437,
          "typeName": {
            "type": "Identifier",
            "start": 416,
            "end": 424,
            "name": "IsNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 424,
            "end": 437,
            "params": [
              {
                "type": "TSInferType",
                "start": 427,
                "end": 434,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 433,
                  "end": 434,
                  "name": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 434,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 440,
          "end": 444,
          "literal": {
            "type": "Literal",
            "start": 440,
            "end": 444,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 447,
          "end": 452,
          "literal": {
            "type": "Literal",
            "start": 447,
            "end": 452,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 455,
      "end": 523,
      "id": {
        "type": "Identifier",
        "start": 460,
        "end": 462,
        "name": "T7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 465,
        "end": 522,
        "checkType": {
          "type": "TSTypeReference",
          "start": 465,
          "end": 467,
          "typeName": {
            "type": "Identifier",
            "start": 465,
            "end": 467,
            "name": "F1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 476,
          "end": 510,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 477,
              "end": 501,
              "argument": {
                "type": "Identifier",
                "start": 480,
                "end": 484,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 484,
                "end": 501,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 490,
                  "end": 497,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 496,
                    "end": 497,
                    "name": {
                      "type": "Identifier",
                      "start": 496,
                      "end": 497,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 503,
            "end": 510,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 506,
              "end": 510
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 513,
          "end": 514,
          "typeName": {
            "type": "Identifier",
            "start": 513,
            "end": 514,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 517,
          "end": 522
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 524,
      "end": 594,
      "id": {
        "type": "Identifier",
        "start": 529,
        "end": 531,
        "name": "T8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 534,
        "end": 593,
        "checkType": {
          "type": "TSTypeReference",
          "start": 534,
          "end": 536,
          "typeName": {
            "type": "Identifier",
            "start": 534,
            "end": 536,
            "name": "F1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 545,
          "end": 581,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 546,
              "end": 572,
              "name": "args",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 550,
                "end": 572,
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 552,
                  "end": 572,
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "start": 553,
                      "end": 571,
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "start": 560,
                        "end": 567,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 566,
                          "end": 567,
                          "name": {
                            "type": "Identifier",
                            "start": 566,
                            "end": 567,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      }
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 574,
            "end": 581,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 577,
              "end": 581
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 584,
          "end": 585,
          "typeName": {
            "type": "Identifier",
            "start": 584,
            "end": 585,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 588,
          "end": 593
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 595,
      "end": 659,
      "id": {
        "type": "Identifier",
        "start": 600,
        "end": 602,
        "name": "T9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 602,
        "end": 605,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 603,
            "end": 604,
            "name": {
              "type": "Identifier",
              "start": 603,
              "end": 604,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 608,
        "end": 658,
        "checkType": {
          "type": "TSTypeReference",
          "start": 608,
          "end": 609,
          "typeName": {
            "type": "Identifier",
            "start": 608,
            "end": 609,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 618,
          "end": 643,
          "typeName": {
            "type": "Identifier",
            "start": 618,
            "end": 626,
            "name": "IsNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 626,
            "end": 643,
            "params": [
              {
                "type": "TSInferType",
                "start": 631,
                "end": 638,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 637,
                  "end": 638,
                  "name": {
                    "type": "Identifier",
                    "start": 637,
                    "end": 638,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 646,
          "end": 650,
          "literal": {
            "type": "Literal",
            "start": 646,
            "end": 650,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 653,
          "end": 658,
          "literal": {
            "type": "Literal",
            "start": 653,
            "end": 658,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
