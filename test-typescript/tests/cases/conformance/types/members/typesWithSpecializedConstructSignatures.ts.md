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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 82,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 69,
            "end": 80,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 126,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 126,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 113,
            "end": 124,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 97,
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 106,
        "end": 110,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 127,
      "end": 170,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 155,
        "end": 170,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 157,
            "end": 168,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 160,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 141,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 150,
        "end": 154,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 172,
      "end": 309,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 180,
        "end": 309,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 186,
            "end": 207,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 197,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 197,
              "end": 207,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 198,
                  "end": 205,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "raw": "'hi'",
                        "value": "hi",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 212,
            "end": 234,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 223,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 223,
              "end": 234,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 224,
                  "end": 232,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "raw": "'bye'",
                        "value": "bye",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 239,
            "end": 262,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 250,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 250,
              "end": 262,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 251,
                  "end": 260,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 252,
                    "end": 260,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 254,
                      "end": 260
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 267,
            "end": 307,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 278,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 278,
              "end": 307,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 279,
                  "end": 280,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 179,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 315,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 318,
            "end": 328,
            "arguments": [
              {
                "type": "Literal",
                "start": 324,
                "end": 327,
                "raw": "'a'",
                "value": "a",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 322,
              "end": 323,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 331,
      "end": 429,
      "body": {
        "type": "TSInterfaceBody",
        "start": 343,
        "end": 429,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 349,
            "end": 372,
            "params": [
              {
                "type": "Identifier",
                "start": 353,
                "end": 360,
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "raw": "'hi'",
                      "value": "hi",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 371,
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 377,
            "end": 401,
            "params": [
              {
                "type": "Identifier",
                "start": 381,
                "end": 389,
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "raw": "'bye'",
                      "value": "bye",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 400,
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 406,
            "end": 427,
            "params": [
              {
                "type": "Identifier",
                "start": 410,
                "end": 419,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 411,
                  "end": 419,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 413,
                    "end": 419
                  }
                }
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 426,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 342,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 438,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 435,
              "end": 438,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 437,
                "end": 438,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 438,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 534,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 458,
                        "end": 465,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                              "raw": "'hi'",
                              "value": "hi",
                              "regex": null,
                              "bigint": null
                            }
                          }
                        }
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 468,
                          "end": 476,
                          "decorators": [],
                          "name": "Derived1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 482,
                    "end": 506,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 486,
                        "end": 494,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                              "raw": "'bye'",
                              "value": "bye",
                              "regex": null,
                              "bigint": null
                            }
                          }
                        }
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 497,
                          "end": 505,
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 511,
                    "end": 532,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 515,
                        "end": 524,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 516,
                          "end": 524,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 518,
                            "end": 524
                          }
                        }
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 527,
                          "end": 531,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 537,
      "end": 543,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 537,
        "end": 542,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 537,
          "end": 538,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 541,
          "end": 542,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 544,
      "end": 550,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 544,
        "end": 549,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 544,
          "end": 545,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 548,
          "end": 549,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 552,
      "end": 558,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 552,
        "end": 557,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 552,
          "end": 553,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 556,
          "end": 557,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 560,
      "end": 566,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 560,
        "end": 565,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 560,
          "end": 561,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 564,
          "end": 565,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 574,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 577,
            "end": 588,
            "arguments": [
              {
                "type": "Literal",
                "start": 583,
                "end": 587,
                "raw": "'hi'",
                "value": "hi",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 581,
              "end": 582,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 594,
            "end": 606,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 596,
              "end": 606,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 598,
                "end": 606,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 598,
                  "end": 606,
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 609,
            "end": 621,
            "arguments": [
              {
                "type": "Literal",
                "start": 615,
                "end": 620,
                "raw": "'bye'",
                "value": "bye",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 613,
              "end": 614,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 627,
            "end": 635,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 629,
              "end": 635,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 631,
                "end": 635,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 631,
                  "end": 635,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 638,
            "end": 649,
            "arguments": [
              {
                "type": "Literal",
                "start": 644,
                "end": 648,
                "raw": "'hm'",
                "value": "hm",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 642,
              "end": 643,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
