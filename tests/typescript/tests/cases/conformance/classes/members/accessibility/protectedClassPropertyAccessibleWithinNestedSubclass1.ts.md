__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              },
              "start": 28,
              "end": 36
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 17,
            "end": 37
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 48
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 68
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "methoda",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 83,
                            "end": 90
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
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 118,
                                              "end": 122
                                            },
                                            "typeArguments": null,
                                            "start": 118,
                                            "end": 122
                                          },
                                          "start": 116,
                                          "end": 122
                                        },
                                        "start": 115,
                                        "end": 122
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 115,
                                      "end": 122
                                    }
                                  ],
                                  "declare": false,
                                  "start": 111,
                                  "end": 123
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
                                        "name": "d1",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived1",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 148,
                                              "end": 156
                                            },
                                            "typeArguments": null,
                                            "start": 148,
                                            "end": 156
                                          },
                                          "start": 146,
                                          "end": 156
                                        },
                                        "start": 144,
                                        "end": 156
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 144,
                                      "end": 156
                                    }
                                  ],
                                  "declare": false,
                                  "start": 140,
                                  "end": 157
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
                                        "name": "d2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 182,
                                              "end": 190
                                            },
                                            "typeArguments": null,
                                            "start": 182,
                                            "end": 190
                                          },
                                          "start": 180,
                                          "end": 190
                                        },
                                        "start": 178,
                                        "end": 190
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 178,
                                      "end": 190
                                    }
                                  ],
                                  "declare": false,
                                  "start": 174,
                                  "end": 191
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
                                        "name": "d3",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived3",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 216,
                                              "end": 224
                                            },
                                            "typeArguments": null,
                                            "start": 216,
                                            "end": 224
                                          },
                                          "start": 214,
                                          "end": 224
                                        },
                                        "start": 212,
                                        "end": 224
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 212,
                                      "end": 224
                                    }
                                  ],
                                  "declare": false,
                                  "start": 208,
                                  "end": 225
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
                                        "name": "d4",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived4",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 250,
                                              "end": 258
                                            },
                                            "typeArguments": null,
                                            "start": 250,
                                            "end": 258
                                          },
                                          "start": 248,
                                          "end": 258
                                        },
                                        "start": 246,
                                        "end": 258
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 246,
                                      "end": 258
                                    }
                                  ],
                                  "declare": false,
                                  "start": 242,
                                  "end": 259
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 277,
                                      "end": 278
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 279,
                                      "end": 280
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 277,
                                    "end": 280
                                  },
                                  "directive": null,
                                  "start": 277,
                                  "end": 281
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 354,
                                      "end": 356
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 357,
                                      "end": 358
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 354,
                                    "end": 358
                                  },
                                  "directive": null,
                                  "start": 354,
                                  "end": 359
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 431,
                                      "end": 433
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 434,
                                      "end": 435
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 431,
                                    "end": 435
                                  },
                                  "directive": null,
                                  "start": 431,
                                  "end": 436
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d3",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 508,
                                      "end": 510
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 511,
                                      "end": 512
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 508,
                                    "end": 512
                                  },
                                  "directive": null,
                                  "start": 508,
                                  "end": 513
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d4",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 644,
                                      "end": 646
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 647,
                                      "end": 648
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 644,
                                    "end": 648
                                  },
                                  "directive": null,
                                  "start": 644,
                                  "end": 649
                                }
                              ],
                              "start": 93,
                              "end": 718
                            },
                            "expression": false,
                            "start": 90,
                            "end": 718
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 83,
                          "end": 718
                        }
                      ],
                      "start": 69,
                      "end": 728
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 61,
                    "end": 728
                  }
                ],
                "start": 51,
                "end": 734
              },
              "expression": false,
              "start": 48,
              "end": 734
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 42,
            "end": 734
          }
        ],
        "start": 11,
        "end": 736
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 736
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 744,
        "end": 752
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 761,
        "end": 765
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 779
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 798,
                      "end": 799
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method1b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 814,
                            "end": 822
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
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 850,
                                              "end": 854
                                            },
                                            "typeArguments": null,
                                            "start": 850,
                                            "end": 854
                                          },
                                          "start": 848,
                                          "end": 854
                                        },
                                        "start": 847,
                                        "end": 854
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 847,
                                      "end": 854
                                    }
                                  ],
                                  "declare": false,
                                  "start": 843,
                                  "end": 855
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
                                        "name": "d1",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived1",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 880,
                                              "end": 888
                                            },
                                            "typeArguments": null,
                                            "start": 880,
                                            "end": 888
                                          },
                                          "start": 878,
                                          "end": 888
                                        },
                                        "start": 876,
                                        "end": 888
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 876,
                                      "end": 888
                                    }
                                  ],
                                  "declare": false,
                                  "start": 872,
                                  "end": 889
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
                                        "name": "d2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 914,
                                              "end": 922
                                            },
                                            "typeArguments": null,
                                            "start": 914,
                                            "end": 922
                                          },
                                          "start": 912,
                                          "end": 922
                                        },
                                        "start": 910,
                                        "end": 922
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 910,
                                      "end": 922
                                    }
                                  ],
                                  "declare": false,
                                  "start": 906,
                                  "end": 923
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
                                        "name": "d3",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived3",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 948,
                                              "end": 956
                                            },
                                            "typeArguments": null,
                                            "start": 948,
                                            "end": 956
                                          },
                                          "start": 946,
                                          "end": 956
                                        },
                                        "start": 944,
                                        "end": 956
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 944,
                                      "end": 956
                                    }
                                  ],
                                  "declare": false,
                                  "start": 940,
                                  "end": 957
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
                                        "name": "d4",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived4",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 982,
                                              "end": 990
                                            },
                                            "typeArguments": null,
                                            "start": 982,
                                            "end": 990
                                          },
                                          "start": 980,
                                          "end": 990
                                        },
                                        "start": 978,
                                        "end": 990
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 978,
                                      "end": 990
                                    }
                                  ],
                                  "declare": false,
                                  "start": 974,
                                  "end": 991
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1009,
                                      "end": 1010
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1011,
                                      "end": 1012
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1009,
                                    "end": 1012
                                  },
                                  "directive": null,
                                  "start": 1009,
                                  "end": 1013
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1109,
                                      "end": 1111
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1112,
                                      "end": 1113
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1109,
                                    "end": 1113
                                  },
                                  "directive": null,
                                  "start": 1109,
                                  "end": 1114
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1255,
                                      "end": 1257
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1258,
                                      "end": 1259
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1255,
                                    "end": 1259
                                  },
                                  "directive": null,
                                  "start": 1255,
                                  "end": 1260
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d3",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1355,
                                      "end": 1357
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1358,
                                      "end": 1359
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1355,
                                    "end": 1359
                                  },
                                  "directive": null,
                                  "start": 1355,
                                  "end": 1360
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d4",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1491,
                                      "end": 1493
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1494,
                                      "end": 1495
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1491,
                                    "end": 1495
                                  },
                                  "directive": null,
                                  "start": 1491,
                                  "end": 1496
                                }
                              ],
                              "start": 825,
                              "end": 1588
                            },
                            "expression": false,
                            "start": 822,
                            "end": 1588
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 814,
                          "end": 1588
                        }
                      ],
                      "start": 800,
                      "end": 1598
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 792,
                    "end": 1598
                  }
                ],
                "start": 782,
                "end": 1604
              },
              "expression": false,
              "start": 779,
              "end": 1604
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 772,
            "end": 1604
          }
        ],
        "start": 766,
        "end": 1606
      },
      "abstract": false,
      "declare": false,
      "start": 738,
      "end": 1606
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1614,
        "end": 1622
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1631,
        "end": 1635
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1642,
              "end": 1649
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1668,
                      "end": 1669
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method2c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1684,
                            "end": 1692
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
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1720,
                                              "end": 1724
                                            },
                                            "typeArguments": null,
                                            "start": 1720,
                                            "end": 1724
                                          },
                                          "start": 1718,
                                          "end": 1724
                                        },
                                        "start": 1717,
                                        "end": 1724
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 1717,
                                      "end": 1724
                                    }
                                  ],
                                  "declare": false,
                                  "start": 1713,
                                  "end": 1725
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
                                        "name": "d1",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived1",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1750,
                                              "end": 1758
                                            },
                                            "typeArguments": null,
                                            "start": 1750,
                                            "end": 1758
                                          },
                                          "start": 1748,
                                          "end": 1758
                                        },
                                        "start": 1746,
                                        "end": 1758
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 1746,
                                      "end": 1758
                                    }
                                  ],
                                  "declare": false,
                                  "start": 1742,
                                  "end": 1759
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
                                        "name": "d2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1784,
                                              "end": 1792
                                            },
                                            "typeArguments": null,
                                            "start": 1784,
                                            "end": 1792
                                          },
                                          "start": 1782,
                                          "end": 1792
                                        },
                                        "start": 1780,
                                        "end": 1792
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 1780,
                                      "end": 1792
                                    }
                                  ],
                                  "declare": false,
                                  "start": 1776,
                                  "end": 1793
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
                                        "name": "d3",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived3",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1818,
                                              "end": 1826
                                            },
                                            "typeArguments": null,
                                            "start": 1818,
                                            "end": 1826
                                          },
                                          "start": 1816,
                                          "end": 1826
                                        },
                                        "start": 1814,
                                        "end": 1826
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 1814,
                                      "end": 1826
                                    }
                                  ],
                                  "declare": false,
                                  "start": 1810,
                                  "end": 1827
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
                                        "name": "d4",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived4",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1852,
                                              "end": 1860
                                            },
                                            "typeArguments": null,
                                            "start": 1852,
                                            "end": 1860
                                          },
                                          "start": 1850,
                                          "end": 1860
                                        },
                                        "start": 1848,
                                        "end": 1860
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 1848,
                                      "end": 1860
                                    }
                                  ],
                                  "declare": false,
                                  "start": 1844,
                                  "end": 1861
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1879,
                                      "end": 1880
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1881,
                                      "end": 1882
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1879,
                                    "end": 1882
                                  },
                                  "directive": null,
                                  "start": 1879,
                                  "end": 1883
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1979,
                                      "end": 1981
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1982,
                                      "end": 1983
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1979,
                                    "end": 1983
                                  },
                                  "directive": null,
                                  "start": 1979,
                                  "end": 1984
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2079,
                                      "end": 2081
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2082,
                                      "end": 2083
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2079,
                                    "end": 2083
                                  },
                                  "directive": null,
                                  "start": 2079,
                                  "end": 2084
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d3",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2225,
                                      "end": 2227
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2228,
                                      "end": 2229
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2225,
                                    "end": 2229
                                  },
                                  "directive": null,
                                  "start": 2225,
                                  "end": 2230
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d4",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2361,
                                      "end": 2363
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2364,
                                      "end": 2365
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2361,
                                    "end": 2365
                                  },
                                  "directive": null,
                                  "start": 2361,
                                  "end": 2366
                                }
                              ],
                              "start": 1695,
                              "end": 2529
                            },
                            "expression": false,
                            "start": 1692,
                            "end": 2529
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1684,
                          "end": 2529
                        }
                      ],
                      "start": 1670,
                      "end": 2539
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1662,
                    "end": 2539
                  }
                ],
                "start": 1652,
                "end": 2545
              },
              "expression": false,
              "start": 1649,
              "end": 2545
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1642,
            "end": 2545
          }
        ],
        "start": 1636,
        "end": 2547
      },
      "abstract": false,
      "declare": false,
      "start": 1608,
      "end": 2547
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2555,
        "end": 2563
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2572,
        "end": 2580
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2597,
              "end": 2598
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2600,
                "end": 2606
              },
              "start": 2598,
              "end": 2606
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 2587,
            "end": 2607
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2612,
              "end": 2619
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2638,
                      "end": 2639
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method3d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2654,
                            "end": 2662
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
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2690,
                                              "end": 2694
                                            },
                                            "typeArguments": null,
                                            "start": 2690,
                                            "end": 2694
                                          },
                                          "start": 2688,
                                          "end": 2694
                                        },
                                        "start": 2687,
                                        "end": 2694
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 2687,
                                      "end": 2694
                                    }
                                  ],
                                  "declare": false,
                                  "start": 2683,
                                  "end": 2695
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
                                        "name": "d1",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived1",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2720,
                                              "end": 2728
                                            },
                                            "typeArguments": null,
                                            "start": 2720,
                                            "end": 2728
                                          },
                                          "start": 2718,
                                          "end": 2728
                                        },
                                        "start": 2716,
                                        "end": 2728
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 2716,
                                      "end": 2728
                                    }
                                  ],
                                  "declare": false,
                                  "start": 2712,
                                  "end": 2729
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
                                        "name": "d2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2754,
                                              "end": 2762
                                            },
                                            "typeArguments": null,
                                            "start": 2754,
                                            "end": 2762
                                          },
                                          "start": 2752,
                                          "end": 2762
                                        },
                                        "start": 2750,
                                        "end": 2762
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 2750,
                                      "end": 2762
                                    }
                                  ],
                                  "declare": false,
                                  "start": 2746,
                                  "end": 2763
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
                                        "name": "d3",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived3",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2788,
                                              "end": 2796
                                            },
                                            "typeArguments": null,
                                            "start": 2788,
                                            "end": 2796
                                          },
                                          "start": 2786,
                                          "end": 2796
                                        },
                                        "start": 2784,
                                        "end": 2796
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 2784,
                                      "end": 2796
                                    }
                                  ],
                                  "declare": false,
                                  "start": 2780,
                                  "end": 2797
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
                                        "name": "d4",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived4",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2822,
                                              "end": 2830
                                            },
                                            "typeArguments": null,
                                            "start": 2822,
                                            "end": 2830
                                          },
                                          "start": 2820,
                                          "end": 2830
                                        },
                                        "start": 2818,
                                        "end": 2830
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 2818,
                                      "end": 2830
                                    }
                                  ],
                                  "declare": false,
                                  "start": 2814,
                                  "end": 2831
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2849,
                                      "end": 2850
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2851,
                                      "end": 2852
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2849,
                                    "end": 2852
                                  },
                                  "directive": null,
                                  "start": 2849,
                                  "end": 2853
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2949,
                                      "end": 2951
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2952,
                                      "end": 2953
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2949,
                                    "end": 2953
                                  },
                                  "directive": null,
                                  "start": 2949,
                                  "end": 2954
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3049,
                                      "end": 3051
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3052,
                                      "end": 3053
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3049,
                                    "end": 3053
                                  },
                                  "directive": null,
                                  "start": 3049,
                                  "end": 3054
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d3",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3149,
                                      "end": 3151
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3152,
                                      "end": 3153
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3149,
                                    "end": 3153
                                  },
                                  "directive": null,
                                  "start": 3149,
                                  "end": 3154
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d4",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3226,
                                      "end": 3228
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3229,
                                      "end": 3230
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3226,
                                    "end": 3230
                                  },
                                  "directive": null,
                                  "start": 3226,
                                  "end": 3231
                                }
                              ],
                              "start": 2665,
                              "end": 3323
                            },
                            "expression": false,
                            "start": 2662,
                            "end": 3323
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2654,
                          "end": 3323
                        }
                      ],
                      "start": 2640,
                      "end": 3333
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 2632,
                    "end": 3333
                  }
                ],
                "start": 2622,
                "end": 3339
              },
              "expression": false,
              "start": 2619,
              "end": 3339
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2612,
            "end": 3339
          }
        ],
        "start": 2581,
        "end": 3341
      },
      "abstract": false,
      "declare": false,
      "start": 2549,
      "end": 3341
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3349,
        "end": 3357
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3366,
        "end": 3374
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3381,
              "end": 3388
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3407,
                      "end": 3408
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method4e",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3423,
                            "end": 3431
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
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3459,
                                              "end": 3463
                                            },
                                            "typeArguments": null,
                                            "start": 3459,
                                            "end": 3463
                                          },
                                          "start": 3457,
                                          "end": 3463
                                        },
                                        "start": 3456,
                                        "end": 3463
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 3456,
                                      "end": 3463
                                    }
                                  ],
                                  "declare": false,
                                  "start": 3452,
                                  "end": 3464
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
                                        "name": "d1",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived1",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3489,
                                              "end": 3497
                                            },
                                            "typeArguments": null,
                                            "start": 3489,
                                            "end": 3497
                                          },
                                          "start": 3487,
                                          "end": 3497
                                        },
                                        "start": 3485,
                                        "end": 3497
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 3485,
                                      "end": 3497
                                    }
                                  ],
                                  "declare": false,
                                  "start": 3481,
                                  "end": 3498
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
                                        "name": "d2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3523,
                                              "end": 3531
                                            },
                                            "typeArguments": null,
                                            "start": 3523,
                                            "end": 3531
                                          },
                                          "start": 3521,
                                          "end": 3531
                                        },
                                        "start": 3519,
                                        "end": 3531
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 3519,
                                      "end": 3531
                                    }
                                  ],
                                  "declare": false,
                                  "start": 3515,
                                  "end": 3532
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
                                        "name": "d3",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived3",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3557,
                                              "end": 3565
                                            },
                                            "typeArguments": null,
                                            "start": 3557,
                                            "end": 3565
                                          },
                                          "start": 3555,
                                          "end": 3565
                                        },
                                        "start": 3553,
                                        "end": 3565
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 3553,
                                      "end": 3565
                                    }
                                  ],
                                  "declare": false,
                                  "start": 3549,
                                  "end": 3566
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
                                        "name": "d4",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived4",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3591,
                                              "end": 3599
                                            },
                                            "typeArguments": null,
                                            "start": 3591,
                                            "end": 3599
                                          },
                                          "start": 3589,
                                          "end": 3599
                                        },
                                        "start": 3587,
                                        "end": 3599
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 3587,
                                      "end": 3599
                                    }
                                  ],
                                  "declare": false,
                                  "start": 3583,
                                  "end": 3600
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3618,
                                      "end": 3619
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3620,
                                      "end": 3621
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3618,
                                    "end": 3621
                                  },
                                  "directive": null,
                                  "start": 3618,
                                  "end": 3622
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3718,
                                      "end": 3720
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3721,
                                      "end": 3722
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3718,
                                    "end": 3722
                                  },
                                  "directive": null,
                                  "start": 3718,
                                  "end": 3723
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3818,
                                      "end": 3820
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3821,
                                      "end": 3822
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3818,
                                    "end": 3822
                                  },
                                  "directive": null,
                                  "start": 3818,
                                  "end": 3823
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d3",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3918,
                                      "end": 3920
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3921,
                                      "end": 3922
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3918,
                                    "end": 3922
                                  },
                                  "directive": null,
                                  "start": 3918,
                                  "end": 3923
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d4",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4054,
                                      "end": 4056
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4057,
                                      "end": 4058
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4054,
                                    "end": 4058
                                  },
                                  "directive": null,
                                  "start": 4054,
                                  "end": 4059
                                }
                              ],
                              "start": 3434,
                              "end": 4197
                            },
                            "expression": false,
                            "start": 3431,
                            "end": 4197
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 3423,
                          "end": 4197
                        }
                      ],
                      "start": 3409,
                      "end": 4207
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3401,
                    "end": 4207
                  }
                ],
                "start": 3391,
                "end": 4213
              },
              "expression": false,
              "start": 3388,
              "end": 4213
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3381,
            "end": 4213
          }
        ],
        "start": 3375,
        "end": 4215
      },
      "abstract": false,
      "declare": false,
      "start": 3343,
      "end": 4215
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4225,
                  "end": 4229
                },
                "typeArguments": null,
                "start": 4225,
                "end": 4229
              },
              "start": 4223,
              "end": 4229
            },
            "start": 4222,
            "end": 4229
          },
          "init": null,
          "definite": false,
          "start": 4222,
          "end": 4229
        }
      ],
      "declare": false,
      "start": 4218,
      "end": 4230
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4239,
                  "end": 4247
                },
                "typeArguments": null,
                "start": 4239,
                "end": 4247
              },
              "start": 4237,
              "end": 4247
            },
            "start": 4235,
            "end": 4247
          },
          "init": null,
          "definite": false,
          "start": 4235,
          "end": 4247
        }
      ],
      "declare": false,
      "start": 4231,
      "end": 4248
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4257,
                  "end": 4265
                },
                "typeArguments": null,
                "start": 4257,
                "end": 4265
              },
              "start": 4255,
              "end": 4265
            },
            "start": 4253,
            "end": 4265
          },
          "init": null,
          "definite": false,
          "start": 4253,
          "end": 4265
        }
      ],
      "declare": false,
      "start": 4249,
      "end": 4266
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
            "name": "d3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4275,
                  "end": 4283
                },
                "typeArguments": null,
                "start": 4275,
                "end": 4283
              },
              "start": 4273,
              "end": 4283
            },
            "start": 4271,
            "end": 4283
          },
          "init": null,
          "definite": false,
          "start": 4271,
          "end": 4283
        }
      ],
      "declare": false,
      "start": 4267,
      "end": 4284
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
            "name": "d4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4293,
                  "end": 4301
                },
                "typeArguments": null,
                "start": 4293,
                "end": 4301
              },
              "start": 4291,
              "end": 4301
            },
            "start": 4289,
            "end": 4301
          },
          "init": null,
          "definite": false,
          "start": 4289,
          "end": 4301
        }
      ],
      "declare": false,
      "start": 4285,
      "end": 4302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 4304,
          "end": 4305
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 4306,
          "end": 4307
        },
        "optional": false,
        "computed": false,
        "start": 4304,
        "end": 4307
      },
      "directive": null,
      "start": 4304,
      "end": 4308
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4422,
          "end": 4424
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 4425,
          "end": 4426
        },
        "optional": false,
        "computed": false,
        "start": 4422,
        "end": 4426
      },
      "directive": null,
      "start": 4422,
      "end": 4427
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4540,
          "end": 4542
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 4543,
          "end": 4544
        },
        "optional": false,
        "computed": false,
        "start": 4540,
        "end": 4544
      },
      "directive": null,
      "start": 4540,
      "end": 4545
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null,
          "start": 4658,
          "end": 4660
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 4661,
          "end": 4662
        },
        "optional": false,
        "computed": false,
        "start": 4658,
        "end": 4662
      },
      "directive": null,
      "start": 4658,
      "end": 4663
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4776,
          "end": 4778
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 4779,
          "end": 4780
        },
        "optional": false,
        "computed": false,
        "start": 4776,
        "end": 4780
      },
      "directive": null,
      "start": 4776,
      "end": 4781
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4893
}
```
