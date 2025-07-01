__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 18
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 19,
                "end": 21
              }
            ],
            "optional": false,
            "start": 12,
            "end": 22
          },
          "definite": false,
          "start": 6,
          "end": 22
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Orig",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 32
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 41,
                    "end": 47
                  },
                  "start": 39,
                  "end": 47
                },
                "start": 38,
                "end": 47
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 50,
                "end": 53
              },
              "start": 48,
              "end": 53
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 37,
            "end": 54
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 58
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 60,
                "end": 63
              },
              "start": 58,
              "end": 63
            },
            "accessibility": null,
            "static": false,
            "start": 55,
            "end": 64
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sym",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 69
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 72,
                "end": 75
              },
              "start": 70,
              "end": 75
            },
            "accessibility": null,
            "static": false,
            "start": 65,
            "end": 75
          }
        ],
        "start": 35,
        "end": 77
      },
      "declare": false,
      "start": 23,
      "end": 77
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Okay",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 88
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Exclude",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 98
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Orig",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 109
                },
                "typeArguments": null,
                "start": 105,
                "end": 109
              },
              "start": 99,
              "end": 109
            },
            {
              "type": "TSNeverKeyword",
              "start": 111,
              "end": 116
            }
          ],
          "start": 98,
          "end": 117
        },
        "start": 91,
        "end": 117
      },
      "declare": false,
      "start": 79,
      "end": 117
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Remapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 176
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 183
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Orig",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 197
            },
            "typeArguments": null,
            "start": 193,
            "end": 197
          },
          "start": 187,
          "end": 197
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 201,
            "end": 203
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 218
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 220
                  },
                  "typeArguments": null,
                  "start": 219,
                  "end": 220
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 222,
                  "end": 225
                }
              ],
              "start": 218,
              "end": 226
            },
            "start": 212,
            "end": 226
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "start": 229,
            "end": 234
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 238
            },
            "typeArguments": null,
            "start": 237,
            "end": 238
          },
          "start": 201,
          "end": 238
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 241,
          "end": 244
        },
        "optional": false,
        "readonly": null,
        "start": 179,
        "end": 246
      },
      "declare": false,
      "start": 163,
      "end": 246
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Oops",
        "optional": false,
        "typeAnnotation": null,
        "start": 346,
        "end": 350
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Exclude",
          "optional": false,
          "typeAnnotation": null,
          "start": 353,
          "end": 360
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Remapped",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 375
                },
                "typeArguments": null,
                "start": 367,
                "end": 375
              },
              "start": 361,
              "end": 375
            },
            {
              "type": "TSNeverKeyword",
              "start": 377,
              "end": 382
            }
          ],
          "start": 360,
          "end": 383
        },
        "start": 353,
        "end": 383
      },
      "declare": false,
      "start": 341,
      "end": 383
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Oops",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 399,
                  "end": 403
                },
                "typeArguments": null,
                "start": 399,
                "end": 403
              },
              "start": 397,
              "end": 403
            },
            "start": 396,
            "end": 403
          },
          "init": null,
          "definite": false,
          "start": 396,
          "end": 403
        }
      ],
      "declare": true,
      "start": 384,
      "end": 404
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 405,
          "end": 406
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sym",
          "optional": false,
          "typeAnnotation": null,
          "start": 409,
          "end": 412
        },
        "start": 405,
        "end": 412
      },
      "directive": null,
      "start": 405,
      "end": 413
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 414,
          "end": 415
        },
        "right": {
          "type": "Literal",
          "value": "str",
          "raw": "\"str\"",
          "start": 418,
          "end": 423
        },
        "start": 414,
        "end": 423
      },
      "directive": null,
      "start": 414,
      "end": 424
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 593,
        "end": 594
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 595,
              "end": 596
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 595,
            "end": 596
          }
        ],
        "start": 594,
        "end": 597
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Orig",
              "optional": false,
              "typeAnnotation": null,
              "start": 611,
              "end": 615
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 624,
                              "end": 630
                            },
                            "start": 622,
                            "end": 630
                          },
                          "start": 621,
                          "end": 630
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 633,
                          "end": 636
                        },
                        "start": 631,
                        "end": 636
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 620,
                      "end": 637
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 638,
                        "end": 641
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 643,
                          "end": 646
                        },
                        "start": 641,
                        "end": 646
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 638,
                      "end": 647
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sym",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 649,
                        "end": 652
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 655,
                          "end": 658
                        },
                        "start": 653,
                        "end": 658
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 648,
                      "end": 658
                    }
                  ],
                  "start": 618,
                  "end": 660
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 663,
                    "end": 664
                  },
                  "typeArguments": null,
                  "start": 663,
                  "end": 664
                }
              ],
              "start": 618,
              "end": 664
            },
            "declare": false,
            "start": 606,
            "end": 665
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Okay",
              "optional": false,
              "typeAnnotation": null,
              "start": 680,
              "end": 684
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Orig",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 693,
                  "end": 697
                },
                "typeArguments": null,
                "start": 693,
                "end": 697
              },
              "start": 687,
              "end": 697
            },
            "declare": false,
            "start": 675,
            "end": 698
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Okay",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 710,
                        "end": 714
                      },
                      "typeArguments": null,
                      "start": 710,
                      "end": 714
                    },
                    "start": 708,
                    "end": 714
                  },
                  "start": 707,
                  "end": 714
                },
                "init": null,
                "definite": false,
                "start": 707,
                "end": 714
              }
            ],
            "declare": false,
            "start": 703,
            "end": 715
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 720,
                "end": 721
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 724,
                "end": 729
              },
              "start": 720,
              "end": 729
            },
            "directive": null,
            "start": 720,
            "end": 730
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 735,
                "end": 736
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sym",
                "optional": false,
                "typeAnnotation": null,
                "start": 739,
                "end": 742
              },
              "start": 735,
              "end": 742
            },
            "directive": null,
            "start": 735,
            "end": 743
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 749
              },
              "right": {
                "type": "Literal",
                "value": "whatever",
                "raw": "\"whatever\"",
                "start": 752,
                "end": 762
              },
              "start": 748,
              "end": 762
            },
            "directive": null,
            "start": 748,
            "end": 763
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Remapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 826,
              "end": 834
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 840,
                "end": 841
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Orig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 851,
                    "end": 855
                  },
                  "typeArguments": null,
                  "start": 851,
                  "end": 855
                },
                "start": 845,
                "end": 855
              },
              "nameType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 859,
                  "end": 861
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 870,
                    "end": 876
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 877,
                          "end": 878
                        },
                        "typeArguments": null,
                        "start": 877,
                        "end": 878
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 880,
                        "end": 883
                      }
                    ],
                    "start": 876,
                    "end": 884
                  },
                  "start": 870,
                  "end": 884
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "start": 887,
                  "end": 892
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 895,
                    "end": 896
                  },
                  "typeArguments": null,
                  "start": 895,
                  "end": 896
                },
                "start": 859,
                "end": 896
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 899,
                "end": 902
              },
              "optional": false,
              "readonly": null,
              "start": 837,
              "end": 904
            },
            "declare": false,
            "start": 821,
            "end": 904
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Oops",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1036
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Remapped",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1045,
                  "end": 1053
                },
                "typeArguments": null,
                "start": 1045,
                "end": 1053
              },
              "start": 1039,
              "end": 1053
            },
            "declare": false,
            "start": 1027,
            "end": 1054
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Oops",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1066,
                        "end": 1070
                      },
                      "typeArguments": null,
                      "start": 1066,
                      "end": 1070
                    },
                    "start": 1064,
                    "end": 1070
                  },
                  "start": 1063,
                  "end": 1070
                },
                "init": null,
                "definite": false,
                "start": 1063,
                "end": 1070
              }
            ],
            "declare": false,
            "start": 1059,
            "end": 1071
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1076,
                "end": 1077
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sym",
                "optional": false,
                "typeAnnotation": null,
                "start": 1080,
                "end": 1083
              },
              "start": 1076,
              "end": 1083
            },
            "directive": null,
            "start": 1076,
            "end": 1084
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1089,
                "end": 1090
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 1093,
                "end": 1098
              },
              "start": 1089,
              "end": 1098
            },
            "directive": null,
            "start": 1089,
            "end": 1099
          }
        ],
        "start": 600,
        "end": 1101
      },
      "expression": false,
      "start": 584,
      "end": 1101
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1219,
        "end": 1220
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1221,
              "end": 1222
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1221,
            "end": 1222
          }
        ],
        "start": 1220,
        "end": 1223
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Orig",
              "optional": false,
              "typeAnnotation": null,
              "start": 1237,
              "end": 1241
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1250,
                              "end": 1256
                            },
                            "start": 1248,
                            "end": 1256
                          },
                          "start": 1247,
                          "end": 1256
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1259,
                          "end": 1262
                        },
                        "start": 1257,
                        "end": 1262
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 1246,
                      "end": 1263
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1264,
                        "end": 1267
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1269,
                          "end": 1272
                        },
                        "start": 1267,
                        "end": 1272
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1264,
                      "end": 1273
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sym",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1275,
                        "end": 1278
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1281,
                          "end": 1284
                        },
                        "start": 1279,
                        "end": 1284
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1274,
                      "end": 1284
                    }
                  ],
                  "start": 1244,
                  "end": 1286
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1289,
                    "end": 1290
                  },
                  "typeArguments": null,
                  "start": 1289,
                  "end": 1290
                }
              ],
              "start": 1244,
              "end": 1290
            },
            "declare": false,
            "start": 1232,
            "end": 1291
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Okay",
              "optional": false,
              "typeAnnotation": null,
              "start": 1306,
              "end": 1310
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Orig",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1319,
                  "end": 1323
                },
                "typeArguments": null,
                "start": 1319,
                "end": 1323
              },
              "start": 1313,
              "end": 1323
            },
            "declare": false,
            "start": 1301,
            "end": 1324
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Okay",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1336,
                        "end": 1340
                      },
                      "typeArguments": null,
                      "start": 1336,
                      "end": 1340
                    },
                    "start": 1334,
                    "end": 1340
                  },
                  "start": 1333,
                  "end": 1340
                },
                "init": null,
                "definite": false,
                "start": 1333,
                "end": 1340
              }
            ],
            "declare": false,
            "start": 1329,
            "end": 1341
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1346,
                "end": 1347
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 1350,
                "end": 1355
              },
              "start": 1346,
              "end": 1355
            },
            "directive": null,
            "start": 1346,
            "end": 1356
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1361,
                "end": 1362
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sym",
                "optional": false,
                "typeAnnotation": null,
                "start": 1365,
                "end": 1368
              },
              "start": 1361,
              "end": 1368
            },
            "directive": null,
            "start": 1361,
            "end": 1369
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1374,
                "end": 1375
              },
              "right": {
                "type": "Literal",
                "value": "whatever",
                "raw": "\"whatever\"",
                "start": 1378,
                "end": 1388
              },
              "start": 1374,
              "end": 1388
            },
            "directive": null,
            "start": 1374,
            "end": 1389
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "NonIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 1448,
              "end": 1456
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1457,
                    "end": 1458
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1467,
                      "end": 1478
                    },
                    "typeArguments": null,
                    "start": 1467,
                    "end": 1478
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1457,
                  "end": 1478
                }
              ],
              "start": 1456,
              "end": 1479
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1482,
                "end": 1484
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1493,
                  "end": 1499
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1500,
                        "end": 1501
                      },
                      "typeArguments": null,
                      "start": 1500,
                      "end": 1501
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 1503,
                      "end": 1506
                    }
                  ],
                  "start": 1499,
                  "end": 1507
                },
                "start": 1493,
                "end": 1507
              },
              "trueType": {
                "type": "TSNeverKeyword",
                "start": 1510,
                "end": 1515
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1518,
                  "end": 1519
                },
                "typeArguments": null,
                "start": 1518,
                "end": 1519
              },
              "start": 1482,
              "end": 1519
            },
            "declare": false,
            "start": 1443,
            "end": 1520
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "DistributiveNonIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 1530,
              "end": 1550
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1551,
                    "end": 1552
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1561,
                      "end": 1572
                    },
                    "typeArguments": null,
                    "start": 1561,
                    "end": 1572
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1551,
                  "end": 1572
                }
              ],
              "start": 1550,
              "end": 1573
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1576,
                  "end": 1577
                },
                "typeArguments": null,
                "start": 1576,
                "end": 1577
              },
              "extendsType": {
                "type": "TSUnknownKeyword",
                "start": 1586,
                "end": 1593
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1596,
                  "end": 1604
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1605,
                        "end": 1606
                      },
                      "typeArguments": null,
                      "start": 1605,
                      "end": 1606
                    }
                  ],
                  "start": 1604,
                  "end": 1607
                },
                "start": 1596,
                "end": 1607
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 1610,
                "end": 1615
              },
              "start": 1576,
              "end": 1615
            },
            "declare": false,
            "start": 1525,
            "end": 1616
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Remapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 1631,
              "end": 1639
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1645,
                "end": 1646
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Orig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1656,
                    "end": 1660
                  },
                  "typeArguments": null,
                  "start": 1656,
                  "end": 1660
                },
                "start": 1650,
                "end": 1660
              },
              "nameType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DistributiveNonIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1664,
                  "end": 1684
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1685,
                        "end": 1686
                      },
                      "typeArguments": null,
                      "start": 1685,
                      "end": 1686
                    }
                  ],
                  "start": 1684,
                  "end": 1687
                },
                "start": 1664,
                "end": 1687
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1690,
                "end": 1693
              },
              "optional": false,
              "readonly": null,
              "start": 1642,
              "end": 1695
            },
            "declare": false,
            "start": 1626,
            "end": 1695
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Oops",
              "optional": false,
              "typeAnnotation": null,
              "start": 1823,
              "end": 1827
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Remapped",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1836,
                  "end": 1844
                },
                "typeArguments": null,
                "start": 1836,
                "end": 1844
              },
              "start": 1830,
              "end": 1844
            },
            "declare": false,
            "start": 1818,
            "end": 1845
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Oops",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1857,
                        "end": 1861
                      },
                      "typeArguments": null,
                      "start": 1857,
                      "end": 1861
                    },
                    "start": 1855,
                    "end": 1861
                  },
                  "start": 1854,
                  "end": 1861
                },
                "init": null,
                "definite": false,
                "start": 1854,
                "end": 1861
              }
            ],
            "declare": false,
            "start": 1850,
            "end": 1862
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1867,
                "end": 1868
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sym",
                "optional": false,
                "typeAnnotation": null,
                "start": 1871,
                "end": 1874
              },
              "start": 1867,
              "end": 1874
            },
            "directive": null,
            "start": 1867,
            "end": 1875
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1880,
                "end": 1881
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 1884,
                "end": 1889
              },
              "start": 1880,
              "end": 1889
            },
            "directive": null,
            "start": 1880,
            "end": 1890
          }
        ],
        "start": 1226,
        "end": 1892
      },
      "expression": false,
      "start": 1210,
      "end": 1892
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1894,
      "end": 1904
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1904
}
```
