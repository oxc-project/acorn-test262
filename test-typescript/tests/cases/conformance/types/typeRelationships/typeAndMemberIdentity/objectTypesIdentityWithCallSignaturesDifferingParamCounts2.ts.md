__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 881,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 44,
      "end": 84,
      "body": {
        "type": "TSInterfaceBody",
        "start": 56,
        "end": 84,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 62,
            "end": 82,
            "params": [
              {
                "type": "Identifier",
                "start": 63,
                "end": 72,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 64,
                  "end": 72,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 66,
                    "end": 72
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 86,
      "end": 120,
      "body": {
        "type": "TSInterfaceBody",
        "start": 102,
        "end": 120,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 108,
            "end": 118,
            "params": [
              {
                "type": "Identifier",
                "start": 109,
                "end": 113,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 110,
                  "end": 113,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 112,
                    "end": 113,
                    "typeName": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 116,
                "end": 117,
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 98,
        "decorators": [],
        "name": "I2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 98,
        "end": 101,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 99,
            "end": 100,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 163,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 163,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 163,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 163,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 129,
                "end": 163,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 131,
                    "end": 161,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 132,
                        "end": 141,
                        "decorators": [],
                        "name": "x",
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
                        "end": 152,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 144,
                          "end": 152,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 146,
                            "end": 152
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 153,
                      "end": 161,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 155,
                        "end": 161
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 165,
      "end": 185,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 178,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 179,
          "end": 183,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 180,
            "end": 183,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 182,
              "end": 183,
              "typeName": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 186,
      "end": 206,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 199,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 200,
          "end": 204,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 201,
            "end": 204,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 203,
              "end": 204,
              "typeName": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 216,
      "end": 241,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 238,
        "end": 241,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 229,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 230,
          "end": 236,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 231,
            "end": 236,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 233,
              "end": 236
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 243,
      "end": 270,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 252,
        "end": 256,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 257,
          "end": 268,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 258,
            "end": 268,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 260,
              "end": 268,
              "exprName": {
                "type": "Identifier",
                "start": 267,
                "end": 268,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 271,
      "end": 298,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 284,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 285,
          "end": 296,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 286,
            "end": 296,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 288,
              "end": 296,
              "exprName": {
                "type": "Identifier",
                "start": 295,
                "end": 296,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 308,
      "end": 333,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 330,
        "end": 333,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 321,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 322,
          "end": 328,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 323,
            "end": 328,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 325,
              "end": 328
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 335,
      "end": 364,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 348,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 349,
          "end": 362,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 350,
            "end": 362,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 352,
              "end": 362,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 354,
                "end": 362,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 355,
                    "end": 361
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 352,
                "end": 354,
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 365,
      "end": 394,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 374,
        "end": 378,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 379,
          "end": 392,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 380,
            "end": 392,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 382,
              "end": 392,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 384,
                "end": 392,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 385,
                    "end": 391
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 382,
                "end": 384,
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 404,
      "end": 429,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 426,
        "end": 429,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 413,
        "end": 417,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 418,
          "end": 424,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 419,
            "end": 424,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 421,
              "end": 424
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 431,
      "end": 460,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 440,
        "end": 444,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 445,
          "end": 458,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 446,
            "end": 458,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 448,
              "end": 458,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 450,
                "end": 458,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 451,
                    "end": 457
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 448,
                "end": 450,
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 461,
      "end": 490,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 470,
        "end": 474,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 475,
          "end": 488,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 476,
            "end": 488,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 478,
              "end": 488,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 480,
                "end": 488,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 481,
                    "end": 487
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 478,
                "end": 480,
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 497,
      "end": 522,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 519,
        "end": 522,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 506,
        "end": 510,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 511,
          "end": 517,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 512,
            "end": 517,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 514,
              "end": 517
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 524,
      "end": 545,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 533,
        "end": 538,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 539,
          "end": 543,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 540,
            "end": 543,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 542,
              "end": 543,
              "typeName": {
                "type": "Identifier",
                "start": 542,
                "end": 543,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 546,
      "end": 574,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 555,
        "end": 560,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 561,
          "end": 572,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 562,
            "end": 572,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 564,
              "end": 572,
              "exprName": {
                "type": "Identifier",
                "start": 571,
                "end": 572,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 581,
      "end": 607,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 604,
        "end": 607,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 590,
        "end": 595,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 596,
          "end": 602,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 597,
            "end": 602,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 599,
              "end": 602
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 609,
      "end": 630,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 618,
        "end": 623,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 624,
          "end": 628,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 625,
            "end": 628,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 627,
              "end": 628,
              "typeName": {
                "type": "Identifier",
                "start": 627,
                "end": 628,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 631,
      "end": 661,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 640,
        "end": 645,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 646,
          "end": 659,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 647,
            "end": 659,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 649,
              "end": 659,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 651,
                "end": 659,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 652,
                    "end": 658
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 649,
                "end": 651,
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 671,
      "end": 697,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 694,
        "end": 697,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 680,
        "end": 685,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 686,
          "end": 692,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 687,
            "end": 692,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 689,
              "end": 692
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 699,
      "end": 728,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 708,
        "end": 714,
        "decorators": [],
        "name": "foo14b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 715,
          "end": 726,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 716,
            "end": 726,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 718,
              "end": 726,
              "exprName": {
                "type": "Identifier",
                "start": 725,
                "end": 726,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 729,
      "end": 760,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 738,
        "end": 744,
        "decorators": [],
        "name": "foo14b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 745,
          "end": 758,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 746,
            "end": 758,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 748,
              "end": 758,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 750,
                "end": 758,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 751,
                    "end": 757
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 748,
                "end": 750,
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 767,
      "end": 794,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 791,
        "end": 794,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 776,
        "end": 782,
        "decorators": [],
        "name": "foo14b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 783,
          "end": 789,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 784,
            "end": 789,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 786,
              "end": 789
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 796,
      "end": 817,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 805,
        "end": 810,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 811,
          "end": 815,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 812,
            "end": 815,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 814,
              "end": 815,
              "typeName": {
                "type": "Identifier",
                "start": 814,
                "end": 815,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 818,
      "end": 848,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 827,
        "end": 832,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 833,
          "end": 846,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 834,
            "end": 846,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 836,
              "end": 846,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 838,
                "end": 846,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 839,
                    "end": 845
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 836,
                "end": 838,
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 855,
      "end": 881,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 878,
        "end": 881,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 864,
        "end": 869,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 870,
          "end": 876,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 871,
            "end": 876,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 873,
              "end": 876
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
