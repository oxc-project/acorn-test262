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
        "name": "MyString",
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
            "name": "String",
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
                    "type": "TSStringKeyword",
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
              "start": 260,
              "end": 261
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
                    "start": 269,
                    "end": 271
                  },
                  "start": 266,
                  "end": 271
                },
                "start": 263,
                "end": 271
              },
              "start": 261,
              "end": 271
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
            "start": 260,
            "end": 271
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "d",
              "raw": "\"d\"",
              "start": 285,
              "end": 288
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 290,
                "end": 296
              },
              "start": 288,
              "end": 296
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
            "start": 285,
            "end": 297
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "e",
              "raw": "\"e\"",
              "start": 308,
              "end": 311
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 313,
                "end": 319
              },
              "start": 311,
              "end": 319
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
            "start": 308,
            "end": 320
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1.0",
              "start": 334,
              "end": 337
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 339,
                "end": 345
              },
              "start": 337,
              "end": 345
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
            "start": 334,
            "end": 346
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2.0",
              "start": 357,
              "end": 360
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 362,
                "end": 368
              },
              "start": 360,
              "end": 368
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
            "start": 357,
            "end": 369
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "3.0",
              "raw": "\"3.0\"",
              "start": 383,
              "end": 388
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 390,
                "end": 396
              },
              "start": 388,
              "end": 396
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
            "start": 383,
            "end": 397
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "4.0",
              "raw": "\"4.0\"",
              "start": 408,
              "end": 413
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 415,
                "end": 421
              },
              "start": 413,
              "end": 421
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
            "start": 408,
            "end": 422
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 437
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 447
                },
                "typeArguments": null,
                "start": 439,
                "end": 447
              },
              "start": 437,
              "end": 447
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
            "start": 436,
            "end": 448
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
              "start": 467,
              "end": 468
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
                      "start": 494,
                      "end": 496
                    },
                    "start": 487,
                    "end": 497
                  }
                ],
                "start": 471,
                "end": 503
              },
              "expression": false,
              "start": 468,
              "end": 503
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 463,
            "end": 503
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
              "start": 512,
              "end": 513
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
                  "start": 514,
                  "end": 515
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 517,
                "end": 520
              },
              "expression": false,
              "start": 513,
              "end": 520
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 508,
            "end": 520
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
              "start": 532,
              "end": 535
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
                      "start": 564,
                      "end": 566
                    },
                    "start": 557,
                    "end": 567
                  }
                ],
                "start": 538,
                "end": 573
              },
              "expression": false,
              "start": 535,
              "end": 573
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 532,
            "end": 573
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
              "start": 586,
              "end": 588
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 590,
                "end": 596
              },
              "start": 588,
              "end": 596
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
            "start": 579,
            "end": 597
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
              "start": 615,
              "end": 617
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 619,
                "end": 625
              },
              "start": 617,
              "end": 625
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
            "start": 608,
            "end": 626
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
              "start": 645,
              "end": 648
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
                "start": 651,
                "end": 654
              },
              "expression": false,
              "start": 648,
              "end": 654
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 638,
            "end": 654
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
              "start": 676,
              "end": 677
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
                      "start": 703,
                      "end": 704
                    },
                    "start": 696,
                    "end": 705
                  }
                ],
                "start": 680,
                "end": 711
              },
              "expression": false,
              "start": 677,
              "end": 711
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 665,
            "end": 711
          }
        ],
        "start": 154,
        "end": 713
      },
      "abstract": false,
      "declare": false,
      "start": 146,
      "end": 713
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 725,
        "end": 726
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
                    "type": "TSStringKeyword",
                    "start": 737,
                    "end": 743
                  },
                  "start": 735,
                  "end": 743
                },
                "start": 734,
                "end": 743
              }
            ],
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
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 733,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 759,
              "end": 760
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 762,
                "end": 768
              },
              "start": 760,
              "end": 768
            },
            "accessibility": null,
            "static": false,
            "start": 759,
            "end": 769
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
              "start": 780,
              "end": 781
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 783,
                "end": 789
              },
              "start": 781,
              "end": 789
            },
            "accessibility": null,
            "static": false,
            "start": 780,
            "end": 790
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
              "start": 804,
              "end": 805
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
                    "start": 813,
                    "end": 815
                  },
                  "start": 810,
                  "end": 815
                },
                "start": 807,
                "end": 815
              },
              "start": 805,
              "end": 815
            },
            "accessibility": null,
            "static": false,
            "start": 804,
            "end": 815
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
              "start": 829,
              "end": 832
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 834,
                "end": 840
              },
              "start": 832,
              "end": 840
            },
            "accessibility": null,
            "static": false,
            "start": 829,
            "end": 841
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
              "start": 852,
              "end": 855
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 857,
                "end": 863
              },
              "start": 855,
              "end": 863
            },
            "accessibility": null,
            "static": false,
            "start": 852,
            "end": 864
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
              "start": 878,
              "end": 881
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 883,
                "end": 889
              },
              "start": 881,
              "end": 889
            },
            "accessibility": null,
            "static": false,
            "start": 878,
            "end": 890
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
              "start": 901,
              "end": 904
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 906,
                "end": 912
              },
              "start": 904,
              "end": 912
            },
            "accessibility": null,
            "static": false,
            "start": 901,
            "end": 913
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 931,
                "end": 937
              },
              "start": 929,
              "end": 937
            },
            "start": 927,
            "end": 938
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
                "start": 950,
                "end": 951
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 954,
                "end": 960
              },
              "start": 952,
              "end": 960
            },
            "start": 949,
            "end": 960
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 971,
              "end": 974
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
                "start": 978,
                "end": 984
              },
              "start": 976,
              "end": 984
            },
            "accessibility": null,
            "readonly": false,
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
              "value": "3.0",
              "raw": "\"3.0\"",
              "start": 999,
              "end": 1004
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1006,
                "end": 1012
              },
              "start": 1004,
              "end": 1012
            },
            "accessibility": null,
            "static": false,
            "start": 999,
            "end": 1013
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
              "start": 1024,
              "end": 1029
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1031,
                "end": 1037
              },
              "start": 1029,
              "end": 1037
            },
            "accessibility": null,
            "static": false,
            "start": 1024,
            "end": 1038
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
              "start": 1052,
              "end": 1053
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1055,
                  "end": 1063
                },
                "typeArguments": null,
                "start": 1055,
                "end": 1063
              },
              "start": 1053,
              "end": 1063
            },
            "accessibility": null,
            "static": false,
            "start": 1052,
            "end": 1064
          }
        ],
        "start": 727,
        "end": 1075
      },
      "declare": false,
      "start": 715,
      "end": 1075
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
                            "type": "TSStringKeyword",
                            "start": 1094,
                            "end": 1100
                          },
                          "start": 1092,
                          "end": 1100
                        },
                        "start": 1091,
                        "end": 1100
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1103,
                        "end": 1109
                      },
                      "start": 1101,
                      "end": 1109
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1090,
                    "end": 1110
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
                      "start": 1116,
                      "end": 1117
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1119,
                        "end": 1125
                      },
                      "start": 1117,
                      "end": 1125
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1116,
                    "end": 1126
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
                      "start": 1137,
                      "end": 1138
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1140,
                        "end": 1146
                      },
                      "start": 1138,
                      "end": 1146
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1137,
                    "end": 1147
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
                      "start": 1161,
                      "end": 1162
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
                            "start": 1170,
                            "end": 1172
                          },
                          "start": 1167,
                          "end": 1172
                        },
                        "start": 1164,
                        "end": 1172
                      },
                      "start": 1162,
                      "end": 1172
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1161,
                    "end": 1172
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
                      "start": 1186,
                      "end": 1189
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1191,
                        "end": 1197
                      },
                      "start": 1189,
                      "end": 1197
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1186,
                    "end": 1198
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
                      "start": 1209,
                      "end": 1212
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1214,
                        "end": 1220
                      },
                      "start": 1212,
                      "end": 1220
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1209,
                    "end": 1221
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
                      "start": 1235,
                      "end": 1238
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1240,
                        "end": 1246
                      },
                      "start": 1238,
                      "end": 1246
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1235,
                    "end": 1247
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
                      "start": 1258,
                      "end": 1261
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1263,
                        "end": 1269
                      },
                      "start": 1261,
                      "end": 1269
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1258,
                    "end": 1270
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1288,
                        "end": 1294
                      },
                      "start": 1286,
                      "end": 1294
                    },
                    "start": 1284,
                    "end": 1295
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
                        "start": 1307,
                        "end": 1308
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1311,
                        "end": 1317
                      },
                      "start": 1309,
                      "end": 1317
                    },
                    "start": 1306,
                    "end": 1317
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1328,
                      "end": 1331
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
                        "start": 1335,
                        "end": 1341
                      },
                      "start": 1333,
                      "end": 1341
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1328,
                    "end": 1342
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
                      "start": 1356,
                      "end": 1361
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1363,
                        "end": 1369
                      },
                      "start": 1361,
                      "end": 1369
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1356,
                    "end": 1370
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
                      "start": 1381,
                      "end": 1386
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1388,
                        "end": 1394
                      },
                      "start": 1386,
                      "end": 1394
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1381,
                    "end": 1395
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
                      "start": 1409,
                      "end": 1410
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1412,
                          "end": 1420
                        },
                        "typeArguments": null,
                        "start": 1412,
                        "end": 1420
                      },
                      "start": 1410,
                      "end": 1420
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1409,
                    "end": 1421
                  }
                ],
                "start": 1084,
                "end": 1432
              },
              "start": 1082,
              "end": 1432
            },
            "start": 1081,
            "end": 1432
          },
          "init": null,
          "definite": false,
          "start": 1081,
          "end": 1432
        }
      ],
      "declare": false,
      "start": 1077,
      "end": 1432
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
                            "type": "TSStringKeyword",
                            "start": 1456,
                            "end": 1462
                          },
                          "start": 1454,
                          "end": 1462
                        },
                        "start": 1453,
                        "end": 1462
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1465,
                        "end": 1471
                      },
                      "start": 1463,
                      "end": 1471
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1452,
                    "end": 1472
                  }
                ],
                "start": 1450,
                "end": 1474
              },
              "start": 1448,
              "end": 1474
            },
            "start": 1447,
            "end": 1474
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
                  "start": 1483,
                  "end": 1484
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1486,
                  "end": 1488
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1483,
                "end": 1488
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
                  "start": 1494,
                  "end": 1495
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1497,
                  "end": 1498
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1494,
                "end": 1498
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
                  "start": 1505,
                  "end": 1506
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
                    "start": 1514,
                    "end": 1517
                  },
                  "id": null,
                  "generator": false,
                  "start": 1508,
                  "end": 1517
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1505,
                "end": 1517
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "d",
                  "raw": "\"d\"",
                  "start": 1524,
                  "end": 1527
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1529,
                  "end": 1531
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1524,
                "end": 1531
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "e",
                  "raw": "\"e\"",
                  "start": 1538,
                  "end": 1541
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1543,
                  "end": 1544
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1538,
                "end": 1544
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1.0",
                  "start": 1551,
                  "end": 1554
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1556,
                  "end": 1558
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1551,
                "end": 1558
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2.0",
                  "start": 1564,
                  "end": 1567
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1569,
                  "end": 1570
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1564,
                "end": 1570
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "3.0",
                  "raw": "\"3.0\"",
                  "start": 1577,
                  "end": 1582
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1584,
                  "end": 1586
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1577,
                "end": 1586
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "4.0",
                  "raw": "\"4.0\"",
                  "start": 1593,
                  "end": 1598
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1600,
                  "end": 1601
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1593,
                "end": 1601
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
                  "start": 1608,
                  "end": 1609
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1612,
                      "end": 1620
                    },
                    "typeArguments": null,
                    "start": 1612,
                    "end": 1620
                  },
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1621,
                    "end": 1625
                  },
                  "start": 1611,
                  "end": 1625
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1608,
                "end": 1625
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
                  "start": 1637,
                  "end": 1638
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
                          "start": 1659,
                          "end": 1661
                        },
                        "start": 1652,
                        "end": 1662
                      }
                    ],
                    "start": 1641,
                    "end": 1668
                  },
                  "expression": false,
                  "start": 1638,
                  "end": 1668
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1633,
                "end": 1668
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
                  "start": 1678,
                  "end": 1679
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
                      "start": 1680,
                      "end": 1681
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1683,
                    "end": 1686
                  },
                  "expression": false,
                  "start": 1679,
                  "end": 1686
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1674,
                "end": 1686
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
                  "start": 1693,
                  "end": 1696
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
                          "start": 1717,
                          "end": 1719
                        },
                        "start": 1710,
                        "end": 1720
                      }
                    ],
                    "start": 1699,
                    "end": 1726
                  },
                  "expression": false,
                  "start": 1696,
                  "end": 1726
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1693,
                "end": 1726
              }
            ],
            "start": 1477,
            "end": 1728
          },
          "definite": false,
          "start": 1447,
          "end": 1728
        }
      ],
      "declare": false,
      "start": 1443,
      "end": 1728
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 90,
  "end": 1728
}
```
