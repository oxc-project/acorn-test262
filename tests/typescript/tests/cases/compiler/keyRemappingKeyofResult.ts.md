__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 6,
    "end": 9,
    "range": [
      6,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 12,
    "end": 18,
    "range": [
      12,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 19,
    "end": 21,
    "range": [
      19,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 23,
    "end": 27,
    "range": [
      23,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "Orig",
    "start": 28,
    "end": 32,
    "range": [
      28,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 41,
    "end": 47,
    "range": [
      41,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 50,
    "end": 53,
    "range": [
      50,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 55,
    "end": 58,
    "range": [
      55,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 60,
    "end": 63,
    "range": [
      60,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 66,
    "end": 69,
    "range": [
      66,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 72,
    "end": 75,
    "range": [
      72,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 79,
    "end": 83,
    "range": [
      79,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "Okay",
    "start": 84,
    "end": 88,
    "range": [
      84,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 91,
    "end": 98,
    "range": [
      91,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 99,
    "end": 104,
    "range": [
      99,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "Orig",
    "start": 105,
    "end": 109,
    "range": [
      105,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 111,
    "end": 116,
    "range": [
      111,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 163,
    "end": 167,
    "range": [
      163,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "Remapped",
    "start": 168,
    "end": 176,
    "range": [
      168,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 184,
    "end": 186,
    "range": [
      184,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 187,
    "end": 192,
    "range": [
      187,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "Orig",
    "start": 193,
    "end": 197,
    "range": [
      193,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 198,
    "end": 200,
    "range": [
      198,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 204,
    "end": 211,
    "range": [
      204,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 212,
    "end": 218,
    "range": [
      212,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 222,
    "end": 225,
    "range": [
      222,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 229,
    "end": 234,
    "range": [
      229,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 241,
    "end": 244,
    "range": [
      241,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 341,
    "end": 345,
    "range": [
      341,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "Oops",
    "start": 346,
    "end": 350,
    "range": [
      346,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 353,
    "end": 360,
    "range": [
      353,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 361,
    "end": 366,
    "range": [
      361,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "Remapped",
    "start": 367,
    "end": 375,
    "range": [
      367,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 377,
    "end": 382,
    "range": [
      377,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 384,
    "end": 391,
    "range": [
      384,
      391
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 392,
    "end": 395,
    "range": [
      392,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "Oops",
    "start": 399,
    "end": 403,
    "range": [
      399,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 409,
    "end": 412,
    "range": [
      409,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 418,
    "end": 423,
    "range": [
      418,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 584,
    "end": 592,
    "range": [
      584,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 606,
    "end": 610,
    "range": [
      606,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "Orig",
    "start": 611,
    "end": 615,
    "range": [
      611,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 624,
    "end": 630,
    "range": [
      624,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 633,
    "end": 636,
    "range": [
      633,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 638,
    "end": 641,
    "range": [
      638,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 643,
    "end": 646,
    "range": [
      643,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 649,
    "end": 652,
    "range": [
      649,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 655,
    "end": 658,
    "range": [
      655,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 675,
    "end": 679,
    "range": [
      675,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "Okay",
    "start": 680,
    "end": 684,
    "range": [
      680,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 687,
    "end": 692,
    "range": [
      687,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "Orig",
    "start": 693,
    "end": 697,
    "range": [
      693,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 703,
    "end": 706,
    "range": [
      703,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "Okay",
    "start": 710,
    "end": 714,
    "range": [
      710,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 724,
    "end": 729,
    "range": [
      724,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 739,
    "end": 742,
    "range": [
      739,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "String",
    "value": "\"whatever\"",
    "start": 752,
    "end": 762,
    "range": [
      752,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 821,
    "end": 825,
    "range": [
      821,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "Remapped",
    "start": 826,
    "end": 834,
    "range": [
      826,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 842,
    "end": 844,
    "range": [
      842,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 845,
    "end": 850,
    "range": [
      845,
      850
    ]
  },
  {
    "type": "Identifier",
    "value": "Orig",
    "start": 851,
    "end": 855,
    "range": [
      851,
      855
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 856,
    "end": 858,
    "range": [
      856,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 862,
    "end": 869,
    "range": [
      862,
      869
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 870,
    "end": 876,
    "range": [
      870,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 880,
    "end": 883,
    "range": [
      880,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 887,
    "end": 892,
    "range": [
      887,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 899,
    "end": 902,
    "range": [
      899,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1027,
    "end": 1031,
    "range": [
      1027,
      1031
    ]
  },
  {
    "type": "Identifier",
    "value": "Oops",
    "start": 1032,
    "end": 1036,
    "range": [
      1032,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1039,
    "end": 1044,
    "range": [
      1039,
      1044
    ]
  },
  {
    "type": "Identifier",
    "value": "Remapped",
    "start": 1045,
    "end": 1053,
    "range": [
      1045,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1059,
    "end": 1062,
    "range": [
      1059,
      1062
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "Oops",
    "start": 1066,
    "end": 1070,
    "range": [
      1066,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 1080,
    "end": 1083,
    "range": [
      1080,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 1093,
    "end": 1098,
    "range": [
      1093,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1210,
    "end": 1218,
    "range": [
      1210,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1220,
    "end": 1221,
    "range": [
      1220,
      1221
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1221,
    "end": 1222,
    "range": [
      1221,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1232,
    "end": 1236,
    "range": [
      1232,
      1236
    ]
  },
  {
    "type": "Identifier",
    "value": "Orig",
    "start": 1237,
    "end": 1241,
    "range": [
      1237,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1250,
    "end": 1256,
    "range": [
      1250,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1259,
    "end": 1262,
    "range": [
      1259,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1264,
    "end": 1267,
    "range": [
      1264,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1269,
    "end": 1272,
    "range": [
      1269,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 1275,
    "end": 1278,
    "range": [
      1275,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1281,
    "end": 1284,
    "range": [
      1281,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1301,
    "end": 1305,
    "range": [
      1301,
      1305
    ]
  },
  {
    "type": "Identifier",
    "value": "Okay",
    "start": 1306,
    "end": 1310,
    "range": [
      1306,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1313,
    "end": 1318,
    "range": [
      1313,
      1318
    ]
  },
  {
    "type": "Identifier",
    "value": "Orig",
    "start": 1319,
    "end": 1323,
    "range": [
      1319,
      1323
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1329,
    "end": 1332,
    "range": [
      1329,
      1332
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Identifier",
    "value": "Okay",
    "start": 1336,
    "end": 1340,
    "range": [
      1336,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 1350,
    "end": 1355,
    "range": [
      1350,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 1365,
    "end": 1368,
    "range": [
      1365,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "String",
    "value": "\"whatever\"",
    "start": 1378,
    "end": 1388,
    "range": [
      1378,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1443,
    "end": 1447,
    "range": [
      1443,
      1447
    ]
  },
  {
    "type": "Identifier",
    "value": "NonIndex",
    "start": 1448,
    "end": 1456,
    "range": [
      1448,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1459,
    "end": 1466,
    "range": [
      1459,
      1466
    ]
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 1467,
    "end": 1478,
    "range": [
      1467,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1485,
    "end": 1492,
    "range": [
      1485,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1493,
    "end": 1499,
    "range": [
      1493,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1503,
    "end": 1506,
    "range": [
      1503,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1510,
    "end": 1515,
    "range": [
      1510,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1525,
    "end": 1529,
    "range": [
      1525,
      1529
    ]
  },
  {
    "type": "Identifier",
    "value": "DistributiveNonIndex",
    "start": 1530,
    "end": 1550,
    "range": [
      1530,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1553,
    "end": 1560,
    "range": [
      1553,
      1560
    ]
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 1561,
    "end": 1572,
    "range": [
      1561,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1576,
    "end": 1577,
    "range": [
      1576,
      1577
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1578,
    "end": 1585,
    "range": [
      1578,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1586,
    "end": 1593,
    "range": [
      1586,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Identifier",
    "value": "NonIndex",
    "start": 1596,
    "end": 1604,
    "range": [
      1596,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1610,
    "end": 1615,
    "range": [
      1610,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1626,
    "end": 1630,
    "range": [
      1626,
      1630
    ]
  },
  {
    "type": "Identifier",
    "value": "Remapped",
    "start": 1631,
    "end": 1639,
    "range": [
      1631,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1647,
    "end": 1649,
    "range": [
      1647,
      1649
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1650,
    "end": 1655,
    "range": [
      1650,
      1655
    ]
  },
  {
    "type": "Identifier",
    "value": "Orig",
    "start": 1656,
    "end": 1660,
    "range": [
      1656,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1661,
    "end": 1663,
    "range": [
      1661,
      1663
    ]
  },
  {
    "type": "Identifier",
    "value": "DistributiveNonIndex",
    "start": 1664,
    "end": 1684,
    "range": [
      1664,
      1684
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1690,
    "end": 1693,
    "range": [
      1690,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1818,
    "end": 1822,
    "range": [
      1818,
      1822
    ]
  },
  {
    "type": "Identifier",
    "value": "Oops",
    "start": 1823,
    "end": 1827,
    "range": [
      1823,
      1827
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1828,
    "end": 1829,
    "range": [
      1828,
      1829
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1830,
    "end": 1835,
    "range": [
      1830,
      1835
    ]
  },
  {
    "type": "Identifier",
    "value": "Remapped",
    "start": 1836,
    "end": 1844,
    "range": [
      1836,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1850,
    "end": 1853,
    "range": [
      1850,
      1853
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Identifier",
    "value": "Oops",
    "start": 1857,
    "end": 1861,
    "range": [
      1857,
      1861
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 1871,
    "end": 1874,
    "range": [
      1871,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1880,
    "end": 1881,
    "range": [
      1880,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1882,
    "end": 1883,
    "range": [
      1882,
      1883
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 1884,
    "end": 1889,
    "range": [
      1884,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1894,
    "end": 1900,
    "range": [
      1894,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  }
]
```
