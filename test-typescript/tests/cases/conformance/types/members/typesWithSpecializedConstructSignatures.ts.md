__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 650,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 82,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 69,
            "end": 80,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "name": "foo",
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
              "start": 72,
              "end": 80,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 74,
                "end": 80
              }
            },
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
      "start": 83,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 97,
        "name": "Derived1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 106,
        "end": 110,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 126,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 113,
            "end": 124,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
              "name": "bar",
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
              "start": 116,
              "end": 124,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 118,
                "end": 124
              }
            },
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
      "start": 127,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 141,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 150,
        "end": 154,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 155,
        "end": 170,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 157,
            "end": 168,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 160,
              "name": "baz",
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
              "start": 160,
              "end": 168,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 162,
                "end": 168
              }
            },
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
      "start": 172,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 179,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 180,
        "end": 309,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 186,
            "end": 207,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 197,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 197,
              "end": 207,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 198,
                  "end": 205,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 199,
                    "end": 205,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 201,
                      "end": 205,
                      "literal": {
                        "type": "Literal",
                        "start": 201,
                        "end": 205,
                        "value": "hi",
                        "raw": "'hi'"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 212,
            "end": 234,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 223,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 223,
              "end": 234,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 224,
                  "end": 232,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 225,
                    "end": 232,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 227,
                      "end": 232,
                      "literal": {
                        "type": "Literal",
                        "start": 227,
                        "end": 232,
                        "value": "bye",
                        "raw": "'bye'"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 239,
            "end": 262,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 250,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 250,
              "end": 262,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 251,
                  "end": 260,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 252,
                    "end": 260,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 254,
                      "end": 260
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 267,
            "end": 307,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 278,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 278,
              "end": 307,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 279,
                  "end": 280,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 282,
                "end": 307,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 292,
                    "end": 301,
                    "argument": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 300,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "type": "VariableDeclaration",
      "start": 310,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 328,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 315,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 318,
            "end": 328,
            "callee": {
              "type": "Identifier",
              "start": 322,
              "end": 323,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 324,
                "end": 327,
                "value": "a",
                "raw": "'a'"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 331,
      "end": 429,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 342,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 343,
        "end": 429,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 349,
            "end": 372,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 353,
                "end": 360,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 354,
                  "end": 360,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 356,
                    "end": 360,
                    "literal": {
                      "type": "Literal",
                      "start": 356,
                      "end": 360,
                      "value": "hi",
                      "raw": "'hi'"
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 361,
              "end": 371,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 363,
                "end": 371,
                "typeName": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 371,
                  "name": "Derived1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 377,
            "end": 401,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 381,
                "end": 389,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 382,
                  "end": 389,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 384,
                    "end": 389,
                    "literal": {
                      "type": "Literal",
                      "start": 384,
                      "end": 389,
                      "value": "bye",
                      "raw": "'bye'"
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 390,
              "end": 400,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 392,
                "end": 400,
                "typeName": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 400,
                  "name": "Derived2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 406,
            "end": 427,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 410,
                "end": 419,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 411,
                  "end": 419,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 413,
                    "end": 419
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 420,
              "end": 426,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 422,
                "end": 426,
                "typeName": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 426,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 430,
      "end": 439,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 438,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 438,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 435,
              "end": 438,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 437,
                "end": 438,
                "typeName": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 438,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 441,
      "end": 535,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 445,
          "end": 534,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 534,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 446,
              "end": 534,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 448,
                "end": 534,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 454,
                    "end": 477,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 458,
                        "end": 465,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 459,
                          "end": 465,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 461,
                            "end": 465,
                            "literal": {
                              "type": "Literal",
                              "start": 461,
                              "end": 465,
                              "value": "hi",
                              "raw": "'hi'"
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 466,
                      "end": 476,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 468,
                        "end": 476,
                        "typeName": {
                          "type": "Identifier",
                          "start": 468,
                          "end": 476,
                          "name": "Derived1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 482,
                    "end": 506,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 486,
                        "end": 494,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 487,
                          "end": 494,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 489,
                            "end": 494,
                            "literal": {
                              "type": "Literal",
                              "start": 489,
                              "end": 494,
                              "value": "bye",
                              "raw": "'bye'"
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 495,
                      "end": 505,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 497,
                        "end": 505,
                        "typeName": {
                          "type": "Identifier",
                          "start": 497,
                          "end": 505,
                          "name": "Derived2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 511,
                    "end": 532,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 515,
                        "end": 524,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 516,
                          "end": 524,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 518,
                            "end": 524
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 525,
                      "end": 531,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 527,
                        "end": 531,
                        "typeName": {
                          "type": "Identifier",
                          "start": 527,
                          "end": 531,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 537,
      "end": 543,
      "expression": {
        "type": "AssignmentExpression",
        "start": 537,
        "end": 542,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 537,
          "end": 538,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 541,
          "end": 542,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 544,
      "end": 550,
      "expression": {
        "type": "AssignmentExpression",
        "start": 544,
        "end": 549,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 544,
          "end": 545,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 548,
          "end": 549,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 552,
      "end": 558,
      "expression": {
        "type": "AssignmentExpression",
        "start": 552,
        "end": 557,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 552,
          "end": 553,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 556,
          "end": 557,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 560,
      "end": 566,
      "expression": {
        "type": "AssignmentExpression",
        "start": 560,
        "end": 565,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 560,
          "end": 561,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 564,
          "end": 565,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 568,
      "end": 589,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 572,
          "end": 588,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 574,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 577,
            "end": 588,
            "callee": {
              "type": "Identifier",
              "start": 581,
              "end": 582,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 583,
                "end": 587,
                "value": "hi",
                "raw": "'hi'"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 590,
      "end": 622,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 594,
          "end": 621,
          "id": {
            "type": "Identifier",
            "start": 594,
            "end": 606,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 596,
              "end": 606,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 598,
                "end": 606,
                "typeName": {
                  "type": "Identifier",
                  "start": 598,
                  "end": 606,
                  "name": "Derived2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 609,
            "end": 621,
            "callee": {
              "type": "Identifier",
              "start": 613,
              "end": 614,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 615,
                "end": 620,
                "value": "bye",
                "raw": "'bye'"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 623,
      "end": 650,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 627,
          "end": 649,
          "id": {
            "type": "Identifier",
            "start": 627,
            "end": 635,
            "name": "r3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 629,
              "end": 635,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 631,
                "end": 635,
                "typeName": {
                  "type": "Identifier",
                  "start": 631,
                  "end": 635,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 638,
            "end": 649,
            "callee": {
              "type": "Identifier",
              "start": 642,
              "end": 643,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 644,
                "end": 648,
                "value": "hm",
                "raw": "'hm'"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
