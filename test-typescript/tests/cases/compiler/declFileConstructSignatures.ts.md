__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 777,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 105,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 105,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 36,
          "name": "IConstructSignature",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 37,
          "end": 105,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 88,
              "end": 103,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 94,
                "end": 102,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 96,
                  "end": 102
                }
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 315,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 114,
        "end": 315,
        "id": {
          "type": "Identifier",
          "start": 124,
          "end": 157,
          "name": "IConstructSignatureWithParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 158,
          "end": 315,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 213,
              "end": 313,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 247,
                  "end": 256,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 256,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 250,
                      "end": 256
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 302,
                  "end": 311,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 303,
                    "end": 311,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 305,
                      "end": 311
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": null
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 317,
      "end": 424,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 324,
        "end": 424,
        "id": {
          "type": "Identifier",
          "start": 334,
          "end": 371,
          "name": "IConstructSignatureWithRestParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 372,
          "end": 424,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 378,
              "end": 422,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 383,
                  "end": 392,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 384,
                    "end": 392,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 386,
                      "end": 392
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 394,
                  "end": 412,
                  "argument": {
                    "type": "Identifier",
                    "start": 397,
                    "end": 402,
                    "name": "rests",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 402,
                    "end": 412,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 404,
                      "end": 412,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 404,
                        "end": 410
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 413,
                "end": 421,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 415,
                  "end": 421
                }
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 426,
      "end": 537,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 433,
        "end": 537,
        "id": {
          "type": "Identifier",
          "start": 443,
          "end": 475,
          "name": "IConstructSignatureWithOverloads",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 476,
          "end": 537,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 482,
              "end": 506,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 487,
                  "end": 496,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 488,
                    "end": 496,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 490,
                      "end": 496
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 497,
                "end": 505,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 499,
                  "end": 505
                }
              }
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 511,
              "end": 535,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 516,
                  "end": 525,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 517,
                    "end": 525,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 519,
                      "end": 525
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 526,
                "end": 534,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 528,
                  "end": 534
                }
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 539,
      "end": 664,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 546,
        "end": 664,
        "id": {
          "type": "Identifier",
          "start": 556,
          "end": 593,
          "name": "IConstructSignatureWithTypeParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 593,
          "end": 596,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 594,
              "end": 595,
              "name": {
                "type": "Identifier",
                "start": 594,
                "end": 595,
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
          "start": 597,
          "end": 664,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 648,
              "end": 662,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 653,
                  "end": 657,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 654,
                    "end": 657,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 656,
                      "end": 657,
                      "typeName": {
                        "type": "Identifier",
                        "start": 656,
                        "end": 657,
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
                "start": 658,
                "end": 661,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 660,
                  "end": 661,
                  "typeName": {
                    "type": "Identifier",
                    "start": 660,
                    "end": 661,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 666,
      "end": 776,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 673,
        "end": 776,
        "id": {
          "type": "Identifier",
          "start": 683,
          "end": 722,
          "name": "IConstructSignatureWithOwnTypeParametes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 723,
          "end": 776,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 729,
              "end": 774,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 733,
                "end": 764,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 734,
                    "end": 763,
                    "name": {
                      "type": "Identifier",
                      "start": 734,
                      "end": 735,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 744,
                      "end": 763,
                      "typeName": {
                        "type": "Identifier",
                        "start": 744,
                        "end": 763,
                        "name": "IConstructSignature",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
                  "start": 765,
                  "end": 769,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 766,
                    "end": 769,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 768,
                      "end": 769,
                      "typeName": {
                        "type": "Identifier",
                        "start": 768,
                        "end": 769,
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
                "start": 770,
                "end": 773,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 772,
                  "end": 773,
                  "typeName": {
                    "type": "Identifier",
                    "start": 772,
                    "end": 773,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 778,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 35,
        "name": "IGlobalConstructSignature",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 36,
        "end": 104,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 87,
            "end": 102,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 101,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 95,
                "end": 101
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 106,
      "end": 313,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 155,
        "name": "IGlobalConstructSignatureWithParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 156,
        "end": 313,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 211,
            "end": 311,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 245,
                "end": 254,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 246,
                  "end": 254,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 248,
                    "end": 254
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 300,
                "end": 309,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 301,
                  "end": 309,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 303,
                    "end": 309
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 315,
      "end": 423,
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 368,
        "name": "IGlobalConstructSignatureWithRestParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 369,
        "end": 423,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 376,
            "end": 420,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 381,
                "end": 390,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 382,
                  "end": 390,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 384,
                    "end": 390
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 392,
                "end": 410,
                "argument": {
                  "type": "Identifier",
                  "start": 395,
                  "end": 400,
                  "name": "rests",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 400,
                  "end": 410,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 402,
                    "end": 410,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 402,
                      "end": 408
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 411,
              "end": 419,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 413,
                "end": 419
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 425,
      "end": 535,
      "id": {
        "type": "Identifier",
        "start": 435,
        "end": 473,
        "name": "IGlobalConstructSignatureWithOverloads",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 474,
        "end": 535,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 480,
            "end": 504,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 485,
                "end": 494,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 486,
                  "end": 494,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 488,
                    "end": 494
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 495,
              "end": 503,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 497,
                "end": 503
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 509,
            "end": 533,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 514,
                "end": 523,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 515,
                  "end": 523,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 517,
                    "end": 523
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 524,
              "end": 532,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 526,
                "end": 532
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 537,
      "end": 661,
      "id": {
        "type": "Identifier",
        "start": 547,
        "end": 590,
        "name": "IGlobalConstructSignatureWithTypeParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 590,
        "end": 593,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 591,
            "end": 592,
            "name": {
              "type": "Identifier",
              "start": 591,
              "end": 592,
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
        "start": 594,
        "end": 661,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 645,
            "end": 659,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 650,
                "end": 654,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 651,
                  "end": 654,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 653,
                    "end": 654,
                    "typeName": {
                      "type": "Identifier",
                      "start": 653,
                      "end": 654,
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
              "start": 655,
              "end": 658,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 657,
                "end": 658,
                "typeName": {
                  "type": "Identifier",
                  "start": 657,
                  "end": 658,
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
      "type": "TSInterfaceDeclaration",
      "start": 663,
      "end": 778,
      "id": {
        "type": "Identifier",
        "start": 673,
        "end": 718,
        "name": "IGlobalConstructSignatureWithOwnTypeParametes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 719,
        "end": 778,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 725,
            "end": 776,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 729,
              "end": 766,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 730,
                  "end": 765,
                  "name": {
                    "type": "Identifier",
                    "start": 730,
                    "end": 731,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 740,
                    "end": 765,
                    "typeName": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 765,
                      "name": "IGlobalConstructSignature",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
                "start": 767,
                "end": 771,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 768,
                  "end": 771,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 770,
                    "end": 771,
                    "typeName": {
                      "type": "Identifier",
                      "start": 770,
                      "end": 771,
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
              "start": 772,
              "end": 775,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 774,
                "end": 775,
                "typeName": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 775,
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
