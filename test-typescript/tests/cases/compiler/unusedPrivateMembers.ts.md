__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 815,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "name": "Test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 144,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 54,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 44,
              "name": "initializeInternal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 54,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 54,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 60,
            "end": 142,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 71,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 71,
              "end": 142,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 142,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 84,
                    "end": 104,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 88,
                        "end": 103,
                        "id": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 92,
                          "end": 103,
                          "callee": {
                            "type": "Identifier",
                            "start": 96,
                            "end": 101,
                            "name": "Test1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 113,
                    "end": 136,
                    "expression": {
                      "type": "CallExpression",
                      "start": 113,
                      "end": 135,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 113,
                        "end": 133,
                        "object": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 114,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 133,
                          "name": "initializeInternal",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 146,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 157,
        "name": "Test2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 158,
        "end": 248,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 164,
            "end": 178,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 176,
              "end": 177,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 183,
            "end": 246,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 194,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 194,
              "end": 246,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 197,
                "end": 246,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 207,
                    "end": 227,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 211,
                        "end": 226,
                        "id": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 212,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 215,
                          "end": 226,
                          "callee": {
                            "type": "Identifier",
                            "start": 219,
                            "end": 224,
                            "name": "Test2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 236,
                    "end": 240,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 236,
                      "end": 239,
                      "object": {
                        "type": "Identifier",
                        "start": 236,
                        "end": 237,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 239,
                        "name": "p",
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 250,
      "end": 381,
      "id": {
        "type": "Identifier",
        "start": 256,
        "end": 261,
        "name": "Test3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 262,
        "end": 381,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 268,
            "end": 310,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 280,
              "end": 281,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 282,
              "end": 310,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 285,
                "end": 310,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 295,
                    "end": 304,
                    "argument": {
                      "type": "Literal",
                      "start": 302,
                      "end": 303,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 316,
            "end": 379,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 323,
              "end": 327,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 327,
              "end": 379,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 330,
                "end": 379,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 340,
                    "end": 360,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 344,
                        "end": 359,
                        "id": {
                          "type": "Identifier",
                          "start": 344,
                          "end": 345,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 348,
                          "end": 359,
                          "callee": {
                            "type": "Identifier",
                            "start": 352,
                            "end": 357,
                            "name": "Test3",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 369,
                    "end": 373,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 369,
                      "end": 372,
                      "object": {
                        "type": "Identifier",
                        "start": 369,
                        "end": 370,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 371,
                        "end": 372,
                        "name": "x",
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 383,
      "end": 507,
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 394,
        "name": "Test4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 395,
        "end": 507,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 401,
            "end": 436,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 413,
              "end": 414,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 414,
              "end": 436,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 415,
                  "end": 416,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 418,
                "end": 436,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 428,
                    "end": 430,
                    "expression": {
                      "type": "Identifier",
                      "start": 428,
                      "end": 429,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 442,
            "end": 505,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 449,
              "end": 453,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 453,
              "end": 505,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 456,
                "end": 505,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 466,
                    "end": 486,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 470,
                        "end": 485,
                        "id": {
                          "type": "Identifier",
                          "start": 470,
                          "end": 471,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 474,
                          "end": 485,
                          "callee": {
                            "type": "Identifier",
                            "start": 478,
                            "end": 483,
                            "name": "Test4",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 495,
                    "end": 499,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 495,
                      "end": 498,
                      "object": {
                        "type": "Identifier",
                        "start": 495,
                        "end": 496,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 497,
                        "end": 498,
                        "name": "x",
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 509,
      "end": 621,
      "id": {
        "type": "Identifier",
        "start": 515,
        "end": 520,
        "name": "Test5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 524,
        "end": 621,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 530,
            "end": 543,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 538,
              "end": 539,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 539,
              "end": 542,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 541,
                "end": 542,
                "typeName": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 542,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 548,
            "end": 619,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 555,
              "end": 559,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 559,
              "end": 619,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 562,
                "end": 619,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 572,
                    "end": 600,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 576,
                        "end": 599,
                        "id": {
                          "type": "Identifier",
                          "start": 576,
                          "end": 577,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 580,
                          "end": 599,
                          "callee": {
                            "type": "Identifier",
                            "start": 584,
                            "end": 589,
                            "name": "Test5",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 589,
                            "end": 597,
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 590,
                                "end": 596
                              }
                            ]
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 609,
                    "end": 613,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 609,
                      "end": 612,
                      "object": {
                        "type": "Identifier",
                        "start": 609,
                        "end": 610,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 611,
                        "end": 612,
                        "name": "p",
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 520,
        "end": 523,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 521,
            "end": 522,
            "name": {
              "type": "Identifier",
              "start": 521,
              "end": 522,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 623,
      "end": 814,
      "id": {
        "type": "Identifier",
        "start": 629,
        "end": 634,
        "name": "Test6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 635,
        "end": 814,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 641,
            "end": 682,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 653,
              "end": 654,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 654,
              "end": 682,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 657,
                "end": 682,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 667,
                    "end": 676,
                    "argument": {
                      "type": "Literal",
                      "start": 674,
                      "end": 675,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 687,
            "end": 722,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 699,
              "end": 700,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 700,
              "end": 722,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 701,
                  "end": 702,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 704,
                "end": 722,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 714,
                    "end": 716,
                    "expression": {
                      "type": "Identifier",
                      "start": 714,
                      "end": 715,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 727,
            "end": 741,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 735,
              "end": 736,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 739,
              "end": 740,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 747,
            "end": 812,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 754,
              "end": 758,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 758,
              "end": 812,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 761,
                "end": 812,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 771,
                    "end": 791,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 775,
                        "end": 790,
                        "id": {
                          "type": "Identifier",
                          "start": 775,
                          "end": 776,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 779,
                          "end": 790,
                          "callee": {
                            "type": "Identifier",
                            "start": 783,
                            "end": 788,
                            "name": "Test6",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 800,
                    "end": 806,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 800,
                      "end": 805,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 800,
                        "end": 803,
                        "object": {
                          "type": "Identifier",
                          "start": 800,
                          "end": 801,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 802,
                          "end": 803,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
