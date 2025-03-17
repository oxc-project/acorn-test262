__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 768,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "name": "test",
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
          "start": 25,
          "end": 48,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 48,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 28,
              "end": 48,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 30,
                  "end": 46,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 31,
                      "end": 42,
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 34,
                        "end": 42,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 36,
                          "end": 42
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 46,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 45,
                      "end": 46,
                      "typeName": {
                        "type": "Identifier",
                        "start": 45,
                        "end": 46,
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 49,
        "end": 52,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 51,
          "end": 52,
          "typeName": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 97,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 97,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 71,
                "end": 97,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 73,
                    "end": 84,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 75,
                      "end": 83,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 77,
                        "end": 83
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 85,
                    "end": 95,
                    "computed": false,
                    "optional": true,
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
                      "start": 87,
                      "end": 95,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 89,
                        "end": 95
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 153,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 153,
            "name": "x2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 153,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 115,
                "end": 153,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 117,
                    "end": 128,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 118,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 127,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 129,
                    "end": 151,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 131,
                      "end": 151,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 133,
                        "end": 151,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 133,
                            "end": 139
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 142,
                            "end": 151
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 175,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 164,
            "name": "y1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 167,
            "end": 175,
            "callee": {
              "type": "Identifier",
              "start": 167,
              "end": 171,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 172,
                "end": 174,
                "name": "x1",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 185,
            "name": "y2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 188,
            "end": 196,
            "callee": {
              "type": "Identifier",
              "start": 188,
              "end": 192,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 193,
                "end": 195,
                "name": "x2",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 243,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 243,
            "name": "v1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 243,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 207,
                "end": 243,
                "typeName": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 215,
                  "name": "Required",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 215,
                  "end": 243,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 216,
                      "end": 242,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 218,
                          "end": 229,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 218,
                            "end": 219,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 220,
                            "end": 228,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 222,
                              "end": 228
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 230,
                          "end": 240,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 230,
                            "end": 231,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 232,
                            "end": 240,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 234,
                              "end": 240
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
      "start": 245,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 277,
            "name": "v1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 277,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 253,
                "end": 277,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 255,
                    "end": 265,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 255,
                      "end": 256,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 256,
                      "end": 264,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 258,
                        "end": 264
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 266,
                    "end": 275,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 267,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 267,
                      "end": 275,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 269,
                        "end": 275
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 280,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 336,
            "name": "v2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 286,
              "end": 336,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 288,
                "end": 336,
                "typeName": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 296,
                  "name": "Required",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 296,
                  "end": 336,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 297,
                      "end": 335,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 299,
                          "end": 310,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 299,
                            "end": 300,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 301,
                            "end": 309,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 303,
                              "end": 309
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 311,
                          "end": 333,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 311,
                            "end": 312,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 313,
                            "end": 333,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 315,
                              "end": 333,
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 315,
                                  "end": 321
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 324,
                                  "end": 333
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
      "start": 338,
      "end": 383,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 382,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 382,
            "name": "v2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 382,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 346,
                "end": 382,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 348,
                    "end": 358,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 348,
                      "end": 349,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 349,
                      "end": 357,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 351,
                        "end": 357
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 359,
                    "end": 380,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 360,
                      "end": 380,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 362,
                        "end": 380,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 362,
                            "end": 368
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 371,
                            "end": 380
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 385,
      "end": 427,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 389,
          "end": 426,
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 426,
            "name": "v3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 391,
              "end": 426,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 393,
                "end": 426,
                "typeName": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 400,
                  "name": "Partial",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 400,
                  "end": 426,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 401,
                      "end": 425,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 403,
                          "end": 413,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 403,
                            "end": 404,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 404,
                            "end": 412,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 406,
                              "end": 412
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 414,
                          "end": 423,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 414,
                            "end": 415,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 415,
                            "end": 423,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 417,
                              "end": 423
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
      "start": 428,
      "end": 463,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 432,
          "end": 462,
          "id": {
            "type": "Identifier",
            "start": 432,
            "end": 462,
            "name": "v3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 434,
              "end": 462,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 436,
                "end": 462,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 438,
                    "end": 449,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 438,
                      "end": 439,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 440,
                      "end": 448,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 442,
                        "end": 448
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 450,
                    "end": 460,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 450,
                      "end": 451,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 452,
                      "end": 460,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 454,
                        "end": 460
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 465,
      "end": 519,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 469,
          "end": 518,
          "id": {
            "type": "Identifier",
            "start": 469,
            "end": 518,
            "name": "v4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 471,
              "end": 518,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 473,
                "end": 518,
                "typeName": {
                  "type": "Identifier",
                  "start": 473,
                  "end": 480,
                  "name": "Partial",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 480,
                  "end": 518,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 481,
                      "end": 517,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 483,
                          "end": 493,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 483,
                            "end": 484,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 484,
                            "end": 492,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 486,
                              "end": 492
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 494,
                          "end": 515,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 494,
                            "end": 495,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 495,
                            "end": 515,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 497,
                              "end": 515,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 497,
                                  "end": 503
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 506,
                                  "end": 515
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
      "start": 520,
      "end": 567,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 524,
          "end": 566,
          "id": {
            "type": "Identifier",
            "start": 524,
            "end": 566,
            "name": "v4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 526,
              "end": 566,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 528,
                "end": 566,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 530,
                    "end": 541,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 530,
                      "end": 531,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 532,
                      "end": 540,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 534,
                        "end": 540
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 542,
                    "end": 564,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 542,
                      "end": 543,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 544,
                      "end": 564,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 546,
                        "end": 564,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 546,
                            "end": 552
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 555,
                            "end": 564
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 569,
      "end": 621,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 573,
          "end": 620,
          "id": {
            "type": "Identifier",
            "start": 573,
            "end": 620,
            "name": "v5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 575,
              "end": 620,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 577,
                "end": 620,
                "typeName": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 585,
                  "name": "Required",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 585,
                  "end": 620,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 586,
                      "end": 619,
                      "typeName": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 593,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 593,
                        "end": 619,
                        "params": [
                          {
                            "type": "TSTypeLiteral",
                            "start": 594,
                            "end": 618,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 596,
                                "end": 606,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 596,
                                  "end": 597,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 597,
                                  "end": 605,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 599,
                                    "end": 605
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 607,
                                "end": 616,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 607,
                                  "end": 608,
                                  "name": "b",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 608,
                                  "end": 616,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 610,
                                    "end": 616
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
      "start": 622,
      "end": 655,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 626,
          "end": 654,
          "id": {
            "type": "Identifier",
            "start": 626,
            "end": 654,
            "name": "v5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 628,
              "end": 654,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 630,
                "end": 654,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 632,
                    "end": 642,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 632,
                      "end": 633,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 633,
                      "end": 641,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 635,
                        "end": 641
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 643,
                    "end": 652,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 643,
                      "end": 644,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 644,
                      "end": 652,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 646,
                        "end": 652
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 657,
      "end": 721,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 661,
          "end": 720,
          "id": {
            "type": "Identifier",
            "start": 661,
            "end": 720,
            "name": "v6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 663,
              "end": 720,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 665,
                "end": 720,
                "typeName": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 673,
                  "name": "Required",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 673,
                  "end": 720,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 674,
                      "end": 719,
                      "typeName": {
                        "type": "Identifier",
                        "start": 674,
                        "end": 681,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 681,
                        "end": 719,
                        "params": [
                          {
                            "type": "TSTypeLiteral",
                            "start": 682,
                            "end": 718,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 684,
                                "end": 694,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 684,
                                  "end": 685,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 685,
                                  "end": 693,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 687,
                                    "end": 693
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 695,
                                "end": 716,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 695,
                                  "end": 696,
                                  "name": "b",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 696,
                                  "end": 716,
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "start": 698,
                                    "end": 716,
                                    "types": [
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 698,
                                        "end": 704
                                      },
                                      {
                                        "type": "TSUndefinedKeyword",
                                        "start": 707,
                                        "end": 716
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
      "start": 722,
      "end": 767,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 726,
          "end": 766,
          "id": {
            "type": "Identifier",
            "start": 726,
            "end": 766,
            "name": "v6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 728,
              "end": 766,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 730,
                "end": 766,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 732,
                    "end": 742,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 732,
                      "end": 733,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 733,
                      "end": 741,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 735,
                        "end": 741
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 743,
                    "end": 764,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 743,
                      "end": 744,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 744,
                      "end": 764,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 746,
                        "end": 764,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 746,
                            "end": 752
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 755,
                            "end": 764
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
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
