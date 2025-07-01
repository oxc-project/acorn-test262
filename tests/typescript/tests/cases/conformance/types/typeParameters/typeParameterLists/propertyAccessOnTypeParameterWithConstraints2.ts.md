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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 91
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 101
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 105,
                  "end": 111
                },
                "start": 103,
                "end": 111
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 121,
                      "end": 123
                    },
                    "start": 114,
                    "end": 124
                  }
                ],
                "start": 112,
                "end": 126
              },
              "expression": false,
              "start": 101,
              "end": 126
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 98,
            "end": 126
          }
        ],
        "start": 92,
        "end": 128
      },
      "abstract": false,
      "declare": false,
      "start": 84,
      "end": 128
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 137
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 147
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 157
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 161,
                  "end": 167
                },
                "start": 159,
                "end": 167
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 185,
                      "end": 187
                    },
                    "start": 178,
                    "end": 188
                  }
                ],
                "start": 168,
                "end": 194
              },
              "expression": false,
              "start": 157,
              "end": 194
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 154,
            "end": 194
          }
        ],
        "start": 148,
        "end": 196
      },
      "abstract": false,
      "declare": false,
      "start": 130,
      "end": 196
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
        "start": 204,
        "end": 205
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 207
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 217
              },
              "typeArguments": null,
              "start": 216,
              "end": 217
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 206,
            "end": 217
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 220
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 230
              },
              "typeArguments": null,
              "start": 229,
              "end": 230
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 219,
            "end": 230
          }
        ],
        "start": 205,
        "end": 231
      },
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 259,
                                "end": 260
                              },
                              "typeArguments": null,
                              "start": 259,
                              "end": 260
                            },
                            "start": 257,
                            "end": 260
                          },
                          "start": 256,
                          "end": 260
                        },
                        "init": null,
                        "definite": false,
                        "start": 256,
                        "end": 260
                      }
                    ],
                    "declare": false,
                    "start": 252,
                    "end": 261
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
                          "typeAnnotation": null,
                          "start": 274,
                          "end": 275
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 278,
                              "end": 279
                            },
                            "property": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "'foo'",
                              "start": 280,
                              "end": 285
                            },
                            "optional": false,
                            "computed": true,
                            "start": 278,
                            "end": 286
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 278,
                          "end": 288
                        },
                        "definite": false,
                        "start": 274,
                        "end": 288
                      }
                    ],
                    "declare": false,
                    "start": 270,
                    "end": 289
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 326
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 329,
                            "end": 330
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 331,
                            "end": 334
                          },
                          "optional": false,
                          "computed": false,
                          "start": 329,
                          "end": 334
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 329,
                        "end": 336
                      },
                      "start": 325,
                      "end": 336
                    },
                    "start": 318,
                    "end": 337
                  }
                ],
                "start": 242,
                "end": 343
              },
              "expression": false,
              "start": 239,
              "end": 343
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 238,
            "end": 343
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 350
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 355
                      },
                      "typeArguments": null,
                      "start": 354,
                      "end": 355
                    },
                    "start": 352,
                    "end": 355
                  },
                  "start": 351,
                  "end": 355
                }
              ],
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 371,
                          "end": 372
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 375,
                              "end": 376
                            },
                            "property": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "'foo'",
                              "start": 377,
                              "end": 382
                            },
                            "optional": false,
                            "computed": true,
                            "start": 375,
                            "end": 383
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 375,
                          "end": 385
                        },
                        "definite": false,
                        "start": 371,
                        "end": 385
                      }
                    ],
                    "declare": false,
                    "start": 367,
                    "end": 386
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 422,
                        "end": 423
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 426,
                            "end": 427
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 428,
                            "end": 431
                          },
                          "optional": false,
                          "computed": false,
                          "start": 426,
                          "end": 431
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 426,
                        "end": 433
                      },
                      "start": 422,
                      "end": 433
                    },
                    "start": 415,
                    "end": 434
                  }
                ],
                "start": 357,
                "end": 440
              },
              "expression": false,
              "start": 350,
              "end": 440
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 349,
            "end": 440
          }
        ],
        "start": 232,
        "end": 442
      },
      "abstract": false,
      "declare": false,
      "start": 198,
      "end": 442
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 715,
            "end": 717
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 725,
                  "end": 726
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 727,
                        "end": 728
                      },
                      "typeArguments": null,
                      "start": 727,
                      "end": 728
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 730,
                        "end": 731
                      },
                      "typeArguments": null,
                      "start": 730,
                      "end": 731
                    }
                  ],
                  "start": 726,
                  "end": 732
                },
                "arguments": [],
                "start": 721,
                "end": 734
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 736,
                "end": 737
              },
              "optional": false,
              "computed": false,
              "start": 720,
              "end": 737
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 720,
            "end": 739
          },
          "definite": false,
          "start": 715,
          "end": 739
        }
      ],
      "declare": false,
      "start": 711,
      "end": 740
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
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 745,
            "end": 748
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 756,
                  "end": 757
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 758,
                        "end": 759
                      },
                      "typeArguments": null,
                      "start": 758,
                      "end": 759
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 761,
                        "end": 762
                      },
                      "typeArguments": null,
                      "start": 761,
                      "end": 762
                    }
                  ],
                  "start": 757,
                  "end": 763
                },
                "arguments": [],
                "start": 752,
                "end": 765
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 767,
                "end": 768
              },
              "optional": false,
              "computed": false,
              "start": 751,
              "end": 768
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 773,
                  "end": 774
                },
                "typeArguments": null,
                "arguments": [],
                "start": 769,
                "end": 776
              }
            ],
            "optional": false,
            "start": 751,
            "end": 777
          },
          "definite": false,
          "start": 745,
          "end": 777
        }
      ],
      "declare": false,
      "start": 741,
      "end": 778
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 790,
        "end": 791
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 792,
              "end": 793
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 802,
                "end": 803
              },
              "typeArguments": null,
              "start": 802,
              "end": 803
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 792,
            "end": 803
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 805,
              "end": 806
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 815,
                "end": 816
              },
              "typeArguments": null,
              "start": 815,
              "end": 816
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 805,
            "end": 816
          }
        ],
        "start": 791,
        "end": 817
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 824,
              "end": 827
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 829,
                  "end": 830
                },
                "typeArguments": null,
                "start": 829,
                "end": 830
              },
              "start": 827,
              "end": 830
            },
            "accessibility": null,
            "static": false,
            "start": 824,
            "end": 831
          }
        ],
        "start": 818,
        "end": 833
      },
      "declare": false,
      "start": 780,
      "end": 833
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 901,
                  "end": 902
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 903,
                        "end": 904
                      },
                      "typeArguments": null,
                      "start": 903,
                      "end": 904
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 906,
                        "end": 907
                      },
                      "typeArguments": null,
                      "start": 906,
                      "end": 907
                    }
                  ],
                  "start": 902,
                  "end": 908
                },
                "start": 901,
                "end": 908
              },
              "start": 899,
              "end": 908
            },
            "start": 898,
            "end": 908
          },
          "init": null,
          "definite": false,
          "start": 898,
          "end": 908
        }
      ],
      "declare": false,
      "start": 894,
      "end": 909
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 914,
            "end": 916
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 919,
                  "end": 920
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 921,
                  "end": 924
                },
                "optional": false,
                "computed": false,
                "start": 919,
                "end": 924
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 925,
                "end": 928
              },
              "optional": false,
              "computed": false,
              "start": 919,
              "end": 928
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 919,
            "end": 930
          },
          "definite": false,
          "start": 914,
          "end": 930
        }
      ],
      "declare": false,
      "start": 910,
      "end": 931
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
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 936,
            "end": 939
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 942,
                  "end": 943
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 944,
                  "end": 947
                },
                "optional": false,
                "computed": false,
                "start": 942,
                "end": 947
              },
              "property": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 948,
                "end": 953
              },
              "optional": false,
              "computed": true,
              "start": 942,
              "end": 954
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 942,
            "end": 956
          },
          "definite": false,
          "start": 936,
          "end": 956
        }
      ],
      "declare": false,
      "start": 932,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 973,
                            "end": 974
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 983,
                              "end": 984
                            },
                            "typeArguments": null,
                            "start": 983,
                            "end": 984
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 973,
                          "end": 984
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 986,
                            "end": 987
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 996,
                              "end": 997
                            },
                            "typeArguments": null,
                            "start": 996,
                            "end": 997
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 986,
                          "end": 997
                        }
                      ],
                      "start": 972,
                      "end": 998
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1002,
                          "end": 1003
                        },
                        "typeArguments": null,
                        "start": 1002,
                        "end": 1003
                      },
                      "start": 1000,
                      "end": 1003
                    },
                    "start": 972,
                    "end": 1004
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1010,
                            "end": 1011
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1020,
                              "end": 1021
                            },
                            "typeArguments": null,
                            "start": 1020,
                            "end": 1021
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1010,
                          "end": 1021
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1023,
                            "end": 1024
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1033,
                              "end": 1034
                            },
                            "typeArguments": null,
                            "start": 1033,
                            "end": 1034
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1023,
                          "end": 1034
                        }
                      ],
                      "start": 1009,
                      "end": 1035
                    },
                    "params": [
                      {
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1039,
                              "end": 1040
                            },
                            "typeArguments": null,
                            "start": 1039,
                            "end": 1040
                          },
                          "start": 1037,
                          "end": 1040
                        },
                        "start": 1036,
                        "end": 1040
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1043,
                          "end": 1044
                        },
                        "typeArguments": null,
                        "start": 1043,
                        "end": 1044
                      },
                      "start": 1041,
                      "end": 1044
                    },
                    "start": 1009,
                    "end": 1045
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1051,
                            "end": 1052
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1061,
                              "end": 1062
                            },
                            "typeArguments": null,
                            "start": 1061,
                            "end": 1062
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1051,
                          "end": 1062
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1064,
                            "end": 1065
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1074,
                              "end": 1075
                            },
                            "typeArguments": null,
                            "start": 1074,
                            "end": 1075
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1064,
                          "end": 1075
                        }
                      ],
                      "start": 1050,
                      "end": 1076
                    },
                    "params": [
                      {
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1080,
                              "end": 1081
                            },
                            "typeArguments": null,
                            "start": 1080,
                            "end": 1081
                          },
                          "start": 1078,
                          "end": 1081
                        },
                        "start": 1077,
                        "end": 1081
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1086,
                              "end": 1087
                            },
                            "typeArguments": null,
                            "start": 1086,
                            "end": 1087
                          },
                          "start": 1084,
                          "end": 1087
                        },
                        "start": 1083,
                        "end": 1087
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1090,
                          "end": 1091
                        },
                        "typeArguments": null,
                        "start": 1090,
                        "end": 1091
                      },
                      "start": 1088,
                      "end": 1091
                    },
                    "start": 1050,
                    "end": 1092
                  }
                ],
                "start": 966,
                "end": 1094
              },
              "start": 964,
              "end": 1094
            },
            "start": 963,
            "end": 1094
          },
          "init": null,
          "definite": false,
          "start": 963,
          "end": 1094
        }
      ],
      "declare": false,
      "start": 959,
      "end": 1094
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1245,
            "end": 1247
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1250,
                  "end": 1251
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1252,
                        "end": 1253
                      },
                      "typeArguments": null,
                      "start": 1252,
                      "end": 1253
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1255,
                        "end": 1256
                      },
                      "typeArguments": null,
                      "start": 1255,
                      "end": 1256
                    }
                  ],
                  "start": 1251,
                  "end": 1257
                },
                "arguments": [],
                "optional": false,
                "start": 1250,
                "end": 1259
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1260,
                "end": 1263
              },
              "optional": false,
              "computed": false,
              "start": 1250,
              "end": 1263
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1250,
            "end": 1265
          },
          "definite": false,
          "start": 1245,
          "end": 1265
        }
      ],
      "declare": false,
      "start": 1241,
      "end": 1266
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
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1272,
            "end": 1275
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1278,
                  "end": 1279
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1278,
                "end": 1281
              },
              "property": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 1282,
                "end": 1287
              },
              "optional": false,
              "computed": true,
              "start": 1278,
              "end": 1288
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1278,
            "end": 1290
          },
          "definite": false,
          "start": 1272,
          "end": 1290
        }
      ],
      "declare": false,
      "start": 1268,
      "end": 1291
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
            "name": "aB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1357,
            "end": 1359
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1366,
              "end": 1367
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1362,
            "end": 1369
          },
          "definite": false,
          "start": 1357,
          "end": 1369
        }
      ],
      "declare": false,
      "start": 1353,
      "end": 1370
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
            "name": "r3c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1375,
            "end": 1378
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1381,
                  "end": 1382
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "aB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1383,
                    "end": 1385
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "aB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1387,
                    "end": 1389
                  }
                ],
                "optional": false,
                "start": 1381,
                "end": 1390
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1391,
                "end": 1394
              },
              "optional": false,
              "computed": false,
              "start": 1381,
              "end": 1394
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1381,
            "end": 1396
          },
          "definite": false,
          "start": 1375,
          "end": 1396
        }
      ],
      "declare": false,
      "start": 1371,
      "end": 1397
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
            "name": "r3d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1403,
            "end": 1406
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1409,
                  "end": 1410
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "aB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1411,
                    "end": 1413
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "aB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1415,
                    "end": 1417
                  }
                ],
                "optional": false,
                "start": 1409,
                "end": 1418
              },
              "property": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 1419,
                "end": 1424
              },
              "optional": false,
              "computed": true,
              "start": 1409,
              "end": 1425
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1409,
            "end": 1427
          },
          "definite": false,
          "start": 1403,
          "end": 1427
        }
      ],
      "declare": false,
      "start": 1399,
      "end": 1428
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
            "typeAnnotation": null,
            "start": 1434,
            "end": 1435
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1444,
                  "end": 1447
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1450,
                          "end": 1451
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1460,
                            "end": 1461
                          },
                          "typeArguments": null,
                          "start": 1460,
                          "end": 1461
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1450,
                        "end": 1461
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1463,
                          "end": 1464
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1473,
                            "end": 1474
                          },
                          "typeArguments": null,
                          "start": 1473,
                          "end": 1474
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1463,
                        "end": 1474
                      }
                    ],
                    "start": 1449,
                    "end": 1475
                  },
                  "params": [
                    {
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
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1479,
                            "end": 1480
                          },
                          "typeArguments": null,
                          "start": 1479,
                          "end": 1480
                        },
                        "start": 1477,
                        "end": 1480
                      },
                      "start": 1476,
                      "end": 1480
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1485,
                            "end": 1486
                          },
                          "typeArguments": null,
                          "start": 1485,
                          "end": 1486
                        },
                        "start": 1483,
                        "end": 1486
                      },
                      "start": 1482,
                      "end": 1486
                    }
                  ],
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1505,
                              "end": 1506
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1509,
                                  "end": 1510
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": "foo",
                                  "raw": "'foo'",
                                  "start": 1511,
                                  "end": 1516
                                },
                                "optional": false,
                                "computed": true,
                                "start": 1509,
                                "end": 1517
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1509,
                              "end": 1519
                            },
                            "definite": false,
                            "start": 1505,
                            "end": 1519
                          }
                        ],
                        "declare": false,
                        "start": 1501,
                        "end": 1520
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1556,
                            "end": 1557
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1560,
                                "end": 1561
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1562,
                                "end": 1565
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1560,
                              "end": 1565
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1560,
                            "end": 1567
                          },
                          "start": 1556,
                          "end": 1567
                        },
                        "start": 1549,
                        "end": 1568
                      }
                    ],
                    "start": 1491,
                    "end": 1574
                  },
                  "id": null,
                  "generator": false,
                  "start": 1449,
                  "end": 1574
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1444,
                "end": 1574
              }
            ],
            "start": 1438,
            "end": 1576
          },
          "definite": false,
          "start": 1434,
          "end": 1576
        }
      ],
      "declare": false,
      "start": 1430,
      "end": 1576
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1741,
            "end": 1743
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1746,
                "end": 1747
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1748,
                "end": 1751
              },
              "optional": false,
              "computed": false,
              "start": 1746,
              "end": 1751
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "aB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1752,
                "end": 1754
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "aB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1756,
                "end": 1758
              }
            ],
            "optional": false,
            "start": 1746,
            "end": 1759
          },
          "definite": false,
          "start": 1741,
          "end": 1759
        }
      ],
      "declare": false,
      "start": 1737,
      "end": 1760
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 84,
  "end": 1820
}
```
