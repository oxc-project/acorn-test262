__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 79,
  "end": 488,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 230,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 230,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 230,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 86,
                "end": 230,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 92,
                    "end": 118,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 97,
                      "decorators": [],
                      "name": "func4",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": true,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 99,
                        "end": 108,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 100,
                          "end": 108,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 102,
                            "end": 108
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 109,
                      "end": 117,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 111,
                        "end": 117
                      }
                    },
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 123,
                    "end": 149,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 128,
                      "decorators": [],
                      "name": "func4",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": true,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 130,
                        "end": 139,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 131,
                          "end": 139,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 133,
                            "end": 139
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 140,
                      "end": 148,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 142,
                        "end": 148
                      }
                    },
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 154,
                    "end": 228,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 159,
                      "decorators": [],
                      "name": "func5",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 160,
                      "end": 227,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 162,
                        "end": 227,
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 172,
                            "end": 192,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 173,
                                "end": 182,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 174,
                                  "end": 182,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 176,
                                    "end": 182
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 183,
                              "end": 191,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 185,
                                "end": 191
                              }
                            }
                          },
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 201,
                            "end": 221,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 202,
                                "end": 211,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 203,
                                  "end": 211,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 205,
                                    "end": 211
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 212,
                              "end": 220,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 214,
                                "end": 220
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
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 246,
      "end": 264,
      "expression": {
        "type": "AssignmentExpression",
        "start": 246,
        "end": 263,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 246,
          "end": 253,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 246,
            "end": 247,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 248,
            "end": 253,
            "decorators": [],
            "name": "func4",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 256,
          "end": 263,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 256,
            "end": 257,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 258,
            "end": 263,
            "decorators": [],
            "name": "func5",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 265,
      "end": 283,
      "expression": {
        "type": "AssignmentExpression",
        "start": 265,
        "end": 282,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 265,
          "end": 272,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 265,
            "end": 266,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 267,
            "end": 272,
            "decorators": [],
            "name": "func5",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 275,
          "end": 282,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 275,
            "end": 276,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 277,
            "end": 282,
            "decorators": [],
            "name": "func4",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 286,
      "end": 432,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 290,
          "end": 431,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 431,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 431,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 294,
                "end": 431,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 300,
                    "end": 324,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 305,
                      "decorators": [],
                      "name": "func4",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": true,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 310,
                        "end": 314,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 311,
                          "end": 314,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 313,
                            "end": 314,
                            "typeName": {
                              "type": "Identifier",
                              "start": 313,
                              "end": 314,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 315,
                      "end": 323,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 317,
                        "end": 323
                      }
                    },
                    "static": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 306,
                      "end": 309,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 307,
                          "end": 308,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 307,
                            "end": 308,
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
                    "type": "TSMethodSignature",
                    "start": 329,
                    "end": 354,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 334,
                      "decorators": [],
                      "name": "func4",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": true,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 340,
                        "end": 344,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 341,
                          "end": 344,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 343,
                            "end": 344,
                            "typeName": {
                              "type": "Identifier",
                              "start": 343,
                              "end": 344,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 345,
                      "end": 353,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 347,
                        "end": 353
                      }
                    },
                    "static": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 336,
                      "end": 339,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 337,
                          "end": 338,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 337,
                            "end": 338,
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
                    "type": "TSPropertySignature",
                    "start": 359,
                    "end": 429,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 364,
                      "decorators": [],
                      "name": "func5",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 365,
                      "end": 428,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 367,
                        "end": 428,
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 377,
                            "end": 395,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 381,
                                "end": 385,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 382,
                                  "end": 385,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 384,
                                    "end": 385,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 384,
                                      "end": 385,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 386,
                              "end": 394,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 388,
                                "end": 394
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 377,
                              "end": 380,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 378,
                                  "end": 379,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 378,
                                    "end": 379,
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
                            "type": "TSCallSignatureDeclaration",
                            "start": 404,
                            "end": 422,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 408,
                                "end": 412,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 409,
                                  "end": 412,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 411,
                                    "end": 412,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 411,
                                      "end": 412,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 413,
                              "end": 421,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 415,
                                "end": 421
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 404,
                              "end": 407,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 405,
                                  "end": 406,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 405,
                                    "end": 406,
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
      "start": 447,
      "end": 467,
      "expression": {
        "type": "AssignmentExpression",
        "start": 447,
        "end": 466,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 447,
          "end": 455,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 447,
            "end": 449,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 450,
            "end": 455,
            "decorators": [],
            "name": "func4",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 458,
          "end": 466,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 458,
            "end": 460,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 461,
            "end": 466,
            "decorators": [],
            "name": "func5",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 468,
      "end": 488,
      "expression": {
        "type": "AssignmentExpression",
        "start": 468,
        "end": 487,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 468,
          "end": 476,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 468,
            "end": 470,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 471,
            "end": 476,
            "decorators": [],
            "name": "func5",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 479,
          "end": 487,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 479,
            "end": 481,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 482,
            "end": 487,
            "decorators": [],
            "name": "func4",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
