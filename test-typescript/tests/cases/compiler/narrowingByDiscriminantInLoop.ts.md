__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 1712,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 21,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 40,
        "name": "IDLMemberTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 43,
        "end": 83,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 43,
            "end": 62,
            "typeName": {
              "type": "Identifier",
              "start": 43,
              "end": 62,
              "name": "OperationMemberType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 65,
            "end": 83,
            "typeName": {
              "type": "Identifier",
              "start": 65,
              "end": 83,
              "name": "ConstantMemberType",
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
      "type": "TSInterfaceDeclaration",
      "start": 86,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 114,
        "name": "IDLTypeDescription",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 115,
        "end": 138,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 121,
            "end": 136,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 127,
              "name": "origin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 135,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 129,
                "end": 135
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
      "type": "TSInterfaceDeclaration",
      "start": 140,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 163,
        "name": "InterfaceType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 164,
        "end": 198,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 170,
            "end": 196,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 170,
              "end": 177,
              "name": "members",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 195,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 179,
                "end": 195,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 179,
                  "end": 193,
                  "typeName": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 193,
                    "name": "IDLMemberTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
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
      "type": "TSInterfaceDeclaration",
      "start": 200,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 229,
        "name": "OperationMemberType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 230,
        "end": 289,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 236,
            "end": 254,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 240,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 253,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 242,
                "end": 253,
                "literal": {
                  "type": "Literal",
                  "start": 242,
                  "end": 253,
                  "value": "operation",
                  "raw": "\"operation\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 259,
            "end": 287,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 259,
              "end": 266,
              "name": "idlType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 266,
              "end": 286,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 268,
                "end": 286,
                "typeName": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 286,
                  "name": "IDLTypeDescription",
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
      "type": "TSInterfaceDeclaration",
      "start": 291,
      "end": 363,
      "id": {
        "type": "Identifier",
        "start": 301,
        "end": 319,
        "name": "ConstantMemberType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 320,
        "end": 363,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 326,
            "end": 340,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 326,
              "end": 330,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 330,
              "end": 339,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 332,
                "end": 339,
                "literal": {
                  "type": "Literal",
                  "start": 332,
                  "end": 339,
                  "value": "const",
                  "raw": "\"const\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 345,
            "end": 361,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 345,
              "end": 352,
              "name": "idlType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 360,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 354,
                "end": 360
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
      "type": "FunctionDeclaration",
      "start": 365,
      "end": 745,
      "id": {
        "type": "Identifier",
        "start": 374,
        "end": 389,
        "name": "insertInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 390,
          "end": 417,
          "name": "callbackType",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 402,
            "end": 417,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 404,
              "end": 417,
              "typeName": {
                "type": "Identifier",
                "start": 404,
                "end": 417,
                "name": "InterfaceType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 419,
        "end": 745,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 425,
            "end": 743,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 430,
              "end": 446,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 436,
                  "end": 446,
                  "id": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 446,
                    "name": "memberType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "MemberExpression",
              "start": 450,
              "end": 470,
              "object": {
                "type": "Identifier",
                "start": 450,
                "end": 462,
                "name": "callbackType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 463,
                "end": 470,
                "name": "members",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 472,
              "end": 743,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 482,
                  "end": 737,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 486,
                    "end": 513,
                    "left": {
                      "type": "MemberExpression",
                      "start": 486,
                      "end": 501,
                      "object": {
                        "type": "Identifier",
                        "start": 486,
                        "end": 496,
                        "name": "memberType",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 497,
                        "end": 501,
                        "name": "type",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 506,
                      "end": 513,
                      "value": "const",
                      "raw": "\"const\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 515,
                    "end": 569,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 529,
                        "end": 548,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 529,
                          "end": 547,
                          "object": {
                            "type": "Identifier",
                            "start": 529,
                            "end": 539,
                            "name": "memberType",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 540,
                            "end": 547,
                            "name": "idlType",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "start": 583,
                    "end": 737,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 587,
                      "end": 618,
                      "left": {
                        "type": "MemberExpression",
                        "start": 587,
                        "end": 602,
                        "object": {
                          "type": "Identifier",
                          "start": 587,
                          "end": 597,
                          "name": "memberType",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 598,
                          "end": 602,
                          "name": "type",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 607,
                        "end": 618,
                        "value": "operation",
                        "raw": "\"operation\""
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 620,
                      "end": 737,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 634,
                          "end": 660,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 634,
                            "end": 659,
                            "object": {
                              "type": "MemberExpression",
                              "start": 634,
                              "end": 652,
                              "object": {
                                "type": "Identifier",
                                "start": 634,
                                "end": 644,
                                "name": "memberType",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 645,
                                "end": 652,
                                "name": "idlType",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 653,
                              "end": 659,
                              "name": "origin",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 684,
                          "end": 727,
                          "expression": {
                            "type": "TSAsExpression",
                            "start": 685,
                            "end": 725,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 685,
                              "end": 703,
                              "object": {
                                "type": "Identifier",
                                "start": 685,
                                "end": 695,
                                "name": "memberType",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 696,
                                "end": 703,
                                "name": "idlType",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 707,
                              "end": 725,
                              "typeName": {
                                "type": "Identifier",
                                "start": 707,
                                "end": 725,
                                "name": "IDLTypeDescription",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 747,
      "end": 971,
      "id": {
        "type": "Identifier",
        "start": 756,
        "end": 772,
        "name": "insertInterface2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 773,
          "end": 800,
          "name": "callbackType",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 785,
            "end": 800,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 787,
              "end": 800,
              "typeName": {
                "type": "Identifier",
                "start": 787,
                "end": 800,
                "name": "InterfaceType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 802,
        "end": 971,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 808,
            "end": 969,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 813,
              "end": 829,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 819,
                  "end": 829,
                  "id": {
                    "type": "Identifier",
                    "start": 819,
                    "end": 829,
                    "name": "memberType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "MemberExpression",
              "start": 833,
              "end": 853,
              "object": {
                "type": "Identifier",
                "start": 833,
                "end": 845,
                "name": "callbackType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 846,
                "end": 853,
                "name": "members",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 855,
              "end": 969,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 865,
                  "end": 963,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 869,
                    "end": 900,
                    "left": {
                      "type": "MemberExpression",
                      "start": 869,
                      "end": 884,
                      "object": {
                        "type": "Identifier",
                        "start": 869,
                        "end": 879,
                        "name": "memberType",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 880,
                        "end": 884,
                        "name": "type",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 889,
                      "end": 900,
                      "value": "operation",
                      "raw": "\"operation\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 902,
                    "end": 963,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 916,
                        "end": 942,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 916,
                          "end": 941,
                          "object": {
                            "type": "MemberExpression",
                            "start": 916,
                            "end": 934,
                            "object": {
                              "type": "Identifier",
                              "start": 916,
                              "end": 926,
                              "name": "memberType",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 927,
                              "end": 934,
                              "name": "idlType",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 935,
                            "end": 941,
                            "name": "origin",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 973,
      "end": 1201,
      "id": {
        "type": "Identifier",
        "start": 982,
        "end": 985,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 986,
          "end": 1012,
          "name": "memberType",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 996,
            "end": 1012,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 998,
              "end": 1012,
              "typeName": {
                "type": "Identifier",
                "start": 998,
                "end": 1012,
                "name": "IDLMemberTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1014,
        "end": 1201,
        "body": [
          {
            "type": "IfStatement",
            "start": 1020,
            "end": 1199,
            "test": {
              "type": "BinaryExpression",
              "start": 1024,
              "end": 1051,
              "left": {
                "type": "MemberExpression",
                "start": 1024,
                "end": 1039,
                "object": {
                  "type": "Identifier",
                  "start": 1024,
                  "end": 1034,
                  "name": "memberType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1035,
                  "end": 1039,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1044,
                "end": 1051,
                "value": "const",
                "raw": "\"const\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1053,
              "end": 1099,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1063,
                  "end": 1082,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1063,
                    "end": 1081,
                    "object": {
                      "type": "Identifier",
                      "start": 1063,
                      "end": 1073,
                      "name": "memberType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1074,
                      "end": 1081,
                      "name": "idlType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 1109,
              "end": 1199,
              "test": {
                "type": "BinaryExpression",
                "start": 1113,
                "end": 1144,
                "left": {
                  "type": "MemberExpression",
                  "start": 1113,
                  "end": 1128,
                  "object": {
                    "type": "Identifier",
                    "start": 1113,
                    "end": 1123,
                    "name": "memberType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1124,
                    "end": 1128,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1133,
                  "end": 1144,
                  "value": "operation",
                  "raw": "\"operation\""
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 1146,
                "end": 1199,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1156,
                    "end": 1182,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1156,
                      "end": 1181,
                      "object": {
                        "type": "MemberExpression",
                        "start": 1156,
                        "end": 1174,
                        "object": {
                          "type": "Identifier",
                          "start": 1156,
                          "end": 1166,
                          "name": "memberType",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1167,
                          "end": 1174,
                          "name": "idlType",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1175,
                        "end": 1181,
                        "name": "origin",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1240,
      "end": 1297,
      "id": {
        "type": "Identifier",
        "start": 1250,
        "end": 1251,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1252,
        "end": 1297,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1258,
            "end": 1269,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1258,
              "end": 1262,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1262,
              "end": 1268,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1264,
                "end": 1268,
                "literal": {
                  "type": "Literal",
                  "start": 1264,
                  "end": 1268,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1274,
            "end": 1295,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1274,
              "end": 1278,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1278,
              "end": 1294,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1280,
                "end": 1294,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1282,
                    "end": 1292,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1282,
                      "end": 1283,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1283,
                      "end": 1291,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1285,
                        "end": 1291
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "type": "TSInterfaceDeclaration",
      "start": 1299,
      "end": 1356,
      "id": {
        "type": "Identifier",
        "start": 1309,
        "end": 1310,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1311,
        "end": 1356,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1317,
            "end": 1329,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1317,
              "end": 1321,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1321,
              "end": 1328,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1323,
                "end": 1328,
                "literal": {
                  "type": "Literal",
                  "start": 1323,
                  "end": 1328,
                  "value": false,
                  "raw": "false"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1334,
            "end": 1354,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1334,
              "end": 1338,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1338,
              "end": 1354,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1340,
                "end": 1354,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1342,
                    "end": 1352,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1342,
                      "end": 1343,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1343,
                      "end": 1351,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1345,
                        "end": 1351
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "type": "FunctionDeclaration",
      "start": 1358,
      "end": 1551,
      "id": {
        "type": "Identifier",
        "start": 1367,
        "end": 1369,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1370,
          "end": 1378,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1371,
            "end": 1378,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1373,
              "end": 1378,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1373,
                  "end": 1374,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1373,
                    "end": 1374,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1377,
                  "end": 1378,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1377,
                    "end": 1378,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1380,
        "end": 1551,
        "body": [
          {
            "type": "WhileStatement",
            "start": 1386,
            "end": 1549,
            "test": {
              "type": "Literal",
              "start": 1393,
              "end": 1397,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "start": 1399,
              "end": 1549,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1409,
                  "end": 1416,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1409,
                    "end": 1415,
                    "object": {
                      "type": "Identifier",
                      "start": 1409,
                      "end": 1410,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1411,
                      "end": 1415,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 1425,
                  "end": 1479,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1429,
                    "end": 1444,
                    "left": {
                      "type": "MemberExpression",
                      "start": 1429,
                      "end": 1435,
                      "object": {
                        "type": "Identifier",
                        "start": 1429,
                        "end": 1430,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1431,
                        "end": 1435,
                        "name": "kind",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1440,
                      "end": 1444,
                      "value": true,
                      "raw": "true"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1446,
                    "end": 1479,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1460,
                        "end": 1469,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1460,
                          "end": 1468,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1460,
                            "end": 1466,
                            "object": {
                              "type": "Identifier",
                              "start": 1460,
                              "end": 1461,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1462,
                              "end": 1466,
                              "name": "prop",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1467,
                            "end": 1468,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "start": 1488,
                  "end": 1543,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1492,
                    "end": 1508,
                    "left": {
                      "type": "MemberExpression",
                      "start": 1492,
                      "end": 1498,
                      "object": {
                        "type": "Identifier",
                        "start": 1492,
                        "end": 1493,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1494,
                        "end": 1498,
                        "name": "kind",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1503,
                      "end": 1508,
                      "value": false,
                      "raw": "false"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1510,
                    "end": 1543,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1524,
                        "end": 1533,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1524,
                          "end": 1532,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1524,
                            "end": 1530,
                            "object": {
                              "type": "Identifier",
                              "start": 1524,
                              "end": 1525,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1526,
                              "end": 1530,
                              "name": "prop",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1531,
                            "end": 1532,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1553,
      "end": 1712,
      "id": {
        "type": "Identifier",
        "start": 1562,
        "end": 1564,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1565,
          "end": 1573,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1566,
            "end": 1573,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1568,
              "end": 1573,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1568,
                  "end": 1569,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1568,
                    "end": 1569,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1572,
                  "end": 1573,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1572,
                    "end": 1573,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1575,
        "end": 1712,
        "body": [
          {
            "type": "WhileStatement",
            "start": 1581,
            "end": 1710,
            "test": {
              "type": "Literal",
              "start": 1588,
              "end": 1592,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "start": 1594,
              "end": 1710,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1604,
                  "end": 1649,
                  "test": {
                    "type": "MemberExpression",
                    "start": 1608,
                    "end": 1614,
                    "object": {
                      "type": "Identifier",
                      "start": 1608,
                      "end": 1609,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1610,
                      "end": 1614,
                      "name": "kind",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1616,
                    "end": 1649,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1630,
                        "end": 1639,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1630,
                          "end": 1638,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1630,
                            "end": 1636,
                            "object": {
                              "type": "Identifier",
                              "start": 1630,
                              "end": 1631,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1632,
                              "end": 1636,
                              "name": "prop",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1637,
                            "end": 1638,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "start": 1658,
                  "end": 1704,
                  "test": {
                    "type": "UnaryExpression",
                    "start": 1662,
                    "end": 1669,
                    "operator": "!",
                    "prefix": true,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1663,
                      "end": 1669,
                      "object": {
                        "type": "Identifier",
                        "start": 1663,
                        "end": 1664,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1665,
                        "end": 1669,
                        "name": "kind",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1671,
                    "end": 1704,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1685,
                        "end": 1694,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1685,
                          "end": 1693,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1685,
                            "end": 1691,
                            "object": {
                              "type": "Identifier",
                              "start": 1685,
                              "end": 1686,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1687,
                              "end": 1691,
                              "name": "prop",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1692,
                            "end": 1693,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
