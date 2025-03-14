numericIndexerConstrainsPropertyDeclarations.ts
```json
{
  "type": "Program",
  "start": 90,
  "end": 1683,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 90,
      "end": 144,
      "body": {
        "type": "TSInterfaceBody",
        "start": 124,
        "end": 144,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 130,
            "end": 142,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 133,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 141,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 135,
                "end": 141
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 117,
          "end": 123,
          "expression": {
            "type": "Identifier",
            "start": 117,
            "end": 123,
            "decorators": [],
            "name": "Number",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 108,
        "decorators": [],
        "name": "MyNumber",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 146,
      "end": 697,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 154,
        "end": 697,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 160,
            "end": 180,
            "parameters": [
              {
                "type": "Identifier",
                "start": 161,
                "end": 170,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 162,
                  "end": 170,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 164,
                    "end": 170
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 179,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 173,
                "end": 179
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 186,
            "end": 203,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 197,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 197,
              "end": 203,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 203,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 215,
            "end": 225,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 216,
              "end": 224,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 218,
                "end": 224
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 236,
            "end": 246,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 245,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 239,
                "end": 245
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 257,
            "end": 268,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 268,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 260,
                "end": 268,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 263,
                  "end": 268,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 266,
                    "end": 268,
                    "members": []
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 279,
            "end": 291,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 279,
              "end": 282,
              "raw": "\"d\"",
              "value": "d"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 290,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 284,
                "end": 290
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 302,
            "end": 314,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 302,
              "end": 305,
              "raw": "\"e\"",
              "value": "e"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 305,
              "end": 313,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 307,
                "end": 313
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 325,
            "end": 337,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 325,
              "end": 328,
              "raw": "1.0",
              "value": 1
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 328,
              "end": 336,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 330,
                "end": 336
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 348,
            "end": 360,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 348,
              "end": 351,
              "raw": "2.0",
              "value": 2
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 351,
              "end": 359,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 353,
                "end": 359
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 374,
            "end": 388,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 374,
              "end": 379,
              "raw": "\"3.0\"",
              "value": "3.0"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 379,
              "end": 387,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 381,
                "end": 387
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 399,
            "end": 413,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 399,
              "end": 404,
              "raw": "\"4.0\"",
              "value": "4.0"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 404,
              "end": 412,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 406,
                "end": 412
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 427,
            "end": 440,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 427,
              "end": 430,
              "raw": "3.0",
              "value": 3
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 430,
              "end": 440,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 432,
                "end": 440,
                "typeName": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 440,
                  "decorators": [],
                  "name": "MyNumber",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 455,
            "end": 495,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 460,
              "end": 495,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 463,
                "end": 495,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 479,
                    "end": 489,
                    "argument": {
                      "type": "Literal",
                      "start": 486,
                      "end": 488,
                      "raw": "''",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 500,
            "end": 512,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 504,
              "end": 505,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 505,
              "end": 512,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 509,
                "end": 512,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 506,
                  "end": 507,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 524,
            "end": 557,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 524,
              "end": 527,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 527,
              "end": 557,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 530,
                "end": 557,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 541,
                    "end": 551,
                    "argument": {
                      "type": "Literal",
                      "start": 548,
                      "end": 550,
                      "raw": "''",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 563,
            "end": 581,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 570,
              "end": 572,
              "decorators": [],
              "name": "sa",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 572,
              "end": 580,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 574,
                "end": 580
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 592,
            "end": 610,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 599,
              "end": 601,
              "decorators": [],
              "name": "sb",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 601,
              "end": 609,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 603,
                "end": 609
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 622,
            "end": 638,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 629,
              "end": 632,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 632,
              "end": 638,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 635,
                "end": 638,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 649,
            "end": 695,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 660,
              "end": 661,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 661,
              "end": 695,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 664,
                "end": 695,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 680,
                    "end": 689,
                    "argument": {
                      "type": "Literal",
                      "start": 687,
                      "end": 688,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 153,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 699,
      "end": 1047,
      "body": {
        "type": "TSInterfaceBody",
        "start": 711,
        "end": 1047,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 717,
            "end": 737,
            "parameters": [
              {
                "type": "Identifier",
                "start": 718,
                "end": 727,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 719,
                  "end": 727,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 721,
                    "end": 727
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 728,
              "end": 736,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 730,
                "end": 736
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 743,
            "end": 753,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 743,
              "end": 744,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 744,
              "end": 752,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 746,
                "end": 752
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 764,
            "end": 774,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 764,
              "end": 765,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 765,
              "end": 773,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 767,
                "end": 773
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 785,
            "end": 796,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 785,
              "end": 786,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 786,
              "end": 796,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 788,
                "end": 796,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 791,
                  "end": 796,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 794,
                    "end": 796,
                    "members": []
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 807,
            "end": 819,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 807,
              "end": 810,
              "raw": "\"d\"",
              "value": "d"
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 810,
              "end": 818,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 812,
                "end": 818
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 830,
            "end": 842,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 830,
              "end": 833,
              "raw": "\"e\"",
              "value": "e"
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 833,
              "end": 841,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 835,
                "end": 841
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 853,
            "end": 865,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 853,
              "end": 856,
              "raw": "1.0",
              "value": 1
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 856,
              "end": 864,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 858,
                "end": 864
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 876,
            "end": 888,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 876,
              "end": 879,
              "raw": "2.0",
              "value": 2
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 879,
              "end": 887,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 881,
                "end": 887
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 902,
            "end": 913,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 904,
              "end": 912,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 906,
                "end": 912
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 924,
            "end": 935,
            "params": [
              {
                "type": "Identifier",
                "start": 925,
                "end": 926,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 927,
              "end": 935,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 929,
                "end": 935
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 946,
            "end": 960,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 946,
              "end": 949,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 951,
              "end": 959,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 953,
                "end": 959
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 971,
            "end": 985,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 971,
              "end": 976,
              "raw": "\"3.0\"",
              "value": "3.0"
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 976,
              "end": 984,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 978,
                "end": 984
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 996,
            "end": 1010,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 996,
              "end": 1001,
              "raw": "\"4.0\"",
              "value": "4.0"
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1001,
              "end": 1009,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1003,
                "end": 1009
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1024,
            "end": 1036,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1024,
              "end": 1025,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1025,
              "end": 1035,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1027,
                "end": 1035,
                "typeName": {
                  "type": "Identifier",
                  "start": 1027,
                  "end": 1035,
                  "decorators": [],
                  "name": "MyNumber",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 709,
        "end": 710,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1049,
      "end": 1392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1053,
          "end": 1392,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1053,
            "end": 1392,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1054,
              "end": 1392,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1056,
                "end": 1392,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 1062,
                    "end": 1082,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1063,
                        "end": 1072,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1064,
                          "end": 1072,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1066,
                            "end": 1072
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1073,
                      "end": 1081,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1075,
                        "end": 1081
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1088,
                    "end": 1098,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1088,
                      "end": 1089,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1089,
                      "end": 1097,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1091,
                        "end": 1097
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1109,
                    "end": 1119,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1109,
                      "end": 1110,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1110,
                      "end": 1118,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1112,
                        "end": 1118
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1130,
                    "end": 1141,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1130,
                      "end": 1131,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1131,
                      "end": 1141,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1133,
                        "end": 1141,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1136,
                          "end": 1141,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1139,
                            "end": 1141,
                            "members": []
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1152,
                    "end": 1164,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 1152,
                      "end": 1155,
                      "raw": "\"d\"",
                      "value": "d"
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1155,
                      "end": 1163,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1157,
                        "end": 1163
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1175,
                    "end": 1187,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 1175,
                      "end": 1178,
                      "raw": "\"e\"",
                      "value": "e"
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1178,
                      "end": 1186,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1180,
                        "end": 1186
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1198,
                    "end": 1210,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 1198,
                      "end": 1201,
                      "raw": "1.0",
                      "value": 1
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1201,
                      "end": 1209,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1203,
                        "end": 1209
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1221,
                    "end": 1233,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 1221,
                      "end": 1224,
                      "raw": "2.0",
                      "value": 2
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1224,
                      "end": 1232,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1226,
                        "end": 1232
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1247,
                    "end": 1258,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1249,
                      "end": 1257,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1251,
                        "end": 1257
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1269,
                    "end": 1280,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1270,
                        "end": 1271,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1272,
                      "end": 1280,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1274,
                        "end": 1280
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1291,
                    "end": 1305,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1291,
                      "end": 1294,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1296,
                      "end": 1304,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1298,
                        "end": 1304
                      }
                    },
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1316,
                    "end": 1330,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 1316,
                      "end": 1321,
                      "raw": "\"3.0\"",
                      "value": "3.0"
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1321,
                      "end": 1329,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1323,
                        "end": 1329
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1341,
                    "end": 1355,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 1341,
                      "end": 1346,
                      "raw": "\"4.0\"",
                      "value": "4.0"
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1346,
                      "end": 1354,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1348,
                        "end": 1354
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1369,
                    "end": 1381,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1369,
                      "end": 1370,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1370,
                      "end": 1380,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1372,
                        "end": 1380,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1372,
                          "end": 1380,
                          "decorators": [],
                          "name": "MyNumber",
                          "optional": false
                        }
                      }
                    }
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
    {
      "type": "VariableDeclaration",
      "start": 1403,
      "end": 1683,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1407,
          "end": 1683,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1407,
            "end": 1434,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1408,
              "end": 1434,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1410,
                "end": 1434,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 1412,
                    "end": 1432,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1413,
                        "end": 1422,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1414,
                          "end": 1422,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1416,
                            "end": 1422
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1423,
                      "end": 1431,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1425,
                        "end": 1431
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1437,
            "end": 1683,
            "properties": [
              {
                "type": "Property",
                "start": 1443,
                "end": 1448,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1443,
                  "end": 1444,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1446,
                  "end": 1448,
                  "raw": "''",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 1454,
                "end": 1458,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1454,
                  "end": 1455,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1457,
                  "end": 1458,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 1465,
                "end": 1477,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1465,
                  "end": 1466,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1468,
                  "end": 1477,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1474,
                    "end": 1477,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 1484,
                "end": 1491,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1484,
                  "end": 1487,
                  "raw": "\"d\"",
                  "value": "d"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1489,
                  "end": 1491,
                  "raw": "''",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 1498,
                "end": 1504,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1498,
                  "end": 1501,
                  "raw": "\"e\"",
                  "value": "e"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1503,
                  "end": 1504,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 1511,
                "end": 1518,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1511,
                  "end": 1514,
                  "raw": "1.0",
                  "value": 1
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1516,
                  "end": 1518,
                  "raw": "''",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 1524,
                "end": 1530,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1524,
                  "end": 1527,
                  "raw": "2.0",
                  "value": 2
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1529,
                  "end": 1530,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 1537,
                "end": 1546,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1537,
                  "end": 1542,
                  "raw": "\"3.0\"",
                  "value": "3.0"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1544,
                  "end": 1546,
                  "raw": "''",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 1553,
                "end": 1561,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1553,
                  "end": 1558,
                  "raw": "\"4.0\"",
                  "value": "4.0"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1560,
                  "end": 1561,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 1568,
                "end": 1580,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1568,
                  "end": 1569,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 1571,
                  "end": 1580,
                  "expression": {
                    "type": "Literal",
                    "start": 1576,
                    "end": 1580,
                    "raw": "null",
                    "value": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1572,
                    "end": 1575,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1572,
                      "end": 1575,
                      "decorators": [],
                      "name": "Myn",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Property",
                "start": 1588,
                "end": 1623,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1592,
                  "end": 1593,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1593,
                  "end": 1623,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1596,
                    "end": 1623,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1607,
                        "end": 1617,
                        "argument": {
                          "type": "Literal",
                          "start": 1614,
                          "end": 1616,
                          "raw": "''",
                          "value": ""
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 1629,
                "end": 1641,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1633,
                  "end": 1634,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1634,
                  "end": 1641,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1638,
                    "end": 1641,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1635,
                      "end": 1636,
                      "decorators": [],
                      "name": "v",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1648,
                "end": 1681,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1648,
                  "end": 1651,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1651,
                  "end": 1681,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1654,
                    "end": 1681,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1665,
                        "end": 1675,
                        "argument": {
                          "type": "Literal",
                          "start": 1672,
                          "end": 1674,
                          "raw": "''",
                          "value": ""
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
