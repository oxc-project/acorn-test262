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
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 92,
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
          "start": 93,
          "end": 119,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 97,
            "end": 119,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 119,
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 119,
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
          "start": 121,
          "end": 130,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 122,
            "end": 130,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 124,
              "end": 130
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
        "start": 131,
        "end": 139,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 133,
          "end": 139
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 141,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 153,
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
          "start": 154,
          "end": 180,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 158,
            "end": 180,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 160,
              "end": 180,
              "typeName": {
                "type": "Identifier",
                "start": 160,
                "end": 180,
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
          "start": 182,
          "end": 191,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 191,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 185,
              "end": 191
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
        "start": 192,
        "end": 200,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 194,
          "end": 200
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 202,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 214,
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
      "start": 235,
      "end": 272,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 271,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 248,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 248,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 242,
                "end": 248
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 251,
            "end": 271,
            "tag": {
              "type": "Identifier",
              "start": 251,
              "end": 254,
              "name": "fn1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 255,
              "end": 271,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 259,
                  "end": 268,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 255,
                  "end": 258,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 269,
                  "end": 271,
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
      "start": 306,
      "end": 320,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 306,
        "end": 319,
        "tag": {
          "type": "Identifier",
          "start": 306,
          "end": 309,
          "name": "fn1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 317,
              "end": 319,
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
      "start": 331,
      "end": 402,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 343,
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
          "start": 344,
          "end": 370,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 348,
            "end": 370,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 350,
              "end": 370,
              "typeName": {
                "type": "Identifier",
                "start": 350,
                "end": 370,
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
          "start": 372,
          "end": 381,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 373,
            "end": 381,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 375,
              "end": 381
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 383,
          "end": 392,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 384,
            "end": 392,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 386,
              "end": 392
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
        "start": 393,
        "end": 401,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 395,
          "end": 401
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 403,
      "end": 467,
      "id": {
        "type": "Identifier",
        "start": 412,
        "end": 415,
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
          "start": 419,
          "end": 445,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 423,
            "end": 445,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 425,
              "end": 445,
              "typeName": {
                "type": "Identifier",
                "start": 425,
                "end": 445,
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
          "start": 447,
          "end": 456,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 448,
            "end": 456,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 450,
              "end": 456
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 458,
          "end": 462,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 459,
            "end": 462,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 461,
              "end": 462,
              "typeName": {
                "type": "Identifier",
                "start": 461,
                "end": 462,
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
        "start": 415,
        "end": 418,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 416,
            "end": 417,
            "name": {
              "type": "Identifier",
              "start": 416,
              "end": 417,
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
        "start": 463,
        "end": 466,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 465,
          "end": 466,
          "typeName": {
            "type": "Identifier",
            "start": 465,
            "end": 466,
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
      "start": 468,
      "end": 504,
      "id": {
        "type": "Identifier",
        "start": 477,
        "end": 480,
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
      "start": 506,
      "end": 548,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 510,
          "end": 547,
          "id": {
            "type": "Identifier",
            "start": 510,
            "end": 518,
            "name": "d1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 512,
              "end": 518,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 514,
                "end": 518,
                "typeName": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 518,
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
            "start": 521,
            "end": 547,
            "tag": {
              "type": "Identifier",
              "start": 521,
              "end": 524,
              "name": "fn2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 525,
              "end": 547,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 529,
                  "end": 530,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Identifier",
                  "start": 535,
                  "end": 544,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 525,
                  "end": 528,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 531,
                  "end": 534,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 545,
                  "end": 547,
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
      "start": 571,
      "end": 607,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 575,
          "end": 606,
          "id": {
            "type": "Identifier",
            "start": 575,
            "end": 577,
            "name": "d2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 580,
            "end": 606,
            "tag": {
              "type": "Identifier",
              "start": 580,
              "end": 583,
              "name": "fn2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 584,
              "end": 606,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 588,
                  "end": 589,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Identifier",
                  "start": 594,
                  "end": 603,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 584,
                  "end": 587,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 590,
                  "end": 593,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 604,
                  "end": 606,
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
      "start": 616,
      "end": 625,
      "expression": {
        "type": "CallExpression",
        "start": 616,
        "end": 624,
        "callee": {
          "type": "MemberExpression",
          "start": 616,
          "end": 622,
          "object": {
            "type": "Identifier",
            "start": 616,
            "end": 618,
            "name": "d1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 619,
            "end": 622,
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
      "start": 635,
      "end": 640,
      "expression": {
        "type": "CallExpression",
        "start": 635,
        "end": 639,
        "callee": {
          "type": "Identifier",
          "start": 635,
          "end": 637,
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
      "start": 754,
      "end": 774,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 754,
        "end": 773,
        "tag": {
          "type": "Identifier",
          "start": 754,
          "end": 757,
          "name": "fn2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 758,
          "end": 773,
          "expressions": [
            {
              "type": "Literal",
              "start": 762,
              "end": 763,
              "value": 0,
              "raw": "0"
            },
            {
              "type": "Literal",
              "start": 768,
              "end": 770,
              "value": "",
              "raw": "''"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 758,
              "end": 761,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 764,
              "end": 767,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 771,
              "end": 773,
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
      "start": 867,
      "end": 887,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 867,
        "end": 886,
        "tag": {
          "type": "Identifier",
          "start": 867,
          "end": 870,
          "name": "fn2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 871,
          "end": 886,
          "expressions": [
            {
              "type": "Literal",
              "start": 875,
              "end": 877,
              "value": "",
              "raw": "''"
            },
            {
              "type": "Literal",
              "start": 882,
              "end": 883,
              "value": 0,
              "raw": "0"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 871,
              "end": 874,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 878,
              "end": 881,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 884,
              "end": 886,
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
      "start": 937,
      "end": 995,
      "id": {
        "type": "Identifier",
        "start": 946,
        "end": 949,
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
          "start": 953,
          "end": 979,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 957,
            "end": 979,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 959,
              "end": 979,
              "typeName": {
                "type": "Identifier",
                "start": 959,
                "end": 979,
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
          "start": 981,
          "end": 985,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 982,
            "end": 985,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 984,
              "end": 985,
              "typeName": {
                "type": "Identifier",
                "start": 984,
                "end": 985,
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
        "start": 949,
        "end": 952,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 950,
            "end": 951,
            "name": {
              "type": "Identifier",
              "start": 950,
              "end": 951,
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
        "start": 986,
        "end": 994,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 988,
          "end": 994
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 996,
      "end": 1069,
      "id": {
        "type": "Identifier",
        "start": 1005,
        "end": 1008,
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
          "start": 1015,
          "end": 1041,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1019,
            "end": 1041,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1021,
              "end": 1041,
              "typeName": {
                "type": "Identifier",
                "start": 1021,
                "end": 1041,
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
          "start": 1043,
          "end": 1052,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1044,
            "end": 1052,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1046,
              "end": 1052
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1054,
          "end": 1058,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1055,
            "end": 1058,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1057,
              "end": 1058,
              "typeName": {
                "type": "Identifier",
                "start": 1057,
                "end": 1058,
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
          "start": 1060,
          "end": 1064,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1061,
            "end": 1064,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1063,
              "end": 1064,
              "typeName": {
                "type": "Identifier",
                "start": 1063,
                "end": 1064,
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
        "start": 1008,
        "end": 1014,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1009,
            "end": 1010,
            "name": {
              "type": "Identifier",
              "start": 1009,
              "end": 1010,
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
            "start": 1012,
            "end": 1013,
            "name": {
              "type": "Identifier",
              "start": 1012,
              "end": 1013,
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
        "start": 1065,
        "end": 1068,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1067,
          "end": 1068,
          "typeName": {
            "type": "Identifier",
            "start": 1067,
            "end": 1068,
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
      "start": 1070,
      "end": 1146,
      "id": {
        "type": "Identifier",
        "start": 1079,
        "end": 1082,
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
          "start": 1092,
          "end": 1118,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1096,
            "end": 1118,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1098,
              "end": 1118,
              "typeName": {
                "type": "Identifier",
                "start": 1098,
                "end": 1118,
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
          "start": 1120,
          "end": 1124,
          "name": "v",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1121,
            "end": 1124,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1123,
              "end": 1124,
              "typeName": {
                "type": "Identifier",
                "start": 1123,
                "end": 1124,
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
          "start": 1126,
          "end": 1130,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1127,
            "end": 1130,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1129,
              "end": 1130,
              "typeName": {
                "type": "Identifier",
                "start": 1129,
                "end": 1130,
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
          "start": 1132,
          "end": 1136,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1133,
            "end": 1136,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1135,
              "end": 1136,
              "typeName": {
                "type": "Identifier",
                "start": 1135,
                "end": 1136,
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
        "start": 1082,
        "end": 1091,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1083,
            "end": 1084,
            "name": {
              "type": "Identifier",
              "start": 1083,
              "end": 1084,
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
            "start": 1086,
            "end": 1087,
            "name": {
              "type": "Identifier",
              "start": 1086,
              "end": 1087,
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
            "start": 1089,
            "end": 1090,
            "name": {
              "type": "Identifier",
              "start": 1089,
              "end": 1090,
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
        "start": 1137,
        "end": 1145,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1139,
          "end": 1145
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1147,
      "end": 1178,
      "id": {
        "type": "Identifier",
        "start": 1156,
        "end": 1159,
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
      "start": 1180,
      "end": 1201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1184,
          "end": 1200,
          "id": {
            "type": "Identifier",
            "start": 1184,
            "end": 1185,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1188,
            "end": 1200,
            "tag": {
              "type": "Identifier",
              "start": 1188,
              "end": 1191,
              "name": "fn3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1192,
              "end": 1200,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1196,
                  "end": 1197,
                  "value": 3,
                  "raw": "3"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1192,
                  "end": 1195,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1198,
                  "end": 1200,
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
      "start": 1202,
      "end": 1236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1206,
          "end": 1235,
          "id": {
            "type": "Identifier",
            "start": 1206,
            "end": 1207,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1210,
            "end": 1235,
            "tag": {
              "type": "Identifier",
              "start": 1210,
              "end": 1213,
              "name": "fn3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1214,
              "end": 1235,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1217,
                  "end": 1219,
                  "value": "",
                  "raw": "''"
                },
                {
                  "type": "Literal",
                  "start": 1224,
                  "end": 1225,
                  "value": 3,
                  "raw": "3"
                },
                {
                  "type": "Literal",
                  "start": 1230,
                  "end": 1232,
                  "value": "",
                  "raw": "''"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1214,
                  "end": 1217,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1220,
                  "end": 1223,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1226,
                  "end": 1229,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1233,
                  "end": 1235,
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
      "start": 1237,
      "end": 1270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1241,
          "end": 1269,
          "id": {
            "type": "Identifier",
            "start": 1241,
            "end": 1242,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1245,
            "end": 1269,
            "tag": {
              "type": "Identifier",
              "start": 1245,
              "end": 1248,
              "name": "fn3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1249,
              "end": 1269,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1253,
                  "end": 1254,
                  "value": 5,
                  "raw": "5"
                },
                {
                  "type": "Literal",
                  "start": 1259,
                  "end": 1260,
                  "value": 5,
                  "raw": "5"
                },
                {
                  "type": "Literal",
                  "start": 1265,
                  "end": 1266,
                  "value": 5,
                  "raw": "5"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1249,
                  "end": 1252,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1255,
                  "end": 1258,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1261,
                  "end": 1264,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1267,
                  "end": 1269,
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
      "start": 1271,
      "end": 1285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1275,
          "end": 1284,
          "id": {
            "type": "Identifier",
            "start": 1275,
            "end": 1284,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1276,
              "end": 1284,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1278,
                "end": 1284
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
      "start": 1396,
      "end": 1416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1400,
          "end": 1416,
          "id": {
            "type": "Identifier",
            "start": 1400,
            "end": 1401,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1404,
            "end": 1416,
            "tag": {
              "type": "Identifier",
              "start": 1404,
              "end": 1407,
              "name": "fn3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1408,
              "end": 1416,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1412,
                  "end": 1413,
                  "value": 4,
                  "raw": "4"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1408,
                  "end": 1411,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1414,
                  "end": 1416,
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
      "start": 1417,
      "end": 1453,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1421,
          "end": 1452,
          "id": {
            "type": "Identifier",
            "start": 1421,
            "end": 1422,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1425,
            "end": 1452,
            "tag": {
              "type": "Identifier",
              "start": 1425,
              "end": 1428,
              "name": "fn3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1429,
              "end": 1452,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1433,
                  "end": 1435,
                  "value": "",
                  "raw": "''"
                },
                {
                  "type": "Literal",
                  "start": 1440,
                  "end": 1442,
                  "value": "",
                  "raw": "''"
                },
                {
                  "type": "Literal",
                  "start": 1447,
                  "end": 1449,
                  "value": "",
                  "raw": "''"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1429,
                  "end": 1432,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1436,
                  "end": 1439,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1443,
                  "end": 1446,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1450,
                  "end": 1452,
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
      "start": 1454,
      "end": 1489,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1458,
          "end": 1488,
          "id": {
            "type": "Identifier",
            "start": 1458,
            "end": 1459,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 1462,
            "end": 1488,
            "tag": {
              "type": "Identifier",
              "start": 1462,
              "end": 1465,
              "name": "fn3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 1466,
              "end": 1488,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1470,
                  "end": 1472,
                  "value": "",
                  "raw": "''"
                },
                {
                  "type": "Literal",
                  "start": 1477,
                  "end": 1479,
                  "value": "",
                  "raw": "''"
                },
                {
                  "type": "Literal",
                  "start": 1484,
                  "end": 1485,
                  "value": 3,
                  "raw": "3"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1466,
                  "end": 1469,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1473,
                  "end": 1476,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1480,
                  "end": 1483,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1486,
                  "end": 1488,
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
      "start": 1593,
      "end": 1600,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1593,
        "end": 1599,
        "tag": {
          "type": "Identifier",
          "start": 1593,
          "end": 1596,
          "name": "fn3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
      "start": 1649,
      "end": 1738,
      "id": {
        "type": "Identifier",
        "start": 1658,
        "end": 1661,
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
          "start": 1698,
          "end": 1724,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1702,
            "end": 1724,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1704,
              "end": 1724,
              "typeName": {
                "type": "Identifier",
                "start": 1704,
                "end": 1724,
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
          "start": 1726,
          "end": 1730,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1727,
            "end": 1730,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1729,
              "end": 1730,
              "typeName": {
                "type": "Identifier",
                "start": 1729,
                "end": 1730,
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
          "start": 1732,
          "end": 1736,
          "name": "m",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1733,
            "end": 1736,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1735,
              "end": 1736,
              "typeName": {
                "type": "Identifier",
                "start": 1735,
                "end": 1736,
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
        "start": 1661,
        "end": 1697,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1662,
            "end": 1678,
            "name": {
              "type": "Identifier",
              "start": 1662,
              "end": 1663,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1672,
              "end": 1678
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1680,
            "end": 1696,
            "name": {
              "type": "Identifier",
              "start": 1680,
              "end": 1681,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1690,
              "end": 1696
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
      "start": 1739,
      "end": 1828,
      "id": {
        "type": "Identifier",
        "start": 1748,
        "end": 1751,
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
          "start": 1788,
          "end": 1814,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1792,
            "end": 1814,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1794,
              "end": 1814,
              "typeName": {
                "type": "Identifier",
                "start": 1794,
                "end": 1814,
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
          "start": 1816,
          "end": 1820,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1817,
            "end": 1820,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1819,
              "end": 1820,
              "typeName": {
                "type": "Identifier",
                "start": 1819,
                "end": 1820,
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
          "start": 1822,
          "end": 1826,
          "name": "m",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1823,
            "end": 1826,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1825,
              "end": 1826,
              "typeName": {
                "type": "Identifier",
                "start": 1825,
                "end": 1826,
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
        "start": 1751,
        "end": 1787,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1752,
            "end": 1768,
            "name": {
              "type": "Identifier",
              "start": 1752,
              "end": 1753,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1762,
              "end": 1768
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1770,
            "end": 1786,
            "name": {
              "type": "Identifier",
              "start": 1770,
              "end": 1771,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1780,
              "end": 1786
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
      "start": 1829,
      "end": 1869,
      "id": {
        "type": "Identifier",
        "start": 1838,
        "end": 1841,
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
          "start": 1842,
          "end": 1868,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1846,
            "end": 1868,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1848,
              "end": 1868,
              "typeName": {
                "type": "Identifier",
                "start": 1848,
                "end": 1868,
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
      "start": 1870,
      "end": 1888,
      "id": {
        "type": "Identifier",
        "start": 1879,
        "end": 1882,
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
        "start": 1885,
        "end": 1888,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1975,
      "end": 1996,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1975,
        "end": 1995,
        "tag": {
          "type": "Identifier",
          "start": 1975,
          "end": 1978,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 1979,
          "end": 1995,
          "expressions": [
            {
              "type": "Literal",
              "start": 1983,
              "end": 1985,
              "value": "",
              "raw": "''"
            },
            {
              "type": "Literal",
              "start": 1990,
              "end": 1991,
              "value": 3,
              "raw": "3"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1979,
              "end": 1982,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 1986,
              "end": 1989,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 1993,
              "end": 1995,
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
      "start": 1997,
      "end": 2018,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1997,
        "end": 2017,
        "tag": {
          "type": "Identifier",
          "start": 1997,
          "end": 2000,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2001,
          "end": 2017,
          "expressions": [
            {
              "type": "Literal",
              "start": 2005,
              "end": 2006,
              "value": 3,
              "raw": "3"
            },
            {
              "type": "Literal",
              "start": 2012,
              "end": 2014,
              "value": "",
              "raw": "''"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2001,
              "end": 2004,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2008,
              "end": 2011,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2015,
              "end": 2017,
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
      "start": 2019,
      "end": 2047,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2019,
        "end": 2046,
        "tag": {
          "type": "Identifier",
          "start": 2019,
          "end": 2022,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2023,
          "end": 2046,
          "expressions": [
            {
              "type": "Literal",
              "start": 2027,
              "end": 2028,
              "value": 3,
              "raw": "3"
            },
            {
              "type": "Identifier",
              "start": 2034,
              "end": 2043,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2023,
              "end": 2026,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2030,
              "end": 2033,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2044,
              "end": 2046,
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
      "start": 2048,
      "end": 2071,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2048,
        "end": 2070,
        "tag": {
          "type": "Identifier",
          "start": 2048,
          "end": 2051,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2052,
          "end": 2070,
          "expressions": [
            {
              "type": "Literal",
              "start": 2056,
              "end": 2058,
              "value": "",
              "raw": "''"
            },
            {
              "type": "Literal",
              "start": 2063,
              "end": 2067,
              "value": null,
              "raw": "null"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2052,
              "end": 2055,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2059,
              "end": 2062,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2068,
              "end": 2070,
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
      "start": 2174,
      "end": 2199,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2174,
        "end": 2198,
        "tag": {
          "type": "Identifier",
          "start": 2174,
          "end": 2177,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2178,
          "end": 2198,
          "expressions": [
            {
              "type": "Literal",
              "start": 2182,
              "end": 2186,
              "value": null,
              "raw": "null"
            },
            {
              "type": "Literal",
              "start": 2191,
              "end": 2195,
              "value": null,
              "raw": "null"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2178,
              "end": 2181,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2187,
              "end": 2190,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2196,
              "end": 2198,
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
      "start": 2329,
      "end": 2354,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2329,
        "end": 2353,
        "tag": {
          "type": "Identifier",
          "start": 2329,
          "end": 2332,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2333,
          "end": 2353,
          "expressions": [
            {
              "type": "Literal",
              "start": 2337,
              "end": 2341,
              "value": true,
              "raw": "true"
            },
            {
              "type": "Literal",
              "start": 2346,
              "end": 2350,
              "value": null,
              "raw": "null"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2333,
              "end": 2336,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2342,
              "end": 2345,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2351,
              "end": 2353,
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
      "start": 2355,
      "end": 2380,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2355,
        "end": 2379,
        "tag": {
          "type": "Identifier",
          "start": 2355,
          "end": 2358,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2359,
          "end": 2379,
          "expressions": [
            {
              "type": "Literal",
              "start": 2363,
              "end": 2367,
              "value": null,
              "raw": "null"
            },
            {
              "type": "Literal",
              "start": 2372,
              "end": 2376,
              "value": true,
              "raw": "true"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2359,
              "end": 2362,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2368,
              "end": 2371,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2377,
              "end": 2379,
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
      "start": 2466,
      "end": 2539,
      "id": {
        "type": "Identifier",
        "start": 2475,
        "end": 2478,
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
          "start": 2479,
          "end": 2505,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2483,
            "end": 2505,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2485,
              "end": 2505,
              "typeName": {
                "type": "Identifier",
                "start": 2485,
                "end": 2505,
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
          "start": 2507,
          "end": 2529,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2508,
            "end": 2529,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2510,
              "end": 2529,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2511,
                  "end": 2520,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2512,
                    "end": 2520,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2514,
                      "end": 2520
                    }
                  },
                  "decorators": [],
                  "optional": false
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
        "start": 2530,
        "end": 2538,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2532,
          "end": 2538
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2540,
      "end": 2613,
      "id": {
        "type": "Identifier",
        "start": 2549,
        "end": 2552,
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
          "start": 2553,
          "end": 2579,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2557,
            "end": 2579,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2559,
              "end": 2579,
              "typeName": {
                "type": "Identifier",
                "start": 2559,
                "end": 2579,
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
          "start": 2581,
          "end": 2603,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2582,
            "end": 2603,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2584,
              "end": 2603,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2585,
                  "end": 2594,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2586,
                    "end": 2594,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2588,
                      "end": 2594
                    }
                  },
                  "decorators": [],
                  "optional": false
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
        "start": 2604,
        "end": 2612,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2606,
          "end": 2612
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2614,
      "end": 2650,
      "id": {
        "type": "Identifier",
        "start": 2623,
        "end": 2626,
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
      "start": 2651,
      "end": 2681,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2651,
        "end": 2680,
        "tag": {
          "type": "Identifier",
          "start": 2651,
          "end": 2654,
          "name": "fn5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2655,
          "end": 2680,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 2659,
              "end": 2677,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2660,
                  "end": 2661,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "CallExpression",
                "start": 2666,
                "end": 2677,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2666,
                  "end": 2675,
                  "object": {
                    "type": "Identifier",
                    "start": 2666,
                    "end": 2667,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2668,
                    "end": 2675,
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
              "start": 2655,
              "end": 2658,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2678,
              "end": 2680,
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
      "start": 2728,
      "end": 2758,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 2728,
        "end": 2757,
        "tag": {
          "type": "Identifier",
          "start": 2728,
          "end": 2731,
          "name": "fn5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 2732,
          "end": 2757,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 2736,
              "end": 2754,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2737,
                  "end": 2738,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "CallExpression",
                "start": 2743,
                "end": 2754,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2743,
                  "end": 2751,
                  "object": {
                    "type": "Identifier",
                    "start": 2743,
                    "end": 2744,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2745,
                    "end": 2751,
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
                    "start": 2752,
                    "end": 2753,
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
              "start": 2732,
              "end": 2735,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2755,
              "end": 2757,
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
