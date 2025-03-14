propertyAccessOnTypeParameterWithoutConstraints.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 519,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 134,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 134,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 132,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 18,
              "end": 132,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 21,
                "end": 132,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 31,
                    "end": 40,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 35,
                        "end": 39,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 35,
                          "end": 39,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 36,
                            "end": 39,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 38,
                              "end": 39,
                              "typeName": {
                                "type": "Identifier",
                                "start": 38,
                                "end": 39,
                                "decorators": [],
                                "name": "T",
                                "optional": false
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
                    "start": 49,
                    "end": 73,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 53,
                        "end": 72,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 53,
                          "end": 54,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 57,
                          "end": 72,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 57,
                            "end": 70,
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "start": 57,
                              "end": 58,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Literal",
                              "start": 59,
                              "end": 69,
                              "raw": "'toString'",
                              "value": "toString"
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 102,
                    "end": 126,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 109,
                      "end": 125,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 113,
                        "end": 125,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 113,
                          "end": 123,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 114,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 115,
                            "end": 123,
                            "decorators": [],
                            "name": "toString",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 165,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 144,
            "end": 165,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 144,
              "end": 163,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 145,
                "end": 160,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 150,
                  "end": 158,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 151,
                      "end": 157
                    }
                  ]
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 168,
      "end": 198,
      "body": {
        "type": "TSInterfaceBody",
        "start": 183,
        "end": 198,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 189,
            "end": 196,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 192,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 195,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 194,
                "end": 195,
                "typeName": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 195,
                  "decorators": [],
                  "name": "T",
                  "optional": false
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
        "start": 178,
        "end": 179,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 179,
        "end": 182,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 180,
            "end": 181,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 215,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 204,
              "end": 215,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 206,
                "end": 215,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 207,
                  "end": 215,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 208,
                      "end": 214
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "decorators": [],
                  "name": "I",
                  "optional": false
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
      "start": 217,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 223,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 226,
            "end": 242,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 226,
              "end": 240,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 226,
                "end": 231,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 231,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 232,
                "end": 240,
                "decorators": [],
                "name": "toString",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 273,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 251,
            "decorators": [],
            "name": "r2b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 254,
            "end": 273,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 254,
              "end": 271,
              "computed": true,
              "object": {
                "type": "MemberExpression",
                "start": 254,
                "end": 259,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 255,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 259,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 260,
                "end": 270,
                "raw": "'toString'",
                "value": "toString"
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 276,
      "end": 300,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 300,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 300,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 281,
              "end": 300,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 283,
                "end": 300,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 289,
                    "end": 298,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 294,
                      "end": 297,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 296,
                        "end": 297,
                        "typeName": {
                          "type": "Identifier",
                          "start": 296,
                          "end": 297,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 289,
                      "end": 292,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 290,
                          "end": 291,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 290,
                            "end": 291,
                            "decorators": [],
                            "name": "T",
                            "optional": false
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
      "start": 301,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 332,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 315,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 315,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 309,
                "end": 315
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 318,
            "end": 332,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 318,
              "end": 330,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 318,
                "end": 321,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 319,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 322,
                "end": 330,
                "decorators": [],
                "name": "toString",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 334,
      "end": 370,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 369,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 349,
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 341,
              "end": 349,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 343,
                "end": 349
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 352,
            "end": 369,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 352,
              "end": 367,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 352,
                "end": 355,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 353,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 356,
                "end": 366,
                "raw": "'toString'",
                "value": "toString"
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 372,
      "end": 499,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 499,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 377,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 380,
            "end": 499,
            "properties": [
              {
                "type": "Property",
                "start": 386,
                "end": 497,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 389,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 391,
                  "end": 497,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 404,
                    "end": 497,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 414,
                        "end": 438,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 418,
                            "end": 437,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 418,
                              "end": 419,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 422,
                              "end": 437,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 422,
                                "end": 435,
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "start": 422,
                                  "end": 423,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Literal",
                                  "start": 424,
                                  "end": 434,
                                  "raw": "'toString'",
                                  "value": "toString"
                                }
                              },
                              "optional": false
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 467,
                        "end": 491,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 474,
                          "end": 490,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 474,
                            "end": 475,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 478,
                            "end": 490,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 478,
                              "end": 488,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 478,
                                "end": 479,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 480,
                                "end": 488,
                                "decorators": [],
                                "name": "toString",
                                "optional": false
                              }
                            },
                            "optional": false
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
                      "start": 395,
                      "end": 399,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 396,
                        "end": 399,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 398,
                          "end": 399,
                          "typeName": {
                            "type": "Identifier",
                            "start": 398,
                            "end": 399,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 391,
                    "end": 394,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 392,
                        "end": 393,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 392,
                          "end": 393,
                          "decorators": [],
                          "name": "T",
                          "optional": false
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
      "start": 501,
      "end": 519,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 518,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 507,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 510,
            "end": 518,
            "arguments": [
              {
                "type": "Literal",
                "start": 516,
                "end": 517,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 510,
              "end": 515,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 510,
                "end": 511,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 512,
                "end": 515,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
