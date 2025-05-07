__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 100,
  "end": 798,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 100,
      "end": 165,
      "body": {
        "type": "TSInterfaceBody",
        "start": 119,
        "end": 165,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 125,
            "end": 138,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 129,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 137,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 131,
                "end": 137
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 143,
            "end": 163,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 144,
                "end": 153,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 145,
                  "end": 153,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 147,
                    "end": 153
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 162,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 156,
                "end": 162,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 162,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 110,
        "end": 118,
        "decorators": [],
        "name": "Function",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 167,
      "end": 285,
      "body": {
        "type": "TSInterfaceBody",
        "start": 179,
        "end": 285,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 185,
            "end": 194,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 193,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 189,
                "end": 193
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 199,
            "end": 228,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 204,
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 205,
                "end": 211,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 206,
                  "end": 211,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 208,
                    "end": 211
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 213,
                "end": 220,
                "decorators": [],
                "name": "b",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 215,
                  "end": 220,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 217,
                    "end": 220
                  }
                }
              }
            ],
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
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 233,
            "end": 283,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 237,
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 238,
                "end": 253,
                "decorators": [],
                "name": "thisArg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 245,
                  "end": 253,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 247,
                    "end": 253
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 255,
                "end": 276,
                "argument": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 266,
                  "decorators": [],
                  "name": "argArray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 266,
                  "end": 276,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 268,
                    "end": 276,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 268,
                      "end": 274
                    }
                  }
                },
                "value": null
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 282,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 279,
                "end": 282
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 178,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 296,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 295,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 295,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 295,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 294,
                "end": 295,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 295,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
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
    {
      "type": "VariableDeclaration",
      "start": 297,
      "end": 341,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 340,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 330,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 303,
              "end": 330,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 305,
                "end": 330,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 306,
                    "end": 312,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 307,
                      "end": 312,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 309,
                        "end": 312
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 314,
                    "end": 321,
                    "decorators": [],
                    "name": "b",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 316,
                      "end": 321,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 318,
                        "end": 321
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 323,
                  "end": 330,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 326,
                    "end": 330
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 333,
            "end": 340,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 335,
              "end": 340,
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 342,
      "end": 409,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 346,
          "end": 408,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 346,
            "end": 399,
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 349,
              "end": 399,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 351,
                "end": 399,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 352,
                    "end": 367,
                    "decorators": [],
                    "name": "thisArg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 359,
                      "end": 367,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 361,
                        "end": 367
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 369,
                    "end": 390,
                    "argument": {
                      "type": "Identifier",
                      "start": 372,
                      "end": 380,
                      "decorators": [],
                      "name": "argArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 380,
                      "end": 390,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 382,
                        "end": 390,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 382,
                          "end": 388
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 392,
                  "end": 399,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 395,
                    "end": 399
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 402,
            "end": 408,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 402,
              "end": 403,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 404,
              "end": 408,
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 410,
      "end": 432,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 414,
          "end": 431,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 414,
            "end": 417,
            "decorators": [],
            "name": "r1c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 420,
            "end": 431,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 422,
              "end": 431,
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 433,
      "end": 450,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 437,
          "end": 449,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 437,
            "end": 440,
            "decorators": [],
            "name": "r1d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 443,
            "end": 449,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 445,
              "end": 449,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 451,
      "end": 469,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 455,
          "end": 468,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 455,
            "end": 458,
            "decorators": [],
            "name": "r1e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 461,
            "end": 468,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 461,
              "end": 462,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 463,
              "end": 467,
              "raw": "'hm'",
              "value": "hm",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 491,
      "end": 604,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 495,
          "end": 604,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 495,
            "end": 604,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 496,
              "end": 604,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 498,
                "end": 604,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 504,
                    "end": 513,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 506,
                      "end": 512,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 508,
                        "end": 512
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 518,
                    "end": 547,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 518,
                      "end": 523,
                      "decorators": [],
                      "name": "apply",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 524,
                        "end": 530,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 525,
                          "end": 530,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 527,
                            "end": 530
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 532,
                        "end": 539,
                        "decorators": [],
                        "name": "b",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 534,
                          "end": 539,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 536,
                            "end": 539
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 540,
                      "end": 546,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 542,
                        "end": 546
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 552,
                    "end": 602,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 552,
                      "end": 556,
                      "decorators": [],
                      "name": "call",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 557,
                        "end": 572,
                        "decorators": [],
                        "name": "thisArg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 564,
                          "end": 572,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 566,
                            "end": 572
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 574,
                        "end": 595,
                        "argument": {
                          "type": "Identifier",
                          "start": 577,
                          "end": 585,
                          "decorators": [],
                          "name": "argArray",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 585,
                          "end": 595,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 587,
                            "end": 595,
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 587,
                              "end": 593
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 596,
                      "end": 601,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 598,
                        "end": 601
                      }
                    },
                    "static": false,
                    "typeParameters": null
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
      "type": "VariableDeclaration",
      "start": 606,
      "end": 650,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 610,
          "end": 649,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 610,
            "end": 639,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 612,
              "end": 639,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 614,
                "end": 639,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 615,
                    "end": 621,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 616,
                      "end": 621,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 618,
                        "end": 621
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 623,
                    "end": 630,
                    "decorators": [],
                    "name": "b",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 625,
                      "end": 630,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 627,
                        "end": 630
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 632,
                  "end": 639,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 635,
                    "end": 639
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 642,
            "end": 649,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 642,
              "end": 643,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 644,
              "end": 649,
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 651,
      "end": 718,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 655,
          "end": 717,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 655,
            "end": 708,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 658,
              "end": 708,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 660,
                "end": 708,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 661,
                    "end": 676,
                    "decorators": [],
                    "name": "thisArg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 668,
                      "end": 676,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 670,
                        "end": 676
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 678,
                    "end": 699,
                    "argument": {
                      "type": "Identifier",
                      "start": 681,
                      "end": 689,
                      "decorators": [],
                      "name": "argArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 689,
                      "end": 699,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 691,
                        "end": 699,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 691,
                          "end": 697
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 701,
                  "end": 708,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 704,
                    "end": 708
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 711,
            "end": 717,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 711,
              "end": 712,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 713,
              "end": 717,
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 719,
      "end": 741,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 723,
          "end": 740,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 723,
            "end": 726,
            "decorators": [],
            "name": "r2c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 729,
            "end": 740,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 729,
              "end": 730,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 731,
              "end": 740,
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 742,
      "end": 759,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 746,
          "end": 758,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 746,
            "end": 749,
            "decorators": [],
            "name": "r2d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 752,
            "end": 758,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 752,
              "end": 753,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 754,
              "end": 758,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 760,
      "end": 778,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 764,
          "end": 777,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 764,
            "end": 767,
            "decorators": [],
            "name": "r2e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 770,
            "end": 777,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 770,
              "end": 771,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 772,
              "end": 776,
              "raw": "'hm'",
              "value": "hm",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
