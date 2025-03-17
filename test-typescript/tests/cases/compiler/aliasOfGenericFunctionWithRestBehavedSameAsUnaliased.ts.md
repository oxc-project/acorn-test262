__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 60,
  "end": 1127,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 60,
      "end": 194,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 79,
        "decorators": [],
        "name": "ExtendedMapper",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 127,
        "end": 193,
        "params": [
          {
            "type": "Identifier",
            "start": 128,
            "end": 141,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 141,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 135,
                "end": 141
              }
            }
          },
          {
            "type": "Identifier",
            "start": 143,
            "end": 164,
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 164,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 151,
                "end": 164,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 164,
                  "decorators": [],
                  "name": "HandledInputT",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "RestElement",
            "start": 166,
            "end": 181,
            "argument": {
              "type": "Identifier",
              "start": 169,
              "end": 173,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 176,
                "end": 181,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 181,
                  "decorators": [],
                  "name": "ArgsT",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 183,
          "end": 193,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 186,
            "end": 193,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 186,
              "end": 193,
              "decorators": [],
              "name": "OutputT",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 79,
        "end": 124,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 93,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 93,
              "decorators": [],
              "name": "HandledInputT",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 95,
            "end": 102,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 95,
              "end": 102,
              "decorators": [],
              "name": "OutputT",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 104,
            "end": 123,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 118,
              "end": 123,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 118,
                "end": 121
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 109,
              "decorators": [],
              "name": "ArgsT",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 195,
      "end": 236,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 201,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 204,
        "end": 235,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 218,
          "end": 235,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 219,
              "end": 222
            },
            {
              "type": "TSAnyKeyword",
              "start": 224,
              "end": 227
            },
            {
              "type": "TSTupleType",
              "start": 229,
              "end": 234,
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "start": 230,
                  "end": 233
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 204,
          "end": 218,
          "decorators": [],
          "name": "ExtendedMapper",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 237,
      "end": 278,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 243,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 246,
        "end": 277,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 260,
          "end": 277,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 261,
              "end": 264
            },
            {
              "type": "TSAnyKeyword",
              "start": 266,
              "end": 269
            },
            {
              "type": "TSArrayType",
              "start": 271,
              "end": 276,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 271,
                "end": 274
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 246,
          "end": 260,
          "decorators": [],
          "name": "ExtendedMapper",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 279,
      "end": 314,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 288,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 291,
        "end": 314,
        "checkType": {
          "type": "TSTypeReference",
          "start": 291,
          "end": 292,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 291,
            "end": 292,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 301,
          "end": 302,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 301,
            "end": 302,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 311,
          "end": 314,
          "literal": {
            "type": "Literal",
            "start": 311,
            "end": 314,
            "raw": "\"n\"",
            "value": "n"
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 305,
          "end": 308,
          "literal": {
            "type": "Literal",
            "start": 305,
            "end": 308,
            "raw": "\"y\"",
            "value": "y"
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 315,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 330,
            "decorators": [],
            "name": "check",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 330,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 326,
                "end": 330,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 330,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 333,
            "end": 336,
            "raw": "\"y\"",
            "value": "y"
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 340,
      "end": 483,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 360,
        "decorators": [],
        "name": "ExtendedMapper1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 414,
        "end": 480,
        "params": [
          {
            "type": "Identifier",
            "start": 415,
            "end": 428,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 420,
              "end": 428,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 422,
                "end": 428
              }
            }
          },
          {
            "type": "Identifier",
            "start": 430,
            "end": 451,
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 436,
              "end": 451,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 438,
                "end": 451,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 451,
                  "decorators": [],
                  "name": "HandledInputT",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "RestElement",
            "start": 453,
            "end": 468,
            "argument": {
              "type": "Identifier",
              "start": 456,
              "end": 460,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 461,
              "end": 468,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 463,
                "end": 468,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 463,
                  "end": 468,
                  "decorators": [],
                  "name": "ArgsT",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 470,
          "end": 480,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 473,
            "end": 480,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 473,
              "end": 480,
              "decorators": [],
              "name": "OutputT",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 360,
        "end": 405,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 361,
            "end": 374,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 361,
              "end": 374,
              "decorators": [],
              "name": "HandledInputT",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 376,
            "end": 383,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 376,
              "end": 383,
              "decorators": [],
              "name": "OutputT",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 385,
            "end": 404,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 399,
              "end": 404,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 399,
                "end": 402
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 385,
              "end": 390,
              "decorators": [],
              "name": "ArgsT",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 485,
      "end": 528,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 490,
        "end": 492,
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 495,
        "end": 527,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 510,
          "end": 527,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 511,
              "end": 514
            },
            {
              "type": "TSAnyKeyword",
              "start": 516,
              "end": 519
            },
            {
              "type": "TSTupleType",
              "start": 521,
              "end": 526,
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "start": 522,
                  "end": 525
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 495,
          "end": 510,
          "decorators": [],
          "name": "ExtendedMapper1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 529,
      "end": 572,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 534,
        "end": 536,
        "decorators": [],
        "name": "b1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 539,
        "end": 571,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 554,
          "end": 571,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 555,
              "end": 558
            },
            {
              "type": "TSAnyKeyword",
              "start": 560,
              "end": 563
            },
            {
              "type": "TSArrayType",
              "start": 565,
              "end": 570,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 565,
                "end": 568
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 539,
          "end": 554,
          "decorators": [],
          "name": "ExtendedMapper1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 573,
      "end": 611,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 578,
        "end": 583,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 586,
        "end": 611,
        "checkType": {
          "type": "TSTypeReference",
          "start": 586,
          "end": 588,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 586,
            "end": 588,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 597,
          "end": 599,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 597,
            "end": 599,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 608,
          "end": 611,
          "literal": {
            "type": "Literal",
            "start": 608,
            "end": 611,
            "raw": "\"n\"",
            "value": "n"
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 602,
          "end": 605,
          "literal": {
            "type": "Literal",
            "start": 602,
            "end": 605,
            "raw": "\"y\"",
            "value": "y"
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 612,
      "end": 636,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 616,
          "end": 635,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 616,
            "end": 629,
            "decorators": [],
            "name": "check1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 622,
              "end": 629,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 624,
                "end": 629,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 624,
                  "end": 629,
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 632,
            "end": 635,
            "raw": "\"y\"",
            "value": "y"
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 638,
      "end": 790,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 643,
        "end": 658,
        "decorators": [],
        "name": "ExtendedMapper2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 712,
        "end": 787,
        "indexType": {
          "type": "TSLiteralType",
          "start": 783,
          "end": 786,
          "literal": {
            "type": "Literal",
            "start": 783,
            "end": 786,
            "raw": "\"x\"",
            "value": "x"
          }
        },
        "objectType": {
          "type": "TSTypeLiteral",
          "start": 712,
          "end": 782,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 713,
              "end": 781,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 713,
                "end": 714,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 714,
                "end": 781,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 715,
                  "end": 781,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 716,
                      "end": 729,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 721,
                        "end": 729,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 723,
                          "end": 729
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 731,
                      "end": 752,
                      "decorators": [],
                      "name": "mixed",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 737,
                        "end": 752,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 739,
                          "end": 752,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 739,
                            "end": 752,
                            "decorators": [],
                            "name": "HandledInputT",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "start": 754,
                      "end": 769,
                      "argument": {
                        "type": "Identifier",
                        "start": 757,
                        "end": 761,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 762,
                        "end": 769,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 764,
                          "end": 769,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 764,
                            "end": 769,
                            "decorators": [],
                            "name": "ArgsT",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 771,
                    "end": 781,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 774,
                      "end": 781,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 774,
                        "end": 781,
                        "decorators": [],
                        "name": "OutputT",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": null
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 658,
        "end": 703,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 659,
            "end": 672,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 659,
              "end": 672,
              "decorators": [],
              "name": "HandledInputT",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 674,
            "end": 681,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 674,
              "end": 681,
              "decorators": [],
              "name": "OutputT",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 683,
            "end": 702,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 697,
              "end": 702,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 697,
                "end": 700
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 683,
              "end": 688,
              "decorators": [],
              "name": "ArgsT",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 792,
      "end": 835,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 797,
        "end": 799,
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 802,
        "end": 834,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 817,
          "end": 834,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 818,
              "end": 821
            },
            {
              "type": "TSAnyKeyword",
              "start": 823,
              "end": 826
            },
            {
              "type": "TSTupleType",
              "start": 828,
              "end": 833,
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "start": 829,
                  "end": 832
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 802,
          "end": 817,
          "decorators": [],
          "name": "ExtendedMapper2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 836,
      "end": 879,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 841,
        "end": 843,
        "decorators": [],
        "name": "b2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 846,
        "end": 878,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 861,
          "end": 878,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 862,
              "end": 865
            },
            {
              "type": "TSAnyKeyword",
              "start": 867,
              "end": 870
            },
            {
              "type": "TSArrayType",
              "start": 872,
              "end": 877,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 872,
                "end": 875
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 846,
          "end": 861,
          "decorators": [],
          "name": "ExtendedMapper2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 880,
      "end": 918,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 885,
        "end": 890,
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 893,
        "end": 918,
        "checkType": {
          "type": "TSTypeReference",
          "start": 893,
          "end": 895,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 893,
            "end": 895,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 904,
          "end": 906,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 904,
            "end": 906,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 915,
          "end": 918,
          "literal": {
            "type": "Literal",
            "start": 915,
            "end": 918,
            "raw": "\"n\"",
            "value": "n"
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 909,
          "end": 912,
          "literal": {
            "type": "Literal",
            "start": 909,
            "end": 912,
            "raw": "\"y\"",
            "value": "y"
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 919,
      "end": 943,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 923,
          "end": 942,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 923,
            "end": 936,
            "decorators": [],
            "name": "check2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 929,
              "end": 936,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 931,
                "end": 936,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 931,
                  "end": 936,
                  "decorators": [],
                  "name": "test2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 939,
            "end": 942,
            "raw": "\"y\"",
            "value": "y"
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 945,
      "end": 1001,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 950,
        "end": 952,
        "decorators": [],
        "name": "a3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 955,
        "end": 1001,
        "params": [
          {
            "type": "Identifier",
            "start": 956,
            "end": 968,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 960,
              "end": 968,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 962,
                "end": 968
              }
            }
          },
          {
            "type": "Identifier",
            "start": 970,
            "end": 980,
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 975,
              "end": 980,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 977,
                "end": 980
              }
            }
          },
          {
            "type": "Identifier",
            "start": 982,
            "end": 993,
            "decorators": [],
            "name": "args_0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 988,
              "end": 993,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 990,
                "end": 993
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 995,
          "end": 1001,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 998,
            "end": 1001
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1002,
      "end": 1061,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1007,
        "end": 1009,
        "decorators": [],
        "name": "b3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 1012,
        "end": 1061,
        "params": [
          {
            "type": "Identifier",
            "start": 1013,
            "end": 1025,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1017,
              "end": 1025,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1019,
                "end": 1025
              }
            }
          },
          {
            "type": "Identifier",
            "start": 1027,
            "end": 1037,
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1032,
              "end": 1037,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1034,
                "end": 1037
              }
            }
          },
          {
            "type": "RestElement",
            "start": 1039,
            "end": 1053,
            "argument": {
              "type": "Identifier",
              "start": 1042,
              "end": 1046,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1046,
              "end": 1053,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1048,
                "end": 1053,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 1048,
                  "end": 1051
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1055,
          "end": 1061,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 1058,
            "end": 1061
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1063,
      "end": 1101,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1068,
        "end": 1073,
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1076,
        "end": 1101,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1076,
          "end": 1078,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1076,
            "end": 1078,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1087,
          "end": 1089,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1087,
            "end": 1089,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 1098,
          "end": 1101,
          "literal": {
            "type": "Literal",
            "start": 1098,
            "end": 1101,
            "raw": "\"n\"",
            "value": "n"
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 1092,
          "end": 1095,
          "literal": {
            "type": "Literal",
            "start": 1092,
            "end": 1095,
            "raw": "\"y\"",
            "value": "y"
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1102,
      "end": 1126,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1106,
          "end": 1125,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1106,
            "end": 1119,
            "decorators": [],
            "name": "check3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1112,
              "end": 1119,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1114,
                "end": 1119,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1114,
                  "end": 1119,
                  "decorators": [],
                  "name": "test3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 1122,
            "end": 1125,
            "raw": "\"y\"",
            "value": "y"
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
