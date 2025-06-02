__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 2743,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 64,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 76,
        "decorators": [],
        "name": "fn1",
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
              "typeName": {
                "type": "Identifier",
                "start": 83,
                "end": 103,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 125,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 137,
        "decorators": [],
        "name": "fn1",
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
              "typeName": {
                "type": "Identifier",
                "start": 144,
                "end": 164,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 186,
      "end": 217,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 198,
        "decorators": [],
        "name": "fn1",
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 256,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 255,
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
            "tag": {
              "type": "Identifier",
              "start": 235,
              "end": 238,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 239,
              "end": 255,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 239,
                  "end": 242,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 253,
                  "end": 255,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
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
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 290,
      "end": 304,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 290,
        "end": 303,
        "tag": {
          "type": "Identifier",
          "start": 290,
          "end": 293,
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 294,
          "end": 303,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 294,
              "end": 297,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 301,
              "end": 303,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "ObjectExpression",
              "start": 298,
              "end": 300,
              "properties": []
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 315,
      "end": 386,
      "id": {
        "type": "Identifier",
        "start": 324,
        "end": 327,
        "decorators": [],
        "name": "fn2",
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
              "typeName": {
                "type": "Identifier",
                "start": 334,
                "end": 354,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 387,
      "end": 451,
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 399,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 399,
        "end": 402,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 400,
            "end": 401,
            "name": {
              "type": "Identifier",
              "start": 400,
              "end": 401,
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
              "typeName": {
                "type": "Identifier",
                "start": 409,
                "end": 429,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
              "typeName": {
                "type": "Identifier",
                "start": 445,
                "end": 446,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 447,
        "end": 450,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 449,
          "end": 450,
          "typeName": {
            "type": "Identifier",
            "start": 449,
            "end": 450,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 452,
      "end": 488,
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 464,
        "decorators": [],
        "name": "fn2",
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
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 490,
      "end": 532,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 531,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 498,
                  "end": 502,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 505,
            "end": 531,
            "tag": {
              "type": "Identifier",
              "start": 505,
              "end": 508,
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 509,
              "end": 531,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 509,
                  "end": 512,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 515,
                  "end": 518,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 529,
                  "end": 531,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 513,
                  "end": 514,
                  "value": 0,
                  "raw": "0"
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
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 555,
      "end": 591,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 559,
          "end": 590,
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
            "start": 564,
            "end": 590,
            "tag": {
              "type": "Identifier",
              "start": 564,
              "end": 567,
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 568,
              "end": 590,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 568,
                  "end": 571,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 574,
                  "end": 577,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 588,
                  "end": 590,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 572,
                  "end": 573,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Identifier",
                  "start": 578,
                  "end": 587,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 600,
      "end": 609,
      "expression": {
        "type": "CallExpression",
        "start": 600,
        "end": 608,
        "callee": {
          "type": "MemberExpression",
          "start": 600,
          "end": 606,
          "object": {
            "type": "Identifier",
            "start": 600,
            "end": 602,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 603,
            "end": 606,
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 619,
      "end": 624,
      "expression": {
        "type": "CallExpression",
        "start": 619,
        "end": 623,
        "callee": {
          "type": "Identifier",
          "start": 619,
          "end": 621,
          "decorators": [],
          "name": "d2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 738,
      "end": 758,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 738,
        "end": 757,
        "tag": {
          "type": "Identifier",
          "start": 738,
          "end": 741,
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 742,
          "end": 757,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 742,
              "end": 745,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 748,
              "end": 751,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 755,
              "end": 757,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 746,
              "end": 747,
              "value": 0,
              "raw": "0"
            },
            {
              "type": "Literal",
              "start": 752,
              "end": 754,
              "value": "",
              "raw": "''"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 851,
      "end": 871,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 851,
        "end": 870,
        "tag": {
          "type": "Identifier",
          "start": 851,
          "end": 854,
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 855,
          "end": 870,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 855,
              "end": 858,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 862,
              "end": 865,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 868,
              "end": 870,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 859,
              "end": 861,
              "value": "",
              "raw": "''"
            },
            {
              "type": "Literal",
              "start": 866,
              "end": 867,
              "value": 0,
              "raw": "0"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 921,
      "end": 979,
      "id": {
        "type": "Identifier",
        "start": 930,
        "end": 933,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 933,
        "end": 936,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 934,
            "end": 935,
            "name": {
              "type": "Identifier",
              "start": 934,
              "end": 935,
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
          "start": 937,
          "end": 963,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 941,
            "end": 963,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 943,
              "end": 963,
              "typeName": {
                "type": "Identifier",
                "start": 943,
                "end": 963,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 965,
          "end": 969,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 966,
            "end": 969,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 968,
              "end": 969,
              "typeName": {
                "type": "Identifier",
                "start": 968,
                "end": 969,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 970,
        "end": 978,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 972,
          "end": 978
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 980,
      "end": 1053,
      "id": {
        "type": "Identifier",
        "start": 989,
        "end": 992,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 992,
        "end": 998,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 993,
            "end": 994,
            "name": {
              "type": "Identifier",
              "start": 993,
              "end": 994,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 996,
            "end": 997,
            "name": {
              "type": "Identifier",
              "start": 996,
              "end": 997,
              "decorators": [],
              "name": "U",
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
          "start": 999,
          "end": 1025,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1003,
            "end": 1025,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1005,
              "end": 1025,
              "typeName": {
                "type": "Identifier",
                "start": 1005,
                "end": 1025,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1027,
          "end": 1036,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1028,
            "end": 1036,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1030,
              "end": 1036
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1038,
          "end": 1042,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1039,
            "end": 1042,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1041,
              "end": 1042,
              "typeName": {
                "type": "Identifier",
                "start": 1041,
                "end": 1042,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1044,
          "end": 1048,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1045,
            "end": 1048,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1047,
              "end": 1048,
              "typeName": {
                "type": "Identifier",
                "start": 1047,
                "end": 1048,
                "decorators": [],
                "name": "U",
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
        "start": 1049,
        "end": 1052,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1051,
          "end": 1052,
          "typeName": {
            "type": "Identifier",
            "start": 1051,
            "end": 1052,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1054,
      "end": 1130,
      "id": {
        "type": "Identifier",
        "start": 1063,
        "end": 1066,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1066,
        "end": 1075,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1067,
            "end": 1068,
            "name": {
              "type": "Identifier",
              "start": 1067,
              "end": 1068,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 1070,
            "end": 1071,
            "name": {
              "type": "Identifier",
              "start": 1070,
              "end": 1071,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1073,
            "end": 1074,
            "name": {
              "type": "Identifier",
              "start": 1073,
              "end": 1074,
              "decorators": [],
              "name": "V",
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
          "start": 1076,
          "end": 1102,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1080,
            "end": 1102,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1082,
              "end": 1102,
              "typeName": {
                "type": "Identifier",
                "start": 1082,
                "end": 1102,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1104,
          "end": 1108,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1105,
            "end": 1108,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1107,
              "end": 1108,
              "typeName": {
                "type": "Identifier",
                "start": 1107,
                "end": 1108,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1110,
          "end": 1114,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1111,
            "end": 1114,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1113,
              "end": 1114,
              "typeName": {
                "type": "Identifier",
                "start": 1113,
                "end": 1114,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1116,
          "end": 1120,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1117,
            "end": 1120,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1119,
              "end": 1120,
              "typeName": {
                "type": "Identifier",
                "start": 1119,
                "end": 1120,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1121,
        "end": 1129,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1123,
          "end": 1129
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1131,
      "end": 1162,
      "id": {
        "type": "Identifier",
        "start": 1140,
        "end": 1143,
        "decorators": [],
        "name": "fn3",
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
        "start": 1146,
        "end": 1162,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1148,
            "end": 1160,
            "argument": {
              "type": "Literal",
              "start": 1155,
              "end": 1159,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1164,
      "end": 1185,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1168,
          "end": 1184,
          "id": {
            "type": "Identifier",
            "start": 1168,
            "end": 1169,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1172,
            "end": 1184,
            "tag": {
              "type": "Identifier",
              "start": 1172,
              "end": 1175,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1176,
              "end": 1184,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1176,
                  "end": 1179,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1182,
                  "end": 1184,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1180,
                  "end": 1181,
                  "value": 3,
                  "raw": "3"
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1186,
      "end": 1220,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1190,
          "end": 1219,
          "id": {
            "type": "Identifier",
            "start": 1190,
            "end": 1191,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1194,
            "end": 1219,
            "tag": {
              "type": "Identifier",
              "start": 1194,
              "end": 1197,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1198,
              "end": 1219,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1198,
                  "end": 1201,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1204,
                  "end": 1207,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1210,
                  "end": 1213,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1217,
                  "end": 1219,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1201,
                  "end": 1203,
                  "value": "",
                  "raw": "''"
                },
                {
                  "type": "Literal",
                  "start": 1208,
                  "end": 1209,
                  "value": 3,
                  "raw": "3"
                },
                {
                  "type": "Literal",
                  "start": 1214,
                  "end": 1216,
                  "value": "",
                  "raw": "''"
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1221,
      "end": 1254,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1225,
          "end": 1253,
          "id": {
            "type": "Identifier",
            "start": 1225,
            "end": 1226,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1229,
            "end": 1253,
            "tag": {
              "type": "Identifier",
              "start": 1229,
              "end": 1232,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1233,
              "end": 1253,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1233,
                  "end": 1236,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1239,
                  "end": 1242,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1245,
                  "end": 1248,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1251,
                  "end": 1253,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1237,
                  "end": 1238,
                  "value": 5,
                  "raw": "5"
                },
                {
                  "type": "Literal",
                  "start": 1243,
                  "end": 1244,
                  "value": 5,
                  "raw": "5"
                },
                {
                  "type": "Literal",
                  "start": 1249,
                  "end": 1250,
                  "value": 5,
                  "raw": "5"
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1255,
      "end": 1269,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1259,
          "end": 1268,
          "id": {
            "type": "Identifier",
            "start": 1259,
            "end": 1268,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1260,
              "end": 1268,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1262,
                "end": 1268
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
      "start": 1380,
      "end": 1400,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1384,
          "end": 1400,
          "id": {
            "type": "Identifier",
            "start": 1384,
            "end": 1385,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1388,
            "end": 1400,
            "tag": {
              "type": "Identifier",
              "start": 1388,
              "end": 1391,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1392,
              "end": 1400,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1392,
                  "end": 1395,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1398,
                  "end": 1400,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1396,
                  "end": 1397,
                  "value": 4,
                  "raw": "4"
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1401,
      "end": 1437,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1405,
          "end": 1436,
          "id": {
            "type": "Identifier",
            "start": 1405,
            "end": 1406,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1409,
            "end": 1436,
            "tag": {
              "type": "Identifier",
              "start": 1409,
              "end": 1412,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1413,
              "end": 1436,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1413,
                  "end": 1416,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1420,
                  "end": 1423,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1427,
                  "end": 1430,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1434,
                  "end": 1436,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1417,
                  "end": 1419,
                  "value": "",
                  "raw": "''"
                },
                {
                  "type": "Literal",
                  "start": 1424,
                  "end": 1426,
                  "value": "",
                  "raw": "''"
                },
                {
                  "type": "Literal",
                  "start": 1431,
                  "end": 1433,
                  "value": "",
                  "raw": "''"
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1438,
      "end": 1473,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1442,
          "end": 1472,
          "id": {
            "type": "Identifier",
            "start": 1442,
            "end": 1443,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1446,
            "end": 1472,
            "tag": {
              "type": "Identifier",
              "start": 1446,
              "end": 1449,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1450,
              "end": 1472,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1450,
                  "end": 1453,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1457,
                  "end": 1460,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1464,
                  "end": 1467,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1470,
                  "end": 1472,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1454,
                  "end": 1456,
                  "value": "",
                  "raw": "''"
                },
                {
                  "type": "Literal",
                  "start": 1461,
                  "end": 1463,
                  "value": "",
                  "raw": "''"
                },
                {
                  "type": "Literal",
                  "start": 1468,
                  "end": 1469,
                  "value": 3,
                  "raw": "3"
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1577,
      "end": 1584,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1577,
        "end": 1583,
        "tag": {
          "type": "Identifier",
          "start": 1577,
          "end": 1580,
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 1581,
          "end": 1583,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1581,
              "end": 1583,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": []
        }
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1633,
      "end": 1722,
      "id": {
        "type": "Identifier",
        "start": 1642,
        "end": 1645,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1645,
        "end": 1681,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1646,
            "end": 1662,
            "name": {
              "type": "Identifier",
              "start": 1646,
              "end": 1647,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1656,
              "end": 1662
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1664,
            "end": 1680,
            "name": {
              "type": "Identifier",
              "start": 1664,
              "end": 1665,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1674,
              "end": 1680
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
          "start": 1682,
          "end": 1708,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1686,
            "end": 1708,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1688,
              "end": 1708,
              "typeName": {
                "type": "Identifier",
                "start": 1688,
                "end": 1708,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1710,
          "end": 1714,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1711,
            "end": 1714,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1713,
              "end": 1714,
              "typeName": {
                "type": "Identifier",
                "start": 1713,
                "end": 1714,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1716,
          "end": 1720,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1717,
            "end": 1720,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1719,
              "end": 1720,
              "typeName": {
                "type": "Identifier",
                "start": 1719,
                "end": 1720,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1723,
      "end": 1812,
      "id": {
        "type": "Identifier",
        "start": 1732,
        "end": 1735,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1735,
        "end": 1771,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1736,
            "end": 1752,
            "name": {
              "type": "Identifier",
              "start": 1736,
              "end": 1737,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1746,
              "end": 1752
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1754,
            "end": 1770,
            "name": {
              "type": "Identifier",
              "start": 1754,
              "end": 1755,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1764,
              "end": 1770
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
          "start": 1772,
          "end": 1798,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1776,
            "end": 1798,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1778,
              "end": 1798,
              "typeName": {
                "type": "Identifier",
                "start": 1778,
                "end": 1798,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1800,
          "end": 1804,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1801,
            "end": 1804,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1803,
              "end": 1804,
              "typeName": {
                "type": "Identifier",
                "start": 1803,
                "end": 1804,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1806,
          "end": 1810,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1807,
            "end": 1810,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1809,
              "end": 1810,
              "typeName": {
                "type": "Identifier",
                "start": 1809,
                "end": 1810,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1813,
      "end": 1853,
      "id": {
        "type": "Identifier",
        "start": 1822,
        "end": 1825,
        "decorators": [],
        "name": "fn4",
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
          "start": 1826,
          "end": 1852,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1830,
            "end": 1852,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1832,
              "end": 1852,
              "typeName": {
                "type": "Identifier",
                "start": 1832,
                "end": 1852,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1854,
      "end": 1872,
      "id": {
        "type": "Identifier",
        "start": 1863,
        "end": 1866,
        "decorators": [],
        "name": "fn4",
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
        "start": 1869,
        "end": 1872,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1959,
      "end": 1980,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1959,
        "end": 1979,
        "tag": {
          "type": "Identifier",
          "start": 1959,
          "end": 1962,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 1963,
          "end": 1979,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1963,
              "end": 1966,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 1970,
              "end": 1973,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 1977,
              "end": 1979,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 1967,
              "end": 1969,
              "value": "",
              "raw": "''"
            },
            {
              "type": "Literal",
              "start": 1974,
              "end": 1975,
              "value": 3,
              "raw": "3"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1981,
      "end": 2002,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1981,
        "end": 2001,
        "tag": {
          "type": "Identifier",
          "start": 1981,
          "end": 1984,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 1985,
          "end": 2001,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1985,
              "end": 1988,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 1992,
              "end": 1995,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 1999,
              "end": 2001,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 1989,
              "end": 1990,
              "value": 3,
              "raw": "3"
            },
            {
              "type": "Literal",
              "start": 1996,
              "end": 1998,
              "value": "",
              "raw": "''"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2003,
      "end": 2031,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2003,
        "end": 2030,
        "tag": {
          "type": "Identifier",
          "start": 2003,
          "end": 2006,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2007,
          "end": 2030,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2007,
              "end": 2010,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2014,
              "end": 2017,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2028,
              "end": 2030,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 2011,
              "end": 2012,
              "value": 3,
              "raw": "3"
            },
            {
              "type": "Identifier",
              "start": 2018,
              "end": 2027,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2032,
      "end": 2055,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2032,
        "end": 2054,
        "tag": {
          "type": "Identifier",
          "start": 2032,
          "end": 2035,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2036,
          "end": 2054,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2036,
              "end": 2039,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2043,
              "end": 2046,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2052,
              "end": 2054,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 2040,
              "end": 2042,
              "value": "",
              "raw": "''"
            },
            {
              "type": "Literal",
              "start": 2047,
              "end": 2051,
              "value": null,
              "raw": "null"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2158,
      "end": 2183,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2158,
        "end": 2182,
        "tag": {
          "type": "Identifier",
          "start": 2158,
          "end": 2161,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2162,
          "end": 2182,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2162,
              "end": 2165,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2171,
              "end": 2174,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2180,
              "end": 2182,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 2166,
              "end": 2170,
              "value": null,
              "raw": "null"
            },
            {
              "type": "Literal",
              "start": 2175,
              "end": 2179,
              "value": null,
              "raw": "null"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2313,
      "end": 2338,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2313,
        "end": 2337,
        "tag": {
          "type": "Identifier",
          "start": 2313,
          "end": 2316,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2317,
          "end": 2337,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2317,
              "end": 2320,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2326,
              "end": 2329,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2335,
              "end": 2337,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 2321,
              "end": 2325,
              "value": true,
              "raw": "true"
            },
            {
              "type": "Literal",
              "start": 2330,
              "end": 2334,
              "value": null,
              "raw": "null"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2339,
      "end": 2364,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2339,
        "end": 2363,
        "tag": {
          "type": "Identifier",
          "start": 2339,
          "end": 2342,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2343,
          "end": 2363,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2343,
              "end": 2346,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2352,
              "end": 2355,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2361,
              "end": 2363,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 2347,
              "end": 2351,
              "value": null,
              "raw": "null"
            },
            {
              "type": "Literal",
              "start": 2356,
              "end": 2360,
              "value": true,
              "raw": "true"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2450,
      "end": 2523,
      "id": {
        "type": "Identifier",
        "start": 2459,
        "end": 2462,
        "decorators": [],
        "name": "fn5",
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
          "start": 2463,
          "end": 2489,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2467,
            "end": 2489,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2469,
              "end": 2489,
              "typeName": {
                "type": "Identifier",
                "start": 2469,
                "end": 2489,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2491,
          "end": 2513,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2492,
            "end": 2513,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2494,
              "end": 2513,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2495,
                  "end": 2504,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2496,
                    "end": 2504,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2498,
                      "end": 2504
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2506,
                "end": 2513,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2509,
                  "end": 2513
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2514,
        "end": 2522,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2516,
          "end": 2522
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2524,
      "end": 2597,
      "id": {
        "type": "Identifier",
        "start": 2533,
        "end": 2536,
        "decorators": [],
        "name": "fn5",
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
          "start": 2537,
          "end": 2563,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2541,
            "end": 2563,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2543,
              "end": 2563,
              "typeName": {
                "type": "Identifier",
                "start": 2543,
                "end": 2563,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2565,
          "end": 2587,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2566,
            "end": 2587,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2568,
              "end": 2587,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2569,
                  "end": 2578,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2570,
                    "end": 2578,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2572,
                      "end": 2578
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2580,
                "end": 2587,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2583,
                  "end": 2587
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2588,
        "end": 2596,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2590,
          "end": 2596
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2598,
      "end": 2634,
      "id": {
        "type": "Identifier",
        "start": 2607,
        "end": 2610,
        "decorators": [],
        "name": "fn5",
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
        "start": 2613,
        "end": 2634,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2615,
            "end": 2632,
            "argument": {
              "type": "Identifier",
              "start": 2622,
              "end": 2631,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2635,
      "end": 2665,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2635,
        "end": 2664,
        "tag": {
          "type": "Identifier",
          "start": 2635,
          "end": 2638,
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2639,
          "end": 2664,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2639,
              "end": 2642,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2662,
              "end": 2664,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 2643,
              "end": 2661,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2644,
                  "end": 2645,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "start": 2650,
                "end": 2661,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2650,
                  "end": 2659,
                  "object": {
                    "type": "Identifier",
                    "start": 2650,
                    "end": 2651,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2652,
                    "end": 2659,
                    "decorators": [],
                    "name": "toFixed",
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
              "id": null,
              "generator": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2712,
      "end": 2742,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2712,
        "end": 2741,
        "tag": {
          "type": "Identifier",
          "start": 2712,
          "end": 2715,
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2716,
          "end": 2741,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2716,
              "end": 2719,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2739,
              "end": 2741,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 2720,
              "end": 2738,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2721,
                  "end": 2722,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "start": 2727,
                "end": 2738,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2727,
                  "end": 2735,
                  "object": {
                    "type": "Identifier",
                    "start": 2727,
                    "end": 2728,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2729,
                    "end": 2735,
                    "decorators": [],
                    "name": "substr",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 2736,
                    "end": 2737,
                    "value": 0,
                    "raw": "0"
                  }
                ],
                "optional": false
              },
              "id": null,
              "generator": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
