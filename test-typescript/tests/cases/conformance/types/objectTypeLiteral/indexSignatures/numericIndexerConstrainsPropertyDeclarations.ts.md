__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 108,
        "name": "MyNumber",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 117,
          "end": 123,
          "expression": {
            "type": "Identifier",
            "start": 117,
            "end": 123,
            "name": "Number",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 133,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 141,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 135,
                "end": 141
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
      "type": "ClassDeclaration",
      "start": 146,
      "end": 697,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 153,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
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
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 162,
                  "end": 170,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 164,
                    "end": 170
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 179,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 173,
                "end": 179
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 186,
            "end": 203,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 197,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 197,
              "end": 203,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 203,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 215,
            "end": 225,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 236,
            "end": 246,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 257,
            "end": 268,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 268,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 260,
                "end": 268,
                "typeParameters": null,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 279,
            "end": 291,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 279,
              "end": 282,
              "value": "d",
              "raw": "\"d\""
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 302,
            "end": 314,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 302,
              "end": 305,
              "value": "e",
              "raw": "\"e\""
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 325,
            "end": 337,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 325,
              "end": 328,
              "value": 1,
              "raw": "1.0"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 348,
            "end": 360,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 348,
              "end": 351,
              "value": 2,
              "raw": "2.0"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 374,
            "end": 388,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 374,
              "end": 379,
              "value": "3.0",
              "raw": "\"3.0\""
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 399,
            "end": 413,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 399,
              "end": 404,
              "value": "4.0",
              "raw": "\"4.0\""
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 427,
            "end": 440,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 427,
              "end": 430,
              "value": 3,
              "raw": "3.0"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "MyNumber",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 455,
            "end": 495,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 460,
              "end": 495,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 500,
            "end": 512,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 504,
              "end": 505,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 505,
              "end": 512,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 506,
                  "end": 507,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 509,
                "end": 512,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 524,
            "end": 557,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 524,
              "end": 527,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 527,
              "end": 557,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 563,
            "end": 581,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 570,
              "end": 572,
              "name": "sa",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 592,
            "end": 610,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 599,
              "end": 601,
              "name": "sb",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 622,
            "end": 638,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 629,
              "end": 632,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 632,
              "end": 638,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 635,
                "end": 638,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 649,
            "end": 695,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 660,
              "end": 661,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 661,
              "end": 695,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 699,
      "end": 1047,
      "id": {
        "type": "Identifier",
        "start": 709,
        "end": 710,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 719,
                  "end": 727,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 721,
                    "end": 727
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 728,
              "end": 736,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 730,
                "end": 736
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 743,
            "end": 753,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 743,
              "end": 744,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 744,
              "end": 752,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 746,
                "end": 752
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 764,
            "end": 774,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 764,
              "end": 765,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 765,
              "end": 773,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 767,
                "end": 773
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 785,
            "end": 796,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 785,
              "end": 786,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 786,
              "end": 796,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 788,
                "end": 796,
                "typeParameters": null,
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
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 807,
            "end": 819,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 807,
              "end": 810,
              "value": "d",
              "raw": "\"d\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 810,
              "end": 818,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 812,
                "end": 818
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 830,
            "end": 842,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 830,
              "end": 833,
              "value": "e",
              "raw": "\"e\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 833,
              "end": 841,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 835,
                "end": 841
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 853,
            "end": 865,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 853,
              "end": 856,
              "value": 1,
              "raw": "1.0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 856,
              "end": 864,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 858,
                "end": 864
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 876,
            "end": 888,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 876,
              "end": 879,
              "value": 2,
              "raw": "2.0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 879,
              "end": 887,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 881,
                "end": 887
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 902,
            "end": 913,
            "typeParameters": null,
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
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 925,
                "end": 926,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
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
            "key": {
              "type": "Identifier",
              "start": 946,
              "end": 949,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 971,
            "end": 985,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 971,
              "end": 976,
              "value": "3.0",
              "raw": "\"3.0\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 976,
              "end": 984,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 978,
                "end": 984
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 996,
            "end": 1010,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 996,
              "end": 1001,
              "value": "4.0",
              "raw": "\"4.0\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1001,
              "end": 1009,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1003,
                "end": 1009
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1024,
            "end": 1036,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1024,
              "end": 1025,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "MyNumber",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1049,
      "end": 1392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1053,
          "end": 1392,
          "id": {
            "type": "Identifier",
            "start": 1053,
            "end": 1392,
            "name": "a",
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
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1064,
                          "end": 1072,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1066,
                            "end": 1072
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1073,
                      "end": 1081,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1075,
                        "end": 1081
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1088,
                    "end": 1098,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1088,
                      "end": 1089,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1089,
                      "end": 1097,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1091,
                        "end": 1097
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1109,
                    "end": 1119,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1109,
                      "end": 1110,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1110,
                      "end": 1118,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1112,
                        "end": 1118
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1130,
                    "end": 1141,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1130,
                      "end": 1131,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1131,
                      "end": 1141,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1133,
                        "end": 1141,
                        "typeParameters": null,
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
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1152,
                    "end": 1164,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1152,
                      "end": 1155,
                      "value": "d",
                      "raw": "\"d\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1155,
                      "end": 1163,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1157,
                        "end": 1163
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1175,
                    "end": 1187,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1175,
                      "end": 1178,
                      "value": "e",
                      "raw": "\"e\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1178,
                      "end": 1186,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1180,
                        "end": 1186
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1198,
                    "end": 1210,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1198,
                      "end": 1201,
                      "value": 1,
                      "raw": "1.0"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1201,
                      "end": 1209,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1203,
                        "end": 1209
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1221,
                    "end": 1233,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1221,
                      "end": 1224,
                      "value": 2,
                      "raw": "2.0"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1224,
                      "end": 1232,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1226,
                        "end": 1232
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1247,
                    "end": 1258,
                    "typeParameters": null,
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1270,
                        "end": 1271,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
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
                    "key": {
                      "type": "Identifier",
                      "start": 1291,
                      "end": 1294,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1316,
                    "end": 1330,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1316,
                      "end": 1321,
                      "value": "3.0",
                      "raw": "\"3.0\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1321,
                      "end": 1329,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1323,
                        "end": 1329
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1341,
                    "end": 1355,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1341,
                      "end": 1346,
                      "value": "4.0",
                      "raw": "\"4.0\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1346,
                      "end": 1354,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1348,
                        "end": 1354
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1369,
                    "end": 1381,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1369,
                      "end": 1370,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "name": "MyNumber",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 1403,
      "end": 1683,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1407,
          "end": 1683,
          "id": {
            "type": "Identifier",
            "start": 1407,
            "end": 1434,
            "name": "b",
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
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1414,
                          "end": 1422,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1416,
                            "end": 1422
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1423,
                      "end": 1431,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1425,
                        "end": 1431
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1443,
                  "end": 1444,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1446,
                  "end": 1448,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1454,
                "end": 1458,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1454,
                  "end": 1455,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1457,
                  "end": 1458,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1465,
                "end": 1477,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1465,
                  "end": 1466,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1468,
                  "end": 1477,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1474,
                    "end": 1477,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1484,
                "end": 1491,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1484,
                  "end": 1487,
                  "value": "d",
                  "raw": "\"d\""
                },
                "value": {
                  "type": "Literal",
                  "start": 1489,
                  "end": 1491,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1498,
                "end": 1504,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1498,
                  "end": 1501,
                  "value": "e",
                  "raw": "\"e\""
                },
                "value": {
                  "type": "Literal",
                  "start": 1503,
                  "end": 1504,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1511,
                "end": 1518,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1511,
                  "end": 1514,
                  "value": 1,
                  "raw": "1.0"
                },
                "value": {
                  "type": "Literal",
                  "start": 1516,
                  "end": 1518,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1524,
                "end": 1530,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1524,
                  "end": 1527,
                  "value": 2,
                  "raw": "2.0"
                },
                "value": {
                  "type": "Literal",
                  "start": 1529,
                  "end": 1530,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1537,
                "end": 1546,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1537,
                  "end": 1542,
                  "value": "3.0",
                  "raw": "\"3.0\""
                },
                "value": {
                  "type": "Literal",
                  "start": 1544,
                  "end": 1546,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1553,
                "end": 1561,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1553,
                  "end": 1558,
                  "value": "4.0",
                  "raw": "\"4.0\""
                },
                "value": {
                  "type": "Literal",
                  "start": 1560,
                  "end": 1561,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1568,
                "end": 1580,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1568,
                  "end": 1569,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 1571,
                  "end": 1580,
                  "expression": {
                    "type": "Literal",
                    "start": 1576,
                    "end": 1580,
                    "value": null,
                    "raw": "null"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1572,
                    "end": 1575,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1572,
                      "end": 1575,
                      "name": "Myn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1588,
                "end": 1623,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1592,
                  "end": 1593,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1593,
                  "end": 1623,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": "",
                          "raw": "''"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1629,
                "end": 1641,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1633,
                  "end": 1634,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1634,
                  "end": 1641,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1635,
                      "end": 1636,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1638,
                    "end": 1641,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "set",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1648,
                "end": 1681,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1648,
                  "end": 1651,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1651,
                  "end": 1681,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": "",
                          "raw": "''"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
