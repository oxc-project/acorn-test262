unionAndIntersectionInference2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 602,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 41,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 36,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 36,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 26,
              "end": 36,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 26,
                  "end": 27,
                  "typeName": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 30,
                  "end": 36
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 37,
        "end": 40,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 39,
          "end": 40,
          "typeName": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
      "type": "VariableDeclaration",
      "start": 43,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 57,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 57,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
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
      "start": 59,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 84,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 84,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 67,
                "end": 84,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 67,
                    "end": 73
                  },
                  {
                    "type": "TSArrayType",
                    "start": 76,
                    "end": 84,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 76,
                      "end": 82
                    }
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
      "start": 86,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 111,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 111,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 94,
                "end": 111,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 94,
                    "end": 102,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 94,
                      "end": 100
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 105,
                    "end": 111
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
      "start": 113,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 146,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 146,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 121,
                "end": 146,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 121,
                    "end": 127
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 130,
                    "end": 146,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 132,
                        "end": 144,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 136,
                          "decorators": [],
                          "name": "name",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 136,
                          "end": 144,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 138,
                            "end": 144
                          }
                        }
                      }
                    ]
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
      "start": 148,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 181,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 181,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 156,
                "end": 181,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 156,
                    "end": 162
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 165,
                    "end": 171
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 174,
                    "end": 181
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
      "type": "ExpressionStatement",
      "start": 183,
      "end": 190,
      "expression": {
        "type": "CallExpression",
        "start": 183,
        "end": 189,
        "arguments": [
          {
            "type": "Identifier",
            "start": 186,
            "end": 188,
            "decorators": [],
            "name": "a1",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 183,
          "end": 185,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 208,
      "expression": {
        "type": "CallExpression",
        "start": 201,
        "end": 207,
        "arguments": [
          {
            "type": "Identifier",
            "start": 204,
            "end": 206,
            "decorators": [],
            "name": "b1",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 201,
          "end": 203,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 228,
      "expression": {
        "type": "CallExpression",
        "start": 221,
        "end": 227,
        "arguments": [
          {
            "type": "Identifier",
            "start": 224,
            "end": 226,
            "decorators": [],
            "name": "c1",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 221,
          "end": 223,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 241,
      "end": 248,
      "expression": {
        "type": "CallExpression",
        "start": 241,
        "end": 247,
        "arguments": [
          {
            "type": "Identifier",
            "start": 244,
            "end": 246,
            "decorators": [],
            "name": "d1",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 241,
          "end": 243,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 276,
      "expression": {
        "type": "CallExpression",
        "start": 269,
        "end": 275,
        "arguments": [
          {
            "type": "Identifier",
            "start": 272,
            "end": 274,
            "decorators": [],
            "name": "e1",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 269,
          "end": 271,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 298,
      "end": 349,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 315,
        "end": 317,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 321,
          "end": 344,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 322,
            "end": 344,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 324,
              "end": 344,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 324,
                  "end": 325,
                  "typeName": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 325,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 328,
                  "end": 344,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 330,
                      "end": 342,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 330,
                        "end": 334,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 334,
                        "end": 342,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 336,
                          "end": 342
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 345,
        "end": 348,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 347,
          "end": 348,
          "typeName": {
            "type": "Identifier",
            "start": 347,
            "end": 348,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 317,
        "end": 320,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 318,
            "end": 319,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 318,
              "end": 319,
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
      "type": "VariableDeclaration",
      "start": 351,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 384,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 384,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 357,
              "end": 384,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 359,
                "end": 384,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 359,
                    "end": 365
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 368,
                    "end": 384,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 370,
                        "end": 382,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 370,
                          "end": 374,
                          "decorators": [],
                          "name": "name",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 374,
                          "end": 382,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 376,
                            "end": 382
                          }
                        }
                      }
                    ]
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
      "start": 386,
      "end": 422,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 421,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 421,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 392,
              "end": 421,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 394,
                "end": 421,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 394,
                    "end": 410,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 396,
                        "end": 408,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 396,
                          "end": 400,
                          "decorators": [],
                          "name": "name",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 400,
                          "end": 408,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 402,
                            "end": 408
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSArrayType",
                    "start": 413,
                    "end": 421,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 413,
                      "end": 419
                    }
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
      "start": 423,
      "end": 466,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 465,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 465,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 429,
              "end": 465,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 431,
                "end": 465,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 431,
                    "end": 437
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 440,
                    "end": 456,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 442,
                        "end": 454,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 442,
                          "end": 446,
                          "decorators": [],
                          "name": "name",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 446,
                          "end": 454,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 448,
                            "end": 454
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 459,
                    "end": 465
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
      "start": 467,
      "end": 529,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 471,
          "end": 528,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 471,
            "end": 528,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 473,
              "end": 528,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 475,
                "end": 528,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 475,
                    "end": 481
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 484,
                    "end": 500,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 486,
                        "end": 498,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 486,
                          "end": 490,
                          "decorators": [],
                          "name": "name",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 490,
                          "end": 498,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 492,
                            "end": 498
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 503,
                    "end": 509
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 512,
                    "end": 528,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 514,
                        "end": 526,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 514,
                          "end": 518,
                          "decorators": [],
                          "name": "name",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 518,
                          "end": 526,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 520,
                            "end": 526
                          }
                        }
                      }
                    ]
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
      "type": "ExpressionStatement",
      "start": 530,
      "end": 537,
      "expression": {
        "type": "CallExpression",
        "start": 530,
        "end": 536,
        "arguments": [
          {
            "type": "Identifier",
            "start": 533,
            "end": 535,
            "decorators": [],
            "name": "a2",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 530,
          "end": 532,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 548,
      "end": 555,
      "expression": {
        "type": "CallExpression",
        "start": 548,
        "end": 554,
        "arguments": [
          {
            "type": "Identifier",
            "start": 551,
            "end": 553,
            "decorators": [],
            "name": "b2",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 548,
          "end": 550,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 568,
      "end": 575,
      "expression": {
        "type": "CallExpression",
        "start": 568,
        "end": 574,
        "arguments": [
          {
            "type": "Identifier",
            "start": 571,
            "end": 573,
            "decorators": [],
            "name": "c2",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 568,
          "end": 570,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 585,
      "end": 592,
      "expression": {
        "type": "CallExpression",
        "start": 585,
        "end": 591,
        "arguments": [
          {
            "type": "Identifier",
            "start": 588,
            "end": 590,
            "decorators": [],
            "name": "d2",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 585,
          "end": 587,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
