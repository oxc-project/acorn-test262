__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 120,
  "end": 1193,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 312,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 312,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 312,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 127,
                "end": 312,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 133,
                    "end": 158,
                    "key": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 138,
                      "name": "func1",
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
                        "start": 139,
                        "end": 148,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 140,
                          "end": 148,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 142,
                            "end": 148
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 149,
                      "end": 157,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 151,
                        "end": 157
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 191,
                    "end": 220,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 196,
                      "name": "func2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 196,
                      "end": 219,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 198,
                        "end": 219,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 199,
                            "end": 208,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 200,
                              "end": 208,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 202,
                                "end": 208
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 210,
                          "end": 219,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 213,
                            "end": 219
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 254,
                    "end": 285,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 259,
                      "name": "func3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 259,
                      "end": 284,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 261,
                        "end": 284,
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 263,
                            "end": 282,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 264,
                                "end": 273,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 265,
                                  "end": 273,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 267,
                                    "end": 273
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 274,
                              "end": 282,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 276,
                                "end": 282
                              }
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
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
      "type": "ExpressionStatement",
      "start": 327,
      "end": 345,
      "expression": {
        "type": "AssignmentExpression",
        "start": 327,
        "end": 344,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 327,
          "end": 334,
          "object": {
            "type": "Identifier",
            "start": 327,
            "end": 328,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 329,
            "end": 334,
            "name": "func1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 337,
          "end": 344,
          "object": {
            "type": "Identifier",
            "start": 337,
            "end": 338,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 339,
            "end": 344,
            "name": "func2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 346,
      "end": 364,
      "expression": {
        "type": "AssignmentExpression",
        "start": 346,
        "end": 363,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 346,
          "end": 353,
          "object": {
            "type": "Identifier",
            "start": 346,
            "end": 347,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 348,
            "end": 353,
            "name": "func1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 356,
          "end": 363,
          "object": {
            "type": "Identifier",
            "start": 356,
            "end": 357,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 358,
            "end": 363,
            "name": "func3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 365,
      "end": 383,
      "expression": {
        "type": "AssignmentExpression",
        "start": 365,
        "end": 382,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 365,
          "end": 372,
          "object": {
            "type": "Identifier",
            "start": 365,
            "end": 366,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 367,
            "end": 372,
            "name": "func2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 375,
          "end": 382,
          "object": {
            "type": "Identifier",
            "start": 375,
            "end": 376,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 377,
            "end": 382,
            "name": "func1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 402,
      "expression": {
        "type": "AssignmentExpression",
        "start": 384,
        "end": 401,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 384,
          "end": 391,
          "object": {
            "type": "Identifier",
            "start": 384,
            "end": 385,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 386,
            "end": 391,
            "name": "func2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 394,
          "end": 401,
          "object": {
            "type": "Identifier",
            "start": 394,
            "end": 395,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 396,
            "end": 401,
            "name": "func3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 403,
      "end": 421,
      "expression": {
        "type": "AssignmentExpression",
        "start": 403,
        "end": 420,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 403,
          "end": 410,
          "object": {
            "type": "Identifier",
            "start": 403,
            "end": 404,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 405,
            "end": 410,
            "name": "func3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 413,
          "end": 420,
          "object": {
            "type": "Identifier",
            "start": 413,
            "end": 414,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 415,
            "end": 420,
            "name": "func1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 422,
      "end": 440,
      "expression": {
        "type": "AssignmentExpression",
        "start": 422,
        "end": 439,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 422,
          "end": 429,
          "object": {
            "type": "Identifier",
            "start": 422,
            "end": 423,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 424,
            "end": 429,
            "name": "func3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 432,
          "end": 439,
          "object": {
            "type": "Identifier",
            "start": 432,
            "end": 433,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 434,
            "end": 439,
            "name": "func2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 442,
      "end": 591,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 446,
          "end": 590,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 590,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 447,
              "end": 590,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 449,
                "end": 590,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 455,
                    "end": 480,
                    "key": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 460,
                      "name": "func4",
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
                        "start": 461,
                        "end": 470,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 462,
                          "end": 470,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 464,
                            "end": 470
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 471,
                      "end": 479,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 473,
                        "end": 479
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 485,
                    "end": 510,
                    "key": {
                      "type": "Identifier",
                      "start": 485,
                      "end": 490,
                      "name": "func4",
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
                        "start": 491,
                        "end": 500,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 492,
                          "end": 500,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 494,
                            "end": 500
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 501,
                      "end": 509,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 503,
                        "end": 509
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 515,
                    "end": 588,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 515,
                      "end": 520,
                      "name": "func5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 520,
                      "end": 587,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 522,
                        "end": 587,
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 532,
                            "end": 552,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 533,
                                "end": 542,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 534,
                                  "end": 542,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 536,
                                    "end": 542
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 543,
                              "end": 551,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 545,
                                "end": 551
                              }
                            }
                          },
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 561,
                            "end": 581,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 562,
                                "end": 571,
                                "name": "s",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 563,
                                  "end": 571,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 565,
                                    "end": 571
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 572,
                              "end": 580,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 574,
                                "end": 580
                              }
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
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
      "type": "ExpressionStatement",
      "start": 606,
      "end": 624,
      "expression": {
        "type": "AssignmentExpression",
        "start": 606,
        "end": 623,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 606,
          "end": 613,
          "object": {
            "type": "Identifier",
            "start": 606,
            "end": 607,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 608,
            "end": 613,
            "name": "func4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 616,
          "end": 623,
          "object": {
            "type": "Identifier",
            "start": 616,
            "end": 617,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 618,
            "end": 623,
            "name": "func5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 625,
      "end": 643,
      "expression": {
        "type": "AssignmentExpression",
        "start": 625,
        "end": 642,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 625,
          "end": 632,
          "object": {
            "type": "Identifier",
            "start": 625,
            "end": 626,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 627,
            "end": 632,
            "name": "func5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 635,
          "end": 642,
          "object": {
            "type": "Identifier",
            "start": 635,
            "end": 636,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 637,
            "end": 642,
            "name": "func4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 665,
      "end": 852,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 669,
          "end": 852,
          "id": {
            "type": "Identifier",
            "start": 669,
            "end": 852,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 671,
              "end": 852,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 673,
                "end": 852,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 679,
                    "end": 702,
                    "key": {
                      "type": "Identifier",
                      "start": 679,
                      "end": 684,
                      "name": "func1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 684,
                      "end": 687,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 685,
                          "end": 686,
                          "name": {
                            "type": "Identifier",
                            "start": 685,
                            "end": 686,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 688,
                        "end": 692,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 689,
                          "end": 692,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 691,
                            "end": 692,
                            "typeName": {
                              "type": "Identifier",
                              "start": 691,
                              "end": 692,
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
                      "start": 693,
                      "end": 701,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 695,
                        "end": 701
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 735,
                    "end": 762,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 735,
                      "end": 740,
                      "name": "func2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 740,
                      "end": 761,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 742,
                        "end": 761,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 742,
                          "end": 745,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 743,
                              "end": 744,
                              "name": {
                                "type": "Identifier",
                                "start": 743,
                                "end": 744,
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 746,
                            "end": 750,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 747,
                              "end": 750,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 749,
                                "end": 750,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 749,
                                  "end": 750,
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
                          "start": 752,
                          "end": 761,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 755,
                            "end": 761
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 796,
                    "end": 825,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 796,
                      "end": 801,
                      "name": "func3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 801,
                      "end": 824,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 803,
                        "end": 824,
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 805,
                            "end": 822,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 805,
                              "end": 808,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 806,
                                  "end": 807,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 806,
                                    "end": 807,
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
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 809,
                                "end": 813,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 810,
                                  "end": 813,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 812,
                                    "end": 813,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 812,
                                      "end": 813,
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
                              "start": 814,
                              "end": 822,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 816,
                                "end": 822
                              }
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
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
      "type": "ExpressionStatement",
      "start": 867,
      "end": 887,
      "expression": {
        "type": "AssignmentExpression",
        "start": 867,
        "end": 886,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 867,
          "end": 875,
          "object": {
            "type": "Identifier",
            "start": 867,
            "end": 869,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 870,
            "end": 875,
            "name": "func1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 878,
          "end": 886,
          "object": {
            "type": "Identifier",
            "start": 878,
            "end": 880,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 881,
            "end": 886,
            "name": "func2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 888,
      "end": 908,
      "expression": {
        "type": "AssignmentExpression",
        "start": 888,
        "end": 907,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 888,
          "end": 896,
          "object": {
            "type": "Identifier",
            "start": 888,
            "end": 890,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 891,
            "end": 896,
            "name": "func1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 899,
          "end": 907,
          "object": {
            "type": "Identifier",
            "start": 899,
            "end": 901,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 902,
            "end": 907,
            "name": "func3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 909,
      "end": 929,
      "expression": {
        "type": "AssignmentExpression",
        "start": 909,
        "end": 928,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 909,
          "end": 917,
          "object": {
            "type": "Identifier",
            "start": 909,
            "end": 911,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 912,
            "end": 917,
            "name": "func2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 920,
          "end": 928,
          "object": {
            "type": "Identifier",
            "start": 920,
            "end": 922,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 923,
            "end": 928,
            "name": "func1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 930,
      "end": 950,
      "expression": {
        "type": "AssignmentExpression",
        "start": 930,
        "end": 949,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 930,
          "end": 938,
          "object": {
            "type": "Identifier",
            "start": 930,
            "end": 932,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 933,
            "end": 938,
            "name": "func2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 941,
          "end": 949,
          "object": {
            "type": "Identifier",
            "start": 941,
            "end": 943,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 944,
            "end": 949,
            "name": "func3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 951,
      "end": 971,
      "expression": {
        "type": "AssignmentExpression",
        "start": 951,
        "end": 970,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 951,
          "end": 959,
          "object": {
            "type": "Identifier",
            "start": 951,
            "end": 953,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 954,
            "end": 959,
            "name": "func3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 962,
          "end": 970,
          "object": {
            "type": "Identifier",
            "start": 962,
            "end": 964,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 965,
            "end": 970,
            "name": "func1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 972,
      "end": 992,
      "expression": {
        "type": "AssignmentExpression",
        "start": 972,
        "end": 991,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 972,
          "end": 980,
          "object": {
            "type": "Identifier",
            "start": 972,
            "end": 974,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 975,
            "end": 980,
            "name": "func3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 983,
          "end": 991,
          "object": {
            "type": "Identifier",
            "start": 983,
            "end": 985,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 986,
            "end": 991,
            "name": "func2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 994,
      "end": 1136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 998,
          "end": 1135,
          "id": {
            "type": "Identifier",
            "start": 998,
            "end": 1135,
            "name": "c2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1000,
              "end": 1135,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1002,
                "end": 1135,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 1008,
                    "end": 1031,
                    "key": {
                      "type": "Identifier",
                      "start": 1008,
                      "end": 1013,
                      "name": "func4",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1013,
                      "end": 1016,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1014,
                          "end": 1015,
                          "name": {
                            "type": "Identifier",
                            "start": 1014,
                            "end": 1015,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1017,
                        "end": 1021,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1018,
                          "end": 1021,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1020,
                            "end": 1021,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1020,
                              "end": 1021,
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
                      "start": 1022,
                      "end": 1030,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1024,
                        "end": 1030
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1036,
                    "end": 1059,
                    "key": {
                      "type": "Identifier",
                      "start": 1036,
                      "end": 1041,
                      "name": "func4",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1041,
                      "end": 1044,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1042,
                          "end": 1043,
                          "name": {
                            "type": "Identifier",
                            "start": 1042,
                            "end": 1043,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1045,
                        "end": 1049,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1046,
                          "end": 1049,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1048,
                            "end": 1049,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1048,
                              "end": 1049,
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
                      "start": 1050,
                      "end": 1058,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1052,
                        "end": 1058
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1064,
                    "end": 1133,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1064,
                      "end": 1069,
                      "name": "func5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1069,
                      "end": 1132,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1071,
                        "end": 1132,
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 1081,
                            "end": 1099,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 1081,
                              "end": 1084,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1082,
                                  "end": 1083,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1082,
                                    "end": 1083,
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
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1085,
                                "end": 1089,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1086,
                                  "end": 1089,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1088,
                                    "end": 1089,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1088,
                                      "end": 1089,
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
                              "start": 1090,
                              "end": 1098,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1092,
                                "end": 1098
                              }
                            }
                          },
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 1108,
                            "end": 1126,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 1108,
                              "end": 1111,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1109,
                                  "end": 1110,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1109,
                                    "end": 1110,
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
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1112,
                                "end": 1116,
                                "name": "s",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1113,
                                  "end": 1116,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1115,
                                    "end": 1116,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1115,
                                      "end": 1116,
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
                              "start": 1117,
                              "end": 1125,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1119,
                                "end": 1125
                              }
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
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
      "type": "ExpressionStatement",
      "start": 1151,
      "end": 1171,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1151,
        "end": 1170,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1151,
          "end": 1159,
          "object": {
            "type": "Identifier",
            "start": 1151,
            "end": 1153,
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1154,
            "end": 1159,
            "name": "func4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1162,
          "end": 1170,
          "object": {
            "type": "Identifier",
            "start": 1162,
            "end": 1164,
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1165,
            "end": 1170,
            "name": "func5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1172,
      "end": 1192,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1172,
        "end": 1191,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1172,
          "end": 1180,
          "object": {
            "type": "Identifier",
            "start": 1172,
            "end": 1174,
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1175,
            "end": 1180,
            "name": "func5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1183,
          "end": 1191,
          "object": {
            "type": "Identifier",
            "start": 1183,
            "end": 1185,
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1186,
            "end": 1191,
            "name": "func4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
