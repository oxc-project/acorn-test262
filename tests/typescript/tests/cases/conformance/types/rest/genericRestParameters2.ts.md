__ESTREE_TEST__:PASS:
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
