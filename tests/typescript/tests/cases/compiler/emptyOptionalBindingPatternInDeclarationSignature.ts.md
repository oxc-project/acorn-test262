__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 793,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 11,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 31,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 32,
          "end": 50,
          "decorators": [],
          "properties": [],
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 50,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 37,
              "end": 50,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 39,
                  "end": 48,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 40,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 40,
                    "end": 48,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 42,
                      "end": 48
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 51,
        "end": 57,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 53,
          "end": 57
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 59,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 79,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 80,
          "end": 101,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 82,
              "end": 83,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 101,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 88,
              "end": 101,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 90,
                  "end": 99,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 91,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 91,
                    "end": 99,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 93,
                      "end": 99
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 102,
        "end": 108,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 104,
          "end": 108
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 110,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 130,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 131,
          "end": 149,
          "decorators": [],
          "elements": [],
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 134,
            "end": 149,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 136,
              "end": 149,
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "start": 138,
                  "end": 147,
                  "label": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 139,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 141,
                    "end": 147
                  },
                  "optional": false
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 150,
        "end": 156,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 152,
          "end": 156
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 158,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 178,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 179,
          "end": 200,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 185,
            "end": 200,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 187,
              "end": 200,
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "start": 189,
                  "end": 198,
                  "label": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 192,
                    "end": 198
                  },
                  "optional": false
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 201,
        "end": 207,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 203,
          "end": 207
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 210,
      "end": 408,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 226,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 227,
        "end": 408,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 233,
            "end": 265,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 239,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 239,
              "end": 265,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 240,
                  "end": 258,
                  "decorators": [],
                  "properties": [],
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 243,
                    "end": 258,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 245,
                      "end": 258,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 247,
                          "end": 256,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 247,
                            "end": 248,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 259,
                "end": 265,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 261,
                  "end": 265
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 270,
            "end": 310,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 284,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 284,
              "end": 310,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 285,
                  "end": 303,
                  "decorators": [],
                  "properties": [],
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 288,
                    "end": 303,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 290,
                      "end": 303,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 292,
                          "end": 301,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 292,
                            "end": 293,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 293,
                            "end": 301,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 295,
                              "end": 301
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 304,
                "end": 310,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 306,
                  "end": 310
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 316,
            "end": 358,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 323,
              "end": 328,
              "decorators": [],
              "name": "field",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 328,
              "end": 358,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 330,
                "end": 358,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 331,
                    "end": 349,
                    "decorators": [],
                    "properties": [],
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 334,
                      "end": 349,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 336,
                        "end": 349,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 338,
                            "end": 347,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 338,
                              "end": 339,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 339,
                              "end": 347,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 341,
                                "end": 347
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 351,
                  "end": 358,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 354,
                    "end": 358
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 363,
            "end": 406,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 370,
              "end": 376,
              "decorators": [],
              "name": "field2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 376,
              "end": 406,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 378,
                "end": 406,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 379,
                    "end": 397,
                    "decorators": [],
                    "properties": [],
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 382,
                      "end": 397,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 384,
                        "end": 397,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 386,
                            "end": 395,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 386,
                              "end": 387,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 387,
                              "end": 395,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 389,
                                "end": 395
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 399,
                  "end": 406,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 402,
                    "end": 406
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 410,
      "end": 505,
      "id": {
        "type": "Identifier",
        "start": 420,
        "end": 422,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 423,
        "end": 505,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 429,
            "end": 461,
            "key": {
              "type": "Identifier",
              "start": 429,
              "end": 435,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 436,
                "end": 454,
                "decorators": [],
                "properties": [],
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 439,
                  "end": 454,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 441,
                    "end": 454,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 443,
                        "end": 452,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 443,
                          "end": 444,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 444,
                          "end": 452,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 446,
                            "end": 452
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 455,
              "end": 461,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 457,
                "end": 461
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 466,
            "end": 503,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 466,
              "end": 473,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 473,
              "end": 503,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 475,
                "end": 503,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 476,
                    "end": 494,
                    "decorators": [],
                    "properties": [],
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 479,
                      "end": 494,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 481,
                        "end": 494,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 483,
                            "end": 492,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 483,
                              "end": 484,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 484,
                              "end": 492,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 486,
                                "end": 492
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 496,
                  "end": 503,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 499,
                    "end": 503
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
      "type": "TSTypeAliasDeclaration",
      "start": 507,
      "end": 545,
      "id": {
        "type": "Identifier",
        "start": 512,
        "end": 514,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 517,
        "end": 545,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 518,
            "end": 536,
            "decorators": [],
            "properties": [],
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 521,
              "end": 536,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 523,
                "end": 536,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 525,
                    "end": 534,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 526,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 526,
                      "end": 534,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 528,
                        "end": 534
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 538,
          "end": 545,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 541,
            "end": 545
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 547,
      "end": 639,
      "id": {
        "type": "Identifier",
        "start": 552,
        "end": 554,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 557,
        "end": 639,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 563,
            "end": 595,
            "key": {
              "type": "Identifier",
              "start": 563,
              "end": 569,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 570,
                "end": 588,
                "decorators": [],
                "properties": [],
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 573,
                  "end": 588,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 575,
                    "end": 588,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 577,
                        "end": 586,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 577,
                          "end": 578,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 578,
                          "end": 586,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 580,
                            "end": 586
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 589,
              "end": 595,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 591,
                "end": 595
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 600,
            "end": 637,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 600,
              "end": 607,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 607,
              "end": 637,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 609,
                "end": 637,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 610,
                    "end": 628,
                    "decorators": [],
                    "properties": [],
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 613,
                      "end": 628,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 615,
                        "end": 628,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 617,
                            "end": 626,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 617,
                              "end": 618,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 618,
                              "end": 626,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 620,
                                "end": 626
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 630,
                  "end": 637,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 633,
                    "end": 637
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
      "type": "VariableDeclaration",
      "start": 641,
      "end": 689,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 655,
          "end": 689,
          "id": {
            "type": "Identifier",
            "start": 655,
            "end": 689,
            "decorators": [],
            "name": "val1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 659,
              "end": 689,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 661,
                "end": 689,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 662,
                    "end": 680,
                    "decorators": [],
                    "properties": [],
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 665,
                      "end": 680,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 667,
                        "end": 680,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 669,
                            "end": 678,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 669,
                              "end": 670,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 670,
                              "end": 678,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 672,
                                "end": 678
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 682,
                  "end": 689,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 685,
                    "end": 689
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 691,
      "end": 793,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 705,
          "end": 793,
          "id": {
            "type": "Identifier",
            "start": 705,
            "end": 793,
            "decorators": [],
            "name": "val2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 709,
              "end": 793,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 711,
                "end": 793,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 717,
                    "end": 749,
                    "key": {
                      "type": "Identifier",
                      "start": 717,
                      "end": 723,
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "ObjectPattern",
                        "start": 724,
                        "end": 742,
                        "decorators": [],
                        "properties": [],
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 727,
                          "end": 742,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 729,
                            "end": 742,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 731,
                                "end": 740,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 731,
                                  "end": 732,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 732,
                                  "end": 740,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 734,
                                    "end": 740
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 743,
                      "end": 749,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 745,
                        "end": 749
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 754,
                    "end": 791,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 754,
                      "end": 761,
                      "decorators": [],
                      "name": "method2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 761,
                      "end": 791,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 763,
                        "end": 791,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "ObjectPattern",
                            "start": 764,
                            "end": 782,
                            "decorators": [],
                            "properties": [],
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 767,
                              "end": 782,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 769,
                                "end": 782,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 771,
                                    "end": 780,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 771,
                                      "end": 772,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 772,
                                      "end": 780,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 774,
                                        "end": 780
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 784,
                          "end": 791,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 787,
                            "end": 791
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
