__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 1075,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 171,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 171,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 100,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 76,
              "end": 79,
              "raw": "\"B\"",
              "value": "B"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 80,
              "end": 100,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 81,
                  "end": 90,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 84,
                      "end": 90
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 91,
                "end": 99,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 93,
                  "end": 99
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 169,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 106,
              "end": 109,
              "raw": "\"A\"",
              "value": "A"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 169,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 169,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 154,
                    "end": 163,
                    "argument": {
                      "type": "Literal",
                      "start": 161,
                      "end": 162,
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
                  "start": 111,
                  "end": 127,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 112,
                    "end": 127,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 114,
                      "end": 127,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 114,
                          "end": 120
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 121,
                          "end": 127
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 128,
                "end": 145,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 130,
                  "end": 145,
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 130,
                      "end": 136
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 139,
                      "end": 145
                    }
                  ]
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 68,
        "decorators": [],
        "name": "Person",
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
      "start": 172,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 180,
            "end": 192,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 184,
              "end": 190,
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 200,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 194,
        "end": 200,
        "arguments": [
          {
            "type": "Literal",
            "start": 198,
            "end": 199,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 194,
          "end": 197,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 207,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 201,
        "end": 207,
        "arguments": [
          {
            "type": "Literal",
            "start": 205,
            "end": 206,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 201,
          "end": 204,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 265,
      "end": 357,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 273,
        "end": 357,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 279,
            "end": 294,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 280,
              "end": 285,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 286,
              "end": 294,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 288,
                "end": 294,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 290,
                  "end": 294
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 299,
            "end": 315,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 300,
              "end": 305,
              "raw": "\"bar\"",
              "value": "bar"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 306,
              "end": 315,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 308,
                "end": 314,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 310,
                  "end": 314
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 320,
            "end": 355,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 321,
              "end": 326,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 327,
              "end": 355,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 330,
                "end": 355,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 340,
                    "end": 349,
                    "argument": {
                      "type": "Literal",
                      "start": 347,
                      "end": 348,
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
        "start": 271,
        "end": 272,
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
      "type": "VariableDeclaration",
      "start": 359,
      "end": 398,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 373,
          "end": 397,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 373,
            "end": 397,
            "decorators": [],
            "name": "uniqueSym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 382,
              "end": 397,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 384,
                "end": 397,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 391,
                  "end": 397
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 399,
      "end": 439,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 413,
          "end": 438,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 413,
            "end": 438,
            "decorators": [],
            "name": "uniqueSym2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 423,
              "end": 438,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 425,
                "end": 438,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 432,
                  "end": 438
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 440,
      "end": 466,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 465,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 465,
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 457,
              "end": 465,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 459,
                "end": 465
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 468,
      "end": 506,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 482,
          "end": 505,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 482,
            "end": 505,
            "decorators": [],
            "name": "strUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 490,
              "end": 505,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 492,
                "end": 505,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 492,
                    "end": 497,
                    "literal": {
                      "type": "Literal",
                      "start": 492,
                      "end": 497,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 500,
                    "end": 505,
                    "literal": {
                      "type": "Literal",
                      "start": 500,
                      "end": 505,
                      "raw": "'bar'",
                      "value": "bar"
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 508,
      "end": 647,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 517,
        "end": 647,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 523,
            "end": 537,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 524,
              "end": 527,
              "decorators": [],
              "name": "sym",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 528,
              "end": 537,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 530,
                "end": 536,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 532,
                  "end": 536
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 559,
            "end": 580,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 560,
              "end": 570,
              "decorators": [],
              "name": "uniqueSym2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 571,
              "end": 580,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 573,
                "end": 579,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 575,
                  "end": 579
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 603,
            "end": 623,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 604,
              "end": 613,
              "decorators": [],
              "name": "uniqueSym",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 614,
              "end": 623,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 616,
                "end": 622,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 618,
                  "end": 622
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 628,
            "end": 645,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 629,
              "end": 638,
              "decorators": [],
              "name": "uniqueSym",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 639,
              "end": 645,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 642,
                "end": 645,
                "body": []
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
        "start": 514,
        "end": 516,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 649,
      "end": 777,
      "body": {
        "type": "TSInterfaceBody",
        "start": 662,
        "end": 777,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 668,
            "end": 682,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 669,
              "end": 672,
              "decorators": [],
              "name": "sym",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 675,
              "end": 681,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 677,
                "end": 681
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 704,
            "end": 725,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 705,
              "end": 715,
              "decorators": [],
              "name": "uniqueSym2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 718,
              "end": 724,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 720,
                "end": 724
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 730,
            "end": 750,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 731,
              "end": 740,
              "decorators": [],
              "name": "uniqueSym",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 755,
            "end": 775,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 756,
              "end": 765,
              "decorators": [],
              "name": "uniqueSym",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 768,
              "end": 774,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 770,
                "end": 774
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
        "start": 659,
        "end": 661,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 779,
      "end": 852,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 788,
        "end": 852,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 794,
            "end": 813,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 795,
              "end": 803,
              "decorators": [],
              "name": "strUnion",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 804,
              "end": 813,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 806,
                "end": 812,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 808,
                  "end": 812
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 834,
            "end": 850,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 835,
              "end": 843,
              "decorators": [],
              "name": "strUnion",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 844,
              "end": 850,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 847,
                "end": 850,
                "body": []
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
        "start": 785,
        "end": 787,
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
      "type": "ClassDeclaration",
      "start": 854,
      "end": 927,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 863,
        "end": 927,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 869,
            "end": 888,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 870,
              "end": 878,
              "decorators": [],
              "name": "strUnion",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 879,
              "end": 888,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 881,
                "end": 887,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 883,
                  "end": 887
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 909,
            "end": 925,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 910,
              "end": 918,
              "decorators": [],
              "name": "strUnion",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 919,
              "end": 925,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 922,
                "end": 925,
                "body": []
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
        "start": 860,
        "end": 862,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 929,
      "end": 1006,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 938,
        "end": 1006,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 944,
            "end": 956,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 945,
              "end": 946,
              "raw": "1",
              "value": 1
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 947,
              "end": 956,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 949,
                "end": 955,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 951,
                  "end": 955
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 978,
            "end": 990,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 979,
              "end": 980,
              "raw": "2",
              "value": 2
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 981,
              "end": 990,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 983,
                "end": 989,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 985,
                  "end": 989
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 995,
            "end": 1004,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 996,
              "end": 997,
              "raw": "2",
              "value": 2
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 998,
              "end": 1004,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1001,
                "end": 1004,
                "body": []
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
        "start": 935,
        "end": 937,
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
      "type": "TSInterfaceDeclaration",
      "start": 1008,
      "end": 1075,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1021,
        "end": 1075,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1027,
            "end": 1039,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 1028,
              "end": 1029,
              "raw": "1",
              "value": 1
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1032,
              "end": 1038,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1034,
                "end": 1038
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1044,
            "end": 1056,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 1045,
              "end": 1046,
              "raw": "2",
              "value": 2
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1049,
              "end": 1055,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1051,
                "end": 1055
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1061,
            "end": 1073,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 1062,
              "end": 1063,
              "raw": "2",
              "value": 2
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1066,
              "end": 1072,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1068,
                "end": 1072
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
        "start": 1018,
        "end": 1020,
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
