deleteChain.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 598,
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
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 32,
                          "end": 33,
                          "decorators": [],
                          "name": "b",
                          "optional": false
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
      "end": 58,
      "expression": {
        "type": "UnaryExpression",
        "start": 45,
        "end": 57,
        "argument": {
          "type": "ChainExpression",
          "start": 52,
          "end": 57,
          "expression": {
            "type": "MemberExpression",
            "start": 52,
            "end": 57,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 52,
              "end": 54,
              "decorators": [],
              "name": "o1",
              "optional": false
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 74,
      "expression": {
        "type": "UnaryExpression",
        "start": 59,
        "end": 73,
        "argument": {
          "type": "ChainExpression",
          "start": 67,
          "end": 72,
          "expression": {
            "type": "MemberExpression",
            "start": 67,
            "end": 72,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 67,
              "end": 69,
              "decorators": [],
              "name": "o1",
              "optional": false
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 127,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 126,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 126,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 126,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 94,
                "end": 126,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 94,
                    "end": 103
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 106,
                    "end": 126,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 108,
                        "end": 124,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 109,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 109,
                          "end": 124,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 111,
                            "end": 124,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 113,
                                "end": 122,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 113,
                                  "end": 114,
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 114,
                                  "end": 122,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 116,
                                    "end": 122
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
      "start": 128,
      "end": 143,
      "expression": {
        "type": "UnaryExpression",
        "start": 128,
        "end": 142,
        "argument": {
          "type": "ChainExpression",
          "start": 135,
          "end": 142,
          "expression": {
            "type": "MemberExpression",
            "start": 135,
            "end": 142,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 135,
              "end": 140,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 135,
                "end": 137,
                "decorators": [],
                "name": "o2",
                "optional": false
              },
              "optional": true,
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 144,
      "end": 161,
      "expression": {
        "type": "UnaryExpression",
        "start": 144,
        "end": 160,
        "argument": {
          "type": "ChainExpression",
          "start": 152,
          "end": 159,
          "expression": {
            "type": "MemberExpression",
            "start": 152,
            "end": 159,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 152,
              "end": 157,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 152,
                "end": 154,
                "decorators": [],
                "name": "o2",
                "optional": false
              },
              "optional": true,
              "property": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 214,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 213,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 213,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 213,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 181,
                "end": 213,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 183,
                    "end": 211,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 183,
                      "end": 184,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 184,
                      "end": 211,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 186,
                        "end": 211,
                        "types": [
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 186,
                            "end": 195
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 198,
                            "end": 211,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 200,
                                "end": 209,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 200,
                                  "end": 201,
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 201,
                                  "end": 209,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 203,
                                    "end": 209
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
      "start": 215,
      "end": 230,
      "expression": {
        "type": "UnaryExpression",
        "start": 215,
        "end": 229,
        "argument": {
          "type": "ChainExpression",
          "start": 222,
          "end": 229,
          "expression": {
            "type": "MemberExpression",
            "start": 222,
            "end": 229,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 222,
              "end": 226,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 222,
                "end": 224,
                "decorators": [],
                "name": "o3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 225,
                "end": 226,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 228,
              "end": 229,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 248,
      "expression": {
        "type": "UnaryExpression",
        "start": 231,
        "end": 247,
        "argument": {
          "type": "ChainExpression",
          "start": 239,
          "end": 246,
          "expression": {
            "type": "MemberExpression",
            "start": 239,
            "end": 246,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 239,
              "end": 243,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 239,
                "end": 241,
                "decorators": [],
                "name": "o3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 242,
                "end": 243,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 250,
      "end": 305,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 304,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 304,
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 266,
              "end": 304,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 268,
                "end": 304,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 270,
                    "end": 302,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 271,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 272,
                      "end": 302,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 274,
                        "end": 302,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 276,
                            "end": 300,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 276,
                              "end": 277,
                              "decorators": [],
                              "name": "c",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 277,
                              "end": 300,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 279,
                                "end": 300,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 281,
                                    "end": 298,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 281,
                                      "end": 282,
                                      "decorators": [],
                                      "name": "d",
                                      "optional": false
                                    },
                                    "optional": true,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 283,
                                      "end": 298,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 285,
                                        "end": 298,
                                        "members": [
                                          {
                                            "type": "TSPropertySignature",
                                            "start": 287,
                                            "end": 296,
                                            "computed": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 287,
                                              "end": 288,
                                              "decorators": [],
                                              "name": "e",
                                              "optional": false
                                            },
                                            "optional": false,
                                            "readonly": false,
                                            "static": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 288,
                                              "end": 296,
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 290,
                                                "end": 296
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
      "start": 306,
      "end": 326,
      "expression": {
        "type": "UnaryExpression",
        "start": 306,
        "end": 325,
        "argument": {
          "type": "ChainExpression",
          "start": 313,
          "end": 325,
          "expression": {
            "type": "MemberExpression",
            "start": 313,
            "end": 325,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 313,
              "end": 322,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 313,
                "end": 320,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 313,
                  "end": 317,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 313,
                    "end": 315,
                    "decorators": [],
                    "name": "o4",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 317,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 320,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 321,
                "end": 322,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
              "decorators": [],
              "name": "e",
              "optional": false
            }
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 327,
      "end": 349,
      "expression": {
        "type": "UnaryExpression",
        "start": 327,
        "end": 348,
        "argument": {
          "type": "ChainExpression",
          "start": 334,
          "end": 348,
          "expression": {
            "type": "MemberExpression",
            "start": 334,
            "end": 348,
            "computed": false,
            "object": {
              "type": "ChainExpression",
              "start": 335,
              "end": 344,
              "expression": {
                "type": "MemberExpression",
                "start": 335,
                "end": 344,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 335,
                  "end": 342,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 335,
                    "end": 339,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 337,
                      "decorators": [],
                      "name": "o4",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 338,
                      "end": 339,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 342,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 344,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                }
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "decorators": [],
              "name": "e",
              "optional": false
            }
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 350,
      "end": 372,
      "expression": {
        "type": "UnaryExpression",
        "start": 350,
        "end": 371,
        "argument": {
          "type": "ChainExpression",
          "start": 358,
          "end": 370,
          "expression": {
            "type": "MemberExpression",
            "start": 358,
            "end": 370,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 358,
              "end": 367,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 358,
                "end": 365,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 358,
                  "end": 362,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 360,
                    "decorators": [],
                    "name": "o4",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 361,
                    "end": 362,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 366,
                "end": 367,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 369,
              "end": 370,
              "decorators": [],
              "name": "e",
              "optional": false
            }
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 374,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 430,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 430,
            "decorators": [],
            "name": "o5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 390,
              "end": 430,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 392,
                "end": 430,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 394,
                    "end": 428,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 394,
                      "end": 395,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": true,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 398,
                      "end": 428,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 400,
                        "end": 428,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 402,
                            "end": 426,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 402,
                              "end": 403,
                              "decorators": [],
                              "name": "c",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 403,
                              "end": 426,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 405,
                                "end": 426,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 407,
                                    "end": 424,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 407,
                                      "end": 408,
                                      "decorators": [],
                                      "name": "d",
                                      "optional": false
                                    },
                                    "optional": true,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 409,
                                      "end": 424,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 411,
                                        "end": 424,
                                        "members": [
                                          {
                                            "type": "TSPropertySignature",
                                            "start": 413,
                                            "end": 422,
                                            "computed": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 413,
                                              "end": 414,
                                              "decorators": [],
                                              "name": "e",
                                              "optional": false
                                            },
                                            "optional": false,
                                            "readonly": false,
                                            "static": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 414,
                                              "end": 422,
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 416,
                                                "end": 422
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
                    "static": false
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
      "start": 432,
      "end": 455,
      "expression": {
        "type": "UnaryExpression",
        "start": 432,
        "end": 454,
        "argument": {
          "type": "ChainExpression",
          "start": 439,
          "end": 454,
          "expression": {
            "type": "MemberExpression",
            "start": 439,
            "end": 454,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 439,
              "end": 451,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 439,
                "end": 449,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 439,
                  "end": 447,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 439,
                    "end": 443,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 439,
                      "end": 441,
                      "decorators": [],
                      "name": "o5",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 442,
                      "end": 443,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  },
                  "optional": true
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 449,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 450,
                "end": 451,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 453,
              "end": 454,
              "decorators": [],
              "name": "e",
              "optional": false
            }
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 456,
      "end": 481,
      "expression": {
        "type": "UnaryExpression",
        "start": 456,
        "end": 480,
        "argument": {
          "type": "ChainExpression",
          "start": 464,
          "end": 479,
          "expression": {
            "type": "MemberExpression",
            "start": 464,
            "end": 479,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 464,
              "end": 476,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 464,
                "end": 474,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 464,
                  "end": 472,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 464,
                    "end": 468,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 464,
                      "end": 466,
                      "decorators": [],
                      "name": "o5",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 468,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  },
                  "optional": true
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 473,
                  "end": 474,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 478,
              "end": 479,
              "decorators": [],
              "name": "e",
              "optional": false
            }
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 483,
      "end": 538,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 497,
          "end": 537,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 497,
            "end": 537,
            "decorators": [],
            "name": "o6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 499,
              "end": 537,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 501,
                "end": 537,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 503,
                    "end": 535,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 503,
                      "end": 504,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 505,
                      "end": 535,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 507,
                        "end": 535,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 509,
                            "end": 533,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 509,
                              "end": 510,
                              "decorators": [],
                              "name": "c",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 510,
                              "end": 533,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 512,
                                "end": 533,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 514,
                                    "end": 531,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 514,
                                      "end": 515,
                                      "decorators": [],
                                      "name": "d",
                                      "optional": false
                                    },
                                    "optional": true,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 516,
                                      "end": 531,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 518,
                                        "end": 531,
                                        "members": [
                                          {
                                            "type": "TSPropertySignature",
                                            "start": 520,
                                            "end": 529,
                                            "computed": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 520,
                                              "end": 521,
                                              "decorators": [],
                                              "name": "e",
                                              "optional": false
                                            },
                                            "optional": false,
                                            "readonly": false,
                                            "static": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 521,
                                              "end": 529,
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 523,
                                                "end": 529
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
      "start": 539,
      "end": 567,
      "expression": {
        "type": "UnaryExpression",
        "start": 539,
        "end": 566,
        "argument": {
          "type": "ChainExpression",
          "start": 546,
          "end": 566,
          "expression": {
            "type": "MemberExpression",
            "start": 546,
            "end": 566,
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 546,
              "end": 559,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 546,
                "end": 557,
                "computed": true,
                "object": {
                  "type": "MemberExpression",
                  "start": 546,
                  "end": 550,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 546,
                    "end": 548,
                    "decorators": [],
                    "name": "o6",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 550,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                },
                "optional": true,
                "property": {
                  "type": "Literal",
                  "start": 553,
                  "end": 556,
                  "raw": "'c'",
                  "value": "c"
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 558,
                "end": 559,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            },
            "optional": true,
            "property": {
              "type": "Literal",
              "start": 562,
              "end": 565,
              "raw": "'e'",
              "value": "e"
            }
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 568,
      "end": 598,
      "expression": {
        "type": "UnaryExpression",
        "start": 568,
        "end": 597,
        "argument": {
          "type": "ChainExpression",
          "start": 576,
          "end": 596,
          "expression": {
            "type": "MemberExpression",
            "start": 576,
            "end": 596,
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 576,
              "end": 589,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 576,
                "end": 587,
                "computed": true,
                "object": {
                  "type": "MemberExpression",
                  "start": 576,
                  "end": 580,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 576,
                    "end": 578,
                    "decorators": [],
                    "name": "o6",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 579,
                    "end": 580,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                },
                "optional": true,
                "property": {
                  "type": "Literal",
                  "start": 583,
                  "end": 586,
                  "raw": "'c'",
                  "value": "c"
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 588,
                "end": 589,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            },
            "optional": true,
            "property": {
              "type": "Literal",
              "start": 592,
              "end": 595,
              "raw": "'e'",
              "value": "e"
            }
          }
        },
        "operator": "delete",
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
}
```
