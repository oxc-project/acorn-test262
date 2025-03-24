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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 134,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 132,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 18,
              "end": 132,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "Identifier",
                          "start": 35,
                          "end": 39,
                          "name": "x",
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
                                "name": "T",
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
                    "start": 49,
                    "end": 73,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 53,
                        "end": 72,
                        "id": {
                          "type": "Identifier",
                          "start": 53,
                          "end": 54,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Literal",
                              "start": 59,
                              "end": 69,
                              "value": "toString",
                              "raw": "'toString'"
                            },
                            "computed": true,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 115,
                            "end": 123,
                            "name": "toString",
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
                      }
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
      "type": "VariableDeclaration",
      "start": 136,
      "end": 166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 165,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
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
              "property": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "name": "f",
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
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 215,
            "name": "i",
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "start": 217,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 223,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 231,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 232,
                "end": 240,
                "name": "toString",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 251,
            "name": "r2b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 259,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 260,
                "end": 270,
                "value": "toString",
                "raw": "'toString'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
            "optional": false,
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
      "start": 276,
      "end": 300,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 300,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 300,
            "name": "a",
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
                          "name": "T",
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
      "type": "VariableDeclaration",
      "start": 301,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 315,
            "name": "r3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 315,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 309,
                "end": 315
              }
            },
            "decorators": [],
            "optional": false
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
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 322,
                "end": 330,
                "name": "toString",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 349,
            "name": "r3b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 341,
              "end": 349,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 343,
                "end": 349
              }
            },
            "decorators": [],
            "optional": false
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
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Literal",
                "start": 356,
                "end": 366,
                "value": "toString",
                "raw": "'toString'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
            "optional": false,
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
      "start": 372,
      "end": 499,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 499,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 377,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 389,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 391,
                  "end": 497,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 395,
                      "end": 399,
                      "name": "x",
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                            "id": {
                              "type": "Identifier",
                              "start": 418,
                              "end": 419,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 424,
                                  "end": 434,
                                  "value": "toString",
                                  "raw": "'toString'"
                                },
                                "computed": true,
                                "optional": false
                              },
                              "arguments": [],
                              "optional": false,
                              "typeArguments": null
                            },
                            "definite": false
                          }
                        ],
                        "kind": "var",
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
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 480,
                                "end": 488,
                                "name": "toString",
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
                          }
                        }
                      }
                    ]
                  },
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
                  "returnType": null
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
      "start": 501,
      "end": 519,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 518,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 507,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 512,
                "end": 515,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 516,
                "end": 517,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
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
