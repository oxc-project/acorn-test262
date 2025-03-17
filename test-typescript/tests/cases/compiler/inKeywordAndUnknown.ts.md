__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 916,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 223,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 52,
        "end": 223,
        "body": [
          {
            "type": "IfStatement",
            "start": 58,
            "end": 98,
            "alternate": null,
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
            "test": {
              "type": "UnaryExpression",
              "start": 62,
              "end": 73,
              "argument": {
                "type": "BinaryExpression",
                "start": 64,
                "end": 72,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 64,
                  "end": 67,
                  "raw": "\"a\"",
                  "value": "a"
                },
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
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 103,
            "end": 105,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "IfStatement",
            "start": 117,
            "end": 148,
            "alternate": null,
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
            "test": {
              "type": "UnaryExpression",
              "start": 121,
              "end": 123,
              "argument": {
                "type": "Identifier",
                "start": 122,
                "end": 123,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 153,
            "end": 155,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "IfStatement",
            "start": 167,
            "end": 207,
            "alternate": null,
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
            "test": {
              "type": "UnaryExpression",
              "start": 171,
              "end": 182,
              "argument": {
                "type": "BinaryExpression",
                "start": 173,
                "end": 181,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 173,
                  "end": 176,
                  "raw": "\"a\"",
                  "value": "a"
                },
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
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 212,
            "end": 214,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 247,
      "end": 362,
      "async": false,
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
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 306,
                "end": 340,
                "operator": "&&",
                "left": {
                  "type": "UnaryExpression",
                  "start": 306,
                  "end": 313,
                  "argument": {
                    "type": "UnaryExpression",
                    "start": 307,
                    "end": 313,
                    "argument": {
                      "type": "Identifier",
                      "start": 308,
                      "end": 313,
                      "decorators": [],
                      "name": "table",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "!",
                    "prefix": true
                  },
                  "operator": "!",
                  "prefix": true
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 317,
                  "end": 340,
                  "operator": "instanceof",
                  "left": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 322,
                    "decorators": [],
                    "name": "table",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
              "right": {
                "type": "BinaryExpression",
                "start": 344,
                "end": 359,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 344,
                  "end": 350,
                  "raw": "'html'",
                  "value": "html"
                },
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 256,
        "end": 267,
        "decorators": [],
        "name": "isHTMLTable",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 364,
      "end": 440,
      "async": false,
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
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 401,
                "end": 425,
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 402,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 406,
                  "end": 425,
                  "operator": "instanceof",
                  "left": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 407,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
              "right": {
                "type": "BinaryExpression",
                "start": 429,
                "end": 437,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 429,
                  "end": 432,
                  "raw": "'a'",
                  "value": "a"
                },
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 375,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 442,
      "end": 515,
      "async": false,
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
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 476,
                "end": 500,
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 477,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 481,
                  "end": 500,
                  "operator": "instanceof",
                  "left": {
                    "type": "Identifier",
                    "start": 481,
                    "end": 482,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
              "right": {
                "type": "BinaryExpression",
                "start": 504,
                "end": 512,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 504,
                  "end": 507,
                  "raw": "'a'",
                  "value": "a"
                },
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 451,
        "end": 453,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 460,
                "end": 461,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 453,
        "end": 456,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 454,
            "end": 455,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 454,
              "end": 455,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 517,
      "end": 583,
      "async": false,
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
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "start": 549,
                "end": 568,
                "operator": "instanceof",
                "left": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 550,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
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
              "right": {
                "type": "BinaryExpression",
                "start": 572,
                "end": 580,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 572,
                  "end": 575,
                  "raw": "'a'",
                  "value": "a"
                },
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 526,
        "end": 528,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 585,
      "end": 664,
      "async": false,
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
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "start": 630,
                "end": 649,
                "operator": "instanceof",
                "left": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 631,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
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
              "right": {
                "type": "BinaryExpression",
                "start": 653,
                "end": 661,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 653,
                  "end": 656,
                  "raw": "'a'",
                  "value": "a"
                },
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 594,
        "end": 596,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 614,
                "end": 615,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 596,
        "end": 610,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 597,
            "end": 609,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 607,
              "end": 609,
              "members": []
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 597,
              "end": 598,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 666,
      "end": 739,
      "async": false,
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
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "start": 705,
                "end": 724,
                "operator": "instanceof",
                "left": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 706,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
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
              "right": {
                "type": "BinaryExpression",
                "start": 728,
                "end": 736,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 728,
                  "end": 731,
                  "raw": "'a'",
                  "value": "a"
                },
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 675,
        "end": 677,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 684,
                    "end": 685,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 677,
        "end": 680,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 678,
            "end": 679,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 678,
              "end": 679,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 741,
      "end": 825,
      "async": false,
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
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "start": 791,
                "end": 810,
                "operator": "instanceof",
                "left": {
                  "type": "Identifier",
                  "start": 791,
                  "end": 792,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
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
              "right": {
                "type": "BinaryExpression",
                "start": 814,
                "end": 822,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 814,
                  "end": 817,
                  "raw": "'a'",
                  "value": "a"
                },
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 750,
        "end": 752,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 770,
                    "end": 771,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 752,
        "end": 766,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 753,
            "end": 765,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 763,
              "end": 765,
              "members": []
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 753,
              "end": 754,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 827,
      "end": 915,
      "async": false,
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
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "start": 881,
                "end": 900,
                "operator": "instanceof",
                "left": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 882,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
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
              "right": {
                "type": "BinaryExpression",
                "start": 904,
                "end": 912,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 904,
                  "end": 907,
                  "raw": "'a'",
                  "value": "a"
                },
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 836,
        "end": 838,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 860,
                    "end": 861,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 838,
        "end": 856,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 839,
            "end": 855,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 849,
              "end": 855
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 839,
              "end": 840,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
