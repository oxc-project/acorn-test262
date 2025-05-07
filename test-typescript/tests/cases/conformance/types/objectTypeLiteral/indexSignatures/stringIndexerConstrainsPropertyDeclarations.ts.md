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
      "body": {
        "type": "TSInterfaceBody",
        "start": 124,
        "end": 144,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 130,
            "end": 142,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 133,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
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
            "name": "String",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 108,
        "decorators": [],
        "name": "MyString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 146,
      "end": 713,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 154,
        "end": 713,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 160,
            "end": 180,
            "accessibility": null,
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
                    "type": "TSStringKeyword",
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
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 197,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 215,
            "end": 225,
            "accessibility": null,
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
              "optional": false,
              "typeAnnotation": null
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
            "accessibility": null,
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
              "optional": false,
              "typeAnnotation": null
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
            "start": 260,
            "end": 271,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 261,
              "end": 271,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 263,
                "end": 271,
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
                },
                "typeParameters": null
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 285,
            "end": 297,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 285,
              "end": 288,
              "raw": "\"d\"",
              "value": "d",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 308,
            "end": 320,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 308,
              "end": 311,
              "raw": "\"e\"",
              "value": "e",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 334,
            "end": 346,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 334,
              "end": 337,
              "raw": "1.0",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 357,
            "end": 369,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 357,
              "end": 360,
              "raw": "2.0",
              "value": 2,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 383,
            "end": 397,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 383,
              "end": 388,
              "raw": "\"3.0\"",
              "value": "3.0",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 408,
            "end": 422,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 408,
              "end": 413,
              "raw": "\"4.0\"",
              "value": "4.0",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 436,
            "end": 448,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 436,
              "end": 437,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 437,
              "end": 447,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 439,
                "end": 447,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 447,
                  "decorators": [],
                  "name": "MyString",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 463,
            "end": 503,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 467,
              "end": 468,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 468,
              "end": 503,
              "async": false,
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
                      "raw": "''",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 508,
            "end": 520,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 512,
              "end": 513,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 513,
              "end": 520,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 517,
                "end": 520,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 514,
                  "end": 515,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 532,
            "end": 573,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 532,
              "end": 535,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 535,
              "end": 573,
              "async": false,
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
                      "raw": "''",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 579,
            "end": 597,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 586,
              "end": 588,
              "decorators": [],
              "name": "sa",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 608,
            "end": 626,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 615,
              "end": 617,
              "decorators": [],
              "name": "sb",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 638,
            "end": 654,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 645,
              "end": 648,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 648,
              "end": 654,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 651,
                "end": 654,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 665,
            "end": 711,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 676,
              "end": 677,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 677,
              "end": 711,
              "async": false,
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
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 715,
      "end": 1075,
      "body": {
        "type": "TSInterfaceBody",
        "start": 727,
        "end": 1075,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 733,
            "end": 753,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 734,
                "end": 743,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 735,
                  "end": 743,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 737,
                    "end": 743
                  }
                }
              }
            ],
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
            "start": 759,
            "end": 769,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 759,
              "end": 760,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 760,
              "end": 768,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 762,
                "end": 768
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 780,
            "end": 790,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 780,
              "end": 781,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 781,
              "end": 789,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 783,
                "end": 789
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 804,
            "end": 815,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 804,
              "end": 805,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 805,
              "end": 815,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 807,
                "end": 815,
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
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 829,
            "end": 841,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 829,
              "end": 832,
              "raw": "\"d\"",
              "value": "d",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 832,
              "end": 840,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 834,
                "end": 840
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 852,
            "end": 864,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 852,
              "end": 855,
              "raw": "\"e\"",
              "value": "e",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 855,
              "end": 863,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 857,
                "end": 863
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 878,
            "end": 890,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 878,
              "end": 881,
              "raw": "1.0",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 881,
              "end": 889,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 883,
                "end": 889
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 901,
            "end": 913,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 901,
              "end": 904,
              "raw": "2.0",
              "value": 2,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 904,
              "end": 912,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 906,
                "end": 912
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 927,
            "end": 938,
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
            },
            "typeParameters": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 949,
            "end": 960,
            "params": [
              {
                "type": "Identifier",
                "start": 950,
                "end": 951,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
            },
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 971,
            "end": 985,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 971,
              "end": 974,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 999,
            "end": 1013,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 999,
              "end": 1004,
              "raw": "\"3.0\"",
              "value": "3.0",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1004,
              "end": 1012,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1006,
                "end": 1012
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1024,
            "end": 1038,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 1024,
              "end": 1029,
              "raw": "\"4.0\"",
              "value": "4.0",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1029,
              "end": 1037,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1031,
                "end": 1037
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1052,
            "end": 1064,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1052,
              "end": 1053,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1053,
              "end": 1063,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1055,
                "end": 1063,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1055,
                  "end": 1063,
                  "decorators": [],
                  "name": "MyString",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 725,
        "end": 726,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1081,
            "end": 1432,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1091,
                        "end": 1100,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1092,
                          "end": 1100,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1094,
                            "end": 1100
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1101,
                      "end": 1109,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1103,
                        "end": 1109
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1116,
                    "end": 1126,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1116,
                      "end": 1117,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1117,
                      "end": 1125,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1119,
                        "end": 1125
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1137,
                    "end": 1147,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1137,
                      "end": 1138,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1138,
                      "end": 1146,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1140,
                        "end": 1146
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1161,
                    "end": 1172,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1161,
                      "end": 1162,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1162,
                      "end": 1172,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1164,
                        "end": 1172,
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
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1186,
                    "end": 1198,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 1186,
                      "end": 1189,
                      "raw": "\"d\"",
                      "value": "d",
                      "regex": null,
                      "bigint": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1189,
                      "end": 1197,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1191,
                        "end": 1197
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1209,
                    "end": 1221,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 1209,
                      "end": 1212,
                      "raw": "\"e\"",
                      "value": "e",
                      "regex": null,
                      "bigint": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1212,
                      "end": 1220,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1214,
                        "end": 1220
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1235,
                    "end": 1247,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 1235,
                      "end": 1238,
                      "raw": "1.0",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1238,
                      "end": 1246,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1240,
                        "end": 1246
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1258,
                    "end": 1270,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 1258,
                      "end": 1261,
                      "raw": "2.0",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1261,
                      "end": 1269,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1263,
                        "end": 1269
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1284,
                    "end": 1295,
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
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1306,
                    "end": 1317,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1307,
                        "end": 1308,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
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
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1328,
                    "end": 1342,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1328,
                      "end": 1331,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
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
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1356,
                    "end": 1370,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 1356,
                      "end": 1361,
                      "raw": "\"3.0\"",
                      "value": "3.0",
                      "regex": null,
                      "bigint": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1361,
                      "end": 1369,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1363,
                        "end": 1369
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1381,
                    "end": 1395,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 1381,
                      "end": 1386,
                      "raw": "\"4.0\"",
                      "value": "4.0",
                      "regex": null,
                      "bigint": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1386,
                      "end": 1394,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1388,
                        "end": 1394
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1409,
                    "end": 1421,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1409,
                      "end": 1410,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1410,
                      "end": 1420,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1412,
                        "end": 1420,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1412,
                          "end": 1420,
                          "decorators": [],
                          "name": "MyString",
                          "optional": false,
                          "typeAnnotation": null
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
      "start": 1443,
      "end": 1728,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1447,
          "end": 1728,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1447,
            "end": 1474,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1453,
                        "end": 1462,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1454,
                          "end": 1462,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1456,
                            "end": 1462
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1463,
                      "end": 1471,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1465,
                        "end": 1471
                      }
                    }
                  }
                ]
              }
            }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1483,
                  "end": 1484,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1486,
                  "end": 1488,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 1494,
                "end": 1498,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1494,
                  "end": 1495,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1497,
                  "end": 1498,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 1505,
                "end": 1517,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1505,
                  "end": 1506,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1508,
                  "end": 1517,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1514,
                    "end": 1517,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 1524,
                "end": 1531,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1524,
                  "end": 1527,
                  "raw": "\"d\"",
                  "value": "d",
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1529,
                  "end": 1531,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 1538,
                "end": 1544,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1538,
                  "end": 1541,
                  "raw": "\"e\"",
                  "value": "e",
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1543,
                  "end": 1544,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 1551,
                "end": 1558,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1551,
                  "end": 1554,
                  "raw": "1.0",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1556,
                  "end": 1558,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 1564,
                "end": 1570,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1564,
                  "end": 1567,
                  "raw": "2.0",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1569,
                  "end": 1570,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 1577,
                "end": 1586,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1577,
                  "end": 1582,
                  "raw": "\"3.0\"",
                  "value": "3.0",
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1584,
                  "end": 1586,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 1593,
                "end": 1601,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1593,
                  "end": 1598,
                  "raw": "\"4.0\"",
                  "value": "4.0",
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1600,
                  "end": 1601,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 1608,
                "end": 1625,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1608,
                  "end": 1609,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 1611,
                  "end": 1625,
                  "expression": {
                    "type": "Literal",
                    "start": 1621,
                    "end": 1625,
                    "raw": "null",
                    "value": null,
                    "regex": null,
                    "bigint": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1612,
                    "end": 1620,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1612,
                      "end": 1620,
                      "decorators": [],
                      "name": "MyString",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Property",
                "start": 1633,
                "end": 1668,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1637,
                  "end": 1638,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1638,
                  "end": 1668,
                  "async": false,
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
                          "raw": "''",
                          "value": "",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 1674,
                "end": 1686,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1678,
                  "end": 1679,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1679,
                  "end": 1686,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1683,
                    "end": 1686,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1680,
                      "end": 1681,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 1693,
                "end": 1726,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1693,
                  "end": 1696,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1696,
                  "end": 1726,
                  "async": false,
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
                          "raw": "''",
                          "value": "",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
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
  "sourceType": "script",
  "hashbang": null
}
```
