__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 717,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 230,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 20,
            "end": 150,
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 33,
              "end": 150,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 43,
                  "end": 126,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 50,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 51,
                    "end": 126,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 65,
                        "end": 116,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 76,
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 76,
                          "end": 116,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "TSParameterProperty",
                              "start": 77,
                              "end": 93,
                              "accessibility": "public",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "start": 84,
                                "end": 93,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 85,
                                  "end": 93,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 87,
                                    "end": 93
                                  }
                                }
                              },
                              "readonly": false,
                              "static": false
                            },
                            {
                              "type": "TSParameterProperty",
                              "start": 95,
                              "end": 111,
                              "accessibility": "public",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "start": 102,
                                "end": 111,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 103,
                                  "end": 111,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 105,
                                    "end": 111
                                  }
                                }
                              },
                              "readonly": false,
                              "static": false
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 113,
                            "end": 116,
                            "body": []
                          },
                          "expression": false
                        },
                        "kind": "constructor",
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
                  "type": "ReturnStatement",
                  "start": 135,
                  "end": 144,
                  "argument": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 143,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 155,
            "end": 167,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 159,
                "end": 166,
                "id": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 163,
                  "end": 166,
                  "callee": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
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
            "start": 172,
            "end": 194,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 176,
                "end": 193,
                "id": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 180,
                  "end": 193,
                  "callee": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 185,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 186,
                      "end": 188,
                      "value": 10,
                      "raw": "10"
                    },
                    {
                      "type": "Literal",
                      "start": 190,
                      "end": 192,
                      "value": 20,
                      "raw": "20"
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
            "start": 199,
            "end": 211,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 203,
                "end": 210,
                "id": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 204,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 207,
                  "end": 210,
                  "object": {
                    "type": "Identifier",
                    "start": 207,
                    "end": 208,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 210,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 216,
            "end": 228,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 220,
                "end": 227,
                "id": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 224,
                  "end": 227,
                  "object": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 225,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 232,
      "end": 477,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 243,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 246,
        "end": 477,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 252,
            "end": 399,
            "id": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 263,
                "end": 272,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 264,
                  "end": 272,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 266,
                    "end": 272
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 274,
              "end": 399,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 284,
                  "end": 375,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 290,
                    "end": 291,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 292,
                    "end": 375,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 306,
                        "end": 319,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 313,
                          "end": 314,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 318,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "public"
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 332,
                        "end": 365,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 332,
                          "end": 343,
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 343,
                          "end": 365,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "TSParameterProperty",
                              "start": 344,
                              "end": 360,
                              "accessibility": "public",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "start": 351,
                                "end": 360,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 352,
                                  "end": 360,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 354,
                                    "end": 360
                                  }
                                }
                              },
                              "readonly": false,
                              "static": false
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 362,
                            "end": 365,
                            "body": []
                          },
                          "expression": false
                        },
                        "kind": "constructor",
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
                  "type": "ReturnStatement",
                  "start": 384,
                  "end": 393,
                  "argument": {
                    "type": "Identifier",
                    "start": 391,
                    "end": 392,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 404,
            "end": 418,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 408,
                "end": 417,
                "id": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 409,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 412,
                  "end": 417,
                  "callee": {
                    "type": "Identifier",
                    "start": 412,
                    "end": 413,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 414,
                      "end": 416,
                      "value": 10,
                      "raw": "10"
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
            "type": "VariableDeclaration",
            "start": 423,
            "end": 441,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 427,
                "end": 440,
                "id": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 428,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 431,
                  "end": 440,
                  "callee": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 436,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 437,
                      "end": 439,
                      "value": 20,
                      "raw": "20"
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
            "start": 446,
            "end": 458,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 450,
                "end": 457,
                "id": {
                  "type": "Identifier",
                  "start": 450,
                  "end": 451,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 454,
                  "end": 457,
                  "object": {
                    "type": "Identifier",
                    "start": 454,
                    "end": 455,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 456,
                    "end": 457,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 463,
            "end": 475,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 467,
                "end": 474,
                "id": {
                  "type": "Identifier",
                  "start": 467,
                  "end": 468,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 471,
                  "end": 474,
                  "object": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 472,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 473,
                    "end": 474,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 479,
      "end": 717,
      "id": {
        "type": "Identifier",
        "start": 488,
        "end": 490,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 493,
        "end": 717,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 499,
            "end": 637,
            "id": {
              "type": "Identifier",
              "start": 508,
              "end": 509,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 510,
                "end": 519,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 511,
                  "end": 519,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 513,
                    "end": 519
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 521,
                "end": 530,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 522,
                  "end": 530,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 524,
                    "end": 530
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 532,
              "end": 637,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 542,
                  "end": 613,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 548,
                    "end": 549,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 550,
                    "end": 613,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 564,
                        "end": 577,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 571,
                          "end": 572,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "start": 575,
                          "end": 576,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "public"
                      },
                      {
                        "type": "PropertyDefinition",
                        "start": 590,
                        "end": 603,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 597,
                          "end": 598,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "start": 601,
                          "end": 602,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "public"
                      }
                    ]
                  },
                  "abstract": false,
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 622,
                  "end": 631,
                  "argument": {
                    "type": "Identifier",
                    "start": 629,
                    "end": 630,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 642,
            "end": 660,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 646,
                "end": 659,
                "id": {
                  "type": "Identifier",
                  "start": 646,
                  "end": 647,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 650,
                  "end": 659,
                  "callee": {
                    "type": "Identifier",
                    "start": 650,
                    "end": 651,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 652,
                      "end": 654,
                      "value": 10,
                      "raw": "10"
                    },
                    {
                      "type": "Literal",
                      "start": 656,
                      "end": 658,
                      "value": 20,
                      "raw": "20"
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
            "type": "VariableDeclaration",
            "start": 665,
            "end": 681,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 669,
                "end": 680,
                "id": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 670,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 673,
                  "end": 680,
                  "callee": {
                    "type": "Identifier",
                    "start": 677,
                    "end": 678,
                    "decorators": [],
                    "name": "C",
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
            "start": 686,
            "end": 698,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 690,
                "end": 697,
                "id": {
                  "type": "Identifier",
                  "start": 690,
                  "end": 691,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 694,
                  "end": 697,
                  "object": {
                    "type": "Identifier",
                    "start": 694,
                    "end": 695,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 697,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 703,
            "end": 715,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 707,
                "end": 714,
                "id": {
                  "type": "Identifier",
                  "start": 707,
                  "end": 708,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 711,
                  "end": 714,
                  "object": {
                    "type": "Identifier",
                    "start": 711,
                    "end": 712,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 714,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
