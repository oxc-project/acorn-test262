__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 814,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 144,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 144,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 54,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 44,
              "decorators": [],
              "name": "initializeInternal",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 54,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 54,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 60,
            "end": 142,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 71,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 71,
              "end": 142,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 142,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 84,
                    "end": 104,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 88,
                        "end": 103,
                        "id": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 92,
                          "end": 103,
                          "callee": {
                            "type": "Identifier",
                            "start": 96,
                            "end": 101,
                            "decorators": [],
                            "name": "Test1",
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 133,
                          "decorators": [],
                          "name": "initializeInternal",
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
                    "directive": null
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 146,
      "end": 248,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 157,
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 158,
        "end": 248,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 164,
            "end": 178,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 176,
              "end": 177,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 183,
            "end": 246,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 194,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 194,
              "end": 246,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 197,
                "end": 246,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 207,
                    "end": 227,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 211,
                        "end": 226,
                        "id": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 212,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 215,
                          "end": 226,
                          "callee": {
                            "type": "Identifier",
                            "start": 219,
                            "end": 224,
                            "decorators": [],
                            "name": "Test2",
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 239,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 250,
      "end": 381,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 256,
        "end": 261,
        "decorators": [],
        "name": "Test3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 262,
        "end": 381,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 268,
            "end": 310,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 280,
              "end": 281,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 282,
              "end": 310,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 316,
            "end": 379,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 323,
              "end": 327,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 327,
              "end": 379,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 330,
                "end": 379,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 340,
                    "end": 360,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 344,
                        "end": 359,
                        "id": {
                          "type": "Identifier",
                          "start": 344,
                          "end": 345,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 348,
                          "end": 359,
                          "callee": {
                            "type": "Identifier",
                            "start": 352,
                            "end": 357,
                            "decorators": [],
                            "name": "Test3",
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 371,
                        "end": 372,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 383,
      "end": 507,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 394,
        "decorators": [],
        "name": "Test4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 395,
        "end": 507,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 401,
            "end": 436,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 413,
              "end": 414,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 414,
              "end": 436,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 415,
                  "end": 416,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
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
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 442,
            "end": 505,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 449,
              "end": 453,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 453,
              "end": 505,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 456,
                "end": 505,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 466,
                    "end": 486,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 470,
                        "end": 485,
                        "id": {
                          "type": "Identifier",
                          "start": 470,
                          "end": 471,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 474,
                          "end": 485,
                          "callee": {
                            "type": "Identifier",
                            "start": 478,
                            "end": 483,
                            "decorators": [],
                            "name": "Test4",
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 497,
                        "end": 498,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 509,
      "end": 621,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 515,
        "end": 520,
        "decorators": [],
        "name": "Test5",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
        "start": 524,
        "end": 621,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 530,
            "end": 543,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 538,
              "end": 539,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 548,
            "end": 619,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 555,
              "end": 559,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 559,
              "end": 619,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 562,
                "end": 619,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 572,
                    "end": 600,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 576,
                        "end": 599,
                        "id": {
                          "type": "Identifier",
                          "start": 576,
                          "end": 577,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 580,
                          "end": 599,
                          "callee": {
                            "type": "Identifier",
                            "start": 584,
                            "end": 589,
                            "decorators": [],
                            "name": "Test5",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                          },
                          "arguments": []
                        },
                        "definite": false
                      }
                    ],
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 611,
                        "end": 612,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 623,
      "end": 814,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 629,
        "end": 634,
        "decorators": [],
        "name": "Test6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 635,
        "end": 814,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 641,
            "end": 682,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 653,
              "end": 654,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 654,
              "end": 682,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 687,
            "end": 722,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 699,
              "end": 700,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 700,
              "end": 722,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 701,
                  "end": 702,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
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
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 727,
            "end": 741,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 735,
              "end": 736,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 739,
              "end": 740,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 747,
            "end": 812,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 754,
              "end": 758,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 758,
              "end": 812,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 761,
                "end": 812,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 771,
                    "end": 791,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 775,
                        "end": 790,
                        "id": {
                          "type": "Identifier",
                          "start": 775,
                          "end": 776,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 779,
                          "end": 790,
                          "callee": {
                            "type": "Identifier",
                            "start": 783,
                            "end": 788,
                            "decorators": [],
                            "name": "Test6",
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 802,
                          "end": 803,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "directive": null
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
