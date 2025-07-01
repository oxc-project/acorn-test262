__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 108
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Number",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 123
          },
          "typeArguments": null,
          "start": 117,
          "end": 123
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 133
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 135,
                "end": 141
              },
              "start": 133,
              "end": 141
            },
            "accessibility": null,
            "static": false,
            "start": 130,
            "end": 142
          }
        ],
        "start": 124,
        "end": 144
      },
      "declare": false,
      "start": 90,
      "end": 144
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 153
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 164,
                    "end": 170
                  },
                  "start": 162,
                  "end": 170
                },
                "start": 161,
                "end": 170
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 173,
                "end": 179
              },
              "start": 171,
              "end": 179
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 160,
            "end": 180
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 197
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 200,
                "end": 203
              },
              "expression": false,
              "start": 197,
              "end": 203
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 186,
            "end": 203
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 218,
                "end": 224
              },
              "start": 216,
              "end": 224
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 215,
            "end": 225
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 237
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 239,
                "end": 245
              },
              "start": 237,
              "end": 245
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 236,
            "end": 246
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 258
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 266,
                    "end": 268
                  },
                  "start": 263,
                  "end": 268
                },
                "start": 260,
                "end": 268
              },
              "start": 258,
              "end": 268
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 257,
            "end": 268
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "d",
              "raw": "\"d\"",
              "start": 279,
              "end": 282
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 284,
                "end": 290
              },
              "start": 282,
              "end": 290
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 279,
            "end": 291
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "e",
              "raw": "\"e\"",
              "start": 302,
              "end": 305
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 307,
                "end": 313
              },
              "start": 305,
              "end": 313
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 302,
            "end": 314
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1.0",
              "start": 325,
              "end": 328
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 330,
                "end": 336
              },
              "start": 328,
              "end": 336
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 325,
            "end": 337
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2.0",
              "start": 348,
              "end": 351
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 353,
                "end": 359
              },
              "start": 351,
              "end": 359
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 348,
            "end": 360
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "3.0",
              "raw": "\"3.0\"",
              "start": 374,
              "end": 379
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 381,
                "end": 387
              },
              "start": 379,
              "end": 387
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 374,
            "end": 388
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "4.0",
              "raw": "\"4.0\"",
              "start": 399,
              "end": 404
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 406,
                "end": 412
              },
              "start": 404,
              "end": 412
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 399,
            "end": 413
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 3,
              "raw": "3.0",
              "start": 427,
              "end": 430
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 440
                },
                "typeArguments": null,
                "start": 432,
                "end": 440
              },
              "start": 430,
              "end": 440
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 427,
            "end": 440
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 460
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 486,
                      "end": 488
                    },
                    "start": 479,
                    "end": 489
                  }
                ],
                "start": 463,
                "end": 495
              },
              "expression": false,
              "start": 460,
              "end": 495
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 455,
            "end": 495
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 505
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 507
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 509,
                "end": 512
              },
              "expression": false,
              "start": 505,
              "end": 512
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 500,
            "end": 512
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 527
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 548,
                      "end": 550
                    },
                    "start": 541,
                    "end": 551
                  }
                ],
                "start": 530,
                "end": 557
              },
              "expression": false,
              "start": 527,
              "end": 557
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 524,
            "end": 557
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sa",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 572
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 574,
                "end": 580
              },
              "start": 572,
              "end": 580
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 563,
            "end": 581
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sb",
              "optional": false,
              "typeAnnotation": null,
              "start": 599,
              "end": 601
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 603,
                "end": 609
              },
              "start": 601,
              "end": 609
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 592,
            "end": 610
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 629,
              "end": 632
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 635,
                "end": 638
              },
              "expression": false,
              "start": 632,
              "end": 638
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 622,
            "end": 638
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 660,
              "end": 661
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 687,
                      "end": 688
                    },
                    "start": 680,
                    "end": 689
                  }
                ],
                "start": 664,
                "end": 695
              },
              "expression": false,
              "start": 661,
              "end": 695
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 649,
            "end": 695
          }
        ],
        "start": 154,
        "end": 697
      },
      "abstract": false,
      "declare": false,
      "start": 146,
      "end": 697
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 709,
        "end": 710
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 721,
                    "end": 727
                  },
                  "start": 719,
                  "end": 727
                },
                "start": 718,
                "end": 727
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 730,
                "end": 736
              },
              "start": 728,
              "end": 736
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 717,
            "end": 737
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 744
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 746,
                "end": 752
              },
              "start": 744,
              "end": 752
            },
            "accessibility": null,
            "static": false,
            "start": 743,
            "end": 753
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 764,
              "end": 765
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 767,
                "end": 773
              },
              "start": 765,
              "end": 773
            },
            "accessibility": null,
            "static": false,
            "start": 764,
            "end": 774
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 785,
              "end": 786
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 794,
                    "end": 796
                  },
                  "start": 791,
                  "end": 796
                },
                "start": 788,
                "end": 796
              },
              "start": 786,
              "end": 796
            },
            "accessibility": null,
            "static": false,
            "start": 785,
            "end": 796
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "d",
              "raw": "\"d\"",
              "start": 807,
              "end": 810
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 812,
                "end": 818
              },
              "start": 810,
              "end": 818
            },
            "accessibility": null,
            "static": false,
            "start": 807,
            "end": 819
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "e",
              "raw": "\"e\"",
              "start": 830,
              "end": 833
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 835,
                "end": 841
              },
              "start": 833,
              "end": 841
            },
            "accessibility": null,
            "static": false,
            "start": 830,
            "end": 842
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1.0",
              "start": 853,
              "end": 856
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 858,
                "end": 864
              },
              "start": 856,
              "end": 864
            },
            "accessibility": null,
            "static": false,
            "start": 853,
            "end": 865
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2.0",
              "start": 876,
              "end": 879
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 881,
                "end": 887
              },
              "start": 879,
              "end": 887
            },
            "accessibility": null,
            "static": false,
            "start": 876,
            "end": 888
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 906,
                "end": 912
              },
              "start": 904,
              "end": 912
            },
            "start": 902,
            "end": 913
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 925,
                "end": 926
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 929,
                "end": 935
              },
              "start": 927,
              "end": 935
            },
            "start": 924,
            "end": 935
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 946,
              "end": 949
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 953,
                "end": 959
              },
              "start": 951,
              "end": 959
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 946,
            "end": 960
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "3.0",
              "raw": "\"3.0\"",
              "start": 971,
              "end": 976
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 978,
                "end": 984
              },
              "start": 976,
              "end": 984
            },
            "accessibility": null,
            "static": false,
            "start": 971,
            "end": 985
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "4.0",
              "raw": "\"4.0\"",
              "start": 996,
              "end": 1001
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1003,
                "end": 1009
              },
              "start": 1001,
              "end": 1009
            },
            "accessibility": null,
            "static": false,
            "start": 996,
            "end": 1010
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1024,
              "end": 1025
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1027,
                  "end": 1035
                },
                "typeArguments": null,
                "start": 1027,
                "end": 1035
              },
              "start": 1025,
              "end": 1035
            },
            "accessibility": null,
            "static": false,
            "start": 1024,
            "end": 1036
          }
        ],
        "start": 711,
        "end": 1047
      },
      "declare": false,
      "start": 699,
      "end": 1047
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1066,
                            "end": 1072
                          },
                          "start": 1064,
                          "end": 1072
                        },
                        "start": 1063,
                        "end": 1072
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1075,
                        "end": 1081
                      },
                      "start": 1073,
                      "end": 1081
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1062,
                    "end": 1082
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1088,
                      "end": 1089
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1091,
                        "end": 1097
                      },
                      "start": 1089,
                      "end": 1097
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1088,
                    "end": 1098
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1109,
                      "end": 1110
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1112,
                        "end": 1118
                      },
                      "start": 1110,
                      "end": 1118
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1109,
                    "end": 1119
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1130,
                      "end": 1131
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 1139,
                            "end": 1141
                          },
                          "start": 1136,
                          "end": 1141
                        },
                        "start": 1133,
                        "end": 1141
                      },
                      "start": 1131,
                      "end": 1141
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1130,
                    "end": 1141
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "d",
                      "raw": "\"d\"",
                      "start": 1152,
                      "end": 1155
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1157,
                        "end": 1163
                      },
                      "start": 1155,
                      "end": 1163
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1152,
                    "end": 1164
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "e",
                      "raw": "\"e\"",
                      "start": 1175,
                      "end": 1178
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1180,
                        "end": 1186
                      },
                      "start": 1178,
                      "end": 1186
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1175,
                    "end": 1187
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1.0",
                      "start": 1198,
                      "end": 1201
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1203,
                        "end": 1209
                      },
                      "start": 1201,
                      "end": 1209
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1198,
                    "end": 1210
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2.0",
                      "start": 1221,
                      "end": 1224
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1226,
                        "end": 1232
                      },
                      "start": 1224,
                      "end": 1232
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1221,
                    "end": 1233
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1251,
                        "end": 1257
                      },
                      "start": 1249,
                      "end": 1257
                    },
                    "start": 1247,
                    "end": 1258
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1270,
                        "end": 1271
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1274,
                        "end": 1280
                      },
                      "start": 1272,
                      "end": 1280
                    },
                    "start": 1269,
                    "end": 1280
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1291,
                      "end": 1294
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1298,
                        "end": 1304
                      },
                      "start": 1296,
                      "end": 1304
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1291,
                    "end": 1305
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "3.0",
                      "raw": "\"3.0\"",
                      "start": 1316,
                      "end": 1321
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1323,
                        "end": 1329
                      },
                      "start": 1321,
                      "end": 1329
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1316,
                    "end": 1330
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "4.0",
                      "raw": "\"4.0\"",
                      "start": 1341,
                      "end": 1346
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1348,
                        "end": 1354
                      },
                      "start": 1346,
                      "end": 1354
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1341,
                    "end": 1355
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1369,
                      "end": 1370
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyNumber",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1372,
                          "end": 1380
                        },
                        "typeArguments": null,
                        "start": 1372,
                        "end": 1380
                      },
                      "start": 1370,
                      "end": 1380
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1369,
                    "end": 1381
                  }
                ],
                "start": 1056,
                "end": 1392
              },
              "start": 1054,
              "end": 1392
            },
            "start": 1053,
            "end": 1392
          },
          "init": null,
          "definite": false,
          "start": 1053,
          "end": 1392
        }
      ],
      "declare": false,
      "start": 1049,
      "end": 1392
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1416,
                            "end": 1422
                          },
                          "start": 1414,
                          "end": 1422
                        },
                        "start": 1413,
                        "end": 1422
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1425,
                        "end": 1431
                      },
                      "start": 1423,
                      "end": 1431
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1412,
                    "end": 1432
                  }
                ],
                "start": 1410,
                "end": 1434
              },
              "start": 1408,
              "end": 1434
            },
            "start": 1407,
            "end": 1434
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1443,
                  "end": 1444
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1446,
                  "end": 1448
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1443,
                "end": 1448
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1454,
                  "end": 1455
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1457,
                  "end": 1458
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1454,
                "end": 1458
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1465,
                  "end": 1466
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1474,
                    "end": 1477
                  },
                  "id": null,
                  "generator": false,
                  "start": 1468,
                  "end": 1477
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1465,
                "end": 1477
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "d",
                  "raw": "\"d\"",
                  "start": 1484,
                  "end": 1487
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1489,
                  "end": 1491
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1484,
                "end": 1491
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "e",
                  "raw": "\"e\"",
                  "start": 1498,
                  "end": 1501
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1503,
                  "end": 1504
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1498,
                "end": 1504
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1.0",
                  "start": 1511,
                  "end": 1514
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1516,
                  "end": 1518
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1511,
                "end": 1518
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2.0",
                  "start": 1524,
                  "end": 1527
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1529,
                  "end": 1530
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1524,
                "end": 1530
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "3.0",
                  "raw": "\"3.0\"",
                  "start": 1537,
                  "end": 1542
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1544,
                  "end": 1546
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1537,
                "end": 1546
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "4.0",
                  "raw": "\"4.0\"",
                  "start": 1553,
                  "end": 1558
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1560,
                  "end": 1561
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1553,
                "end": 1561
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1568,
                  "end": 1569
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Myn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1572,
                      "end": 1575
                    },
                    "typeArguments": null,
                    "start": 1572,
                    "end": 1575
                  },
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1576,
                    "end": 1580
                  },
                  "start": 1571,
                  "end": 1580
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1568,
                "end": 1580
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1592,
                  "end": 1593
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 1614,
                          "end": 1616
                        },
                        "start": 1607,
                        "end": 1617
                      }
                    ],
                    "start": 1596,
                    "end": 1623
                  },
                  "expression": false,
                  "start": 1593,
                  "end": 1623
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1588,
                "end": 1623
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1633,
                  "end": 1634
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1635,
                      "end": 1636
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1638,
                    "end": 1641
                  },
                  "expression": false,
                  "start": 1634,
                  "end": 1641
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1629,
                "end": 1641
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1648,
                  "end": 1651
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 1672,
                          "end": 1674
                        },
                        "start": 1665,
                        "end": 1675
                      }
                    ],
                    "start": 1654,
                    "end": 1681
                  },
                  "expression": false,
                  "start": 1651,
                  "end": 1681
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1648,
                "end": 1681
              }
            ],
            "start": 1437,
            "end": 1683
          },
          "definite": false,
          "start": 1407,
          "end": 1683
        }
      ],
      "declare": false,
      "start": 1403,
      "end": 1683
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 90,
  "end": 1683
}
```
