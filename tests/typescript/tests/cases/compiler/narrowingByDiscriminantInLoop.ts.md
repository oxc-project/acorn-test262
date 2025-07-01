__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IDLMemberTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 40
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "OperationMemberType",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 62
            },
            "typeArguments": null,
            "start": 43,
            "end": 62
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConstantMemberType",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 83
            },
            "typeArguments": null,
            "start": 65,
            "end": 83
          }
        ],
        "start": 43,
        "end": 83
      },
      "declare": false,
      "start": 21,
      "end": 84
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IDLTypeDescription",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 114
      },
      "typeParameters": null,
      "extends": [],
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
              "name": "origin",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 127
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 129,
                "end": 135
              },
              "start": 127,
              "end": 135
            },
            "accessibility": null,
            "static": false,
            "start": 121,
            "end": 136
          }
        ],
        "start": 115,
        "end": 138
      },
      "declare": false,
      "start": 86,
      "end": 138
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InterfaceType",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 163
      },
      "typeParameters": null,
      "extends": [],
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
              "name": "members",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IDLMemberTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 193
                  },
                  "typeArguments": null,
                  "start": 179,
                  "end": 193
                },
                "start": 179,
                "end": 195
              },
              "start": 177,
              "end": 195
            },
            "accessibility": null,
            "static": false,
            "start": 170,
            "end": 196
          }
        ],
        "start": 164,
        "end": 198
      },
      "declare": false,
      "start": 140,
      "end": 198
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OperationMemberType",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 229
      },
      "typeParameters": null,
      "extends": [],
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "operation",
                  "raw": "\"operation\"",
                  "start": 242,
                  "end": 253
                },
                "start": 242,
                "end": 253
              },
              "start": 240,
              "end": 253
            },
            "accessibility": null,
            "static": false,
            "start": 236,
            "end": 254
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "idlType",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 266
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IDLTypeDescription",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 286
                },
                "typeArguments": null,
                "start": 268,
                "end": 286
              },
              "start": 266,
              "end": 286
            },
            "accessibility": null,
            "static": false,
            "start": 259,
            "end": 287
          }
        ],
        "start": 230,
        "end": 289
      },
      "declare": false,
      "start": 200,
      "end": 289
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConstantMemberType",
        "optional": false,
        "typeAnnotation": null,
        "start": 301,
        "end": 319
      },
      "typeParameters": null,
      "extends": [],
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 326,
              "end": 330
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "const",
                  "raw": "\"const\"",
                  "start": 332,
                  "end": 339
                },
                "start": 332,
                "end": 339
              },
              "start": 330,
              "end": 339
            },
            "accessibility": null,
            "static": false,
            "start": 326,
            "end": 340
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "idlType",
              "optional": false,
              "typeAnnotation": null,
              "start": 345,
              "end": 352
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 354,
                "end": 360
              },
              "start": 352,
              "end": 360
            },
            "accessibility": null,
            "static": false,
            "start": 345,
            "end": 361
          }
        ],
        "start": 320,
        "end": 363
      },
      "declare": false,
      "start": 291,
      "end": 363
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "insertInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 374,
        "end": 389
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callbackType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InterfaceType",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 417
              },
              "typeArguments": null,
              "start": 404,
              "end": 417
            },
            "start": 402,
            "end": 417
          },
          "start": 390,
          "end": 417
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "memberType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 446
                  },
                  "init": null,
                  "definite": false,
                  "start": 436,
                  "end": 446
                }
              ],
              "declare": false,
              "start": 430,
              "end": 446
            },
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "callbackType",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 462
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "members",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 470
              },
              "optional": false,
              "computed": false,
              "start": 450,
              "end": 470
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "memberType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 486,
                        "end": 496
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 497,
                        "end": 501
                      },
                      "optional": false,
                      "computed": false,
                      "start": 486,
                      "end": 501
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "const",
                      "raw": "\"const\"",
                      "start": 506,
                      "end": 513
                    },
                    "start": 486,
                    "end": 513
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "memberType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 529,
                            "end": 539
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "idlType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 540,
                            "end": 547
                          },
                          "optional": false,
                          "computed": false,
                          "start": 529,
                          "end": 547
                        },
                        "directive": null,
                        "start": 529,
                        "end": 548
                      }
                    ],
                    "start": 515,
                    "end": 569
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "memberType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 587,
                          "end": 597
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 598,
                          "end": 602
                        },
                        "optional": false,
                        "computed": false,
                        "start": 587,
                        "end": 602
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "operation",
                        "raw": "\"operation\"",
                        "start": 607,
                        "end": 618
                      },
                      "start": 587,
                      "end": 618
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "memberType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 634,
                                "end": 644
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "idlType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 645,
                                "end": 652
                              },
                              "optional": false,
                              "computed": false,
                              "start": 634,
                              "end": 652
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "origin",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 653,
                              "end": 659
                            },
                            "optional": false,
                            "computed": false,
                            "start": 634,
                            "end": 659
                          },
                          "directive": null,
                          "start": 634,
                          "end": 660
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "memberType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 685,
                                "end": 695
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "idlType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 696,
                                "end": 703
                              },
                              "optional": false,
                              "computed": false,
                              "start": 685,
                              "end": 703
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IDLTypeDescription",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 707,
                                "end": 725
                              },
                              "typeArguments": null,
                              "start": 707,
                              "end": 725
                            },
                            "start": 685,
                            "end": 725
                          },
                          "directive": null,
                          "start": 684,
                          "end": 727
                        }
                      ],
                      "start": 620,
                      "end": 737
                    },
                    "alternate": null,
                    "start": 583,
                    "end": 737
                  },
                  "start": 482,
                  "end": 737
                }
              ],
              "start": 472,
              "end": 743
            },
            "start": 425,
            "end": 743
          }
        ],
        "start": 419,
        "end": 745
      },
      "expression": false,
      "start": 365,
      "end": 745
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "insertInterface2",
        "optional": false,
        "typeAnnotation": null,
        "start": 756,
        "end": 772
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callbackType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InterfaceType",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 800
              },
              "typeArguments": null,
              "start": 787,
              "end": 800
            },
            "start": 785,
            "end": 800
          },
          "start": 773,
          "end": 800
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "memberType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 819,
                    "end": 829
                  },
                  "init": null,
                  "definite": false,
                  "start": 819,
                  "end": 829
                }
              ],
              "declare": false,
              "start": 813,
              "end": 829
            },
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "callbackType",
                "optional": false,
                "typeAnnotation": null,
                "start": 833,
                "end": 845
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "members",
                "optional": false,
                "typeAnnotation": null,
                "start": 846,
                "end": 853
              },
              "optional": false,
              "computed": false,
              "start": 833,
              "end": 853
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "memberType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 869,
                        "end": 879
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 880,
                        "end": 884
                      },
                      "optional": false,
                      "computed": false,
                      "start": 869,
                      "end": 884
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "operation",
                      "raw": "\"operation\"",
                      "start": 889,
                      "end": 900
                    },
                    "start": 869,
                    "end": 900
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "memberType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 916,
                              "end": 926
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "idlType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 927,
                              "end": 934
                            },
                            "optional": false,
                            "computed": false,
                            "start": 916,
                            "end": 934
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "origin",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 935,
                            "end": 941
                          },
                          "optional": false,
                          "computed": false,
                          "start": 916,
                          "end": 941
                        },
                        "directive": null,
                        "start": 916,
                        "end": 942
                      }
                    ],
                    "start": 902,
                    "end": 963
                  },
                  "alternate": null,
                  "start": 865,
                  "end": 963
                }
              ],
              "start": 855,
              "end": 969
            },
            "start": 808,
            "end": 969
          }
        ],
        "start": 802,
        "end": 971
      },
      "expression": false,
      "start": 747,
      "end": 971
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 982,
        "end": 985
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "memberType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IDLMemberTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 998,
                "end": 1012
              },
              "typeArguments": null,
              "start": 998,
              "end": 1012
            },
            "start": 996,
            "end": 1012
          },
          "start": 986,
          "end": 1012
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "memberType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1024,
                  "end": 1034
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1035,
                  "end": 1039
                },
                "optional": false,
                "computed": false,
                "start": 1024,
                "end": 1039
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "const",
                "raw": "\"const\"",
                "start": 1044,
                "end": 1051
              },
              "start": 1024,
              "end": 1051
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "memberType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1063,
                      "end": 1073
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "idlType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1074,
                      "end": 1081
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1063,
                    "end": 1081
                  },
                  "directive": null,
                  "start": 1063,
                  "end": 1082
                }
              ],
              "start": 1053,
              "end": 1099
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "memberType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1113,
                    "end": 1123
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1124,
                    "end": 1128
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1113,
                  "end": 1128
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "operation",
                  "raw": "\"operation\"",
                  "start": 1133,
                  "end": 1144
                },
                "start": 1113,
                "end": 1144
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "memberType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1156,
                          "end": 1166
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "idlType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1167,
                          "end": 1174
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1156,
                        "end": 1174
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "origin",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1175,
                        "end": 1181
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1156,
                      "end": 1181
                    },
                    "directive": null,
                    "start": 1156,
                    "end": 1182
                  }
                ],
                "start": 1146,
                "end": 1199
              },
              "alternate": null,
              "start": 1109,
              "end": 1199
            },
            "start": 1020,
            "end": 1199
          }
        ],
        "start": 1014,
        "end": 1201
      },
      "expression": false,
      "start": 973,
      "end": 1201
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1250,
        "end": 1251
      },
      "typeParameters": null,
      "extends": [],
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1258,
              "end": 1262
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1264,
                  "end": 1268
                },
                "start": 1264,
                "end": 1268
              },
              "start": 1262,
              "end": 1268
            },
            "accessibility": null,
            "static": false,
            "start": 1258,
            "end": 1269
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1274,
              "end": 1278
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
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
                      "start": 1282,
                      "end": 1283
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1285,
                        "end": 1291
                      },
                      "start": 1283,
                      "end": 1291
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1282,
                    "end": 1292
                  }
                ],
                "start": 1280,
                "end": 1294
              },
              "start": 1278,
              "end": 1294
            },
            "accessibility": null,
            "static": false,
            "start": 1274,
            "end": 1295
          }
        ],
        "start": 1252,
        "end": 1297
      },
      "declare": false,
      "start": 1240,
      "end": 1297
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1309,
        "end": 1310
      },
      "typeParameters": null,
      "extends": [],
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1317,
              "end": 1321
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 1323,
                  "end": 1328
                },
                "start": 1323,
                "end": 1328
              },
              "start": 1321,
              "end": 1328
            },
            "accessibility": null,
            "static": false,
            "start": 1317,
            "end": 1329
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1334,
              "end": 1338
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
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
                      "start": 1342,
                      "end": 1343
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1345,
                        "end": 1351
                      },
                      "start": 1343,
                      "end": 1351
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1342,
                    "end": 1352
                  }
                ],
                "start": 1340,
                "end": 1354
              },
              "start": 1338,
              "end": 1354
            },
            "accessibility": null,
            "static": false,
            "start": 1334,
            "end": 1354
          }
        ],
        "start": 1311,
        "end": 1356
      },
      "declare": false,
      "start": 1299,
      "end": 1356
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1367,
        "end": 1369
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1373,
                    "end": 1374
                  },
                  "typeArguments": null,
                  "start": 1373,
                  "end": 1374
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1377,
                    "end": 1378
                  },
                  "typeArguments": null,
                  "start": 1377,
                  "end": 1378
                }
              ],
              "start": 1373,
              "end": 1378
            },
            "start": 1371,
            "end": 1378
          },
          "start": 1370,
          "end": 1378
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1393,
              "end": 1397
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1409,
                      "end": 1410
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1411,
                      "end": 1415
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1409,
                    "end": 1415
                  },
                  "directive": null,
                  "start": 1409,
                  "end": 1416
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1429,
                        "end": 1430
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1431,
                        "end": 1435
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1429,
                      "end": 1435
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1440,
                      "end": 1444
                    },
                    "start": 1429,
                    "end": 1444
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1460,
                              "end": 1461
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1462,
                              "end": 1466
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1460,
                            "end": 1466
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1467,
                            "end": 1468
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1460,
                          "end": 1468
                        },
                        "directive": null,
                        "start": 1460,
                        "end": 1469
                      }
                    ],
                    "start": 1446,
                    "end": 1479
                  },
                  "alternate": null,
                  "start": 1425,
                  "end": 1479
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1492,
                        "end": 1493
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1494,
                        "end": 1498
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1492,
                      "end": 1498
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1503,
                      "end": 1508
                    },
                    "start": 1492,
                    "end": 1508
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1524,
                              "end": 1525
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1526,
                              "end": 1530
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1524,
                            "end": 1530
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1531,
                            "end": 1532
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1524,
                          "end": 1532
                        },
                        "directive": null,
                        "start": 1524,
                        "end": 1533
                      }
                    ],
                    "start": 1510,
                    "end": 1543
                  },
                  "alternate": null,
                  "start": 1488,
                  "end": 1543
                }
              ],
              "start": 1399,
              "end": 1549
            },
            "start": 1386,
            "end": 1549
          }
        ],
        "start": 1380,
        "end": 1551
      },
      "expression": false,
      "start": 1358,
      "end": 1551
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1562,
        "end": 1564
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1568,
                    "end": 1569
                  },
                  "typeArguments": null,
                  "start": 1568,
                  "end": 1569
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1572,
                    "end": 1573
                  },
                  "typeArguments": null,
                  "start": 1572,
                  "end": 1573
                }
              ],
              "start": 1568,
              "end": 1573
            },
            "start": 1566,
            "end": 1573
          },
          "start": 1565,
          "end": 1573
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1588,
              "end": 1592
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1608,
                      "end": 1609
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1610,
                      "end": 1614
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1608,
                    "end": 1614
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1630,
                              "end": 1631
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1632,
                              "end": 1636
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1630,
                            "end": 1636
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1637,
                            "end": 1638
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1630,
                          "end": 1638
                        },
                        "directive": null,
                        "start": 1630,
                        "end": 1639
                      }
                    ],
                    "start": 1616,
                    "end": 1649
                  },
                  "alternate": null,
                  "start": 1604,
                  "end": 1649
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1663,
                        "end": 1664
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1665,
                        "end": 1669
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1663,
                      "end": 1669
                    },
                    "prefix": true,
                    "start": 1662,
                    "end": 1669
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1685,
                              "end": 1686
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1687,
                              "end": 1691
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1685,
                            "end": 1691
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1692,
                            "end": 1693
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1685,
                          "end": 1693
                        },
                        "directive": null,
                        "start": 1685,
                        "end": 1694
                      }
                    ],
                    "start": 1671,
                    "end": 1704
                  },
                  "alternate": null,
                  "start": 1658,
                  "end": 1704
                }
              ],
              "start": 1594,
              "end": 1710
            },
            "start": 1581,
            "end": 1710
          }
        ],
        "start": 1575,
        "end": 1712
      },
      "expression": false,
      "start": 1553,
      "end": 1712
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 1712
}
```
