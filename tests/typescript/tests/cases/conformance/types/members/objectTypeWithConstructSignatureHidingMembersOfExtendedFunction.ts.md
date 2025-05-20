__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 708,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 65,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 65,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 38,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
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
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 43,
            "end": 63,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 44,
                "end": 53,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 53,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 47,
                    "end": 53
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 62,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 62,
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
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "Function",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 67,
      "end": 190,
      "body": {
        "type": "TSInterfaceBody",
        "start": 79,
        "end": 190,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 85,
            "end": 99,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 98,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 92,
                "end": 98
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 104,
            "end": 133,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 109,
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
                "start": 110,
                "end": 116,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 111,
                  "end": 116,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 113,
                    "end": 116
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 118,
                "end": 125,
                "decorators": [],
                "name": "b",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 120,
                  "end": 125,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 122,
                    "end": 125
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 132,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 128,
                "end": 132
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 138,
            "end": 188,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 142,
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
                "start": 143,
                "end": 158,
                "decorators": [],
                "name": "thisArg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 150,
                  "end": 158,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 152,
                    "end": 158
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 160,
                "end": 181,
                "argument": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 171,
                  "decorators": [],
                  "name": "argArray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 171,
                  "end": 181,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 173,
                    "end": 181,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 173,
                      "end": 179
                    }
                  }
                },
                "value": null
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 187,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 184,
                "end": 187
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
        "start": 77,
        "end": 78,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 200,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 200,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 200,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 199,
                "end": 200,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
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
      "start": 202,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 245,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 235,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 208,
              "end": 235,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 210,
                "end": 235,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 211,
                    "end": 217,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 212,
                      "end": 217,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 214,
                        "end": 217
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 219,
                    "end": 226,
                    "decorators": [],
                    "name": "b",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 221,
                      "end": 226,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 223,
                        "end": 226
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 228,
                  "end": 235,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 231,
                    "end": 235
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 238,
            "end": 245,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 240,
              "end": 245,
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
      "start": 247,
      "end": 314,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 313,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 304,
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 304,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 256,
                "end": 304,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 257,
                    "end": 272,
                    "decorators": [],
                    "name": "thisArg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 264,
                      "end": 272,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 266,
                        "end": 272
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 274,
                    "end": 295,
                    "argument": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 285,
                      "decorators": [],
                      "name": "argArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 285,
                      "end": 295,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 287,
                        "end": 295,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 287,
                          "end": 293
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 297,
                  "end": 304,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 300,
                    "end": 304
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 307,
            "end": 313,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 309,
              "end": 313,
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
      "start": 315,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 322,
            "decorators": [],
            "name": "r1c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 325,
            "end": 336,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 325,
              "end": 326,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 327,
              "end": 336,
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
      "start": 338,
      "end": 355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 354,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 345,
            "decorators": [],
            "name": "r1d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 348,
            "end": 354,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 348,
              "end": 349,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 350,
              "end": 354,
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
      "start": 356,
      "end": 374,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 373,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 363,
            "decorators": [],
            "name": "r1e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 366,
            "end": 373,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 366,
              "end": 367,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 368,
              "end": 372,
              "raw": "'hm'",
              "value": "hm"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 396,
      "end": 514,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 514,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 514,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 401,
              "end": 514,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 403,
                "end": 514,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 409,
                    "end": 423,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 414,
                      "end": 422,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 416,
                        "end": 422
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 428,
                    "end": 457,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 428,
                      "end": 433,
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
                        "start": 434,
                        "end": 440,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 435,
                          "end": 440,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 437,
                            "end": 440
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 442,
                        "end": 449,
                        "decorators": [],
                        "name": "b",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 444,
                          "end": 449,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 446,
                            "end": 449
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 450,
                      "end": 456,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 452,
                        "end": 456
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 462,
                    "end": 512,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 462,
                      "end": 466,
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
                        "start": 467,
                        "end": 482,
                        "decorators": [],
                        "name": "thisArg",
                        "optional": false,
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
                        "end": 505,
                        "argument": {
                          "type": "Identifier",
                          "start": 487,
                          "end": 495,
                          "decorators": [],
                          "name": "argArray",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 495,
                          "end": 505,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 497,
                            "end": 505,
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 497,
                              "end": 503
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 506,
                      "end": 511,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 508,
                        "end": 511
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
      "start": 516,
      "end": 560,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 520,
          "end": 559,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 520,
            "end": 549,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 522,
              "end": 549,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 524,
                "end": 549,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 525,
                    "end": 531,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 526,
                      "end": 531,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 528,
                        "end": 531
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 533,
                    "end": 540,
                    "decorators": [],
                    "name": "b",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 535,
                      "end": 540,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 537,
                        "end": 540
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 542,
                  "end": 549,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 545,
                    "end": 549
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 552,
            "end": 559,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 552,
              "end": 553,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 554,
              "end": 559,
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
      "start": 561,
      "end": 628,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 565,
          "end": 627,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 565,
            "end": 618,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 568,
              "end": 618,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 570,
                "end": 618,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 571,
                    "end": 586,
                    "decorators": [],
                    "name": "thisArg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 578,
                      "end": 586,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 580,
                        "end": 586
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 588,
                    "end": 609,
                    "argument": {
                      "type": "Identifier",
                      "start": 591,
                      "end": 599,
                      "decorators": [],
                      "name": "argArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 599,
                      "end": 609,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 601,
                        "end": 609,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 601,
                          "end": 607
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 611,
                  "end": 618,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 614,
                    "end": 618
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 621,
            "end": 627,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 621,
              "end": 622,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 623,
              "end": 627,
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
      "start": 629,
      "end": 651,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 633,
          "end": 650,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 633,
            "end": 636,
            "decorators": [],
            "name": "r2c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 639,
            "end": 650,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 639,
              "end": 640,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 641,
              "end": 650,
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
      "start": 652,
      "end": 669,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 656,
          "end": 668,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 656,
            "end": 659,
            "decorators": [],
            "name": "r2d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 662,
            "end": 668,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 662,
              "end": 663,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 664,
              "end": 668,
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
      "start": 670,
      "end": 688,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 674,
          "end": 687,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 674,
            "end": 677,
            "decorators": [],
            "name": "r2e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 680,
            "end": 687,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 680,
              "end": 681,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 682,
              "end": 686,
              "raw": "'hm'",
              "value": "hm"
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
