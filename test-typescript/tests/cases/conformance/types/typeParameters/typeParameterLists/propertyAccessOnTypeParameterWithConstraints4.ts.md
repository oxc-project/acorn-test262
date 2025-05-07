__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 599,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 145,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 145,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 30,
            "end": 143,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
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
              "start": 31,
              "end": 143,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 143,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 44,
                    "end": 53,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 48,
                        "end": 52,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 52,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 49,
                            "end": 52,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 51,
                              "end": 52,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 51,
                                "end": 52,
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
                    "start": 62,
                    "end": 85,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 66,
                        "end": 84,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 66,
                          "end": 67,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 70,
                          "end": 84,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 70,
                            "end": 82,
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "start": 70,
                              "end": 71,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Literal",
                              "start": 72,
                              "end": 81,
                              "raw": "'notHere'",
                              "value": "notHere",
                              "regex": null,
                              "bigint": null
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
                    "start": 114,
                    "end": 137,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 121,
                      "end": 136,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 122,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 125,
                        "end": 136,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 125,
                          "end": 134,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 125,
                            "end": 126,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 134,
                            "decorators": [],
                            "name": "notHere",
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
        "start": 6,
        "end": 7,
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
        "start": 7,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 22,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 22,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 22,
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
              "start": 8,
              "end": 9,
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
      "start": 147,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 174,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 152,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 155,
            "end": 174,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 155,
              "end": 172,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 156,
                "end": 169,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 161,
                  "end": 167,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 162,
                      "end": 166,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 162,
                        "end": 166,
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
                "start": 171,
                "end": 172,
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
      "start": 177,
      "end": 220,
      "body": {
        "type": "TSInterfaceBody",
        "start": 205,
        "end": 220,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 211,
            "end": 218,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 211,
              "end": 214,
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
              "start": 214,
              "end": 217,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 216,
                "end": 217,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 217,
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
        "start": 187,
        "end": 188,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 188,
        "end": 204,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 189,
            "end": 203,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 199,
              "end": 203,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 199,
                "end": 203,
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
              "start": 189,
              "end": 190,
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
      "start": 221,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 235,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 235,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 226,
              "end": 235,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 228,
                "end": 235,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 229,
                  "end": 235,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 230,
                      "end": 234,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 234,
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
                  "start": 228,
                  "end": 229,
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
      "start": 237,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 261,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 243,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 246,
            "end": 261,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 246,
              "end": 259,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 246,
                "end": 251,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 251,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 252,
                "end": 259,
                "decorators": [],
                "name": "notHere",
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
      "start": 263,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 291,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 270,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 273,
            "end": 291,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 273,
              "end": 289,
              "computed": true,
              "object": {
                "type": "MemberExpression",
                "start": 273,
                "end": 278,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 278,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 279,
                "end": 288,
                "raw": "'notHere'",
                "value": "notHere",
                "regex": null,
                "bigint": null
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
      "start": 294,
      "end": 331,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 331,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 331,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 301,
                "end": 331,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 307,
                    "end": 329,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 325,
                      "end": 328,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 327,
                        "end": 328,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 327,
                          "end": 328,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 307,
                      "end": 323,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 308,
                          "end": 322,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 318,
                            "end": 322,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 318,
                              "end": 322,
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
                            "start": 308,
                            "end": 309,
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
      "start": 332,
      "end": 363,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 362,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 346,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 346,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 340,
                "end": 346
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 349,
            "end": 362,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 349,
              "end": 360,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 349,
                "end": 352,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 350,
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
                "type": "Identifier",
                "start": 353,
                "end": 360,
                "decorators": [],
                "name": "notHere",
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
      "start": 364,
      "end": 399,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 368,
          "end": 398,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 368,
            "end": 379,
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 379,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 373,
                "end": 379
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 382,
            "end": 398,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 382,
              "end": 396,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 382,
                "end": 385,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 383,
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
                "start": 386,
                "end": 395,
                "raw": "'notHere'",
                "value": "notHere",
                "regex": null,
                "bigint": null
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
      "start": 401,
      "end": 570,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 570,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 409,
            "end": 570,
            "properties": [
              {
                "type": "Property",
                "start": 415,
                "end": 540,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 418,
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
                  "start": 420,
                  "end": 540,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 449,
                    "end": 540,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 459,
                        "end": 482,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 463,
                            "end": 481,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 463,
                              "end": 464,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 467,
                              "end": 481,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 467,
                                "end": 479,
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "start": 467,
                                  "end": 468,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Literal",
                                  "start": 469,
                                  "end": 478,
                                  "raw": "'notHere'",
                                  "value": "notHere",
                                  "regex": null,
                                  "bigint": null
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
                        "start": 511,
                        "end": 534,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 518,
                          "end": 533,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 518,
                            "end": 519,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 522,
                            "end": 533,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 522,
                              "end": 531,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 522,
                                "end": 523,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 524,
                                "end": 531,
                                "decorators": [],
                                "name": "notHere",
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
                      "start": 437,
                      "end": 441,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 438,
                        "end": 441,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 440,
                          "end": 441,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 440,
                            "end": 441,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 442,
                    "end": 445,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 444,
                      "end": 445,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 445,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 420,
                    "end": 436,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 421,
                        "end": 435,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 431,
                          "end": 435,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 431,
                            "end": 435,
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
                          "start": 421,
                          "end": 422,
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
              },
              {
                "type": "Property",
                "start": 546,
                "end": 568,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 549,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "start": 551,
                  "end": 568,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 551,
                    "end": 566,
                    "computed": false,
                    "object": {
                      "type": "CallExpression",
                      "start": 551,
                      "end": 558,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 551,
                        "end": 556,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 551,
                          "end": 552,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 556,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 559,
                      "end": 566,
                      "decorators": [],
                      "name": "notHere",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
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
      "start": 572,
      "end": 599,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 576,
          "end": 598,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 576,
            "end": 578,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 581,
            "end": 598,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 587,
                "end": 597,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 595,
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
              "start": 581,
              "end": 586,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 581,
                "end": 582,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 583,
                "end": 586,
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
