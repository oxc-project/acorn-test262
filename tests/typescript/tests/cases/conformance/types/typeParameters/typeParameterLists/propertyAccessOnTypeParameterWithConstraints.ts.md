__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 107,
  "end": 645,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 107,
      "end": 242,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 131,
        "end": 242,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 137,
            "end": 240,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 138,
              "end": 240,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 141,
                "end": 240,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 151,
                    "end": 160,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 155,
                        "end": 159,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 159,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 156,
                            "end": 159,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 158,
                              "end": 159,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 158,
                                "end": 159,
                                "decorators": [],
                                "name": "T",
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
                    "start": 169,
                    "end": 192,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 173,
                        "end": 191,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 174,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 177,
                          "end": 191,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 177,
                            "end": 189,
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "start": 177,
                              "end": 178,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Literal",
                              "start": 179,
                              "end": 188,
                              "raw": "'getDate'",
                              "value": "getDate"
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 211,
                    "end": 234,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 218,
                      "end": 233,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 219,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 222,
                        "end": 233,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 222,
                          "end": 231,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 222,
                            "end": 223,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 224,
                            "end": 231,
                            "decorators": [],
                            "name": "getDate",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 130,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 129,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 129,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 129,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 272,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 271,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 252,
            "end": 271,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 252,
              "end": 269,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 253,
                "end": 266,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 258,
                  "end": 264,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 259,
                      "end": 263,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 259,
                        "end": 263,
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 268,
                "end": 269,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 274,
      "end": 317,
      "body": {
        "type": "TSInterfaceBody",
        "start": 302,
        "end": 317,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 308,
            "end": 315,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 308,
              "end": 311,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 314,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 313,
                "end": 314,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 314,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 285,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 285,
        "end": 301,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 286,
            "end": 300,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 296,
              "end": 300,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 296,
                "end": 300,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 332,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 332,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 325,
                "end": 332,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 326,
                  "end": 332,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 327,
                      "end": 331,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 327,
                        "end": 331,
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 325,
                  "end": 326,
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
      "start": 334,
      "end": 359,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 358,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 340,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 343,
            "end": 358,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 343,
              "end": 356,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 343,
                "end": 348,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 344,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 348,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 349,
                "end": 356,
                "decorators": [],
                "name": "getDate",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 360,
      "end": 389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 388,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 367,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 370,
            "end": 388,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 370,
              "end": 386,
              "computed": true,
              "object": {
                "type": "MemberExpression",
                "start": 370,
                "end": 375,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 371,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 375,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 376,
                "end": 385,
                "raw": "'getDate'",
                "value": "getDate"
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 391,
      "end": 428,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 428,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 428,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 396,
              "end": 428,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 398,
                "end": 428,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 404,
                    "end": 426,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 422,
                      "end": 425,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 424,
                        "end": 425,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 424,
                          "end": 425,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 404,
                      "end": 420,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 405,
                          "end": 419,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 415,
                            "end": 419,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 415,
                              "end": 419,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 405,
                            "end": 406,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
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
      "type": "VariableDeclaration",
      "start": 429,
      "end": 458,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 457,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 435,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 438,
            "end": 457,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 438,
              "end": 455,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 438,
                "end": 447,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 439,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 439,
                  "end": 445,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 440,
                      "end": 444,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 440,
                        "end": 444,
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 448,
                "end": 455,
                "decorators": [],
                "name": "getDate",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 459,
      "end": 486,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 463,
          "end": 485,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 463,
            "end": 466,
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 469,
            "end": 485,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 469,
              "end": 483,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 469,
                "end": 472,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 469,
                  "end": 470,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 473,
                "end": 482,
                "raw": "'getDate'",
                "value": "getDate"
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 488,
      "end": 616,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 492,
          "end": 616,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 492,
            "end": 493,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 496,
            "end": 616,
            "properties": [
              {
                "type": "Property",
                "start": 502,
                "end": 614,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 502,
                  "end": 505,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 507,
                  "end": 614,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 533,
                    "end": 614,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 543,
                        "end": 566,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 547,
                            "end": 565,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 547,
                              "end": 548,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 551,
                              "end": 565,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 551,
                                "end": 563,
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "start": 551,
                                  "end": 552,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Literal",
                                  "start": 553,
                                  "end": 562,
                                  "raw": "'getDate'",
                                  "value": "getDate"
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 585,
                        "end": 608,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 592,
                          "end": 607,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 592,
                            "end": 593,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 596,
                            "end": 607,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 596,
                              "end": 605,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 596,
                                "end": 597,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 598,
                                "end": 605,
                                "decorators": [],
                                "name": "getDate",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 524,
                      "end": 528,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 525,
                        "end": 528,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 527,
                          "end": 528,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 527,
                            "end": 528,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 507,
                    "end": 523,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 508,
                        "end": 522,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 518,
                          "end": 522,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 518,
                            "end": 522,
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 508,
                          "end": 509,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 618,
      "end": 645,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 622,
          "end": 644,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 622,
            "end": 624,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 627,
            "end": 644,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 633,
                "end": 643,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 641,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 627,
              "end": 632,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 627,
                "end": 628,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 629,
                "end": 632,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
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
