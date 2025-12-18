__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 19,
                    "end": 25
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 27,
                    "end": 33
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 38,
                        "end": 45
                      },
                      "start": 38,
                      "end": 47
                    },
                    "start": 35,
                    "end": 47
                  }
                ],
                "start": 18,
                "end": 48
              },
              "start": 16,
              "end": 48
            },
            "start": 14,
            "end": 48
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 48
        }
      ],
      "declare": true,
      "start": 0,
      "end": 49
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 69,
                    "end": 75
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 80,
                        "end": 87
                      },
                      "start": 80,
                      "end": 89
                    },
                    "start": 77,
                    "end": 89
                  }
                ],
                "start": 68,
                "end": 90
              },
              "start": 66,
              "end": 90
            },
            "start": 64,
            "end": 90
          },
          "init": null,
          "definite": false,
          "start": 64,
          "end": 90
        }
      ],
      "declare": true,
      "start": 50,
      "end": 91
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 114,
                        "end": 121
                      },
                      "start": 114,
                      "end": 123
                    },
                    "start": 111,
                    "end": 123
                  }
                ],
                "start": 110,
                "end": 124
              },
              "start": 108,
              "end": 124
            },
            "start": 106,
            "end": 124
          },
          "init": null,
          "definite": false,
          "start": 106,
          "end": 124
        }
      ],
      "declare": true,
      "start": 92,
      "end": 125
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 144,
                "end": 146
              },
              "start": 142,
              "end": 146
            },
            "start": 140,
            "end": 146
          },
          "init": null,
          "definite": false,
          "start": 140,
          "end": 146
        }
      ],
      "declare": true,
      "start": 126,
      "end": 147
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f00",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 170,
                      "end": 171
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 174,
                            "end": 180
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 182,
                            "end": 188
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 190,
                            "end": 197
                          }
                        ],
                        "start": 173,
                        "end": 198
                      },
                      "start": 171,
                      "end": 198
                    },
                    "value": null,
                    "start": 167,
                    "end": 198
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 203,
                    "end": 207
                  },
                  "start": 200,
                  "end": 207
                },
                "start": 166,
                "end": 207
              },
              "start": 164,
              "end": 207
            },
            "start": 161,
            "end": 207
          },
          "init": null,
          "definite": false,
          "start": 161,
          "end": 207
        }
      ],
      "declare": true,
      "start": 149,
      "end": 208
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f01",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 230,
                        "end": 236
                      },
                      "start": 228,
                      "end": 236
                    },
                    "start": 227,
                    "end": 236
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 241,
                      "end": 242
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 245,
                            "end": 251
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 253,
                            "end": 260
                          }
                        ],
                        "start": 244,
                        "end": 261
                      },
                      "start": 242,
                      "end": 261
                    },
                    "value": null,
                    "start": 238,
                    "end": 261
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 266,
                    "end": 270
                  },
                  "start": 263,
                  "end": 270
                },
                "start": 226,
                "end": 270
              },
              "start": 224,
              "end": 270
            },
            "start": 221,
            "end": 270
          },
          "init": null,
          "definite": false,
          "start": 221,
          "end": 270
        }
      ],
      "declare": true,
      "start": 209,
      "end": 271
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f02",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 293,
                        "end": 299
                      },
                      "start": 291,
                      "end": 299
                    },
                    "start": 290,
                    "end": 299
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 304,
                        "end": 310
                      },
                      "start": 302,
                      "end": 310
                    },
                    "start": 301,
                    "end": 310
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 316
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 319,
                            "end": 326
                          }
                        ],
                        "start": 318,
                        "end": 327
                      },
                      "start": 316,
                      "end": 327
                    },
                    "value": null,
                    "start": 312,
                    "end": 327
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 332,
                    "end": 336
                  },
                  "start": 329,
                  "end": 336
                },
                "start": 289,
                "end": 336
              },
              "start": 287,
              "end": 336
            },
            "start": 284,
            "end": 336
          },
          "init": null,
          "definite": false,
          "start": 284,
          "end": 336
        }
      ],
      "declare": true,
      "start": 272,
      "end": 337
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f03",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 359,
                        "end": 365
                      },
                      "start": 357,
                      "end": 365
                    },
                    "start": 356,
                    "end": 365
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 370,
                        "end": 376
                      },
                      "start": 368,
                      "end": 376
                    },
                    "start": 367,
                    "end": 376
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 381,
                        "end": 388
                      },
                      "start": 379,
                      "end": 388
                    },
                    "start": 378,
                    "end": 388
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 393,
                    "end": 397
                  },
                  "start": 390,
                  "end": 397
                },
                "start": 355,
                "end": 397
              },
              "start": 353,
              "end": 397
            },
            "start": 350,
            "end": 397
          },
          "init": null,
          "definite": false,
          "start": 350,
          "end": 397
        }
      ],
      "declare": true,
      "start": 338,
      "end": 398
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f04",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 420,
                        "end": 426
                      },
                      "start": 418,
                      "end": 426
                    },
                    "start": 417,
                    "end": 426
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 431,
                        "end": 437
                      },
                      "start": 429,
                      "end": 437
                    },
                    "start": 428,
                    "end": 437
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 442,
                        "end": 449
                      },
                      "start": 440,
                      "end": 449
                    },
                    "start": 439,
                    "end": 449
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 454,
                      "end": 455
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [],
                        "start": 457,
                        "end": 459
                      },
                      "start": 455,
                      "end": 459
                    },
                    "value": null,
                    "start": 451,
                    "end": 459
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 464,
                    "end": 468
                  },
                  "start": 461,
                  "end": 468
                },
                "start": 416,
                "end": 468
              },
              "start": 414,
              "end": 468
            },
            "start": 411,
            "end": 468
          },
          "init": null,
          "definite": false,
          "start": 411,
          "end": 468
        }
      ],
      "declare": true,
      "start": 399,
      "end": 469
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 492,
                      "end": 493
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 496,
                            "end": 502
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 504,
                            "end": 510
                          },
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSBooleanKeyword",
                                "start": 515,
                                "end": 522
                              },
                              "start": 515,
                              "end": 524
                            },
                            "start": 512,
                            "end": 524
                          }
                        ],
                        "start": 495,
                        "end": 525
                      },
                      "start": 493,
                      "end": 525
                    },
                    "value": null,
                    "start": 489,
                    "end": 525
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 530,
                    "end": 534
                  },
                  "start": 527,
                  "end": 534
                },
                "start": 488,
                "end": 534
              },
              "start": 486,
              "end": 534
            },
            "start": 483,
            "end": 534
          },
          "init": null,
          "definite": false,
          "start": 483,
          "end": 534
        }
      ],
      "declare": true,
      "start": 471,
      "end": 535
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 557,
                        "end": 563
                      },
                      "start": 555,
                      "end": 563
                    },
                    "start": 554,
                    "end": 563
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 568,
                      "end": 569
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 572,
                            "end": 578
                          },
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSBooleanKeyword",
                                "start": 583,
                                "end": 590
                              },
                              "start": 583,
                              "end": 592
                            },
                            "start": 580,
                            "end": 592
                          }
                        ],
                        "start": 571,
                        "end": 593
                      },
                      "start": 569,
                      "end": 593
                    },
                    "value": null,
                    "start": 565,
                    "end": 593
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 598,
                    "end": 602
                  },
                  "start": 595,
                  "end": 602
                },
                "start": 553,
                "end": 602
              },
              "start": 551,
              "end": 602
            },
            "start": 548,
            "end": 602
          },
          "init": null,
          "definite": false,
          "start": 548,
          "end": 602
        }
      ],
      "declare": true,
      "start": 536,
      "end": 603
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 625,
                        "end": 631
                      },
                      "start": 623,
                      "end": 631
                    },
                    "start": 622,
                    "end": 631
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 636,
                        "end": 642
                      },
                      "start": 634,
                      "end": 642
                    },
                    "start": 633,
                    "end": 642
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 647,
                      "end": 648
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSBooleanKeyword",
                                "start": 654,
                                "end": 661
                              },
                              "start": 654,
                              "end": 663
                            },
                            "start": 651,
                            "end": 663
                          }
                        ],
                        "start": 650,
                        "end": 664
                      },
                      "start": 648,
                      "end": 664
                    },
                    "value": null,
                    "start": 644,
                    "end": 664
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 669,
                    "end": 673
                  },
                  "start": 666,
                  "end": 673
                },
                "start": 621,
                "end": 673
              },
              "start": 619,
              "end": 673
            },
            "start": 616,
            "end": 673
          },
          "init": null,
          "definite": false,
          "start": 616,
          "end": 673
        }
      ],
      "declare": true,
      "start": 604,
      "end": 674
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 696,
                        "end": 702
                      },
                      "start": 694,
                      "end": 702
                    },
                    "start": 693,
                    "end": 702
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 707,
                        "end": 713
                      },
                      "start": 705,
                      "end": 713
                    },
                    "start": 704,
                    "end": 713
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 718,
                      "end": 719
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSBooleanKeyword",
                          "start": 721,
                          "end": 728
                        },
                        "start": 721,
                        "end": 730
                      },
                      "start": 719,
                      "end": 730
                    },
                    "value": null,
                    "start": 715,
                    "end": 730
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 735,
                    "end": 739
                  },
                  "start": 732,
                  "end": 739
                },
                "start": 692,
                "end": 739
              },
              "start": 690,
              "end": 739
            },
            "start": 687,
            "end": 739
          },
          "init": null,
          "definite": false,
          "start": 687,
          "end": 739
        }
      ],
      "declare": true,
      "start": 675,
      "end": 740
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 761,
                    "end": 767
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 769,
                    "end": 775
                  }
                ],
                "start": 760,
                "end": 776
              },
              "start": 758,
              "end": 776
            },
            "start": 756,
            "end": 776
          },
          "init": null,
          "definite": false,
          "start": 756,
          "end": 776
        }
      ],
      "declare": true,
      "start": 742,
      "end": 777
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 797,
                    "end": 803
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 805,
                    "end": 811
                  }
                ],
                "start": 796,
                "end": 812
              },
              "start": 794,
              "end": 812
            },
            "start": 792,
            "end": 812
          },
          "init": null,
          "definite": false,
          "start": 792,
          "end": 812
        }
      ],
      "declare": true,
      "start": 778,
      "end": 813
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 815,
          "end": 818
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 819,
            "end": 821
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 823,
            "end": 830
          }
        ],
        "optional": false,
        "start": 815,
        "end": 831
      },
      "directive": null,
      "start": 815,
      "end": 832
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 833,
          "end": 836
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 837,
            "end": 839
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 841,
            "end": 848
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 850,
            "end": 854
          }
        ],
        "optional": false,
        "start": 833,
        "end": 855
      },
      "directive": null,
      "start": 833,
      "end": 856
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 857,
          "end": 860
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 861,
            "end": 863
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 865,
            "end": 872
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 874,
            "end": 878
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 880,
            "end": 885
          }
        ],
        "optional": false,
        "start": 857,
        "end": 886
      },
      "directive": null,
      "start": 857,
      "end": 887
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 888,
          "end": 891
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 892,
              "end": 894
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 895,
              "end": 896
            },
            "optional": false,
            "computed": true,
            "start": 892,
            "end": 897
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 899,
              "end": 901
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 902,
              "end": 903
            },
            "optional": false,
            "computed": true,
            "start": 899,
            "end": 904
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 906,
              "end": 908
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 909,
              "end": 910
            },
            "optional": false,
            "computed": true,
            "start": 906,
            "end": 911
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 915
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 916,
              "end": 917
            },
            "optional": false,
            "computed": true,
            "start": 913,
            "end": 918
          }
        ],
        "optional": false,
        "start": 888,
        "end": 919
      },
      "directive": null,
      "start": 888,
      "end": 920
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 921,
          "end": 924
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 928,
              "end": 930
            },
            "start": 925,
            "end": 930
          }
        ],
        "optional": false,
        "start": 921,
        "end": 931
      },
      "directive": null,
      "start": 921,
      "end": 932
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 933,
          "end": 936
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 937,
            "end": 939
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 944,
              "end": 946
            },
            "start": 941,
            "end": 946
          }
        ],
        "optional": false,
        "start": 933,
        "end": 947
      },
      "directive": null,
      "start": 933,
      "end": 948
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 949,
          "end": 952
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 953,
            "end": 955
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 957,
            "end": 964
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 969,
              "end": 971
            },
            "start": 966,
            "end": 971
          }
        ],
        "optional": false,
        "start": 949,
        "end": 972
      },
      "directive": null,
      "start": 949,
      "end": 973
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 974,
          "end": 977
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 978,
            "end": 980
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 982,
            "end": 989
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 991,
            "end": 995
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1000,
              "end": 1002
            },
            "start": 997,
            "end": 1002
          }
        ],
        "optional": false,
        "start": 974,
        "end": 1003
      },
      "directive": null,
      "start": 974,
      "end": 1004
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 1005,
          "end": 1008
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1009,
            "end": 1011
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1013,
            "end": 1020
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1022,
            "end": 1026
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1031,
              "end": 1033
            },
            "start": 1028,
            "end": 1033
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1035,
            "end": 1040
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1045,
              "end": 1047
            },
            "start": 1042,
            "end": 1047
          }
        ],
        "optional": false,
        "start": 1005,
        "end": 1048
      },
      "directive": null,
      "start": 1005,
      "end": 1049
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1051,
          "end": 1054
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1055,
            "end": 1057
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1059,
            "end": 1066
          }
        ],
        "optional": false,
        "start": 1051,
        "end": 1067
      },
      "directive": null,
      "start": 1051,
      "end": 1068
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1069,
          "end": 1072
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1073,
            "end": 1075
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1077,
            "end": 1084
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1086,
            "end": 1090
          }
        ],
        "optional": false,
        "start": 1069,
        "end": 1091
      },
      "directive": null,
      "start": 1069,
      "end": 1092
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1093,
          "end": 1096
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1097,
            "end": 1099
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1101,
            "end": 1108
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1110,
            "end": 1114
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1116,
            "end": 1121
          }
        ],
        "optional": false,
        "start": 1093,
        "end": 1122
      },
      "directive": null,
      "start": 1093,
      "end": 1123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1124,
          "end": 1127
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1128,
              "end": 1130
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1131,
              "end": 1132
            },
            "optional": false,
            "computed": true,
            "start": 1128,
            "end": 1133
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1135,
              "end": 1137
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1138,
              "end": 1139
            },
            "optional": false,
            "computed": true,
            "start": 1135,
            "end": 1140
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1142,
              "end": 1144
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1145,
              "end": 1146
            },
            "optional": false,
            "computed": true,
            "start": 1142,
            "end": 1147
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1149,
              "end": 1151
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1152,
              "end": 1153
            },
            "optional": false,
            "computed": true,
            "start": 1149,
            "end": 1154
          }
        ],
        "optional": false,
        "start": 1124,
        "end": 1155
      },
      "directive": null,
      "start": 1124,
      "end": 1156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1157,
          "end": 1160
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1164,
              "end": 1166
            },
            "start": 1161,
            "end": 1166
          }
        ],
        "optional": false,
        "start": 1157,
        "end": 1167
      },
      "directive": null,
      "start": 1157,
      "end": 1168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1169,
          "end": 1172
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1173,
            "end": 1175
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1180,
              "end": 1182
            },
            "start": 1177,
            "end": 1182
          }
        ],
        "optional": false,
        "start": 1169,
        "end": 1183
      },
      "directive": null,
      "start": 1169,
      "end": 1184
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1185,
          "end": 1188
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1189,
            "end": 1191
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1193,
            "end": 1200
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1205,
              "end": 1207
            },
            "start": 1202,
            "end": 1207
          }
        ],
        "optional": false,
        "start": 1185,
        "end": 1208
      },
      "directive": null,
      "start": 1185,
      "end": 1209
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1210,
          "end": 1213
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1214,
            "end": 1216
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1218,
            "end": 1225
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1227,
            "end": 1231
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1236,
              "end": 1238
            },
            "start": 1233,
            "end": 1238
          }
        ],
        "optional": false,
        "start": 1210,
        "end": 1239
      },
      "directive": null,
      "start": 1210,
      "end": 1240
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1241,
          "end": 1244
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1245,
            "end": 1247
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1249,
            "end": 1256
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1258,
            "end": 1262
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1269
            },
            "start": 1264,
            "end": 1269
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1271,
            "end": 1276
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1281,
              "end": 1283
            },
            "start": 1278,
            "end": 1283
          }
        ],
        "optional": false,
        "start": 1241,
        "end": 1284
      },
      "directive": null,
      "start": 1241,
      "end": 1285
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1287,
          "end": 1290
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1291,
            "end": 1293
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1295,
            "end": 1302
          }
        ],
        "optional": false,
        "start": 1287,
        "end": 1303
      },
      "directive": null,
      "start": 1287,
      "end": 1304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1305,
          "end": 1308
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1309,
            "end": 1311
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1313,
            "end": 1320
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1322,
            "end": 1326
          }
        ],
        "optional": false,
        "start": 1305,
        "end": 1327
      },
      "directive": null,
      "start": 1305,
      "end": 1328
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1329,
          "end": 1332
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1333,
            "end": 1335
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1337,
            "end": 1344
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1346,
            "end": 1350
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1352,
            "end": 1357
          }
        ],
        "optional": false,
        "start": 1329,
        "end": 1358
      },
      "directive": null,
      "start": 1329,
      "end": 1359
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1360,
          "end": 1363
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1364,
              "end": 1366
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1367,
              "end": 1368
            },
            "optional": false,
            "computed": true,
            "start": 1364,
            "end": 1369
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1371,
              "end": 1373
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1374,
              "end": 1375
            },
            "optional": false,
            "computed": true,
            "start": 1371,
            "end": 1376
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1378,
              "end": 1380
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1381,
              "end": 1382
            },
            "optional": false,
            "computed": true,
            "start": 1378,
            "end": 1383
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1385,
              "end": 1387
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1388,
              "end": 1389
            },
            "optional": false,
            "computed": true,
            "start": 1385,
            "end": 1390
          }
        ],
        "optional": false,
        "start": 1360,
        "end": 1391
      },
      "directive": null,
      "start": 1360,
      "end": 1392
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1393,
          "end": 1396
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1400,
              "end": 1402
            },
            "start": 1397,
            "end": 1402
          }
        ],
        "optional": false,
        "start": 1393,
        "end": 1403
      },
      "directive": null,
      "start": 1393,
      "end": 1404
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1405,
          "end": 1408
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1409,
            "end": 1411
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1416,
              "end": 1418
            },
            "start": 1413,
            "end": 1418
          }
        ],
        "optional": false,
        "start": 1405,
        "end": 1419
      },
      "directive": null,
      "start": 1405,
      "end": 1420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1421,
          "end": 1424
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1425,
            "end": 1427
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1429,
            "end": 1436
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1441,
              "end": 1443
            },
            "start": 1438,
            "end": 1443
          }
        ],
        "optional": false,
        "start": 1421,
        "end": 1444
      },
      "directive": null,
      "start": 1421,
      "end": 1445
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1446,
          "end": 1449
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1450,
            "end": 1452
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1454,
            "end": 1461
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1463,
            "end": 1467
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1472,
              "end": 1474
            },
            "start": 1469,
            "end": 1474
          }
        ],
        "optional": false,
        "start": 1446,
        "end": 1475
      },
      "directive": null,
      "start": 1446,
      "end": 1476
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1477,
          "end": 1480
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1481,
            "end": 1483
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1485,
            "end": 1492
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1494,
            "end": 1498
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1503,
              "end": 1505
            },
            "start": 1500,
            "end": 1505
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1507,
            "end": 1512
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1517,
              "end": 1519
            },
            "start": 1514,
            "end": 1519
          }
        ],
        "optional": false,
        "start": 1477,
        "end": 1520
      },
      "directive": null,
      "start": 1477,
      "end": 1521
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1523,
          "end": 1526
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1527,
            "end": 1529
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1531,
            "end": 1538
          }
        ],
        "optional": false,
        "start": 1523,
        "end": 1539
      },
      "directive": null,
      "start": 1523,
      "end": 1540
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1541,
          "end": 1544
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1545,
            "end": 1547
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1549,
            "end": 1556
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1558,
            "end": 1562
          }
        ],
        "optional": false,
        "start": 1541,
        "end": 1563
      },
      "directive": null,
      "start": 1541,
      "end": 1564
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1565,
          "end": 1568
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1569,
            "end": 1571
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1573,
            "end": 1580
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1582,
            "end": 1586
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1588,
            "end": 1593
          }
        ],
        "optional": false,
        "start": 1565,
        "end": 1594
      },
      "directive": null,
      "start": 1565,
      "end": 1595
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1596,
          "end": 1599
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1600,
              "end": 1602
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1603,
              "end": 1604
            },
            "optional": false,
            "computed": true,
            "start": 1600,
            "end": 1605
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1607,
              "end": 1609
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1610,
              "end": 1611
            },
            "optional": false,
            "computed": true,
            "start": 1607,
            "end": 1612
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1614,
              "end": 1616
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1617,
              "end": 1618
            },
            "optional": false,
            "computed": true,
            "start": 1614,
            "end": 1619
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1621,
              "end": 1623
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1624,
              "end": 1625
            },
            "optional": false,
            "computed": true,
            "start": 1621,
            "end": 1626
          }
        ],
        "optional": false,
        "start": 1596,
        "end": 1627
      },
      "directive": null,
      "start": 1596,
      "end": 1628
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1629,
          "end": 1632
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1636,
              "end": 1638
            },
            "start": 1633,
            "end": 1638
          }
        ],
        "optional": false,
        "start": 1629,
        "end": 1639
      },
      "directive": null,
      "start": 1629,
      "end": 1640
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1641,
          "end": 1644
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1645,
            "end": 1647
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1652,
              "end": 1654
            },
            "start": 1649,
            "end": 1654
          }
        ],
        "optional": false,
        "start": 1641,
        "end": 1655
      },
      "directive": null,
      "start": 1641,
      "end": 1656
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1657,
          "end": 1660
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1661,
            "end": 1663
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1665,
            "end": 1672
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1677,
              "end": 1679
            },
            "start": 1674,
            "end": 1679
          }
        ],
        "optional": false,
        "start": 1657,
        "end": 1680
      },
      "directive": null,
      "start": 1657,
      "end": 1681
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1682,
          "end": 1685
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1686,
            "end": 1688
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1690,
            "end": 1697
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1699,
            "end": 1703
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1708,
              "end": 1710
            },
            "start": 1705,
            "end": 1710
          }
        ],
        "optional": false,
        "start": 1682,
        "end": 1711
      },
      "directive": null,
      "start": 1682,
      "end": 1712
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1713,
          "end": 1716
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1717,
            "end": 1719
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1721,
            "end": 1728
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1730,
            "end": 1734
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1739,
              "end": 1741
            },
            "start": 1736,
            "end": 1741
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1743,
            "end": 1748
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1753,
              "end": 1755
            },
            "start": 1750,
            "end": 1755
          }
        ],
        "optional": false,
        "start": 1713,
        "end": 1756
      },
      "directive": null,
      "start": 1713,
      "end": 1757
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f20",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1779,
                        "end": 1780
                      },
                      "constraint": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSUnknownKeyword",
                          "start": 1789,
                          "end": 1796
                        },
                        "start": 1789,
                        "end": 1798
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1779,
                      "end": 1798
                    }
                  ],
                  "start": 1778,
                  "end": 1799
                },
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
                      "start": 1803,
                      "end": 1807
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1809,
                          "end": 1810
                        },
                        "typeArguments": null,
                        "start": 1809,
                        "end": 1810
                      },
                      "start": 1807,
                      "end": 1810
                    },
                    "value": null,
                    "start": 1800,
                    "end": 1810
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1815,
                      "end": 1816
                    },
                    "typeArguments": null,
                    "start": 1815,
                    "end": 1816
                  },
                  "start": 1812,
                  "end": 1816
                },
                "start": 1778,
                "end": 1816
              },
              "start": 1776,
              "end": 1816
            },
            "start": 1773,
            "end": 1816
          },
          "init": null,
          "definite": false,
          "start": 1773,
          "end": 1816
        }
      ],
      "declare": true,
      "start": 1759,
      "end": 1817
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f20",
          "optional": false,
          "typeAnnotation": null,
          "start": 1819,
          "end": 1822
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1826,
              "end": 1828
            },
            "start": 1823,
            "end": 1828
          }
        ],
        "optional": false,
        "start": 1819,
        "end": 1829
      },
      "directive": null,
      "start": 1819,
      "end": 1830
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f20",
          "optional": false,
          "typeAnnotation": null,
          "start": 1831,
          "end": 1834
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1835,
            "end": 1837
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1842,
              "end": 1844
            },
            "start": 1839,
            "end": 1844
          }
        ],
        "optional": false,
        "start": 1831,
        "end": 1845
      },
      "directive": null,
      "start": 1831,
      "end": 1846
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f20",
          "optional": false,
          "typeAnnotation": null,
          "start": 1847,
          "end": 1850
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1851,
            "end": 1853
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1855,
            "end": 1862
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1867,
              "end": 1869
            },
            "start": 1864,
            "end": 1869
          }
        ],
        "optional": false,
        "start": 1847,
        "end": 1870
      },
      "directive": null,
      "start": 1847,
      "end": 1871
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f20",
          "optional": false,
          "typeAnnotation": null,
          "start": 1872,
          "end": 1875
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1876,
            "end": 1878
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1880,
            "end": 1887
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1892,
              "end": 1894
            },
            "start": 1889,
            "end": 1894
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1896,
            "end": 1900
          }
        ],
        "optional": false,
        "start": 1872,
        "end": 1901
      },
      "directive": null,
      "start": 1872,
      "end": 1902
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 1909,
        "end": 1912
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 1915,
          "end": 1925
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1930,
                      "end": 1936
                    },
                    "start": 1928,
                    "end": 1936
                  },
                  "start": 1927,
                  "end": 1936
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1941,
                      "end": 1947
                    },
                    "start": 1939,
                    "end": 1947
                  },
                  "start": 1938,
                  "end": 1947
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1952,
                    "end": 1953
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 1955,
                        "end": 1962
                      },
                      "start": 1955,
                      "end": 1964
                    },
                    "start": 1953,
                    "end": 1964
                  },
                  "value": null,
                  "start": 1949,
                  "end": 1964
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1969,
                  "end": 1973
                },
                "start": 1966,
                "end": 1973
              },
              "start": 1926,
              "end": 1973
            }
          ],
          "start": 1925,
          "end": 1974
        },
        "start": 1915,
        "end": 1974
      },
      "declare": false,
      "start": 1904,
      "end": 1975
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 1981,
        "end": 1984
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 1987,
          "end": 1997
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "start": 2002,
                    "end": 2006
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2009,
                          "end": 2015
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 2017,
                          "end": 2023
                        },
                        {
                          "type": "TSRestType",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSBooleanKeyword",
                              "start": 2028,
                              "end": 2035
                            },
                            "start": 2028,
                            "end": 2037
                          },
                          "start": 2025,
                          "end": 2037
                        }
                      ],
                      "start": 2008,
                      "end": 2038
                    },
                    "start": 2006,
                    "end": 2038
                  },
                  "value": null,
                  "start": 1999,
                  "end": 2038
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2043,
                  "end": 2047
                },
                "start": 2040,
                "end": 2047
              },
              "start": 1998,
              "end": 2047
            }
          ],
          "start": 1997,
          "end": 2048
        },
        "start": 1987,
        "end": 2048
      },
      "declare": false,
      "start": 1976,
      "end": 2049
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 2055,
        "end": 2058
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 2061,
          "end": 2082
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2091,
                      "end": 2097
                    },
                    "start": 2089,
                    "end": 2097
                  },
                  "start": 2088,
                  "end": 2097
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2102,
                      "end": 2108
                    },
                    "start": 2100,
                    "end": 2108
                  },
                  "start": 2099,
                  "end": 2108
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2113,
                    "end": 2114
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 2116,
                        "end": 2123
                      },
                      "start": 2116,
                      "end": 2125
                    },
                    "start": 2114,
                    "end": 2125
                  },
                  "value": null,
                  "start": 2110,
                  "end": 2125
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2130,
                  "end": 2134
                },
                "start": 2127,
                "end": 2134
              },
              "start": 2083,
              "end": 2134
            }
          ],
          "start": 2082,
          "end": 2135
        },
        "start": 2061,
        "end": 2135
      },
      "declare": false,
      "start": 2050,
      "end": 2136
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null,
        "start": 2142,
        "end": 2145
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 2148,
          "end": 2169
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
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
                    "start": 2178,
                    "end": 2182
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2185,
                          "end": 2191
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 2193,
                          "end": 2199
                        },
                        {
                          "type": "TSRestType",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSBooleanKeyword",
                              "start": 2204,
                              "end": 2211
                            },
                            "start": 2204,
                            "end": 2213
                          },
                          "start": 2201,
                          "end": 2213
                        }
                      ],
                      "start": 2184,
                      "end": 2214
                    },
                    "start": 2182,
                    "end": 2214
                  },
                  "value": null,
                  "start": 2175,
                  "end": 2214
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2219,
                  "end": 2223
                },
                "start": 2216,
                "end": 2223
              },
              "start": 2170,
              "end": 2223
            }
          ],
          "start": 2169,
          "end": 2224
        },
        "start": 2148,
        "end": 2224
      },
      "declare": false,
      "start": 2137,
      "end": 2225
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null,
        "start": 2231,
        "end": 2234
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
              "start": 2235,
              "end": 2236
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2245,
                "end": 2248
              },
              "start": 2245,
              "end": 2250
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2235,
            "end": 2250
          }
        ],
        "start": 2234,
        "end": 2251
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 2254,
          "end": 2264
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2269,
                      "end": 2275
                    },
                    "start": 2267,
                    "end": 2275
                  },
                  "start": 2266,
                  "end": 2275
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2280,
                    "end": 2284
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                    "start": 2284,
                    "end": 2287
                  },
                  "value": null,
                  "start": 2277,
                  "end": 2287
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2292,
                  "end": 2296
                },
                "start": 2289,
                "end": 2296
              },
              "start": 2265,
              "end": 2296
            }
          ],
          "start": 2264,
          "end": 2297
        },
        "start": 2254,
        "end": 2297
      },
      "declare": false,
      "start": 2226,
      "end": 2298
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T06",
        "optional": false,
        "typeAnnotation": null,
        "start": 2304,
        "end": 2307
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T05",
          "optional": false,
          "typeAnnotation": null,
          "start": 2310,
          "end": 2313
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2315,
                  "end": 2321
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 2326,
                      "end": 2333
                    },
                    "start": 2326,
                    "end": 2335
                  },
                  "start": 2323,
                  "end": 2335
                }
              ],
              "start": 2314,
              "end": 2336
            }
          ],
          "start": 2313,
          "end": 2337
        },
        "start": 2310,
        "end": 2337
      },
      "declare": false,
      "start": 2299,
      "end": 2338
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2345,
        "end": 2347
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
              "start": 2348,
              "end": 2349
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 2358,
                "end": 2366
              },
              "typeArguments": null,
              "start": 2358,
              "end": 2366
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2348,
            "end": 2366
          }
        ],
        "start": 2347,
        "end": 2367
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
            "start": 2370,
            "end": 2371
          },
          "typeArguments": null,
          "start": 2370,
          "end": 2371
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "head",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2393,
                      "end": 2394
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2393,
                    "end": 2394
                  },
                  "start": 2387,
                  "end": 2394
                },
                "start": 2385,
                "end": 2394
              },
              "start": 2381,
              "end": 2394
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "tail",
                "optional": false,
                "typeAnnotation": null,
                "start": 2399,
                "end": 2403
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
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2411,
                      "end": 2412
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2411,
                    "end": 2412
                  },
                  "start": 2405,
                  "end": 2412
                },
                "start": 2403,
                "end": 2412
              },
              "value": null,
              "start": 2396,
              "end": 2412
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2417,
              "end": 2420
            },
            "start": 2414,
            "end": 2420
          },
          "start": 2380,
          "end": 2420
        },
        "trueType": {
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
                "name": "head",
                "optional": false,
                "typeAnnotation": null,
                "start": 2425,
                "end": 2429
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2431,
                    "end": 2432
                  },
                  "typeArguments": null,
                  "start": 2431,
                  "end": 2432
                },
                "start": 2429,
                "end": 2432
              },
              "accessibility": null,
              "static": false,
              "start": 2425,
              "end": 2433
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "tail",
                "optional": false,
                "typeAnnotation": null,
                "start": 2434,
                "end": 2438
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2440,
                    "end": 2441
                  },
                  "typeArguments": null,
                  "start": 2440,
                  "end": 2441
                },
                "start": 2438,
                "end": 2441
              },
              "accessibility": null,
              "static": false,
              "start": 2434,
              "end": 2441
            }
          ],
          "start": 2423,
          "end": 2443
        },
        "falseType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSAnyKeyword",
            "start": 2446,
            "end": 2449
          },
          "start": 2446,
          "end": 2451
        },
        "start": 2370,
        "end": 2451
      },
      "declare": false,
      "start": 2340,
      "end": 2452
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2459,
        "end": 2462
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "P1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2465,
          "end": 2467
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2472,
                      "end": 2478
                    },
                    "start": 2470,
                    "end": 2478
                  },
                  "start": 2469,
                  "end": 2478
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2483,
                      "end": 2489
                    },
                    "start": 2481,
                    "end": 2489
                  },
                  "start": 2480,
                  "end": 2489
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2494,
                    "end": 2495
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 2497,
                        "end": 2504
                      },
                      "start": 2497,
                      "end": 2506
                    },
                    "start": 2495,
                    "end": 2506
                  },
                  "value": null,
                  "start": 2491,
                  "end": 2506
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2511,
                  "end": 2515
                },
                "start": 2508,
                "end": 2515
              },
              "start": 2468,
              "end": 2515
            }
          ],
          "start": 2467,
          "end": 2516
        },
        "start": 2465,
        "end": 2516
      },
      "declare": false,
      "start": 2454,
      "end": 2517
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2523,
        "end": 2526
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "P1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2529,
          "end": 2531
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2536,
                    "end": 2537
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2539,
                        "end": 2545
                      },
                      "start": 2539,
                      "end": 2547
                    },
                    "start": 2537,
                    "end": 2547
                  },
                  "value": null,
                  "start": 2533,
                  "end": 2547
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2552,
                  "end": 2556
                },
                "start": 2549,
                "end": 2556
              },
              "start": 2532,
              "end": 2556
            }
          ],
          "start": 2531,
          "end": 2557
        },
        "start": 2529,
        "end": 2557
      },
      "declare": false,
      "start": 2518,
      "end": 2558
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2564,
        "end": 2567
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "P1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2570,
          "end": 2572
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2577,
                      "end": 2583
                    },
                    "start": 2575,
                    "end": 2583
                  },
                  "start": 2574,
                  "end": 2583
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2588,
                      "end": 2594
                    },
                    "start": 2586,
                    "end": 2594
                  },
                  "start": 2585,
                  "end": 2594
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2599,
                  "end": 2603
                },
                "start": 2596,
                "end": 2603
              },
              "start": 2573,
              "end": 2603
            }
          ],
          "start": 2572,
          "end": 2604
        },
        "start": 2570,
        "end": 2604
      },
      "declare": false,
      "start": 2559,
      "end": 2605
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2605
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13,
    "range": [
      8,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 14,
    "end": 16,
    "range": [
      14,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
    "end": 33,
    "range": [
      27,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 35,
    "end": 38,
    "range": [
      35,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 38,
    "end": 45,
    "range": [
      38,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 50,
    "end": 57,
    "range": [
      50,
      57
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 58,
    "end": 63,
    "range": [
      58,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 64,
    "end": 66,
    "range": [
      64,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 69,
    "end": 75,
    "range": [
      69,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 77,
    "end": 80,
    "range": [
      77,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 80,
    "end": 87,
    "range": [
      80,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 92,
    "end": 99,
    "range": [
      92,
      99
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 100,
    "end": 105,
    "range": [
      100,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 106,
    "end": 108,
    "range": [
      106,
      108
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
    "type": "Punctuator",
    "value": "[",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 111,
    "end": 114,
    "range": [
      111,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 114,
    "end": 121,
    "range": [
      114,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 126,
    "end": 133,
    "range": [
      126,
      133
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 134,
    "end": 139,
    "range": [
      134,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 140,
    "end": 142,
    "range": [
      140,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 149,
    "end": 156,
    "range": [
      149,
      156
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 157,
    "end": 160,
    "range": [
      157,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "f00",
    "start": 161,
    "end": 164,
    "range": [
      161,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 167,
    "end": 170,
    "range": [
      167,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 174,
    "end": 180,
    "range": [
      174,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 182,
    "end": 188,
    "range": [
      182,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 190,
    "end": 197,
    "range": [
      190,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 200,
    "end": 202,
    "range": [
      200,
      202
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 203,
    "end": 207,
    "range": [
      203,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 209,
    "end": 216,
    "range": [
      209,
      216
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 217,
    "end": 220,
    "range": [
      217,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "f01",
    "start": 221,
    "end": 224,
    "range": [
      221,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
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
    "value": "number",
    "start": 230,
    "end": 236,
    "range": [
      230,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 238,
    "end": 241,
    "range": [
      238,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 245,
    "end": 251,
    "range": [
      245,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 253,
    "end": 260,
    "range": [
      253,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 263,
    "end": 265,
    "range": [
      263,
      265
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 266,
    "end": 270,
    "range": [
      266,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 272,
    "end": 279,
    "range": [
      272,
      279
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 280,
    "end": 283,
    "range": [
      280,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "f02",
    "start": 284,
    "end": 287,
    "range": [
      284,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 293,
    "end": 299,
    "range": [
      293,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 304,
    "end": 310,
    "range": [
      304,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 312,
    "end": 315,
    "range": [
      312,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 319,
    "end": 326,
    "range": [
      319,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 329,
    "end": 331,
    "range": [
      329,
      331
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 332,
    "end": 336,
    "range": [
      332,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 338,
    "end": 345,
    "range": [
      338,
      345
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 346,
    "end": 349,
    "range": [
      346,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "f03",
    "start": 350,
    "end": 353,
    "range": [
      350,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 359,
    "end": 365,
    "range": [
      359,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 370,
    "end": 376,
    "range": [
      370,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 381,
    "end": 388,
    "range": [
      381,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 390,
    "end": 392,
    "range": [
      390,
      392
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 393,
    "end": 397,
    "range": [
      393,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 399,
    "end": 406,
    "range": [
      399,
      406
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 407,
    "end": 410,
    "range": [
      407,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "f04",
    "start": 411,
    "end": 414,
    "range": [
      411,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 420,
    "end": 426,
    "range": [
      420,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 431,
    "end": 437,
    "range": [
      431,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 442,
    "end": 449,
    "range": [
      442,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 451,
    "end": 454,
    "range": [
      451,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 461,
    "end": 463,
    "range": [
      461,
      463
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 464,
    "end": 468,
    "range": [
      464,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 471,
    "end": 478,
    "range": [
      471,
      478
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 479,
    "end": 482,
    "range": [
      479,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 483,
    "end": 486,
    "range": [
      483,
      486
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
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 489,
    "end": 492,
    "range": [
      489,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 496,
    "end": 502,
    "range": [
      496,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 504,
    "end": 510,
    "range": [
      504,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 512,
    "end": 515,
    "range": [
      512,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 515,
    "end": 522,
    "range": [
      515,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 527,
    "end": 529,
    "range": [
      527,
      529
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 530,
    "end": 534,
    "range": [
      530,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 536,
    "end": 543,
    "range": [
      536,
      543
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 544,
    "end": 547,
    "range": [
      544,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 548,
    "end": 551,
    "range": [
      548,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 557,
    "end": 563,
    "range": [
      557,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 565,
    "end": 568,
    "range": [
      565,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 572,
    "end": 578,
    "range": [
      572,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 580,
    "end": 583,
    "range": [
      580,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 583,
    "end": 590,
    "range": [
      583,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 595,
    "end": 597,
    "range": [
      595,
      597
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 598,
    "end": 602,
    "range": [
      598,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 604,
    "end": 611,
    "range": [
      604,
      611
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 612,
    "end": 615,
    "range": [
      612,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 616,
    "end": 619,
    "range": [
      616,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 625,
    "end": 631,
    "range": [
      625,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 636,
    "end": 642,
    "range": [
      636,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 644,
    "end": 647,
    "range": [
      644,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 651,
    "end": 654,
    "range": [
      651,
      654
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 654,
    "end": 661,
    "range": [
      654,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 666,
    "end": 668,
    "range": [
      666,
      668
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 669,
    "end": 673,
    "range": [
      669,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 675,
    "end": 682,
    "range": [
      675,
      682
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 683,
    "end": 686,
    "range": [
      683,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 687,
    "end": 690,
    "range": [
      687,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
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
    "value": "number",
    "start": 696,
    "end": 702,
    "range": [
      696,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 707,
    "end": 713,
    "range": [
      707,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 715,
    "end": 718,
    "range": [
      715,
      718
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 721,
    "end": 728,
    "range": [
      721,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 732,
    "end": 734,
    "range": [
      732,
      734
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 735,
    "end": 739,
    "range": [
      735,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 742,
    "end": 749,
    "range": [
      742,
      749
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 750,
    "end": 755,
    "range": [
      750,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 756,
    "end": 758,
    "range": [
      756,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 761,
    "end": 767,
    "range": [
      761,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 769,
    "end": 775,
    "range": [
      769,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 778,
    "end": 785,
    "range": [
      778,
      785
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 786,
    "end": 791,
    "range": [
      786,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 792,
    "end": 794,
    "range": [
      792,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 797,
    "end": 803,
    "range": [
      797,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 805,
    "end": 811,
    "range": [
      805,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 815,
    "end": 818,
    "range": [
      815,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 819,
    "end": 821,
    "range": [
      819,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 823,
    "end": 830,
    "range": [
      823,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 833,
    "end": 836,
    "range": [
      833,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 837,
    "end": 839,
    "range": [
      837,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 841,
    "end": 848,
    "range": [
      841,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 850,
    "end": 854,
    "range": [
      850,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 857,
    "end": 860,
    "range": [
      857,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 861,
    "end": 863,
    "range": [
      861,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 865,
    "end": 872,
    "range": [
      865,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 874,
    "end": 878,
    "range": [
      874,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 880,
    "end": 885,
    "range": [
      880,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 888,
    "end": 891,
    "range": [
      888,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 892,
    "end": 894,
    "range": [
      892,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 899,
    "end": 901,
    "range": [
      899,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 906,
    "end": 908,
    "range": [
      906,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 913,
    "end": 915,
    "range": [
      913,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 921,
    "end": 924,
    "range": [
      921,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 925,
    "end": 928,
    "range": [
      925,
      928
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 928,
    "end": 930,
    "range": [
      928,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 933,
    "end": 936,
    "range": [
      933,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 937,
    "end": 939,
    "range": [
      937,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 941,
    "end": 944,
    "range": [
      941,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 944,
    "end": 946,
    "range": [
      944,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 949,
    "end": 952,
    "range": [
      949,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 953,
    "end": 955,
    "range": [
      953,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 957,
    "end": 964,
    "range": [
      957,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 966,
    "end": 969,
    "range": [
      966,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 969,
    "end": 971,
    "range": [
      969,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 974,
    "end": 977,
    "range": [
      974,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 978,
    "end": 980,
    "range": [
      978,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 982,
    "end": 989,
    "range": [
      982,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 991,
    "end": 995,
    "range": [
      991,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 997,
    "end": 1000,
    "range": [
      997,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1000,
    "end": 1002,
    "range": [
      1000,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1005,
    "end": 1008,
    "range": [
      1005,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1009,
    "end": 1011,
    "range": [
      1009,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1013,
    "end": 1020,
    "range": [
      1013,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1022,
    "end": 1026,
    "range": [
      1022,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1028,
    "end": 1031,
    "range": [
      1028,
      1031
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1031,
    "end": 1033,
    "range": [
      1031,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1035,
    "end": 1040,
    "range": [
      1035,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1042,
    "end": 1045,
    "range": [
      1042,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1045,
    "end": 1047,
    "range": [
      1045,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1051,
    "end": 1054,
    "range": [
      1051,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1055,
    "end": 1057,
    "range": [
      1055,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1059,
    "end": 1066,
    "range": [
      1059,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1069,
    "end": 1072,
    "range": [
      1069,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1073,
    "end": 1075,
    "range": [
      1073,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1077,
    "end": 1084,
    "range": [
      1077,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1086,
    "end": 1090,
    "range": [
      1086,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1093,
    "end": 1096,
    "range": [
      1093,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1097,
    "end": 1099,
    "range": [
      1097,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1101,
    "end": 1108,
    "range": [
      1101,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1110,
    "end": 1114,
    "range": [
      1110,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1116,
    "end": 1121,
    "range": [
      1116,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1124,
    "end": 1127,
    "range": [
      1124,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1128,
    "end": 1130,
    "range": [
      1128,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1135,
    "end": 1137,
    "range": [
      1135,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1142,
    "end": 1144,
    "range": [
      1142,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1149,
    "end": 1151,
    "range": [
      1149,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1157,
    "end": 1160,
    "range": [
      1157,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1161,
    "end": 1164,
    "range": [
      1161,
      1164
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1164,
    "end": 1166,
    "range": [
      1164,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1169,
    "end": 1172,
    "range": [
      1169,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1173,
    "end": 1175,
    "range": [
      1173,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1177,
    "end": 1180,
    "range": [
      1177,
      1180
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1180,
    "end": 1182,
    "range": [
      1180,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1185,
    "end": 1188,
    "range": [
      1185,
      1188
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1189,
    "end": 1191,
    "range": [
      1189,
      1191
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1193,
    "end": 1200,
    "range": [
      1193,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1202,
    "end": 1205,
    "range": [
      1202,
      1205
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1205,
    "end": 1207,
    "range": [
      1205,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1210,
    "end": 1213,
    "range": [
      1210,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1214,
    "end": 1216,
    "range": [
      1214,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1218,
    "end": 1225,
    "range": [
      1218,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1227,
    "end": 1231,
    "range": [
      1227,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1233,
    "end": 1236,
    "range": [
      1233,
      1236
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1236,
    "end": 1238,
    "range": [
      1236,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1241,
    "end": 1244,
    "range": [
      1241,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1245,
    "end": 1247,
    "range": [
      1245,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1249,
    "end": 1256,
    "range": [
      1249,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1258,
    "end": 1262,
    "range": [
      1258,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1264,
    "end": 1267,
    "range": [
      1264,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1267,
    "end": 1269,
    "range": [
      1267,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1271,
    "end": 1276,
    "range": [
      1271,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1278,
    "end": 1281,
    "range": [
      1278,
      1281
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1281,
    "end": 1283,
    "range": [
      1281,
      1283
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1287,
    "end": 1290,
    "range": [
      1287,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1291,
    "end": 1293,
    "range": [
      1291,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1295,
    "end": 1302,
    "range": [
      1295,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1305,
    "end": 1308,
    "range": [
      1305,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1309,
    "end": 1311,
    "range": [
      1309,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1313,
    "end": 1320,
    "range": [
      1313,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1322,
    "end": 1326,
    "range": [
      1322,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1327,
    "end": 1328,
    "range": [
      1327,
      1328
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1329,
    "end": 1332,
    "range": [
      1329,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1333,
    "end": 1335,
    "range": [
      1333,
      1335
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1337,
    "end": 1344,
    "range": [
      1337,
      1344
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1346,
    "end": 1350,
    "range": [
      1346,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1352,
    "end": 1357,
    "range": [
      1352,
      1357
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1357,
    "end": 1358,
    "range": [
      1357,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1360,
    "end": 1363,
    "range": [
      1360,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1364,
    "end": 1366,
    "range": [
      1364,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1371,
    "end": 1373,
    "range": [
      1371,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1378,
    "end": 1380,
    "range": [
      1378,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1385,
    "end": 1387,
    "range": [
      1385,
      1387
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1393,
    "end": 1396,
    "range": [
      1393,
      1396
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1397,
    "end": 1400,
    "range": [
      1397,
      1400
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1400,
    "end": 1402,
    "range": [
      1400,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1405,
    "end": 1408,
    "range": [
      1405,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1409,
    "end": 1411,
    "range": [
      1409,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1413,
    "end": 1416,
    "range": [
      1413,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1416,
    "end": 1418,
    "range": [
      1416,
      1418
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1421,
    "end": 1424,
    "range": [
      1421,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1425,
    "end": 1427,
    "range": [
      1425,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1429,
    "end": 1436,
    "range": [
      1429,
      1436
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1438,
    "end": 1441,
    "range": [
      1438,
      1441
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1441,
    "end": 1443,
    "range": [
      1441,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1446,
    "end": 1449,
    "range": [
      1446,
      1449
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1450,
    "end": 1452,
    "range": [
      1450,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1454,
    "end": 1461,
    "range": [
      1454,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1463,
    "end": 1467,
    "range": [
      1463,
      1467
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1469,
    "end": 1472,
    "range": [
      1469,
      1472
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1472,
    "end": 1474,
    "range": [
      1472,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1477,
    "end": 1480,
    "range": [
      1477,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1481,
    "end": 1483,
    "range": [
      1481,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1485,
    "end": 1492,
    "range": [
      1485,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1494,
    "end": 1498,
    "range": [
      1494,
      1498
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1500,
    "end": 1503,
    "range": [
      1500,
      1503
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1503,
    "end": 1505,
    "range": [
      1503,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1507,
    "end": 1512,
    "range": [
      1507,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1514,
    "end": 1517,
    "range": [
      1514,
      1517
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1517,
    "end": 1519,
    "range": [
      1517,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1523,
    "end": 1526,
    "range": [
      1523,
      1526
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1527,
    "end": 1529,
    "range": [
      1527,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1531,
    "end": 1538,
    "range": [
      1531,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1541,
    "end": 1544,
    "range": [
      1541,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1545,
    "end": 1547,
    "range": [
      1545,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1549,
    "end": 1556,
    "range": [
      1549,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1558,
    "end": 1562,
    "range": [
      1558,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1565,
    "end": 1568,
    "range": [
      1565,
      1568
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1568,
    "end": 1569,
    "range": [
      1568,
      1569
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1569,
    "end": 1571,
    "range": [
      1569,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1573,
    "end": 1580,
    "range": [
      1573,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1582,
    "end": 1586,
    "range": [
      1582,
      1586
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1588,
    "end": 1593,
    "range": [
      1588,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1596,
    "end": 1599,
    "range": [
      1596,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1600,
    "end": 1602,
    "range": [
      1600,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1607,
    "end": 1609,
    "range": [
      1607,
      1609
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1609,
    "end": 1610,
    "range": [
      1609,
      1610
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1614,
    "end": 1616,
    "range": [
      1614,
      1616
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1616,
    "end": 1617,
    "range": [
      1616,
      1617
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1621,
    "end": 1623,
    "range": [
      1621,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1629,
    "end": 1632,
    "range": [
      1629,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1633,
    "end": 1636,
    "range": [
      1633,
      1636
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1636,
    "end": 1638,
    "range": [
      1636,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1641,
    "end": 1644,
    "range": [
      1641,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1645,
    "end": 1647,
    "range": [
      1645,
      1647
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1647,
    "end": 1648,
    "range": [
      1647,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1649,
    "end": 1652,
    "range": [
      1649,
      1652
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1652,
    "end": 1654,
    "range": [
      1652,
      1654
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1655,
    "end": 1656,
    "range": [
      1655,
      1656
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1657,
    "end": 1660,
    "range": [
      1657,
      1660
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1661,
    "end": 1663,
    "range": [
      1661,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1665,
    "end": 1672,
    "range": [
      1665,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1674,
    "end": 1677,
    "range": [
      1674,
      1677
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1677,
    "end": 1679,
    "range": [
      1677,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1682,
    "end": 1685,
    "range": [
      1682,
      1685
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1686,
    "end": 1688,
    "range": [
      1686,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1690,
    "end": 1697,
    "range": [
      1690,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1699,
    "end": 1703,
    "range": [
      1699,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1705,
    "end": 1708,
    "range": [
      1705,
      1708
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1708,
    "end": 1710,
    "range": [
      1708,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1713,
    "end": 1716,
    "range": [
      1713,
      1716
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1717,
    "end": 1719,
    "range": [
      1717,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1721,
    "end": 1728,
    "range": [
      1721,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1730,
    "end": 1734,
    "range": [
      1730,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1736,
    "end": 1739,
    "range": [
      1736,
      1739
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1739,
    "end": 1741,
    "range": [
      1739,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1743,
    "end": 1748,
    "range": [
      1743,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1750,
    "end": 1753,
    "range": [
      1750,
      1753
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1753,
    "end": 1755,
    "range": [
      1753,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1759,
    "end": 1766,
    "range": [
      1759,
      1766
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1767,
    "end": 1772,
    "range": [
      1767,
      1772
    ]
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1773,
    "end": 1776,
    "range": [
      1773,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1781,
    "end": 1788,
    "range": [
      1781,
      1788
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1789,
    "end": 1796,
    "range": [
      1789,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1800,
    "end": 1803,
    "range": [
      1800,
      1803
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1803,
    "end": 1807,
    "range": [
      1803,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1812,
    "end": 1814,
    "range": [
      1812,
      1814
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1819,
    "end": 1822,
    "range": [
      1819,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1823,
    "end": 1826,
    "range": [
      1823,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1826,
    "end": 1828,
    "range": [
      1826,
      1828
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1828,
    "end": 1829,
    "range": [
      1828,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1831,
    "end": 1834,
    "range": [
      1831,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1835,
    "end": 1837,
    "range": [
      1835,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1839,
    "end": 1842,
    "range": [
      1839,
      1842
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1842,
    "end": 1844,
    "range": [
      1842,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1847,
    "end": 1850,
    "range": [
      1847,
      1850
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1850,
    "end": 1851,
    "range": [
      1850,
      1851
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1851,
    "end": 1853,
    "range": [
      1851,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1855,
    "end": 1862,
    "range": [
      1855,
      1862
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1864,
    "end": 1867,
    "range": [
      1864,
      1867
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1867,
    "end": 1869,
    "range": [
      1867,
      1869
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1870,
    "end": 1871,
    "range": [
      1870,
      1871
    ]
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1872,
    "end": 1875,
    "range": [
      1872,
      1875
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1876,
    "end": 1878,
    "range": [
      1876,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1880,
    "end": 1887,
    "range": [
      1880,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1889,
    "end": 1892,
    "range": [
      1889,
      1892
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1892,
    "end": 1894,
    "range": [
      1892,
      1894
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1894,
    "end": 1895,
    "range": [
      1894,
      1895
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1896,
    "end": 1900,
    "range": [
      1896,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1904,
    "end": 1908,
    "range": [
      1904,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "T01",
    "start": 1909,
    "end": 1912,
    "range": [
      1909,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1913,
    "end": 1914,
    "range": [
      1913,
      1914
    ]
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 1915,
    "end": 1925,
    "range": [
      1915,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1930,
    "end": 1936,
    "range": [
      1930,
      1936
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1941,
    "end": 1947,
    "range": [
      1941,
      1947
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1949,
    "end": 1952,
    "range": [
      1949,
      1952
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1955,
    "end": 1962,
    "range": [
      1955,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1966,
    "end": 1968,
    "range": [
      1966,
      1968
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1969,
    "end": 1973,
    "range": [
      1969,
      1973
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1974,
    "end": 1975,
    "range": [
      1974,
      1975
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1976,
    "end": 1980,
    "range": [
      1976,
      1980
    ]
  },
  {
    "type": "Identifier",
    "value": "T02",
    "start": 1981,
    "end": 1984,
    "range": [
      1981,
      1984
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 1987,
    "end": 1997,
    "range": [
      1987,
      1997
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1997,
    "end": 1998,
    "range": [
      1997,
      1998
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1998,
    "end": 1999,
    "range": [
      1998,
      1999
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1999,
    "end": 2002,
    "range": [
      1999,
      2002
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2002,
    "end": 2006,
    "range": [
      2002,
      2006
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
      2009
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2009,
    "end": 2015,
    "range": [
      2009,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2017,
    "end": 2023,
    "range": [
      2017,
      2023
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2025,
    "end": 2028,
    "range": [
      2025,
      2028
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2028,
    "end": 2035,
    "range": [
      2028,
      2035
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2035,
    "end": 2036,
    "range": [
      2035,
      2036
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2040,
    "end": 2042,
    "range": [
      2040,
      2042
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2043,
    "end": 2047,
    "range": [
      2043,
      2047
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2047,
    "end": 2048,
    "range": [
      2047,
      2048
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2048,
    "end": 2049,
    "range": [
      2048,
      2049
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2050,
    "end": 2054,
    "range": [
      2050,
      2054
    ]
  },
  {
    "type": "Identifier",
    "value": "T03",
    "start": 2055,
    "end": 2058,
    "range": [
      2055,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2059,
    "end": 2060,
    "range": [
      2059,
      2060
    ]
  },
  {
    "type": "Identifier",
    "value": "ConstructorParameters",
    "start": 2061,
    "end": 2082,
    "range": [
      2061,
      2082
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2083,
    "end": 2086,
    "range": [
      2083,
      2086
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2087,
    "end": 2088,
    "range": [
      2087,
      2088
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2089,
    "end": 2090,
    "range": [
      2089,
      2090
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2091,
    "end": 2097,
    "range": [
      2091,
      2097
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2100,
    "end": 2101,
    "range": [
      2100,
      2101
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2102,
    "end": 2108,
    "range": [
      2102,
      2108
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2110,
    "end": 2113,
    "range": [
      2110,
      2113
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2114,
    "end": 2115,
    "range": [
      2114,
      2115
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2116,
    "end": 2123,
    "range": [
      2116,
      2123
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2125,
    "end": 2126,
    "range": [
      2125,
      2126
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2127,
    "end": 2129,
    "range": [
      2127,
      2129
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2130,
    "end": 2134,
    "range": [
      2130,
      2134
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2134,
    "end": 2135,
    "range": [
      2134,
      2135
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2135,
    "end": 2136,
    "range": [
      2135,
      2136
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2137,
    "end": 2141,
    "range": [
      2137,
      2141
    ]
  },
  {
    "type": "Identifier",
    "value": "T04",
    "start": 2142,
    "end": 2145,
    "range": [
      2142,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Identifier",
    "value": "ConstructorParameters",
    "start": 2148,
    "end": 2169,
    "range": [
      2148,
      2169
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2169,
    "end": 2170,
    "range": [
      2169,
      2170
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2170,
    "end": 2173,
    "range": [
      2170,
      2173
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2174,
    "end": 2175,
    "range": [
      2174,
      2175
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2175,
    "end": 2178,
    "range": [
      2175,
      2178
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2178,
    "end": 2182,
    "range": [
      2178,
      2182
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2182,
    "end": 2183,
    "range": [
      2182,
      2183
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2184,
    "end": 2185,
    "range": [
      2184,
      2185
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2185,
    "end": 2191,
    "range": [
      2185,
      2191
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2191,
    "end": 2192,
    "range": [
      2191,
      2192
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2193,
    "end": 2199,
    "range": [
      2193,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2199,
    "end": 2200,
    "range": [
      2199,
      2200
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2201,
    "end": 2204,
    "range": [
      2201,
      2204
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2204,
    "end": 2211,
    "range": [
      2204,
      2211
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2211,
    "end": 2212,
    "range": [
      2211,
      2212
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2212,
    "end": 2213,
    "range": [
      2212,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2213,
    "end": 2214,
    "range": [
      2213,
      2214
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2214,
    "end": 2215,
    "range": [
      2214,
      2215
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2216,
    "end": 2218,
    "range": [
      2216,
      2218
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2219,
    "end": 2223,
    "range": [
      2219,
      2223
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2223,
    "end": 2224,
    "range": [
      2223,
      2224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2224,
    "end": 2225,
    "range": [
      2224,
      2225
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2226,
    "end": 2230,
    "range": [
      2226,
      2230
    ]
  },
  {
    "type": "Identifier",
    "value": "T05",
    "start": 2231,
    "end": 2234,
    "range": [
      2231,
      2234
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2234,
    "end": 2235,
    "range": [
      2234,
      2235
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2235,
    "end": 2236,
    "range": [
      2235,
      2236
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2237,
    "end": 2244,
    "range": [
      2237,
      2244
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2245,
    "end": 2248,
    "range": [
      2245,
      2248
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2248,
    "end": 2249,
    "range": [
      2248,
      2249
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2249,
    "end": 2250,
    "range": [
      2249,
      2250
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2250,
    "end": 2251,
    "range": [
      2250,
      2251
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2252,
    "end": 2253,
    "range": [
      2252,
      2253
    ]
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 2254,
    "end": 2264,
    "range": [
      2254,
      2264
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2265,
    "end": 2266,
    "range": [
      2265,
      2266
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2267,
    "end": 2268,
    "range": [
      2267,
      2268
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2269,
    "end": 2275,
    "range": [
      2269,
      2275
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2275,
    "end": 2276,
    "range": [
      2275,
      2276
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2277,
    "end": 2280,
    "range": [
      2277,
      2280
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2280,
    "end": 2284,
    "range": [
      2280,
      2284
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2284,
    "end": 2285,
    "range": [
      2284,
      2285
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
    "type": "Punctuator",
    "value": ")",
    "start": 2287,
    "end": 2288,
    "range": [
      2287,
      2288
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2289,
    "end": 2291,
    "range": [
      2289,
      2291
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2292,
    "end": 2296,
    "range": [
      2292,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2297,
    "end": 2298,
    "range": [
      2297,
      2298
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2299,
    "end": 2303,
    "range": [
      2299,
      2303
    ]
  },
  {
    "type": "Identifier",
    "value": "T06",
    "start": 2304,
    "end": 2307,
    "range": [
      2304,
      2307
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2308,
    "end": 2309,
    "range": [
      2308,
      2309
    ]
  },
  {
    "type": "Identifier",
    "value": "T05",
    "start": 2310,
    "end": 2313,
    "range": [
      2310,
      2313
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2313,
    "end": 2314,
    "range": [
      2313,
      2314
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2314,
    "end": 2315,
    "range": [
      2314,
      2315
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2315,
    "end": 2321,
    "range": [
      2315,
      2321
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2321,
    "end": 2322,
    "range": [
      2321,
      2322
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2323,
    "end": 2326,
    "range": [
      2323,
      2326
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2326,
    "end": 2333,
    "range": [
      2326,
      2333
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2333,
    "end": 2334,
    "range": [
      2333,
      2334
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2334,
    "end": 2335,
    "range": [
      2334,
      2335
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2335,
    "end": 2336,
    "range": [
      2335,
      2336
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2337,
    "end": 2338,
    "range": [
      2337,
      2338
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2340,
    "end": 2344,
    "range": [
      2340,
      2344
    ]
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 2345,
    "end": 2347,
    "range": [
      2345,
      2347
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2347,
    "end": 2348,
    "range": [
      2347,
      2348
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2348,
    "end": 2349,
    "range": [
      2348,
      2349
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2350,
    "end": 2357,
    "range": [
      2350,
      2357
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 2358,
    "end": 2366,
    "range": [
      2358,
      2366
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2366,
    "end": 2367,
    "range": [
      2366,
      2367
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2368,
    "end": 2369,
    "range": [
      2368,
      2369
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2370,
    "end": 2371,
    "range": [
      2370,
      2371
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2372,
    "end": 2379,
    "range": [
      2372,
      2379
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2380,
    "end": 2381,
    "range": [
      2380,
      2381
    ]
  },
  {
    "type": "Identifier",
    "value": "head",
    "start": 2381,
    "end": 2385,
    "range": [
      2381,
      2385
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2385,
    "end": 2386,
    "range": [
      2385,
      2386
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2387,
    "end": 2392,
    "range": [
      2387,
      2392
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2393,
    "end": 2394,
    "range": [
      2393,
      2394
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2394,
    "end": 2395,
    "range": [
      2394,
      2395
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2396,
    "end": 2399,
    "range": [
      2396,
      2399
    ]
  },
  {
    "type": "Identifier",
    "value": "tail",
    "start": 2399,
    "end": 2403,
    "range": [
      2399,
      2403
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2403,
    "end": 2404,
    "range": [
      2403,
      2404
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2405,
    "end": 2410,
    "range": [
      2405,
      2410
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2411,
    "end": 2412,
    "range": [
      2411,
      2412
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2412,
    "end": 2413,
    "range": [
      2412,
      2413
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2414,
    "end": 2416,
    "range": [
      2414,
      2416
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2417,
    "end": 2420,
    "range": [
      2417,
      2420
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2423,
    "end": 2424,
    "range": [
      2423,
      2424
    ]
  },
  {
    "type": "Identifier",
    "value": "head",
    "start": 2425,
    "end": 2429,
    "range": [
      2425,
      2429
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2429,
    "end": 2430,
    "range": [
      2429,
      2430
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2431,
    "end": 2432,
    "range": [
      2431,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Identifier",
    "value": "tail",
    "start": 2434,
    "end": 2438,
    "range": [
      2434,
      2438
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2438,
    "end": 2439,
    "range": [
      2438,
      2439
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2440,
    "end": 2441,
    "range": [
      2440,
      2441
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2442,
    "end": 2443,
    "range": [
      2442,
      2443
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2444,
    "end": 2445,
    "range": [
      2444,
      2445
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2446,
    "end": 2449,
    "range": [
      2446,
      2449
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2449,
    "end": 2450,
    "range": [
      2449,
      2450
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2450,
    "end": 2451,
    "range": [
      2450,
      2451
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2451,
    "end": 2452,
    "range": [
      2451,
      2452
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2454,
    "end": 2458,
    "range": [
      2454,
      2458
    ]
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 2459,
    "end": 2462,
    "range": [
      2459,
      2462
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2463,
    "end": 2464,
    "range": [
      2463,
      2464
    ]
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 2465,
    "end": 2467,
    "range": [
      2465,
      2467
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2467,
    "end": 2468,
    "range": [
      2467,
      2468
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2468,
    "end": 2469,
    "range": [
      2468,
      2469
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2469,
    "end": 2470,
    "range": [
      2469,
      2470
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2470,
    "end": 2471,
    "range": [
      2470,
      2471
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2472,
    "end": 2478,
    "range": [
      2472,
      2478
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2478,
    "end": 2479,
    "range": [
      2478,
      2479
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2480,
    "end": 2481,
    "range": [
      2480,
      2481
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2481,
    "end": 2482,
    "range": [
      2481,
      2482
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2483,
    "end": 2489,
    "range": [
      2483,
      2489
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2489,
    "end": 2490,
    "range": [
      2489,
      2490
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2491,
    "end": 2494,
    "range": [
      2491,
      2494
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2494,
    "end": 2495,
    "range": [
      2494,
      2495
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2495,
    "end": 2496,
    "range": [
      2495,
      2496
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2497,
    "end": 2504,
    "range": [
      2497,
      2504
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2504,
    "end": 2505,
    "range": [
      2504,
      2505
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2505,
    "end": 2506,
    "range": [
      2505,
      2506
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2506,
    "end": 2507,
    "range": [
      2506,
      2507
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2508,
    "end": 2510,
    "range": [
      2508,
      2510
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2511,
    "end": 2515,
    "range": [
      2511,
      2515
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2515,
    "end": 2516,
    "range": [
      2515,
      2516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2516,
    "end": 2517,
    "range": [
      2516,
      2517
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2518,
    "end": 2522,
    "range": [
      2518,
      2522
    ]
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 2523,
    "end": 2526,
    "range": [
      2523,
      2526
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2527,
    "end": 2528,
    "range": [
      2527,
      2528
    ]
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 2529,
    "end": 2531,
    "range": [
      2529,
      2531
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2531,
    "end": 2532,
    "range": [
      2531,
      2532
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2532,
    "end": 2533,
    "range": [
      2532,
      2533
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2533,
    "end": 2536,
    "range": [
      2533,
      2536
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2536,
    "end": 2537,
    "range": [
      2536,
      2537
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2537,
    "end": 2538,
    "range": [
      2537,
      2538
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2539,
    "end": 2545,
    "range": [
      2539,
      2545
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2545,
    "end": 2546,
    "range": [
      2545,
      2546
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2546,
    "end": 2547,
    "range": [
      2546,
      2547
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2547,
    "end": 2548,
    "range": [
      2547,
      2548
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2549,
    "end": 2551,
    "range": [
      2549,
      2551
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2552,
    "end": 2556,
    "range": [
      2552,
      2556
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2556,
    "end": 2557,
    "range": [
      2556,
      2557
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2557,
    "end": 2558,
    "range": [
      2557,
      2558
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2559,
    "end": 2563,
    "range": [
      2559,
      2563
    ]
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 2564,
    "end": 2567,
    "range": [
      2564,
      2567
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2568,
    "end": 2569,
    "range": [
      2568,
      2569
    ]
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 2570,
    "end": 2572,
    "range": [
      2570,
      2572
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2572,
    "end": 2573,
    "range": [
      2572,
      2573
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2573,
    "end": 2574,
    "range": [
      2573,
      2574
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2574,
    "end": 2575,
    "range": [
      2574,
      2575
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2575,
    "end": 2576,
    "range": [
      2575,
      2576
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2577,
    "end": 2583,
    "range": [
      2577,
      2583
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2583,
    "end": 2584,
    "range": [
      2583,
      2584
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2585,
    "end": 2586,
    "range": [
      2585,
      2586
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2586,
    "end": 2587,
    "range": [
      2586,
      2587
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2588,
    "end": 2594,
    "range": [
      2588,
      2594
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2594,
    "end": 2595,
    "range": [
      2594,
      2595
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2596,
    "end": 2598,
    "range": [
      2596,
      2598
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2599,
    "end": 2603,
    "range": [
      2599,
      2603
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2603,
    "end": 2604,
    "range": [
      2603,
      2604
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2604,
    "end": 2605,
    "range": [
      2604,
      2605
    ]
  }
]
```
