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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 12,
            "end": 22,
            "arguments": [
              {
                "type": "Literal",
                "start": 19,
                "end": 21,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 18,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 23,
      "end": 77,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 32,
        "decorators": [],
        "name": "Orig",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 35,
        "end": 77,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 37,
            "end": 54,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 38,
                "end": 47,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 39,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 41,
                    "end": 47
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 53,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 50,
                "end": 53
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 64,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 63,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 60,
                "end": 63
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 65,
            "end": 75,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 69,
              "decorators": [],
              "name": "sym",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 75,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 72,
                "end": 75
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 79,
      "end": 117,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 88,
        "decorators": [],
        "name": "Okay",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 91,
        "end": 117,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 109,
                  "decorators": [],
                  "name": "Orig",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "TSNeverKeyword",
              "start": 111,
              "end": 116
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 91,
          "end": 98,
          "decorators": [],
          "name": "Exclude",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 163,
      "end": 246,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 176,
        "decorators": [],
        "name": "Remapped",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 179,
        "end": 246,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 187,
          "end": 197,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 193,
            "end": 197,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 193,
              "end": 197,
              "decorators": [],
              "name": "Orig",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 182,
          "end": 183,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
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
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 218,
              "end": 226,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 219,
                  "end": 220,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 220,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 222,
                  "end": 225
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 212,
              "end": 218,
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 237,
            "end": 238,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "start": 229,
            "end": 234
          }
        },
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 241,
          "end": 244
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 341,
      "end": 383,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 346,
        "end": 350,
        "decorators": [],
        "name": "Oops",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 353,
        "end": 383,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 375,
                  "decorators": [],
                  "name": "Remapped",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "TSNeverKeyword",
              "start": 377,
              "end": 382
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 353,
          "end": 360,
          "decorators": [],
          "name": "Exclude",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 403,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 397,
              "end": 403,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 399,
                "end": 403,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 399,
                  "end": 403,
                  "decorators": [],
                  "name": "Oops",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 405,
      "end": 413,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 405,
        "end": 412,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 405,
          "end": 406,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 409,
          "end": 412,
          "decorators": [],
          "name": "sym",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 414,
      "end": 424,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 414,
        "end": 423,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 414,
          "end": 415,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 418,
          "end": 423,
          "raw": "\"str\"",
          "value": "str"
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 584,
      "end": 1101,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 600,
        "end": 1101,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 606,
            "end": 665,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 611,
              "end": 615,
              "decorators": [],
              "name": "Orig",
              "optional": false,
              "typeAnnotation": null
            },
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
                      "accessibility": null,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 621,
                          "end": 630,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 622,
                            "end": 630,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 624,
                              "end": 630
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 631,
                        "end": 636,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 633,
                          "end": 636
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 638,
                      "end": 647,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 638,
                        "end": 641,
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 641,
                        "end": 646,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 643,
                          "end": 646
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 648,
                      "end": 658,
                      "accessibility": null,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 649,
                        "end": 652,
                        "decorators": [],
                        "name": "sym",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 653,
                        "end": 658,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 655,
                          "end": 658
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 663,
                  "end": 664,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 663,
                    "end": 664,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeParameters": null
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 675,
            "end": 698,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 680,
              "end": 684,
              "decorators": [],
              "name": "Okay",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 687,
              "end": 697,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 693,
                "end": 697,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 697,
                  "decorators": [],
                  "name": "Orig",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 707,
                  "end": 714,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 708,
                    "end": 714,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 710,
                      "end": 714,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 710,
                        "end": 714,
                        "decorators": [],
                        "name": "Okay",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 720,
            "end": 730,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 720,
              "end": 729,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 720,
                "end": 721,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 724,
                "end": 729,
                "raw": "\"str\"",
                "value": "str"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 735,
            "end": 743,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 735,
              "end": 742,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 735,
                "end": 736,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 739,
                "end": 742,
                "decorators": [],
                "name": "sym",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 748,
            "end": 763,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 748,
              "end": 762,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 748,
                "end": 749,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 752,
                "end": 762,
                "raw": "\"whatever\"",
                "value": "whatever"
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 821,
            "end": 904,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 826,
              "end": 834,
              "decorators": [],
              "name": "Remapped",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 837,
              "end": 904,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 845,
                "end": 855,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 851,
                  "end": 855,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 851,
                    "end": 855,
                    "decorators": [],
                    "name": "Orig",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 840,
                "end": 841,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
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
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 876,
                    "end": 884,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 877,
                        "end": 878,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 877,
                          "end": 878,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 880,
                        "end": 883
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 870,
                    "end": 876,
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "start": 895,
                  "end": 896,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 895,
                    "end": 896,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "start": 887,
                  "end": 892
                }
              },
              "optional": null,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 899,
                "end": 902
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1027,
            "end": 1054,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 1032,
              "end": 1036,
              "decorators": [],
              "name": "Oops",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 1039,
              "end": 1053,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1045,
                "end": 1053,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1045,
                  "end": 1053,
                  "decorators": [],
                  "name": "Remapped",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1063,
                  "end": 1070,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1064,
                    "end": 1070,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1066,
                      "end": 1070,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1066,
                        "end": 1070,
                        "decorators": [],
                        "name": "Oops",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1076,
            "end": 1084,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1076,
              "end": 1083,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1076,
                "end": 1077,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1080,
                "end": 1083,
                "decorators": [],
                "name": "sym",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1089,
            "end": 1099,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1089,
              "end": 1098,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1089,
                "end": 1090,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1093,
                "end": 1098,
                "raw": "\"str\"",
                "value": "str"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 593,
        "end": 594,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 594,
        "end": 597,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 595,
            "end": 596,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 595,
              "end": 596,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1210,
      "end": 1892,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1226,
        "end": 1892,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1232,
            "end": 1291,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 1237,
              "end": 1241,
              "decorators": [],
              "name": "Orig",
              "optional": false,
              "typeAnnotation": null
            },
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
                      "accessibility": null,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 1247,
                          "end": 1256,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1248,
                            "end": 1256,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1250,
                              "end": 1256
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1257,
                        "end": 1262,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1259,
                          "end": 1262
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 1264,
                      "end": 1273,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1264,
                        "end": 1267,
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1267,
                        "end": 1272,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1269,
                          "end": 1272
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 1274,
                      "end": 1284,
                      "accessibility": null,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 1275,
                        "end": 1278,
                        "decorators": [],
                        "name": "sym",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1279,
                        "end": 1284,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1281,
                          "end": 1284
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 1289,
                  "end": 1290,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1289,
                    "end": 1290,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeParameters": null
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1301,
            "end": 1324,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 1306,
              "end": 1310,
              "decorators": [],
              "name": "Okay",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 1313,
              "end": 1323,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1319,
                "end": 1323,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1319,
                  "end": 1323,
                  "decorators": [],
                  "name": "Orig",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1333,
                  "end": 1340,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1334,
                    "end": 1340,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1336,
                      "end": 1340,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1336,
                        "end": 1340,
                        "decorators": [],
                        "name": "Okay",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1346,
            "end": 1356,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1346,
              "end": 1355,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1346,
                "end": 1347,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1350,
                "end": 1355,
                "raw": "\"str\"",
                "value": "str"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1361,
            "end": 1369,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1361,
              "end": 1368,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1361,
                "end": 1362,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1365,
                "end": 1368,
                "decorators": [],
                "name": "sym",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1374,
            "end": 1389,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1374,
              "end": 1388,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1374,
                "end": 1375,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1378,
                "end": 1388,
                "raw": "\"whatever\"",
                "value": "whatever"
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1443,
            "end": 1520,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 1448,
              "end": 1456,
              "decorators": [],
              "name": "NonIndex",
              "optional": false,
              "typeAnnotation": null
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
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1499,
                  "end": 1507,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1500,
                      "end": 1501,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1500,
                        "end": 1501,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 1503,
                      "end": 1506
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1493,
                  "end": 1499,
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 1518,
                "end": 1519,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1518,
                  "end": 1519,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "trueType": {
                "type": "TSNeverKeyword",
                "start": 1510,
                "end": 1515
              }
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
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1467,
                    "end": 1478,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1467,
                      "end": 1478,
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1457,
                    "end": 1458,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1525,
            "end": 1616,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 1530,
              "end": 1550,
              "decorators": [],
              "name": "DistributiveNonIndex",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 1576,
              "end": 1615,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1576,
                "end": 1577,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1576,
                  "end": 1577,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "extendsType": {
                "type": "TSUnknownKeyword",
                "start": 1586,
                "end": 1593
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 1610,
                "end": 1615
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 1596,
                "end": 1607,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1604,
                  "end": 1607,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1605,
                      "end": 1606,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1605,
                        "end": 1606,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1596,
                  "end": 1604,
                  "decorators": [],
                  "name": "NonIndex",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
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
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1561,
                    "end": 1572,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1561,
                      "end": 1572,
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1551,
                    "end": 1552,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1626,
            "end": 1695,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 1631,
              "end": 1639,
              "decorators": [],
              "name": "Remapped",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1642,
              "end": 1695,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1650,
                "end": 1660,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1656,
                  "end": 1660,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1656,
                    "end": 1660,
                    "decorators": [],
                    "name": "Orig",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 1645,
                "end": 1646,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": {
                "type": "TSTypeReference",
                "start": 1664,
                "end": 1687,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1684,
                  "end": 1687,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1685,
                      "end": 1686,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1685,
                        "end": 1686,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1664,
                  "end": 1684,
                  "decorators": [],
                  "name": "DistributiveNonIndex",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": null,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1690,
                "end": 1693
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1818,
            "end": 1845,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 1823,
              "end": 1827,
              "decorators": [],
              "name": "Oops",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 1830,
              "end": 1844,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1836,
                "end": 1844,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1836,
                  "end": 1844,
                  "decorators": [],
                  "name": "Remapped",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1854,
                  "end": 1861,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1855,
                    "end": 1861,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1857,
                      "end": 1861,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1857,
                        "end": 1861,
                        "decorators": [],
                        "name": "Oops",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1867,
            "end": 1875,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1867,
              "end": 1874,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1867,
                "end": 1868,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1871,
                "end": 1874,
                "decorators": [],
                "name": "sym",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1880,
            "end": 1890,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1880,
              "end": 1889,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1880,
                "end": 1881,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1884,
                "end": 1889,
                "raw": "\"str\"",
                "value": "str"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1219,
        "end": 1220,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1220,
        "end": 1223,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1221,
            "end": 1222,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1221,
              "end": 1222,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1894,
      "end": 1904,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
