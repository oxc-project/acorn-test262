__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 171,
  "end": 996,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 203,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 203,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 203,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 178,
                "end": 203,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 180,
                    "end": 190,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 181,
                      "end": 189,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 183,
                        "end": 189
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 191,
                    "end": 201,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 192,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 193,
                      "end": 201,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 195,
                        "end": 201
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
      "type": "VariableDeclaration",
      "start": 205,
      "end": 238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 237,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 237,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 237,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 212,
                "end": 237,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 214,
                    "end": 224,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 215,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 215,
                      "end": 223,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 217,
                        "end": 223
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 225,
                    "end": 235,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 226,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 227,
                      "end": 235,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 229,
                        "end": 235
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
      "type": "ClassDeclaration",
      "start": 240,
      "end": 267,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 250,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 251,
        "end": 267,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 253,
            "end": 265,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 253,
              "end": 256,
              "name": "foo",
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
              "start": 256,
              "end": 264,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 258,
                "end": 264
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 268,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 281,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 290,
        "end": 294,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 295,
        "end": 311,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 297,
            "end": 309,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 300,
              "name": "bar",
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
              "start": 300,
              "end": 308,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 302,
                "end": 308
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 312,
      "end": 356,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 326,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 335,
        "end": 339,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 340,
        "end": 356,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 342,
            "end": 354,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 342,
              "end": 345,
              "name": "baz",
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
              "start": 345,
              "end": 353,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 347,
                "end": 353
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 371,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 371,
            "name": "base",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 365,
              "end": 371,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 367,
                "end": 371,
                "typeName": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 371,
                  "name": "Base",
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
      "start": 373,
      "end": 394,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 393,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 393,
            "name": "derived",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 384,
              "end": 393,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 386,
                "end": 393,
                "typeName": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 393,
                  "name": "Derived",
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
      "start": 395,
      "end": 418,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 399,
          "end": 417,
          "id": {
            "type": "Identifier",
            "start": 399,
            "end": 417,
            "name": "derived2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 407,
              "end": 417,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 409,
                "end": 417,
                "typeName": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 417,
                  "name": "Derived2",
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
      "start": 420,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 440,
          "id": {
            "type": "Identifier",
            "start": 424,
            "end": 425,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 428,
            "end": 440,
            "test": {
              "type": "Literal",
              "start": 428,
              "end": 432,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "Literal",
              "start": 435,
              "end": 436,
              "value": 1,
              "raw": "1"
            },
            "alternate": {
              "type": "Literal",
              "start": 439,
              "end": 440,
              "value": 2,
              "raw": "2"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 442,
      "end": 465,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 446,
          "end": 464,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 448,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 451,
            "end": 464,
            "test": {
              "type": "Literal",
              "start": 451,
              "end": 455,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "Literal",
              "start": 458,
              "end": 459,
              "value": 1,
              "raw": "1"
            },
            "alternate": {
              "type": "ObjectExpression",
              "start": 462,
              "end": 464,
              "properties": []
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 466,
      "end": 488,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 487,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 472,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 475,
            "end": 487,
            "test": {
              "type": "Literal",
              "start": 475,
              "end": 479,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "Identifier",
              "start": 482,
              "end": 483,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "alternate": {
              "type": "Identifier",
              "start": 486,
              "end": 487,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 501,
      "end": 523,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 522,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 507,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 510,
            "end": 522,
            "test": {
              "type": "Literal",
              "start": 510,
              "end": 514,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "Identifier",
              "start": 517,
              "end": 518,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "alternate": {
              "type": "Identifier",
              "start": 521,
              "end": 522,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 536,
      "end": 592,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 540,
          "end": 591,
          "id": {
            "type": "Identifier",
            "start": 540,
            "end": 542,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 545,
            "end": 591,
            "test": {
              "type": "Literal",
              "start": 545,
              "end": 549,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "start": 552,
              "end": 570,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 553,
                  "end": 562,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 554,
                    "end": 562,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 556,
                      "end": 562
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 567,
                "end": 570,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "alternate": {
              "type": "ArrowFunctionExpression",
              "start": 573,
              "end": 591,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 574,
                  "end": 583,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 575,
                    "end": 583,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 577,
                      "end": 583,
                      "typeName": {
                        "type": "Identifier",
                        "start": 577,
                        "end": 583,
                        "name": "Object",
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
              "body": {
                "type": "BlockStatement",
                "start": 588,
                "end": 591,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 619,
      "end": 696,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 623,
          "end": 695,
          "id": {
            "type": "Identifier",
            "start": 623,
            "end": 646,
            "name": "r7",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 625,
              "end": 646,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 627,
                "end": 646,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 628,
                    "end": 637,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 629,
                      "end": 637,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 631,
                        "end": 637,
                        "typeName": {
                          "type": "Identifier",
                          "start": 631,
                          "end": 637,
                          "name": "Object",
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
                  "start": 639,
                  "end": 646,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 642,
                    "end": 646
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 649,
            "end": 695,
            "test": {
              "type": "Literal",
              "start": 649,
              "end": 653,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "start": 656,
              "end": 674,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 657,
                  "end": 666,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 658,
                    "end": 666,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 660,
                      "end": 666
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 671,
                "end": 674,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "alternate": {
              "type": "ArrowFunctionExpression",
              "start": 677,
              "end": 695,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 678,
                  "end": 687,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 679,
                    "end": 687,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 681,
                      "end": 687,
                      "typeName": {
                        "type": "Identifier",
                        "start": 681,
                        "end": 687,
                        "name": "Object",
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
              "body": {
                "type": "BlockStatement",
                "start": 692,
                "end": 695,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 698,
      "end": 754,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 702,
          "end": 753,
          "id": {
            "type": "Identifier",
            "start": 702,
            "end": 704,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 707,
            "end": 753,
            "test": {
              "type": "Literal",
              "start": 707,
              "end": 711,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "start": 714,
              "end": 732,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 715,
                  "end": 724,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 716,
                    "end": 724,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 718,
                      "end": 724,
                      "typeName": {
                        "type": "Identifier",
                        "start": 718,
                        "end": 724,
                        "name": "Object",
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
              "body": {
                "type": "BlockStatement",
                "start": 729,
                "end": 732,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "alternate": {
              "type": "ArrowFunctionExpression",
              "start": 735,
              "end": 753,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 736,
                  "end": 745,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 737,
                    "end": 745,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 739,
                      "end": 745
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 750,
                "end": 753,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 781,
      "end": 823,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 785,
          "end": 822,
          "id": {
            "type": "Identifier",
            "start": 785,
            "end": 794,
            "name": "r10",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 788,
              "end": 794,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 790,
                "end": 794,
                "typeName": {
                  "type": "Identifier",
                  "start": 790,
                  "end": 794,
                  "name": "Base",
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
          "init": {
            "type": "ConditionalExpression",
            "start": 797,
            "end": 822,
            "test": {
              "type": "Literal",
              "start": 797,
              "end": 801,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "Identifier",
              "start": 804,
              "end": 811,
              "name": "derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "alternate": {
              "type": "Identifier",
              "start": 814,
              "end": 822,
              "name": "derived2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 876,
      "end": 909,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 880,
          "end": 908,
          "id": {
            "type": "Identifier",
            "start": 880,
            "end": 883,
            "name": "r11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 886,
            "end": 908,
            "test": {
              "type": "Literal",
              "start": 886,
              "end": 890,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "Identifier",
              "start": 893,
              "end": 897,
              "name": "base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "alternate": {
              "type": "Identifier",
              "start": 900,
              "end": 908,
              "name": "derived2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 911,
      "end": 996,
      "id": {
        "type": "Identifier",
        "start": 920,
        "end": 924,
        "name": "foo5",
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
          "start": 931,
          "end": 935,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 932,
            "end": 935,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 934,
              "end": 935,
              "typeName": {
                "type": "Identifier",
                "start": 934,
                "end": 935,
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
        },
        {
          "type": "Identifier",
          "start": 937,
          "end": 941,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 938,
            "end": 941,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 940,
              "end": 941,
              "typeName": {
                "type": "Identifier",
                "start": 940,
                "end": 941,
                "name": "U",
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
      "body": {
        "type": "BlockStatement",
        "start": 951,
        "end": 996,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 957,
            "end": 977,
            "argument": {
              "type": "ConditionalExpression",
              "start": 964,
              "end": 976,
              "test": {
                "type": "Literal",
                "start": 964,
                "end": 968,
                "value": true,
                "raw": "true"
              },
              "consequent": {
                "type": "Identifier",
                "start": 971,
                "end": 972,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 975,
                "end": 976,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 924,
        "end": 930,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 925,
            "end": 926,
            "name": {
              "type": "Identifier",
              "start": 925,
              "end": 926,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 928,
            "end": 929,
            "name": {
              "type": "Identifier",
              "start": 928,
              "end": 929,
              "name": "U",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 942,
        "end": 950,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 944,
          "end": 950,
          "typeName": {
            "type": "Identifier",
            "start": 944,
            "end": 950,
            "name": "Object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
