__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1109,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "TakeString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 18,
        "end": 36,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 30,
          "end": 36,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 33,
            "end": 36
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 159,
      "end": 237,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 183,
        "decorators": [],
        "name": "mapped1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 183,
        "end": 222,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 184,
            "end": 221,
            "name": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSMappedType",
              "start": 194,
              "end": 221,
              "key": {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 201,
                "end": 207
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 210,
                "end": 220,
                "typeName": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 220,
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "readonly": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 223,
          "end": 229,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 226,
            "end": 229,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 228,
              "end": 229,
              "typeName": {
                "type": "Identifier",
                "start": 228,
                "end": 229,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 230,
        "end": 236,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 232,
          "end": 236
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 238,
      "end": 317,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 262,
        "decorators": [],
        "name": "mapped2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 262,
        "end": 302,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 263,
            "end": 301,
            "name": {
              "type": "Identifier",
              "start": 263,
              "end": 264,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSMappedType",
              "start": 273,
              "end": 301,
              "key": {
                "type": "Identifier",
                "start": 275,
                "end": 276,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 280,
                "end": 287,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 286,
                  "end": 287,
                  "typeName": {
                    "type": "Identifier",
                    "start": 286,
                    "end": 287,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 290,
                "end": 300,
                "typeName": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 300,
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "readonly": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 303,
          "end": 309,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 306,
            "end": 309,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 308,
              "end": 309,
              "typeName": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 310,
        "end": 316,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 312,
          "end": 316
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 318,
      "end": 399,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 342,
        "decorators": [],
        "name": "mapped3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 342,
        "end": 384,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 343,
            "end": 383,
            "name": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSMappedType",
              "start": 353,
              "end": 383,
              "key": {
                "type": "Identifier",
                "start": 355,
                "end": 356,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 360,
                "end": 369,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 366,
                  "end": 369
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 372,
                "end": 382,
                "typeName": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 382,
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "readonly": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 385,
          "end": 391,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 388,
            "end": 391,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 390,
              "end": 391,
              "typeName": {
                "type": "Identifier",
                "start": 390,
                "end": 391,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 392,
        "end": 398,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 394,
          "end": 398
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 400,
      "end": 473,
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 424,
        "decorators": [],
        "name": "mapped4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 424,
        "end": 427,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 425,
            "end": 426,
            "name": {
              "type": "Identifier",
              "start": 425,
              "end": 426,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 428,
          "end": 465,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 431,
            "end": 465,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 433,
              "end": 465,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 433,
                  "end": 434,
                  "typeName": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 434,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSMappedType",
                  "start": 437,
                  "end": 465,
                  "key": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 440,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 444,
                    "end": 451,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 450,
                      "end": 451,
                      "typeName": {
                        "type": "Identifier",
                        "start": 450,
                        "end": 451,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 454,
                    "end": 464,
                    "typeName": {
                      "type": "Identifier",
                      "start": 454,
                      "end": 464,
                      "decorators": [],
                      "name": "TakeString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "optional": false,
                  "readonly": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 466,
        "end": 472,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 468,
          "end": 472
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 474,
      "end": 560,
      "id": {
        "type": "Identifier",
        "start": 491,
        "end": 498,
        "decorators": [],
        "name": "mapped5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 498,
        "end": 520,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 499,
            "end": 500,
            "name": {
              "type": "Identifier",
              "start": 499,
              "end": 500,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 502,
            "end": 519,
            "name": {
              "type": "Identifier",
              "start": 502,
              "end": 503,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 512,
              "end": 519,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 518,
                "end": 519,
                "typeName": {
                  "type": "Identifier",
                  "start": 518,
                  "end": 519,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 521,
          "end": 552,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 524,
            "end": 552,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 526,
              "end": 552,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 526,
                  "end": 527,
                  "typeName": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 527,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSMappedType",
                  "start": 530,
                  "end": 552,
                  "key": {
                    "type": "Identifier",
                    "start": 532,
                    "end": 533,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 537,
                    "end": 538,
                    "typeName": {
                      "type": "Identifier",
                      "start": 537,
                      "end": 538,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 541,
                    "end": 551,
                    "typeName": {
                      "type": "Identifier",
                      "start": 541,
                      "end": 551,
                      "decorators": [],
                      "name": "TakeString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "optional": false,
                  "readonly": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 553,
        "end": 559,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 555,
          "end": 559
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 561,
      "end": 639,
      "id": {
        "type": "Identifier",
        "start": 578,
        "end": 585,
        "decorators": [],
        "name": "mapped6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 585,
        "end": 603,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 586,
            "end": 602,
            "name": {
              "type": "Identifier",
              "start": 586,
              "end": 587,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 596,
              "end": 602
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 604,
          "end": 631,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 607,
            "end": 631,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 609,
              "end": 631,
              "key": {
                "type": "Identifier",
                "start": 611,
                "end": 612,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 616,
                "end": 617,
                "typeName": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 617,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 620,
                "end": 630,
                "typeName": {
                  "type": "Identifier",
                  "start": 620,
                  "end": 630,
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 632,
        "end": 638,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 634,
          "end": 638
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 640,
      "end": 721,
      "id": {
        "type": "Identifier",
        "start": 657,
        "end": 664,
        "decorators": [],
        "name": "mapped7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 664,
        "end": 685,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 665,
            "end": 684,
            "name": {
              "type": "Identifier",
              "start": 665,
              "end": 666,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 675,
              "end": 684,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 681,
                "end": 684
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 686,
          "end": 713,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 689,
            "end": 713,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 691,
              "end": 713,
              "key": {
                "type": "Identifier",
                "start": 693,
                "end": 694,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 698,
                "end": 699,
                "typeName": {
                  "type": "Identifier",
                  "start": 698,
                  "end": 699,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 702,
                "end": 712,
                "typeName": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 712,
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 714,
        "end": 720,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 716,
          "end": 720
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 722,
      "end": 799,
      "id": {
        "type": "Identifier",
        "start": 739,
        "end": 746,
        "decorators": [],
        "name": "mapped8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 746,
        "end": 763,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 747,
            "end": 762,
            "name": {
              "type": "Identifier",
              "start": 747,
              "end": 748,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSLiteralType",
              "start": 757,
              "end": 762,
              "literal": {
                "type": "Literal",
                "start": 757,
                "end": 762,
                "value": "foo",
                "raw": "'foo'"
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 764,
          "end": 791,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 767,
            "end": 791,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 769,
              "end": 791,
              "key": {
                "type": "Identifier",
                "start": 771,
                "end": 772,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 776,
                "end": 777,
                "typeName": {
                  "type": "Identifier",
                  "start": 776,
                  "end": 777,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 780,
                "end": 790,
                "typeName": {
                  "type": "Identifier",
                  "start": 780,
                  "end": 790,
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 792,
        "end": 798,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 794,
          "end": 798
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 800,
      "end": 883,
      "id": {
        "type": "Identifier",
        "start": 817,
        "end": 824,
        "decorators": [],
        "name": "mapped9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 824,
        "end": 847,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 825,
            "end": 846,
            "name": {
              "type": "Identifier",
              "start": 825,
              "end": 826,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 835,
              "end": 846,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 835,
                  "end": 840,
                  "literal": {
                    "type": "Literal",
                    "start": 835,
                    "end": 840,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 841,
                  "end": 846,
                  "literal": {
                    "type": "Literal",
                    "start": 841,
                    "end": 846,
                    "value": "bar",
                    "raw": "'bar'"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 848,
          "end": 875,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 851,
            "end": 875,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 853,
              "end": 875,
              "key": {
                "type": "Identifier",
                "start": 855,
                "end": 856,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 860,
                "end": 861,
                "typeName": {
                  "type": "Identifier",
                  "start": 860,
                  "end": 861,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 864,
                "end": 874,
                "typeName": {
                  "type": "Identifier",
                  "start": 864,
                  "end": 874,
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 876,
        "end": 882,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 878,
          "end": 882
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 885,
      "end": 909,
      "expression": {
        "type": "CallExpression",
        "start": 885,
        "end": 908,
        "callee": {
          "type": "Identifier",
          "start": 885,
          "end": 892,
          "decorators": [],
          "name": "mapped1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 893,
            "end": 907,
            "properties": [
              {
                "type": "Property",
                "start": 894,
                "end": 906,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 894,
                  "end": 897,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 899,
                  "end": 906,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 899,
                      "end": 900,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 904,
                    "end": 906,
                    "value": 42,
                    "raw": "42"
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 910,
      "end": 934,
      "expression": {
        "type": "CallExpression",
        "start": 910,
        "end": 933,
        "callee": {
          "type": "Identifier",
          "start": 910,
          "end": 917,
          "decorators": [],
          "name": "mapped2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 918,
            "end": 932,
            "properties": [
              {
                "type": "Property",
                "start": 919,
                "end": 931,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 919,
                  "end": 922,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 924,
                  "end": 931,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 924,
                      "end": 925,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 929,
                    "end": 931,
                    "value": 42,
                    "raw": "42"
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 935,
      "end": 959,
      "expression": {
        "type": "CallExpression",
        "start": 935,
        "end": 958,
        "callee": {
          "type": "Identifier",
          "start": 935,
          "end": 942,
          "decorators": [],
          "name": "mapped3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 943,
            "end": 957,
            "properties": [
              {
                "type": "Property",
                "start": 944,
                "end": 956,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 944,
                  "end": 947,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 949,
                  "end": 956,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 949,
                      "end": 950,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 954,
                    "end": 956,
                    "value": 42,
                    "raw": "42"
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 960,
      "end": 984,
      "expression": {
        "type": "CallExpression",
        "start": 960,
        "end": 983,
        "callee": {
          "type": "Identifier",
          "start": 960,
          "end": 967,
          "decorators": [],
          "name": "mapped4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 968,
            "end": 982,
            "properties": [
              {
                "type": "Property",
                "start": 969,
                "end": 981,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 969,
                  "end": 972,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 974,
                  "end": 981,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 974,
                      "end": 975,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 979,
                    "end": 981,
                    "value": 42,
                    "raw": "42"
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 985,
      "end": 1009,
      "expression": {
        "type": "CallExpression",
        "start": 985,
        "end": 1008,
        "callee": {
          "type": "Identifier",
          "start": 985,
          "end": 992,
          "decorators": [],
          "name": "mapped5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 993,
            "end": 1007,
            "properties": [
              {
                "type": "Property",
                "start": 994,
                "end": 1006,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 994,
                  "end": 997,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 999,
                  "end": 1006,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 999,
                      "end": 1000,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 1004,
                    "end": 1006,
                    "value": 42,
                    "raw": "42"
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1010,
      "end": 1034,
      "expression": {
        "type": "CallExpression",
        "start": 1010,
        "end": 1033,
        "callee": {
          "type": "Identifier",
          "start": 1010,
          "end": 1017,
          "decorators": [],
          "name": "mapped6",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1018,
            "end": 1032,
            "properties": [
              {
                "type": "Property",
                "start": 1019,
                "end": 1031,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1019,
                  "end": 1022,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1024,
                  "end": 1031,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1024,
                      "end": 1025,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 1029,
                    "end": 1031,
                    "value": 42,
                    "raw": "42"
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1035,
      "end": 1059,
      "expression": {
        "type": "CallExpression",
        "start": 1035,
        "end": 1058,
        "callee": {
          "type": "Identifier",
          "start": 1035,
          "end": 1042,
          "decorators": [],
          "name": "mapped7",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1043,
            "end": 1057,
            "properties": [
              {
                "type": "Property",
                "start": 1044,
                "end": 1056,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1044,
                  "end": 1047,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1049,
                  "end": 1056,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1049,
                      "end": 1050,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 1054,
                    "end": 1056,
                    "value": 42,
                    "raw": "42"
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1060,
      "end": 1084,
      "expression": {
        "type": "CallExpression",
        "start": 1060,
        "end": 1083,
        "callee": {
          "type": "Identifier",
          "start": 1060,
          "end": 1067,
          "decorators": [],
          "name": "mapped8",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1068,
            "end": 1082,
            "properties": [
              {
                "type": "Property",
                "start": 1069,
                "end": 1081,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1069,
                  "end": 1072,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1074,
                  "end": 1081,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1074,
                      "end": 1075,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 1079,
                    "end": 1081,
                    "value": 42,
                    "raw": "42"
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1085,
      "end": 1109,
      "expression": {
        "type": "CallExpression",
        "start": 1085,
        "end": 1108,
        "callee": {
          "type": "Identifier",
          "start": 1085,
          "end": 1092,
          "decorators": [],
          "name": "mapped9",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1093,
            "end": 1107,
            "properties": [
              {
                "type": "Property",
                "start": 1094,
                "end": 1106,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1094,
                  "end": 1097,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1099,
                  "end": 1106,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1099,
                      "end": 1100,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 1104,
                    "end": 1106,
                    "value": 42,
                    "raw": "42"
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
