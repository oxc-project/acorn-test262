__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2541,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 96,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 27,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 21,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 24,
              "end": 26,
              "properties": []
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 94,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 43,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 43,
              "end": 94,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 94,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 56,
                    "end": 88,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 60,
                        "end": 87,
                        "id": {
                          "type": "Identifier",
                          "start": 60,
                          "end": 82,
                          "name": "copy",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 64,
                            "end": 82,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 66,
                              "end": 82,
                              "exprName": {
                                "type": "TSQualifiedName",
                                "start": 73,
                                "end": 82,
                                "left": {
                                  "type": "ThisExpression",
                                  "start": 73,
                                  "end": 77
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 78,
                                  "end": 82,
                                  "name": "data",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 85,
                          "end": 87,
                          "properties": []
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "accessibility": null
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
      "start": 98,
      "end": 375,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 109,
        "name": "Test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 110,
        "end": 375,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 116,
            "end": 135,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 120,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 123,
              "end": 134,
              "properties": [
                {
                  "type": "Property",
                  "start": 125,
                  "end": 132,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 128,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 130,
                    "end": 132,
                    "value": "",
                    "raw": "''"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 140,
            "end": 154,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 141,
              "end": 147,
              "value": "this",
              "raw": "'this'"
            },
            "value": {
              "type": "Literal",
              "start": 151,
              "end": 153,
              "value": "",
              "raw": "''"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 373,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 170,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 170,
              "end": 373,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 173,
                "end": 373,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 183,
                    "end": 224,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 187,
                        "end": 223,
                        "id": {
                          "type": "Identifier",
                          "start": 187,
                          "end": 209,
                          "name": "copy",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 191,
                            "end": 209,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 193,
                              "end": 209,
                              "exprName": {
                                "type": "TSQualifiedName",
                                "start": 200,
                                "end": 209,
                                "left": {
                                  "type": "ThisExpression",
                                  "start": 200,
                                  "end": 204
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 205,
                                  "end": 209,
                                  "name": "data",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 212,
                          "end": 223,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 214,
                              "end": 221,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 214,
                                "end": 217,
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 219,
                                "end": 221,
                                "value": "",
                                "raw": "''"
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 233,
                    "end": 268,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 237,
                        "end": 267,
                        "id": {
                          "type": "Identifier",
                          "start": 237,
                          "end": 262,
                          "name": "foo",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 240,
                            "end": 262,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 242,
                              "end": 262,
                              "exprName": {
                                "type": "TSQualifiedName",
                                "start": 249,
                                "end": 262,
                                "left": {
                                  "type": "TSQualifiedName",
                                  "start": 249,
                                  "end": 258,
                                  "left": {
                                    "type": "ThisExpression",
                                    "start": 249,
                                    "end": 253
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 254,
                                    "end": 258,
                                    "name": "data",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 259,
                                  "end": 262,
                                  "name": "foo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 265,
                          "end": 267,
                          "value": "",
                          "raw": "''"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 278,
                    "end": 307,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 282,
                        "end": 306,
                        "id": {
                          "type": "Identifier",
                          "start": 282,
                          "end": 299,
                          "name": "self",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 286,
                            "end": 299,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 288,
                              "end": 299,
                              "exprName": {
                                "type": "ThisExpression",
                                "start": 295,
                                "end": 299
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 302,
                          "end": 306
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 316,
                    "end": 326,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 316,
                      "end": 325,
                      "object": {
                        "type": "Identifier",
                        "start": 316,
                        "end": 320,
                        "name": "self",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 321,
                        "end": 325,
                        "name": "data",
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
                    "type": "VariableDeclaration",
                    "start": 336,
                    "end": 367,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 340,
                        "end": 366,
                        "id": {
                          "type": "Identifier",
                          "start": 340,
                          "end": 361,
                          "name": "str",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 343,
                            "end": 361,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 345,
                              "end": 361,
                              "exprName": {
                                "type": "TSQualifiedName",
                                "start": 352,
                                "end": 361,
                                "left": {
                                  "type": "ThisExpression",
                                  "start": 352,
                                  "end": 356
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 357,
                                  "end": 361,
                                  "name": "this",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 364,
                          "end": 366,
                          "value": "",
                          "raw": "''"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "accessibility": null
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
      "type": "FunctionDeclaration",
      "start": 378,
      "end": 429,
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 392,
        "name": "Test2",
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
        "start": 395,
        "end": 429,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 401,
            "end": 427,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 405,
                "end": 426,
                "id": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 422,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 406,
                    "end": 422,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 408,
                      "end": 422,
                      "exprName": {
                        "type": "TSQualifiedName",
                        "start": 415,
                        "end": 422,
                        "left": {
                          "type": "ThisExpression",
                          "start": 415,
                          "end": 419
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 420,
                          "end": 422,
                          "name": "no",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 425,
                  "end": 426,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 431,
      "end": 502,
      "id": {
        "type": "Identifier",
        "start": 440,
        "end": 445,
        "name": "Test3",
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
          "start": 446,
          "end": 466,
          "name": "this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 450,
            "end": 466,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 452,
              "end": 466,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 454,
                  "end": 464,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 454,
                    "end": 456,
                    "name": "no",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 456,
                    "end": 464,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 458,
                      "end": 464
                    }
                  },
                  "accessibility": null,
                  "static": false
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
        "start": 468,
        "end": 502,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 474,
            "end": 500,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 478,
                "end": 499,
                "id": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 495,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 479,
                    "end": 495,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 481,
                      "end": 495,
                      "exprName": {
                        "type": "TSQualifiedName",
                        "start": 488,
                        "end": 495,
                        "left": {
                          "type": "ThisExpression",
                          "start": 488,
                          "end": 492
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 493,
                          "end": 495,
                          "name": "no",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 498,
                  "end": 499,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 504,
      "end": 587,
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 518,
        "name": "Test4",
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
          "start": 519,
          "end": 551,
          "name": "this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 523,
            "end": 551,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 525,
              "end": 551,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 525,
                  "end": 539,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 527,
                      "end": 537,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 527,
                        "end": 529,
                        "name": "no",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 529,
                        "end": 537,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 531,
                          "end": 537
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 542,
                  "end": 551
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
        "start": 553,
        "end": 587,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 559,
            "end": 585,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 563,
                "end": 584,
                "id": {
                  "type": "Identifier",
                  "start": 563,
                  "end": 580,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 564,
                    "end": 580,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 566,
                      "end": 580,
                      "exprName": {
                        "type": "TSQualifiedName",
                        "start": 573,
                        "end": 580,
                        "left": {
                          "type": "ThisExpression",
                          "start": 573,
                          "end": 577
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 578,
                          "end": 580,
                          "name": "no",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 583,
                  "end": 584,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 589,
      "end": 710,
      "id": {
        "type": "Identifier",
        "start": 595,
        "end": 600,
        "name": "Test5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 601,
        "end": 710,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 607,
            "end": 614,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 607,
              "end": 609,
              "name": "no",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 612,
              "end": 613,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 620,
            "end": 708,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 620,
              "end": 621,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 624,
              "end": 708,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 630,
                "end": 708,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 676,
                    "end": 702,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 680,
                        "end": 701,
                        "id": {
                          "type": "Identifier",
                          "start": 680,
                          "end": 697,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 681,
                            "end": 697,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 683,
                              "end": 697,
                              "exprName": {
                                "type": "TSQualifiedName",
                                "start": 690,
                                "end": 697,
                                "left": {
                                  "type": "ThisExpression",
                                  "start": 690,
                                  "end": 694
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 695,
                                  "end": 697,
                                  "name": "no",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 700,
                          "end": 701,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
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
      "type": "TSModuleDeclaration",
      "start": 712,
      "end": 799,
      "id": {
        "type": "Identifier",
        "start": 722,
        "end": 727,
        "name": "Test6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 728,
        "end": 799,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 734,
            "end": 797,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 741,
              "end": 797,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 745,
                  "end": 797,
                  "id": {
                    "type": "Identifier",
                    "start": 745,
                    "end": 746,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 749,
                    "end": 797,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 755,
                      "end": 797,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 765,
                          "end": 791,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 769,
                              "end": 790,
                              "id": {
                                "type": "Identifier",
                                "start": 769,
                                "end": 786,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 770,
                                  "end": 786,
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "start": 772,
                                    "end": 786,
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "start": 779,
                                      "end": 786,
                                      "left": {
                                        "type": "ThisExpression",
                                        "start": 779,
                                        "end": 783
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 784,
                                        "end": 786,
                                        "name": "no",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "Literal",
                                "start": 789,
                                "end": 790,
                                "value": 1,
                                "raw": "1"
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 801,
      "end": 885,
      "id": {
        "type": "Identifier",
        "start": 808,
        "end": 813,
        "name": "Test7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 814,
        "end": 885,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 820,
            "end": 883,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 827,
              "end": 883,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 831,
                  "end": 883,
                  "id": {
                    "type": "Identifier",
                    "start": 831,
                    "end": 832,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 835,
                    "end": 883,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 841,
                      "end": 883,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 851,
                          "end": 877,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 855,
                              "end": 876,
                              "id": {
                                "type": "Identifier",
                                "start": 855,
                                "end": 872,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 856,
                                  "end": 872,
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "start": 858,
                                    "end": 872,
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "start": 865,
                                      "end": 872,
                                      "left": {
                                        "type": "ThisExpression",
                                        "start": 865,
                                        "end": 869
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 870,
                                        "end": 872,
                                        "name": "no",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "Literal",
                                "start": 875,
                                "end": 876,
                                "value": 1,
                                "raw": "1"
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 887,
      "end": 941,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 893,
          "end": 941,
          "id": {
            "type": "Identifier",
            "start": 893,
            "end": 898,
            "name": "Test8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 901,
            "end": 941,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 907,
              "end": 941,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 913,
                  "end": 939,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 917,
                      "end": 938,
                      "id": {
                        "type": "Identifier",
                        "start": 917,
                        "end": 934,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 918,
                          "end": 934,
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "start": 920,
                            "end": 934,
                            "exprName": {
                              "type": "TSQualifiedName",
                              "start": 927,
                              "end": 934,
                              "left": {
                                "type": "ThisExpression",
                                "start": 927,
                                "end": 931
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 932,
                                "end": 934,
                                "name": "no",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 937,
                        "end": 938,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 943,
      "end": 1424,
      "id": {
        "type": "Identifier",
        "start": 949,
        "end": 954,
        "name": "Test9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 955,
        "end": 1424,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 961,
            "end": 968,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 961,
              "end": 963,
              "name": "no",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 966,
              "end": 967,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 973,
            "end": 982,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 973,
              "end": 977,
              "name": "this",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 980,
              "end": 981,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 988,
            "end": 1224,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 988,
              "end": 989,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 989,
              "end": 1224,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 992,
                "end": 1224,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1002,
                    "end": 1105,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1006,
                      "end": 1029,
                      "left": {
                        "type": "ThisExpression",
                        "start": 1006,
                        "end": 1010
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "start": 1022,
                        "end": 1029,
                        "name": "Test9D1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1031,
                      "end": 1105,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 1045,
                          "end": 1074,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1051,
                              "end": 1073,
                              "id": {
                                "type": "Identifier",
                                "start": 1051,
                                "end": 1066,
                                "name": "d1",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1053,
                                  "end": 1066,
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "start": 1055,
                                    "end": 1066,
                                    "exprName": {
                                      "type": "ThisExpression",
                                      "start": 1062,
                                      "end": 1066
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 1069,
                                "end": 1073
                              },
                              "definite": false
                            }
                          ],
                          "kind": "const",
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1087,
                          "end": 1095,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1087,
                            "end": 1094,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1087,
                              "end": 1092,
                              "object": {
                                "type": "Identifier",
                                "start": 1087,
                                "end": 1089,
                                "name": "d1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1090,
                                "end": 1092,
                                "name": "f1",
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
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 1115,
                    "end": 1218,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1119,
                      "end": 1142,
                      "left": {
                        "type": "ThisExpression",
                        "start": 1119,
                        "end": 1123
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "start": 1135,
                        "end": 1142,
                        "name": "Test9D2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1144,
                      "end": 1218,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 1158,
                          "end": 1187,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1164,
                              "end": 1186,
                              "id": {
                                "type": "Identifier",
                                "start": 1164,
                                "end": 1179,
                                "name": "d2",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1166,
                                  "end": 1179,
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "start": 1168,
                                    "end": 1179,
                                    "exprName": {
                                      "type": "ThisExpression",
                                      "start": 1175,
                                      "end": 1179
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 1182,
                                "end": 1186
                              },
                              "definite": false
                            }
                          ],
                          "kind": "const",
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1200,
                          "end": 1208,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1200,
                            "end": 1207,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1200,
                              "end": 1205,
                              "object": {
                                "type": "Identifier",
                                "start": 1200,
                                "end": 1202,
                                "name": "d2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1203,
                                "end": 1205,
                                "name": "f2",
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
                    "alternate": null
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1230,
            "end": 1422,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1230,
              "end": 1231,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1231,
              "end": 1422,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1234,
                "end": 1422,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1244,
                    "end": 1322,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1248,
                      "end": 1261,
                      "left": {
                        "type": "MemberExpression",
                        "start": 1248,
                        "end": 1255,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1248,
                          "end": 1252
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1253,
                          "end": 1255,
                          "name": "no",
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
                        "start": 1260,
                        "end": 1261,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1263,
                      "end": 1322,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 1277,
                          "end": 1312,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1283,
                              "end": 1311,
                              "id": {
                                "type": "Identifier",
                                "start": 1283,
                                "end": 1301,
                                "name": "no",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1285,
                                  "end": 1301,
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "start": 1287,
                                    "end": 1301,
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "start": 1294,
                                      "end": 1301,
                                      "left": {
                                        "type": "ThisExpression",
                                        "start": 1294,
                                        "end": 1298
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 1299,
                                        "end": 1301,
                                        "name": "no",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 1304,
                                "end": 1311,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1304,
                                  "end": 1308
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1309,
                                  "end": 1311,
                                  "name": "no",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "kind": "const",
                          "declare": false
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 1332,
                    "end": 1416,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1336,
                      "end": 1351,
                      "left": {
                        "type": "MemberExpression",
                        "start": 1336,
                        "end": 1345,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1336,
                          "end": 1340
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1341,
                          "end": 1345,
                          "name": "this",
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
                        "start": 1350,
                        "end": 1351,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1353,
                      "end": 1416,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 1367,
                          "end": 1406,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1373,
                              "end": 1405,
                              "id": {
                                "type": "Identifier",
                                "start": 1373,
                                "end": 1393,
                                "name": "no",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1375,
                                  "end": 1393,
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "start": 1377,
                                    "end": 1393,
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "start": 1384,
                                      "end": 1393,
                                      "left": {
                                        "type": "ThisExpression",
                                        "start": 1384,
                                        "end": 1388
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 1389,
                                        "end": 1393,
                                        "name": "this",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 1396,
                                "end": 1405,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1396,
                                  "end": 1400
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1401,
                                  "end": 1405,
                                  "name": "this",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "kind": "const",
                          "declare": false
                        }
                      ]
                    },
                    "alternate": null
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
            "accessibility": null
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
      "start": 1426,
      "end": 1455,
      "id": {
        "type": "Identifier",
        "start": 1432,
        "end": 1439,
        "name": "Test9D1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1440,
        "end": 1455,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1446,
            "end": 1453,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1446,
              "end": 1448,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1448,
              "end": 1453,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1451,
                "end": 1453,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
      "start": 1457,
      "end": 1486,
      "id": {
        "type": "Identifier",
        "start": 1463,
        "end": 1470,
        "name": "Test9D2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1471,
        "end": 1486,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1477,
            "end": 1484,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1477,
              "end": 1479,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1479,
              "end": 1484,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1482,
                "end": 1484,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
      "start": 1488,
      "end": 1904,
      "id": {
        "type": "Identifier",
        "start": 1494,
        "end": 1500,
        "name": "Test10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1501,
        "end": 1904,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1507,
            "end": 1525,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1507,
              "end": 1508,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1509,
              "end": 1525,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1511,
                "end": 1525,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1513,
                    "end": 1523,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1513,
                      "end": 1514,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1515,
                      "end": 1523,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1517,
                        "end": 1523
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1531,
            "end": 1902,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1531,
              "end": 1534,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1534,
              "end": 1902,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1537,
                "end": 1902,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1547,
                    "end": 1587,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1551,
                        "end": 1586,
                        "id": {
                          "type": "Identifier",
                          "start": 1551,
                          "end": 1567,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1552,
                            "end": 1567,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 1554,
                              "end": 1567,
                              "exprName": {
                                "type": "TSQualifiedName",
                                "start": 1561,
                                "end": 1567,
                                "left": {
                                  "type": "ThisExpression",
                                  "start": 1561,
                                  "end": 1565
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 1566,
                                  "end": 1567,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "start": 1570,
                          "end": 1586,
                          "expression": {
                            "type": "Identifier",
                            "start": 1570,
                            "end": 1579,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1583,
                            "end": 1586
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 1596,
                    "end": 1896,
                    "test": {
                      "type": "MemberExpression",
                      "start": 1600,
                      "end": 1606,
                      "object": {
                        "type": "ThisExpression",
                        "start": 1600,
                        "end": 1604
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1605,
                        "end": 1606,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1608,
                      "end": 1896,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 1622,
                          "end": 1662,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1626,
                              "end": 1661,
                              "id": {
                                "type": "Identifier",
                                "start": 1626,
                                "end": 1642,
                                "name": "a",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1627,
                                  "end": 1642,
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "start": 1629,
                                    "end": 1642,
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "start": 1636,
                                      "end": 1642,
                                      "left": {
                                        "type": "ThisExpression",
                                        "start": 1636,
                                        "end": 1640
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 1641,
                                        "end": 1642,
                                        "name": "a",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "TSAsExpression",
                                "start": 1645,
                                "end": 1661,
                                "expression": {
                                  "type": "Identifier",
                                  "start": 1645,
                                  "end": 1654,
                                  "name": "undefined",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1658,
                                  "end": 1661
                                }
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1713,
                          "end": 1755,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1717,
                              "end": 1754,
                              "id": {
                                "type": "Identifier",
                                "start": 1717,
                                "end": 1735,
                                "name": "b",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1718,
                                  "end": 1735,
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "start": 1720,
                                    "end": 1735,
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "start": 1727,
                                      "end": 1735,
                                      "left": {
                                        "type": "TSQualifiedName",
                                        "start": 1727,
                                        "end": 1733,
                                        "left": {
                                          "type": "ThisExpression",
                                          "start": 1727,
                                          "end": 1731
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 1732,
                                          "end": 1733,
                                          "name": "a",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 1734,
                                        "end": 1735,
                                        "name": "b",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "TSAsExpression",
                                "start": 1738,
                                "end": 1754,
                                "expression": {
                                  "type": "Identifier",
                                  "start": 1738,
                                  "end": 1747,
                                  "name": "undefined",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1751,
                                  "end": 1754
                                }
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        },
                        {
                          "type": "IfStatement",
                          "start": 1769,
                          "end": 1886,
                          "test": {
                            "type": "MemberExpression",
                            "start": 1773,
                            "end": 1781,
                            "object": {
                              "type": "MemberExpression",
                              "start": 1773,
                              "end": 1779,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1773,
                                "end": 1777
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1778,
                                "end": 1779,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1780,
                              "end": 1781,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 1783,
                            "end": 1886,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 1801,
                                "end": 1843,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 1805,
                                    "end": 1842,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 1805,
                                      "end": 1823,
                                      "name": "b",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 1806,
                                        "end": 1823,
                                        "typeAnnotation": {
                                          "type": "TSTypeQuery",
                                          "start": 1808,
                                          "end": 1823,
                                          "exprName": {
                                            "type": "TSQualifiedName",
                                            "start": 1815,
                                            "end": 1823,
                                            "left": {
                                              "type": "TSQualifiedName",
                                              "start": 1815,
                                              "end": 1821,
                                              "left": {
                                                "type": "ThisExpression",
                                                "start": 1815,
                                                "end": 1819
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "start": 1820,
                                                "end": 1821,
                                                "name": "a",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "start": 1822,
                                              "end": 1823,
                                              "name": "b",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            }
                                          },
                                          "typeArguments": null
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "TSAsExpression",
                                      "start": 1826,
                                      "end": 1842,
                                      "expression": {
                                        "type": "Identifier",
                                        "start": 1826,
                                        "end": 1835,
                                        "name": "undefined",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "start": 1839,
                                        "end": 1842
                                      }
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "let",
                                "declare": false
                              }
                            ]
                          },
                          "alternate": null
                        }
                      ]
                    },
                    "alternate": null
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
            "accessibility": null
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
      "start": 1906,
      "end": 2145,
      "id": {
        "type": "Identifier",
        "start": 1912,
        "end": 1918,
        "name": "Test11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1919,
        "end": 2145,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1925,
            "end": 1947,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1925,
              "end": 1929,
              "name": "this",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1930,
              "end": 1946,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1932,
                "end": 1946,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1934,
                    "end": 1944,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1934,
                      "end": 1935,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1936,
                      "end": 1944,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1938,
                        "end": 1944
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1957,
            "end": 2143,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1957,
              "end": 1960,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1960,
              "end": 2143,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1963,
                "end": 2143,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1973,
                    "end": 1988,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1979,
                        "end": 1987,
                        "id": {
                          "type": "Identifier",
                          "start": 1979,
                          "end": 1980,
                          "name": "o",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1983,
                          "end": 1987
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1997,
                    "end": 2025,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2001,
                        "end": 2024,
                        "id": {
                          "type": "Identifier",
                          "start": 2001,
                          "end": 2019,
                          "name": "bar",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2004,
                            "end": 2019,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 2006,
                              "end": 2019,
                              "exprName": {
                                "type": "TSQualifiedName",
                                "start": 2013,
                                "end": 2019,
                                "left": {
                                  "type": "Identifier",
                                  "start": 2013,
                                  "end": 2014,
                                  "name": "o",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 2015,
                                  "end": 2019,
                                  "name": "this",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 2022,
                          "end": 2024,
                          "properties": []
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 2035,
                    "end": 2137,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 2039,
                      "end": 2057,
                      "left": {
                        "type": "MemberExpression",
                        "start": 2039,
                        "end": 2045,
                        "object": {
                          "type": "Identifier",
                          "start": 2039,
                          "end": 2040,
                          "name": "o",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2041,
                          "end": 2045,
                          "name": "this",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 2049,
                        "end": 2057,
                        "object": {
                          "type": "MemberExpression",
                          "start": 2049,
                          "end": 2055,
                          "object": {
                            "type": "Identifier",
                            "start": 2049,
                            "end": 2050,
                            "name": "o",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2051,
                            "end": 2055,
                            "name": "this",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2056,
                          "end": 2057,
                          "name": "x",
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
                      "start": 2059,
                      "end": 2137,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 2073,
                          "end": 2098,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2077,
                              "end": 2097,
                              "id": {
                                "type": "Identifier",
                                "start": 2077,
                                "end": 2086,
                                "name": "y",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2078,
                                  "end": 2086,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2080,
                                    "end": 2086
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 2089,
                                "end": 2097,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 2089,
                                  "end": 2095,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 2089,
                                    "end": 2090,
                                    "name": "o",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2091,
                                    "end": 2095,
                                    "name": "this",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2096,
                                  "end": 2097,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        }
                      ]
                    },
                    "alternate": null
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
            "accessibility": null
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
      "start": 2147,
      "end": 2541,
      "id": {
        "type": "Identifier",
        "start": 2153,
        "end": 2160,
        "name": "Tests12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2161,
        "end": 2541,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2167,
            "end": 2221,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2167,
              "end": 2172,
              "name": "test1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2172,
              "end": 2221,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2175,
                "end": 2221,
                "body": [
                  {
                    "type": "TSTypeAliasDeclaration",
                    "start": 2191,
                    "end": 2215,
                    "id": {
                      "type": "Identifier",
                      "start": 2196,
                      "end": 2200,
                      "name": "Test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 2203,
                      "end": 2214,
                      "exprName": {
                        "type": "ThisExpression",
                        "start": 2210,
                        "end": 2214
                      },
                      "typeArguments": null
                    },
                    "declare": false
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2227,
            "end": 2301,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2227,
              "end": 2232,
              "name": "test2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2232,
              "end": 2301,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2235,
                "end": 2301,
                "body": [
                  {
                    "type": "ForStatement",
                    "start": 2251,
                    "end": 2262,
                    "init": null,
                    "test": null,
                    "update": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2260,
                      "end": 2262,
                      "body": []
                    }
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "start": 2271,
                    "end": 2295,
                    "id": {
                      "type": "Identifier",
                      "start": 2276,
                      "end": 2280,
                      "name": "Test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 2283,
                      "end": 2294,
                      "exprName": {
                        "type": "ThisExpression",
                        "start": 2290,
                        "end": 2294
                      },
                      "typeArguments": null
                    },
                    "declare": false
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2307,
            "end": 2420,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2307,
              "end": 2312,
              "name": "test3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2312,
              "end": 2420,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2315,
                "end": 2420,
                "body": [
                  {
                    "type": "ForInStatement",
                    "start": 2355,
                    "end": 2381,
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 2360,
                      "end": 2371,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 2366,
                          "end": 2371,
                          "id": {
                            "type": "Identifier",
                            "start": 2366,
                            "end": 2371,
                            "name": "dummy",
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
                      "type": "ArrayExpression",
                      "start": 2375,
                      "end": 2377,
                      "elements": []
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 2379,
                      "end": 2381,
                      "body": []
                    }
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "start": 2390,
                    "end": 2414,
                    "id": {
                      "type": "Identifier",
                      "start": 2395,
                      "end": 2399,
                      "name": "Test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 2402,
                      "end": 2413,
                      "exprName": {
                        "type": "ThisExpression",
                        "start": 2409,
                        "end": 2413
                      },
                      "typeArguments": null
                    },
                    "declare": false
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2426,
            "end": 2539,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2426,
              "end": 2431,
              "name": "test4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2431,
              "end": 2539,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2434,
                "end": 2539,
                "body": [
                  {
                    "type": "ForOfStatement",
                    "start": 2474,
                    "end": 2500,
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 2479,
                      "end": 2490,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 2485,
                          "end": 2490,
                          "id": {
                            "type": "Identifier",
                            "start": 2485,
                            "end": 2490,
                            "name": "dummy",
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
                      "type": "ArrayExpression",
                      "start": 2494,
                      "end": 2496,
                      "elements": []
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 2498,
                      "end": 2500,
                      "body": []
                    }
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "start": 2509,
                    "end": 2533,
                    "id": {
                      "type": "Identifier",
                      "start": 2514,
                      "end": 2518,
                      "name": "Test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 2521,
                      "end": 2532,
                      "exprName": {
                        "type": "ThisExpression",
                        "start": 2528,
                        "end": 2532
                      },
                      "typeArguments": null
                    },
                    "declare": false
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
            "accessibility": null
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
