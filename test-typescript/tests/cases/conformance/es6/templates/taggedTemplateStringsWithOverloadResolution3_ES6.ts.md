__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 80,
  "end": 2760,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 80,
      "end": 140,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 92,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 93,
          "end": 119,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 97,
            "end": 119,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 119,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 119,
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
          "start": 121,
          "end": 130,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 122,
            "end": 130,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 124,
              "end": 130
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 131,
        "end": 139,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 133,
          "end": 139
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 141,
      "end": 201,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 153,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 154,
          "end": 180,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 158,
            "end": 180,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 160,
              "end": 180,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 160,
                "end": 180,
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
          "start": 182,
          "end": 191,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 191,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 185,
              "end": 191
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 192,
        "end": 200,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 194,
          "end": 200
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 202,
      "end": 233,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 217,
        "end": 233,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 219,
            "end": 231,
            "argument": {
              "type": "Literal",
              "start": 226,
              "end": 230,
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
        "start": 211,
        "end": 214,
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
      "start": 235,
      "end": 272,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 271,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 248,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 248,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 242,
                "end": 248
              }
            }
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 251,
            "end": 271,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 255,
              "end": 271,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 259,
                  "end": 268,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 255,
                  "end": 258,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 269,
                  "end": 271,
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
              "start": 251,
              "end": 254,
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
      "start": 306,
      "end": 320,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 306,
        "end": 319,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 310,
          "end": 319,
          "expressions": [
            {
              "type": "ObjectExpression",
              "start": 314,
              "end": 316,
              "properties": []
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 310,
              "end": 313,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 317,
              "end": 319,
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
          "start": 306,
          "end": 309,
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
      "start": 331,
      "end": 402,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 343,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 344,
          "end": 370,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 348,
            "end": 370,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 350,
              "end": 370,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 350,
                "end": 370,
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
          "start": 372,
          "end": 381,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 373,
            "end": 381,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 375,
              "end": 381
            }
          }
        },
        {
          "type": "Identifier",
          "start": 383,
          "end": 392,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 384,
            "end": 392,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 386,
              "end": 392
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 393,
        "end": 401,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 395,
          "end": 401
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 403,
      "end": 467,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 412,
        "end": 415,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 419,
          "end": 445,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 423,
            "end": 445,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 425,
              "end": 445,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 425,
                "end": 445,
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
          "start": 447,
          "end": 456,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 448,
            "end": 456,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 450,
              "end": 456
            }
          }
        },
        {
          "type": "Identifier",
          "start": 458,
          "end": 462,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 459,
            "end": 462,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 461,
              "end": 462,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 461,
                "end": 462,
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
        "start": 463,
        "end": 466,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 465,
          "end": 466,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 465,
            "end": 466,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 415,
        "end": 418,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 416,
            "end": 417,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 416,
              "end": 417,
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
      "start": 468,
      "end": 504,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 483,
        "end": 504,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 485,
            "end": 502,
            "argument": {
              "type": "Identifier",
              "start": 492,
              "end": 501,
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
        "start": 477,
        "end": 480,
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
      "start": 506,
      "end": 548,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 510,
          "end": 547,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 510,
            "end": 518,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 512,
              "end": 518,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 514,
                "end": 518,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 518,
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
            "start": 521,
            "end": 547,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 525,
              "end": 547,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 529,
                  "end": 530,
                  "raw": "0",
                  "value": 0
                },
                {
                  "type": "Identifier",
                  "start": 535,
                  "end": 544,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 525,
                  "end": 528,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 531,
                  "end": 534,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 545,
                  "end": 547,
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
              "start": 521,
              "end": 524,
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
      "start": 571,
      "end": 607,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 575,
          "end": 606,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 575,
            "end": 577,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 580,
            "end": 606,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 584,
              "end": 606,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 588,
                  "end": 589,
                  "raw": "0",
                  "value": 0
                },
                {
                  "type": "Identifier",
                  "start": 594,
                  "end": 603,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 584,
                  "end": 587,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 590,
                  "end": 593,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 604,
                  "end": 606,
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
              "start": 580,
              "end": 583,
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
      "start": 616,
      "end": 625,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 616,
        "end": 624,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 616,
          "end": 622,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 616,
            "end": 618,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 619,
            "end": 622,
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
      "start": 635,
      "end": 640,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 635,
        "end": 639,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 635,
          "end": 637,
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
      "start": 754,
      "end": 774,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 754,
        "end": 773,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 758,
          "end": 773,
          "expressions": [
            {
              "type": "Literal",
              "start": 762,
              "end": 763,
              "raw": "0",
              "value": 0
            },
            {
              "type": "Literal",
              "start": 768,
              "end": 770,
              "raw": "''",
              "value": ""
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 758,
              "end": 761,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 764,
              "end": 767,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 771,
              "end": 773,
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
          "start": 754,
          "end": 757,
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
      "start": 867,
      "end": 887,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 867,
        "end": 886,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 871,
          "end": 886,
          "expressions": [
            {
              "type": "Literal",
              "start": 875,
              "end": 877,
              "raw": "''",
              "value": ""
            },
            {
              "type": "Literal",
              "start": 882,
              "end": 883,
              "raw": "0",
              "value": 0
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 871,
              "end": 874,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 878,
              "end": 881,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 884,
              "end": 886,
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
          "start": 867,
          "end": 870,
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
      "start": 937,
      "end": 995,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 946,
        "end": 949,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 953,
          "end": 979,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 957,
            "end": 979,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 959,
              "end": 979,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 959,
                "end": 979,
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
          "start": 981,
          "end": 985,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 982,
            "end": 985,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 984,
              "end": 985,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 984,
                "end": 985,
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
        "start": 986,
        "end": 994,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 988,
          "end": 994
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 949,
        "end": 952,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 950,
            "end": 951,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 950,
              "end": 951,
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
      "start": 996,
      "end": 1069,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1005,
        "end": 1008,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1015,
          "end": 1041,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1019,
            "end": 1041,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1021,
              "end": 1041,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1021,
                "end": 1041,
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
          "start": 1043,
          "end": 1052,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1044,
            "end": 1052,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1046,
              "end": 1052
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1054,
          "end": 1058,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1060,
          "end": 1064,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1061,
            "end": 1064,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1063,
              "end": 1064,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1063,
                "end": 1064,
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
        "start": 1065,
        "end": 1068,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1067,
          "end": 1068,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1067,
            "end": 1068,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1008,
        "end": 1014,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1009,
            "end": 1010,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1009,
              "end": 1010,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1012,
            "end": 1013,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1012,
              "end": 1013,
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
      "start": 1070,
      "end": 1146,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1079,
        "end": 1082,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1092,
          "end": 1118,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1096,
            "end": 1118,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1098,
              "end": 1118,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1098,
                "end": 1118,
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
          "start": 1120,
          "end": 1124,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1121,
            "end": 1124,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1123,
              "end": 1124,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1123,
                "end": 1124,
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
          "start": 1126,
          "end": 1130,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1127,
            "end": 1130,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1129,
              "end": 1130,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1129,
                "end": 1130,
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
          "start": 1132,
          "end": 1136,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1133,
            "end": 1136,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1135,
              "end": 1136,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1135,
                "end": 1136,
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
        "start": 1137,
        "end": 1145,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1139,
          "end": 1145
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1082,
        "end": 1091,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1083,
            "end": 1084,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1083,
              "end": 1084,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1086,
            "end": 1087,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1086,
              "end": 1087,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1089,
            "end": 1090,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1089,
              "end": 1090,
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
      "start": 1147,
      "end": 1178,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1162,
        "end": 1178,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1164,
            "end": 1176,
            "argument": {
              "type": "Literal",
              "start": 1171,
              "end": 1175,
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
        "start": 1156,
        "end": 1159,
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
      "start": 1180,
      "end": 1201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1184,
          "end": 1200,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1184,
            "end": 1185,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1188,
            "end": 1200,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1192,
              "end": 1200,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1196,
                  "end": 1197,
                  "raw": "3",
                  "value": 3
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1192,
                  "end": 1195,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1198,
                  "end": 1200,
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
              "start": 1188,
              "end": 1191,
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
      "start": 1202,
      "end": 1236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1206,
          "end": 1235,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1206,
            "end": 1207,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1210,
            "end": 1235,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1214,
              "end": 1235,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1217,
                  "end": 1219,
                  "raw": "''",
                  "value": ""
                },
                {
                  "type": "Literal",
                  "start": 1224,
                  "end": 1225,
                  "raw": "3",
                  "value": 3
                },
                {
                  "type": "Literal",
                  "start": 1230,
                  "end": 1232,
                  "raw": "''",
                  "value": ""
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1214,
                  "end": 1217,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1220,
                  "end": 1223,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1226,
                  "end": 1229,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1233,
                  "end": 1235,
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
              "start": 1210,
              "end": 1213,
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
      "start": 1237,
      "end": 1270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1241,
          "end": 1269,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1241,
            "end": 1242,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1245,
            "end": 1269,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1249,
              "end": 1269,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1253,
                  "end": 1254,
                  "raw": "5",
                  "value": 5
                },
                {
                  "type": "Literal",
                  "start": 1259,
                  "end": 1260,
                  "raw": "5",
                  "value": 5
                },
                {
                  "type": "Literal",
                  "start": 1265,
                  "end": 1266,
                  "raw": "5",
                  "value": 5
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1249,
                  "end": 1252,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1255,
                  "end": 1258,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1261,
                  "end": 1264,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1267,
                  "end": 1269,
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
              "start": 1245,
              "end": 1248,
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
      "start": 1271,
      "end": 1285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1275,
          "end": 1284,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1275,
            "end": 1284,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1276,
              "end": 1284,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1278,
                "end": 1284
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
      "start": 1396,
      "end": 1416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1400,
          "end": 1416,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1400,
            "end": 1401,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1404,
            "end": 1416,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1408,
              "end": 1416,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1412,
                  "end": 1413,
                  "raw": "4",
                  "value": 4
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1408,
                  "end": 1411,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1414,
                  "end": 1416,
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
              "start": 1404,
              "end": 1407,
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
      "start": 1417,
      "end": 1453,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1421,
          "end": 1452,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1421,
            "end": 1422,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1425,
            "end": 1452,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1429,
              "end": 1452,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1433,
                  "end": 1435,
                  "raw": "''",
                  "value": ""
                },
                {
                  "type": "Literal",
                  "start": 1440,
                  "end": 1442,
                  "raw": "''",
                  "value": ""
                },
                {
                  "type": "Literal",
                  "start": 1447,
                  "end": 1449,
                  "raw": "''",
                  "value": ""
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1429,
                  "end": 1432,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1436,
                  "end": 1439,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1443,
                  "end": 1446,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1450,
                  "end": 1452,
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
              "start": 1425,
              "end": 1428,
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
      "start": 1454,
      "end": 1489,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1458,
          "end": 1488,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1458,
            "end": 1459,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1462,
            "end": 1488,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1466,
              "end": 1488,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1470,
                  "end": 1472,
                  "raw": "''",
                  "value": ""
                },
                {
                  "type": "Literal",
                  "start": 1477,
                  "end": 1479,
                  "raw": "''",
                  "value": ""
                },
                {
                  "type": "Literal",
                  "start": 1484,
                  "end": 1485,
                  "raw": "3",
                  "value": 3
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1466,
                  "end": 1469,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1473,
                  "end": 1476,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1480,
                  "end": 1483,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1486,
                  "end": 1488,
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
              "start": 1462,
              "end": 1465,
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
      "start": 1593,
      "end": 1600,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1593,
        "end": 1599,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 1597,
          "end": 1599,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1597,
              "end": 1599,
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
          "start": 1593,
          "end": 1596,
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
      "start": 1649,
      "end": 1738,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1658,
        "end": 1661,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1698,
          "end": 1724,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1702,
            "end": 1724,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1704,
              "end": 1724,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1704,
                "end": 1724,
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
          "start": 1726,
          "end": 1730,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1727,
            "end": 1730,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1729,
              "end": 1730,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1729,
                "end": 1730,
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
          "start": 1732,
          "end": 1736,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1733,
            "end": 1736,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1735,
              "end": 1736,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1735,
                "end": 1736,
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
        "start": 1661,
        "end": 1697,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1662,
            "end": 1678,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1672,
              "end": 1678
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1662,
              "end": 1663,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1680,
            "end": 1696,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1690,
              "end": 1696
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1680,
              "end": 1681,
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
      "start": 1739,
      "end": 1828,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1748,
        "end": 1751,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1788,
          "end": 1814,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1792,
            "end": 1814,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1794,
              "end": 1814,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1794,
                "end": 1814,
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
          "start": 1816,
          "end": 1820,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1817,
            "end": 1820,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1819,
              "end": 1820,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1819,
                "end": 1820,
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
          "start": 1822,
          "end": 1826,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1823,
            "end": 1826,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1825,
              "end": 1826,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1825,
                "end": 1826,
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
        "start": 1751,
        "end": 1787,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1752,
            "end": 1768,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1762,
              "end": 1768
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1752,
              "end": 1753,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1770,
            "end": 1786,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1780,
              "end": 1786
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1770,
              "end": 1771,
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
      "start": 1829,
      "end": 1869,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1838,
        "end": 1841,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1842,
          "end": 1868,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1846,
            "end": 1868,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1848,
              "end": 1868,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1848,
                "end": 1868,
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
      "start": 1870,
      "end": 1888,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1885,
        "end": 1888,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1879,
        "end": 1882,
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
      "start": 1975,
      "end": 1996,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1975,
        "end": 1995,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 1979,
          "end": 1995,
          "expressions": [
            {
              "type": "Literal",
              "start": 1983,
              "end": 1985,
              "raw": "''",
              "value": ""
            },
            {
              "type": "Literal",
              "start": 1990,
              "end": 1991,
              "raw": "3",
              "value": 3
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1979,
              "end": 1982,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 1986,
              "end": 1989,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 1993,
              "end": 1995,
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
          "start": 1975,
          "end": 1978,
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
      "start": 1997,
      "end": 2018,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1997,
        "end": 2017,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2001,
          "end": 2017,
          "expressions": [
            {
              "type": "Literal",
              "start": 2005,
              "end": 2006,
              "raw": "3",
              "value": 3
            },
            {
              "type": "Literal",
              "start": 2012,
              "end": 2014,
              "raw": "''",
              "value": ""
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2001,
              "end": 2004,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2008,
              "end": 2011,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2015,
              "end": 2017,
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
          "start": 1997,
          "end": 2000,
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
      "start": 2019,
      "end": 2047,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2019,
        "end": 2046,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2023,
          "end": 2046,
          "expressions": [
            {
              "type": "Literal",
              "start": 2027,
              "end": 2028,
              "raw": "3",
              "value": 3
            },
            {
              "type": "Identifier",
              "start": 2034,
              "end": 2043,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2023,
              "end": 2026,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2030,
              "end": 2033,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2044,
              "end": 2046,
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
          "start": 2019,
          "end": 2022,
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
      "start": 2048,
      "end": 2071,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2048,
        "end": 2070,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2052,
          "end": 2070,
          "expressions": [
            {
              "type": "Literal",
              "start": 2056,
              "end": 2058,
              "raw": "''",
              "value": ""
            },
            {
              "type": "Literal",
              "start": 2063,
              "end": 2067,
              "raw": "null",
              "value": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2052,
              "end": 2055,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2059,
              "end": 2062,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2068,
              "end": 2070,
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
          "start": 2048,
          "end": 2051,
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
      "start": 2174,
      "end": 2199,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2174,
        "end": 2198,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2178,
          "end": 2198,
          "expressions": [
            {
              "type": "Literal",
              "start": 2182,
              "end": 2186,
              "raw": "null",
              "value": null
            },
            {
              "type": "Literal",
              "start": 2191,
              "end": 2195,
              "raw": "null",
              "value": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2178,
              "end": 2181,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2187,
              "end": 2190,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2196,
              "end": 2198,
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
          "start": 2174,
          "end": 2177,
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
      "start": 2329,
      "end": 2354,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2329,
        "end": 2353,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2333,
          "end": 2353,
          "expressions": [
            {
              "type": "Literal",
              "start": 2337,
              "end": 2341,
              "raw": "true",
              "value": true
            },
            {
              "type": "Literal",
              "start": 2346,
              "end": 2350,
              "raw": "null",
              "value": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2333,
              "end": 2336,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2342,
              "end": 2345,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2351,
              "end": 2353,
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
          "start": 2329,
          "end": 2332,
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
      "start": 2355,
      "end": 2380,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2355,
        "end": 2379,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2359,
          "end": 2379,
          "expressions": [
            {
              "type": "Literal",
              "start": 2363,
              "end": 2367,
              "raw": "null",
              "value": null
            },
            {
              "type": "Literal",
              "start": 2372,
              "end": 2376,
              "raw": "true",
              "value": true
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2359,
              "end": 2362,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2368,
              "end": 2371,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2377,
              "end": 2379,
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
          "start": 2355,
          "end": 2358,
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
      "start": 2466,
      "end": 2539,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2475,
        "end": 2478,
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2479,
          "end": 2505,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2483,
            "end": 2505,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2485,
              "end": 2505,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2485,
                "end": 2505,
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
          "start": 2507,
          "end": 2529,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2508,
            "end": 2529,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2510,
              "end": 2529,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2511,
                  "end": 2520,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2512,
                    "end": 2520,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2514,
                      "end": 2520
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2522,
                "end": 2529,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2525,
                  "end": 2529
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2530,
        "end": 2538,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2532,
          "end": 2538
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2540,
      "end": 2613,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2549,
        "end": 2552,
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2553,
          "end": 2579,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2557,
            "end": 2579,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2559,
              "end": 2579,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2559,
                "end": 2579,
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
          "start": 2581,
          "end": 2603,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2582,
            "end": 2603,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2584,
              "end": 2603,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2585,
                  "end": 2594,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2586,
                    "end": 2594,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2588,
                      "end": 2594
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2596,
                "end": 2603,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2599,
                  "end": 2603
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2604,
        "end": 2612,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2606,
          "end": 2612
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2614,
      "end": 2650,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2629,
        "end": 2650,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2631,
            "end": 2648,
            "argument": {
              "type": "Identifier",
              "start": 2638,
              "end": 2647,
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
        "start": 2623,
        "end": 2626,
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
      "start": 2651,
      "end": 2681,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2651,
        "end": 2680,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2655,
          "end": 2680,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 2659,
              "end": 2677,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 2666,
                "end": 2677,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 2666,
                  "end": 2675,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2666,
                    "end": 2667,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2668,
                    "end": 2675,
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
                  "start": 2660,
                  "end": 2661,
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
              "start": 2655,
              "end": 2658,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2678,
              "end": 2680,
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
          "start": 2651,
          "end": 2654,
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
      "start": 2728,
      "end": 2758,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2728,
        "end": 2757,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2732,
          "end": 2757,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 2736,
              "end": 2754,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 2743,
                "end": 2754,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 2752,
                    "end": 2753,
                    "raw": "0",
                    "value": 0
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 2743,
                  "end": 2751,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2743,
                    "end": 2744,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2745,
                    "end": 2751,
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
                  "start": 2737,
                  "end": 2738,
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
              "start": 2732,
              "end": 2735,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 2755,
              "end": 2757,
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
          "start": 2728,
          "end": 2731,
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
