__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 392,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "Promise",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
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
        "start": 21,
        "end": 75,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 27,
            "end": 73,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 31,
              "end": 34,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 32,
                  "end": 33,
                  "name": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "U",
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
                "start": 35,
                "end": 59,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 37,
                  "end": 59,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 39,
                    "end": 59,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 40,
                        "end": 44,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 41,
                          "end": 44,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 43,
                            "end": 44,
                            "typeName": {
                              "type": "Identifier",
                              "start": 43,
                              "end": 44,
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 46,
                      "end": 59,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 49,
                        "end": 59,
                        "typeName": {
                          "type": "Identifier",
                          "start": 49,
                          "end": 56,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 56,
                          "end": 59,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 57,
                              "end": 58,
                              "typeName": {
                                "type": "Identifier",
                                "start": 57,
                                "end": 58,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 69,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 69,
                  "end": 72,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 70,
                      "end": 71,
                      "typeName": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 71,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 77,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 95,
        "decorators": [],
        "name": "CPromise",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 95,
        "end": 118,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 96,
            "end": 117,
            "name": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 106,
              "end": 117,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 108,
                  "end": 115,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 114,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 111,
                      "end": 114
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
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
        "start": 119,
        "end": 193,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 125,
            "end": 191,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 129,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 129,
              "end": 152,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 130,
                  "end": 151,
                  "name": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 131,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 140,
                    "end": 151,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 142,
                        "end": 149,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 143,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 143,
                          "end": 148,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 145,
                            "end": 148
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
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
                "start": 153,
                "end": 177,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 155,
                  "end": 177,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 157,
                    "end": 177,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 158,
                        "end": 162,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 159,
                          "end": 162,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 161,
                            "end": 162,
                            "typeName": {
                              "type": "Identifier",
                              "start": 161,
                              "end": 162,
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 164,
                      "end": 177,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 167,
                        "end": 177,
                        "typeName": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 174,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 174,
                          "end": 177,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 175,
                              "end": 176,
                              "typeName": {
                                "type": "Identifier",
                                "start": 175,
                                "end": 176,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 180,
                "end": 190,
                "typeName": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 187,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 187,
                  "end": 190,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 188,
                      "end": 189,
                      "typeName": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 189,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 195,
      "end": 215,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 208,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 209,
        "end": 215,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 211,
            "end": 213,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 216,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 229,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 230,
        "end": 239,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 232,
            "end": 234,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 235,
            "end": 237,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 261,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 260,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 260,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 260,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 248,
                "end": 260,
                "typeName": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 255,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 255,
                  "end": 260,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 256,
                      "end": 259,
                      "typeName": {
                        "type": "Identifier",
                        "start": 256,
                        "end": 259,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
      "start": 262,
      "end": 282,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 281,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 281,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 267,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 269,
                "end": 281,
                "typeName": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 276,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 276,
                  "end": 281,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 277,
                      "end": 280,
                      "typeName": {
                        "type": "Identifier",
                        "start": 277,
                        "end": 280,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 283,
      "end": 289,
      "expression": {
        "type": "AssignmentExpression",
        "start": 283,
        "end": 288,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 283,
          "end": 284,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 287,
          "end": 288,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 296,
      "end": 302,
      "expression": {
        "type": "AssignmentExpression",
        "start": 296,
        "end": 301,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 296,
          "end": 297,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 300,
          "end": 301,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 310,
      "end": 332,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 331,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 316,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 318,
                "end": 331,
                "typeName": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 326,
                  "decorators": [],
                  "name": "CPromise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 326,
                  "end": 331,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 327,
                      "end": 330,
                      "typeName": {
                        "type": "Identifier",
                        "start": 327,
                        "end": 330,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
      "start": 333,
      "end": 355,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 354,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 354,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 354,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 341,
                "end": 354,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 349,
                  "decorators": [],
                  "name": "CPromise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 349,
                  "end": 354,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 350,
                      "end": 353,
                      "typeName": {
                        "type": "Identifier",
                        "start": 350,
                        "end": 353,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 356,
      "end": 364,
      "expression": {
        "type": "AssignmentExpression",
        "start": 356,
        "end": 363,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 356,
          "end": 358,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 361,
          "end": 363,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 371,
      "end": 379,
      "expression": {
        "type": "AssignmentExpression",
        "start": 371,
        "end": 378,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 371,
          "end": 373,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 376,
          "end": 378,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
