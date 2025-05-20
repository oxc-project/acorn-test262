__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 100,
  "end": 617,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 100,
      "end": 218,
      "body": {
        "type": "TSInterfaceBody",
        "start": 112,
        "end": 218,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 118,
            "end": 127,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 126,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 122,
                "end": 126
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 132,
            "end": 161,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 137,
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
                "start": 138,
                "end": 144,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 139,
                  "end": 144,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 141,
                    "end": 144
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 146,
                "end": 153,
                "decorators": [],
                "name": "b",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 148,
                  "end": 153,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 150,
                    "end": 153
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 160,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 156,
                "end": 160
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 166,
            "end": 216,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 170,
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
                "start": 171,
                "end": 186,
                "decorators": [],
                "name": "thisArg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 178,
                  "end": 186,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 180,
                    "end": 186
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 188,
                "end": 209,
                "argument": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 199,
                  "decorators": [],
                  "name": "argArray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 199,
                  "end": 209,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 201,
                    "end": 209,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 201,
                      "end": 207
                    }
                  }
                },
                "value": null
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 215,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 212,
                "end": 215
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
        "start": 110,
        "end": 111,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 228,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 228,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 225,
              "end": 228,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 227,
                "end": 228,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 228,
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
      "start": 230,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 273,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 263,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 263,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 238,
                "end": 263,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 239,
                    "end": 245,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 240,
                      "end": 245,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 242,
                        "end": 245
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 247,
                    "end": 254,
                    "decorators": [],
                    "name": "b",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 249,
                      "end": 254,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 251,
                        "end": 254
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 256,
                  "end": 263,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 259,
                    "end": 263
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 266,
            "end": 273,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 268,
              "end": 273,
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
      "start": 275,
      "end": 342,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 341,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 332,
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 332,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 284,
                "end": 332,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 285,
                    "end": 300,
                    "decorators": [],
                    "name": "thisArg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 292,
                      "end": 300,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 294,
                        "end": 300
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 302,
                    "end": 323,
                    "argument": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 313,
                      "decorators": [],
                      "name": "argArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 313,
                      "end": 323,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 315,
                        "end": 323,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 315,
                          "end": 321
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 325,
                  "end": 332,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 328,
                    "end": 332
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 335,
            "end": 341,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 337,
              "end": 341,
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
      "start": 343,
      "end": 365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 347,
          "end": 364,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 347,
            "end": 350,
            "decorators": [],
            "name": "r1c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 353,
            "end": 364,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 353,
              "end": 354,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 355,
              "end": 364,
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
      "start": 367,
      "end": 480,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 480,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 480,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 372,
              "end": 480,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 374,
                "end": 480,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 380,
                    "end": 389,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 382,
                      "end": 388,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 384,
                        "end": 388
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 394,
                    "end": 423,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 394,
                      "end": 399,
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
                        "start": 400,
                        "end": 406,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 401,
                          "end": 406,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 403,
                            "end": 406
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 408,
                        "end": 415,
                        "decorators": [],
                        "name": "b",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 410,
                          "end": 415,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 412,
                            "end": 415
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 416,
                      "end": 422,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 418,
                        "end": 422
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 428,
                    "end": 478,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 428,
                      "end": 432,
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
                        "start": 433,
                        "end": 448,
                        "decorators": [],
                        "name": "thisArg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 440,
                          "end": 448,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 442,
                            "end": 448
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 450,
                        "end": 471,
                        "argument": {
                          "type": "Identifier",
                          "start": 453,
                          "end": 461,
                          "decorators": [],
                          "name": "argArray",
                          "optional": false,
                          "typeAnnotation": null
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
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 472,
                      "end": 477,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 474,
                        "end": 477
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
      "start": 482,
      "end": 526,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 486,
          "end": 525,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 515,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 488,
              "end": 515,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 490,
                "end": 515,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 491,
                    "end": 497,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 492,
                      "end": 497,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 494,
                        "end": 497
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 499,
                    "end": 506,
                    "decorators": [],
                    "name": "b",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 501,
                      "end": 506,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 503,
                        "end": 506
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 508,
                  "end": 515,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 511,
                    "end": 515
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 518,
            "end": 525,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 518,
              "end": 519,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 520,
              "end": 525,
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
      "start": 527,
      "end": 594,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 531,
          "end": 593,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 531,
            "end": 584,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 534,
              "end": 584,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 536,
                "end": 584,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 537,
                    "end": 552,
                    "decorators": [],
                    "name": "thisArg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 544,
                      "end": 552,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 546,
                        "end": 552
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 554,
                    "end": 575,
                    "argument": {
                      "type": "Identifier",
                      "start": 557,
                      "end": 565,
                      "decorators": [],
                      "name": "argArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 565,
                      "end": 575,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 567,
                        "end": 575,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 567,
                          "end": 573
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 577,
                  "end": 584,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 580,
                    "end": 584
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 587,
            "end": 593,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 587,
              "end": 588,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 589,
              "end": 593,
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
      "start": 595,
      "end": 617,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 599,
          "end": 616,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 599,
            "end": 602,
            "decorators": [],
            "name": "r2c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 605,
            "end": 616,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 605,
              "end": 606,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 607,
              "end": 616,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
