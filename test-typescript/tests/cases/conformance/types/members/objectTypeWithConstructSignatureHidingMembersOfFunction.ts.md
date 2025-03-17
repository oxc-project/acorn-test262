__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 528,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 123,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 18,
            "end": 32,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 37,
            "end": 66,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 42,
              "name": "apply",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 43,
                "end": 49,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 44,
                  "end": 49,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 46,
                    "end": 49
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 51,
                "end": 58,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 58,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 55,
                    "end": 58
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 65,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 61,
                "end": 65
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 71,
            "end": 121,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 75,
              "name": "call",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 76,
                "end": 91,
                "name": "thisArg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 83,
                  "end": 91,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 85,
                    "end": 91
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 93,
                "end": 114,
                "argument": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 104,
                  "name": "argArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 104,
                  "end": 114,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 106,
                    "end": 114,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 106,
                      "end": 112
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 120,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 117,
                "end": 120
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 133,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 133,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 133,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 132,
                "end": 133,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 178,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 168,
            "name": "r1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 168,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 143,
                "end": 168,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 144,
                    "end": 150,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 145,
                      "end": 150,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 147,
                        "end": 150
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 152,
                    "end": 159,
                    "name": "b",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 154,
                      "end": 159,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 156,
                        "end": 159
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 161,
                  "end": 168,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 164,
                    "end": 168
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 171,
            "end": 178,
            "object": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 173,
              "end": 178,
              "name": "apply",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 246,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 237,
            "name": "r1b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 237,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 189,
                "end": 237,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 190,
                    "end": 205,
                    "name": "thisArg",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 197,
                      "end": 205,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 199,
                        "end": 205
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 207,
                    "end": 228,
                    "argument": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 218,
                      "name": "argArray",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 218,
                      "end": 228,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 220,
                        "end": 228,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 220,
                          "end": 226
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 230,
                  "end": 237,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 233,
                    "end": 237
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 240,
            "end": 246,
            "object": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 242,
              "end": 246,
              "name": "call",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 248,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 269,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 255,
            "name": "r1c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 258,
            "end": 269,
            "object": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 260,
              "end": 269,
              "name": "arguments",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 390,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 390,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 390,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 279,
                "end": 390,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 285,
                    "end": 299,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 290,
                      "end": 298,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 292,
                        "end": 298
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 304,
                    "end": 333,
                    "key": {
                      "type": "Identifier",
                      "start": 304,
                      "end": 309,
                      "name": "apply",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 310,
                        "end": 316,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 311,
                          "end": 316,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 313,
                            "end": 316
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 318,
                        "end": 325,
                        "name": "b",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 320,
                          "end": 325,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 322,
                            "end": 325
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 326,
                      "end": 332,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 328,
                        "end": 332
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 338,
                    "end": 388,
                    "key": {
                      "type": "Identifier",
                      "start": 338,
                      "end": 342,
                      "name": "call",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 343,
                        "end": 358,
                        "name": "thisArg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 350,
                          "end": 358,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 352,
                            "end": 358
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 360,
                        "end": 381,
                        "argument": {
                          "type": "Identifier",
                          "start": 363,
                          "end": 371,
                          "name": "argArray",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 371,
                          "end": 381,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 373,
                            "end": 381,
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 373,
                              "end": 379
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 382,
                      "end": 387,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 384,
                        "end": 387
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
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
      "type": "VariableDeclaration",
      "start": 392,
      "end": 436,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 435,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 425,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 398,
              "end": 425,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 400,
                "end": 425,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 401,
                    "end": 407,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 402,
                      "end": 407,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 404,
                        "end": 407
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 409,
                    "end": 416,
                    "name": "b",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 411,
                      "end": 416,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 413,
                        "end": 416
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 418,
                  "end": 425,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 421,
                    "end": 425
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 428,
            "end": 435,
            "object": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 430,
              "end": 435,
              "name": "apply",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 437,
      "end": 504,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 503,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 494,
            "name": "r2b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 444,
              "end": 494,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 446,
                "end": 494,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 447,
                    "end": 462,
                    "name": "thisArg",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 454,
                      "end": 462,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 456,
                        "end": 462
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 464,
                    "end": 485,
                    "argument": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 475,
                      "name": "argArray",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 475,
                      "end": 485,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 477,
                        "end": 485,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 477,
                          "end": 483
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 487,
                  "end": 494,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 490,
                    "end": 494
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 497,
            "end": 503,
            "object": {
              "type": "Identifier",
              "start": 497,
              "end": 498,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 499,
              "end": 503,
              "name": "call",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 505,
      "end": 527,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 509,
          "end": 526,
          "id": {
            "type": "Identifier",
            "start": 509,
            "end": 512,
            "name": "r2c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 515,
            "end": 526,
            "object": {
              "type": "Identifier",
              "start": 515,
              "end": 516,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 517,
              "end": 526,
              "name": "arguments",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
