__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 730,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 96,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 96,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 31,
          "name": "ICallSignature",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 32,
          "end": 96,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 83,
              "end": 94,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 85,
                "end": 93,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 87,
                  "end": 93
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
      "start": 98,
      "end": 303,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 105,
        "end": 303,
        "id": {
          "type": "Identifier",
          "start": 115,
          "end": 143,
          "name": "ICallSignatureWithParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 144,
          "end": 303,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 199,
              "end": 301,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 229,
                  "end": 238,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 230,
                    "end": 238,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 232,
                      "end": 238
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 284,
                  "end": 293,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 285,
                    "end": 293,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 287,
                      "end": 293
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 294,
                "end": 300,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 296,
                  "end": 300
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
      "start": 305,
      "end": 403,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 312,
        "end": 403,
        "id": {
          "type": "Identifier",
          "start": 322,
          "end": 354,
          "name": "ICallSignatureWithRestParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 355,
          "end": 403,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 361,
              "end": 401,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 362,
                  "end": 371,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 363,
                    "end": 371,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 365,
                      "end": 371
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 373,
                  "end": 391,
                  "argument": {
                    "type": "Identifier",
                    "start": 376,
                    "end": 381,
                    "name": "rests",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 381,
                    "end": 391,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 383,
                      "end": 391,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 383,
                        "end": 389
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 392,
                "end": 400,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 394,
                  "end": 400
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
      "start": 405,
      "end": 503,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 412,
        "end": 503,
        "id": {
          "type": "Identifier",
          "start": 422,
          "end": 449,
          "name": "ICallSignatureWithOverloads",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 450,
          "end": 503,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 456,
              "end": 476,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 457,
                  "end": 466,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 458,
                    "end": 466,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 460,
                      "end": 466
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 467,
                "end": 475,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 469,
                  "end": 475
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 481,
              "end": 501,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 482,
                  "end": 491,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 483,
                    "end": 491,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 485,
                      "end": 491
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 492,
                "end": 500,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 494,
                  "end": 500
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
      "start": 505,
      "end": 626,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 512,
        "end": 626,
        "id": {
          "type": "Identifier",
          "start": 522,
          "end": 554,
          "name": "ICallSignatureWithTypeParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 554,
          "end": 557,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 555,
              "end": 556,
              "name": {
                "type": "Identifier",
                "start": 555,
                "end": 556,
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
          "start": 558,
          "end": 626,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 609,
              "end": 624,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 610,
                  "end": 614,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 611,
                    "end": 614,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 613,
                      "end": 614,
                      "typeName": {
                        "type": "Identifier",
                        "start": 613,
                        "end": 614,
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
                "start": 615,
                "end": 623,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 617,
                  "end": 623
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
      "start": 628,
      "end": 729,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 635,
        "end": 729,
        "id": {
          "type": "Identifier",
          "start": 645,
          "end": 679,
          "name": "ICallSignatureWithOwnTypeParametes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 680,
          "end": 729,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 686,
              "end": 727,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 686,
                "end": 712,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 687,
                    "end": 711,
                    "name": {
                      "type": "Identifier",
                      "start": 687,
                      "end": 688,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 697,
                      "end": 711,
                      "typeName": {
                        "type": "Identifier",
                        "start": 697,
                        "end": 711,
                        "name": "ICallSignature",
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
                  "start": 713,
                  "end": 717,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 714,
                    "end": 717,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 716,
                      "end": 717,
                      "typeName": {
                        "type": "Identifier",
                        "start": 716,
                        "end": 717,
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
                "start": 718,
                "end": 726,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 720,
                  "end": 726
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
  "end": 731,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 30,
        "name": "IGlobalCallSignature",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 31,
        "end": 95,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 82,
            "end": 93,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 92,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 86,
                "end": 92
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 97,
      "end": 301,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 141,
        "name": "IGlobalCallSignatureWithParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 142,
        "end": 301,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 197,
            "end": 299,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 227,
                "end": 236,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 228,
                  "end": 236,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 230,
                    "end": 236
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 282,
                "end": 291,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 283,
                  "end": 291,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 285,
                    "end": 291
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 298,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 294,
                "end": 298
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 303,
      "end": 402,
      "id": {
        "type": "Identifier",
        "start": 313,
        "end": 351,
        "name": "IGlobalCallSignatureWithRestParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 352,
        "end": 402,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 359,
            "end": 399,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 360,
                "end": 369,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 361,
                  "end": 369,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 363,
                    "end": 369
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 371,
                "end": 389,
                "argument": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 379,
                  "name": "rests",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 379,
                  "end": 389,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 381,
                    "end": 389,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 381,
                      "end": 387
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 390,
              "end": 398,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 392,
                "end": 398
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 404,
      "end": 501,
      "id": {
        "type": "Identifier",
        "start": 414,
        "end": 447,
        "name": "IGlobalCallSignatureWithOverloads",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 448,
        "end": 501,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 454,
            "end": 474,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 455,
                "end": 464,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 456,
                  "end": 464,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 458,
                    "end": 464
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 465,
              "end": 473,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 467,
                "end": 473
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 479,
            "end": 499,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 480,
                "end": 489,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 481,
                  "end": 489,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 483,
                    "end": 489
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 490,
              "end": 498,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 492,
                "end": 498
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 503,
      "end": 623,
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 551,
        "name": "IGlobalCallSignatureWithTypeParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 551,
        "end": 554,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 552,
            "end": 553,
            "name": {
              "type": "Identifier",
              "start": 552,
              "end": 553,
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
        "start": 555,
        "end": 623,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 606,
            "end": 621,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 607,
                "end": 611,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 608,
                  "end": 611,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 610,
                    "end": 611,
                    "typeName": {
                      "type": "Identifier",
                      "start": 610,
                      "end": 611,
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
              "start": 612,
              "end": 620,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 614,
                "end": 620
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 625,
      "end": 731,
      "id": {
        "type": "Identifier",
        "start": 635,
        "end": 675,
        "name": "IGlobalCallSignatureWithOwnTypeParametes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 676,
        "end": 731,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 682,
            "end": 729,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 682,
              "end": 714,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 683,
                  "end": 713,
                  "name": {
                    "type": "Identifier",
                    "start": 683,
                    "end": 684,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 693,
                    "end": 713,
                    "typeName": {
                      "type": "Identifier",
                      "start": 693,
                      "end": 713,
                      "name": "IGlobalCallSignature",
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
                "start": 715,
                "end": 719,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 716,
                  "end": 719,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 718,
                    "end": 719,
                    "typeName": {
                      "type": "Identifier",
                      "start": 718,
                      "end": 719,
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
              "start": 720,
              "end": 728,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 722,
                "end": 728
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
