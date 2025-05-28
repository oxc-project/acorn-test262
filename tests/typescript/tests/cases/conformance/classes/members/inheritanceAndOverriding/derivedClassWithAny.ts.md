__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 898,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 231,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
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
        "end": 231,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 58,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 34,
              "end": 58,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 38,
                  "end": 44
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 58,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 47,
                    "end": 56,
                    "argument": {
                      "type": "Literal",
                      "start": 54,
                      "end": 55,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 63,
            "end": 102,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 66,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 66,
              "end": 102,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 68,
                "end": 76,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 70,
                  "end": 76
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 102,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 87,
                    "end": 96,
                    "argument": {
                      "type": "Literal",
                      "start": 94,
                      "end": 95,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
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
            "type": "PropertyDefinition",
            "start": 108,
            "end": 125,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 124,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 118,
                "end": 124
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
            "type": "MethodDefinition",
            "start": 130,
            "end": 178,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 178,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 144,
                "end": 152,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 146,
                  "end": 152
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 153,
                "end": 178,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 163,
                    "end": 172,
                    "argument": {
                      "type": "Literal",
                      "start": 170,
                      "end": 171,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 183,
            "end": 229,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 193,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 193,
              "end": 229,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 195,
                "end": 203,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 197,
                  "end": 203
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 204,
                "end": 229,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 214,
                    "end": 223,
                    "argument": {
                      "type": "Literal",
                      "start": 221,
                      "end": 222,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
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
      "start": 233,
      "end": 477,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 240,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 249,
        "end": 250,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 251,
        "end": 477,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 257,
            "end": 264,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 263,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 260,
                "end": 263
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 269,
            "end": 310,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 273,
              "end": 274,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 274,
              "end": 310,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 276,
                "end": 281,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 278,
                  "end": 281
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 282,
                "end": 310,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 292,
                    "end": 304,
                    "argument": {
                      "type": "Literal",
                      "start": 299,
                      "end": 303,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 315,
            "end": 351,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 315,
              "end": 318,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 318,
              "end": 351,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 320,
                "end": 325,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 322,
                  "end": 325
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 326,
                "end": 351,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 336,
                    "end": 345,
                    "argument": {
                      "type": "Literal",
                      "start": 343,
                      "end": 344,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
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
            "type": "PropertyDefinition",
            "start": 357,
            "end": 371,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 364,
              "end": 365,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 365,
              "end": 370,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 367,
                "end": 370
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
            "type": "MethodDefinition",
            "start": 376,
            "end": 424,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 387,
              "end": 388,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 388,
              "end": 424,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 390,
                "end": 395,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 392,
                  "end": 395
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 396,
                "end": 424,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 406,
                    "end": 418,
                    "argument": {
                      "type": "Literal",
                      "start": 413,
                      "end": 417,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 429,
            "end": 475,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 436,
              "end": 439,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 439,
              "end": 475,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 441,
                "end": 446,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 443,
                  "end": 446
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 447,
                "end": 475,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 457,
                    "end": 469,
                    "argument": {
                      "type": "Literal",
                      "start": 464,
                      "end": 468,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
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
      "start": 562,
      "end": 806,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 568,
        "end": 569,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 578,
        "end": 579,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 580,
        "end": 806,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 586,
            "end": 596,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 586,
              "end": 587,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 587,
              "end": 595,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 589,
                "end": 595
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 601,
            "end": 630,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 605,
              "end": 606,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 606,
              "end": 630,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 608,
                "end": 616,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 610,
                  "end": 616
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 616,
                "end": 630,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 618,
                    "end": 628,
                    "argument": {
                      "type": "Literal",
                      "start": 625,
                      "end": 627,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 635,
            "end": 675,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 635,
              "end": 638,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 638,
              "end": 675,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 640,
                "end": 648,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 642,
                  "end": 648
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 649,
                "end": 675,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 659,
                    "end": 669,
                    "argument": {
                      "type": "Literal",
                      "start": 666,
                      "end": 668,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
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
            "type": "PropertyDefinition",
            "start": 681,
            "end": 698,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 688,
              "end": 689,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 689,
              "end": 697,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 691,
                "end": 697
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
            "type": "MethodDefinition",
            "start": 703,
            "end": 752,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 714,
              "end": 715,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 715,
              "end": 752,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 717,
                "end": 725,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 719,
                  "end": 725
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 726,
                "end": 752,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 736,
                    "end": 746,
                    "argument": {
                      "type": "Literal",
                      "start": 743,
                      "end": 745,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 757,
            "end": 804,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 764,
              "end": 767,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 767,
              "end": 804,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 769,
                "end": 777,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 771,
                  "end": 777
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 778,
                "end": 804,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 788,
                    "end": 798,
                    "argument": {
                      "type": "Literal",
                      "start": 795,
                      "end": 797,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
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
      "type": "VariableDeclaration",
      "start": 808,
      "end": 817,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 812,
          "end": 816,
          "id": {
            "type": "Identifier",
            "start": 812,
            "end": 816,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 813,
              "end": 816,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 815,
                "end": 816,
                "typeName": {
                  "type": "Identifier",
                  "start": 815,
                  "end": 816,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 818,
      "end": 827,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 822,
          "end": 826,
          "id": {
            "type": "Identifier",
            "start": 822,
            "end": 826,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 823,
              "end": 826,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 825,
                "end": 826,
                "typeName": {
                  "type": "Identifier",
                  "start": 825,
                  "end": 826,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 828,
      "end": 837,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 832,
          "end": 836,
          "id": {
            "type": "Identifier",
            "start": 832,
            "end": 836,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 833,
              "end": 836,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 835,
                "end": 836,
                "typeName": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 836,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 839,
      "end": 845,
      "expression": {
        "type": "AssignmentExpression",
        "start": 839,
        "end": 844,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 839,
          "end": 840,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 843,
          "end": 844,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 846,
      "end": 852,
      "expression": {
        "type": "AssignmentExpression",
        "start": 846,
        "end": 851,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 846,
          "end": 847,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 850,
          "end": 851,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 853,
      "end": 869,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 857,
          "end": 868,
          "id": {
            "type": "Identifier",
            "start": 857,
            "end": 858,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 861,
            "end": 868,
            "callee": {
              "type": "MemberExpression",
              "start": 861,
              "end": 866,
              "object": {
                "type": "Identifier",
                "start": 861,
                "end": 862,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 863,
                "end": 866,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
