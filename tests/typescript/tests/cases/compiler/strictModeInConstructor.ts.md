__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 903,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 144,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 61,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 56,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 50,
                "end": 56
              }
            },
            "value": {
              "type": "Literal",
              "start": 59,
              "end": 60,
              "value": 9,
              "raw": "9"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 142,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 78,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 79,
              "end": 142,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 82,
                "end": 142,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 92,
                    "end": 105,
                    "expression": {
                      "type": "Literal",
                      "start": 92,
                      "end": 104,
                      "value": "use strict",
                      "raw": "\"use strict\""
                    },
                    "directive": "use strict"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 136,
                    "expression": {
                      "type": "CallExpression",
                      "start": 128,
                      "end": 135,
                      "callee": {
                        "type": "Super",
                        "start": 128,
                        "end": 133
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 146,
      "end": 283,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 153,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 162,
        "end": 163,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 164,
        "end": 283,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 170,
            "end": 191,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 186,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 180,
                "end": 186
              }
            },
            "value": {
              "type": "Literal",
              "start": 189,
              "end": 190,
              "value": 9,
              "raw": "9"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 197,
            "end": 281,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 208,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 209,
              "end": 281,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 212,
                "end": 281,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 222,
                    "end": 230,
                    "expression": {
                      "type": "CallExpression",
                      "start": 222,
                      "end": 229,
                      "callee": {
                        "type": "Super",
                        "start": 222,
                        "end": 227
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 262,
                    "end": 275,
                    "expression": {
                      "type": "Literal",
                      "start": 262,
                      "end": 274,
                      "value": "use strict",
                      "raw": "\"use strict\""
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 285,
      "end": 463,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 291,
        "end": 292,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 301,
        "end": 302,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 303,
        "end": 463,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 309,
            "end": 330,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 317,
              "end": 325,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 319,
                "end": 325
              }
            },
            "value": {
              "type": "Literal",
              "start": 328,
              "end": 329,
              "value": 9,
              "raw": "9"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 336,
            "end": 461,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 336,
              "end": 347,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 348,
              "end": 461,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 351,
                "end": 461,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 361,
                    "end": 371,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 365,
                        "end": 370,
                        "id": {
                          "type": "Identifier",
                          "start": 365,
                          "end": 366,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 369,
                          "end": 370,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 392,
                    "end": 407,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 396,
                        "end": 406,
                        "id": {
                          "type": "Identifier",
                          "start": 396,
                          "end": 397,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 400,
                          "end": 406,
                          "object": {
                            "type": "ThisExpression",
                            "start": 400,
                            "end": 404
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 405,
                            "end": 406,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 425,
                    "end": 433,
                    "expression": {
                      "type": "CallExpression",
                      "start": 425,
                      "end": 432,
                      "callee": {
                        "type": "Super",
                        "start": 425,
                        "end": 430
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 442,
                    "end": 455,
                    "expression": {
                      "type": "Literal",
                      "start": 442,
                      "end": 454,
                      "value": "use strict",
                      "raw": "\"use strict\""
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 465,
      "end": 601,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 473,
        "decorators": [],
        "name": "Bs",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 482,
        "end": 483,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 484,
        "end": 601,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 490,
            "end": 518,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 504,
              "end": 505,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 505,
              "end": 513,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 507,
                "end": 513
              }
            },
            "value": {
              "type": "Literal",
              "start": 516,
              "end": 517,
              "value": 9,
              "raw": "9"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 524,
            "end": 599,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 524,
              "end": 535,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 536,
              "end": 599,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 539,
                "end": 599,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 549,
                    "end": 562,
                    "expression": {
                      "type": "Literal",
                      "start": 549,
                      "end": 561,
                      "value": "use strict",
                      "raw": "\"use strict\""
                    },
                    "directive": "use strict"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 585,
                    "end": 593,
                    "expression": {
                      "type": "CallExpression",
                      "start": 585,
                      "end": 592,
                      "callee": {
                        "type": "Super",
                        "start": 585,
                        "end": 590
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 603,
      "end": 748,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 609,
        "end": 611,
        "decorators": [],
        "name": "Cs",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 620,
        "end": 621,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 622,
        "end": 748,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 628,
            "end": 656,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 642,
              "end": 643,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 643,
              "end": 651,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 645,
                "end": 651
              }
            },
            "value": {
              "type": "Literal",
              "start": 654,
              "end": 655,
              "value": 9,
              "raw": "9"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 662,
            "end": 746,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 662,
              "end": 673,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 674,
              "end": 746,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 677,
                "end": 746,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 687,
                    "end": 695,
                    "expression": {
                      "type": "CallExpression",
                      "start": 687,
                      "end": 694,
                      "callee": {
                        "type": "Super",
                        "start": 687,
                        "end": 692
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 727,
                    "end": 740,
                    "expression": {
                      "type": "Literal",
                      "start": 727,
                      "end": 739,
                      "value": "use strict",
                      "raw": "\"use strict\""
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 750,
      "end": 903,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 756,
        "end": 758,
        "decorators": [],
        "name": "Ds",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 767,
        "end": 768,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 769,
        "end": 903,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 775,
            "end": 803,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 789,
              "end": 790,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 790,
              "end": 798,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 792,
                "end": 798
              }
            },
            "value": {
              "type": "Literal",
              "start": 801,
              "end": 802,
              "value": 9,
              "raw": "9"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 809,
            "end": 901,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 809,
              "end": 820,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 821,
              "end": 901,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 824,
                "end": 901,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 834,
                    "end": 844,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 838,
                        "end": 843,
                        "id": {
                          "type": "Identifier",
                          "start": 838,
                          "end": 839,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 842,
                          "end": 843,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 865,
                    "end": 873,
                    "expression": {
                      "type": "CallExpression",
                      "start": 865,
                      "end": 872,
                      "callee": {
                        "type": "Super",
                        "start": 865,
                        "end": 870
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 882,
                    "end": 895,
                    "expression": {
                      "type": "Literal",
                      "start": 882,
                      "end": 894,
                      "value": "use strict",
                      "raw": "\"use strict\""
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
