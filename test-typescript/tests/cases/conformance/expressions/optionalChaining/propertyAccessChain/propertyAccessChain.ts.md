__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 470,
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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 43,
            "name": "o1",
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 32,
                          "end": 33,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 33,
                          "end": 41,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 35,
                            "end": 41
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 51,
      "expression": {
        "type": "ChainExpression",
        "start": 45,
        "end": 50,
        "expression": {
          "type": "MemberExpression",
          "start": 45,
          "end": 50,
          "object": {
            "type": "Identifier",
            "start": 45,
            "end": 47,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": true
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 103,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 103,
            "name": "o2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 103,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 71,
                "end": 103,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 71,
                    "end": 80
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 83,
                    "end": 103,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 85,
                        "end": 101,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 85,
                          "end": 86,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 86,
                          "end": 101,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 88,
                            "end": 101,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 90,
                                "end": 99,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 90,
                                  "end": 91,
                                  "name": "c",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 91,
                                  "end": 99,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 93,
                                    "end": 99
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 113,
      "expression": {
        "type": "ChainExpression",
        "start": 105,
        "end": 112,
        "expression": {
          "type": "MemberExpression",
          "start": 105,
          "end": 112,
          "object": {
            "type": "MemberExpression",
            "start": 105,
            "end": 110,
            "object": {
              "type": "Identifier",
              "start": 105,
              "end": 107,
              "name": "o2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
          },
          "property": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 165,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 165,
            "name": "o3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 165,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 133,
                "end": 165,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 135,
                    "end": 163,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 136,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 136,
                      "end": 163,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 138,
                        "end": 163,
                        "types": [
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 138,
                            "end": 147
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 150,
                            "end": 163,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 152,
                                "end": 161,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 152,
                                  "end": 153,
                                  "name": "c",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 153,
                                  "end": 161,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 155,
                                    "end": 161
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 175,
      "expression": {
        "type": "ChainExpression",
        "start": 167,
        "end": 174,
        "expression": {
          "type": "MemberExpression",
          "start": 167,
          "end": 174,
          "object": {
            "type": "MemberExpression",
            "start": 167,
            "end": 171,
            "object": {
              "type": "Identifier",
              "start": 167,
              "end": 169,
              "name": "o3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": true
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 231,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 231,
            "name": "o4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 231,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 195,
                "end": 231,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 197,
                    "end": 229,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 198,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 199,
                      "end": 229,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 201,
                        "end": 229,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 203,
                            "end": 227,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 203,
                              "end": 204,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 204,
                              "end": 227,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 206,
                                "end": 227,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 208,
                                    "end": 225,
                                    "computed": false,
                                    "optional": true,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 208,
                                      "end": 209,
                                      "name": "d",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 210,
                                      "end": 225,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 212,
                                        "end": 225,
                                        "members": [
                                          {
                                            "type": "TSPropertySignature",
                                            "start": 214,
                                            "end": 223,
                                            "computed": false,
                                            "optional": false,
                                            "readonly": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 214,
                                              "end": 215,
                                              "name": "e",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 215,
                                              "end": 223,
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 217,
                                                "end": 223
                                              }
                                            },
                                            "accessibility": null,
                                            "static": false
                                          }
                                        ]
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 233,
      "end": 246,
      "expression": {
        "type": "ChainExpression",
        "start": 233,
        "end": 245,
        "expression": {
          "type": "MemberExpression",
          "start": 233,
          "end": 245,
          "object": {
            "type": "MemberExpression",
            "start": 233,
            "end": 242,
            "object": {
              "type": "MemberExpression",
              "start": 233,
              "end": 240,
              "object": {
                "type": "MemberExpression",
                "start": 233,
                "end": 237,
                "object": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 235,
                  "name": "o4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 237,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 239,
                "end": 240,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": true
            },
            "property": {
              "type": "Identifier",
              "start": 241,
              "end": 242,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 244,
            "end": 245,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": true
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 248,
      "end": 305,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 304,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 304,
            "name": "o5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 264,
              "end": 304,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 266,
                "end": 304,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 268,
                    "end": 302,
                    "key": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 269,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
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
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 276,
                              "end": 277,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                    "optional": true,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 281,
                                      "end": 282,
                                      "name": "d",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
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
                                            "optional": false,
                                            "readonly": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 287,
                                              "end": 288,
                                              "name": "e",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 288,
                                              "end": 296,
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 290,
                                                "end": 296
                                              }
                                            },
                                            "accessibility": null,
                                            "static": false
                                          }
                                        ]
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 322,
      "expression": {
        "type": "ChainExpression",
        "start": 306,
        "end": 321,
        "expression": {
          "type": "MemberExpression",
          "start": 306,
          "end": 321,
          "object": {
            "type": "MemberExpression",
            "start": 306,
            "end": 318,
            "object": {
              "type": "MemberExpression",
              "start": 306,
              "end": 316,
              "object": {
                "type": "CallExpression",
                "start": 306,
                "end": 314,
                "callee": {
                  "type": "MemberExpression",
                  "start": 306,
                  "end": 310,
                  "object": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 308,
                    "name": "o5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 309,
                    "end": 310,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": true,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 315,
                "end": 316,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 320,
            "end": 321,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": true
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 336,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 350,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 350,
            "end": 390,
            "name": "o6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 390,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 354,
                "end": 390,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 354,
                  "end": 357,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 355,
                      "end": 356,
                      "name": {
                        "type": "Identifier",
                        "start": 355,
                        "end": 356,
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
                  "start": 360,
                  "end": 390,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 363,
                    "end": 390,
                    "types": [
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 363,
                        "end": 372
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 376,
                        "end": 389,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 378,
                            "end": 387,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 378,
                              "end": 379,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 379,
                              "end": 387,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 381,
                                "end": 387
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    ]
                  }
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 392,
      "end": 408,
      "expression": {
        "type": "ChainExpression",
        "start": 392,
        "end": 407,
        "expression": {
          "type": "MemberExpression",
          "start": 392,
          "end": 407,
          "object": {
            "type": "CallExpression",
            "start": 392,
            "end": 404,
            "callee": {
              "type": "Identifier",
              "start": 392,
              "end": 394,
              "name": "o6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 394,
              "end": 402,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 395,
                  "end": 401
                }
              ]
            }
          },
          "property": {
            "type": "Identifier",
            "start": 406,
            "end": 407,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 422,
      "end": 436,
      "expression": {
        "type": "ConditionalExpression",
        "start": 422,
        "end": 435,
        "test": {
          "type": "ChainExpression",
          "start": 422,
          "end": 427,
          "expression": {
            "type": "MemberExpression",
            "start": 422,
            "end": 427,
            "object": {
              "type": "Identifier",
              "start": 422,
              "end": 424,
              "name": "o1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 426,
              "end": 427,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
          }
        },
        "consequent": {
          "type": "Literal",
          "start": 430,
          "end": 431,
          "value": 1,
          "raw": "1"
        },
        "alternate": {
          "type": "Literal",
          "start": 434,
          "end": 435,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 459,
      "expression": {
        "type": "ChainExpression",
        "start": 450,
        "end": 458,
        "expression": {
          "type": "MemberExpression",
          "start": 450,
          "end": 458,
          "object": {
            "type": "TSNonNullExpression",
            "start": 450,
            "end": 456,
            "expression": {
              "type": "MemberExpression",
              "start": 450,
              "end": 455,
              "object": {
                "type": "Identifier",
                "start": 450,
                "end": 452,
                "name": "o2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 454,
                "end": 455,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": true
            }
          },
          "property": {
            "type": "Identifier",
            "start": 457,
            "end": 458,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 460,
      "end": 470,
      "expression": {
        "type": "ChainExpression",
        "start": 460,
        "end": 469,
        "expression": {
          "type": "TSNonNullExpression",
          "start": 460,
          "end": 469,
          "expression": {
            "type": "MemberExpression",
            "start": 460,
            "end": 468,
            "object": {
              "type": "TSNonNullExpression",
              "start": 460,
              "end": 466,
              "expression": {
                "type": "MemberExpression",
                "start": 460,
                "end": 465,
                "object": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 462,
                  "name": "o2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 465,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": true
              }
            },
            "property": {
              "type": "Identifier",
              "start": 467,
              "end": 468,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
