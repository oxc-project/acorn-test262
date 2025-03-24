__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 66,
  "end": 2751,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 66,
      "end": 126,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 78,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 79,
          "end": 105,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 83,
            "end": 105,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 105,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 105,
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
          "start": 107,
          "end": 116,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 108,
            "end": 116,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 110,
              "end": 116
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 117,
        "end": 125,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 119,
          "end": 125
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 127,
      "end": 187,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 139,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 140,
          "end": 166,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 144,
            "end": 166,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 146,
              "end": 166,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 146,
                "end": 166,
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
          "start": 168,
          "end": 177,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 169,
            "end": 177,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 171,
              "end": 177
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 178,
        "end": 186,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 180,
          "end": 186
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 188,
      "end": 219,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 203,
        "end": 219,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 205,
            "end": 217,
            "argument": {
              "type": "Literal",
              "start": 212,
              "end": 216,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 200,
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
      "start": 221,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 257,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 234,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 226,
              "end": 234,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 228,
                "end": 234
              }
            }
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 237,
            "end": 257,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 241,
              "end": 257,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 245,
                  "end": 254,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 241,
                  "end": 244,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 255,
                  "end": 257,
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
              "start": 237,
              "end": 240,
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
      "start": 292,
      "end": 306,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 292,
        "end": 305,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 296,
          "end": 305,
          "expressions": [
            {
              "type": "ObjectExpression",
              "start": 300,
              "end": 302,
              "properties": []
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 296,
              "end": 299,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 303,
              "end": 305,
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
          "start": 292,
          "end": 295,
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
      "start": 317,
      "end": 388,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 326,
        "end": 329,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 330,
          "end": 356,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 334,
            "end": 356,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 336,
              "end": 356,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 336,
                "end": 356,
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
          "start": 358,
          "end": 367,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 359,
            "end": 367,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 361,
              "end": 367
            }
          }
        },
        {
          "type": "Identifier",
          "start": 369,
          "end": 378,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 370,
            "end": 378,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 372,
              "end": 378
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 379,
        "end": 387,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 381,
          "end": 387
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 389,
      "end": 453,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 401,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 405,
          "end": 431,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 409,
            "end": 431,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 411,
              "end": 431,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 411,
                "end": 431,
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
          "start": 433,
          "end": 442,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 434,
            "end": 442,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 436,
              "end": 442
            }
          }
        },
        {
          "type": "Identifier",
          "start": 444,
          "end": 448,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 445,
            "end": 448,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 447,
              "end": 448,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 447,
                "end": 448,
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
        "start": 449,
        "end": 452,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 451,
          "end": 452,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 451,
            "end": 452,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 401,
        "end": 404,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 402,
            "end": 403,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 402,
              "end": 403,
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
      "start": 454,
      "end": 490,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 469,
        "end": 490,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 471,
            "end": 488,
            "argument": {
              "type": "Identifier",
              "start": 478,
              "end": 487,
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
        "start": 463,
        "end": 466,
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
      "start": 492,
      "end": 534,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 533,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 504,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 498,
              "end": 504,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 500,
                "end": 504,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 504,
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
            "start": 507,
            "end": 533,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 511,
              "end": 533,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 515,
                  "end": 516,
                  "raw": "0",
                  "value": 0
                },
                {
                  "type": "Identifier",
                  "start": 521,
                  "end": 530,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 511,
                  "end": 514,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 517,
                  "end": 520,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 531,
                  "end": 533,
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
              "start": 507,
              "end": 510,
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
      "start": 557,
      "end": 599,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 561,
          "end": 598,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 561,
            "end": 563,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 572,
            "end": 598,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 576,
              "end": 598,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 580,
                  "end": 581,
                  "raw": "0",
                  "value": 0
                },
                {
                  "type": "Identifier",
                  "start": 586,
                  "end": 595,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 576,
                  "end": 579,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 582,
                  "end": 585,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 596,
                  "end": 598,
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
              "start": 572,
              "end": 575,
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
      "start": 608,
      "end": 617,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 608,
        "end": 616,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 608,
          "end": 614,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 608,
            "end": 610,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 611,
            "end": 614,
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
      "start": 627,
      "end": 632,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 627,
        "end": 631,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 627,
          "end": 629,
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
      "start": 746,
      "end": 766,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 746,
        "end": 765,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 750,
          "end": 765,
          "expressions": [
            {
              "type": "Literal",
              "start": 754,
              "end": 755,
              "raw": "0",
              "value": 0
            },
            {
              "type": "Literal",
              "start": 760,
              "end": 762,
              "raw": "''",
              "value": ""
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 750,
              "end": 753,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 756,
              "end": 759,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 763,
              "end": 765,
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
          "start": 746,
          "end": 749,
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
      "start": 859,
      "end": 879,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 859,
        "end": 878,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 863,
          "end": 878,
          "expressions": [
            {
              "type": "Literal",
              "start": 867,
              "end": 869,
              "raw": "''",
              "value": ""
            },
            {
              "type": "Literal",
              "start": 874,
              "end": 875,
              "raw": "0",
              "value": 0
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 863,
              "end": 866,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 870,
              "end": 873,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 876,
              "end": 878,
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
          "start": 859,
          "end": 862,
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
      "start": 929,
      "end": 987,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 938,
        "end": 941,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 945,
          "end": 971,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 949,
            "end": 971,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 951,
              "end": 971,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 951,
                "end": 971,
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
          "start": 973,
          "end": 977,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 974,
            "end": 977,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 976,
              "end": 977,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 976,
                "end": 977,
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
        "start": 978,
        "end": 986,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 980,
          "end": 986
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 941,
        "end": 944,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 942,
            "end": 943,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 942,
              "end": 943,
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
      "start": 988,
      "end": 1061,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 997,
        "end": 1000,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1007,
          "end": 1033,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1011,
            "end": 1033,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1013,
              "end": 1033,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1013,
                "end": 1033,
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
          "start": 1035,
          "end": 1044,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1036,
            "end": 1044,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1038,
              "end": 1044
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1046,
          "end": 1050,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1047,
            "end": 1050,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1049,
              "end": 1050,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1049,
                "end": 1050,
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
          "start": 1052,
          "end": 1056,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1053,
            "end": 1056,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1055,
              "end": 1056,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1055,
                "end": 1056,
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
        "start": 1057,
        "end": 1060,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1059,
          "end": 1060,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1059,
            "end": 1060,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1000,
        "end": 1006,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1001,
            "end": 1002,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1001,
              "end": 1002,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1004,
            "end": 1005,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1004,
              "end": 1005,
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
      "start": 1062,
      "end": 1138,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1071,
        "end": 1074,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1084,
          "end": 1110,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1088,
            "end": 1110,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1090,
              "end": 1110,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1090,
                "end": 1110,
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
          "start": 1112,
          "end": 1116,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1113,
            "end": 1116,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1115,
              "end": 1116,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1115,
                "end": 1116,
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
          "start": 1118,
          "end": 1122,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1119,
            "end": 1122,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1121,
              "end": 1122,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1121,
                "end": 1122,
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
          "start": 1124,
          "end": 1128,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1125,
            "end": 1128,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1127,
              "end": 1128,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1127,
                "end": 1128,
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
        "start": 1129,
        "end": 1137,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1131,
          "end": 1137
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1074,
        "end": 1083,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1075,
            "end": 1076,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1075,
              "end": 1076,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1078,
            "end": 1079,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1078,
              "end": 1079,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1081,
            "end": 1082,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1081,
              "end": 1082,
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
      "start": 1139,
      "end": 1170,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1154,
        "end": 1170,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1156,
            "end": 1168,
            "argument": {
              "type": "Literal",
              "start": 1163,
              "end": 1167,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1148,
        "end": 1151,
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
      "start": 1172,
      "end": 1193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1176,
          "end": 1192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1176,
            "end": 1177,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1180,
            "end": 1192,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1184,
              "end": 1192,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1188,
                  "end": 1189,
                  "raw": "3",
                  "value": 3
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1184,
                  "end": 1187,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1190,
                  "end": 1192,
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
              "start": 1180,
              "end": 1183,
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
      "start": 1194,
      "end": 1228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1198,
          "end": 1227,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1198,
            "end": 1199,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1202,
            "end": 1227,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1206,
              "end": 1227,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1209,
                  "end": 1211,
                  "raw": "''",
                  "value": ""
                },
                {
                  "type": "Literal",
                  "start": 1216,
                  "end": 1217,
                  "raw": "3",
                  "value": 3
                },
                {
                  "type": "Literal",
                  "start": 1222,
                  "end": 1224,
                  "raw": "''",
                  "value": ""
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1206,
                  "end": 1209,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1212,
                  "end": 1215,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1218,
                  "end": 1221,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1225,
                  "end": 1227,
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
              "start": 1202,
              "end": 1205,
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
      "start": 1229,
      "end": 1262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1233,
          "end": 1261,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1233,
            "end": 1234,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1237,
            "end": 1261,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1241,
              "end": 1261,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1245,
                  "end": 1246,
                  "raw": "5",
                  "value": 5
                },
                {
                  "type": "Literal",
                  "start": 1251,
                  "end": 1252,
                  "raw": "5",
                  "value": 5
                },
                {
                  "type": "Literal",
                  "start": 1257,
                  "end": 1258,
                  "raw": "5",
                  "value": 5
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1241,
                  "end": 1244,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1247,
                  "end": 1250,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1253,
                  "end": 1256,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1259,
                  "end": 1261,
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
              "start": 1237,
              "end": 1240,
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
      "start": 1263,
      "end": 1277,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1267,
          "end": 1276,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1267,
            "end": 1276,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1268,
              "end": 1276,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1270,
                "end": 1276
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
      "start": 1388,
      "end": 1408,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1392,
          "end": 1408,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1392,
            "end": 1393,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1396,
            "end": 1408,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1400,
              "end": 1408,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1404,
                  "end": 1405,
                  "raw": "4",
                  "value": 4
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1400,
                  "end": 1403,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1406,
                  "end": 1408,
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
              "start": 1396,
              "end": 1399,
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
      "start": 1409,
      "end": 1445,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1413,
          "end": 1444,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1413,
            "end": 1414,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1417,
            "end": 1444,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1421,
              "end": 1444,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1425,
                  "end": 1427,
                  "raw": "''",
                  "value": ""
                },
                {
                  "type": "Literal",
                  "start": 1432,
                  "end": 1434,
                  "raw": "''",
                  "value": ""
                },
                {
                  "type": "Literal",
                  "start": 1439,
                  "end": 1441,
                  "raw": "''",
                  "value": ""
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1421,
                  "end": 1424,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1428,
                  "end": 1431,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1435,
                  "end": 1438,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1442,
                  "end": 1444,
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
              "start": 1417,
              "end": 1420,
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
      "start": 1446,
      "end": 1481,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1450,
          "end": 1480,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1450,
            "end": 1451,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1454,
            "end": 1480,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1458,
              "end": 1480,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1462,
                  "end": 1464,
                  "raw": "''",
                  "value": ""
                },
                {
                  "type": "Literal",
                  "start": 1469,
                  "end": 1471,
                  "raw": "''",
                  "value": ""
                },
                {
                  "type": "Literal",
                  "start": 1476,
                  "end": 1477,
                  "raw": "3",
                  "value": 3
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1458,
                  "end": 1461,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1465,
                  "end": 1468,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1472,
                  "end": 1475,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1478,
                  "end": 1480,
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
              "start": 1454,
              "end": 1457,
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
      "start": 1585,
      "end": 1592,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1585,
        "end": 1591,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 1589,
          "end": 1591,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1589,
              "end": 1591,
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
          "start": 1585,
          "end": 1588,
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
      "start": 1641,
      "end": 1730,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1650,
        "end": 1653,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1690,
          "end": 1716,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1694,
            "end": 1716,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1696,
              "end": 1716,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1696,
                "end": 1716,
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
          "start": 1718,
          "end": 1722,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1719,
            "end": 1722,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1721,
              "end": 1722,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1721,
                "end": 1722,
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
          "start": 1724,
          "end": 1728,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1725,
            "end": 1728,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1727,
              "end": 1728,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1727,
                "end": 1728,
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
        "start": 1653,
        "end": 1689,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1654,
            "end": 1670,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1664,
              "end": 1670
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1654,
              "end": 1655,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1672,
            "end": 1688,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1682,
              "end": 1688
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1672,
              "end": 1673,
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
      "start": 1731,
      "end": 1820,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1740,
        "end": 1743,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1780,
          "end": 1806,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1784,
            "end": 1806,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1786,
              "end": 1806,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1786,
                "end": 1806,
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
          "start": 1808,
          "end": 1812,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1809,
            "end": 1812,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1811,
              "end": 1812,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1811,
                "end": 1812,
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
          "start": 1814,
          "end": 1818,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1815,
            "end": 1818,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1817,
              "end": 1818,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1817,
                "end": 1818,
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
        "start": 1743,
        "end": 1779,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1744,
            "end": 1760,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1754,
              "end": 1760
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1744,
              "end": 1745,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1762,
            "end": 1778,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1772,
              "end": 1778
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1762,
              "end": 1763,
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
      "start": 1821,
      "end": 1861,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1830,
        "end": 1833,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1834,
          "end": 1860,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1838,
            "end": 1860,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1840,
              "end": 1860,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1840,
                "end": 1860,
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
      "start": 1862,
      "end": 1880,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1877,
        "end": 1880,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1871,
        "end": 1874,
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
      "start": 1967,
      "end": 1988,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1967,
        "end": 1987,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 1971,
          "end": 1987,
          "expressions": [
            {
              "type": "Literal",
              "start": 1975,
              "end": 1977,
              "raw": "''",
              "value": ""
            },
            {
              "type": "Literal",
              "start": 1982,
              "end": 1983,
              "raw": "3",
              "value": 3
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1971,
              "end": 1974,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 1978,
              "end": 1981,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 1985,
              "end": 1987,
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
          "start": 1967,
          "end": 1970,
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
      "start": 1989,
      "end": 2010,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1989,
        "end": 2009,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 1993,
          "end": 2009,
          "expressions": [
            {
              "type": "Literal",
              "start": 1997,
              "end": 1998,
              "raw": "3",
              "value": 3
            },
            {
              "type": "Literal",
              "start": 2004,
              "end": 2006,
              "raw": "''",
              "value": ""
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1993,
              "end": 1996,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2000,
              "end": 2003,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2007,
              "end": 2009,
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
          "start": 1989,
          "end": 1992,
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
      "start": 2011,
      "end": 2039,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2011,
        "end": 2038,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2015,
          "end": 2038,
          "expressions": [
            {
              "type": "Literal",
              "start": 2019,
              "end": 2020,
              "raw": "3",
              "value": 3
            },
            {
              "type": "Identifier",
              "start": 2026,
              "end": 2035,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2015,
              "end": 2018,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2022,
              "end": 2025,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2036,
              "end": 2038,
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
          "start": 2011,
          "end": 2014,
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
      "start": 2040,
      "end": 2063,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2040,
        "end": 2062,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2044,
          "end": 2062,
          "expressions": [
            {
              "type": "Literal",
              "start": 2048,
              "end": 2050,
              "raw": "''",
              "value": ""
            },
            {
              "type": "Literal",
              "start": 2055,
              "end": 2059,
              "raw": "null",
              "value": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2044,
              "end": 2047,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2051,
              "end": 2054,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2060,
              "end": 2062,
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
          "start": 2040,
          "end": 2043,
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
      "start": 2166,
      "end": 2191,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2166,
        "end": 2190,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2170,
          "end": 2190,
          "expressions": [
            {
              "type": "Literal",
              "start": 2174,
              "end": 2178,
              "raw": "null",
              "value": null
            },
            {
              "type": "Literal",
              "start": 2183,
              "end": 2187,
              "raw": "null",
              "value": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2170,
              "end": 2173,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2179,
              "end": 2182,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2188,
              "end": 2190,
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
          "start": 2166,
          "end": 2169,
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
      "start": 2321,
      "end": 2346,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2321,
        "end": 2345,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2325,
          "end": 2345,
          "expressions": [
            {
              "type": "Literal",
              "start": 2329,
              "end": 2333,
              "raw": "true",
              "value": true
            },
            {
              "type": "Literal",
              "start": 2338,
              "end": 2342,
              "raw": "null",
              "value": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2325,
              "end": 2328,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2334,
              "end": 2337,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2343,
              "end": 2345,
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
          "start": 2321,
          "end": 2324,
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
      "start": 2347,
      "end": 2372,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2347,
        "end": 2371,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2351,
          "end": 2371,
          "expressions": [
            {
              "type": "Literal",
              "start": 2355,
              "end": 2359,
              "raw": "null",
              "value": null
            },
            {
              "type": "Literal",
              "start": 2364,
              "end": 2368,
              "raw": "true",
              "value": true
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2351,
              "end": 2354,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2360,
              "end": 2363,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2369,
              "end": 2371,
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
          "start": 2347,
          "end": 2350,
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
      "start": 2458,
      "end": 2531,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2467,
        "end": 2470,
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2471,
          "end": 2497,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2475,
            "end": 2497,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2477,
              "end": 2497,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2477,
                "end": 2497,
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
          "start": 2499,
          "end": 2521,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2500,
            "end": 2521,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2502,
              "end": 2521,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2503,
                  "end": 2512,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2504,
                    "end": 2512,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2506,
                      "end": 2512
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2514,
                "end": 2521,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2517,
                  "end": 2521
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2522,
        "end": 2530,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2524,
          "end": 2530
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2532,
      "end": 2605,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2541,
        "end": 2544,
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2545,
          "end": 2571,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2549,
            "end": 2571,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2551,
              "end": 2571,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2551,
                "end": 2571,
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
          "start": 2573,
          "end": 2595,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2574,
            "end": 2595,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2576,
              "end": 2595,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2577,
                  "end": 2586,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2578,
                    "end": 2586,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2580,
                      "end": 2586
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2588,
                "end": 2595,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2591,
                  "end": 2595
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2596,
        "end": 2604,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2598,
          "end": 2604
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2606,
      "end": 2642,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2621,
        "end": 2642,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2623,
            "end": 2640,
            "argument": {
              "type": "Identifier",
              "start": 2630,
              "end": 2639,
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
        "start": 2615,
        "end": 2618,
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
      "start": 2643,
      "end": 2673,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2643,
        "end": 2672,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2647,
          "end": 2672,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 2651,
              "end": 2669,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 2658,
                "end": 2669,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 2658,
                  "end": 2667,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2658,
                    "end": 2659,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2660,
                    "end": 2667,
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
                  "start": 2652,
                  "end": 2653,
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
              "start": 2647,
              "end": 2650,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2670,
              "end": 2672,
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
          "start": 2643,
          "end": 2646,
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
      "start": 2720,
      "end": 2750,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2720,
        "end": 2749,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2724,
          "end": 2749,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 2728,
              "end": 2746,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 2735,
                "end": 2746,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 2744,
                    "end": 2745,
                    "raw": "0",
                    "value": 0
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 2735,
                  "end": 2743,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2735,
                    "end": 2736,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2737,
                    "end": 2743,
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
                  "start": 2729,
                  "end": 2730,
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
              "start": 2724,
              "end": 2727,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2747,
              "end": 2749,
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
          "start": 2720,
          "end": 2723,
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
