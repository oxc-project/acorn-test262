genericClassPropertyInheritanceSpecialization.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 2094,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 87,
      "body": {
        "type": "TSInterfaceBody",
        "start": 36,
        "end": 87,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 42,
            "end": 52,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "decorators": [],
              "name": "peek",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 57,
            "end": 63,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 61,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 68,
            "end": 85,
            "params": [
              {
                "type": "Identifier",
                "start": 69,
                "end": 77,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 74,
                  "end": 77,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 76,
                    "end": 77,
                    "typeName": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
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
              "start": 78,
              "end": 84,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 80,
                "end": 84
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 32,
        "decorators": [],
        "name": "KnockoutObservableBase",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 35,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 34,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
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
      "type": "TSInterfaceDeclaration",
      "start": 89,
      "end": 259,
      "body": {
        "type": "TSInterfaceBody",
        "start": 155,
        "end": 259,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 161,
            "end": 199,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 177,
              "decorators": [],
              "name": "equalityComparer",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 178,
                "end": 182,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 179,
                  "end": 182,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 181,
                    "end": 182,
                    "typeName": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 182,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 184,
                "end": 188,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 185,
                  "end": 188,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 187,
                    "end": 188,
                    "typeName": {
                      "type": "Identifier",
                      "start": 187,
                      "end": 188,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 198,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 191,
                "end": 198
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 204,
            "end": 228,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 204,
              "end": 219,
              "decorators": [],
              "name": "valueHasMutated",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 227,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 223,
                "end": 227
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 233,
            "end": 257,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 248,
              "decorators": [],
              "name": "valueWillMutate",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 256,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 252,
                "end": 256
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 129,
          "end": 154,
          "expression": {
            "type": "Identifier",
            "start": 129,
            "end": 151,
            "decorators": [],
            "name": "KnockoutObservableBase",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 151,
            "end": 154,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 152,
                "end": 153,
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 117,
        "decorators": [],
        "name": "KnockoutObservable",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 117,
        "end": 120,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 118,
            "end": 119,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
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
      "type": "TSInterfaceDeclaration",
      "start": 261,
      "end": 846,
      "body": {
        "type": "TSInterfaceBody",
        "start": 330,
        "end": 846,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 336,
            "end": 390,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 336,
              "end": 343,
              "decorators": [],
              "name": "indexOf",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 344,
                "end": 360,
                "decorators": [],
                "name": "searchElement",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 357,
                  "end": 360,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 359,
                    "end": 360,
                    "typeName": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 362,
                "end": 380,
                "decorators": [],
                "name": "fromIndex",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 372,
                  "end": 380,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 374,
                    "end": 380
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 381,
              "end": 389,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 383,
                "end": 389
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 395,
            "end": 435,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 395,
              "end": 400,
              "decorators": [],
              "name": "slice",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 401,
                "end": 414,
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 406,
                  "end": 414,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 408,
                    "end": 414
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 416,
                "end": 428,
                "decorators": [],
                "name": "end",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 420,
                  "end": 428,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 422,
                    "end": 428
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 429,
              "end": 434,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 431,
                "end": 434,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 431,
                  "end": 432,
                  "typeName": {
                    "type": "Identifier",
                    "start": 431,
                    "end": 432,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 440,
            "end": 504,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 440,
              "end": 446,
              "decorators": [],
              "name": "splice",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 447,
                "end": 460,
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 452,
                  "end": 460,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 454,
                    "end": 460
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 462,
                "end": 482,
                "decorators": [],
                "name": "deleteCount",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 474,
                  "end": 482,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 476,
                    "end": 482
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 484,
                "end": 497,
                "argument": {
                  "type": "Identifier",
                  "start": 487,
                  "end": 492,
                  "decorators": [],
                  "name": "items",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 492,
                  "end": 497,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 494,
                    "end": 497,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 494,
                      "end": 495,
                      "typeName": {
                        "type": "Identifier",
                        "start": 494,
                        "end": 495,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 498,
              "end": 503,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 500,
                "end": 503,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 500,
                  "end": 501,
                  "typeName": {
                    "type": "Identifier",
                    "start": 500,
                    "end": 501,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 509,
            "end": 518,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 509,
              "end": 512,
              "decorators": [],
              "name": "pop",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 514,
              "end": 517,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 516,
                "end": 517,
                "typeName": {
                  "type": "Identifier",
                  "start": 516,
                  "end": 517,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 523,
            "end": 549,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 523,
              "end": 527,
              "decorators": [],
              "name": "push",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 528,
                "end": 541,
                "argument": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 536,
                  "decorators": [],
                  "name": "items",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 536,
                  "end": 541,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 538,
                    "end": 541,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 538,
                      "end": 539,
                      "typeName": {
                        "type": "Identifier",
                        "start": 538,
                        "end": 539,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 542,
              "end": 548,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 544,
                "end": 548
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 554,
            "end": 565,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 554,
              "end": 559,
              "decorators": [],
              "name": "shift",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 561,
              "end": 564,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 563,
                "end": 564,
                "typeName": {
                  "type": "Identifier",
                  "start": 563,
                  "end": 564,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 570,
            "end": 601,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 570,
              "end": 577,
              "decorators": [],
              "name": "unshift",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 578,
                "end": 591,
                "argument": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 586,
                  "decorators": [],
                  "name": "items",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 586,
                  "end": 591,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 588,
                    "end": 591,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 588,
                      "end": 589,
                      "typeName": {
                        "type": "Identifier",
                        "start": 588,
                        "end": 589,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 592,
              "end": 600,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 594,
                "end": 600
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 606,
            "end": 621,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 606,
              "end": 613,
              "decorators": [],
              "name": "reverse",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 615,
              "end": 620,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 617,
                "end": 620,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 617,
                  "end": 618,
                  "typeName": {
                    "type": "Identifier",
                    "start": 617,
                    "end": 618,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 626,
            "end": 679,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 626,
              "end": 630,
              "decorators": [],
              "name": "sort",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 631,
                "end": 671,
                "decorators": [],
                "name": "compareFunction",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 647,
                  "end": 671,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 649,
                    "end": 671,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 650,
                        "end": 654,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 656,
                        "end": 660,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 657,
                          "end": 660,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 659,
                            "end": 660,
                            "typeName": {
                              "type": "Identifier",
                              "start": 659,
                              "end": 660,
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
                      "start": 662,
                      "end": 671,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 665,
                        "end": 671
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 672,
              "end": 678,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 674,
                "end": 678
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 684,
            "end": 722,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 684,
              "end": 691,
              "decorators": [],
              "name": "replace",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 692,
                "end": 702,
                "decorators": [],
                "name": "oldItem",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 699,
                  "end": 702,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 701,
                    "end": 702,
                    "typeName": {
                      "type": "Identifier",
                      "start": 701,
                      "end": 702,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 704,
                "end": 714,
                "decorators": [],
                "name": "newItem",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 711,
                  "end": 714,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 713,
                    "end": 714,
                    "typeName": {
                      "type": "Identifier",
                      "start": 713,
                      "end": 714,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 715,
              "end": 721,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 717,
                "end": 721
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 727,
            "end": 748,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 727,
              "end": 733,
              "decorators": [],
              "name": "remove",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 734,
                "end": 741,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 738,
                  "end": 741,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 740,
                    "end": 741,
                    "typeName": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 741,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 742,
              "end": 747,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 744,
                "end": 747,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 744,
                  "end": 745,
                  "typeName": {
                    "type": "Identifier",
                    "start": 744,
                    "end": 745,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 753,
            "end": 781,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 753,
              "end": 762,
              "decorators": [],
              "name": "removeAll",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 763,
                "end": 774,
                "decorators": [],
                "name": "items",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 769,
                  "end": 774,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 771,
                    "end": 774,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 771,
                      "end": 772,
                      "typeName": {
                        "type": "Identifier",
                        "start": 771,
                        "end": 772,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 775,
              "end": 780,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 777,
                "end": 780,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 777,
                  "end": 778,
                  "typeName": {
                    "type": "Identifier",
                    "start": 777,
                    "end": 778,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 786,
            "end": 809,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 786,
              "end": 793,
              "decorators": [],
              "name": "destroy",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 794,
                "end": 801,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 798,
                  "end": 801,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 800,
                    "end": 801,
                    "typeName": {
                      "type": "Identifier",
                      "start": 800,
                      "end": 801,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 802,
              "end": 808,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 804,
                "end": 808
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 814,
            "end": 844,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 814,
              "end": 824,
              "decorators": [],
              "name": "destroyAll",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 825,
                "end": 836,
                "decorators": [],
                "name": "items",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 831,
                  "end": 836,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 833,
                    "end": 836,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 833,
                      "end": 834,
                      "typeName": {
                        "type": "Identifier",
                        "start": 833,
                        "end": 834,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 837,
              "end": 843,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 839,
                "end": 843
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 306,
          "end": 329,
          "expression": {
            "type": "Identifier",
            "start": 306,
            "end": 324,
            "decorators": [],
            "name": "KnockoutObservable",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 324,
            "end": 329,
            "params": [
              {
                "type": "TSArrayType",
                "start": 325,
                "end": 328,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 325,
                  "end": 326,
                  "typeName": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 326,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 271,
        "end": 294,
        "decorators": [],
        "name": "KnockoutObservableArray",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 294,
        "end": 297,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 295,
            "end": 296,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 295,
              "end": 296,
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
      "type": "TSInterfaceDeclaration",
      "start": 848,
      "end": 980,
      "body": {
        "type": "TSInterfaceBody",
        "start": 888,
        "end": 980,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 894,
            "end": 927,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 894,
              "end": 896,
              "decorators": [],
              "name": "fn",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 896,
              "end": 926,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 898,
                "end": 926,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 921,
                  "end": 926,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 922,
                      "end": 925
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 898,
                  "end": 921,
                  "decorators": [],
                  "name": "KnockoutObservableArray",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 933,
            "end": 978,
            "params": [
              {
                "type": "Identifier",
                "start": 937,
                "end": 948,
                "decorators": [],
                "name": "value",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 943,
                  "end": 948,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 945,
                    "end": 948,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 945,
                      "end": 946,
                      "typeName": {
                        "type": "Identifier",
                        "start": 945,
                        "end": 946,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 949,
              "end": 977,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 951,
                "end": 977,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 974,
                  "end": 977,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 975,
                      "end": 976,
                      "typeName": {
                        "type": "Identifier",
                        "start": 975,
                        "end": 976,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 951,
                  "end": 974,
                  "decorators": [],
                  "name": "KnockoutObservableArray",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 933,
              "end": 936,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 934,
                  "end": 935,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 934,
                    "end": 935,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 858,
        "end": 887,
        "decorators": [],
        "name": "KnockoutObservableArrayStatic",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 982,
      "end": 1066,
      "body": {
        "type": "TSModuleBlock",
        "start": 1000,
        "end": 1066,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1006,
            "end": 1064,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1013,
              "end": 1064,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1017,
                  "end": 1063,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1017,
                    "end": 1063,
                    "decorators": [],
                    "name": "observableArray",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1032,
                      "end": 1063,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1034,
                        "end": 1063,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1034,
                          "end": 1063,
                          "decorators": [],
                          "name": "KnockoutObservableArrayStatic",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 997,
        "end": 999,
        "decorators": [],
        "name": "ko",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1068,
      "end": 1482,
      "body": {
        "type": "TSModuleBlock",
        "start": 1102,
        "end": 1482,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1109,
            "end": 1480,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1116,
              "end": 1480,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1140,
                "end": 1480,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 1150,
                    "end": 1172,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1158,
                      "end": 1171,
                      "decorators": [],
                      "name": "_subscription",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 1181,
                    "end": 1224,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1188,
                      "end": 1195,
                      "decorators": [],
                      "name": "message",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1195,
                      "end": 1223,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1197,
                        "end": 1223,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1215,
                          "end": 1223,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1216,
                              "end": 1222
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1197,
                          "end": 1215,
                          "decorators": [],
                          "name": "KnockoutObservable",
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 1233,
                    "end": 1284,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1240,
                      "end": 1255,
                      "decorators": [],
                      "name": "validationState",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1255,
                      "end": 1283,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1257,
                        "end": 1283,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1275,
                          "end": 1283,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1276,
                              "end": 1282
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1257,
                          "end": 1275,
                          "decorators": [],
                          "name": "KnockoutObservable",
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 1293,
                    "end": 1337,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1300,
                      "end": 1308,
                      "decorators": [],
                      "name": "validate",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1308,
                      "end": 1336,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1310,
                        "end": 1336,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1328,
                          "end": 1336,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1329,
                              "end": 1335,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1329,
                                "end": 1335,
                                "decorators": [],
                                "name": "TValue",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1310,
                          "end": 1328,
                          "decorators": [],
                          "name": "KnockoutObservable",
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1346,
                    "end": 1379,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1346,
                      "end": 1357,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1357,
                      "end": 1379,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1376,
                        "end": 1379,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1358,
                          "end": 1374,
                          "decorators": [],
                          "name": "message",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1366,
                            "end": 1374,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1368,
                              "end": 1374
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1388,
                    "end": 1414,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1395,
                      "end": 1402,
                      "decorators": [],
                      "name": "destroy",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1402,
                      "end": 1414,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1411,
                        "end": 1414,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1404,
                        "end": 1410,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1406,
                          "end": 1410
                        }
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1423,
                    "end": 1474,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1430,
                      "end": 1439,
                      "decorators": [],
                      "name": "_validate",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1439,
                      "end": 1474,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1463,
                        "end": 1474,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1464,
                            "end": 1472,
                            "argument": {
                              "type": "Literal",
                              "start": 1471,
                              "end": 1472,
                              "raw": "0",
                              "value": 0
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1440,
                          "end": 1453,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1445,
                            "end": 1453,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1447,
                              "end": 1453,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1447,
                                "end": 1453,
                                "decorators": [],
                                "name": "TValue",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1454,
                        "end": 1462,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1456,
                          "end": 1462
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1122,
                "end": 1131,
                "decorators": [],
                "name": "Validator",
                "optional": false
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1131,
                "end": 1139,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1132,
                    "end": 1138,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1132,
                      "end": 1138,
                      "decorators": [],
                      "name": "TValue",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 1075,
        "end": 1101,
        "left": {
          "type": "TSQualifiedName",
          "start": 1075,
          "end": 1090,
          "left": {
            "type": "Identifier",
            "start": 1075,
            "end": 1081,
            "decorators": [],
            "name": "Portal",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1082,
            "end": 1090,
            "decorators": [],
            "name": "Controls",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1091,
          "end": 1101,
          "decorators": [],
          "name": "Validators",
          "optional": false
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1484,
      "end": 1711,
      "body": {
        "type": "TSModuleBlock",
        "start": 1531,
        "end": 1711,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1538,
            "end": 1708,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1545,
              "end": 1708,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1622,
                "end": 1708,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1633,
                    "end": 1702,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1633,
                      "end": 1644,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1644,
                      "end": 1702,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1663,
                        "end": 1702,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1677,
                            "end": 1692,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1677,
                              "end": 1691,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1683,
                                  "end": 1690,
                                  "decorators": [],
                                  "name": "message",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "start": 1677,
                                "end": 1682
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1645,
                          "end": 1661,
                          "decorators": [],
                          "name": "message",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1653,
                            "end": 1661,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1655,
                              "end": 1661
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1551,
                "end": 1560,
                "decorators": [],
                "name": "Validator",
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "MemberExpression",
                "start": 1577,
                "end": 1613,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1577,
                  "end": 1603,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1577,
                    "end": 1592,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1577,
                      "end": 1583,
                      "decorators": [],
                      "name": "Portal",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1584,
                      "end": 1592,
                      "decorators": [],
                      "name": "Controls",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1593,
                    "end": 1603,
                    "decorators": [],
                    "name": "Validators",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1604,
                  "end": 1613,
                  "decorators": [],
                  "name": "Validator",
                  "optional": false
                }
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1613,
                "end": 1621,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1614,
                    "end": 1620,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1614,
                      "end": 1620,
                      "decorators": [],
                      "name": "TValue",
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1560,
                "end": 1568,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1561,
                    "end": 1567,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1561,
                      "end": 1567,
                      "decorators": [],
                      "name": "TValue",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 1491,
        "end": 1530,
        "left": {
          "type": "TSQualifiedName",
          "start": 1491,
          "end": 1519,
          "left": {
            "type": "TSQualifiedName",
            "start": 1491,
            "end": 1510,
            "left": {
              "type": "Identifier",
              "start": 1491,
              "end": 1499,
              "decorators": [],
              "name": "PortalFx",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 1500,
              "end": 1510,
              "decorators": [],
              "name": "ViewModels",
              "optional": false
            }
          },
          "right": {
            "type": "Identifier",
            "start": 1511,
            "end": 1519,
            "decorators": [],
            "name": "Controls",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1520,
          "end": 1530,
          "decorators": [],
          "name": "Validators",
          "optional": false
        }
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1713,
      "end": 1844,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1740,
        "end": 1844,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1747,
            "end": 1842,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1747,
              "end": 1757,
              "decorators": [],
              "name": "validators",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1757,
              "end": 1841,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1759,
                "end": 1841,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1782,
                  "end": 1841,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1783,
                      "end": 1840,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1832,
                        "end": 1840,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1833,
                            "end": 1839,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1833,
                              "end": 1839,
                              "decorators": [],
                              "name": "TValue",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 1783,
                        "end": 1832,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 1783,
                          "end": 1822,
                          "left": {
                            "type": "TSQualifiedName",
                            "start": 1783,
                            "end": 1811,
                            "left": {
                              "type": "TSQualifiedName",
                              "start": 1783,
                              "end": 1802,
                              "left": {
                                "type": "Identifier",
                                "start": 1783,
                                "end": 1791,
                                "decorators": [],
                                "name": "PortalFx",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1792,
                                "end": 1802,
                                "decorators": [],
                                "name": "ViewModels",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1803,
                              "end": 1811,
                              "decorators": [],
                              "name": "Controls",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1812,
                            "end": 1822,
                            "decorators": [],
                            "name": "Validators",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1823,
                          "end": 1832,
                          "decorators": [],
                          "name": "Validator",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1759,
                  "end": 1782,
                  "decorators": [],
                  "name": "KnockoutObservableArray",
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
        "start": 1723,
        "end": 1731,
        "decorators": [],
        "name": "Contract",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1731,
        "end": 1739,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1732,
            "end": 1738,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1732,
              "end": 1738,
              "decorators": [],
              "name": "TValue",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1847,
      "end": 2092,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1899,
        "end": 2092,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1906,
            "end": 2090,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1913,
              "end": 1923,
              "decorators": [],
              "name": "validators",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1923,
              "end": 2007,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1925,
                "end": 2007,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1948,
                  "end": 2007,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1949,
                      "end": 2006,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1998,
                        "end": 2006,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1999,
                            "end": 2005,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1999,
                              "end": 2005,
                              "decorators": [],
                              "name": "TValue",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 1949,
                        "end": 1998,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 1949,
                          "end": 1988,
                          "left": {
                            "type": "TSQualifiedName",
                            "start": 1949,
                            "end": 1977,
                            "left": {
                              "type": "TSQualifiedName",
                              "start": 1949,
                              "end": 1968,
                              "left": {
                                "type": "Identifier",
                                "start": 1949,
                                "end": 1957,
                                "decorators": [],
                                "name": "PortalFx",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1958,
                                "end": 1968,
                                "decorators": [],
                                "name": "ViewModels",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1969,
                              "end": 1977,
                              "decorators": [],
                              "name": "Controls",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1978,
                            "end": 1988,
                            "decorators": [],
                            "name": "Validators",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1989,
                          "end": 1998,
                          "decorators": [],
                          "name": "Validator",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1925,
                  "end": 1948,
                  "decorators": [],
                  "name": "KnockoutObservableArray",
                  "optional": false
                }
              }
            },
            "value": {
              "type": "CallExpression",
              "start": 2010,
              "end": 2089,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 2010,
                "end": 2028,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2010,
                  "end": 2012,
                  "decorators": [],
                  "name": "ko",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2013,
                  "end": 2028,
                  "decorators": [],
                  "name": "observableArray",
                  "optional": false
                }
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2028,
                "end": 2087,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2029,
                    "end": 2086,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2078,
                      "end": 2086,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2079,
                          "end": 2085,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2079,
                            "end": 2085,
                            "decorators": [],
                            "name": "TValue",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 2029,
                      "end": 2078,
                      "left": {
                        "type": "TSQualifiedName",
                        "start": 2029,
                        "end": 2068,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 2029,
                          "end": 2057,
                          "left": {
                            "type": "TSQualifiedName",
                            "start": 2029,
                            "end": 2048,
                            "left": {
                              "type": "Identifier",
                              "start": 2029,
                              "end": 2037,
                              "decorators": [],
                              "name": "PortalFx",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 2038,
                              "end": 2048,
                              "decorators": [],
                              "name": "ViewModels",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 2049,
                            "end": 2057,
                            "decorators": [],
                            "name": "Controls",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2058,
                          "end": 2068,
                          "decorators": [],
                          "name": "Validators",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2069,
                        "end": 2078,
                        "decorators": [],
                        "name": "Validator",
                        "optional": false
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1853,
        "end": 1862,
        "decorators": [],
        "name": "ViewModel",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 1882,
          "end": 1898,
          "expression": {
            "type": "Identifier",
            "start": 1882,
            "end": 1890,
            "decorators": [],
            "name": "Contract",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1890,
            "end": 1898,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1891,
                "end": 1897,
                "typeName": {
                  "type": "Identifier",
                  "start": 1891,
                  "end": 1897,
                  "decorators": [],
                  "name": "TValue",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1862,
        "end": 1870,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1863,
            "end": 1869,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1863,
              "end": 1869,
              "decorators": [],
              "name": "TValue",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
