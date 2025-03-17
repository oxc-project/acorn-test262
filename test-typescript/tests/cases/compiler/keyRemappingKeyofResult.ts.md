__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1904,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "sym",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 12,
            "end": 22,
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 18,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 19,
                "end": 21,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 23,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 32,
        "name": "Orig",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 35,
        "end": 77,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 37,
            "end": 54,
            "parameters": [
              {
                "type": "Identifier",
                "start": 38,
                "end": 47,
                "name": "k",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 39,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 41,
                    "end": 47
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 53,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 50,
                "end": 53
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 64,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "name": "str",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 63,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 60,
                "end": 63
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 65,
            "end": 75,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 69,
              "name": "sym",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 75,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 72,
                "end": 75
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
      "type": "TSTypeAliasDeclaration",
      "start": 79,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 88,
        "name": "Okay",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 91,
        "end": 117,
        "typeName": {
          "type": "Identifier",
          "start": 91,
          "end": 98,
          "name": "Exclude",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 98,
          "end": 117,
          "params": [
            {
              "type": "TSTypeOperator",
              "start": 99,
              "end": 109,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 105,
                "end": 109,
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 109,
                  "name": "Orig",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSNeverKeyword",
              "start": 111,
              "end": 116
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 163,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 176,
        "name": "Remapped",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 179,
        "end": 246,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 182,
          "end": 197,
          "name": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 187,
            "end": 197,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 193,
              "end": 197,
              "typeName": {
                "type": "Identifier",
                "start": 193,
                "end": 197,
                "name": "Orig",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": {
          "type": "TSConditionalType",
          "start": 201,
          "end": 238,
          "checkType": {
            "type": "TSTypeLiteral",
            "start": 201,
            "end": 203,
            "members": []
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 212,
            "end": 226,
            "typeName": {
              "type": "Identifier",
              "start": 212,
              "end": 218,
              "name": "Record",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 218,
              "end": 226,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 219,
                  "end": 220,
                  "typeName": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 220,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 222,
                  "end": 225
                }
              ]
            }
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "start": 229,
            "end": 234
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 237,
            "end": 238,
            "typeName": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 241,
          "end": 244
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 187,
          "end": 197,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 193,
            "end": 197,
            "typeName": {
              "type": "Identifier",
              "start": 193,
              "end": 197,
              "name": "Orig",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 182,
          "end": 183,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 341,
      "end": 383,
      "id": {
        "type": "Identifier",
        "start": 346,
        "end": 350,
        "name": "Oops",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 353,
        "end": 383,
        "typeName": {
          "type": "Identifier",
          "start": 353,
          "end": 360,
          "name": "Exclude",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 360,
          "end": 383,
          "params": [
            {
              "type": "TSTypeOperator",
              "start": 361,
              "end": 375,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 367,
                "end": 375,
                "typeName": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 375,
                  "name": "Remapped",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSNeverKeyword",
              "start": 377,
              "end": 382
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 384,
      "end": 404,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 403,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 403,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 397,
              "end": 403,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 399,
                "end": 403,
                "typeName": {
                  "type": "Identifier",
                  "start": 399,
                  "end": 403,
                  "name": "Oops",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 405,
      "end": 413,
      "expression": {
        "type": "AssignmentExpression",
        "start": 405,
        "end": 412,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 405,
          "end": 406,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 409,
          "end": 412,
          "name": "sym",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 414,
      "end": 424,
      "expression": {
        "type": "AssignmentExpression",
        "start": 414,
        "end": 423,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 414,
          "end": 415,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 418,
          "end": 423,
          "value": "str",
          "raw": "\"str\""
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 584,
      "end": 1101,
      "id": {
        "type": "Identifier",
        "start": 593,
        "end": 594,
        "name": "f",
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
        "start": 600,
        "end": 1101,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 606,
            "end": 665,
            "id": {
              "type": "Identifier",
              "start": 611,
              "end": 615,
              "name": "Orig",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 618,
              "end": 664,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 618,
                  "end": 660,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 620,
                      "end": 637,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 621,
                          "end": 630,
                          "name": "k",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 622,
                            "end": 630,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 624,
                              "end": 630
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 631,
                        "end": 636,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 633,
                          "end": 636
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 638,
                      "end": 647,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 638,
                        "end": 641,
                        "name": "str",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 641,
                        "end": 646,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 643,
                          "end": 646
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 648,
                      "end": 658,
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 649,
                        "end": 652,
                        "name": "sym",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 653,
                        "end": 658,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 655,
                          "end": 658
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 663,
                  "end": 664,
                  "typeName": {
                    "type": "Identifier",
                    "start": 663,
                    "end": 664,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 675,
            "end": 698,
            "id": {
              "type": "Identifier",
              "start": 680,
              "end": 684,
              "name": "Okay",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 687,
              "end": 697,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 693,
                "end": 697,
                "typeName": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 697,
                  "name": "Orig",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 703,
            "end": 715,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 707,
                "end": 714,
                "id": {
                  "type": "Identifier",
                  "start": 707,
                  "end": 714,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 708,
                    "end": 714,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 710,
                      "end": 714,
                      "typeName": {
                        "type": "Identifier",
                        "start": 710,
                        "end": 714,
                        "name": "Okay",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 720,
            "end": 730,
            "expression": {
              "type": "AssignmentExpression",
              "start": 720,
              "end": 729,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 720,
                "end": 721,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 724,
                "end": 729,
                "value": "str",
                "raw": "\"str\""
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 735,
            "end": 743,
            "expression": {
              "type": "AssignmentExpression",
              "start": 735,
              "end": 742,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 735,
                "end": 736,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 739,
                "end": 742,
                "name": "sym",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 748,
            "end": 763,
            "expression": {
              "type": "AssignmentExpression",
              "start": 748,
              "end": 762,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 748,
                "end": 749,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 752,
                "end": 762,
                "value": "whatever",
                "raw": "\"whatever\""
              }
            },
            "directive": null
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 821,
            "end": 904,
            "id": {
              "type": "Identifier",
              "start": 826,
              "end": 834,
              "name": "Remapped",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 837,
              "end": 904,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 840,
                "end": 855,
                "name": {
                  "type": "Identifier",
                  "start": 840,
                  "end": 841,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 845,
                  "end": 855,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 851,
                    "end": 855,
                    "typeName": {
                      "type": "Identifier",
                      "start": 851,
                      "end": 855,
                      "name": "Orig",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": {
                "type": "TSConditionalType",
                "start": 859,
                "end": 896,
                "checkType": {
                  "type": "TSTypeLiteral",
                  "start": 859,
                  "end": 861,
                  "members": []
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 870,
                  "end": 884,
                  "typeName": {
                    "type": "Identifier",
                    "start": 870,
                    "end": 876,
                    "name": "Record",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 876,
                    "end": 884,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 877,
                        "end": 878,
                        "typeName": {
                          "type": "Identifier",
                          "start": 877,
                          "end": 878,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 880,
                        "end": 883
                      }
                    ]
                  }
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "start": 887,
                  "end": 892
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "start": 895,
                  "end": 896,
                  "typeName": {
                    "type": "Identifier",
                    "start": 895,
                    "end": 896,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 899,
                "end": 902
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 845,
                "end": 855,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 851,
                  "end": 855,
                  "typeName": {
                    "type": "Identifier",
                    "start": 851,
                    "end": 855,
                    "name": "Orig",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 840,
                "end": 841,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1027,
            "end": 1054,
            "id": {
              "type": "Identifier",
              "start": 1032,
              "end": 1036,
              "name": "Oops",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 1039,
              "end": 1053,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1045,
                "end": 1053,
                "typeName": {
                  "type": "Identifier",
                  "start": 1045,
                  "end": 1053,
                  "name": "Remapped",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1059,
            "end": 1071,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1063,
                "end": 1070,
                "id": {
                  "type": "Identifier",
                  "start": 1063,
                  "end": 1070,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1064,
                    "end": 1070,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1066,
                      "end": 1070,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1066,
                        "end": 1070,
                        "name": "Oops",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1076,
            "end": 1084,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1076,
              "end": 1083,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1076,
                "end": 1077,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1080,
                "end": 1083,
                "name": "sym",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1089,
            "end": 1099,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1089,
              "end": 1098,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1089,
                "end": 1090,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1093,
                "end": 1098,
                "value": "str",
                "raw": "\"str\""
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 594,
        "end": 597,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 595,
            "end": 596,
            "name": {
              "type": "Identifier",
              "start": 595,
              "end": 596,
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1210,
      "end": 1892,
      "id": {
        "type": "Identifier",
        "start": 1219,
        "end": 1220,
        "name": "g",
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
        "start": 1226,
        "end": 1892,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1232,
            "end": 1291,
            "id": {
              "type": "Identifier",
              "start": 1237,
              "end": 1241,
              "name": "Orig",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 1244,
              "end": 1290,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 1244,
                  "end": 1286,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 1246,
                      "end": 1263,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 1247,
                          "end": 1256,
                          "name": "k",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1248,
                            "end": 1256,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1250,
                              "end": 1256
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1257,
                        "end": 1262,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1259,
                          "end": 1262
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 1264,
                      "end": 1273,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1264,
                        "end": 1267,
                        "name": "str",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1267,
                        "end": 1272,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1269,
                          "end": 1272
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 1274,
                      "end": 1284,
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1275,
                        "end": 1278,
                        "name": "sym",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1279,
                        "end": 1284,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1281,
                          "end": 1284
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 1289,
                  "end": 1290,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1289,
                    "end": 1290,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1301,
            "end": 1324,
            "id": {
              "type": "Identifier",
              "start": 1306,
              "end": 1310,
              "name": "Okay",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 1313,
              "end": 1323,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1319,
                "end": 1323,
                "typeName": {
                  "type": "Identifier",
                  "start": 1319,
                  "end": 1323,
                  "name": "Orig",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1329,
            "end": 1341,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1333,
                "end": 1340,
                "id": {
                  "type": "Identifier",
                  "start": 1333,
                  "end": 1340,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1334,
                    "end": 1340,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1336,
                      "end": 1340,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1336,
                        "end": 1340,
                        "name": "Okay",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1346,
            "end": 1356,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1346,
              "end": 1355,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1346,
                "end": 1347,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1350,
                "end": 1355,
                "value": "str",
                "raw": "\"str\""
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1361,
            "end": 1369,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1361,
              "end": 1368,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1361,
                "end": 1362,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1365,
                "end": 1368,
                "name": "sym",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1374,
            "end": 1389,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1374,
              "end": 1388,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1374,
                "end": 1375,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1378,
                "end": 1388,
                "value": "whatever",
                "raw": "\"whatever\""
              }
            },
            "directive": null
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1443,
            "end": 1520,
            "id": {
              "type": "Identifier",
              "start": 1448,
              "end": 1456,
              "name": "NonIndex",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1456,
              "end": 1479,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1457,
                  "end": 1478,
                  "name": {
                    "type": "Identifier",
                    "start": 1457,
                    "end": 1458,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1467,
                    "end": 1478,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1467,
                      "end": 1478,
                      "name": "PropertyKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 1482,
              "end": 1519,
              "checkType": {
                "type": "TSTypeLiteral",
                "start": 1482,
                "end": 1484,
                "members": []
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 1493,
                "end": 1507,
                "typeName": {
                  "type": "Identifier",
                  "start": 1493,
                  "end": 1499,
                  "name": "Record",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1499,
                  "end": 1507,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1500,
                      "end": 1501,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1500,
                        "end": 1501,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 1503,
                      "end": 1506
                    }
                  ]
                }
              },
              "trueType": {
                "type": "TSNeverKeyword",
                "start": 1510,
                "end": 1515
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 1518,
                "end": 1519,
                "typeName": {
                  "type": "Identifier",
                  "start": 1518,
                  "end": 1519,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1525,
            "end": 1616,
            "id": {
              "type": "Identifier",
              "start": 1530,
              "end": 1550,
              "name": "DistributiveNonIndex",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1550,
              "end": 1573,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1551,
                  "end": 1572,
                  "name": {
                    "type": "Identifier",
                    "start": 1551,
                    "end": 1552,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1561,
                    "end": 1572,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1561,
                      "end": 1572,
                      "name": "PropertyKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 1576,
              "end": 1615,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1576,
                "end": 1577,
                "typeName": {
                  "type": "Identifier",
                  "start": 1576,
                  "end": 1577,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSUnknownKeyword",
                "start": 1586,
                "end": 1593
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 1596,
                "end": 1607,
                "typeName": {
                  "type": "Identifier",
                  "start": 1596,
                  "end": 1604,
                  "name": "NonIndex",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1604,
                  "end": 1607,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1605,
                      "end": 1606,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1605,
                        "end": 1606,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 1610,
                "end": 1615
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1626,
            "end": 1695,
            "id": {
              "type": "Identifier",
              "start": 1631,
              "end": 1639,
              "name": "Remapped",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1642,
              "end": 1695,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 1645,
                "end": 1660,
                "name": {
                  "type": "Identifier",
                  "start": 1645,
                  "end": 1646,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 1650,
                  "end": 1660,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1656,
                    "end": 1660,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1656,
                      "end": 1660,
                      "name": "Orig",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": {
                "type": "TSTypeReference",
                "start": 1664,
                "end": 1687,
                "typeName": {
                  "type": "Identifier",
                  "start": 1664,
                  "end": 1684,
                  "name": "DistributiveNonIndex",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1684,
                  "end": 1687,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1685,
                      "end": 1686,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1685,
                        "end": 1686,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1690,
                "end": 1693
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1650,
                "end": 1660,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1656,
                  "end": 1660,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1656,
                    "end": 1660,
                    "name": "Orig",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 1645,
                "end": 1646,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1818,
            "end": 1845,
            "id": {
              "type": "Identifier",
              "start": 1823,
              "end": 1827,
              "name": "Oops",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 1830,
              "end": 1844,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1836,
                "end": 1844,
                "typeName": {
                  "type": "Identifier",
                  "start": 1836,
                  "end": 1844,
                  "name": "Remapped",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1850,
            "end": 1862,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1854,
                "end": 1861,
                "id": {
                  "type": "Identifier",
                  "start": 1854,
                  "end": 1861,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1855,
                    "end": 1861,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1857,
                      "end": 1861,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1857,
                        "end": 1861,
                        "name": "Oops",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1867,
            "end": 1875,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1867,
              "end": 1874,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1867,
                "end": 1868,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1871,
                "end": 1874,
                "name": "sym",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1880,
            "end": 1890,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1880,
              "end": 1889,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1880,
                "end": 1881,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1884,
                "end": 1889,
                "value": "str",
                "raw": "\"str\""
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1220,
        "end": 1223,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1221,
            "end": 1222,
            "name": {
              "type": "Identifier",
              "start": 1221,
              "end": 1222,
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
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1894,
      "end": 1904,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
