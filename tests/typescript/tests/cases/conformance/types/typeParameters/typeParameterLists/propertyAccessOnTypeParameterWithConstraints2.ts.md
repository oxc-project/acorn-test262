__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 84,
  "end": 1820,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 84,
      "end": 128,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 92,
        "end": 128,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 98,
            "end": 126,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 101,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 101,
              "end": 126,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 103,
                "end": 111,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 105,
                  "end": 111
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 126,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 114,
                    "end": 124,
                    "argument": {
                      "type": "Literal",
                      "start": 121,
                      "end": 123,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 196,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 146,
        "end": 147,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 148,
        "end": 196,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 154,
            "end": 194,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 157,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 157,
              "end": 194,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 159,
                "end": 167,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 161,
                  "end": 167
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 168,
                "end": 194,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 178,
                    "end": 188,
                    "argument": {
                      "type": "Literal",
                      "start": 185,
                      "end": 187,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 198,
      "end": 442,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 205,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 205,
        "end": 231,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 206,
            "end": 217,
            "name": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 216,
              "end": 217,
              "typeName": {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 219,
            "end": 230,
            "name": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 230,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 232,
        "end": 442,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 238,
            "end": 343,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 239,
              "end": 343,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 242,
                "end": 343,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 252,
                    "end": 261,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 256,
                        "end": 260,
                        "id": {
                          "type": "Identifier",
                          "start": 256,
                          "end": 260,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 257,
                            "end": 260,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 259,
                              "end": 260,
                              "typeName": {
                                "type": "Identifier",
                                "start": 259,
                                "end": 260,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 270,
                    "end": 289,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 274,
                        "end": 288,
                        "id": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 275,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 278,
                          "end": 288,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 278,
                            "end": 286,
                            "object": {
                              "type": "Identifier",
                              "start": 278,
                              "end": 279,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Literal",
                              "start": 280,
                              "end": 285,
                              "value": "foo",
                              "raw": "'foo'"
                            },
                            "optional": false,
                            "computed": true
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 318,
                    "end": 337,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 325,
                      "end": 336,
                      "left": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 326,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "start": 329,
                        "end": 336,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 329,
                          "end": 334,
                          "object": {
                            "type": "Identifier",
                            "start": 329,
                            "end": 330,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 331,
                            "end": 334,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 349,
            "end": 440,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 350,
              "end": 440,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 351,
                  "end": 355,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 352,
                    "end": 355,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 354,
                      "end": 355,
                      "typeName": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 355,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 357,
                "end": 440,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 367,
                    "end": 386,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 371,
                        "end": 385,
                        "id": {
                          "type": "Identifier",
                          "start": 371,
                          "end": 372,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 375,
                          "end": 385,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 375,
                            "end": 383,
                            "object": {
                              "type": "Identifier",
                              "start": 375,
                              "end": 376,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Literal",
                              "start": 377,
                              "end": 382,
                              "value": "foo",
                              "raw": "'foo'"
                            },
                            "optional": false,
                            "computed": true
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 415,
                    "end": 434,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 422,
                      "end": 433,
                      "left": {
                        "type": "Identifier",
                        "start": 422,
                        "end": 423,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "start": 426,
                        "end": 433,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 426,
                          "end": 431,
                          "object": {
                            "type": "Identifier",
                            "start": 426,
                            "end": 427,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 428,
                            "end": 431,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 711,
      "end": 740,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 715,
          "end": 739,
          "id": {
            "type": "Identifier",
            "start": 715,
            "end": 717,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 720,
            "end": 739,
            "callee": {
              "type": "MemberExpression",
              "start": 720,
              "end": 737,
              "object": {
                "type": "NewExpression",
                "start": 721,
                "end": 734,
                "callee": {
                  "type": "Identifier",
                  "start": 725,
                  "end": 726,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 726,
                  "end": 732,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 727,
                      "end": 728,
                      "typeName": {
                        "type": "Identifier",
                        "start": 727,
                        "end": 728,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 730,
                      "end": 731,
                      "typeName": {
                        "type": "Identifier",
                        "start": 730,
                        "end": 731,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 736,
                "end": 737,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 741,
      "end": 778,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 745,
          "end": 777,
          "id": {
            "type": "Identifier",
            "start": 745,
            "end": 748,
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 751,
            "end": 777,
            "callee": {
              "type": "MemberExpression",
              "start": 751,
              "end": 768,
              "object": {
                "type": "NewExpression",
                "start": 752,
                "end": 765,
                "callee": {
                  "type": "Identifier",
                  "start": 756,
                  "end": 757,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 757,
                  "end": 763,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 758,
                      "end": 759,
                      "typeName": {
                        "type": "Identifier",
                        "start": 758,
                        "end": 759,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 761,
                      "end": 762,
                      "typeName": {
                        "type": "Identifier",
                        "start": 761,
                        "end": 762,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 767,
                "end": 768,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 769,
                "end": 776,
                "callee": {
                  "type": "Identifier",
                  "start": 773,
                  "end": 774,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 780,
      "end": 833,
      "id": {
        "type": "Identifier",
        "start": 790,
        "end": 791,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 791,
        "end": 817,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 792,
            "end": 803,
            "name": {
              "type": "Identifier",
              "start": 792,
              "end": 793,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 802,
              "end": 803,
              "typeName": {
                "type": "Identifier",
                "start": 802,
                "end": 803,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 805,
            "end": 816,
            "name": {
              "type": "Identifier",
              "start": 805,
              "end": 806,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 815,
              "end": 816,
              "typeName": {
                "type": "Identifier",
                "start": 815,
                "end": 816,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 818,
        "end": 833,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 824,
            "end": 831,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 824,
              "end": 827,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 827,
              "end": 830,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 829,
                "end": 830,
                "typeName": {
                  "type": "Identifier",
                  "start": 829,
                  "end": 830,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 894,
      "end": 909,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 898,
          "end": 908,
          "id": {
            "type": "Identifier",
            "start": 898,
            "end": 908,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 899,
              "end": 908,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 901,
                "end": 908,
                "typeName": {
                  "type": "Identifier",
                  "start": 901,
                  "end": 902,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 902,
                  "end": 908,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 903,
                      "end": 904,
                      "typeName": {
                        "type": "Identifier",
                        "start": 903,
                        "end": 904,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 906,
                      "end": 907,
                      "typeName": {
                        "type": "Identifier",
                        "start": 906,
                        "end": 907,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 910,
      "end": 931,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 914,
          "end": 930,
          "id": {
            "type": "Identifier",
            "start": 914,
            "end": 916,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 919,
            "end": 930,
            "callee": {
              "type": "MemberExpression",
              "start": 919,
              "end": 928,
              "object": {
                "type": "MemberExpression",
                "start": 919,
                "end": 924,
                "object": {
                  "type": "Identifier",
                  "start": 919,
                  "end": 920,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 921,
                  "end": 924,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 925,
                "end": 928,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 932,
      "end": 957,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 936,
          "end": 956,
          "id": {
            "type": "Identifier",
            "start": 936,
            "end": 939,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 942,
            "end": 956,
            "callee": {
              "type": "MemberExpression",
              "start": 942,
              "end": 954,
              "object": {
                "type": "MemberExpression",
                "start": 942,
                "end": 947,
                "object": {
                  "type": "Identifier",
                  "start": 942,
                  "end": 943,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 944,
                  "end": 947,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Literal",
                "start": 948,
                "end": 953,
                "value": "foo",
                "raw": "'foo'"
              },
              "optional": false,
              "computed": true
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 959,
      "end": 1094,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 963,
          "end": 1094,
          "id": {
            "type": "Identifier",
            "start": 963,
            "end": 1094,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 964,
              "end": 1094,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 966,
                "end": 1094,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 972,
                    "end": 1004,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 972,
                      "end": 998,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 973,
                          "end": 984,
                          "name": {
                            "type": "Identifier",
                            "start": 973,
                            "end": 974,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 983,
                            "end": 984,
                            "typeName": {
                              "type": "Identifier",
                              "start": 983,
                              "end": 984,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 986,
                          "end": 997,
                          "name": {
                            "type": "Identifier",
                            "start": 986,
                            "end": 987,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 996,
                            "end": 997,
                            "typeName": {
                              "type": "Identifier",
                              "start": 996,
                              "end": 997,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
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
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1000,
                      "end": 1003,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1002,
                        "end": 1003,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1002,
                          "end": 1003,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1009,
                    "end": 1045,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1009,
                      "end": 1035,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1010,
                          "end": 1021,
                          "name": {
                            "type": "Identifier",
                            "start": 1010,
                            "end": 1011,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1020,
                            "end": 1021,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1020,
                              "end": 1021,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 1023,
                          "end": 1034,
                          "name": {
                            "type": "Identifier",
                            "start": 1023,
                            "end": 1024,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1033,
                            "end": 1034,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1033,
                              "end": 1034,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1036,
                        "end": 1040,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1037,
                          "end": 1040,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1039,
                            "end": 1040,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1039,
                              "end": 1040,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1041,
                      "end": 1044,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1043,
                        "end": 1044,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1043,
                          "end": 1044,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1050,
                    "end": 1092,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1050,
                      "end": 1076,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1051,
                          "end": 1062,
                          "name": {
                            "type": "Identifier",
                            "start": 1051,
                            "end": 1052,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1061,
                            "end": 1062,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1061,
                              "end": 1062,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 1064,
                          "end": 1075,
                          "name": {
                            "type": "Identifier",
                            "start": 1064,
                            "end": 1065,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1074,
                            "end": 1075,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1074,
                              "end": 1075,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1077,
                        "end": 1081,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1078,
                          "end": 1081,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1080,
                            "end": 1081,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1080,
                              "end": 1081,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1083,
                        "end": 1087,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1084,
                          "end": 1087,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1086,
                            "end": 1087,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1086,
                              "end": 1087,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1088,
                      "end": 1091,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1090,
                        "end": 1091,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1090,
                          "end": 1091,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1241,
      "end": 1266,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1245,
          "end": 1265,
          "id": {
            "type": "Identifier",
            "start": 1245,
            "end": 1247,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1250,
            "end": 1265,
            "callee": {
              "type": "MemberExpression",
              "start": 1250,
              "end": 1263,
              "object": {
                "type": "CallExpression",
                "start": 1250,
                "end": 1259,
                "callee": {
                  "type": "Identifier",
                  "start": 1250,
                  "end": 1251,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1251,
                  "end": 1257,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1252,
                      "end": 1253,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1252,
                        "end": 1253,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1255,
                      "end": 1256,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1255,
                        "end": 1256,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                "arguments": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1260,
                "end": 1263,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1268,
      "end": 1291,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1272,
          "end": 1290,
          "id": {
            "type": "Identifier",
            "start": 1272,
            "end": 1275,
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1278,
            "end": 1290,
            "callee": {
              "type": "MemberExpression",
              "start": 1278,
              "end": 1288,
              "object": {
                "type": "CallExpression",
                "start": 1278,
                "end": 1281,
                "callee": {
                  "type": "Identifier",
                  "start": 1278,
                  "end": 1279,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 1282,
                "end": 1287,
                "value": "foo",
                "raw": "'foo'"
              },
              "optional": false,
              "computed": true
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1353,
      "end": 1370,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1357,
          "end": 1369,
          "id": {
            "type": "Identifier",
            "start": 1357,
            "end": 1359,
            "decorators": [],
            "name": "aB",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1362,
            "end": 1369,
            "callee": {
              "type": "Identifier",
              "start": 1366,
              "end": 1367,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1371,
      "end": 1397,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1375,
          "end": 1396,
          "id": {
            "type": "Identifier",
            "start": 1375,
            "end": 1378,
            "decorators": [],
            "name": "r3c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1381,
            "end": 1396,
            "callee": {
              "type": "MemberExpression",
              "start": 1381,
              "end": 1394,
              "object": {
                "type": "CallExpression",
                "start": 1381,
                "end": 1390,
                "callee": {
                  "type": "Identifier",
                  "start": 1381,
                  "end": 1382,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1383,
                    "end": 1385,
                    "decorators": [],
                    "name": "aB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1387,
                    "end": 1389,
                    "decorators": [],
                    "name": "aB",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1391,
                "end": 1394,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1399,
      "end": 1428,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1403,
          "end": 1427,
          "id": {
            "type": "Identifier",
            "start": 1403,
            "end": 1406,
            "decorators": [],
            "name": "r3d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1409,
            "end": 1427,
            "callee": {
              "type": "MemberExpression",
              "start": 1409,
              "end": 1425,
              "object": {
                "type": "CallExpression",
                "start": 1409,
                "end": 1418,
                "callee": {
                  "type": "Identifier",
                  "start": 1409,
                  "end": 1410,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1411,
                    "end": 1413,
                    "decorators": [],
                    "name": "aB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1415,
                    "end": 1417,
                    "decorators": [],
                    "name": "aB",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 1419,
                "end": 1424,
                "value": "foo",
                "raw": "'foo'"
              },
              "optional": false,
              "computed": true
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1430,
      "end": 1576,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1434,
          "end": 1576,
          "id": {
            "type": "Identifier",
            "start": 1434,
            "end": 1435,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1438,
            "end": 1576,
            "properties": [
              {
                "type": "Property",
                "start": 1444,
                "end": 1574,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1444,
                  "end": 1447,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1449,
                  "end": 1574,
                  "expression": false,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1449,
                    "end": 1475,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1450,
                        "end": 1461,
                        "name": {
                          "type": "Identifier",
                          "start": 1450,
                          "end": 1451,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1460,
                          "end": 1461,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1460,
                            "end": 1461,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1463,
                        "end": 1474,
                        "name": {
                          "type": "Identifier",
                          "start": 1463,
                          "end": 1464,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1473,
                          "end": 1474,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1473,
                            "end": 1474,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
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
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1476,
                      "end": 1480,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1477,
                        "end": 1480,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1479,
                          "end": 1480,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1479,
                            "end": 1480,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 1482,
                      "end": 1486,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1483,
                        "end": 1486,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1485,
                          "end": 1486,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1485,
                            "end": 1486,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1491,
                    "end": 1574,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1501,
                        "end": 1520,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1505,
                            "end": 1519,
                            "id": {
                              "type": "Identifier",
                              "start": 1505,
                              "end": 1506,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 1509,
                              "end": 1519,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1509,
                                "end": 1517,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1509,
                                  "end": 1510,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 1511,
                                  "end": 1516,
                                  "value": "foo",
                                  "raw": "'foo'"
                                },
                                "optional": false,
                                "computed": true
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1549,
                        "end": 1568,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 1556,
                          "end": 1567,
                          "left": {
                            "type": "Identifier",
                            "start": 1556,
                            "end": 1557,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "start": 1560,
                            "end": 1567,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1560,
                              "end": 1565,
                              "object": {
                                "type": "Identifier",
                                "start": 1560,
                                "end": 1561,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1562,
                                "end": 1565,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1737,
      "end": 1760,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1741,
          "end": 1759,
          "id": {
            "type": "Identifier",
            "start": 1741,
            "end": 1743,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1746,
            "end": 1759,
            "callee": {
              "type": "MemberExpression",
              "start": 1746,
              "end": 1751,
              "object": {
                "type": "Identifier",
                "start": 1746,
                "end": 1747,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1748,
                "end": 1751,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1752,
                "end": 1754,
                "decorators": [],
                "name": "aB",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1756,
                "end": 1758,
                "decorators": [],
                "name": "aB",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
