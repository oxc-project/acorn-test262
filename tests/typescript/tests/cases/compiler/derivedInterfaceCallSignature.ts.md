__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D3SvgPath",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 33,
                    "end": 36
                  },
                  "start": 31,
                  "end": 36
                },
                "start": 27,
                "end": 36
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 46,
                    "end": 52
                  },
                  "start": 44,
                  "end": 52
                },
                "start": 38,
                "end": 52
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 55,
                "end": 61
              },
              "start": 53,
              "end": 61
            },
            "start": 26,
            "end": 62
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 80,
                        "end": 83
                      },
                      "start": 78,
                      "end": 83
                    },
                    "start": 74,
                    "end": 83
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 93,
                        "end": 99
                      },
                      "start": 91,
                      "end": 99
                    },
                    "start": 85,
                    "end": 99
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 104,
                    "end": 110
                  },
                  "start": 101,
                  "end": 110
                },
                "start": 73,
                "end": 110
              },
              "start": 71,
              "end": 110
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 68,
            "end": 111
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 128,
                        "end": 131
                      },
                      "start": 126,
                      "end": 131
                    },
                    "start": 122,
                    "end": 131
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 141,
                        "end": 147
                      },
                      "start": 139,
                      "end": 147
                    },
                    "start": 133,
                    "end": 147
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 152,
                    "end": 158
                  },
                  "start": 149,
                  "end": 158
                },
                "start": 121,
                "end": 158
              },
              "start": 119,
              "end": 158
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 116,
            "end": 159
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "interpolate",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 175
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 164,
            "end": 186
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tension",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 198
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 202,
                "end": 208
              },
              "start": 200,
              "end": 208
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 191,
            "end": 209
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defined",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 221
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 232,
                        "end": 235
                      },
                      "start": 230,
                      "end": 235
                    },
                    "start": 226,
                    "end": 235
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 245,
                        "end": 251
                      },
                      "start": 243,
                      "end": 251
                    },
                    "start": 237,
                    "end": 251
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 256,
                    "end": 263
                  },
                  "start": 253,
                  "end": 263
                },
                "start": 225,
                "end": 263
              },
              "start": 223,
              "end": 263
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 214,
            "end": 264
          }
        ],
        "start": 20,
        "end": 266
      },
      "declare": false,
      "start": 0,
      "end": 266
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D3SvgArea",
        "optional": false,
        "typeAnnotation": null,
        "start": 278,
        "end": 287
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "D3SvgPath",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 305
          },
          "typeArguments": null,
          "start": 296,
          "end": 305
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 313
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 324,
                            "end": 327
                          },
                          "start": 322,
                          "end": 327
                        },
                        "start": 318,
                        "end": 327
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 337,
                            "end": 343
                          },
                          "start": 335,
                          "end": 343
                        },
                        "start": 329,
                        "end": 343
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 348,
                        "end": 354
                      },
                      "start": 345,
                      "end": 354
                    },
                    "start": 317,
                    "end": 354
                  },
                  "start": 315,
                  "end": 354
                },
                "start": 314,
                "end": 354
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 357,
                  "end": 366
                },
                "typeArguments": null,
                "start": 357,
                "end": 366
              },
              "start": 355,
              "end": 366
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 312,
            "end": 367
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 373
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 384,
                            "end": 387
                          },
                          "start": 382,
                          "end": 387
                        },
                        "start": 378,
                        "end": 387
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 397,
                            "end": 403
                          },
                          "start": 395,
                          "end": 403
                        },
                        "start": 389,
                        "end": 403
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 408,
                        "end": 414
                      },
                      "start": 405,
                      "end": 414
                    },
                    "start": 377,
                    "end": 414
                  },
                  "start": 375,
                  "end": 414
                },
                "start": 374,
                "end": 414
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 426
                },
                "typeArguments": null,
                "start": 417,
                "end": 426
              },
              "start": 415,
              "end": 426
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 372,
            "end": 427
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y0",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 434
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 445,
                        "end": 448
                      },
                      "start": 443,
                      "end": 448
                    },
                    "start": 439,
                    "end": 448
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 458,
                        "end": 464
                      },
                      "start": 456,
                      "end": 464
                    },
                    "start": 450,
                    "end": 464
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 469,
                    "end": 475
                  },
                  "start": 466,
                  "end": 475
                },
                "start": 438,
                "end": 475
              },
              "start": 436,
              "end": 475
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 432,
            "end": 476
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y0",
              "optional": false,
              "typeAnnotation": null,
              "start": 481,
              "end": 483
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 487,
                    "end": 493
                  },
                  "start": 485,
                  "end": 493
                },
                "start": 484,
                "end": 493
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 505
                },
                "typeArguments": null,
                "start": 496,
                "end": 505
              },
              "start": 494,
              "end": 505
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 481,
            "end": 506
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y0",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 513
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 524,
                            "end": 527
                          },
                          "start": 522,
                          "end": 527
                        },
                        "start": 518,
                        "end": 527
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 537,
                            "end": 543
                          },
                          "start": 535,
                          "end": 543
                        },
                        "start": 529,
                        "end": 543
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 548,
                        "end": 554
                      },
                      "start": 545,
                      "end": 554
                    },
                    "start": 517,
                    "end": 554
                  },
                  "start": 515,
                  "end": 554
                },
                "start": 514,
                "end": 554
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 557,
                  "end": 566
                },
                "typeArguments": null,
                "start": 557,
                "end": 566
              },
              "start": 555,
              "end": 566
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 511,
            "end": 567
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 572,
              "end": 574
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 585,
                        "end": 588
                      },
                      "start": 583,
                      "end": 588
                    },
                    "start": 579,
                    "end": 588
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 598,
                        "end": 604
                      },
                      "start": 596,
                      "end": 604
                    },
                    "start": 590,
                    "end": 604
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 609,
                    "end": 615
                  },
                  "start": 606,
                  "end": 615
                },
                "start": 578,
                "end": 615
              },
              "start": 576,
              "end": 615
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 572,
            "end": 616
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 623
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 627,
                    "end": 633
                  },
                  "start": 625,
                  "end": 633
                },
                "start": 624,
                "end": 633
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 636,
                  "end": 645
                },
                "typeArguments": null,
                "start": 636,
                "end": 645
              },
              "start": 634,
              "end": 645
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 621,
            "end": 646
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 651,
              "end": 653
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 664,
                            "end": 667
                          },
                          "start": 662,
                          "end": 667
                        },
                        "start": 658,
                        "end": 667
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 677,
                            "end": 683
                          },
                          "start": 675,
                          "end": 683
                        },
                        "start": 669,
                        "end": 683
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 688,
                        "end": 694
                      },
                      "start": 685,
                      "end": 694
                    },
                    "start": 657,
                    "end": 694
                  },
                  "start": 655,
                  "end": 694
                },
                "start": 654,
                "end": 694
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 697,
                  "end": 706
                },
                "typeArguments": null,
                "start": 697,
                "end": 706
              },
              "start": 695,
              "end": 706
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 651,
            "end": 707
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "interpolate",
              "optional": false,
              "typeAnnotation": null,
              "start": 713,
              "end": 724
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "interpolator",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 739,
                    "end": 745
                  },
                  "start": 737,
                  "end": 745
                },
                "start": 725,
                "end": 745
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 748,
                  "end": 757
                },
                "typeArguments": null,
                "start": 748,
                "end": 757
              },
              "start": 746,
              "end": 757
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 713,
            "end": 758
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tension",
              "optional": false,
              "typeAnnotation": null,
              "start": 763,
              "end": 770
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "tension",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 780,
                    "end": 786
                  },
                  "start": 778,
                  "end": 786
                },
                "start": 771,
                "end": 786
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 789,
                  "end": 798
                },
                "typeArguments": null,
                "start": 789,
                "end": 798
              },
              "start": 787,
              "end": 798
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 763,
            "end": 799
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defined",
              "optional": false,
              "typeAnnotation": null,
              "start": 804,
              "end": 811
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "defined",
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 828,
                            "end": 831
                          },
                          "start": 826,
                          "end": 831
                        },
                        "start": 822,
                        "end": 831
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 841,
                            "end": 847
                          },
                          "start": 839,
                          "end": 847
                        },
                        "start": 833,
                        "end": 847
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 852,
                        "end": 859
                      },
                      "start": 849,
                      "end": 859
                    },
                    "start": 821,
                    "end": 859
                  },
                  "start": 819,
                  "end": 859
                },
                "start": 812,
                "end": 859
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 862,
                  "end": 871
                },
                "typeArguments": null,
                "start": 862,
                "end": 871
              },
              "start": 860,
              "end": 871
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 804,
            "end": 872
          }
        ],
        "start": 306,
        "end": 874
      },
      "declare": false,
      "start": 268,
      "end": 874
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "area",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 886,
                  "end": 895
                },
                "typeArguments": null,
                "start": 886,
                "end": 895
              },
              "start": 884,
              "end": 895
            },
            "start": 880,
            "end": 895
          },
          "init": null,
          "definite": false,
          "start": 880,
          "end": 895
        }
      ],
      "declare": false,
      "start": 876,
      "end": 896
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "area",
              "optional": false,
              "typeAnnotation": null,
              "start": 897,
              "end": 901
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "interpolate",
              "optional": false,
              "typeAnnotation": null,
              "start": 902,
              "end": 913
            },
            "optional": false,
            "computed": false,
            "start": 897,
            "end": 913
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "two",
              "raw": "'two'",
              "start": 914,
              "end": 919
            }
          ],
          "optional": false,
          "start": 897,
          "end": 920
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "one",
            "raw": "'one'",
            "start": 921,
            "end": 926
          }
        ],
        "optional": false,
        "start": 897,
        "end": 927
      },
      "directive": null,
      "start": 897,
      "end": 928
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 928
}
```
