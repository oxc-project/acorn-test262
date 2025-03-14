propertyAccessOnTypeParameterWithConstraints5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 839,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 44,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 44,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 42,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 42,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 42,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 30,
                    "end": 40,
                    "argument": {
                      "type": "Literal",
                      "start": 37,
                      "end": 39,
                      "raw": "''",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 19,
                "end": 27,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 21,
                  "end": 27
                }
              }
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
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 46,
      "end": 112,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 112,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 110,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 110,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 110,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 94,
                    "end": 104,
                    "argument": {
                      "type": "Literal",
                      "start": 101,
                      "end": 103,
                      "raw": "''",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 75,
                "end": 83,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 77,
                  "end": 83
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 114,
      "end": 275,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 148,
        "end": 275,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 154,
            "end": 273,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
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
              "start": 155,
              "end": 273,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 158,
                "end": 273,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 168,
                    "end": 177,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 172,
                        "end": 176,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 172,
                          "end": 176,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 173,
                            "end": 176,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 175,
                              "end": 176,
                              "typeName": {
                                "type": "Identifier",
                                "start": 175,
                                "end": 176,
                                "decorators": [],
                                "name": "U",
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
                    "start": 186,
                    "end": 205,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 190,
                        "end": 204,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 191,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 194,
                          "end": 204,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 194,
                            "end": 202,
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "start": 194,
                              "end": 195,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Literal",
                              "start": 196,
                              "end": 201,
                              "raw": "'foo'",
                              "value": "foo"
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
                    "start": 234,
                    "end": 267,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 241,
                      "end": 266,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 241,
                        "end": 252,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 242,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 245,
                          "end": 252,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 245,
                            "end": 250,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 245,
                              "end": 246,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 247,
                              "end": 250,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 255,
                        "end": 266,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 255,
                          "end": 264,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 255,
                            "end": 256,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 257,
                            "end": 264,
                            "decorators": [],
                            "name": "notHere",
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
        "start": 120,
        "end": 121,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 121,
        "end": 147,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 122,
            "end": 133,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 133,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 135,
            "end": 146,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 145,
              "end": 146,
              "typeName": {
                "type": "Identifier",
                "start": 145,
                "end": 146,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
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
      "start": 277,
      "end": 305,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 304,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 282,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 285,
            "end": 304,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 285,
              "end": 302,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 286,
                "end": 299,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 291,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 291,
                  "end": 297,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 292,
                      "end": 293,
                      "typeName": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 293,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 295,
                      "end": 296,
                      "typeName": {
                        "type": "Identifier",
                        "start": 295,
                        "end": 296,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ]
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 301,
                "end": 302,
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
      "start": 307,
      "end": 360,
      "body": {
        "type": "TSInterfaceBody",
        "start": 345,
        "end": 360,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 351,
            "end": 358,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 351,
              "end": 354,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 354,
              "end": 357,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 356,
                "end": 357,
                "typeName": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 357,
                  "decorators": [],
                  "name": "U",
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
        "start": 317,
        "end": 318,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 318,
        "end": 344,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 319,
            "end": 330,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 329,
              "end": 330,
              "typeName": {
                "type": "Identifier",
                "start": 329,
                "end": 330,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 332,
            "end": 343,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 342,
              "end": 343,
              "typeName": {
                "type": "Identifier",
                "start": 342,
                "end": 343,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
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
      "start": 361,
      "end": 376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 375,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 375,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 366,
              "end": 375,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 368,
                "end": 375,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 369,
                  "end": 375,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 370,
                      "end": 371,
                      "typeName": {
                        "type": "Identifier",
                        "start": 370,
                        "end": 371,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 373,
                      "end": 374,
                      "typeName": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 374,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 369,
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
      "start": 377,
      "end": 402,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 401,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 383,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 386,
            "end": 401,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 386,
              "end": 399,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 386,
                "end": 391,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 387,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 391,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 392,
                "end": 399,
                "decorators": [],
                "name": "notHere",
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
      "start": 403,
      "end": 428,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 407,
          "end": 427,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 410,
            "decorators": [],
            "name": "r2b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 413,
            "end": 427,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 413,
              "end": 425,
              "computed": true,
              "object": {
                "type": "MemberExpression",
                "start": 413,
                "end": 418,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 414,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 418,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 419,
                "end": 424,
                "raw": "'foo'",
                "value": "foo"
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
      "start": 430,
      "end": 477,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 477,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 477,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 435,
              "end": 477,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 437,
                "end": 477,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 443,
                    "end": 475,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 471,
                      "end": 474,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 473,
                        "end": 474,
                        "typeName": {
                          "type": "Identifier",
                          "start": 473,
                          "end": 474,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 443,
                      "end": 469,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 444,
                          "end": 455,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 454,
                            "end": 455,
                            "typeName": {
                              "type": "Identifier",
                              "start": 454,
                              "end": 455,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 444,
                            "end": 445,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 457,
                          "end": 468,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 467,
                            "end": 468,
                            "typeName": {
                              "type": "Identifier",
                              "start": 467,
                              "end": 468,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 457,
                            "end": 458,
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
      "start": 492,
      "end": 523,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 522,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 506,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 498,
              "end": 506,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 500,
                "end": 506
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 509,
            "end": 522,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 509,
              "end": 520,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 509,
                "end": 512,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 509,
                  "end": 510,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 513,
                "end": 520,
                "decorators": [],
                "name": "notHere",
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
      "start": 524,
      "end": 555,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 528,
          "end": 554,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 528,
            "end": 539,
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 531,
              "end": 539,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 533,
                "end": 539
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 542,
            "end": 554,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 542,
              "end": 552,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 542,
                "end": 545,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 542,
                  "end": 543,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 546,
                "end": 551,
                "raw": "'foo'",
                "value": "foo"
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
      "start": 557,
      "end": 751,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 561,
          "end": 751,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 561,
            "end": 562,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 565,
            "end": 751,
            "properties": [
              {
                "type": "Property",
                "start": 571,
                "end": 702,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 574,
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
                  "start": 576,
                  "end": 702,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 615,
                    "end": 702,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 625,
                        "end": 644,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 629,
                            "end": 643,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 629,
                              "end": 630,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 633,
                              "end": 643,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 633,
                                "end": 641,
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "start": 633,
                                  "end": 634,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Literal",
                                  "start": 635,
                                  "end": 640,
                                  "raw": "'foo'",
                                  "value": "foo"
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
                        "start": 673,
                        "end": 696,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 680,
                          "end": 695,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 680,
                            "end": 681,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 684,
                            "end": 695,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 684,
                              "end": 693,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 684,
                                "end": 685,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 686,
                                "end": 693,
                                "decorators": [],
                                "name": "notHere",
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
                      "start": 603,
                      "end": 607,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 604,
                        "end": 607,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 606,
                          "end": 607,
                          "typeName": {
                            "type": "Identifier",
                            "start": 606,
                            "end": 607,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 608,
                    "end": 611,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 610,
                      "end": 611,
                      "typeName": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 611,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 576,
                    "end": 602,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 577,
                        "end": 588,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 587,
                          "end": 588,
                          "typeName": {
                            "type": "Identifier",
                            "start": 587,
                            "end": 588,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 577,
                          "end": 578,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 590,
                        "end": 601,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 600,
                          "end": 601,
                          "typeName": {
                            "type": "Identifier",
                            "start": 600,
                            "end": 601,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 590,
                          "end": 591,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              },
              {
                "type": "Property",
                "start": 726,
                "end": 749,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 726,
                  "end": 729,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "start": 731,
                  "end": 749,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 731,
                    "end": 747,
                    "computed": false,
                    "object": {
                      "type": "CallExpression",
                      "start": 731,
                      "end": 739,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 737,
                          "end": 738,
                          "raw": "1",
                          "value": 1
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 731,
                        "end": 736,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 731,
                          "end": 732,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 733,
                          "end": 736,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        }
                      },
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 747,
                      "decorators": [],
                      "name": "notHere",
                      "optional": false
                    }
                  },
                  "optional": false
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
      "start": 753,
      "end": 777,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 757,
          "end": 776,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 757,
            "end": 759,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 762,
            "end": 776,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 768,
                "end": 775,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 772,
                  "end": 773,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 762,
              "end": 767,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 762,
                "end": 763,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 764,
                "end": 767,
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
