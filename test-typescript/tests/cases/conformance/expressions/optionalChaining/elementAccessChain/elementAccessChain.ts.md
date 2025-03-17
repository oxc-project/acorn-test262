__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 628,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 43,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 43,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 18,
                "end": 43,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 18,
                    "end": 27
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 30,
                    "end": 43,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 32,
                        "end": 41,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 32,
                          "end": 33,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 33,
                          "end": 41,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 35,
                            "end": 41
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 55,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 45,
        "end": 54,
        "expression": {
          "type": "MemberExpression",
          "start": 45,
          "end": 54,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 45,
            "end": 47,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": true,
          "property": {
            "type": "Literal",
            "start": 50,
            "end": 53,
            "raw": "\"b\"",
            "value": "b"
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 107,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 107,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 75,
                "end": 107,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 75,
                    "end": 84
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 87,
                    "end": 107,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 89,
                        "end": 105,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 90,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 90,
                          "end": 105,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 92,
                            "end": 105,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 94,
                                "end": 103,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 94,
                                  "end": 95,
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 95,
                                  "end": 103,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 97,
                                    "end": 103
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 109,
      "end": 121,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 109,
        "end": 120,
        "expression": {
          "type": "MemberExpression",
          "start": 109,
          "end": 120,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 109,
            "end": 118,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 109,
              "end": 111,
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "property": {
              "type": "Literal",
              "start": 114,
              "end": 117,
              "raw": "\"b\"",
              "value": "b"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 122,
      "end": 133,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 122,
        "end": 132,
        "expression": {
          "type": "MemberExpression",
          "start": 122,
          "end": 132,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 122,
            "end": 127,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 122,
              "end": 124,
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 128,
            "end": 131,
            "raw": "\"c\"",
            "value": "c"
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 185,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 185,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 153,
                "end": 185,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 155,
                    "end": 183,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 156,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 156,
                      "end": 183,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 158,
                        "end": 183,
                        "types": [
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 158,
                            "end": 167
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 170,
                            "end": 183,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 172,
                                "end": 181,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 172,
                                  "end": 173,
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 173,
                                  "end": 181,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 175,
                                    "end": 181
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 187,
      "end": 198,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 187,
        "end": 197,
        "expression": {
          "type": "MemberExpression",
          "start": 187,
          "end": 197,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 187,
            "end": 194,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 187,
              "end": 189,
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 190,
              "end": 193,
              "raw": "\"b\"",
              "value": "b"
            }
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 199,
      "end": 211,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 199,
        "end": 210,
        "expression": {
          "type": "MemberExpression",
          "start": 199,
          "end": 210,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 199,
            "end": 203,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 199,
              "end": 201,
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": true,
          "property": {
            "type": "Literal",
            "start": 206,
            "end": 209,
            "raw": "\"c\"",
            "value": "c"
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 268,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 267,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 267,
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 267,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 231,
                "end": 267,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 233,
                    "end": 265,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 233,
                      "end": 234,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 235,
                      "end": 265,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 237,
                        "end": 265,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 239,
                            "end": 263,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 239,
                              "end": 240,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 240,
                              "end": 263,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 242,
                                "end": 263,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 244,
                                    "end": 261,
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 244,
                                      "end": 245,
                                      "decorators": [],
                                      "name": "d",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": true,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 246,
                                      "end": 261,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 248,
                                        "end": 261,
                                        "members": [
                                          {
                                            "type": "TSPropertySignature",
                                            "start": 250,
                                            "end": 259,
                                            "accessibility": null,
                                            "computed": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 250,
                                              "end": 251,
                                              "decorators": [],
                                              "name": "e",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "readonly": false,
                                            "static": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 251,
                                              "end": 259,
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 253,
                                                "end": 259
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 286,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 269,
        "end": 285,
        "expression": {
          "type": "MemberExpression",
          "start": 269,
          "end": 285,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 269,
            "end": 282,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 269,
              "end": 280,
              "computed": true,
              "object": {
                "type": "MemberExpression",
                "start": 269,
                "end": 273,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 271,
                  "decorators": [],
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 273,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": true,
              "property": {
                "type": "Literal",
                "start": 276,
                "end": 279,
                "raw": "\"c\"",
                "value": "c"
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 284,
            "end": 285,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 287,
      "end": 308,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 287,
        "end": 307,
        "expression": {
          "type": "MemberExpression",
          "start": 287,
          "end": 307,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 287,
            "end": 300,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 287,
              "end": 298,
              "computed": true,
              "object": {
                "type": "MemberExpression",
                "start": 287,
                "end": 291,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 289,
                  "decorators": [],
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 291,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": true,
              "property": {
                "type": "Literal",
                "start": 294,
                "end": 297,
                "raw": "\"c\"",
                "value": "c"
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 299,
              "end": 300,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": true,
          "property": {
            "type": "Literal",
            "start": 303,
            "end": 306,
            "raw": "\"e\"",
            "value": "e"
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 310,
      "end": 367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 324,
          "end": 366,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 324,
            "end": 366,
            "decorators": [],
            "name": "o5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 366,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 328,
                "end": 366,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 330,
                    "end": 364,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 331,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": true,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 334,
                      "end": 364,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 336,
                        "end": 364,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 338,
                            "end": 362,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 338,
                              "end": 339,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 339,
                              "end": 362,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 341,
                                "end": 362,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 343,
                                    "end": 360,
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 343,
                                      "end": 344,
                                      "decorators": [],
                                      "name": "d",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": true,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 345,
                                      "end": 360,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 347,
                                        "end": 360,
                                        "members": [
                                          {
                                            "type": "TSPropertySignature",
                                            "start": 349,
                                            "end": 358,
                                            "accessibility": null,
                                            "computed": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 349,
                                              "end": 350,
                                              "decorators": [],
                                              "name": "e",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "readonly": false,
                                            "static": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 350,
                                              "end": 358,
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 352,
                                                "end": 358
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        ]
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 368,
      "end": 387,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 368,
        "end": 386,
        "expression": {
          "type": "MemberExpression",
          "start": 368,
          "end": 386,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 368,
            "end": 383,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 368,
              "end": 381,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 368,
                "end": 376,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 368,
                  "end": 372,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 370,
                    "decorators": [],
                    "name": "o5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 371,
                    "end": 372,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": true,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 377,
                "end": 380,
                "raw": "\"c\"",
                "value": "c"
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 382,
              "end": 383,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 385,
            "end": 386,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 388,
      "end": 411,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 388,
        "end": 410,
        "expression": {
          "type": "MemberExpression",
          "start": 388,
          "end": 410,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 388,
            "end": 403,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 388,
              "end": 401,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 388,
                "end": 396,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 388,
                  "end": 392,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 388,
                    "end": 390,
                    "decorators": [],
                    "name": "o5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 391,
                    "end": 392,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": true,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 397,
                "end": 400,
                "raw": "\"c\"",
                "value": "c"
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 402,
              "end": 403,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": true,
          "property": {
            "type": "Literal",
            "start": 406,
            "end": 409,
            "raw": "\"e\"",
            "value": "e"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 412,
      "end": 434,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 412,
        "end": 433,
        "expression": {
          "type": "MemberExpression",
          "start": 412,
          "end": 433,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 412,
            "end": 430,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 412,
              "end": 428,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 412,
                "end": 423,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 412,
                  "end": 419,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 412,
                    "end": 414,
                    "decorators": [],
                    "name": "o5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 415,
                    "end": 418,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                },
                "optional": true,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 424,
                "end": 427,
                "raw": "\"c\"",
                "value": "c"
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 429,
              "end": 430,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 432,
            "end": 433,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 435,
      "end": 461,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 435,
        "end": 460,
        "expression": {
          "type": "MemberExpression",
          "start": 435,
          "end": 460,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 435,
            "end": 453,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 435,
              "end": 451,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 435,
                "end": 446,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 435,
                  "end": 442,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 437,
                    "decorators": [],
                    "name": "o5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 438,
                    "end": 441,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                },
                "optional": true,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 447,
                "end": 450,
                "raw": "\"c\"",
                "value": "c"
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": true,
          "property": {
            "type": "Literal",
            "start": 456,
            "end": 459,
            "raw": "\"e\"",
            "value": "e"
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 475,
      "end": 530,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 489,
          "end": 529,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 489,
            "end": 529,
            "decorators": [],
            "name": "o6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 491,
              "end": 529,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 493,
                "end": 529,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 499,
                  "end": 529,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 502,
                    "end": 529,
                    "types": [
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 502,
                        "end": 511
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 515,
                        "end": 528,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 517,
                            "end": 526,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 517,
                              "end": 518,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 518,
                              "end": 526,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 520,
                                "end": 526
                              }
                            }
                          }
                        ]
                      }
                    ]
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 493,
                  "end": 496,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 494,
                      "end": 495,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 494,
                        "end": 495,
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
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 531,
      "end": 551,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 531,
        "end": 550,
        "expression": {
          "type": "MemberExpression",
          "start": 531,
          "end": 550,
          "computed": true,
          "object": {
            "type": "CallExpression",
            "start": 531,
            "end": 543,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 531,
              "end": 533,
              "decorators": [],
              "name": "o6",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 533,
              "end": 541,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 534,
                  "end": 540
                }
              ]
            }
          },
          "optional": true,
          "property": {
            "type": "Literal",
            "start": 546,
            "end": 549,
            "raw": "\"x\"",
            "value": "x"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 565,
      "end": 578,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 565,
        "end": 577,
        "expression": {
          "type": "MemberExpression",
          "start": 565,
          "end": 577,
          "computed": false,
          "object": {
            "type": "TSNonNullExpression",
            "start": 565,
            "end": 575,
            "expression": {
              "type": "MemberExpression",
              "start": 565,
              "end": 574,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 565,
                "end": 567,
                "decorators": [],
                "name": "o2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "property": {
                "type": "Literal",
                "start": 570,
                "end": 573,
                "raw": "\"b\"",
                "value": "b"
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 576,
            "end": 577,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 579,
      "end": 595,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 579,
        "end": 594,
        "expression": {
          "type": "MemberExpression",
          "start": 579,
          "end": 594,
          "computed": true,
          "object": {
            "type": "TSNonNullExpression",
            "start": 579,
            "end": 589,
            "expression": {
              "type": "MemberExpression",
              "start": 579,
              "end": 588,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 579,
                "end": 581,
                "decorators": [],
                "name": "o2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "property": {
                "type": "Literal",
                "start": 584,
                "end": 587,
                "raw": "\"b\"",
                "value": "b"
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 590,
            "end": 593,
            "raw": "\"c\"",
            "value": "c"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 596,
      "end": 610,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 596,
        "end": 609,
        "expression": {
          "type": "TSNonNullExpression",
          "start": 596,
          "end": 609,
          "expression": {
            "type": "MemberExpression",
            "start": 596,
            "end": 608,
            "computed": false,
            "object": {
              "type": "TSNonNullExpression",
              "start": 596,
              "end": 606,
              "expression": {
                "type": "MemberExpression",
                "start": 596,
                "end": 605,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 596,
                  "end": 598,
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "property": {
                  "type": "Literal",
                  "start": 601,
                  "end": 604,
                  "raw": "\"b\"",
                  "value": "b"
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 607,
              "end": 608,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 611,
      "end": 628,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 611,
        "end": 627,
        "expression": {
          "type": "TSNonNullExpression",
          "start": 611,
          "end": 627,
          "expression": {
            "type": "MemberExpression",
            "start": 611,
            "end": 626,
            "computed": true,
            "object": {
              "type": "TSNonNullExpression",
              "start": 611,
              "end": 621,
              "expression": {
                "type": "MemberExpression",
                "start": 611,
                "end": 620,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 611,
                  "end": 613,
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "property": {
                  "type": "Literal",
                  "start": 616,
                  "end": 619,
                  "raw": "\"b\"",
                  "value": "b"
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 622,
              "end": 625,
              "raw": "\"c\"",
              "value": "c"
            }
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
