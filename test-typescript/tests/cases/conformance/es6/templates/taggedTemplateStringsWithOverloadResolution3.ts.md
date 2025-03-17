__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 66,
  "end": 2752,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 66,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 78,
        "name": "fn1",
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
          "start": 79,
          "end": 105,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 83,
            "end": 105,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 105,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 105,
                "name": "TemplateStringsArray",
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
          "start": 107,
          "end": 116,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 108,
            "end": 116,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 110,
              "end": 116
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 117,
        "end": 125,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 119,
          "end": 125
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 127,
      "end": 187,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 139,
        "name": "fn1",
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
          "start": 140,
          "end": 166,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 144,
            "end": 166,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 146,
              "end": 166,
              "typeName": {
                "type": "Identifier",
                "start": 146,
                "end": 166,
                "name": "TemplateStringsArray",
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
          "start": 168,
          "end": 177,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 169,
            "end": 177,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 171,
              "end": 177
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 178,
        "end": 186,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 180,
          "end": 186
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 188,
      "end": 219,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 200,
        "name": "fn1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 234,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 226,
              "end": 234,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 228,
                "end": 234
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 237,
            "end": 257,
            "tag": {
              "type": "Identifier",
              "start": 237,
              "end": 240,
              "name": "fn1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 241,
              "end": 257,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 245,
                  "end": 254,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 241,
                  "end": 244,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 255,
                  "end": 257,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 292,
      "end": 306,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 292,
        "end": 305,
        "tag": {
          "type": "Identifier",
          "start": 292,
          "end": 295,
          "name": "fn1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 303,
              "end": 305,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 317,
      "end": 388,
      "id": {
        "type": "Identifier",
        "start": 326,
        "end": 329,
        "name": "fn2",
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
          "start": 330,
          "end": 356,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 334,
            "end": 356,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 336,
              "end": 356,
              "typeName": {
                "type": "Identifier",
                "start": 336,
                "end": 356,
                "name": "TemplateStringsArray",
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
          "start": 358,
          "end": 367,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 359,
            "end": 367,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 361,
              "end": 367
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 369,
          "end": 378,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 370,
            "end": 378,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 372,
              "end": 378
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 379,
        "end": 387,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 381,
          "end": 387
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 389,
      "end": 453,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 401,
        "name": "fn2",
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
          "start": 405,
          "end": 431,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 409,
            "end": 431,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 411,
              "end": 431,
              "typeName": {
                "type": "Identifier",
                "start": 411,
                "end": 431,
                "name": "TemplateStringsArray",
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
          "start": 433,
          "end": 442,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 434,
            "end": 442,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 436,
              "end": 442
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 444,
          "end": 448,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 445,
            "end": 448,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 447,
              "end": 448,
              "typeName": {
                "type": "Identifier",
                "start": 447,
                "end": 448,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 401,
        "end": 404,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 402,
            "end": 403,
            "name": {
              "type": "Identifier",
              "start": 402,
              "end": 403,
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 449,
        "end": 452,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 451,
          "end": 452,
          "typeName": {
            "type": "Identifier",
            "start": 451,
            "end": 452,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 454,
      "end": 490,
      "id": {
        "type": "Identifier",
        "start": 463,
        "end": 466,
        "name": "fn2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 504,
            "name": "d1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 498,
              "end": 504,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 500,
                "end": 504,
                "typeName": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 504,
                  "name": "Date",
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
            "type": "TaggedTemplateExpression",
            "start": 507,
            "end": 533,
            "tag": {
              "type": "Identifier",
              "start": 507,
              "end": 510,
              "name": "fn2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 511,
              "end": 533,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 515,
                  "end": 516,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Identifier",
                  "start": 521,
                  "end": 530,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 511,
                  "end": 514,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 517,
                  "end": 520,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 531,
                  "end": 533,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 561,
            "end": 563,
            "name": "d2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 572,
            "end": 598,
            "tag": {
              "type": "Identifier",
              "start": 572,
              "end": 575,
              "name": "fn2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 576,
              "end": 598,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 580,
                  "end": 581,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Identifier",
                  "start": 586,
                  "end": 595,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 576,
                  "end": 579,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 582,
                  "end": 585,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 596,
                  "end": 598,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 608,
      "end": 617,
      "expression": {
        "type": "CallExpression",
        "start": 608,
        "end": 616,
        "callee": {
          "type": "MemberExpression",
          "start": 608,
          "end": 614,
          "object": {
            "type": "Identifier",
            "start": 608,
            "end": 610,
            "name": "d1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 611,
            "end": 614,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 627,
      "end": 632,
      "expression": {
        "type": "CallExpression",
        "start": 627,
        "end": 631,
        "callee": {
          "type": "Identifier",
          "start": 627,
          "end": 629,
          "name": "d2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 746,
      "end": 766,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 746,
        "end": 765,
        "tag": {
          "type": "Identifier",
          "start": 746,
          "end": 749,
          "name": "fn2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 750,
          "end": 765,
          "expressions": [
            {
              "type": "Literal",
              "start": 754,
              "end": 755,
              "value": 0,
              "raw": "0"
            },
            {
              "type": "Literal",
              "start": 760,
              "end": 762,
              "value": "",
              "raw": "''"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 750,
              "end": 753,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 756,
              "end": 759,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 763,
              "end": 765,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 859,
      "end": 879,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 859,
        "end": 878,
        "tag": {
          "type": "Identifier",
          "start": 859,
          "end": 862,
          "name": "fn2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 863,
          "end": 878,
          "expressions": [
            {
              "type": "Literal",
              "start": 867,
              "end": 869,
              "value": "",
              "raw": "''"
            },
            {
              "type": "Literal",
              "start": 874,
              "end": 875,
              "value": 0,
              "raw": "0"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 863,
              "end": 866,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 870,
              "end": 873,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 876,
              "end": 878,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 929,
      "end": 987,
      "id": {
        "type": "Identifier",
        "start": 938,
        "end": 941,
        "name": "fn3",
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
          "start": 945,
          "end": 971,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 949,
            "end": 971,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 951,
              "end": 971,
              "typeName": {
                "type": "Identifier",
                "start": 951,
                "end": 971,
                "name": "TemplateStringsArray",
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
          "start": 973,
          "end": 977,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 974,
            "end": 977,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 976,
              "end": 977,
              "typeName": {
                "type": "Identifier",
                "start": 976,
                "end": 977,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 941,
        "end": 944,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 942,
            "end": 943,
            "name": {
              "type": "Identifier",
              "start": 942,
              "end": 943,
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 978,
        "end": 986,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 980,
          "end": 986
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 988,
      "end": 1061,
      "id": {
        "type": "Identifier",
        "start": 997,
        "end": 1000,
        "name": "fn3",
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
          "start": 1007,
          "end": 1033,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1011,
            "end": 1033,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1013,
              "end": 1033,
              "typeName": {
                "type": "Identifier",
                "start": 1013,
                "end": 1033,
                "name": "TemplateStringsArray",
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
          "start": 1035,
          "end": 1044,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1036,
            "end": 1044,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1038,
              "end": 1044
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1046,
          "end": 1050,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1047,
            "end": 1050,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1049,
              "end": 1050,
              "typeName": {
                "type": "Identifier",
                "start": 1049,
                "end": 1050,
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
          "start": 1052,
          "end": 1056,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1053,
            "end": 1056,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1055,
              "end": 1056,
              "typeName": {
                "type": "Identifier",
                "start": 1055,
                "end": 1056,
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
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1000,
        "end": 1006,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1001,
            "end": 1002,
            "name": {
              "type": "Identifier",
              "start": 1001,
              "end": 1002,
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
            "start": 1004,
            "end": 1005,
            "name": {
              "type": "Identifier",
              "start": 1004,
              "end": 1005,
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
        "start": 1057,
        "end": 1060,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1059,
          "end": 1060,
          "typeName": {
            "type": "Identifier",
            "start": 1059,
            "end": 1060,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1062,
      "end": 1138,
      "id": {
        "type": "Identifier",
        "start": 1071,
        "end": 1074,
        "name": "fn3",
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
          "start": 1084,
          "end": 1110,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1088,
            "end": 1110,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1090,
              "end": 1110,
              "typeName": {
                "type": "Identifier",
                "start": 1090,
                "end": 1110,
                "name": "TemplateStringsArray",
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
          "start": 1112,
          "end": 1116,
          "name": "v",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1113,
            "end": 1116,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1115,
              "end": 1116,
              "typeName": {
                "type": "Identifier",
                "start": 1115,
                "end": 1116,
                "name": "V",
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
          "start": 1118,
          "end": 1122,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1119,
            "end": 1122,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1121,
              "end": 1122,
              "typeName": {
                "type": "Identifier",
                "start": 1121,
                "end": 1122,
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
        },
        {
          "type": "Identifier",
          "start": 1124,
          "end": 1128,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1125,
            "end": 1128,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1127,
              "end": 1128,
              "typeName": {
                "type": "Identifier",
                "start": 1127,
                "end": 1128,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1074,
        "end": 1083,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1075,
            "end": 1076,
            "name": {
              "type": "Identifier",
              "start": 1075,
              "end": 1076,
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
            "start": 1078,
            "end": 1079,
            "name": {
              "type": "Identifier",
              "start": 1078,
              "end": 1079,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 1081,
            "end": 1082,
            "name": {
              "type": "Identifier",
              "start": 1081,
              "end": 1082,
              "name": "V",
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
        "start": 1129,
        "end": 1137,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1131,
          "end": 1137
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1139,
      "end": 1170,
      "id": {
        "type": "Identifier",
        "start": 1148,
        "end": 1151,
        "name": "fn3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 1176,
            "end": 1177,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1180,
            "end": 1192,
            "tag": {
              "type": "Identifier",
              "start": 1180,
              "end": 1183,
              "name": "fn3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1184,
              "end": 1192,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1188,
                  "end": 1189,
                  "value": 3,
                  "raw": "3"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1184,
                  "end": 1187,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1190,
                  "end": 1192,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1198,
            "end": 1199,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1202,
            "end": 1227,
            "tag": {
              "type": "Identifier",
              "start": 1202,
              "end": 1205,
              "name": "fn3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1206,
              "end": 1227,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1209,
                  "end": 1211,
                  "value": "",
                  "raw": "''"
                },
                {
                  "type": "Literal",
                  "start": 1216,
                  "end": 1217,
                  "value": 3,
                  "raw": "3"
                },
                {
                  "type": "Literal",
                  "start": 1222,
                  "end": 1224,
                  "value": "",
                  "raw": "''"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1206,
                  "end": 1209,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1212,
                  "end": 1215,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1218,
                  "end": 1221,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1225,
                  "end": 1227,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1233,
            "end": 1234,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1237,
            "end": 1261,
            "tag": {
              "type": "Identifier",
              "start": 1237,
              "end": 1240,
              "name": "fn3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1241,
              "end": 1261,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1245,
                  "end": 1246,
                  "value": 5,
                  "raw": "5"
                },
                {
                  "type": "Literal",
                  "start": 1251,
                  "end": 1252,
                  "value": 5,
                  "raw": "5"
                },
                {
                  "type": "Literal",
                  "start": 1257,
                  "end": 1258,
                  "value": 5,
                  "raw": "5"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1241,
                  "end": 1244,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1247,
                  "end": 1250,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1253,
                  "end": 1256,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1259,
                  "end": 1261,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1267,
            "end": 1276,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1268,
              "end": 1276,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1270,
                "end": 1276
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
      "start": 1388,
      "end": 1408,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1392,
          "end": 1408,
          "id": {
            "type": "Identifier",
            "start": 1392,
            "end": 1393,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1396,
            "end": 1408,
            "tag": {
              "type": "Identifier",
              "start": 1396,
              "end": 1399,
              "name": "fn3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1400,
              "end": 1408,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1404,
                  "end": 1405,
                  "value": 4,
                  "raw": "4"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1400,
                  "end": 1403,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1406,
                  "end": 1408,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1413,
            "end": 1414,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1417,
            "end": 1444,
            "tag": {
              "type": "Identifier",
              "start": 1417,
              "end": 1420,
              "name": "fn3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1421,
              "end": 1444,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1425,
                  "end": 1427,
                  "value": "",
                  "raw": "''"
                },
                {
                  "type": "Literal",
                  "start": 1432,
                  "end": 1434,
                  "value": "",
                  "raw": "''"
                },
                {
                  "type": "Literal",
                  "start": 1439,
                  "end": 1441,
                  "value": "",
                  "raw": "''"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1421,
                  "end": 1424,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1428,
                  "end": 1431,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1435,
                  "end": 1438,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1442,
                  "end": 1444,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1450,
            "end": 1451,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1454,
            "end": 1480,
            "tag": {
              "type": "Identifier",
              "start": 1454,
              "end": 1457,
              "name": "fn3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1458,
              "end": 1480,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1462,
                  "end": 1464,
                  "value": "",
                  "raw": "''"
                },
                {
                  "type": "Literal",
                  "start": 1469,
                  "end": 1471,
                  "value": "",
                  "raw": "''"
                },
                {
                  "type": "Literal",
                  "start": 1476,
                  "end": 1477,
                  "value": 3,
                  "raw": "3"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1458,
                  "end": 1461,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1465,
                  "end": 1468,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1472,
                  "end": 1475,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1478,
                  "end": 1480,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1585,
      "end": 1592,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1585,
        "end": 1591,
        "tag": {
          "type": "Identifier",
          "start": 1585,
          "end": 1588,
          "name": "fn3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1641,
      "end": 1730,
      "id": {
        "type": "Identifier",
        "start": 1650,
        "end": 1653,
        "name": "fn4",
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
          "start": 1690,
          "end": 1716,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1694,
            "end": 1716,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1696,
              "end": 1716,
              "typeName": {
                "type": "Identifier",
                "start": 1696,
                "end": 1716,
                "name": "TemplateStringsArray",
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
          "start": 1718,
          "end": 1722,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1719,
            "end": 1722,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1721,
              "end": 1722,
              "typeName": {
                "type": "Identifier",
                "start": 1721,
                "end": 1722,
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
          "start": 1724,
          "end": 1728,
          "name": "m",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1725,
            "end": 1728,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1727,
              "end": 1728,
              "typeName": {
                "type": "Identifier",
                "start": 1727,
                "end": 1728,
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
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1653,
        "end": 1689,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1654,
            "end": 1670,
            "name": {
              "type": "Identifier",
              "start": 1654,
              "end": 1655,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1664,
              "end": 1670
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1672,
            "end": 1688,
            "name": {
              "type": "Identifier",
              "start": 1672,
              "end": 1673,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1682,
              "end": 1688
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1731,
      "end": 1820,
      "id": {
        "type": "Identifier",
        "start": 1740,
        "end": 1743,
        "name": "fn4",
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
          "start": 1780,
          "end": 1806,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1784,
            "end": 1806,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1786,
              "end": 1806,
              "typeName": {
                "type": "Identifier",
                "start": 1786,
                "end": 1806,
                "name": "TemplateStringsArray",
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
          "start": 1808,
          "end": 1812,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1809,
            "end": 1812,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1811,
              "end": 1812,
              "typeName": {
                "type": "Identifier",
                "start": 1811,
                "end": 1812,
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
          "start": 1814,
          "end": 1818,
          "name": "m",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1815,
            "end": 1818,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1817,
              "end": 1818,
              "typeName": {
                "type": "Identifier",
                "start": 1817,
                "end": 1818,
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
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1743,
        "end": 1779,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1744,
            "end": 1760,
            "name": {
              "type": "Identifier",
              "start": 1744,
              "end": 1745,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1754,
              "end": 1760
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1762,
            "end": 1778,
            "name": {
              "type": "Identifier",
              "start": 1762,
              "end": 1763,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1772,
              "end": 1778
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1821,
      "end": 1861,
      "id": {
        "type": "Identifier",
        "start": 1830,
        "end": 1833,
        "name": "fn4",
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
          "start": 1834,
          "end": 1860,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1838,
            "end": 1860,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1840,
              "end": 1860,
              "typeName": {
                "type": "Identifier",
                "start": 1840,
                "end": 1860,
                "name": "TemplateStringsArray",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1862,
      "end": 1880,
      "id": {
        "type": "Identifier",
        "start": 1871,
        "end": 1874,
        "name": "fn4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1877,
        "end": 1880,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1967,
      "end": 1988,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1967,
        "end": 1987,
        "tag": {
          "type": "Identifier",
          "start": 1967,
          "end": 1970,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 1971,
          "end": 1987,
          "expressions": [
            {
              "type": "Literal",
              "start": 1975,
              "end": 1977,
              "value": "",
              "raw": "''"
            },
            {
              "type": "Literal",
              "start": 1982,
              "end": 1983,
              "value": 3,
              "raw": "3"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1971,
              "end": 1974,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 1978,
              "end": 1981,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 1985,
              "end": 1987,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1989,
      "end": 2010,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1989,
        "end": 2009,
        "tag": {
          "type": "Identifier",
          "start": 1989,
          "end": 1992,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 1993,
          "end": 2009,
          "expressions": [
            {
              "type": "Literal",
              "start": 1997,
              "end": 1998,
              "value": 3,
              "raw": "3"
            },
            {
              "type": "Literal",
              "start": 2004,
              "end": 2006,
              "value": "",
              "raw": "''"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1993,
              "end": 1996,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2000,
              "end": 2003,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2007,
              "end": 2009,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2011,
      "end": 2039,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2011,
        "end": 2038,
        "tag": {
          "type": "Identifier",
          "start": 2011,
          "end": 2014,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2015,
          "end": 2038,
          "expressions": [
            {
              "type": "Literal",
              "start": 2019,
              "end": 2020,
              "value": 3,
              "raw": "3"
            },
            {
              "type": "Identifier",
              "start": 2026,
              "end": 2035,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2015,
              "end": 2018,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2022,
              "end": 2025,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2036,
              "end": 2038,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2040,
      "end": 2063,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2040,
        "end": 2062,
        "tag": {
          "type": "Identifier",
          "start": 2040,
          "end": 2043,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2044,
          "end": 2062,
          "expressions": [
            {
              "type": "Literal",
              "start": 2048,
              "end": 2050,
              "value": "",
              "raw": "''"
            },
            {
              "type": "Literal",
              "start": 2055,
              "end": 2059,
              "value": null,
              "raw": "null"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2044,
              "end": 2047,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2051,
              "end": 2054,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2060,
              "end": 2062,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2166,
      "end": 2191,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2166,
        "end": 2190,
        "tag": {
          "type": "Identifier",
          "start": 2166,
          "end": 2169,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2170,
          "end": 2190,
          "expressions": [
            {
              "type": "Literal",
              "start": 2174,
              "end": 2178,
              "value": null,
              "raw": "null"
            },
            {
              "type": "Literal",
              "start": 2183,
              "end": 2187,
              "value": null,
              "raw": "null"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2170,
              "end": 2173,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2179,
              "end": 2182,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2188,
              "end": 2190,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2321,
      "end": 2346,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2321,
        "end": 2345,
        "tag": {
          "type": "Identifier",
          "start": 2321,
          "end": 2324,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2325,
          "end": 2345,
          "expressions": [
            {
              "type": "Literal",
              "start": 2329,
              "end": 2333,
              "value": true,
              "raw": "true"
            },
            {
              "type": "Literal",
              "start": 2338,
              "end": 2342,
              "value": null,
              "raw": "null"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2325,
              "end": 2328,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2334,
              "end": 2337,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2343,
              "end": 2345,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2347,
      "end": 2372,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2347,
        "end": 2371,
        "tag": {
          "type": "Identifier",
          "start": 2347,
          "end": 2350,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2351,
          "end": 2371,
          "expressions": [
            {
              "type": "Literal",
              "start": 2355,
              "end": 2359,
              "value": null,
              "raw": "null"
            },
            {
              "type": "Literal",
              "start": 2364,
              "end": 2368,
              "value": true,
              "raw": "true"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2351,
              "end": 2354,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2360,
              "end": 2363,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2369,
              "end": 2371,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2458,
      "end": 2531,
      "id": {
        "type": "Identifier",
        "start": 2467,
        "end": 2470,
        "name": "fn5",
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
          "start": 2471,
          "end": 2497,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2475,
            "end": 2497,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2477,
              "end": 2497,
              "typeName": {
                "type": "Identifier",
                "start": 2477,
                "end": 2497,
                "name": "TemplateStringsArray",
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
          "start": 2499,
          "end": 2521,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2500,
            "end": 2521,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2502,
              "end": 2521,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2503,
                  "end": 2512,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2504,
                    "end": 2512,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2506,
                      "end": 2512
                    }
                  },
                  "decorators": [],
                  "optional": false
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2522,
        "end": 2530,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2524,
          "end": 2530
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2532,
      "end": 2605,
      "id": {
        "type": "Identifier",
        "start": 2541,
        "end": 2544,
        "name": "fn5",
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
          "start": 2545,
          "end": 2571,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2549,
            "end": 2571,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2551,
              "end": 2571,
              "typeName": {
                "type": "Identifier",
                "start": 2551,
                "end": 2571,
                "name": "TemplateStringsArray",
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
          "start": 2573,
          "end": 2595,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2574,
            "end": 2595,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2576,
              "end": 2595,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2577,
                  "end": 2586,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2578,
                    "end": 2586,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2580,
                      "end": 2586
                    }
                  },
                  "decorators": [],
                  "optional": false
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2596,
        "end": 2604,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2598,
          "end": 2604
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2606,
      "end": 2642,
      "id": {
        "type": "Identifier",
        "start": 2615,
        "end": 2618,
        "name": "fn5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2643,
      "end": 2673,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2643,
        "end": 2672,
        "tag": {
          "type": "Identifier",
          "start": 2643,
          "end": 2646,
          "name": "fn5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2647,
          "end": 2672,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 2651,
              "end": 2669,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2652,
                  "end": 2653,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "CallExpression",
                "start": 2658,
                "end": 2669,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2658,
                  "end": 2667,
                  "object": {
                    "type": "Identifier",
                    "start": 2658,
                    "end": 2659,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2660,
                    "end": 2667,
                    "name": "toFixed",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2647,
              "end": 2650,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2670,
              "end": 2672,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2720,
      "end": 2750,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2720,
        "end": 2749,
        "tag": {
          "type": "Identifier",
          "start": 2720,
          "end": 2723,
          "name": "fn5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2724,
          "end": 2749,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 2728,
              "end": 2746,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2729,
                  "end": 2730,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "CallExpression",
                "start": 2735,
                "end": 2746,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2735,
                  "end": 2743,
                  "object": {
                    "type": "Identifier",
                    "start": 2735,
                    "end": 2736,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2737,
                    "end": 2743,
                    "name": "substr",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 2744,
                    "end": 2745,
                    "value": 0,
                    "raw": "0"
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2724,
              "end": 2727,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2747,
              "end": 2749,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
