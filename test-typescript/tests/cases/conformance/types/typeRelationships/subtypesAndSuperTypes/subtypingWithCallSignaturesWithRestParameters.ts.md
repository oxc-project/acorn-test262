__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 3344,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 102,
      "end": 325,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 116,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 117,
        "end": 325,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 124,
            "end": 157,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 156,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 127,
                "end": 156,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 128,
                    "end": 145,
                    "argument": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 135,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 135,
                      "end": 145,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 137,
                        "end": 145,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 137,
                          "end": 143
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 147,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 150,
                    "end": 156
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 162,
            "end": 204,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 164,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 203,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 166,
                "end": 203,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 167,
                    "end": 176,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 168,
                      "end": 176,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 170,
                        "end": 176
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 178,
                    "end": 192,
                    "argument": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 182,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 182,
                      "end": 192,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 184,
                        "end": 192,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 184,
                          "end": 190
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 194,
                  "end": 203,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 197,
                    "end": 203
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 209,
            "end": 263,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 211,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 262,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 213,
                "end": 262,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 214,
                    "end": 223,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 215,
                      "end": 223,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 217,
                        "end": 223
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 225,
                    "end": 235,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 227,
                      "end": 235,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 229,
                        "end": 235
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  {
                    "type": "RestElement",
                    "start": 237,
                    "end": 251,
                    "argument": {
                      "type": "Identifier",
                      "start": 240,
                      "end": 241,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 241,
                      "end": 251,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 243,
                        "end": 251,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 243,
                          "end": 249
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 253,
                  "end": 262,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 256,
                    "end": 262
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 268,
            "end": 323,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 270,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 270,
              "end": 322,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 272,
                "end": 322,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 273,
                    "end": 283,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 275,
                      "end": 283,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 277,
                        "end": 283
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  {
                    "type": "Identifier",
                    "start": 285,
                    "end": 295,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 287,
                      "end": 295,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 289,
                        "end": 295
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  {
                    "type": "RestElement",
                    "start": 297,
                    "end": 311,
                    "argument": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 301,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 301,
                      "end": 311,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 303,
                        "end": 311,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 303,
                          "end": 309
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 313,
                  "end": 322,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 316,
                    "end": 322
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 327,
      "end": 415,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 339,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 348,
          "end": 352,
          "expression": {
            "type": "Identifier",
            "start": 348,
            "end": 352,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 353,
        "end": 415,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 359,
            "end": 375,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 359,
              "end": 360,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 360,
              "end": 374,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 362,
                "end": 374,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 365,
                  "end": 374,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 368,
                    "end": 374
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 417,
      "end": 523,
      "id": {
        "type": "Identifier",
        "start": 427,
        "end": 430,
        "name": "I1B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 439,
          "end": 443,
          "expression": {
            "type": "Identifier",
            "start": 439,
            "end": 443,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 444,
        "end": 523,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 450,
            "end": 483,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 450,
              "end": 451,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 451,
              "end": 482,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 453,
                "end": 482,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 454,
                    "end": 471,
                    "argument": {
                      "type": "Identifier",
                      "start": 457,
                      "end": 461,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 461,
                      "end": 471,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 463,
                        "end": 471,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 463,
                          "end": 469
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 473,
                  "end": 482,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 476,
                    "end": 482
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 525,
      "end": 617,
      "id": {
        "type": "Identifier",
        "start": 535,
        "end": 538,
        "name": "I1C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 547,
          "end": 551,
          "expression": {
            "type": "Identifier",
            "start": 547,
            "end": 551,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 552,
        "end": 617,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 558,
            "end": 591,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 558,
              "end": 559,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 559,
              "end": 590,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 561,
                "end": 590,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 562,
                    "end": 579,
                    "argument": {
                      "type": "Identifier",
                      "start": 565,
                      "end": 569,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 569,
                      "end": 579,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 571,
                        "end": 579,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 571,
                          "end": 577
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 581,
                  "end": 590,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 584,
                    "end": 590
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 619,
      "end": 717,
      "id": {
        "type": "Identifier",
        "start": 629,
        "end": 631,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 640,
          "end": 644,
          "expression": {
            "type": "Identifier",
            "start": 640,
            "end": 644,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 645,
        "end": 717,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 651,
            "end": 677,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 651,
              "end": 652,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 652,
              "end": 676,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 654,
                "end": 676,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 655,
                    "end": 665,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 657,
                      "end": 665,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 659,
                        "end": 665
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 667,
                  "end": 676,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 670,
                    "end": 676
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 719,
      "end": 842,
      "id": {
        "type": "Identifier",
        "start": 729,
        "end": 732,
        "name": "I2B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 741,
          "end": 745,
          "expression": {
            "type": "Identifier",
            "start": 741,
            "end": 745,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 746,
        "end": 842,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 752,
            "end": 802,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 752,
              "end": 753,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 753,
              "end": 801,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 755,
                "end": 801,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 756,
                    "end": 766,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 758,
                      "end": 766,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 760,
                        "end": 766
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  {
                    "type": "Identifier",
                    "start": 768,
                    "end": 778,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 770,
                      "end": 778,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 772,
                        "end": 778
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  {
                    "type": "Identifier",
                    "start": 780,
                    "end": 790,
                    "name": "z",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 782,
                      "end": 790,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 784,
                        "end": 790
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 792,
                  "end": 801,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 795,
                    "end": 801
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 844,
      "end": 935,
      "id": {
        "type": "Identifier",
        "start": 854,
        "end": 856,
        "name": "I3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 865,
          "end": 869,
          "expression": {
            "type": "Identifier",
            "start": 865,
            "end": 869,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 870,
        "end": 935,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 876,
            "end": 901,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 876,
              "end": 877,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 877,
              "end": 900,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 879,
                "end": 900,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 880,
                    "end": 889,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 881,
                      "end": 889,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 883,
                        "end": 889
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 891,
                  "end": 900,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 894,
                    "end": 900
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 937,
      "end": 1026,
      "id": {
        "type": "Identifier",
        "start": 947,
        "end": 950,
        "name": "I3B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 959,
          "end": 963,
          "expression": {
            "type": "Identifier",
            "start": 959,
            "end": 963,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 964,
        "end": 1026,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 970,
            "end": 996,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 970,
              "end": 971,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 971,
              "end": 995,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 973,
                "end": 995,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 974,
                    "end": 984,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 976,
                      "end": 984,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 978,
                        "end": 984
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 986,
                  "end": 995,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 989,
                    "end": 995
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1030,
      "end": 1110,
      "id": {
        "type": "Identifier",
        "start": 1040,
        "end": 1042,
        "name": "I4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1051,
          "end": 1055,
          "expression": {
            "type": "Identifier",
            "start": 1051,
            "end": 1055,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1056,
        "end": 1110,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1062,
            "end": 1079,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1062,
              "end": 1064,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1064,
              "end": 1078,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1066,
                "end": 1078,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1069,
                  "end": 1078,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1072,
                    "end": 1078
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1112,
      "end": 1210,
      "id": {
        "type": "Identifier",
        "start": 1122,
        "end": 1125,
        "name": "I4B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1134,
          "end": 1138,
          "expression": {
            "type": "Identifier",
            "start": 1134,
            "end": 1138,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1139,
        "end": 1210,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1145,
            "end": 1179,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1145,
              "end": 1147,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1147,
              "end": 1178,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1149,
                "end": 1178,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 1150,
                    "end": 1167,
                    "argument": {
                      "type": "Identifier",
                      "start": 1153,
                      "end": 1157,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1157,
                      "end": 1167,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1159,
                        "end": 1167,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1159,
                          "end": 1165
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1169,
                  "end": 1178,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1172,
                    "end": 1178
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1212,
      "end": 1302,
      "id": {
        "type": "Identifier",
        "start": 1222,
        "end": 1224,
        "name": "I5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1233,
          "end": 1237,
          "expression": {
            "type": "Identifier",
            "start": 1233,
            "end": 1237,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1238,
        "end": 1302,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1244,
            "end": 1271,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1244,
              "end": 1246,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1246,
              "end": 1270,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1248,
                "end": 1270,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1249,
                    "end": 1259,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1251,
                      "end": 1259,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1253,
                        "end": 1259
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1261,
                  "end": 1270,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1264,
                    "end": 1270
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1304,
      "end": 1402,
      "id": {
        "type": "Identifier",
        "start": 1314,
        "end": 1316,
        "name": "I6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1325,
          "end": 1329,
          "expression": {
            "type": "Identifier",
            "start": 1325,
            "end": 1329,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1330,
        "end": 1402,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1336,
            "end": 1362,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1336,
              "end": 1338,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1338,
              "end": 1361,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1340,
                "end": 1361,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1341,
                    "end": 1350,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1342,
                      "end": 1350,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1344,
                        "end": 1350
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1352,
                  "end": 1361,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1355,
                    "end": 1361
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1404,
      "end": 1522,
      "id": {
        "type": "Identifier",
        "start": 1414,
        "end": 1417,
        "name": "I6B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1426,
          "end": 1430,
          "expression": {
            "type": "Identifier",
            "start": 1426,
            "end": 1430,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1431,
        "end": 1522,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1437,
            "end": 1482,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1437,
              "end": 1439,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1439,
              "end": 1481,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1441,
                "end": 1481,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1442,
                    "end": 1451,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1443,
                      "end": 1451,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1445,
                        "end": 1451
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 1453,
                    "end": 1470,
                    "argument": {
                      "type": "Identifier",
                      "start": 1456,
                      "end": 1460,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1460,
                      "end": 1470,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1462,
                        "end": 1470,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1462,
                          "end": 1468
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1472,
                  "end": 1481,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1475,
                    "end": 1481
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1524,
      "end": 1613,
      "id": {
        "type": "Identifier",
        "start": 1534,
        "end": 1537,
        "name": "I6C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1546,
          "end": 1550,
          "expression": {
            "type": "Identifier",
            "start": 1546,
            "end": 1550,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1551,
        "end": 1613,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1557,
            "end": 1602,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1557,
              "end": 1559,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1559,
              "end": 1601,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1561,
                "end": 1601,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1562,
                    "end": 1571,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1563,
                      "end": 1571,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1565,
                        "end": 1571
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 1573,
                    "end": 1590,
                    "argument": {
                      "type": "Identifier",
                      "start": 1576,
                      "end": 1580,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1580,
                      "end": 1590,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1582,
                        "end": 1590,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1582,
                          "end": 1588
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1592,
                  "end": 1601,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1595,
                    "end": 1601
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1615,
      "end": 1719,
      "id": {
        "type": "Identifier",
        "start": 1625,
        "end": 1628,
        "name": "I6D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1637,
          "end": 1641,
          "expression": {
            "type": "Identifier",
            "start": 1637,
            "end": 1641,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1642,
        "end": 1719,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1648,
            "end": 1685,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1648,
              "end": 1650,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1650,
              "end": 1684,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1652,
                "end": 1684,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1653,
                    "end": 1662,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1654,
                      "end": 1662,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1656,
                        "end": 1662
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1664,
                    "end": 1673,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1665,
                      "end": 1673,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1667,
                        "end": 1673
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1675,
                  "end": 1684,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1678,
                    "end": 1684
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1721,
      "end": 1832,
      "id": {
        "type": "Identifier",
        "start": 1731,
        "end": 1734,
        "name": "I6E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1743,
          "end": 1747,
          "expression": {
            "type": "Identifier",
            "start": 1743,
            "end": 1747,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1748,
        "end": 1832,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1754,
            "end": 1792,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1754,
              "end": 1756,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1756,
              "end": 1791,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1758,
                "end": 1791,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1759,
                    "end": 1768,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1760,
                      "end": 1768,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1762,
                        "end": 1768
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1770,
                    "end": 1780,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1772,
                      "end": 1780,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1774,
                        "end": 1780
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1782,
                  "end": 1791,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1785,
                    "end": 1791
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1836,
      "end": 1916,
      "id": {
        "type": "Identifier",
        "start": 1846,
        "end": 1848,
        "name": "I7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1857,
          "end": 1861,
          "expression": {
            "type": "Identifier",
            "start": 1857,
            "end": 1861,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1862,
        "end": 1916,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1868,
            "end": 1885,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1868,
              "end": 1870,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1870,
              "end": 1884,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1872,
                "end": 1884,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1875,
                  "end": 1884,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1878,
                    "end": 1884
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1918,
      "end": 2008,
      "id": {
        "type": "Identifier",
        "start": 1928,
        "end": 1930,
        "name": "I8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1939,
          "end": 1943,
          "expression": {
            "type": "Identifier",
            "start": 1939,
            "end": 1943,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1944,
        "end": 2008,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1950,
            "end": 1977,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1950,
              "end": 1952,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1952,
              "end": 1976,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1954,
                "end": 1976,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1955,
                    "end": 1965,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1957,
                      "end": 1965,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1959,
                        "end": 1965
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1967,
                  "end": 1976,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1970,
                    "end": 1976
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2010,
      "end": 2108,
      "id": {
        "type": "Identifier",
        "start": 2020,
        "end": 2022,
        "name": "I9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2031,
          "end": 2035,
          "expression": {
            "type": "Identifier",
            "start": 2031,
            "end": 2035,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2036,
        "end": 2108,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2042,
            "end": 2068,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2042,
              "end": 2044,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2044,
              "end": 2067,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2046,
                "end": 2067,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2047,
                    "end": 2056,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2048,
                      "end": 2056,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2050,
                        "end": 2056
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2058,
                  "end": 2067,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2061,
                    "end": 2067
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2110,
      "end": 2215,
      "id": {
        "type": "Identifier",
        "start": 2120,
        "end": 2123,
        "name": "I10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2132,
          "end": 2136,
          "expression": {
            "type": "Identifier",
            "start": 2132,
            "end": 2136,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2137,
        "end": 2215,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2143,
            "end": 2180,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2143,
              "end": 2145,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2145,
              "end": 2179,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2147,
                "end": 2179,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2148,
                    "end": 2157,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2149,
                      "end": 2157,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2151,
                        "end": 2157
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2159,
                    "end": 2168,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2160,
                      "end": 2168,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2162,
                        "end": 2168
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2170,
                  "end": 2179,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2173,
                    "end": 2179
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2217,
      "end": 2313,
      "id": {
        "type": "Identifier",
        "start": 2227,
        "end": 2231,
        "name": "I10B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2240,
          "end": 2244,
          "expression": {
            "type": "Identifier",
            "start": 2240,
            "end": 2244,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2245,
        "end": 2313,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2251,
            "end": 2301,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2251,
              "end": 2253,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2253,
              "end": 2300,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2255,
                "end": 2300,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2256,
                    "end": 2265,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2257,
                      "end": 2265,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2259,
                        "end": 2265
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2267,
                    "end": 2277,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2269,
                      "end": 2277,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2271,
                        "end": 2277
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  {
                    "type": "Identifier",
                    "start": 2279,
                    "end": 2289,
                    "name": "z",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2281,
                      "end": 2289,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2283,
                        "end": 2289
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2291,
                  "end": 2300,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2294,
                    "end": 2300
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2315,
      "end": 2403,
      "id": {
        "type": "Identifier",
        "start": 2325,
        "end": 2329,
        "name": "I10C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2338,
          "end": 2342,
          "expression": {
            "type": "Identifier",
            "start": 2338,
            "end": 2342,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2343,
        "end": 2403,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2349,
            "end": 2391,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2349,
              "end": 2351,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2351,
              "end": 2390,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2353,
                "end": 2390,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2354,
                    "end": 2363,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2355,
                      "end": 2363,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2357,
                        "end": 2363
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 2365,
                    "end": 2379,
                    "argument": {
                      "type": "Identifier",
                      "start": 2368,
                      "end": 2369,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2369,
                      "end": 2379,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2371,
                        "end": 2379,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 2371,
                          "end": 2377
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2381,
                  "end": 2390,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2384,
                    "end": 2390
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2405,
      "end": 2521,
      "id": {
        "type": "Identifier",
        "start": 2415,
        "end": 2419,
        "name": "I10D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2428,
          "end": 2432,
          "expression": {
            "type": "Identifier",
            "start": 2428,
            "end": 2432,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2433,
        "end": 2521,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2439,
            "end": 2489,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2439,
              "end": 2441,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2441,
              "end": 2488,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2443,
                "end": 2488,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2444,
                    "end": 2453,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2445,
                      "end": 2453,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2447,
                        "end": 2453
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2455,
                    "end": 2465,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2457,
                      "end": 2465,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2459,
                        "end": 2465
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  {
                    "type": "Identifier",
                    "start": 2467,
                    "end": 2477,
                    "name": "z",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2469,
                      "end": 2477,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2471,
                        "end": 2477
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2479,
                  "end": 2488,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2482,
                    "end": 2488
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2523,
      "end": 2611,
      "id": {
        "type": "Identifier",
        "start": 2533,
        "end": 2537,
        "name": "I10E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2546,
          "end": 2550,
          "expression": {
            "type": "Identifier",
            "start": 2546,
            "end": 2550,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2551,
        "end": 2611,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2557,
            "end": 2599,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2557,
              "end": 2559,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2559,
              "end": 2598,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2561,
                "end": 2598,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2562,
                    "end": 2571,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2563,
                      "end": 2571,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2565,
                        "end": 2571
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 2573,
                    "end": 2587,
                    "argument": {
                      "type": "Identifier",
                      "start": 2576,
                      "end": 2577,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2577,
                      "end": 2587,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2579,
                        "end": 2587,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 2579,
                          "end": 2585
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2589,
                  "end": 2598,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2592,
                    "end": 2598
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2613,
      "end": 2694,
      "id": {
        "type": "Identifier",
        "start": 2623,
        "end": 2626,
        "name": "I11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2635,
          "end": 2639,
          "expression": {
            "type": "Identifier",
            "start": 2635,
            "end": 2639,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2640,
        "end": 2694,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2646,
            "end": 2663,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2646,
              "end": 2648,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2648,
              "end": 2662,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2650,
                "end": 2662,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2653,
                  "end": 2662,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2656,
                    "end": 2662
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2696,
      "end": 2794,
      "id": {
        "type": "Identifier",
        "start": 2706,
        "end": 2709,
        "name": "I12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2718,
          "end": 2722,
          "expression": {
            "type": "Identifier",
            "start": 2718,
            "end": 2722,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2723,
        "end": 2794,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2729,
            "end": 2768,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2729,
              "end": 2731,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2731,
              "end": 2767,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2733,
                "end": 2767,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2734,
                    "end": 2744,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2736,
                      "end": 2744,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2738,
                        "end": 2744
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  {
                    "type": "Identifier",
                    "start": 2746,
                    "end": 2756,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2748,
                      "end": 2756,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2750,
                        "end": 2756
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2758,
                  "end": 2767,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2761,
                    "end": 2767
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2796,
      "end": 2889,
      "id": {
        "type": "Identifier",
        "start": 2806,
        "end": 2809,
        "name": "I13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2818,
          "end": 2822,
          "expression": {
            "type": "Identifier",
            "start": 2818,
            "end": 2822,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2823,
        "end": 2889,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2829,
            "end": 2855,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2829,
              "end": 2831,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2831,
              "end": 2854,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2833,
                "end": 2854,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2834,
                    "end": 2843,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2835,
                      "end": 2843,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2837,
                        "end": 2843
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2845,
                  "end": 2854,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2848,
                    "end": 2854
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2891,
      "end": 3006,
      "id": {
        "type": "Identifier",
        "start": 2901,
        "end": 2904,
        "name": "I14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2913,
          "end": 2917,
          "expression": {
            "type": "Identifier",
            "start": 2913,
            "end": 2917,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2918,
        "end": 3006,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2924,
            "end": 2962,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2924,
              "end": 2926,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2926,
              "end": 2961,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2928,
                "end": 2961,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2929,
                    "end": 2938,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2930,
                      "end": 2938,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2932,
                        "end": 2938
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2940,
                    "end": 2950,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2942,
                      "end": 2950,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2944,
                        "end": 2950
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2952,
                  "end": 2961,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2955,
                    "end": 2961
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3008,
      "end": 3141,
      "id": {
        "type": "Identifier",
        "start": 3018,
        "end": 3021,
        "name": "I15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 3030,
          "end": 3034,
          "expression": {
            "type": "Identifier",
            "start": 3030,
            "end": 3034,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 3035,
        "end": 3141,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3041,
            "end": 3080,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3041,
              "end": 3043,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3043,
              "end": 3079,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3045,
                "end": 3079,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3046,
                    "end": 3056,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3048,
                      "end": 3056,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3050,
                        "end": 3056
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  {
                    "type": "Identifier",
                    "start": 3058,
                    "end": 3068,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3060,
                      "end": 3068,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3062,
                        "end": 3068
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3070,
                  "end": 3079,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3073,
                    "end": 3079
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3143,
      "end": 3263,
      "id": {
        "type": "Identifier",
        "start": 3153,
        "end": 3156,
        "name": "I16",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 3165,
          "end": 3169,
          "expression": {
            "type": "Identifier",
            "start": 3165,
            "end": 3169,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 3170,
        "end": 3263,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3176,
            "end": 3221,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3176,
              "end": 3178,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3178,
              "end": 3220,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3180,
                "end": 3220,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3181,
                    "end": 3190,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3182,
                      "end": 3190,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3184,
                        "end": 3190
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 3192,
                    "end": 3209,
                    "argument": {
                      "type": "Identifier",
                      "start": 3195,
                      "end": 3199,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3199,
                      "end": 3209,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 3201,
                        "end": 3209,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 3201,
                          "end": 3207
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3211,
                  "end": 3220,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3214,
                    "end": 3220
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3265,
      "end": 3343,
      "id": {
        "type": "Identifier",
        "start": 3275,
        "end": 3278,
        "name": "I17",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 3287,
          "end": 3291,
          "expression": {
            "type": "Identifier",
            "start": 3287,
            "end": 3291,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 3292,
        "end": 3343,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3298,
            "end": 3332,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3298,
              "end": 3300,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3300,
              "end": 3331,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3302,
                "end": 3331,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 3303,
                    "end": 3320,
                    "argument": {
                      "type": "Identifier",
                      "start": 3306,
                      "end": 3310,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3310,
                      "end": 3320,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 3312,
                        "end": 3320,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 3312,
                          "end": 3318
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3322,
                  "end": 3331,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3325,
                    "end": 3331
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
