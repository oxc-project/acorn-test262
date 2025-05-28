__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 915,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "decorators": [],
        "name": "f",
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
          "start": 33,
          "end": 38,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 38,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 36,
              "end": 38,
              "members": []
            }
          }
        },
        {
          "type": "Identifier",
          "start": 40,
          "end": 50,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 50,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 43,
              "end": 50
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 52,
        "end": 223,
        "body": [
          {
            "type": "IfStatement",
            "start": 58,
            "end": 98,
            "test": {
              "type": "UnaryExpression",
              "start": 62,
              "end": 73,
              "operator": "!",
              "argument": {
                "type": "BinaryExpression",
                "start": 64,
                "end": 72,
                "left": {
                  "type": "Literal",
                  "start": 64,
                  "end": 67,
                  "value": "a",
                  "raw": "\"a\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "prefix": true
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 75,
              "end": 98,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 85,
                  "end": 92,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 103,
            "end": 105,
            "expression": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 117,
            "end": 148,
            "test": {
              "type": "UnaryExpression",
              "start": 121,
              "end": 123,
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "start": 122,
                "end": 123,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 125,
              "end": 148,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 135,
                  "end": 142,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 153,
            "end": 155,
            "expression": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 167,
            "end": 207,
            "test": {
              "type": "UnaryExpression",
              "start": 171,
              "end": 182,
              "operator": "!",
              "argument": {
                "type": "BinaryExpression",
                "start": 173,
                "end": 181,
                "left": {
                  "type": "Literal",
                  "start": 173,
                  "end": 176,
                  "value": "a",
                  "raw": "\"a\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "prefix": true
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 184,
              "end": 207,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 194,
                  "end": 201,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 212,
            "end": 214,
            "expression": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 247,
      "end": 362,
      "id": {
        "type": "Identifier",
        "start": 256,
        "end": 267,
        "decorators": [],
        "name": "isHTMLTable",
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
          "start": 268,
          "end": 282,
          "decorators": [],
          "name": "table",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 273,
            "end": 282,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 275,
              "end": 282
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 283,
        "end": 292,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 285,
          "end": 292
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 293,
        "end": 362,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 299,
            "end": 360,
            "argument": {
              "type": "LogicalExpression",
              "start": 306,
              "end": 359,
              "left": {
                "type": "LogicalExpression",
                "start": 306,
                "end": 340,
                "left": {
                  "type": "UnaryExpression",
                  "start": 306,
                  "end": 313,
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "start": 307,
                    "end": 313,
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "start": 308,
                      "end": 313,
                      "decorators": [],
                      "name": "table",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "prefix": true
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 317,
                  "end": 340,
                  "left": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 322,
                    "decorators": [],
                    "name": "table",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 334,
                    "end": 340,
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 344,
                "end": 359,
                "left": {
                  "type": "Literal",
                  "start": 344,
                  "end": 350,
                  "value": "html",
                  "raw": "'html'"
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 359,
                  "decorators": [],
                  "name": "table",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 364,
      "end": 440,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 375,
        "decorators": [],
        "name": "f1",
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
          "start": 376,
          "end": 386,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 377,
            "end": 386,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 379,
              "end": 386
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 388,
        "end": 440,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 394,
            "end": 438,
            "argument": {
              "type": "LogicalExpression",
              "start": 401,
              "end": 437,
              "left": {
                "type": "LogicalExpression",
                "start": 401,
                "end": 425,
                "left": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 402,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 406,
                  "end": 425,
                  "left": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 407,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 419,
                    "end": 425,
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 429,
                "end": 437,
                "left": {
                  "type": "Literal",
                  "start": 429,
                  "end": 432,
                  "value": "a",
                  "raw": "'a'"
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 437,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 442,
      "end": 515,
      "id": {
        "type": "Identifier",
        "start": 451,
        "end": 453,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 453,
        "end": 456,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 454,
            "end": 455,
            "name": {
              "type": "Identifier",
              "start": 454,
              "end": 455,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 457,
          "end": 461,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 458,
            "end": 461,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 460,
              "end": 461,
              "typeName": {
                "type": "Identifier",
                "start": 460,
                "end": 461,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 463,
        "end": 515,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 469,
            "end": 513,
            "argument": {
              "type": "LogicalExpression",
              "start": 476,
              "end": 512,
              "left": {
                "type": "LogicalExpression",
                "start": 476,
                "end": 500,
                "left": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 477,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 481,
                  "end": 500,
                  "left": {
                    "type": "Identifier",
                    "start": 481,
                    "end": 482,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 494,
                    "end": 500,
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 504,
                "end": 512,
                "left": {
                  "type": "Literal",
                  "start": 504,
                  "end": 507,
                  "value": "a",
                  "raw": "'a'"
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 511,
                  "end": 512,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 517,
      "end": 583,
      "id": {
        "type": "Identifier",
        "start": 526,
        "end": 528,
        "decorators": [],
        "name": "f3",
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
          "start": 529,
          "end": 534,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 530,
            "end": 534,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 532,
              "end": 534,
              "members": []
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 536,
        "end": 583,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 542,
            "end": 581,
            "argument": {
              "type": "LogicalExpression",
              "start": 549,
              "end": 580,
              "left": {
                "type": "BinaryExpression",
                "start": 549,
                "end": 568,
                "left": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 550,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 562,
                  "end": 568,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 572,
                "end": 580,
                "left": {
                  "type": "Literal",
                  "start": 572,
                  "end": 575,
                  "value": "a",
                  "raw": "'a'"
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 579,
                  "end": 580,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 585,
      "end": 664,
      "id": {
        "type": "Identifier",
        "start": 594,
        "end": 596,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 596,
        "end": 610,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 597,
            "end": 609,
            "name": {
              "type": "Identifier",
              "start": 597,
              "end": 598,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 607,
              "end": 609,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 611,
          "end": 615,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 612,
            "end": 615,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 614,
              "end": 615,
              "typeName": {
                "type": "Identifier",
                "start": 614,
                "end": 615,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 617,
        "end": 664,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 623,
            "end": 662,
            "argument": {
              "type": "LogicalExpression",
              "start": 630,
              "end": 661,
              "left": {
                "type": "BinaryExpression",
                "start": 630,
                "end": 649,
                "left": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 631,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 643,
                  "end": 649,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 653,
                "end": 661,
                "left": {
                  "type": "Literal",
                  "start": 653,
                  "end": 656,
                  "value": "a",
                  "raw": "'a'"
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 660,
                  "end": 661,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 666,
      "end": 739,
      "id": {
        "type": "Identifier",
        "start": 675,
        "end": 677,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 677,
        "end": 680,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 678,
            "end": 679,
            "name": {
              "type": "Identifier",
              "start": 678,
              "end": 679,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 681,
          "end": 690,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 682,
            "end": 690,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 684,
              "end": 690,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 684,
                  "end": 685,
                  "typeName": {
                    "type": "Identifier",
                    "start": 684,
                    "end": 685,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 688,
                  "end": 690,
                  "members": []
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 692,
        "end": 739,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 698,
            "end": 737,
            "argument": {
              "type": "LogicalExpression",
              "start": 705,
              "end": 736,
              "left": {
                "type": "BinaryExpression",
                "start": 705,
                "end": 724,
                "left": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 706,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 718,
                  "end": 724,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 728,
                "end": 736,
                "left": {
                  "type": "Literal",
                  "start": 728,
                  "end": 731,
                  "value": "a",
                  "raw": "'a'"
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 735,
                  "end": 736,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 741,
      "end": 825,
      "id": {
        "type": "Identifier",
        "start": 750,
        "end": 752,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 752,
        "end": 766,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 753,
            "end": 765,
            "name": {
              "type": "Identifier",
              "start": 753,
              "end": 754,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 763,
              "end": 765,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 767,
          "end": 776,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 768,
            "end": 776,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 770,
              "end": 776,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 770,
                  "end": 771,
                  "typeName": {
                    "type": "Identifier",
                    "start": 770,
                    "end": 771,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 774,
                  "end": 776,
                  "members": []
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 778,
        "end": 825,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 784,
            "end": 823,
            "argument": {
              "type": "LogicalExpression",
              "start": 791,
              "end": 822,
              "left": {
                "type": "BinaryExpression",
                "start": 791,
                "end": 810,
                "left": {
                  "type": "Identifier",
                  "start": 791,
                  "end": 792,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 804,
                  "end": 810,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 814,
                "end": 822,
                "left": {
                  "type": "Literal",
                  "start": 814,
                  "end": 817,
                  "value": "a",
                  "raw": "'a'"
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 821,
                  "end": 822,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 827,
      "end": 915,
      "id": {
        "type": "Identifier",
        "start": 836,
        "end": 838,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 838,
        "end": 856,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 839,
            "end": 855,
            "name": {
              "type": "Identifier",
              "start": 839,
              "end": 840,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 849,
              "end": 855
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 857,
          "end": 866,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 858,
            "end": 866,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 860,
              "end": 866,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 860,
                  "end": 861,
                  "typeName": {
                    "type": "Identifier",
                    "start": 860,
                    "end": 861,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 864,
                  "end": 866,
                  "members": []
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 868,
        "end": 915,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 874,
            "end": 913,
            "argument": {
              "type": "LogicalExpression",
              "start": 881,
              "end": 912,
              "left": {
                "type": "BinaryExpression",
                "start": 881,
                "end": 900,
                "left": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 882,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 894,
                  "end": 900,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 904,
                "end": 912,
                "left": {
                  "type": "Literal",
                  "start": 904,
                  "end": 907,
                  "value": "a",
                  "raw": "'a'"
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 911,
                  "end": 912,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
