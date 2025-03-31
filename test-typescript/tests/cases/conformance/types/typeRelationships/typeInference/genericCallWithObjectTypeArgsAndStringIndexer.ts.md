__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 75,
  "end": 787,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 75,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 91,
          "end": 95,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 95,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 94,
              "end": 95,
              "typeName": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
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
        "start": 97,
        "end": 114,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 103,
            "end": 112,
            "argument": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 87,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 89,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
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
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 144,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 144,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 123,
                "end": 144,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 125,
                    "end": 142,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 126,
                        "end": 135,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 127,
                          "end": 135,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 129,
                            "end": 135
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 136,
                      "end": 142,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 138,
                        "end": 142,
                        "typeName": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 142,
                          "name": "Date",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
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
      "start": 146,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 151,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 154,
            "end": 160,
            "callee": {
              "type": "Identifier",
              "start": 154,
              "end": 157,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 158,
                "end": 159,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 163,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 177,
        "name": "other",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 181,
          "end": 187,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 184,
            "end": 187,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 186,
              "end": 187,
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
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
        "start": 189,
        "end": 249,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 195,
            "end": 221,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 199,
                "end": 220,
                "id": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 220,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 200,
                    "end": 220,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 202,
                      "end": 220,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 204,
                          "end": 218,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 205,
                              "end": 214,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 206,
                                "end": 214,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 208,
                                  "end": 214
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 215,
                            "end": 218,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 217,
                              "end": 218,
                              "typeName": {
                                "type": "Identifier",
                                "start": 217,
                                "end": 218,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
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
            "start": 226,
            "end": 242,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 230,
                "end": 241,
                "id": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 232,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 235,
                  "end": 241,
                  "callee": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 238,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 239,
                      "end": 240,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 177,
        "end": 180,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 178,
            "end": 179,
            "name": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
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
    {
      "type": "FunctionDeclaration",
      "start": 251,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 266,
        "name": "other2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 283,
          "end": 289,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 286,
            "end": 289,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 288,
              "end": 289,
              "typeName": {
                "type": "Identifier",
                "start": 288,
                "end": 289,
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
        "start": 291,
        "end": 380,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 297,
            "end": 323,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 301,
                "end": 322,
                "id": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 322,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 302,
                    "end": 322,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 304,
                      "end": 322,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 306,
                          "end": 320,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 307,
                              "end": 316,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 308,
                                "end": 316,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 310,
                                  "end": 316
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 317,
                            "end": 320,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 319,
                              "end": 320,
                              "typeName": {
                                "type": "Identifier",
                                "start": 319,
                                "end": 320,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
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
            "start": 328,
            "end": 344,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 332,
                "end": 343,
                "id": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 334,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 337,
                  "end": 343,
                  "callee": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 340,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 341,
                      "end": 342,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          },
          {
            "type": "VariableDeclaration",
            "start": 349,
            "end": 372,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 353,
                "end": 371,
                "id": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 360,
                  "name": "d",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 354,
                    "end": 360,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 356,
                      "end": 360,
                      "typeName": {
                        "type": "Identifier",
                        "start": 356,
                        "end": 360,
                        "name": "Date",
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
                "init": {
                  "type": "MemberExpression",
                  "start": 363,
                  "end": 371,
                  "object": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 365,
                    "name": "r2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 366,
                    "end": 370,
                    "value": "hm",
                    "raw": "'hm'"
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 266,
        "end": 282,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 267,
            "end": 281,
            "name": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 277,
              "end": 281,
              "typeName": {
                "type": "Identifier",
                "start": 277,
                "end": 281,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 382,
      "end": 578,
      "id": {
        "type": "Identifier",
        "start": 391,
        "end": 397,
        "name": "other3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 430,
          "end": 436,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 433,
            "end": 436,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 435,
              "end": 436,
              "typeName": {
                "type": "Identifier",
                "start": 435,
                "end": 436,
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
        "start": 438,
        "end": 578,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 444,
            "end": 470,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 448,
                "end": 469,
                "id": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 469,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 449,
                    "end": 469,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 451,
                      "end": 469,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 453,
                          "end": 467,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 454,
                              "end": 463,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 455,
                                "end": 463,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 457,
                                  "end": 463
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 464,
                            "end": 467,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 466,
                              "end": 467,
                              "typeName": {
                                "type": "Identifier",
                                "start": 466,
                                "end": 467,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
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
            "start": 475,
            "end": 491,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 479,
                "end": 490,
                "id": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 481,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 484,
                  "end": 490,
                  "callee": {
                    "type": "Identifier",
                    "start": 484,
                    "end": 487,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 488,
                      "end": 489,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          },
          {
            "type": "VariableDeclaration",
            "start": 496,
            "end": 519,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 500,
                "end": 518,
                "id": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 507,
                  "name": "d",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 501,
                    "end": 507,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 503,
                      "end": 507,
                      "typeName": {
                        "type": "Identifier",
                        "start": 503,
                        "end": 507,
                        "name": "Date",
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
                "init": {
                  "type": "MemberExpression",
                  "start": 510,
                  "end": 518,
                  "object": {
                    "type": "Identifier",
                    "start": 510,
                    "end": 512,
                    "name": "r2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 513,
                    "end": 517,
                    "value": "hm",
                    "raw": "'hm'"
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 397,
        "end": 429,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 398,
            "end": 412,
            "name": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 408,
              "end": 412,
              "typeName": {
                "type": "Identifier",
                "start": 408,
                "end": 412,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 414,
            "end": 428,
            "name": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 424,
              "end": 428,
              "typeName": {
                "type": "Identifier",
                "start": 424,
                "end": 428,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
