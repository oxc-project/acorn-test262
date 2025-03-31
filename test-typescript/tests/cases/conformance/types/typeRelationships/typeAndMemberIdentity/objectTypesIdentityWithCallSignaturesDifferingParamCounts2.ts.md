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
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 56,
        "end": 84,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 62,
            "end": 82,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 63,
                "end": 72,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 64,
                  "end": 72,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 66,
                    "end": 72
                  }
                },
                "decorators": [],
                "optional": false
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
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 86,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 98,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 98,
        "end": 101,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 99,
            "end": 100,
            "name": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 102,
        "end": 120,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 108,
            "end": 118,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 109,
                "end": 113,
                "name": "x",
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 163,
            "name": "a",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 132,
                        "end": 141,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 133,
                          "end": 141,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 135,
                            "end": 141
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 143,
                        "end": 152,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 144,
                          "end": 152,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 146,
                            "end": 152
                          }
                        },
                        "decorators": [],
                        "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 165,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 178,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 179,
          "end": 183,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 186,
      "end": 206,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 199,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 200,
          "end": 204,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 216,
      "end": 241,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 229,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 230,
          "end": 236,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 231,
            "end": 236,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 233,
              "end": 236
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 238,
        "end": 241,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 243,
      "end": 270,
      "id": {
        "type": "Identifier",
        "start": 252,
        "end": 256,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 257,
          "end": 268,
          "name": "x",
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 271,
      "end": 298,
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 284,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 285,
          "end": 296,
          "name": "x",
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 308,
      "end": 333,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 321,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 322,
          "end": 328,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 323,
            "end": 328,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 325,
              "end": 328
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 330,
        "end": 333,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 335,
      "end": 364,
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 348,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 349,
          "end": 362,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 350,
            "end": 362,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 352,
              "end": 362,
              "typeName": {
                "type": "Identifier",
                "start": 352,
                "end": 354,
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 365,
      "end": 394,
      "id": {
        "type": "Identifier",
        "start": 374,
        "end": 378,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 379,
          "end": 392,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 380,
            "end": 392,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 382,
              "end": 392,
              "typeName": {
                "type": "Identifier",
                "start": 382,
                "end": 384,
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 404,
      "end": 429,
      "id": {
        "type": "Identifier",
        "start": 413,
        "end": 417,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 418,
          "end": 424,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 419,
            "end": 424,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 421,
              "end": 424
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 426,
        "end": 429,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 431,
      "end": 460,
      "id": {
        "type": "Identifier",
        "start": 440,
        "end": 444,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 445,
          "end": 458,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 446,
            "end": 458,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 448,
              "end": 458,
              "typeName": {
                "type": "Identifier",
                "start": 448,
                "end": 450,
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 461,
      "end": 490,
      "id": {
        "type": "Identifier",
        "start": 470,
        "end": 474,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 475,
          "end": 488,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 476,
            "end": 488,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 478,
              "end": 488,
              "typeName": {
                "type": "Identifier",
                "start": 478,
                "end": 480,
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 497,
      "end": 522,
      "id": {
        "type": "Identifier",
        "start": 506,
        "end": 510,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 511,
          "end": 517,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 512,
            "end": 517,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 514,
              "end": 517
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 519,
        "end": 522,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 524,
      "end": 545,
      "id": {
        "type": "Identifier",
        "start": 533,
        "end": 538,
        "name": "foo13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 539,
          "end": 543,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 546,
      "end": 574,
      "id": {
        "type": "Identifier",
        "start": 555,
        "end": 560,
        "name": "foo13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 561,
          "end": 572,
          "name": "x",
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 581,
      "end": 607,
      "id": {
        "type": "Identifier",
        "start": 590,
        "end": 595,
        "name": "foo13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 596,
          "end": 602,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 597,
            "end": 602,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 599,
              "end": 602
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 604,
        "end": 607,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 609,
      "end": 630,
      "id": {
        "type": "Identifier",
        "start": 618,
        "end": 623,
        "name": "foo14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 624,
          "end": 628,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 631,
      "end": 661,
      "id": {
        "type": "Identifier",
        "start": 640,
        "end": 645,
        "name": "foo14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 646,
          "end": 659,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 647,
            "end": 659,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 649,
              "end": 659,
              "typeName": {
                "type": "Identifier",
                "start": 649,
                "end": 651,
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 671,
      "end": 697,
      "id": {
        "type": "Identifier",
        "start": 680,
        "end": 685,
        "name": "foo14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 686,
          "end": 692,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 687,
            "end": 692,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 689,
              "end": 692
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 694,
        "end": 697,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 699,
      "end": 728,
      "id": {
        "type": "Identifier",
        "start": 708,
        "end": 714,
        "name": "foo14b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 715,
          "end": 726,
          "name": "x",
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 729,
      "end": 760,
      "id": {
        "type": "Identifier",
        "start": 738,
        "end": 744,
        "name": "foo14b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 745,
          "end": 758,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 746,
            "end": 758,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 748,
              "end": 758,
              "typeName": {
                "type": "Identifier",
                "start": 748,
                "end": 750,
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 767,
      "end": 794,
      "id": {
        "type": "Identifier",
        "start": 776,
        "end": 782,
        "name": "foo14b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 783,
          "end": 789,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 784,
            "end": 789,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 786,
              "end": 789
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 791,
        "end": 794,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 796,
      "end": 817,
      "id": {
        "type": "Identifier",
        "start": 805,
        "end": 810,
        "name": "foo15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 811,
          "end": 815,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 818,
      "end": 848,
      "id": {
        "type": "Identifier",
        "start": 827,
        "end": 832,
        "name": "foo15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 833,
          "end": 846,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 834,
            "end": 846,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 836,
              "end": 846,
              "typeName": {
                "type": "Identifier",
                "start": 836,
                "end": 838,
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 855,
      "end": 881,
      "id": {
        "type": "Identifier",
        "start": 864,
        "end": 869,
        "name": "foo15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 870,
          "end": 876,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 871,
            "end": 876,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 873,
              "end": 876
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 878,
        "end": 881,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
