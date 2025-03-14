bestCommonTypeOfConditionalExpressions.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 203,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 181,
                      "end": 189,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 183,
                        "end": 189
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 191,
                    "end": 201,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 192,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 193,
                      "end": 201,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 195,
                        "end": 201
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
      "type": "VariableDeclaration",
      "start": 205,
      "end": 238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 237,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 237,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 215,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 215,
                      "end": 223,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 217,
                        "end": 223
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 225,
                    "end": 235,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 226,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 227,
                      "end": 235,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 229,
                        "end": 235
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
      "type": "ClassDeclaration",
      "start": 240,
      "end": 267,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 251,
        "end": 267,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 253,
            "end": 265,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 253,
              "end": 256,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 250,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 268,
      "end": 311,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 295,
        "end": 311,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 297,
            "end": 309,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 300,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 281,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 290,
        "end": 294,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 312,
      "end": 356,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 340,
        "end": 356,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 342,
            "end": 354,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 342,
              "end": 345,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 326,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 335,
        "end": 339,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 371,
            "decorators": [],
            "name": "base",
            "optional": false,
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
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
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
      "start": 373,
      "end": 394,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 393,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 393,
            "decorators": [],
            "name": "derived",
            "optional": false,
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
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
                }
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
      "start": 395,
      "end": 418,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 399,
          "end": 417,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 399,
            "end": 417,
            "decorators": [],
            "name": "derived2",
            "optional": false,
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
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false
                }
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
      "start": 420,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 440,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 424,
            "end": 425,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 428,
            "end": 440,
            "alternate": {
              "type": "Literal",
              "start": 439,
              "end": 440,
              "raw": "2",
              "value": 2
            },
            "consequent": {
              "type": "Literal",
              "start": 435,
              "end": 436,
              "raw": "1",
              "value": 1
            },
            "test": {
              "type": "Literal",
              "start": 428,
              "end": 432,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 448,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 451,
            "end": 464,
            "alternate": {
              "type": "ObjectExpression",
              "start": 462,
              "end": 464,
              "properties": []
            },
            "consequent": {
              "type": "Literal",
              "start": 458,
              "end": 459,
              "raw": "1",
              "value": 1
            },
            "test": {
              "type": "Literal",
              "start": 451,
              "end": 455,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 472,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 475,
            "end": 487,
            "alternate": {
              "type": "Identifier",
              "start": 486,
              "end": 487,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "consequent": {
              "type": "Identifier",
              "start": 482,
              "end": 483,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "test": {
              "type": "Literal",
              "start": 475,
              "end": 479,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 507,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 510,
            "end": 522,
            "alternate": {
              "type": "Identifier",
              "start": 521,
              "end": 522,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "consequent": {
              "type": "Identifier",
              "start": 517,
              "end": 518,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "test": {
              "type": "Literal",
              "start": 510,
              "end": 514,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 540,
            "end": 542,
            "decorators": [],
            "name": "r6",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 545,
            "end": 591,
            "alternate": {
              "type": "ArrowFunctionExpression",
              "start": 573,
              "end": 591,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 588,
                "end": 591,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 574,
                  "end": 583,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "Object",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "start": 552,
              "end": 570,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 567,
                "end": 570,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 553,
                  "end": 562,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 554,
                    "end": 562,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 556,
                      "end": 562
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 545,
              "end": 549,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 623,
            "end": 646,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 625,
              "end": 646,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 627,
                "end": 646,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 628,
                    "end": 637,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
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
                          "decorators": [],
                          "name": "Object",
                          "optional": false
                        }
                      }
                    }
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
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 649,
            "end": 695,
            "alternate": {
              "type": "ArrowFunctionExpression",
              "start": 677,
              "end": 695,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 692,
                "end": 695,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 678,
                  "end": 687,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "Object",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "start": 656,
              "end": 674,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 671,
                "end": 674,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 657,
                  "end": 666,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 658,
                    "end": 666,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 660,
                      "end": 666
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 649,
              "end": 653,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 702,
            "end": 704,
            "decorators": [],
            "name": "r8",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 707,
            "end": 753,
            "alternate": {
              "type": "ArrowFunctionExpression",
              "start": 735,
              "end": 753,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 750,
                "end": 753,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 736,
                  "end": 745,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 737,
                    "end": 745,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 739,
                      "end": 745
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "start": 714,
              "end": 732,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 729,
                "end": 732,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 715,
                  "end": 724,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "Object",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 707,
              "end": 711,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 785,
            "end": 794,
            "decorators": [],
            "name": "r10",
            "optional": false,
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
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 797,
            "end": 822,
            "alternate": {
              "type": "Identifier",
              "start": 814,
              "end": 822,
              "decorators": [],
              "name": "derived2",
              "optional": false
            },
            "consequent": {
              "type": "Identifier",
              "start": 804,
              "end": 811,
              "decorators": [],
              "name": "derived",
              "optional": false
            },
            "test": {
              "type": "Literal",
              "start": 797,
              "end": 801,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 880,
            "end": 883,
            "decorators": [],
            "name": "r11",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 886,
            "end": 908,
            "alternate": {
              "type": "Identifier",
              "start": 900,
              "end": 908,
              "decorators": [],
              "name": "derived2",
              "optional": false
            },
            "consequent": {
              "type": "Identifier",
              "start": 893,
              "end": 897,
              "decorators": [],
              "name": "base",
              "optional": false
            },
            "test": {
              "type": "Literal",
              "start": 886,
              "end": 890,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 911,
      "end": 996,
      "async": false,
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
              "alternate": {
                "type": "Identifier",
                "start": 975,
                "end": 976,
                "decorators": [],
                "name": "u",
                "optional": false
              },
              "consequent": {
                "type": "Identifier",
                "start": 971,
                "end": 972,
                "decorators": [],
                "name": "t",
                "optional": false
              },
              "test": {
                "type": "Literal",
                "start": 964,
                "end": 968,
                "raw": "true",
                "value": true
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 920,
        "end": 924,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 931,
          "end": 935,
          "decorators": [],
          "name": "t",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 937,
          "end": 941,
          "decorators": [],
          "name": "u",
          "optional": false,
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
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "Object",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 924,
        "end": 930,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 925,
            "end": 926,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 925,
              "end": 926,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 928,
            "end": 929,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 928,
              "end": 929,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
