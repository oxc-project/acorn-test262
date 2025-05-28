__ESTREE_TEST__:PASS:
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
        "start": 11,
        "end": 134,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 132,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 18,
              "end": 132,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 21,
                "end": 132,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 31,
                    "end": 40,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 35,
                        "end": 39,
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
                    "start": 49,
                    "end": 73,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 53,
                        "end": 72,
                        "id": {
                          "type": "Identifier",
                          "start": 53,
                          "end": 54,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 57,
                          "end": 72,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 57,
                            "end": 70,
                            "object": {
                              "type": "Identifier",
                              "start": 57,
                              "end": 58,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Literal",
                              "start": 59,
                              "end": 69,
                              "value": "toString",
                              "raw": "'toString'"
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
                    "start": 102,
                    "end": 126,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 109,
                      "end": 125,
                      "left": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "start": 113,
                        "end": 125,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 113,
                          "end": 123,
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
                            "end": 123,
                            "decorators": [],
                            "name": "toString",
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
      "start": 136,
      "end": 166,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 165,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 144,
            "end": 165,
            "callee": {
              "type": "MemberExpression",
              "start": 144,
              "end": 163,
              "object": {
                "type": "NewExpression",
                "start": 145,
                "end": 160,
                "callee": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
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
                },
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
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
      "type": "TSInterfaceDeclaration",
      "start": 168,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 179,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
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
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 192,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
      "start": 199,
      "end": 216,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 215,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
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
      "start": 217,
      "end": 243,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 223,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 226,
            "end": 242,
            "callee": {
              "type": "MemberExpression",
              "start": 226,
              "end": 240,
              "object": {
                "type": "MemberExpression",
                "start": 226,
                "end": 231,
                "object": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 231,
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
                "start": 232,
                "end": 240,
                "decorators": [],
                "name": "toString",
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
      "start": 244,
      "end": 274,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 273,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 251,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 254,
            "end": 273,
            "callee": {
              "type": "MemberExpression",
              "start": 254,
              "end": 271,
              "object": {
                "type": "MemberExpression",
                "start": 254,
                "end": 259,
                "object": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 255,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 259,
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
                "start": 260,
                "end": 270,
                "value": "toString",
                "raw": "'toString'"
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
      "start": 276,
      "end": 300,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 300,
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
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 289,
                      "end": 292,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 290,
                          "end": 291,
                          "name": {
                            "type": "Identifier",
                            "start": 290,
                            "end": 291,
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
      "start": 301,
      "end": 333,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 332,
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
            "callee": {
              "type": "MemberExpression",
              "start": 318,
              "end": 330,
              "object": {
                "type": "CallExpression",
                "start": 318,
                "end": 321,
                "callee": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 319,
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
                "type": "Identifier",
                "start": 322,
                "end": 330,
                "decorators": [],
                "name": "toString",
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
      "start": 334,
      "end": 370,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 369,
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
            "callee": {
              "type": "MemberExpression",
              "start": 352,
              "end": 367,
              "object": {
                "type": "CallExpression",
                "start": 352,
                "end": 355,
                "callee": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 353,
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
                "start": 356,
                "end": 366,
                "value": "toString",
                "raw": "'toString'"
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
      "start": 372,
      "end": 499,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 499,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 377,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 389,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 391,
                  "end": 497,
                  "expression": false,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 391,
                    "end": 394,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 392,
                        "end": 393,
                        "name": {
                          "type": "Identifier",
                          "start": 392,
                          "end": 393,
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
                    "start": 404,
                    "end": 497,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 414,
                        "end": 438,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 418,
                            "end": 437,
                            "id": {
                              "type": "Identifier",
                              "start": 418,
                              "end": 419,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 422,
                              "end": 437,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 422,
                                "end": 435,
                                "object": {
                                  "type": "Identifier",
                                  "start": 422,
                                  "end": 423,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 424,
                                  "end": 434,
                                  "value": "toString",
                                  "raw": "'toString'"
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
                        "start": 467,
                        "end": 491,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 474,
                          "end": 490,
                          "left": {
                            "type": "Identifier",
                            "start": 474,
                            "end": 475,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "start": 478,
                            "end": 490,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 478,
                              "end": 488,
                              "object": {
                                "type": "Identifier",
                                "start": 478,
                                "end": 479,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 480,
                                "end": 488,
                                "decorators": [],
                                "name": "toString",
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
      "start": 501,
      "end": 519,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 518,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 507,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 510,
            "end": 518,
            "callee": {
              "type": "MemberExpression",
              "start": 510,
              "end": 515,
              "object": {
                "type": "Identifier",
                "start": 510,
                "end": 511,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 512,
                "end": 515,
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
                "type": "Literal",
                "start": 516,
                "end": 517,
                "value": 1,
                "raw": "1"
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
