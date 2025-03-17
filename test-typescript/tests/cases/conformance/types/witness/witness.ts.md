__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 2357,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 27,
            "decorators": [],
            "name": "varInit",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 30,
            "end": 37,
            "decorators": [],
            "name": "varInit",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 60,
            "decorators": [],
            "name": "pInit",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 60,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 57,
                "end": 60
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
      "type": "FunctionDeclaration",
      "start": 62,
      "end": 112,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 89,
        "end": 112,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 95,
            "end": 110,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 99,
                "end": 109,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 109,
                  "decorators": [],
                  "name": "pInit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 109,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 106,
                      "end": 109
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 73,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 74,
          "end": 87,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 74,
            "end": 79,
            "decorators": [],
            "name": "pInit",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 82,
            "end": 87,
            "decorators": [],
            "name": "pInit",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 113,
      "end": 209,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 209,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 135,
            "end": 146,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 139,
              "end": 145,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 139,
                "end": 143
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 151,
            "end": 207,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 153,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 153,
              "end": 207,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 156,
                "end": 207,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 166,
                    "end": 181,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 170,
                        "end": 180,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 170,
                          "end": 171,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 174,
                          "end": 180,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 174,
                            "end": 178
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 179,
                            "end": 180,
                            "decorators": [],
                            "name": "x",
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
                    "start": 190,
                    "end": 201,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 194,
                        "end": 200,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 200,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 195,
                            "end": 200,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 197,
                              "end": 200
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 128,
        "decorators": [],
        "name": "InitClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 226,
      "end": 274,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 247,
        "end": 274,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 253,
            "end": 272,
            "argument": {
              "type": "CallExpression",
              "start": 260,
              "end": 271,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 260,
                "end": 269,
                "decorators": [],
                "name": "fnReturn1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 244,
        "decorators": [],
        "name": "fnReturn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 285,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 285,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 280,
              "end": 285,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 282,
                "end": 285
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
      "start": 287,
      "end": 307,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 306,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 292,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 295,
            "end": 306,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 295,
              "end": 304,
              "decorators": [],
              "name": "fnReturn1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 309,
      "end": 355,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 330,
        "end": 355,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 336,
            "end": 353,
            "argument": {
              "type": "Identifier",
              "start": 343,
              "end": 352,
              "decorators": [],
              "name": "fnReturn2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 327,
        "decorators": [],
        "name": "fnReturn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 356,
      "end": 390,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 389,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 375,
            "decorators": [],
            "name": "fnr2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 375,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 366,
                "end": 375,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 369,
                  "end": 375,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 372,
                    "end": 375
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 378,
            "end": 389,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 378,
              "end": 387,
              "decorators": [],
              "name": "fnReturn2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 419,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 408,
            "decorators": [],
            "name": "co1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "SequenceExpression",
            "start": 412,
            "end": 418,
            "expressions": [
              {
                "type": "Identifier",
                "start": 412,
                "end": 415,
                "decorators": [],
                "name": "co1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 417,
                "end": 418,
                "raw": "3",
                "value": 3
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 421,
      "end": 437,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 425,
          "end": 436,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 425,
            "end": 436,
            "decorators": [],
            "name": "co1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 436,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 430,
                "end": 436
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
      "start": 438,
      "end": 460,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 442,
          "end": 459,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 445,
            "decorators": [],
            "name": "co2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "SequenceExpression",
            "start": 449,
            "end": 458,
            "expressions": [
              {
                "type": "Literal",
                "start": 449,
                "end": 450,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 452,
                "end": 453,
                "raw": "4",
                "value": 4
              },
              {
                "type": "Identifier",
                "start": 455,
                "end": 458,
                "decorators": [],
                "name": "co2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 461,
      "end": 474,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 465,
          "end": 473,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 465,
            "end": 473,
            "decorators": [],
            "name": "co2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 468,
              "end": 473,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 470,
                "end": 473
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
      "start": 475,
      "end": 506,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 479,
          "end": 505,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 479,
            "end": 482,
            "decorators": [],
            "name": "co3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "SequenceExpression",
            "start": 486,
            "end": 504,
            "expressions": [
              {
                "type": "Identifier",
                "start": 486,
                "end": 489,
                "decorators": [],
                "name": "co1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 491,
                "end": 494,
                "decorators": [],
                "name": "co2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 496,
                "end": 499,
                "decorators": [],
                "name": "co3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 501,
                "end": 504,
                "decorators": [],
                "name": "co1",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 507,
      "end": 523,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 511,
          "end": 522,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 511,
            "end": 522,
            "decorators": [],
            "name": "co3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 514,
              "end": 522,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 516,
                "end": 522
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
      "start": 539,
      "end": 559,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 543,
          "end": 558,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 543,
            "end": 546,
            "decorators": [],
            "name": "as1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 550,
            "end": 557,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 550,
              "end": 553,
              "decorators": [],
              "name": "as1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 556,
              "end": 557,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 560,
      "end": 576,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 564,
          "end": 575,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 564,
            "end": 575,
            "decorators": [],
            "name": "as1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 567,
              "end": 575,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 569,
                "end": 575
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
      "start": 577,
      "end": 603,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 581,
          "end": 602,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 581,
            "end": 584,
            "decorators": [],
            "name": "as2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 588,
            "end": 601,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 588,
              "end": 591,
              "decorators": [],
              "name": "as2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "AssignmentExpression",
              "start": 594,
              "end": 601,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 594,
                "end": 597,
                "decorators": [],
                "name": "as2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 600,
                "end": 601,
                "raw": "2",
                "value": 2
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 604,
      "end": 620,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 619,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 619,
            "decorators": [],
            "name": "as2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 611,
              "end": 619,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 613,
                "end": 619
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
      "start": 637,
      "end": 661,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 641,
          "end": 660,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 641,
            "end": 645,
            "decorators": [],
            "name": "cnd1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 648,
            "end": 660,
            "alternate": {
              "type": "Literal",
              "start": 659,
              "end": 660,
              "raw": "1",
              "value": 1
            },
            "consequent": {
              "type": "Literal",
              "start": 655,
              "end": 656,
              "raw": "0",
              "value": 0
            },
            "test": {
              "type": "Identifier",
              "start": 648,
              "end": 652,
              "decorators": [],
              "name": "cnd1",
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
      "start": 662,
      "end": 679,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 666,
          "end": 678,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 666,
            "end": 678,
            "decorators": [],
            "name": "cnd1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 670,
              "end": 678,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 672,
                "end": 678
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
      "start": 680,
      "end": 718,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 684,
          "end": 717,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 684,
            "end": 688,
            "decorators": [],
            "name": "cnd2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 691,
            "end": 717,
            "alternate": {
              "type": "Literal",
              "start": 715,
              "end": 717,
              "raw": "''",
              "value": ""
            },
            "consequent": {
              "type": "ConditionalExpression",
              "start": 698,
              "end": 712,
              "alternate": {
                "type": "Literal",
                "start": 710,
                "end": 712,
                "raw": "\"\"",
                "value": ""
              },
              "consequent": {
                "type": "Literal",
                "start": 705,
                "end": 707,
                "raw": "''",
                "value": ""
              },
              "test": {
                "type": "Identifier",
                "start": 698,
                "end": 702,
                "decorators": [],
                "name": "cnd1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "test": {
              "type": "Identifier",
              "start": 691,
              "end": 695,
              "decorators": [],
              "name": "cnd1",
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
      "end": 736,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 723,
          "end": 735,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 723,
            "end": 735,
            "decorators": [],
            "name": "cnd2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 727,
              "end": 735,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 729,
                "end": 735
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
      "start": 744,
      "end": 764,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 748,
          "end": 763,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 748,
            "end": 751,
            "decorators": [],
            "name": "or1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 754,
            "end": 763,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 754,
              "end": 757,
              "decorators": [],
              "name": "or1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 761,
              "end": 763,
              "raw": "''",
              "value": ""
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 765,
      "end": 778,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 769,
          "end": 777,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 769,
            "end": 777,
            "decorators": [],
            "name": "or1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 772,
              "end": 777,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 774,
                "end": 777
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
      "start": 779,
      "end": 799,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 783,
          "end": 798,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 783,
            "end": 786,
            "decorators": [],
            "name": "or2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 789,
            "end": 798,
            "operator": "||",
            "left": {
              "type": "Literal",
              "start": 789,
              "end": 791,
              "raw": "''",
              "value": ""
            },
            "right": {
              "type": "Identifier",
              "start": 795,
              "end": 798,
              "decorators": [],
              "name": "or2",
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
      "start": 800,
      "end": 813,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 804,
          "end": 812,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 804,
            "end": 812,
            "decorators": [],
            "name": "or2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 807,
              "end": 812,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 809,
                "end": 812
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
      "start": 814,
      "end": 835,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 818,
          "end": 834,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 818,
            "end": 821,
            "decorators": [],
            "name": "or3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 824,
            "end": 834,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 824,
              "end": 827,
              "decorators": [],
              "name": "or3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 831,
              "end": 834,
              "decorators": [],
              "name": "or3",
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
      "start": 836,
      "end": 849,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 840,
          "end": 848,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 840,
            "end": 848,
            "decorators": [],
            "name": "or3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 843,
              "end": 848,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 845,
                "end": 848
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
      "start": 857,
      "end": 879,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 861,
          "end": 878,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 861,
            "end": 865,
            "decorators": [],
            "name": "and1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 868,
            "end": 878,
            "operator": "&&",
            "left": {
              "type": "Identifier",
              "start": 868,
              "end": 872,
              "decorators": [],
              "name": "and1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 876,
              "end": 878,
              "raw": "''",
              "value": ""
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 880,
      "end": 897,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 884,
          "end": 896,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 884,
            "end": 896,
            "decorators": [],
            "name": "and1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 888,
              "end": 896,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 890,
                "end": 896
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
      "start": 898,
      "end": 920,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 902,
          "end": 919,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 902,
            "end": 906,
            "decorators": [],
            "name": "and2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 909,
            "end": 919,
            "operator": "&&",
            "left": {
              "type": "Literal",
              "start": 909,
              "end": 911,
              "raw": "''",
              "value": ""
            },
            "right": {
              "type": "Identifier",
              "start": 915,
              "end": 919,
              "decorators": [],
              "name": "and2",
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
      "start": 921,
      "end": 935,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 925,
          "end": 934,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 925,
            "end": 934,
            "decorators": [],
            "name": "and2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 929,
              "end": 934,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 931,
                "end": 934
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
      "start": 936,
      "end": 960,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 940,
          "end": 959,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 940,
            "end": 944,
            "decorators": [],
            "name": "and3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 947,
            "end": 959,
            "operator": "&&",
            "left": {
              "type": "Identifier",
              "start": 947,
              "end": 951,
              "decorators": [],
              "name": "and3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 955,
              "end": 959,
              "decorators": [],
              "name": "and3",
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
      "start": 961,
      "end": 975,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 965,
          "end": 974,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 965,
            "end": 974,
            "decorators": [],
            "name": "and3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 969,
              "end": 974,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 971,
                "end": 974
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
      "type": "FunctionDeclaration",
      "start": 1006,
      "end": 1048,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1024,
        "end": 1048,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1030,
            "end": 1046,
            "argument": {
              "type": "CallExpression",
              "start": 1037,
              "end": 1045,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1037,
                "end": 1043,
                "decorators": [],
                "name": "fnCall",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1015,
        "end": 1021,
        "decorators": [],
        "name": "fnCall",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1049,
      "end": 1077,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1053,
          "end": 1076,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1053,
            "end": 1065,
            "decorators": [],
            "name": "fnCallResult",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1068,
            "end": 1076,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1068,
              "end": 1074,
              "decorators": [],
              "name": "fnCall",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1078,
      "end": 1100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1082,
          "end": 1099,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1082,
            "end": 1099,
            "decorators": [],
            "name": "fnCallResult",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1094,
              "end": 1099,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1096,
                "end": 1099
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
      "type": "FunctionDeclaration",
      "start": 1119,
      "end": 1240,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1164,
        "end": 1240,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1170,
            "end": 1215,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1174,
                "end": 1214,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1174,
                  "end": 1214,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1175,
                    "end": 1214,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1177,
                      "end": 1214,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1178,
                          "end": 1194,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1179,
                            "end": 1194,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 1181,
                              "end": 1194,
                              "exprName": {
                                "type": "Identifier",
                                "start": 1188,
                                "end": 1194,
                                "decorators": [],
                                "name": "fnArg1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1196,
                          "end": 1205,
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1197,
                            "end": 1205,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1199,
                              "end": 1205
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1207,
                        "end": 1214,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1210,
                          "end": 1214
                        }
                      },
                      "typeParameters": null
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
            "start": 1220,
            "end": 1238,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1220,
              "end": 1237,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1227,
                  "end": 1233,
                  "decorators": [],
                  "name": "fnArg1",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Literal",
                  "start": 1235,
                  "end": 1236,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1220,
                "end": 1226,
                "decorators": [],
                "name": "fnArg1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1128,
        "end": 1134,
        "decorators": [],
        "name": "fnArg1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1135,
          "end": 1151,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1136,
            "end": 1151,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1138,
              "end": 1151,
              "exprName": {
                "type": "Identifier",
                "start": 1145,
                "end": 1151,
                "decorators": [],
                "name": "fnArg1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1153,
          "end": 1162,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1154,
            "end": 1162,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1156,
              "end": 1162
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1242,
      "end": 1295,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1251,
        "end": 1260,
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1261,
          "end": 1285,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1262,
            "end": 1285,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1264,
              "end": 1285,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1265,
                  "end": 1274,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1266,
                    "end": 1274,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1268,
                      "end": 1274
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1276,
                "end": 1285,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1279,
                  "end": 1285
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1286,
        "end": 1294,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1288,
          "end": 1294
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1296,
      "end": 1349,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1305,
        "end": 1314,
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1315,
          "end": 1339,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1316,
            "end": 1339,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1318,
              "end": 1339,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1319,
                  "end": 1328,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1320,
                    "end": 1328,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1322,
                      "end": 1328
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1330,
                "end": 1339,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1333,
                  "end": 1339
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1340,
        "end": 1348,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1342,
          "end": 1348
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1350,
      "end": 1394,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1359,
        "end": 1368,
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1369,
          "end": 1387,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1370,
            "end": 1387,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1372,
              "end": 1387,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1373,
                  "end": 1379,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1374,
                    "end": 1379,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1376,
                      "end": 1379
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1381,
                "end": 1387,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1384,
                  "end": 1387
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1388,
        "end": 1393,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1390,
          "end": 1393
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1395,
      "end": 1437,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1416,
        "end": 1437,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1418,
            "end": 1435,
            "argument": {
              "type": "Identifier",
              "start": 1425,
              "end": 1434,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1404,
        "end": 1413,
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 1437,
      "end": 1438
    },
    {
      "type": "FunctionDeclaration",
      "start": 1440,
      "end": 1491,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1458,
        "end": 1491,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1464,
            "end": 1489,
            "argument": {
              "type": "CallExpression",
              "start": 1471,
              "end": 1488,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1481,
                  "end": 1487,
                  "decorators": [],
                  "name": "fnArg2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1471,
                "end": 1480,
                "decorators": [],
                "name": "overload1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1449,
        "end": 1455,
        "decorators": [],
        "name": "fnArg2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1492,
      "end": 1509,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1496,
          "end": 1508,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1496,
            "end": 1497,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1500,
            "end": 1508,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1500,
              "end": 1506,
              "decorators": [],
              "name": "fnArg2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 1566,
      "end": 1764,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1574,
        "end": 1764,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1580,
            "end": 1628,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1580,
              "end": 1583,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1583,
              "end": 1628,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1586,
                "end": 1628,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1596,
                    "end": 1622,
                    "argument": {
                      "type": "NewExpression",
                      "start": 1603,
                      "end": 1621,
                      "arguments": [],
                      "callee": {
                        "type": "CallExpression",
                        "start": 1608,
                        "end": 1618,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1608,
                          "end": 1616,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1608,
                            "end": 1612
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1613,
                            "end": 1616,
                            "decorators": [],
                            "name": "fn1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1633,
            "end": 1679,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1633,
              "end": 1636,
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1636,
              "end": 1679,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1639,
                "end": 1679,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1649,
                    "end": 1673,
                    "argument": {
                      "type": "NewExpression",
                      "start": 1656,
                      "end": 1672,
                      "arguments": [],
                      "callee": {
                        "type": "CallExpression",
                        "start": 1661,
                        "end": 1671,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1661,
                          "end": 1669,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1661,
                            "end": 1665
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1666,
                            "end": 1669,
                            "decorators": [],
                            "name": "fn2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1684,
            "end": 1762,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1684,
              "end": 1687,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1687,
              "end": 1762,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1690,
                "end": 1762,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1700,
                    "end": 1724,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1704,
                        "end": 1723,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1704,
                          "end": 1723,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1705,
                            "end": 1723,
                            "typeAnnotation": {
                              "type": "TSConstructorType",
                              "start": 1707,
                              "end": 1723,
                              "abstract": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1711,
                                  "end": 1712,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1714,
                                "end": 1723,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1717,
                                  "end": 1723
                                }
                              },
                              "typeParameters": null
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
                    "type": "ReturnStatement",
                    "start": 1733,
                    "end": 1756,
                    "argument": {
                      "type": "NewExpression",
                      "start": 1740,
                      "end": 1755,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 1746,
                          "end": 1754,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1746,
                            "end": 1750
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1751,
                            "end": 1754,
                            "decorators": [],
                            "name": "fn3",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 1744,
                        "end": 1745,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1572,
        "end": 1573,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1766,
      "end": 1837,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1781,
        "end": 1837,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1787,
            "end": 1812,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1791,
                "end": 1811,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1791,
                  "end": 1811,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1792,
                    "end": 1811,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1794,
                      "end": 1811,
                      "abstract": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1799,
                          "end": 1800,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1802,
                        "end": 1811,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1805,
                          "end": 1811
                        }
                      },
                      "typeParameters": null
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
            "type": "ReturnStatement",
            "start": 1817,
            "end": 1835,
            "argument": {
              "type": "NewExpression",
              "start": 1824,
              "end": 1834,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1830,
                  "end": 1833,
                  "decorators": [],
                  "name": "fn5",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1828,
                "end": 1829,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1775,
        "end": 1778,
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1838,
      "end": 1855,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1842,
          "end": 1854,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1842,
            "end": 1846,
            "decorators": [],
            "name": "fn5r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1849,
            "end": 1854,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1849,
              "end": 1852,
              "decorators": [],
              "name": "fn5",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1918,
      "end": 1955,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1922,
          "end": 1954,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1922,
            "end": 1930,
            "decorators": [],
            "name": "propAcc1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1933,
            "end": 1954,
            "properties": [
              {
                "type": "Property",
                "start": 1939,
                "end": 1952,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1939,
                  "end": 1940,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "start": 1942,
                  "end": 1952,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1942,
                    "end": 1950,
                    "decorators": [],
                    "name": "propAcc1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1951,
                    "end": 1952,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1956,
      "end": 1981,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1960,
          "end": 1981,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1960,
            "end": 1981,
            "decorators": [],
            "name": "propAcc1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1968,
              "end": 1981,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1970,
                "end": 1981,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1972,
                    "end": 1979,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1972,
                      "end": 1973,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1973,
                      "end": 1978,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1975,
                        "end": 1978
                      }
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
      "type": "TSModuleDeclaration",
      "start": 2019,
      "end": 2088,
      "body": {
        "type": "TSModuleBlock",
        "start": 2029,
        "end": 2088,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 2035,
            "end": 2055,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2042,
              "end": 2055,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2046,
                  "end": 2054,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2046,
                    "end": 2047,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 2050,
                    "end": 2054,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2050,
                      "end": 2052,
                      "decorators": [],
                      "name": "M2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2053,
                      "end": 2054,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 2060,
            "end": 2070,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2064,
                "end": 2069,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2064,
                  "end": 2065,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 2068,
                  "end": 2069,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 2075,
            "end": 2086,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2079,
                "end": 2085,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2079,
                  "end": 2085,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2080,
                    "end": 2085,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2082,
                      "end": 2085
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 2026,
        "end": 2028,
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 2132,
      "end": 2170,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2141,
        "end": 2170,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2147,
            "end": 2158,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2147,
              "end": 2148,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 2151,
              "end": 2157,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 2151,
                "end": 2155
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2156,
                "end": 2157,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2138,
        "end": 2140,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2171,
      "end": 2195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2175,
          "end": 2194,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2175,
            "end": 2181,
            "decorators": [],
            "name": "c2inst",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 2184,
            "end": 2194,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 2184,
              "end": 2192,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 2188,
                "end": 2190,
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2193,
              "end": 2194,
              "decorators": [],
              "name": "n",
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
      "start": 2196,
      "end": 2212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2200,
          "end": 2211,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2200,
            "end": 2211,
            "decorators": [],
            "name": "c2inst",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2206,
              "end": 2211,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2208,
                "end": 2211
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
      "type": "ClassDeclaration",
      "start": 2254,
      "end": 2287,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2263,
        "end": 2287,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2269,
            "end": 2285,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2276,
              "end": 2277,
              "decorators": [],
              "name": "q",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 2280,
              "end": 2284,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2280,
                "end": 2282,
                "decorators": [],
                "name": "C3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2283,
                "end": 2284,
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2260,
        "end": 2262,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2288,
      "end": 2302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2292,
          "end": 2301,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2292,
            "end": 2294,
            "decorators": [],
            "name": "qq",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 2297,
            "end": 2301,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2297,
              "end": 2299,
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2300,
              "end": 2301,
              "decorators": [],
              "name": "q",
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
      "start": 2303,
      "end": 2315,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2307,
          "end": 2314,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2307,
            "end": 2314,
            "decorators": [],
            "name": "qq",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2309,
              "end": 2314,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2311,
                "end": 2314
              }
            }
          },
          "init": null
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
