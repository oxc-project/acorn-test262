__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1246,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "IFoo1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 47,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 59,
          "end": 64,
          "expression": {
            "type": "Identifier",
            "start": 59,
            "end": 64,
            "decorators": [],
            "name": "IFoo1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 147,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 145,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 115,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 145,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 149,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 164,
        "decorators": [],
        "name": "IFoo2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 175,
                  "end": 182,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 176,
                    "end": 182
                  }
                }
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 204,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 216,
          "end": 221,
          "expression": {
            "type": "Identifier",
            "start": 216,
            "end": 221,
            "decorators": [],
            "name": "IFoo2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 222,
        "end": 309,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 262,
            "end": 307,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 271,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 271,
              "end": 307,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 272,
                  "end": 280,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 273,
                    "end": 280,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 274,
                      "end": 280
                    }
                  }
                }
              ],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 311,
      "end": 346,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 326,
        "decorators": [],
        "name": "IFoo3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 354,
        "end": 356,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 368,
          "end": 373,
          "expression": {
            "type": "Identifier",
            "start": 368,
            "end": 373,
            "decorators": [],
            "name": "IFoo3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 374,
        "end": 437,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 417,
            "end": 435,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 424,
              "end": 426,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 439,
      "end": 501,
      "id": {
        "type": "Identifier",
        "start": 449,
        "end": 454,
        "decorators": [],
        "name": "IFoo4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 509,
        "end": 511,
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 523,
          "end": 528,
          "expression": {
            "type": "Identifier",
            "start": 523,
            "end": 528,
            "decorators": [],
            "name": "IFoo4",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 529,
        "end": 619,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 572,
            "end": 617,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 579,
              "end": 581,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
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
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
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
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 621,
      "end": 650,
      "id": {
        "type": "Identifier",
        "start": 630,
        "end": 633,
        "decorators": [],
        "name": "if1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 634,
          "end": 642,
          "decorators": [],
          "name": "i",
          "optional": false,
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
                "decorators": [],
                "name": "IFoo1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 643,
        "end": 649,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 645,
          "end": 649
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 651,
      "end": 680,
      "id": {
        "type": "Identifier",
        "start": 660,
        "end": 663,
        "decorators": [],
        "name": "if1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 664,
          "end": 672,
          "decorators": [],
          "name": "i",
          "optional": false,
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
                "decorators": [],
                "name": "IFoo2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 673,
        "end": 679,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 675,
          "end": 679
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 681,
      "end": 705,
      "id": {
        "type": "Identifier",
        "start": 690,
        "end": 693,
        "decorators": [],
        "name": "if1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 694,
          "end": 700,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 695,
            "end": 700,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 697,
              "end": 700
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 702,
        "end": 705,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 706,
      "end": 717,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 710,
          "end": 716,
          "id": {
            "type": "Identifier",
            "start": 710,
            "end": 716,
            "decorators": [],
            "name": "c1",
            "optional": false,
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
                  "decorators": [],
                  "name": "C1",
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
      "start": 718,
      "end": 729,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 728,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 728,
            "decorators": [],
            "name": "c2",
            "optional": false,
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
                  "decorators": [],
                  "name": "C2",
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
          "decorators": [],
          "name": "if1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 734,
            "end": 736,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
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
        "decorators": [],
        "name": "of1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 754,
          "end": 790,
          "decorators": [],
          "name": "n",
          "optional": false,
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
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
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
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
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
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 791,
        "end": 799,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 793,
          "end": 799
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 801,
      "end": 860,
      "id": {
        "type": "Identifier",
        "start": 810,
        "end": 813,
        "decorators": [],
        "name": "of1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 814,
          "end": 850,
          "decorators": [],
          "name": "s",
          "optional": false,
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
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
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
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
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
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 851,
        "end": 859,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 853,
          "end": 859
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 861,
      "end": 898,
      "id": {
        "type": "Identifier",
        "start": 870,
        "end": 873,
        "decorators": [],
        "name": "of1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 874,
          "end": 880,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 875,
            "end": 880,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 877,
              "end": 880
            }
          }
        }
      ],
      "returnType": null,
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
      "expression": false
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
          "decorators": [],
          "name": "of1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 906,
                  "end": 907,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 909,
                  "end": 910,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 912,
                "end": 916,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 912,
                  "end": 913,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 915,
                  "end": 916,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
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
        "decorators": [],
        "name": "IMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 944,
                  "end": 951,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 945,
                    "end": 951
                  }
                }
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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 977,
          "end": 990,
          "decorators": [],
          "name": "fn",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 992,
        "end": 997,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 999,
      "end": 1062,
      "id": {
        "type": "Identifier",
        "start": 1008,
        "end": 1011,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1014,
        "end": 1062,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1017,
            "end": 1030,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1021,
                "end": 1029,
                "id": {
                  "type": "Identifier",
                  "start": 1021,
                  "end": 1029,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
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
                        "decorators": [],
                        "name": "IMap",
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
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1036,
                  "end": 1058,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                            "decorators": [],
                            "name": "map",
                            "optional": false,
                            "typeAnnotation": null
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
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1064,
      "end": 1123,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1068,
          "end": 1122,
          "id": {
            "type": "Identifier",
            "start": 1068,
            "end": 1105,
            "decorators": [],
            "name": "o1",
            "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
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
            }
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1110,
                  "end": 1111,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1113,
                  "end": 1114,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1116,
                "end": 1120,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1116,
                  "end": 1117,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1119,
                  "end": 1120,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1125,
      "end": 1183,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1129,
          "end": 1182,
          "id": {
            "type": "Identifier",
            "start": 1129,
            "end": 1131,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1137,
                      "end": 1138,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1140,
                      "end": 1141,
                      "value": 0,
                      "raw": "0"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1143,
                    "end": 1147,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1143,
                      "end": 1144,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1146,
                      "end": 1147,
                      "value": 0,
                      "raw": "0"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1153,
                      "end": 1154,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1156,
                      "end": 1157,
                      "value": 0,
                      "raw": "0"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1159,
                    "end": 1163,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1159,
                      "end": 1160,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1162,
                      "end": 1163,
                      "value": 0,
                      "raw": "0"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1169,
                      "end": 1170,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1172,
                      "end": 1173,
                      "value": 0,
                      "raw": "0"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1175,
                    "end": 1179,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1175,
                      "end": 1176,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1178,
                      "end": 1179,
                      "value": 0,
                      "raw": "0"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1187,
      "end": 1217,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1191,
          "end": 1216,
          "id": {
            "type": "Identifier",
            "start": 1191,
            "end": 1212,
            "decorators": [],
            "name": "i1c1",
            "optional": false,
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
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1219,
      "end": 1246,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1223,
          "end": 1245,
          "id": {
            "type": "Identifier",
            "start": 1223,
            "end": 1236,
            "decorators": [],
            "name": "fp1",
            "optional": false,
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
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1239,
            "end": 1245,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1239,
                "end": 1240,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "start": 1244,
              "end": 1245,
              "value": 0,
              "raw": "0"
            },
            "id": null,
            "generator": false
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
