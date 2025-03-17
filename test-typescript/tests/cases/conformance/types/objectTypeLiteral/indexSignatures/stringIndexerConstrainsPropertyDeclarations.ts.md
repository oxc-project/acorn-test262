__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 90,
  "end": 1728,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 90,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 108,
        "name": "MyString",
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
            "name": "String",
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
      "end": 713,
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
        "end": 713,
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
                    "type": "TSStringKeyword",
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
            "start": 260,
            "end": 271,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
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
              "start": 261,
              "end": 271,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 263,
                "end": 271,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 266,
                  "end": 271,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 269,
                    "end": 271,
                    "members": []
                  }
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 285,
            "end": 297,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 285,
              "end": 288,
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
              "start": 288,
              "end": 296,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 290,
                "end": 296
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 308,
            "end": 320,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 308,
              "end": 311,
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
              "start": 311,
              "end": 319,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 313,
                "end": 319
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 334,
            "end": 346,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 334,
              "end": 337,
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
              "start": 337,
              "end": 345,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 339,
                "end": 345
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 357,
            "end": 369,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 357,
              "end": 360,
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
              "start": 360,
              "end": 368,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 362,
                "end": 368
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 383,
            "end": 397,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 383,
              "end": 388,
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
              "start": 388,
              "end": 396,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 390,
                "end": 396
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 408,
            "end": 422,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 408,
              "end": 413,
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
              "start": 413,
              "end": 421,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 415,
                "end": 421
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 436,
            "end": 448,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 436,
              "end": 437,
              "name": "f",
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
              "start": 437,
              "end": 447,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 439,
                "end": 447,
                "typeName": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 447,
                  "name": "MyString",
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
            "start": 463,
            "end": 503,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 467,
              "end": 468,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 468,
              "end": 503,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 471,
                "end": 503,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 487,
                    "end": 497,
                    "argument": {
                      "type": "Literal",
                      "start": 494,
                      "end": 496,
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
            "start": 508,
            "end": 520,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 512,
              "end": 513,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 513,
              "end": 520,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 514,
                  "end": 515,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 517,
                "end": 520,
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
            "start": 532,
            "end": 573,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 532,
              "end": 535,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 535,
              "end": 573,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 538,
                "end": 573,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 557,
                    "end": 567,
                    "argument": {
                      "type": "Literal",
                      "start": 564,
                      "end": 566,
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
            "start": 579,
            "end": 597,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 586,
              "end": 588,
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
              "start": 588,
              "end": 596,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 590,
                "end": 596
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 608,
            "end": 626,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 615,
              "end": 617,
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
              "start": 617,
              "end": 625,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 619,
                "end": 625
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 638,
            "end": 654,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 645,
              "end": 648,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 648,
              "end": 654,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 651,
                "end": 654,
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
            "start": 665,
            "end": 711,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 676,
              "end": 677,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 677,
              "end": 711,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 680,
                "end": 711,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 696,
                    "end": 705,
                    "argument": {
                      "type": "Literal",
                      "start": 703,
                      "end": 704,
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
      "start": 715,
      "end": 1075,
      "id": {
        "type": "Identifier",
        "start": 725,
        "end": 726,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 727,
        "end": 1075,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 733,
            "end": 753,
            "parameters": [
              {
                "type": "Identifier",
                "start": 734,
                "end": 743,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 735,
                  "end": 743,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 737,
                    "end": 743
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 759,
            "end": 769,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 759,
              "end": 760,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 760,
              "end": 768,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 762,
                "end": 768
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 780,
            "end": 790,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 780,
              "end": 781,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 781,
              "end": 789,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 783,
                "end": 789
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 804,
            "end": 815,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 804,
              "end": 805,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 805,
              "end": 815,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 807,
                "end": 815,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 810,
                  "end": 815,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 813,
                    "end": 815,
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
            "start": 829,
            "end": 841,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 829,
              "end": 832,
              "value": "d",
              "raw": "\"d\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 832,
              "end": 840,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 834,
                "end": 840
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 852,
            "end": 864,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 852,
              "end": 855,
              "value": "e",
              "raw": "\"e\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 855,
              "end": 863,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 857,
                "end": 863
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 878,
            "end": 890,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 878,
              "end": 881,
              "value": 1,
              "raw": "1.0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 881,
              "end": 889,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 883,
                "end": 889
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 901,
            "end": 913,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 901,
              "end": 904,
              "value": 2,
              "raw": "2.0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 904,
              "end": 912,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 906,
                "end": 912
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 927,
            "end": 938,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 929,
              "end": 937,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 931,
                "end": 937
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 949,
            "end": 960,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 950,
                "end": 951,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 952,
              "end": 960,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 954,
                "end": 960
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 971,
            "end": 985,
            "key": {
              "type": "Identifier",
              "start": 971,
              "end": 974,
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
              "start": 976,
              "end": 984,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 978,
                "end": 984
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 999,
            "end": 1013,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 999,
              "end": 1004,
              "value": "3.0",
              "raw": "\"3.0\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1004,
              "end": 1012,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1006,
                "end": 1012
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1024,
            "end": 1038,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 1024,
              "end": 1029,
              "value": "4.0",
              "raw": "\"4.0\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1029,
              "end": 1037,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1031,
                "end": 1037
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1052,
            "end": 1064,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1052,
              "end": 1053,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1053,
              "end": 1063,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1055,
                "end": 1063,
                "typeName": {
                  "type": "Identifier",
                  "start": 1055,
                  "end": 1063,
                  "name": "MyString",
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
      "start": 1077,
      "end": 1432,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1081,
          "end": 1432,
          "id": {
            "type": "Identifier",
            "start": 1081,
            "end": 1432,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1082,
              "end": 1432,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1084,
                "end": 1432,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 1090,
                    "end": 1110,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1091,
                        "end": 1100,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1092,
                          "end": 1100,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1094,
                            "end": 1100
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1101,
                      "end": 1109,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1103,
                        "end": 1109
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1116,
                    "end": 1126,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1116,
                      "end": 1117,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1117,
                      "end": 1125,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1119,
                        "end": 1125
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1137,
                    "end": 1147,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1137,
                      "end": 1138,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1138,
                      "end": 1146,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1140,
                        "end": 1146
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1161,
                    "end": 1172,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1161,
                      "end": 1162,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1162,
                      "end": 1172,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1164,
                        "end": 1172,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1167,
                          "end": 1172,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1170,
                            "end": 1172,
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
                    "start": 1186,
                    "end": 1198,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1186,
                      "end": 1189,
                      "value": "d",
                      "raw": "\"d\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1189,
                      "end": 1197,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1191,
                        "end": 1197
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1209,
                    "end": 1221,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1209,
                      "end": 1212,
                      "value": "e",
                      "raw": "\"e\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1212,
                      "end": 1220,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1214,
                        "end": 1220
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1235,
                    "end": 1247,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1235,
                      "end": 1238,
                      "value": 1,
                      "raw": "1.0"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1238,
                      "end": 1246,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1240,
                        "end": 1246
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1258,
                    "end": 1270,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1258,
                      "end": 1261,
                      "value": 2,
                      "raw": "2.0"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1261,
                      "end": 1269,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1263,
                        "end": 1269
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1284,
                    "end": 1295,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1286,
                      "end": 1294,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1288,
                        "end": 1294
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1306,
                    "end": 1317,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1307,
                        "end": 1308,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1309,
                      "end": 1317,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1311,
                        "end": 1317
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1328,
                    "end": 1342,
                    "key": {
                      "type": "Identifier",
                      "start": 1328,
                      "end": 1331,
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
                      "start": 1333,
                      "end": 1341,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1335,
                        "end": 1341
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1356,
                    "end": 1370,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1356,
                      "end": 1361,
                      "value": "3.0",
                      "raw": "\"3.0\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1361,
                      "end": 1369,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1363,
                        "end": 1369
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1381,
                    "end": 1395,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1381,
                      "end": 1386,
                      "value": "4.0",
                      "raw": "\"4.0\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1386,
                      "end": 1394,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1388,
                        "end": 1394
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1409,
                    "end": 1421,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1409,
                      "end": 1410,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1410,
                      "end": 1420,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1412,
                        "end": 1420,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1412,
                          "end": 1420,
                          "name": "MyString",
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
      "start": 1443,
      "end": 1728,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1447,
          "end": 1728,
          "id": {
            "type": "Identifier",
            "start": 1447,
            "end": 1474,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1448,
              "end": 1474,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1450,
                "end": 1474,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 1452,
                    "end": 1472,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1453,
                        "end": 1462,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1454,
                          "end": 1462,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1456,
                            "end": 1462
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1463,
                      "end": 1471,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1465,
                        "end": 1471
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
            "start": 1477,
            "end": 1728,
            "properties": [
              {
                "type": "Property",
                "start": 1483,
                "end": 1488,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1483,
                  "end": 1484,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1486,
                  "end": 1488,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1494,
                "end": 1498,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1494,
                  "end": 1495,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1497,
                  "end": 1498,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1505,
                "end": 1517,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1505,
                  "end": 1506,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1508,
                  "end": 1517,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1514,
                    "end": 1517,
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
                "start": 1524,
                "end": 1531,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1524,
                  "end": 1527,
                  "value": "d",
                  "raw": "\"d\""
                },
                "value": {
                  "type": "Literal",
                  "start": 1529,
                  "end": 1531,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1538,
                "end": 1544,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1538,
                  "end": 1541,
                  "value": "e",
                  "raw": "\"e\""
                },
                "value": {
                  "type": "Literal",
                  "start": 1543,
                  "end": 1544,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1551,
                "end": 1558,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1551,
                  "end": 1554,
                  "value": 1,
                  "raw": "1.0"
                },
                "value": {
                  "type": "Literal",
                  "start": 1556,
                  "end": 1558,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1564,
                "end": 1570,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1564,
                  "end": 1567,
                  "value": 2,
                  "raw": "2.0"
                },
                "value": {
                  "type": "Literal",
                  "start": 1569,
                  "end": 1570,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1577,
                "end": 1586,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1577,
                  "end": 1582,
                  "value": "3.0",
                  "raw": "\"3.0\""
                },
                "value": {
                  "type": "Literal",
                  "start": 1584,
                  "end": 1586,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1593,
                "end": 1601,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1593,
                  "end": 1598,
                  "value": "4.0",
                  "raw": "\"4.0\""
                },
                "value": {
                  "type": "Literal",
                  "start": 1600,
                  "end": 1601,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1608,
                "end": 1625,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1608,
                  "end": 1609,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 1611,
                  "end": 1625,
                  "expression": {
                    "type": "Literal",
                    "start": 1621,
                    "end": 1625,
                    "value": null,
                    "raw": "null"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1612,
                    "end": 1620,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1612,
                      "end": 1620,
                      "name": "MyString",
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
                "start": 1633,
                "end": 1668,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1637,
                  "end": 1638,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1638,
                  "end": 1668,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1641,
                    "end": 1668,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1652,
                        "end": 1662,
                        "argument": {
                          "type": "Literal",
                          "start": 1659,
                          "end": 1661,
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
                "start": 1674,
                "end": 1686,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1678,
                  "end": 1679,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1679,
                  "end": 1686,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1680,
                      "end": 1681,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1683,
                    "end": 1686,
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
                "start": 1693,
                "end": 1726,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1693,
                  "end": 1696,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1696,
                  "end": 1726,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1699,
                    "end": 1726,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1710,
                        "end": 1720,
                        "argument": {
                          "type": "Literal",
                          "start": 1717,
                          "end": 1719,
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
