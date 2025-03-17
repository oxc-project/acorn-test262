__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 455,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 259,
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 259,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 24,
            "end": 109,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 31,
              "end": 109,
              "body": {
                "type": "TSInterfaceBody",
                "start": 56,
                "end": 109,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 66,
                    "end": 103,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 67,
                        "end": 75,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 72,
                          "end": 75,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 74,
                            "end": 75,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 74,
                              "end": 75,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 77,
                        "end": 87,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 82,
                          "end": 87,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 84,
                            "end": 87
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 89,
                        "end": 98,
                        "decorators": [],
                        "name": "list",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 93,
                          "end": 98,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 95,
                            "end": 98
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 99,
                      "end": 102,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 101,
                        "end": 102,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 102,
                          "decorators": [],
                          "name": "U",
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
                "start": 41,
                "end": 49,
                "decorators": [],
                "name": "Iterator",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 49,
                "end": 55,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 50,
                    "end": 51,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 51,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 53,
                    "end": 54,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 114,
            "end": 257,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 121,
              "end": 257,
              "body": {
                "type": "TSInterfaceBody",
                "start": 138,
                "end": 257,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 148,
                    "end": 217,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 151,
                      "decorators": [],
                      "name": "all",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 155,
                        "end": 164,
                        "decorators": [],
                        "name": "list",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 159,
                          "end": 164,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 161,
                            "end": 164,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 161,
                              "end": 162,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 161,
                                "end": 162,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 166,
                        "end": 197,
                        "decorators": [],
                        "name": "iterator",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 175,
                          "end": 197,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 177,
                            "end": 197,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 185,
                              "end": 197,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 186,
                                  "end": 187,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 186,
                                    "end": 187,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 189,
                                  "end": 196
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 177,
                              "end": 185,
                              "decorators": [],
                              "name": "Iterator",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 199,
                        "end": 212,
                        "decorators": [],
                        "name": "context",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 207,
                          "end": 212,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 209,
                            "end": 212
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 213,
                      "end": 216,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 215,
                        "end": 216,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 216,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 151,
                      "end": 154,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 152,
                          "end": 153,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 152,
                            "end": 153,
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
                    "type": "TSMethodSignature",
                    "start": 226,
                    "end": 251,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 234,
                      "decorators": [],
                      "name": "identity",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 238,
                        "end": 246,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 243,
                          "end": 246,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 245,
                            "end": 246,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 245,
                              "end": 246,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 247,
                      "end": 250,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 249,
                        "end": 250,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 249,
                          "end": 250,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 234,
                      "end": 237,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 235,
                          "end": 236,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 235,
                            "end": 236,
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
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 131,
                "end": 137,
                "decorators": [],
                "name": "Static",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 17,
        "decorators": [],
        "name": "Underscore",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 260,
      "end": 293,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 272,
          "end": 292,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 292,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 273,
              "end": 292,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 275,
                "end": 292,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 275,
                  "end": 292,
                  "left": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 285,
                    "decorators": [],
                    "name": "Underscore",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 286,
                    "end": 292,
                    "decorators": [],
                    "name": "Static",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 295,
      "end": 345,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 344,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 300,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 303,
            "end": 344,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 309,
                "end": 331,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 310,
                    "end": 314,
                    "raw": "true",
                    "value": true
                  },
                  {
                    "type": "Literal",
                    "start": 316,
                    "end": 317,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 319,
                    "end": 323,
                    "raw": "null",
                    "value": null
                  },
                  {
                    "type": "Literal",
                    "start": 325,
                    "end": 330,
                    "raw": "'yes'",
                    "value": "yes"
                  }
                ]
              },
              {
                "type": "MemberExpression",
                "start": 333,
                "end": 343,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 334,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 343,
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 303,
              "end": 308,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 303,
                "end": 304,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 305,
                "end": 308,
                "decorators": [],
                "name": "all",
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
      "start": 346,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 350,
          "end": 380,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 350,
            "end": 352,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 355,
            "end": 380,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 361,
                "end": 367,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 362,
                    "end": 366,
                    "raw": "true",
                    "value": true
                  }
                ]
              },
              {
                "type": "MemberExpression",
                "start": 369,
                "end": 379,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 370,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 379,
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 355,
              "end": 360,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 355,
                "end": 356,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 357,
                "end": 360,
                "decorators": [],
                "name": "all",
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
      "start": 382,
      "end": 413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 386,
          "end": 412,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 388,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 391,
            "end": 412,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 397,
                "end": 399,
                "elements": []
              },
              {
                "type": "MemberExpression",
                "start": 401,
                "end": 411,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 402,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 411,
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 391,
              "end": 396,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 391,
                "end": 392,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 393,
                "end": 396,
                "decorators": [],
                "name": "all",
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
      "start": 414,
      "end": 454,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 418,
          "end": 453,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 418,
            "end": 420,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 423,
            "end": 453,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 429,
                "end": 440,
                "elements": [
                  {
                    "type": "TSTypeAssertion",
                    "start": 430,
                    "end": 439,
                    "expression": {
                      "type": "Literal",
                      "start": 435,
                      "end": 439,
                      "raw": "true",
                      "value": true
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 431,
                      "end": 434
                    }
                  }
                ]
              },
              {
                "type": "MemberExpression",
                "start": 442,
                "end": 452,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 443,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 444,
                  "end": 452,
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 423,
              "end": 428,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 423,
                "end": 424,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 425,
                "end": 428,
                "decorators": [],
                "name": "all",
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
