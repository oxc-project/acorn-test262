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
      "init": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 47,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 47,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 52,
        "end": 55,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 56,
      "end": 78,
      "init": {
        "type": "VariableDeclaration",
        "start": 61,
        "end": 70,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 65,
            "end": 70,
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
              "value": 2,
              "raw": "2"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 75,
        "end": 78,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 80,
      "end": 118,
      "init": {
        "type": "VariableDeclaration",
        "start": 85,
        "end": 110,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 89,
            "end": 110,
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
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 94,
                "end": 100
              },
              "expression": {
                "type": "Identifier",
                "start": 101,
                "end": 110,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 115,
        "end": 118,
        "body": []
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 184,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 202,
        "decorators": [],
        "name": "declSpace",
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
        "start": 205,
        "end": 252,
        "body": [
          {
            "type": "ForStatement",
            "start": 211,
            "end": 250,
            "init": {
              "type": "VariableDeclaration",
              "start": 216,
              "end": 242,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 220,
                  "end": 242,
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
                    "value": "this is a string",
                    "raw": "'this is a string'"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": null,
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 247,
              "end": 250,
              "body": []
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 253,
      "end": 294,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 268,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 269,
        "end": 294,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 271,
            "end": 281,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 272,
              "end": 280,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 274,
                "end": 280
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 282,
            "end": 292,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 283,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 291,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 285,
                "end": 291
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
      "type": "ForStatement",
      "start": 296,
      "end": 321,
      "init": {
        "type": "VariableDeclaration",
        "start": 301,
        "end": 313,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 305,
            "end": 313,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 313,
                    "decorators": [],
                    "name": "Point",
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 318,
        "end": 321,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 322,
      "end": 357,
      "init": {
        "type": "VariableDeclaration",
        "start": 327,
        "end": 349,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 331,
            "end": 349,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 338,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 340,
                    "end": 341,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 343,
                  "end": 347,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 343,
                    "end": 344,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 346,
                    "end": 347,
                    "value": 2,
                    "raw": "2"
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 354,
        "end": 357,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 358,
      "end": 408,
      "init": {
        "type": "VariableDeclaration",
        "start": 363,
        "end": 400,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 367,
            "end": 400,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 375,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 380,
                    "end": 381,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 383,
                    "end": 384,
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
                  "start": 386,
                  "end": 398,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 387,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 389,
                    "end": 398,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 405,
        "end": 408,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 409,
      "end": 460,
      "init": {
        "type": "VariableDeclaration",
        "start": 414,
        "end": 452,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 418,
            "end": 452,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 425,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 427,
                    "end": 428,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 430,
                  "end": 450,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 430,
                    "end": 431,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSTypeAssertion",
                    "start": 433,
                    "end": 450,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 434,
                      "end": 440
                    },
                    "expression": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 450,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 457,
        "end": 460,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 461,
      "end": 523,
      "init": {
        "type": "VariableDeclaration",
        "start": 466,
        "end": 515,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 470,
            "end": 515,
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 475,
                        "end": 476,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 476,
                        "end": 484,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 478,
                          "end": 484
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 487,
                        "end": 495,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 489,
                          "end": 495
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
              "start": 501,
              "end": 515,
              "properties": [
                {
                  "type": "Property",
                  "start": 503,
                  "end": 507,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 504,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 506,
                    "end": 507,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 509,
                  "end": 513,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 509,
                    "end": 510,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 512,
                    "end": 513,
                    "value": 2,
                    "raw": "2"
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 520,
        "end": 523,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 524,
      "end": 594,
      "init": {
        "type": "VariableDeclaration",
        "start": 529,
        "end": 586,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 533,
            "end": 586,
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
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 538,
                "end": 563,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 540,
                    "end": 550,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 540,
                      "end": 541,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 541,
                      "end": 549,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 543,
                        "end": 549
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 551,
                    "end": 561,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 552,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 552,
                      "end": 560,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 554,
                        "end": 560
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 564,
                "end": 586,
                "properties": [
                  {
                    "type": "Property",
                    "start": 566,
                    "end": 570,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 566,
                      "end": 567,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 569,
                      "end": 570,
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
                    "start": 572,
                    "end": 584,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 572,
                      "end": 573,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 575,
                      "end": 584,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 591,
        "end": 594,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 595,
      "end": 623,
      "init": {
        "type": "VariableDeclaration",
        "start": 600,
        "end": 615,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 604,
            "end": 615,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 620,
        "end": 623,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 625,
      "end": 682,
      "init": {
        "type": "VariableDeclaration",
        "start": 630,
        "end": 674,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 634,
            "end": 674,
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
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "value": 42,
                      "raw": "42"
                    }
                  }
                ]
              },
              "expression": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 679,
        "end": 682,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 683,
      "end": 721,
      "init": {
        "type": "VariableDeclaration",
        "start": 688,
        "end": 713,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 692,
            "end": 713,
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
              "expression": true,
              "async": false,
              "typeParameters": null,
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
              "body": {
                "type": "Literal",
                "start": 712,
                "end": 713,
                "value": 3,
                "raw": "3"
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 718,
        "end": 721,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 722,
      "end": 764,
      "init": {
        "type": "VariableDeclaration",
        "start": 727,
        "end": 756,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 731,
            "end": 756,
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
                  "typeParameters": null,
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
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 761,
        "end": 764,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 765,
      "end": 809,
      "init": {
        "type": "VariableDeclaration",
        "start": 770,
        "end": 801,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 774,
            "end": 801,
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
                      "typeParameters": null,
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
                      }
                    }
                  ]
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 806,
        "end": 809,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 810,
      "end": 860,
      "init": {
        "type": "VariableDeclaration",
        "start": 815,
        "end": 852,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 819,
            "end": 852,
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
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 825,
                "end": 846,
                "typeParameters": null,
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
                }
              },
              "expression": {
                "type": "Literal",
                "start": 848,
                "end": 852,
                "value": null,
                "raw": "null"
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 857,
        "end": 860,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 861,
      "end": 891,
      "init": {
        "type": "VariableDeclaration",
        "start": 866,
        "end": 883,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 870,
            "end": 883,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 888,
        "end": 891,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 893,
      "end": 921,
      "init": {
        "type": "VariableDeclaration",
        "start": 898,
        "end": 913,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 902,
            "end": 913,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 918,
        "end": 921,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 922,
      "end": 953,
      "init": {
        "type": "VariableDeclaration",
        "start": 927,
        "end": 945,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 931,
            "end": 945,
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
                  "value": "a",
                  "raw": "'a'"
                },
                {
                  "type": "Literal",
                  "start": 941,
                  "end": 944,
                  "value": "b",
                  "raw": "'b'"
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 950,
        "end": 953,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 954,
      "end": 987,
      "init": {
        "type": "VariableDeclaration",
        "start": 959,
        "end": 979,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 963,
            "end": 979,
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
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 968,
                "end": 976,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 968,
                  "end": 974
                }
              },
              "expression": {
                "type": "ArrayExpression",
                "start": 977,
                "end": 979,
                "elements": []
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 984,
        "end": 987,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 988,
      "end": 1021,
      "init": {
        "type": "VariableDeclaration",
        "start": 993,
        "end": 1013,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 997,
            "end": 1013,
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
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 1018,
        "end": 1021,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 1022,
      "end": 1062,
      "init": {
        "type": "VariableDeclaration",
        "start": 1027,
        "end": 1054,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1031,
            "end": 1054,
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
              },
              "arguments": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 1059,
        "end": 1062,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 1063,
      "end": 1091,
      "init": {
        "type": "VariableDeclaration",
        "start": 1068,
        "end": 1083,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1072,
            "end": 1083,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 1088,
        "end": 1091,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
