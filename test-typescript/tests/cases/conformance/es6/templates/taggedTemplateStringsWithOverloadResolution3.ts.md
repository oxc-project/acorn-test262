__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 2749,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 64,
      "end": 124,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 76,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 77,
          "end": 103,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 81,
            "end": 103,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 83,
              "end": 103,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 83,
                "end": 103,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 105,
          "end": 114,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 106,
            "end": 114,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 108,
              "end": 114
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 115,
        "end": 123,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 117,
          "end": 123
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 125,
      "end": 185,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 137,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 138,
          "end": 164,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 142,
            "end": 164,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 144,
              "end": 164,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 144,
                "end": 164,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 166,
          "end": 175,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 167,
            "end": 175,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 169,
              "end": 175
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 176,
        "end": 184,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 178,
          "end": 184
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 186,
      "end": 217,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 201,
        "end": 217,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 203,
            "end": 215,
            "argument": {
              "type": "Literal",
              "start": 210,
              "end": 214,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 198,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 256,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 255,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 232,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 232,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 226,
                "end": 232
              }
            }
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 235,
            "end": 255,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 239,
              "end": 255,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 243,
                  "end": 252,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 239,
                  "end": 242,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 253,
                  "end": 255,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "tag": {
              "type": "Identifier",
              "start": 235,
              "end": 238,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 290,
      "end": 304,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 290,
        "end": 303,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 294,
          "end": 303,
          "expressions": [
            {
              "type": "ObjectExpression",
              "start": 298,
              "end": 300,
              "properties": []
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 294,
              "end": 297,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 301,
              "end": 303,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 290,
          "end": 293,
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 315,
      "end": 386,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 324,
        "end": 327,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 328,
          "end": 354,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 332,
            "end": 354,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 334,
              "end": 354,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 334,
                "end": 354,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 356,
          "end": 365,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 357,
            "end": 365,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 359,
              "end": 365
            }
          }
        },
        {
          "type": "Identifier",
          "start": 367,
          "end": 376,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 368,
            "end": 376,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 370,
              "end": 376
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 377,
        "end": 385,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 379,
          "end": 385
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 387,
      "end": 451,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 399,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 403,
          "end": 429,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 407,
            "end": 429,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 409,
              "end": 429,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 409,
                "end": 429,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 431,
          "end": 440,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 432,
            "end": 440,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 434,
              "end": 440
            }
          }
        },
        {
          "type": "Identifier",
          "start": 442,
          "end": 446,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 443,
            "end": 446,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 445,
              "end": 446,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 445,
                "end": 446,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 447,
        "end": 450,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 449,
          "end": 450,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 449,
            "end": 450,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 399,
        "end": 402,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 400,
            "end": 401,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 400,
              "end": 401,
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
      "start": 452,
      "end": 488,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 467,
        "end": 488,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 469,
            "end": 486,
            "argument": {
              "type": "Identifier",
              "start": 476,
              "end": 485,
              "decorators": [],
              "name": "undefined",
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
        "start": 461,
        "end": 464,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 490,
      "end": 532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 531,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 494,
            "end": 502,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 496,
              "end": 502,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 498,
                "end": 502,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 498,
                  "end": 502,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 505,
            "end": 531,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 509,
              "end": 531,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 513,
                  "end": 514,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Identifier",
                  "start": 519,
                  "end": 528,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 509,
                  "end": 512,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 515,
                  "end": 518,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 529,
                  "end": 531,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "tag": {
              "type": "Identifier",
              "start": 505,
              "end": 508,
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 555,
      "end": 597,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 559,
          "end": 596,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 559,
            "end": 561,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 570,
            "end": 596,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 574,
              "end": 596,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 578,
                  "end": 579,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Identifier",
                  "start": 584,
                  "end": 593,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 574,
                  "end": 577,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 580,
                  "end": 583,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 594,
                  "end": 596,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "tag": {
              "type": "Identifier",
              "start": 570,
              "end": 573,
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 606,
      "end": 615,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 606,
        "end": 614,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 606,
          "end": 612,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 606,
            "end": 608,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 609,
            "end": 612,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 625,
      "end": 630,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 625,
        "end": 629,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 625,
          "end": 627,
          "decorators": [],
          "name": "d2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 744,
      "end": 764,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 744,
        "end": 763,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 748,
          "end": 763,
          "expressions": [
            {
              "type": "Literal",
              "start": 752,
              "end": 753,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 758,
              "end": 760,
              "raw": "''",
              "value": "",
              "regex": null,
              "bigint": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 748,
              "end": 751,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 754,
              "end": 757,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 761,
              "end": 763,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 744,
          "end": 747,
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 857,
      "end": 877,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 857,
        "end": 876,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 861,
          "end": 876,
          "expressions": [
            {
              "type": "Literal",
              "start": 865,
              "end": 867,
              "raw": "''",
              "value": "",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 872,
              "end": 873,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 861,
              "end": 864,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 868,
              "end": 871,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 874,
              "end": 876,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 857,
          "end": 860,
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 927,
      "end": 985,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 936,
        "end": 939,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 943,
          "end": 969,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 947,
            "end": 969,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 949,
              "end": 969,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 949,
                "end": 969,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 971,
          "end": 975,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 972,
            "end": 975,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 974,
              "end": 975,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 974,
                "end": 975,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 976,
        "end": 984,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 978,
          "end": 984
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 939,
        "end": 942,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 940,
            "end": 941,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 940,
              "end": 941,
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
      "type": "TSDeclareFunction",
      "start": 986,
      "end": 1059,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 995,
        "end": 998,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1005,
          "end": 1031,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1009,
            "end": 1031,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1011,
              "end": 1031,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1011,
                "end": 1031,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1033,
          "end": 1042,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1034,
            "end": 1042,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1036,
              "end": 1042
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1044,
          "end": 1048,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1045,
            "end": 1048,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1047,
              "end": 1048,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1047,
                "end": 1048,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1050,
          "end": 1054,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1051,
            "end": 1054,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1053,
              "end": 1054,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1053,
                "end": 1054,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1055,
        "end": 1058,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1057,
          "end": 1058,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1057,
            "end": 1058,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 998,
        "end": 1004,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 999,
            "end": 1000,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 999,
              "end": 1000,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1002,
            "end": 1003,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1002,
              "end": 1003,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1060,
      "end": 1136,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1069,
        "end": 1072,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1082,
          "end": 1108,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1086,
            "end": 1108,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1088,
              "end": 1108,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1088,
                "end": 1108,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1110,
          "end": 1114,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1111,
            "end": 1114,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1113,
              "end": 1114,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1113,
                "end": 1114,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1116,
          "end": 1120,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1117,
            "end": 1120,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1119,
              "end": 1120,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1119,
                "end": 1120,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1122,
          "end": 1126,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1123,
            "end": 1126,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1125,
              "end": 1126,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1125,
                "end": 1126,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1127,
        "end": 1135,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1129,
          "end": 1135
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1072,
        "end": 1081,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1073,
            "end": 1074,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1073,
              "end": 1074,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1076,
            "end": 1077,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1076,
              "end": 1077,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1079,
            "end": 1080,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1079,
              "end": 1080,
              "decorators": [],
              "name": "V",
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
      "start": 1137,
      "end": 1168,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1152,
        "end": 1168,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1154,
            "end": 1166,
            "argument": {
              "type": "Literal",
              "start": 1161,
              "end": 1165,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1146,
        "end": 1149,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1170,
      "end": 1191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1174,
          "end": 1190,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1174,
            "end": 1175,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1178,
            "end": 1190,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1182,
              "end": 1190,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1186,
                  "end": 1187,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1182,
                  "end": 1185,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1188,
                  "end": 1190,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "tag": {
              "type": "Identifier",
              "start": 1178,
              "end": 1181,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1192,
      "end": 1226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1196,
          "end": 1225,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1196,
            "end": 1197,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1200,
            "end": 1225,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1204,
              "end": 1225,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1207,
                  "end": 1209,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 1214,
                  "end": 1215,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 1220,
                  "end": 1222,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1204,
                  "end": 1207,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1210,
                  "end": 1213,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1216,
                  "end": 1219,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1223,
                  "end": 1225,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "tag": {
              "type": "Identifier",
              "start": 1200,
              "end": 1203,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1227,
      "end": 1260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1231,
          "end": 1259,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1231,
            "end": 1232,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1235,
            "end": 1259,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1239,
              "end": 1259,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1243,
                  "end": 1244,
                  "raw": "5",
                  "value": 5,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 1249,
                  "end": 1250,
                  "raw": "5",
                  "value": 5,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 1255,
                  "end": 1256,
                  "raw": "5",
                  "value": 5,
                  "regex": null,
                  "bigint": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1239,
                  "end": 1242,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1245,
                  "end": 1248,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1251,
                  "end": 1254,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1257,
                  "end": 1259,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "tag": {
              "type": "Identifier",
              "start": 1235,
              "end": 1238,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1261,
      "end": 1275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1265,
          "end": 1274,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1265,
            "end": 1274,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1266,
              "end": 1274,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1268,
                "end": 1274
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
      "start": 1386,
      "end": 1406,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1390,
          "end": 1406,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1390,
            "end": 1391,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1394,
            "end": 1406,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1398,
              "end": 1406,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1402,
                  "end": 1403,
                  "raw": "4",
                  "value": 4,
                  "regex": null,
                  "bigint": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1398,
                  "end": 1401,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1404,
                  "end": 1406,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "tag": {
              "type": "Identifier",
              "start": 1394,
              "end": 1397,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1407,
      "end": 1443,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1411,
          "end": 1442,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1411,
            "end": 1412,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1415,
            "end": 1442,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1419,
              "end": 1442,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1423,
                  "end": 1425,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 1430,
                  "end": 1432,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 1437,
                  "end": 1439,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1419,
                  "end": 1422,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1426,
                  "end": 1429,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1433,
                  "end": 1436,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1440,
                  "end": 1442,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "tag": {
              "type": "Identifier",
              "start": 1415,
              "end": 1418,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1444,
      "end": 1479,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1448,
          "end": 1478,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1448,
            "end": 1449,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1452,
            "end": 1478,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1456,
              "end": 1478,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1460,
                  "end": 1462,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 1467,
                  "end": 1469,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 1474,
                  "end": 1475,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1456,
                  "end": 1459,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1463,
                  "end": 1466,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1470,
                  "end": 1473,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1476,
                  "end": 1478,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "tag": {
              "type": "Identifier",
              "start": 1452,
              "end": 1455,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1583,
      "end": 1590,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1583,
        "end": 1589,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 1587,
          "end": 1589,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1587,
              "end": 1589,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 1583,
          "end": 1586,
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1639,
      "end": 1728,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1648,
        "end": 1651,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1688,
          "end": 1714,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1692,
            "end": 1714,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1694,
              "end": 1714,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1694,
                "end": 1714,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1716,
          "end": 1720,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1717,
            "end": 1720,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1719,
              "end": 1720,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1719,
                "end": 1720,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1722,
          "end": 1726,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1723,
            "end": 1726,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1725,
              "end": 1726,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1725,
                "end": 1726,
                "decorators": [],
                "name": "U",
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
        "start": 1651,
        "end": 1687,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1652,
            "end": 1668,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1662,
              "end": 1668
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1652,
              "end": 1653,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1670,
            "end": 1686,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1680,
              "end": 1686
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1670,
              "end": 1671,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1729,
      "end": 1818,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1738,
        "end": 1741,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1778,
          "end": 1804,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1782,
            "end": 1804,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1784,
              "end": 1804,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1784,
                "end": 1804,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1806,
          "end": 1810,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1807,
            "end": 1810,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1809,
              "end": 1810,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1809,
                "end": 1810,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1812,
          "end": 1816,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1813,
            "end": 1816,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1815,
              "end": 1816,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1815,
                "end": 1816,
                "decorators": [],
                "name": "U",
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
        "start": 1741,
        "end": 1777,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1742,
            "end": 1758,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1752,
              "end": 1758
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1742,
              "end": 1743,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1760,
            "end": 1776,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1770,
              "end": 1776
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1760,
              "end": 1761,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1819,
      "end": 1859,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1828,
        "end": 1831,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1832,
          "end": 1858,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1836,
            "end": 1858,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1838,
              "end": 1858,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1838,
                "end": 1858,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1860,
      "end": 1878,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1875,
        "end": 1878,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1869,
        "end": 1872,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1965,
      "end": 1986,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1965,
        "end": 1985,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 1969,
          "end": 1985,
          "expressions": [
            {
              "type": "Literal",
              "start": 1973,
              "end": 1975,
              "raw": "''",
              "value": "",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 1980,
              "end": 1981,
              "raw": "3",
              "value": 3,
              "regex": null,
              "bigint": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1969,
              "end": 1972,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 1976,
              "end": 1979,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 1983,
              "end": 1985,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 1965,
          "end": 1968,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1987,
      "end": 2008,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1987,
        "end": 2007,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 1991,
          "end": 2007,
          "expressions": [
            {
              "type": "Literal",
              "start": 1995,
              "end": 1996,
              "raw": "3",
              "value": 3,
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 2002,
              "end": 2004,
              "raw": "''",
              "value": "",
              "regex": null,
              "bigint": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1991,
              "end": 1994,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 1998,
              "end": 2001,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2005,
              "end": 2007,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 1987,
          "end": 1990,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2009,
      "end": 2037,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2009,
        "end": 2036,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2013,
          "end": 2036,
          "expressions": [
            {
              "type": "Literal",
              "start": 2017,
              "end": 2018,
              "raw": "3",
              "value": 3,
              "regex": null,
              "bigint": null
            },
            {
              "type": "Identifier",
              "start": 2024,
              "end": 2033,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2013,
              "end": 2016,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2020,
              "end": 2023,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2034,
              "end": 2036,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 2009,
          "end": 2012,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2038,
      "end": 2061,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2038,
        "end": 2060,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2042,
          "end": 2060,
          "expressions": [
            {
              "type": "Literal",
              "start": 2046,
              "end": 2048,
              "raw": "''",
              "value": "",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 2053,
              "end": 2057,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2042,
              "end": 2045,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2049,
              "end": 2052,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2058,
              "end": 2060,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 2038,
          "end": 2041,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2164,
      "end": 2189,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2164,
        "end": 2188,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2168,
          "end": 2188,
          "expressions": [
            {
              "type": "Literal",
              "start": 2172,
              "end": 2176,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 2181,
              "end": 2185,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2168,
              "end": 2171,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2177,
              "end": 2180,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2186,
              "end": 2188,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 2164,
          "end": 2167,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2319,
      "end": 2344,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2319,
        "end": 2343,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2323,
          "end": 2343,
          "expressions": [
            {
              "type": "Literal",
              "start": 2327,
              "end": 2331,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 2336,
              "end": 2340,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2323,
              "end": 2326,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2332,
              "end": 2335,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2341,
              "end": 2343,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 2319,
          "end": 2322,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2345,
      "end": 2370,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2345,
        "end": 2369,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2349,
          "end": 2369,
          "expressions": [
            {
              "type": "Literal",
              "start": 2353,
              "end": 2357,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 2362,
              "end": 2366,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2349,
              "end": 2352,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2358,
              "end": 2361,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2367,
              "end": 2369,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 2345,
          "end": 2348,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2456,
      "end": 2529,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2465,
        "end": 2468,
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2469,
          "end": 2495,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2473,
            "end": 2495,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2475,
              "end": 2495,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2475,
                "end": 2495,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2497,
          "end": 2519,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2498,
            "end": 2519,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2500,
              "end": 2519,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2501,
                  "end": 2510,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2502,
                    "end": 2510,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2504,
                      "end": 2510
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2512,
                "end": 2519,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2515,
                  "end": 2519
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2520,
        "end": 2528,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2522,
          "end": 2528
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2530,
      "end": 2603,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2539,
        "end": 2542,
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2543,
          "end": 2569,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2547,
            "end": 2569,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2549,
              "end": 2569,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2549,
                "end": 2569,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2571,
          "end": 2593,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2572,
            "end": 2593,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2574,
              "end": 2593,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2575,
                  "end": 2584,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2576,
                    "end": 2584,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2578,
                      "end": 2584
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2586,
                "end": 2593,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2589,
                  "end": 2593
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2594,
        "end": 2602,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2596,
          "end": 2602
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2604,
      "end": 2640,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2619,
        "end": 2640,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2621,
            "end": 2638,
            "argument": {
              "type": "Identifier",
              "start": 2628,
              "end": 2637,
              "decorators": [],
              "name": "undefined",
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
        "start": 2613,
        "end": 2616,
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2641,
      "end": 2671,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2641,
        "end": 2670,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2645,
          "end": 2670,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 2649,
              "end": 2667,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 2656,
                "end": 2667,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 2656,
                  "end": 2665,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2656,
                    "end": 2657,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2658,
                    "end": 2665,
                    "decorators": [],
                    "name": "toFixed",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2650,
                  "end": 2651,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2645,
              "end": 2648,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2668,
              "end": 2670,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 2641,
          "end": 2644,
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2718,
      "end": 2748,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2718,
        "end": 2747,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2722,
          "end": 2747,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 2726,
              "end": 2744,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 2733,
                "end": 2744,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 2742,
                    "end": 2743,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 2733,
                  "end": 2741,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2733,
                    "end": 2734,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2735,
                    "end": 2741,
                    "decorators": [],
                    "name": "substr",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2727,
                  "end": 2728,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2722,
              "end": 2725,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2745,
              "end": 2747,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 2718,
          "end": 2721,
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
