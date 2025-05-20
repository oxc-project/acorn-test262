__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 1091,
  "body": [
    {
      "type": "ForStatement",
      "start": 29,
      "end": 55,
      "body": {
        "type": "BlockStatement",
        "start": 52,
        "end": 55,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 47,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 47,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 47,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 56,
      "end": 78,
      "body": {
        "type": "BlockStatement",
        "start": 75,
        "end": 78,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 61,
        "end": 70,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 65,
            "end": 70,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 69,
              "end": 70,
              "raw": "2",
              "value": 2
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 80,
      "end": 118,
      "body": {
        "type": "BlockStatement",
        "start": 115,
        "end": 118,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 85,
        "end": 110,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 89,
            "end": 110,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSTypeAssertion",
              "start": 93,
              "end": 110,
              "expression": {
                "type": "Identifier",
                "start": 101,
                "end": 110,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 94,
                "end": 100
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 184,
      "end": 252,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 205,
        "end": 252,
        "body": [
          {
            "type": "ForStatement",
            "start": 211,
            "end": 250,
            "body": {
              "type": "BlockStatement",
              "start": 247,
              "end": 250,
              "body": []
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 216,
              "end": 242,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 220,
                  "end": 242,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 221,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 224,
                    "end": 242,
                    "raw": "'this is a string'",
                    "value": "this is a string"
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "test": null,
            "update": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 202,
        "decorators": [],
        "name": "declSpace",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 253,
      "end": 294,
      "body": {
        "type": "TSInterfaceBody",
        "start": 269,
        "end": 294,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 271,
            "end": 281,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 272,
              "end": 280,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 274,
                "end": 280
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 282,
            "end": 292,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 283,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 291,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 285,
                "end": 291
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 268,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ForStatement",
      "start": 296,
      "end": 321,
      "body": {
        "type": "BlockStatement",
        "start": 318,
        "end": 321,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 301,
        "end": 313,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 305,
            "end": 313,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 305,
              "end": 313,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 306,
                "end": 313,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 308,
                  "end": 313,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 313,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
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
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 322,
      "end": 357,
      "body": {
        "type": "BlockStatement",
        "start": 354,
        "end": 357,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 327,
        "end": 349,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 331,
            "end": 349,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 331,
              "end": 332,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 335,
              "end": 349,
              "properties": [
                {
                  "type": "Property",
                  "start": 337,
                  "end": 341,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 338,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 340,
                    "end": 341,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 343,
                  "end": 347,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 343,
                    "end": 344,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 346,
                    "end": 347,
                    "raw": "2",
                    "value": 2
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 358,
      "end": 408,
      "body": {
        "type": "BlockStatement",
        "start": 405,
        "end": 408,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 363,
        "end": 400,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 367,
            "end": 400,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 367,
              "end": 375,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 368,
                "end": 375,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 370,
                  "end": 375,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 375,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "start": 378,
              "end": 400,
              "properties": [
                {
                  "type": "Property",
                  "start": 380,
                  "end": 384,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 380,
                    "end": 381,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 383,
                    "end": 384,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "Property",
                  "start": 386,
                  "end": 398,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 387,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 389,
                    "end": 398,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 409,
      "end": 460,
      "body": {
        "type": "BlockStatement",
        "start": 457,
        "end": 460,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 414,
        "end": 452,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 418,
            "end": 452,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 418,
              "end": 419,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 422,
              "end": 452,
              "properties": [
                {
                  "type": "Property",
                  "start": 424,
                  "end": 428,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 425,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 427,
                    "end": 428,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 430,
                  "end": 450,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 430,
                    "end": 431,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "TSTypeAssertion",
                    "start": 433,
                    "end": 450,
                    "expression": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 450,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 434,
                      "end": 440
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
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 461,
      "end": 523,
      "body": {
        "type": "BlockStatement",
        "start": 520,
        "end": 523,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 466,
        "end": 515,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 470,
            "end": 515,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 470,
              "end": 498,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 471,
                "end": 498,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 473,
                  "end": 498,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 475,
                      "end": 485,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 475,
                        "end": 476,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 476,
                        "end": 484,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 478,
                          "end": 484
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 486,
                      "end": 496,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 486,
                        "end": 487,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 487,
                        "end": 495,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 489,
                          "end": 495
                        }
                      }
                    }
                  ]
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "start": 501,
              "end": 515,
              "properties": [
                {
                  "type": "Property",
                  "start": 503,
                  "end": 507,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 504,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 506,
                    "end": 507,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 509,
                  "end": 513,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 509,
                    "end": 510,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 512,
                    "end": 513,
                    "raw": "2",
                    "value": 2
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 524,
      "end": 594,
      "body": {
        "type": "BlockStatement",
        "start": 591,
        "end": 594,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 529,
        "end": 586,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 533,
            "end": 586,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 533,
              "end": 534,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSTypeAssertion",
              "start": 537,
              "end": 586,
              "expression": {
                "type": "ObjectExpression",
                "start": 564,
                "end": 586,
                "properties": [
                  {
                    "type": "Property",
                    "start": 566,
                    "end": 570,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 566,
                      "end": 567,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 569,
                      "end": 570,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "Property",
                    "start": 572,
                    "end": 584,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 572,
                      "end": 573,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 575,
                      "end": 584,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 538,
                "end": 563,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 540,
                    "end": 550,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 540,
                      "end": 541,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 541,
                      "end": 549,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 543,
                        "end": 549
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 551,
                    "end": 561,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 552,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 552,
                      "end": 560,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 554,
                        "end": 560
                      }
                    }
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 595,
      "end": 623,
      "body": {
        "type": "BlockStatement",
        "start": 620,
        "end": 623,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 600,
        "end": 615,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 604,
            "end": 615,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 604,
              "end": 615,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 605,
                "end": 615,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 607,
                  "end": 615,
                  "exprName": {
                    "type": "Identifier",
                    "start": 614,
                    "end": 615,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 625,
      "end": 682,
      "body": {
        "type": "BlockStatement",
        "start": 679,
        "end": 682,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 630,
        "end": 674,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 634,
            "end": 674,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 634,
              "end": 636,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "FunctionExpression",
              "start": 639,
              "end": 674,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 660,
                "end": 674,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 662,
                    "end": 672,
                    "argument": {
                      "type": "Literal",
                      "start": 669,
                      "end": 671,
                      "raw": "42",
                      "value": 42
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
                  "start": 649,
                  "end": 658,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 650,
                    "end": 658,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 652,
                      "end": 658
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 683,
      "end": 721,
      "body": {
        "type": "BlockStatement",
        "start": 718,
        "end": 721,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 688,
        "end": 713,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 692,
            "end": 713,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 692,
              "end": 694,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 697,
              "end": 713,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 712,
                "end": 713,
                "raw": "3",
                "value": 3
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 698,
                  "end": 707,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 699,
                    "end": 707,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 701,
                      "end": 707
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 722,
      "end": 764,
      "body": {
        "type": "BlockStatement",
        "start": 761,
        "end": 764,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 727,
        "end": 756,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 731,
            "end": 756,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 731,
              "end": 756,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 733,
                "end": 756,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 735,
                  "end": 756,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 736,
                      "end": 745,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 737,
                        "end": 745,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 739,
                          "end": 745
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 747,
                    "end": 756,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 750,
                      "end": 756
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
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 765,
      "end": 809,
      "body": {
        "type": "BlockStatement",
        "start": 806,
        "end": 809,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 770,
        "end": 801,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 774,
            "end": 801,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 774,
              "end": 801,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 776,
                "end": 801,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 778,
                  "end": 801,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 780,
                      "end": 799,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 781,
                          "end": 790,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 782,
                            "end": 790,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 784,
                              "end": 790
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
                      "typeParameters": null
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
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 810,
      "end": 860,
      "body": {
        "type": "BlockStatement",
        "start": 857,
        "end": 860,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 815,
        "end": 852,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 819,
            "end": 852,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 819,
              "end": 821,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSTypeAssertion",
              "start": 824,
              "end": 852,
              "expression": {
                "type": "Literal",
                "start": 848,
                "end": 852,
                "raw": "null",
                "value": null
              },
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 825,
                "end": 846,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 826,
                    "end": 835,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 827,
                      "end": 835,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 829,
                        "end": 835
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 837,
                  "end": 846,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 840,
                    "end": 846
                  }
                },
                "typeParameters": null
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 861,
      "end": 891,
      "body": {
        "type": "BlockStatement",
        "start": 888,
        "end": 891,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 866,
        "end": 883,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 870,
            "end": 883,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 870,
              "end": 883,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 872,
                "end": 883,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 874,
                  "end": 883,
                  "exprName": {
                    "type": "Identifier",
                    "start": 881,
                    "end": 883,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 893,
      "end": 921,
      "body": {
        "type": "BlockStatement",
        "start": 918,
        "end": 921,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 898,
        "end": 913,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 902,
            "end": 913,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 902,
              "end": 913,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 903,
                "end": 913,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 905,
                  "end": 913,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 905,
                    "end": 911
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
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 922,
      "end": 953,
      "body": {
        "type": "BlockStatement",
        "start": 950,
        "end": 953,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 927,
        "end": 945,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 931,
            "end": 945,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 931,
              "end": 932,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 935,
              "end": 945,
              "elements": [
                {
                  "type": "Literal",
                  "start": 936,
                  "end": 939,
                  "raw": "'a'",
                  "value": "a"
                },
                {
                  "type": "Literal",
                  "start": 941,
                  "end": 944,
                  "raw": "'b'",
                  "value": "b"
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 954,
      "end": 987,
      "body": {
        "type": "BlockStatement",
        "start": 984,
        "end": 987,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 959,
        "end": 979,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 963,
            "end": 979,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 963,
              "end": 964,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSTypeAssertion",
              "start": 967,
              "end": 979,
              "expression": {
                "type": "ArrayExpression",
                "start": 977,
                "end": 979,
                "elements": []
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 968,
                "end": 976,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 968,
                  "end": 974
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 988,
      "end": 1021,
      "body": {
        "type": "BlockStatement",
        "start": 1018,
        "end": 1021,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 993,
        "end": 1013,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 997,
            "end": 1013,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 997,
              "end": 1008,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 998,
                "end": 1008,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1000,
                  "end": 1008,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 1000,
                    "end": 1006
                  }
                }
              }
            },
            "init": {
              "type": "ArrayExpression",
              "start": 1011,
              "end": 1013,
              "elements": []
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 1022,
      "end": 1062,
      "body": {
        "type": "BlockStatement",
        "start": 1059,
        "end": 1062,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 1027,
        "end": 1054,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1031,
            "end": 1054,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1031,
              "end": 1032,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 1035,
              "end": 1054,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1039,
                "end": 1044,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1044,
                "end": 1052,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1045,
                    "end": 1051
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 1063,
      "end": 1091,
      "body": {
        "type": "BlockStatement",
        "start": 1088,
        "end": 1091,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 1068,
        "end": 1083,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1072,
            "end": 1083,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1072,
              "end": 1083,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1073,
                "end": 1083,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 1075,
                  "end": 1083,
                  "exprName": {
                    "type": "Identifier",
                    "start": 1082,
                    "end": 1083,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
