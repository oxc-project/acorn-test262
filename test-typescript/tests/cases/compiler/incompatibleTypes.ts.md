__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1247,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "IFoo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 37,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 22,
            "end": 35,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 24,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
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
      "type": "ClassDeclaration",
      "start": 39,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 47,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 147,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 145,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 115,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 145,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 145,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 128,
                    "end": 139,
                    "argument": {
                      "type": "Literal",
                      "start": 135,
                      "end": 138,
                      "value": "s",
                      "raw": "\"s\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 59,
          "end": 64,
          "expression": {
            "type": "Identifier",
            "start": 59,
            "end": 64,
            "name": "IFoo1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 149,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 164,
        "name": "IFoo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 165,
        "end": 194,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 171,
            "end": 192,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 173,
              "name": "p1",
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
                "start": 174,
                "end": 182,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 175,
                  "end": 182,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 176,
                    "end": 182
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 191,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 185,
                "end": 191
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
      "type": "ClassDeclaration",
      "start": 196,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 204,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 222,
        "end": 309,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 262,
            "end": 307,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 271,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 271,
              "end": 307,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 272,
                  "end": 280,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 273,
                    "end": 280,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 274,
                      "end": 280
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 282,
                "end": 307,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 292,
                    "end": 301,
                    "argument": {
                      "type": "Literal",
                      "start": 299,
                      "end": 300,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 216,
          "end": 221,
          "expression": {
            "type": "Identifier",
            "start": 216,
            "end": 221,
            "name": "IFoo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 311,
      "end": 346,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 326,
        "name": "IFoo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 327,
        "end": 346,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 333,
            "end": 344,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 333,
              "end": 335,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 335,
              "end": 343,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 337,
                "end": 343
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
      "type": "ClassDeclaration",
      "start": 348,
      "end": 437,
      "id": {
        "type": "Identifier",
        "start": 354,
        "end": 356,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 374,
        "end": 437,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 417,
            "end": 435,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 424,
              "end": 426,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 426,
              "end": 434,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 428,
                "end": 434
              }
            },
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 368,
          "end": 373,
          "expression": {
            "type": "Identifier",
            "start": 368,
            "end": 373,
            "name": "IFoo3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 439,
      "end": 501,
      "id": {
        "type": "Identifier",
        "start": 449,
        "end": 454,
        "name": "IFoo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 455,
        "end": 501,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 461,
            "end": 499,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 461,
              "end": 463,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 463,
              "end": 498,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 465,
                "end": 498,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 467,
                    "end": 485,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 468,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 468,
                      "end": 484,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 470,
                        "end": 484,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 472,
                            "end": 482,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 472,
                              "end": 473,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 473,
                              "end": 481,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 475,
                                "end": 481
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 486,
                    "end": 496,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 486,
                      "end": 487,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 487,
                      "end": 495,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 489,
                        "end": 495
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "type": "ClassDeclaration",
      "start": 503,
      "end": 619,
      "id": {
        "type": "Identifier",
        "start": 509,
        "end": 511,
        "name": "C4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 529,
        "end": 619,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 572,
            "end": 617,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 579,
              "end": 581,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 581,
              "end": 616,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 583,
                "end": 616,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 585,
                    "end": 603,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 585,
                      "end": 586,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 586,
                      "end": 602,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 588,
                        "end": 602,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 590,
                            "end": 600,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 590,
                              "end": 591,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 591,
                              "end": 599,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 593,
                                "end": 599
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 604,
                    "end": 614,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 604,
                      "end": 605,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 605,
                      "end": 613,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 607,
                        "end": 613
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 523,
          "end": 528,
          "expression": {
            "type": "Identifier",
            "start": 523,
            "end": 528,
            "name": "IFoo4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 621,
      "end": 650,
      "id": {
        "type": "Identifier",
        "start": 630,
        "end": 633,
        "name": "if1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 634,
          "end": 642,
          "name": "i",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 635,
            "end": 642,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 637,
              "end": 642,
              "typeName": {
                "type": "Identifier",
                "start": 637,
                "end": 642,
                "name": "IFoo1",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 643,
        "end": 649,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 645,
          "end": 649
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 651,
      "end": 680,
      "id": {
        "type": "Identifier",
        "start": 660,
        "end": 663,
        "name": "if1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 664,
          "end": 672,
          "name": "i",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 665,
            "end": 672,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 667,
              "end": 672,
              "typeName": {
                "type": "Identifier",
                "start": 667,
                "end": 672,
                "name": "IFoo2",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 673,
        "end": 679,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 675,
          "end": 679
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 681,
      "end": 705,
      "id": {
        "type": "Identifier",
        "start": 690,
        "end": 693,
        "name": "if1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 694,
          "end": 700,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 695,
            "end": 700,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 697,
              "end": 700
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 702,
        "end": 705,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 706,
      "end": 717,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 710,
          "end": 716,
          "id": {
            "type": "Identifier",
            "start": 710,
            "end": 716,
            "name": "c1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 712,
              "end": 716,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 714,
                "end": 716,
                "typeName": {
                  "type": "Identifier",
                  "start": 714,
                  "end": 716,
                  "name": "C1",
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
      "start": 718,
      "end": 729,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 728,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 728,
            "name": "c2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 724,
              "end": 728,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 726,
                "end": 728,
                "typeName": {
                  "type": "Identifier",
                  "start": 726,
                  "end": 728,
                  "name": "C2",
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
      "type": "ExpressionStatement",
      "start": 730,
      "end": 738,
      "expression": {
        "type": "CallExpression",
        "start": 730,
        "end": 737,
        "callee": {
          "type": "Identifier",
          "start": 730,
          "end": 733,
          "name": "if1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 734,
            "end": 736,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 741,
      "end": 800,
      "id": {
        "type": "Identifier",
        "start": 750,
        "end": 753,
        "name": "of1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 754,
          "end": 790,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 755,
            "end": 790,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 757,
              "end": 790,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 759,
                  "end": 777,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 759,
                    "end": 760,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 760,
                    "end": 776,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 762,
                      "end": 776,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 764,
                          "end": 774,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 764,
                            "end": 765,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 765,
                            "end": 773,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 767,
                              "end": 773
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 778,
                  "end": 788,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 778,
                    "end": 779,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 779,
                    "end": 787,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 781,
                      "end": 787
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 791,
        "end": 799,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 793,
          "end": 799
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 801,
      "end": 860,
      "id": {
        "type": "Identifier",
        "start": 810,
        "end": 813,
        "name": "of1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 814,
          "end": 850,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 815,
            "end": 850,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 817,
              "end": 850,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 819,
                  "end": 837,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 819,
                    "end": 820,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 820,
                    "end": 836,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 822,
                      "end": 836,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 824,
                          "end": 834,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 824,
                            "end": 825,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 825,
                            "end": 833,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 827,
                              "end": 833
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 838,
                  "end": 848,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 838,
                    "end": 839,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 839,
                    "end": 847,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 841,
                      "end": 847
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 851,
        "end": 859,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 853,
          "end": 859
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 861,
      "end": 898,
      "id": {
        "type": "Identifier",
        "start": 870,
        "end": 873,
        "name": "of1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 874,
          "end": 880,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 875,
            "end": 880,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 877,
              "end": 880
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 882,
        "end": 898,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 884,
            "end": 896,
            "argument": {
              "type": "Literal",
              "start": 891,
              "end": 895,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 900,
      "end": 920,
      "expression": {
        "type": "CallExpression",
        "start": 900,
        "end": 919,
        "callee": {
          "type": "Identifier",
          "start": 900,
          "end": 903,
          "name": "of1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 904,
            "end": 918,
            "properties": [
              {
                "type": "Property",
                "start": 906,
                "end": 910,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 906,
                  "end": 907,
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 909,
                  "end": 910,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 912,
                "end": 916,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 912,
                  "end": 913,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 915,
                  "end": 916,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 922,
      "end": 962,
      "id": {
        "type": "Identifier",
        "start": 932,
        "end": 936,
        "name": "IMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 937,
        "end": 962,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 940,
            "end": 960,
            "parameters": [
              {
                "type": "Identifier",
                "start": 941,
                "end": 951,
                "name": "key",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 944,
                  "end": 951,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 945,
                    "end": 951
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 952,
              "end": 959,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 953,
                "end": 959
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 964,
      "end": 997,
      "id": {
        "type": "Identifier",
        "start": 973,
        "end": 976,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 977,
          "end": 990,
          "name": "fn",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 979,
            "end": 990,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 980,
              "end": 990,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 983,
                "end": 990,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 986,
                  "end": 990
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 992,
        "end": 997,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 999,
      "end": 1062,
      "id": {
        "type": "Identifier",
        "start": 1008,
        "end": 1011,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1014,
        "end": 1062,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1017,
            "end": 1030,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1021,
                "end": 1029,
                "id": {
                  "type": "Identifier",
                  "start": 1021,
                  "end": 1029,
                  "name": "map",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1024,
                    "end": 1029,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1025,
                      "end": 1029,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1025,
                        "end": 1029,
                        "name": "IMap",
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
            "type": "ExpressionStatement",
            "start": 1032,
            "end": 1060,
            "expression": {
              "type": "CallExpression",
              "start": 1032,
              "end": 1059,
              "callee": {
                "type": "Identifier",
                "start": 1032,
                "end": 1035,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1036,
                  "end": 1058,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1042,
                    "end": 1058,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1046,
                        "end": 1055,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1046,
                          "end": 1054,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1046,
                            "end": 1049,
                            "name": "map",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "start": 1052,
                            "end": 1054,
                            "properties": []
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1064,
      "end": 1123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1068,
          "end": 1122,
          "id": {
            "type": "Identifier",
            "start": 1068,
            "end": 1105,
            "name": "o1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1070,
              "end": 1105,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1072,
                "end": 1105,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1074,
                    "end": 1092,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1074,
                      "end": 1075,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1075,
                      "end": 1091,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1077,
                        "end": 1091,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1079,
                            "end": 1089,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1079,
                              "end": 1080,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1080,
                              "end": 1088,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1082,
                                "end": 1088
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1093,
                    "end": 1103,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1093,
                      "end": 1094,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1094,
                      "end": 1102,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1096,
                        "end": 1102
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
          "init": {
            "type": "ObjectExpression",
            "start": 1108,
            "end": 1122,
            "properties": [
              {
                "type": "Property",
                "start": 1110,
                "end": 1114,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1110,
                  "end": 1111,
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1113,
                  "end": 1114,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1116,
                "end": 1120,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1116,
                  "end": 1117,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1119,
                  "end": 1120,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1125,
      "end": 1183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1129,
          "end": 1182,
          "id": {
            "type": "Identifier",
            "start": 1129,
            "end": 1131,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1134,
            "end": 1182,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 1135,
                "end": 1149,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1137,
                    "end": 1141,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1137,
                      "end": 1138,
                      "name": "e",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1140,
                      "end": 1141,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1143,
                    "end": 1147,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1143,
                      "end": 1144,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1146,
                      "end": 1147,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 1151,
                "end": 1165,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1153,
                    "end": 1157,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1153,
                      "end": 1154,
                      "name": "e",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1156,
                      "end": 1157,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1159,
                    "end": 1163,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1159,
                      "end": 1160,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1162,
                      "end": 1163,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 1167,
                "end": 1181,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1169,
                    "end": 1173,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1169,
                      "end": 1170,
                      "name": "e",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1172,
                      "end": 1173,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1175,
                    "end": 1179,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1175,
                      "end": 1176,
                      "name": "g",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1178,
                      "end": 1179,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1187,
      "end": 1217,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1191,
          "end": 1216,
          "id": {
            "type": "Identifier",
            "start": 1191,
            "end": 1212,
            "name": "i1c1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1195,
              "end": 1212,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1197,
                "end": 1212,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1199,
                    "end": 1210,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1201,
                      "end": 1209,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1203,
                        "end": 1209
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1215,
            "end": 1216,
            "value": 5,
            "raw": "5"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1219,
      "end": 1246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1223,
          "end": 1245,
          "id": {
            "type": "Identifier",
            "start": 1223,
            "end": 1236,
            "name": "fp1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1226,
              "end": 1236,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1228,
                "end": 1236,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1231,
                  "end": 1236,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1233,
                    "end": 1236
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1239,
            "end": 1245,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1239,
                "end": 1240,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 1244,
              "end": 1245,
              "value": 0,
              "raw": "0"
            },
            "typeParameters": null,
            "returnType": null
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
