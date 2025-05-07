__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 10442,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 144,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 144,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 54,
                "end": 144,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 54,
                    "end": 63
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 66,
                    "end": 144,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 72,
                        "end": 91,
                        "accessibility": null,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 73,
                            "end": 84,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 76,
                              "end": 84,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 78,
                                "end": 84
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 85,
                          "end": 90,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 87,
                            "end": 90
                          }
                        }
                      },
                      {
                        "type": "TSIndexSignature",
                        "start": 96,
                        "end": 115,
                        "accessibility": null,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 97,
                            "end": 108,
                            "decorators": [],
                            "name": "key",
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
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 109,
                          "end": 114,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 111,
                            "end": 114
                          }
                        }
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 120,
                        "end": 142,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 121,
                            "end": 135,
                            "argument": {
                              "type": "Identifier",
                              "start": 124,
                              "end": 128,
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 128,
                              "end": 135,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 130,
                                "end": 135,
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 130,
                                  "end": 133
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 136,
                          "end": 141,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 138,
                            "end": 141
                          }
                        },
                        "typeParameters": null
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
      "type": "VariableDeclaration",
      "start": 147,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 160,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 160,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 154,
                "end": 160
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 173,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 162,
        "end": 172,
        "expression": {
          "type": "MemberExpression",
          "start": 162,
          "end": 172,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": true,
          "property": {
            "type": "AssignmentExpression",
            "start": 166,
            "end": 171,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 170,
              "end": 171,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 187,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 174,
        "end": 186,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 174,
          "end": 184,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 174,
            "end": 175,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 176,
            "end": 184,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 202,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 202,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 202,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 196,
                "end": 202
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 216,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 204,
        "end": 215,
        "expression": {
          "type": "MemberExpression",
          "start": 204,
          "end": 215,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 204,
            "end": 208,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "AssignmentExpression",
            "start": 209,
            "end": 214,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 213,
              "end": 214,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 230,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 217,
        "end": 229,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 217,
          "end": 227,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 219,
            "end": 227,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 245,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 245,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 245,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 239,
                "end": 245
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 247,
      "end": 257,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 247,
        "end": 257,
        "expression": {
          "type": "CallExpression",
          "start": 247,
          "end": 257,
          "arguments": [
            {
              "type": "AssignmentExpression",
              "start": 251,
              "end": 256,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 251,
                "end": 252,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 255,
                "end": 256,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 247,
            "end": 248,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": true,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 258,
      "end": 271,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 258,
        "end": 270,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 258,
          "end": 268,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 258,
            "end": 259,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 260,
            "end": 268,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 273,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 286,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 286,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 286,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 280,
                "end": 286
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 288,
      "end": 300,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 288,
        "end": 299,
        "expression": {
          "type": "CallExpression",
          "start": 288,
          "end": 299,
          "arguments": [
            {
              "type": "AssignmentExpression",
              "start": 293,
              "end": 298,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 293,
                "end": 294,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 297,
                "end": 298,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 288,
            "end": 292,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 301,
      "end": 314,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 301,
        "end": 313,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 301,
          "end": 311,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 301,
            "end": 302,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 303,
            "end": 311,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 335,
      "end": 390,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 389,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 389,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 389,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 352,
                "end": 389,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 352,
                    "end": 361
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 365,
                    "end": 388,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 366,
                        "end": 372,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 367,
                          "end": 372,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 369,
                            "end": 372
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 374,
                      "end": 388,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 377,
                        "end": 388,
                        "asserts": false,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 377,
                          "end": 378,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 382,
                          "end": 388,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 382,
                            "end": 388
                          }
                        }
                      }
                    },
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
      "type": "VariableDeclaration",
      "start": 391,
      "end": 424,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 423,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 423,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 406,
              "end": 423,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 408,
                "end": 423,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 408,
                    "end": 414
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 417,
                    "end": 423
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
      "type": "IfStatement",
      "start": 425,
      "end": 534,
      "alternate": {
        "type": "BlockStatement",
        "start": 507,
        "end": 534,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 513,
            "end": 515,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 513,
              "end": 514,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 520,
            "end": 522,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 520,
              "end": 521,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 527,
            "end": 532,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 527,
              "end": 531,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 529,
                  "end": 530,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 527,
                "end": 528,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 437,
        "end": 501,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 443,
            "end": 445,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 460,
            "end": 462,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 460,
              "end": 461,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 494,
            "end": 499,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 494,
              "end": 498,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 496,
                  "end": 497,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 494,
                "end": 495,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "ChainExpression",
        "start": 429,
        "end": 435,
        "expression": {
          "type": "CallExpression",
          "start": 429,
          "end": 435,
          "arguments": [
            {
              "type": "Identifier",
              "start": 433,
              "end": 434,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 429,
            "end": 430,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": true,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 535,
      "end": 537,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 535,
        "end": 536,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 538,
      "end": 540,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 538,
        "end": 539,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 541,
      "end": 546,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 541,
        "end": 545,
        "arguments": [
          {
            "type": "Identifier",
            "start": 543,
            "end": 544,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 541,
          "end": 542,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 548,
      "end": 606,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 562,
          "end": 605,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 562,
            "end": 605,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 564,
              "end": 605,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 566,
                "end": 605,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 566,
                    "end": 593,
                    "members": [
                      {
                        "type": "TSMethodSignature",
                        "start": 568,
                        "end": 591,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 568,
                          "end": 569,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "method",
                        "optional": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 570,
                            "end": 576,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 571,
                              "end": 576,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 573,
                                "end": 576
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 577,
                          "end": 590,
                          "typeAnnotation": {
                            "type": "TSTypePredicate",
                            "start": 579,
                            "end": 590,
                            "asserts": false,
                            "parameterName": {
                              "type": "Identifier",
                              "start": 579,
                              "end": 580,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 584,
                              "end": 590,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 584,
                                "end": 590
                              }
                            }
                          }
                        },
                        "static": false,
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 596,
                    "end": 605
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
      "type": "IfStatement",
      "start": 607,
      "end": 748,
      "alternate": {
        "type": "BlockStatement",
        "start": 709,
        "end": 748,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 715,
            "end": 717,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 715,
              "end": 716,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 722,
            "end": 725,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 722,
              "end": 724,
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 730,
            "end": 736,
            "directive": null,
            "expression": {
              "type": "ChainExpression",
              "start": 730,
              "end": 735,
              "expression": {
                "type": "MemberExpression",
                "start": 730,
                "end": 735,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 730,
                  "end": 732,
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 734,
                  "end": 735,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 741,
            "end": 746,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 741,
              "end": 745,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 741,
                "end": 743,
                "decorators": [],
                "name": "o2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 744,
                "end": 745,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 621,
        "end": 703,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 627,
            "end": 629,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 627,
              "end": 628,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 644,
            "end": 649,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 644,
              "end": 648,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 644,
                "end": 646,
                "decorators": [],
                "name": "o2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 647,
                "end": 648,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 681,
            "end": 687,
            "directive": null,
            "expression": {
              "type": "ChainExpression",
              "start": 681,
              "end": 686,
              "expression": {
                "type": "MemberExpression",
                "start": 681,
                "end": 686,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 681,
                  "end": 683,
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 685,
                  "end": 686,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 692,
            "end": 701,
            "directive": null,
            "expression": {
              "type": "ChainExpression",
              "start": 692,
              "end": 700,
              "expression": {
                "type": "CallExpression",
                "start": 692,
                "end": 700,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 698,
                    "end": 699,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 692,
                  "end": 697,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 692,
                    "end": 694,
                    "decorators": [],
                    "name": "o2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 697,
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
          }
        ]
      },
      "test": {
        "type": "ChainExpression",
        "start": 611,
        "end": 619,
        "expression": {
          "type": "CallExpression",
          "start": 611,
          "end": 619,
          "arguments": [
            {
              "type": "Identifier",
              "start": 617,
              "end": 618,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 611,
            "end": 616,
            "computed": false,
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
              "type": "Identifier",
              "start": 615,
              "end": 616,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 749,
      "end": 751,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 749,
        "end": 750,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 752,
      "end": 755,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 752,
        "end": 754,
        "decorators": [],
        "name": "o2",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 756,
      "end": 762,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 756,
        "end": 761,
        "expression": {
          "type": "MemberExpression",
          "start": 756,
          "end": 761,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 756,
            "end": 758,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 760,
            "end": 761,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 763,
      "end": 768,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 763,
        "end": 767,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 763,
          "end": 765,
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 766,
          "end": 767,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 770,
      "end": 842,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 784,
          "end": 841,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 784,
            "end": 841,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 786,
              "end": 841,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 788,
                "end": 841,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 788,
                    "end": 807,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 790,
                        "end": 795,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 790,
                          "end": 791,
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
                          "start": 791,
                          "end": 794,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 793,
                            "end": 794,
                            "literal": {
                              "type": "Literal",
                              "start": 793,
                              "end": 794,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 796,
                        "end": 805,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 796,
                          "end": 797,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 797,
                          "end": 805,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 799,
                            "end": 805
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 810,
                    "end": 829,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 812,
                        "end": 817,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 812,
                          "end": 813,
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
                          "start": 813,
                          "end": 816,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 815,
                            "end": 816,
                            "literal": {
                              "type": "Literal",
                              "start": 815,
                              "end": 816,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 818,
                        "end": 827,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 818,
                          "end": 819,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 819,
                          "end": 827,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 821,
                            "end": 827
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 832,
                    "end": 841
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
      "type": "IfStatement",
      "start": 843,
      "end": 930,
      "alternate": {
        "type": "BlockStatement",
        "start": 898,
        "end": 930,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 904,
            "end": 907,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 904,
              "end": 906,
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 912,
            "end": 918,
            "directive": null,
            "expression": {
              "type": "ChainExpression",
              "start": 912,
              "end": 917,
              "expression": {
                "type": "MemberExpression",
                "start": 912,
                "end": 917,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 912,
                  "end": 914,
                  "decorators": [],
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 916,
                  "end": 917,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 923,
            "end": 928,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 923,
              "end": 927,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 923,
                "end": 925,
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 926,
                "end": 927,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 860,
        "end": 892,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 866,
            "end": 869,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 866,
              "end": 868,
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 874,
            "end": 879,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 874,
              "end": 878,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 874,
                "end": 876,
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 877,
                "end": 878,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 884,
            "end": 890,
            "directive": null,
            "expression": {
              "type": "ChainExpression",
              "start": 884,
              "end": 889,
              "expression": {
                "type": "MemberExpression",
                "start": 884,
                "end": 889,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 884,
                  "end": 886,
                  "decorators": [],
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 888,
                  "end": 889,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 847,
        "end": 858,
        "operator": "===",
        "left": {
          "type": "ChainExpression",
          "start": 847,
          "end": 852,
          "expression": {
            "type": "MemberExpression",
            "start": 847,
            "end": 852,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 847,
              "end": 849,
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 851,
              "end": 852,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "right": {
          "type": "Literal",
          "start": 857,
          "end": 858,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 931,
      "end": 934,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 931,
        "end": 933,
        "decorators": [],
        "name": "o3",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 935,
      "end": 941,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 935,
        "end": 940,
        "expression": {
          "type": "MemberExpression",
          "start": 935,
          "end": 940,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 935,
            "end": 937,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 939,
            "end": 940,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 942,
      "end": 947,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 942,
        "end": 946,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 942,
          "end": 944,
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 945,
          "end": 946,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 949,
      "end": 990,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 963,
          "end": 989,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 963,
            "end": 989,
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 965,
              "end": 989,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 967,
                "end": 989,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 969,
                    "end": 987,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 969,
                      "end": 970,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 971,
                      "end": 987,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 973,
                        "end": 987,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 975,
                            "end": 985,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 975,
                              "end": 976,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 976,
                              "end": 985,
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 978,
                                "end": 985
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
      "type": "IfStatement",
      "start": 991,
      "end": 1120,
      "alternate": {
        "type": "BlockStatement",
        "start": 1082,
        "end": 1120,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1088,
            "end": 1093,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 1088,
              "end": 1092,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1088,
                "end": 1090,
                "decorators": [],
                "name": "o4",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1091,
                "end": 1092,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1098,
            "end": 1106,
            "directive": null,
            "expression": {
              "type": "ChainExpression",
              "start": 1098,
              "end": 1105,
              "expression": {
                "type": "MemberExpression",
                "start": 1098,
                "end": 1105,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1098,
                  "end": 1102,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1098,
                    "end": 1100,
                    "decorators": [],
                    "name": "o4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1101,
                    "end": 1102,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 1104,
                  "end": 1105,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1111,
            "end": 1118,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 1111,
              "end": 1117,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 1111,
                "end": 1115,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1111,
                  "end": 1113,
                  "decorators": [],
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1114,
                  "end": 1115,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1116,
                "end": 1117,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1004,
        "end": 1076,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1010,
            "end": 1015,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 1010,
              "end": 1014,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1010,
                "end": 1012,
                "decorators": [],
                "name": "o4",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1013,
                "end": 1014,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1038,
            "end": 1045,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 1038,
              "end": 1044,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 1038,
                "end": 1042,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1038,
                  "end": 1040,
                  "decorators": [],
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1041,
                  "end": 1042,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1043,
                "end": 1044,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1058,
            "end": 1066,
            "directive": null,
            "expression": {
              "type": "ChainExpression",
              "start": 1058,
              "end": 1065,
              "expression": {
                "type": "MemberExpression",
                "start": 1058,
                "end": 1065,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1058,
                  "end": 1062,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1058,
                    "end": 1060,
                    "decorators": [],
                    "name": "o4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1061,
                    "end": 1062,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 1064,
                  "end": 1065,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "test": {
        "type": "ChainExpression",
        "start": 995,
        "end": 1002,
        "expression": {
          "type": "MemberExpression",
          "start": 995,
          "end": 1002,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 995,
            "end": 999,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 995,
              "end": 997,
              "decorators": [],
              "name": "o4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 998,
              "end": 999,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 1001,
            "end": 1002,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1121,
      "end": 1126,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 1121,
        "end": 1125,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1121,
          "end": 1123,
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1124,
          "end": 1125,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1127,
      "end": 1135,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 1127,
        "end": 1134,
        "expression": {
          "type": "MemberExpression",
          "start": 1127,
          "end": 1134,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1127,
            "end": 1131,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1127,
              "end": 1129,
              "decorators": [],
              "name": "o4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1130,
              "end": 1131,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 1133,
            "end": 1134,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1136,
      "end": 1143,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 1136,
        "end": 1142,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 1136,
          "end": 1140,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1136,
            "end": 1138,
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1139,
            "end": 1140,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1141,
          "end": 1142,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1145,
      "end": 1201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1159,
          "end": 1200,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1159,
            "end": 1200,
            "decorators": [],
            "name": "o5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1161,
              "end": 1200,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1163,
                "end": 1200,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1165,
                    "end": 1198,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1165,
                      "end": 1166,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1167,
                      "end": 1198,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1169,
                        "end": 1198,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1171,
                            "end": 1196,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1171,
                              "end": 1172,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1172,
                              "end": 1196,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 1174,
                                "end": 1196,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 1176,
                                    "end": 1194,
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1176,
                                      "end": 1177,
                                      "decorators": [],
                                      "name": "z",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": true,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1178,
                                      "end": 1194,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 1180,
                                        "end": 1194,
                                        "members": [
                                          {
                                            "type": "TSPropertySignature",
                                            "start": 1182,
                                            "end": 1192,
                                            "accessibility": null,
                                            "computed": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 1182,
                                              "end": 1183,
                                              "decorators": [],
                                              "name": "w",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "readonly": false,
                                            "static": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1183,
                                              "end": 1192,
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1185,
                                                "end": 1192
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
      "type": "IfStatement",
      "start": 1202,
      "end": 1452,
      "alternate": {
        "type": "BlockStatement",
        "start": 1365,
        "end": 1452,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1371,
            "end": 1376,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 1371,
              "end": 1375,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1371,
                "end": 1373,
                "decorators": [],
                "name": "o5",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1374,
                "end": 1375,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1381,
            "end": 1389,
            "directive": null,
            "expression": {
              "type": "ChainExpression",
              "start": 1381,
              "end": 1388,
              "expression": {
                "type": "MemberExpression",
                "start": 1381,
                "end": 1388,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1381,
                  "end": 1385,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1381,
                    "end": 1383,
                    "decorators": [],
                    "name": "o5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1384,
                    "end": 1385,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 1387,
                  "end": 1388,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1394,
            "end": 1404,
            "directive": null,
            "expression": {
              "type": "ChainExpression",
              "start": 1394,
              "end": 1403,
              "expression": {
                "type": "MemberExpression",
                "start": 1394,
                "end": 1403,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1394,
                  "end": 1401,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1394,
                    "end": 1398,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1394,
                      "end": 1396,
                      "decorators": [],
                      "name": "o5",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1397,
                      "end": 1398,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 1400,
                    "end": 1401,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1402,
                  "end": 1403,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1409,
            "end": 1422,
            "directive": null,
            "expression": {
              "type": "ChainExpression",
              "start": 1409,
              "end": 1421,
              "expression": {
                "type": "MemberExpression",
                "start": 1409,
                "end": 1421,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1409,
                  "end": 1418,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1409,
                    "end": 1416,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1409,
                      "end": 1413,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1409,
                        "end": 1411,
                        "decorators": [],
                        "name": "o5",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1412,
                        "end": 1413,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 1415,
                      "end": 1416,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1417,
                    "end": 1418,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 1420,
                  "end": 1421,
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1427,
            "end": 1434,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 1427,
              "end": 1433,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 1427,
                "end": 1431,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1427,
                  "end": 1429,
                  "decorators": [],
                  "name": "o5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1430,
                  "end": 1431,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1432,
                "end": 1433,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1439,
            "end": 1450,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 1439,
              "end": 1449,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 1439,
                "end": 1447,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1439,
                  "end": 1445,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1439,
                    "end": 1443,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1439,
                      "end": 1441,
                      "decorators": [],
                      "name": "o5",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1442,
                      "end": 1443,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1444,
                    "end": 1445,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1446,
                  "end": 1447,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1448,
                "end": 1449,
                "decorators": [],
                "name": "w",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1220,
        "end": 1359,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1226,
            "end": 1231,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 1226,
              "end": 1230,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1226,
                "end": 1228,
                "decorators": [],
                "name": "o5",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1229,
                "end": 1230,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1236,
            "end": 1243,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 1236,
              "end": 1242,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 1236,
                "end": 1240,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1236,
                  "end": 1238,
                  "decorators": [],
                  "name": "o5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1239,
                  "end": 1240,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1241,
                "end": 1242,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1248,
            "end": 1257,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 1248,
              "end": 1256,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 1248,
                "end": 1254,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1248,
                  "end": 1252,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1248,
                    "end": 1250,
                    "decorators": [],
                    "name": "o5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1251,
                    "end": 1252,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1253,
                  "end": 1254,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1255,
                "end": 1256,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1262,
            "end": 1273,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 1262,
              "end": 1272,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 1262,
                "end": 1270,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1262,
                  "end": 1268,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1262,
                    "end": 1266,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1262,
                      "end": 1264,
                      "decorators": [],
                      "name": "o5",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1265,
                      "end": 1266,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1267,
                    "end": 1268,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1269,
                  "end": 1270,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1271,
                "end": 1272,
                "decorators": [],
                "name": "w",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1286,
            "end": 1298,
            "directive": null,
            "expression": {
              "type": "ChainExpression",
              "start": 1286,
              "end": 1297,
              "expression": {
                "type": "MemberExpression",
                "start": 1286,
                "end": 1297,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1286,
                  "end": 1294,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1286,
                    "end": 1292,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1286,
                      "end": 1290,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1286,
                        "end": 1288,
                        "decorators": [],
                        "name": "o5",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1289,
                        "end": 1290,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1291,
                      "end": 1292,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1293,
                    "end": 1294,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 1296,
                  "end": 1297,
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1311,
            "end": 1323,
            "directive": null,
            "expression": {
              "type": "ChainExpression",
              "start": 1311,
              "end": 1322,
              "expression": {
                "type": "MemberExpression",
                "start": 1311,
                "end": 1322,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1311,
                  "end": 1320,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1311,
                    "end": 1318,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1311,
                      "end": 1315,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1311,
                        "end": 1313,
                        "decorators": [],
                        "name": "o5",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1314,
                        "end": 1315,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 1317,
                      "end": 1318,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1319,
                    "end": 1320,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1321,
                  "end": 1322,
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1336,
            "end": 1349,
            "directive": null,
            "expression": {
              "type": "ChainExpression",
              "start": 1336,
              "end": 1348,
              "expression": {
                "type": "MemberExpression",
                "start": 1336,
                "end": 1348,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1336,
                  "end": 1345,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1336,
                    "end": 1343,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1336,
                      "end": 1340,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1336,
                        "end": 1338,
                        "decorators": [],
                        "name": "o5",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1339,
                        "end": 1340,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 1342,
                      "end": 1343,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1344,
                    "end": 1345,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 1347,
                  "end": 1348,
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "test": {
        "type": "ChainExpression",
        "start": 1206,
        "end": 1218,
        "expression": {
          "type": "MemberExpression",
          "start": 1206,
          "end": 1218,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1206,
            "end": 1215,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 1206,
              "end": 1213,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 1206,
                "end": 1210,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1206,
                  "end": 1208,
                  "decorators": [],
                  "name": "o5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1209,
                  "end": 1210,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": true,
              "property": {
                "type": "Identifier",
                "start": 1212,
                "end": 1213,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1214,
              "end": 1215,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 1217,
            "end": 1218,
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1453,
      "end": 1458,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 1453,
        "end": 1457,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1453,
          "end": 1455,
          "decorators": [],
          "name": "o5",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1456,
          "end": 1457,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1459,
      "end": 1467,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 1459,
        "end": 1466,
        "expression": {
          "type": "MemberExpression",
          "start": 1459,
          "end": 1466,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1459,
            "end": 1463,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1459,
              "end": 1461,
              "decorators": [],
              "name": "o5",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1462,
              "end": 1463,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 1465,
            "end": 1466,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1468,
      "end": 1478,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 1468,
        "end": 1477,
        "expression": {
          "type": "MemberExpression",
          "start": 1468,
          "end": 1477,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1468,
            "end": 1475,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 1468,
              "end": 1472,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1468,
                "end": 1470,
                "decorators": [],
                "name": "o5",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1471,
                "end": 1472,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 1474,
              "end": 1475,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1476,
            "end": 1477,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1479,
      "end": 1492,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 1479,
        "end": 1491,
        "expression": {
          "type": "MemberExpression",
          "start": 1479,
          "end": 1491,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1479,
            "end": 1488,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 1479,
              "end": 1486,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 1479,
                "end": 1483,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1479,
                  "end": 1481,
                  "decorators": [],
                  "name": "o5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1482,
                  "end": 1483,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": true,
              "property": {
                "type": "Identifier",
                "start": 1485,
                "end": 1486,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1487,
              "end": 1488,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 1490,
            "end": 1491,
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1493,
      "end": 1500,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 1493,
        "end": 1499,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 1493,
          "end": 1497,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1493,
            "end": 1495,
            "decorators": [],
            "name": "o5",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1496,
            "end": 1497,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1498,
          "end": 1499,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1501,
      "end": 1512,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 1501,
        "end": 1511,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 1501,
          "end": 1509,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1501,
            "end": 1507,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 1501,
              "end": 1505,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1501,
                "end": 1503,
                "decorators": [],
                "name": "o5",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1504,
                "end": 1505,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1506,
              "end": 1507,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1508,
            "end": 1509,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1510,
          "end": 1511,
          "decorators": [],
          "name": "w",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1514,
      "end": 1558,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1529,
        "end": 1558,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1535,
            "end": 1556,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1535,
              "end": 1536,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1538,
              "end": 1555,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 1540,
                "end": 1555,
                "asserts": false,
                "parameterName": {
                  "type": "TSThisType",
                  "start": 1540,
                  "end": 1544
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1548,
                  "end": 1555,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1548,
                    "end": 1555,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1548,
                      "end": 1555,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1524,
        "end": 1528,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1560,
      "end": 1609,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1591,
        "end": 1609,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1597,
            "end": 1607,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1597,
              "end": 1598,
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
              "start": 1598,
              "end": 1606,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1600,
                "end": 1606
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1586,
          "end": 1590,
          "expression": {
            "type": "Identifier",
            "start": 1586,
            "end": 1590,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1570,
        "end": 1577,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1611,
      "end": 1646,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1625,
          "end": 1645,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1625,
            "end": 1645,
            "decorators": [],
            "name": "o6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1627,
              "end": 1645,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1629,
                "end": 1645,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1629,
                    "end": 1633,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1629,
                      "end": 1633,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1636,
                    "end": 1645
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
      "type": "IfStatement",
      "start": 1647,
      "end": 1730,
      "alternate": {
        "type": "BlockStatement",
        "start": 1698,
        "end": 1730,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1704,
            "end": 1707,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 1704,
              "end": 1706,
              "decorators": [],
              "name": "o6",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1712,
            "end": 1718,
            "directive": null,
            "expression": {
              "type": "ChainExpression",
              "start": 1712,
              "end": 1717,
              "expression": {
                "type": "MemberExpression",
                "start": 1712,
                "end": 1717,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1712,
                  "end": 1714,
                  "decorators": [],
                  "name": "o6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 1716,
                  "end": 1717,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1723,
            "end": 1728,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 1723,
              "end": 1727,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1723,
                "end": 1725,
                "decorators": [],
                "name": "o6",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1726,
                "end": 1727,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1660,
        "end": 1692,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1666,
            "end": 1669,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 1666,
              "end": 1668,
              "decorators": [],
              "name": "o6",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1685,
            "end": 1690,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 1685,
              "end": 1689,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1685,
                "end": 1687,
                "decorators": [],
                "name": "o6",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1688,
                "end": 1689,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "ChainExpression",
        "start": 1651,
        "end": 1658,
        "expression": {
          "type": "CallExpression",
          "start": 1651,
          "end": 1658,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 1651,
            "end": 1656,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1651,
              "end": 1653,
              "decorators": [],
              "name": "o6",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 1655,
              "end": 1656,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 1731,
      "end": 1734,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 1731,
        "end": 1733,
        "decorators": [],
        "name": "o6",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1735,
      "end": 1741,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 1735,
        "end": 1740,
        "expression": {
          "type": "MemberExpression",
          "start": 1735,
          "end": 1740,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1735,
            "end": 1737,
            "decorators": [],
            "name": "o6",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 1739,
            "end": 1740,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1742,
      "end": 1747,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 1742,
        "end": 1746,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1742,
          "end": 1744,
          "decorators": [],
          "name": "o6",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1745,
          "end": 1746,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1760,
      "end": 1834,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1774,
          "end": 1833,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1774,
            "end": 1833,
            "decorators": [],
            "name": "isDefined",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1783,
              "end": 1833,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1785,
                "end": 1833,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1789,
                    "end": 1797,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1794,
                      "end": 1797,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1796,
                        "end": 1797,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1796,
                          "end": 1797,
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
                  "start": 1799,
                  "end": 1833,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 1802,
                    "end": 1833,
                    "asserts": true,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 1810,
                      "end": 1815,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1819,
                      "end": 1833,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1819,
                        "end": 1833,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1830,
                          "end": 1833,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1831,
                              "end": 1832,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1831,
                                "end": 1832,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1819,
                          "end": 1830,
                          "decorators": [],
                          "name": "NonNullable",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1785,
                  "end": 1788,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1786,
                      "end": 1787,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1786,
                        "end": 1787,
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
      "type": "VariableDeclaration",
      "start": 1835,
      "end": 1903,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1849,
          "end": 1902,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1849,
            "end": 1902,
            "decorators": [],
            "name": "isString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1857,
              "end": 1902,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1859,
                "end": 1902,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1860,
                    "end": 1874,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1865,
                      "end": 1874,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 1867,
                        "end": 1874
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1876,
                  "end": 1902,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 1879,
                    "end": 1902,
                    "asserts": true,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 1887,
                      "end": 1892,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1896,
                      "end": 1902,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1896,
                        "end": 1902
                      }
                    }
                  }
                },
                "typeParameters": null
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
      "type": "VariableDeclaration",
      "start": 1904,
      "end": 1991,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1918,
          "end": 1990,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1918,
            "end": 1990,
            "decorators": [],
            "name": "maybeIsString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1931,
              "end": 1990,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1933,
                "end": 1990,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1933,
                    "end": 1942
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 1946,
                    "end": 1989,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1947,
                        "end": 1961,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1952,
                          "end": 1961,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 1954,
                            "end": 1961
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1963,
                      "end": 1989,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 1966,
                        "end": 1989,
                        "asserts": true,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 1974,
                          "end": 1979,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1983,
                          "end": 1989,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1983,
                            "end": 1989
                          }
                        }
                      }
                    },
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
      "type": "VariableDeclaration",
      "start": 1992,
      "end": 2044,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2006,
          "end": 2043,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2006,
            "end": 2043,
            "decorators": [],
            "name": "maybeNever",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2016,
              "end": 2043,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2018,
                "end": 2043,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2018,
                    "end": 2027
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 2031,
                    "end": 2042,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2034,
                      "end": 2042,
                      "typeAnnotation": {
                        "type": "TSNeverKeyword",
                        "start": 2037,
                        "end": 2042
                      }
                    },
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
      "type": "FunctionDeclaration",
      "start": 2046,
      "end": 2351,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2071,
        "end": 2351,
        "body": [
          {
            "type": "IfStatement",
            "start": 2077,
            "end": 2130,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2089,
              "end": 2130,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2099,
                  "end": 2113,
                  "directive": null,
                  "expression": {
                    "type": "ChainExpression",
                    "start": 2099,
                    "end": 2112,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2099,
                      "end": 2112,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2110,
                          "end": 2111,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 2099,
                        "end": 2107,
                        "decorators": [],
                        "name": "isString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": true,
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2122,
                  "end": 2124,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2122,
                    "end": 2123,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 2081,
              "end": 2087,
              "argument": {
                "type": "UnaryExpression",
                "start": 2082,
                "end": 2087,
                "argument": {
                  "type": "Literal",
                  "start": 2083,
                  "end": 2087,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "IfStatement",
            "start": 2135,
            "end": 2193,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2147,
              "end": 2193,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2157,
                  "end": 2176,
                  "directive": null,
                  "expression": {
                    "type": "ChainExpression",
                    "start": 2157,
                    "end": 2175,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2157,
                      "end": 2175,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2173,
                          "end": 2174,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 2157,
                        "end": 2170,
                        "decorators": [],
                        "name": "maybeIsString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": true,
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2185,
                  "end": 2187,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2185,
                    "end": 2186,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 2139,
              "end": 2145,
              "argument": {
                "type": "UnaryExpression",
                "start": 2140,
                "end": 2145,
                "argument": {
                  "type": "Literal",
                  "start": 2141,
                  "end": 2145,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "IfStatement",
            "start": 2198,
            "end": 2290,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2210,
              "end": 2290,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2220,
                  "end": 2245,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2220,
                    "end": 2244,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2230,
                        "end": 2243,
                        "decorators": [],
                        "name": "maybeIsString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 2220,
                      "end": 2229,
                      "decorators": [],
                      "name": "isDefined",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2254,
                  "end": 2273,
                  "directive": null,
                  "expression": {
                    "type": "ChainExpression",
                    "start": 2254,
                    "end": 2272,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2254,
                      "end": 2272,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2270,
                          "end": 2271,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 2254,
                        "end": 2267,
                        "decorators": [],
                        "name": "maybeIsString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": true,
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2282,
                  "end": 2284,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2282,
                    "end": 2283,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 2202,
              "end": 2208,
              "argument": {
                "type": "UnaryExpression",
                "start": 2203,
                "end": 2208,
                "argument": {
                  "type": "Literal",
                  "start": 2204,
                  "end": 2208,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "IfStatement",
            "start": 2295,
            "end": 2349,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2307,
              "end": 2349,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2317,
                  "end": 2332,
                  "directive": null,
                  "expression": {
                    "type": "ChainExpression",
                    "start": 2317,
                    "end": 2331,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2317,
                      "end": 2331,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 2317,
                        "end": 2327,
                        "decorators": [],
                        "name": "maybeNever",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": true,
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2341,
                  "end": 2343,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2341,
                    "end": 2342,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 2299,
              "end": 2305,
              "argument": {
                "type": "UnaryExpression",
                "start": 2300,
                "end": 2305,
                "argument": {
                  "type": "Literal",
                  "start": 2301,
                  "end": 2305,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2055,
        "end": 2058,
        "decorators": [],
        "name": "f01",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2059,
          "end": 2069,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2060,
            "end": 2069,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 2062,
              "end": 2069
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2353,
      "end": 2419,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2358,
        "end": 2363,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2366,
        "end": 2418,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2368,
            "end": 2389,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2368,
              "end": 2371,
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
              "start": 2371,
              "end": 2388,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2373,
                "end": 2388,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2373,
                    "end": 2379
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2382,
                    "end": 2388
                  }
                ]
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 2390,
            "end": 2404,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2390,
              "end": 2393,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2395,
              "end": 2403,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2397,
                "end": 2403
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 2405,
            "end": 2416,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2405,
              "end": 2408,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2408,
              "end": 2416,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 2410,
                "end": 2416
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2421,
      "end": 2783,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2471,
        "end": 2783,
        "body": [
          {
            "type": "IfStatement",
            "start": 2477,
            "end": 2521,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2499,
              "end": 2521,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2509,
                  "end": 2515,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2509,
                    "end": 2514,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2509,
                      "end": 2510,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2511,
                      "end": 2514,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2481,
              "end": 2497,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 2481,
                "end": 2487,
                "expression": {
                  "type": "MemberExpression",
                  "start": 2481,
                  "end": 2487,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2481,
                    "end": 2482,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 2484,
                    "end": 2487,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 2492,
                "end": 2497,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2526,
            "end": 2577,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2552,
              "end": 2577,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2562,
                  "end": 2571,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2562,
                    "end": 2570,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 2562,
                      "end": 2563,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 2564,
                      "end": 2569,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2530,
              "end": 2550,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 2530,
                "end": 2540,
                "expression": {
                  "type": "MemberExpression",
                  "start": 2530,
                  "end": 2540,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 2530,
                    "end": 2531,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Literal",
                    "start": 2534,
                    "end": 2539,
                    "raw": "\"foo\"",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 2545,
                "end": 2550,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2582,
            "end": 2628,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2606,
              "end": 2628,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2616,
                  "end": 2622,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2616,
                    "end": 2621,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2616,
                      "end": 2617,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2618,
                      "end": 2621,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2586,
              "end": 2604,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 2586,
                "end": 2594,
                "expression": {
                  "type": "CallExpression",
                  "start": 2586,
                  "end": 2594,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2586,
                    "end": 2592,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2586,
                      "end": 2587,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 2589,
                      "end": 2592,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 2599,
                "end": 2604,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2633,
            "end": 2676,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2654,
              "end": 2676,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2664,
                  "end": 2670,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2664,
                    "end": 2669,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2664,
                      "end": 2665,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2666,
                      "end": 2669,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2637,
              "end": 2652,
              "operator": "==",
              "left": {
                "type": "ChainExpression",
                "start": 2637,
                "end": 2643,
                "expression": {
                  "type": "MemberExpression",
                  "start": 2637,
                  "end": 2643,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2637,
                    "end": 2638,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 2640,
                    "end": 2643,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 2647,
                "end": 2652,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2681,
            "end": 2731,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2706,
              "end": 2731,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2716,
                  "end": 2725,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2716,
                    "end": 2724,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 2716,
                      "end": 2717,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 2718,
                      "end": 2723,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2685,
              "end": 2704,
              "operator": "==",
              "left": {
                "type": "ChainExpression",
                "start": 2685,
                "end": 2695,
                "expression": {
                  "type": "MemberExpression",
                  "start": 2685,
                  "end": 2695,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 2685,
                    "end": 2686,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Literal",
                    "start": 2689,
                    "end": 2694,
                    "raw": "\"foo\"",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 2699,
                "end": 2704,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2736,
            "end": 2781,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2759,
              "end": 2781,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2769,
                  "end": 2775,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2769,
                    "end": 2774,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2769,
                      "end": 2770,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2771,
                      "end": 2774,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2740,
              "end": 2757,
              "operator": "==",
              "left": {
                "type": "ChainExpression",
                "start": 2740,
                "end": 2748,
                "expression": {
                  "type": "CallExpression",
                  "start": 2740,
                  "end": 2748,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2740,
                    "end": 2746,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2740,
                      "end": 2741,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 2743,
                      "end": 2746,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 2752,
                "end": 2757,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2430,
        "end": 2433,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2434,
          "end": 2454,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2435,
            "end": 2454,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2437,
              "end": 2454,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 2437,
                  "end": 2442,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2437,
                    "end": 2442,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 2445,
                  "end": 2454
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2456,
          "end": 2469,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2461,
            "end": 2469,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2463,
              "end": 2469
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2785,
      "end": 3142,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2830,
        "end": 3142,
        "body": [
          {
            "type": "IfStatement",
            "start": 2836,
            "end": 2880,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2858,
              "end": 2880,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2868,
                  "end": 2874,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2868,
                    "end": 2873,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2868,
                      "end": 2869,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2870,
                      "end": 2873,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2840,
              "end": 2856,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 2840,
                "end": 2846,
                "expression": {
                  "type": "MemberExpression",
                  "start": 2840,
                  "end": 2846,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2840,
                    "end": 2841,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 2843,
                    "end": 2846,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 2851,
                "end": 2856,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2885,
            "end": 2936,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2911,
              "end": 2936,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2921,
                  "end": 2930,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2921,
                    "end": 2929,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 2921,
                      "end": 2922,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 2923,
                      "end": 2928,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2889,
              "end": 2909,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 2889,
                "end": 2899,
                "expression": {
                  "type": "MemberExpression",
                  "start": 2889,
                  "end": 2899,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 2889,
                    "end": 2890,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Literal",
                    "start": 2893,
                    "end": 2898,
                    "raw": "\"foo\"",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 2904,
                "end": 2909,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2941,
            "end": 2987,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2965,
              "end": 2987,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2975,
                  "end": 2981,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2975,
                    "end": 2980,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2975,
                      "end": 2976,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2977,
                      "end": 2980,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2945,
              "end": 2963,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 2945,
                "end": 2953,
                "expression": {
                  "type": "CallExpression",
                  "start": 2945,
                  "end": 2953,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2945,
                    "end": 2951,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2945,
                      "end": 2946,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 2948,
                      "end": 2951,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 2958,
                "end": 2963,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2992,
            "end": 3035,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3013,
              "end": 3035,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3023,
                  "end": 3029,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3023,
                    "end": 3028,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3023,
                      "end": 3024,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3025,
                      "end": 3028,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2996,
              "end": 3011,
              "operator": "==",
              "left": {
                "type": "ChainExpression",
                "start": 2996,
                "end": 3002,
                "expression": {
                  "type": "MemberExpression",
                  "start": 2996,
                  "end": 3002,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2996,
                    "end": 2997,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 2999,
                    "end": 3002,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 3006,
                "end": 3011,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3040,
            "end": 3090,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3065,
              "end": 3090,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3075,
                  "end": 3084,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3075,
                    "end": 3083,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 3075,
                      "end": 3076,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 3077,
                      "end": 3082,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3044,
              "end": 3063,
              "operator": "==",
              "left": {
                "type": "ChainExpression",
                "start": 3044,
                "end": 3054,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3044,
                  "end": 3054,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 3044,
                    "end": 3045,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Literal",
                    "start": 3048,
                    "end": 3053,
                    "raw": "\"foo\"",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 3058,
                "end": 3063,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3095,
            "end": 3140,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3118,
              "end": 3140,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3128,
                  "end": 3134,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3128,
                    "end": 3133,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3128,
                      "end": 3129,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3130,
                      "end": 3133,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3099,
              "end": 3116,
              "operator": "==",
              "left": {
                "type": "ChainExpression",
                "start": 3099,
                "end": 3107,
                "expression": {
                  "type": "CallExpression",
                  "start": 3099,
                  "end": 3107,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3099,
                    "end": 3105,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3099,
                      "end": 3100,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 3102,
                      "end": 3105,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 3111,
                "end": 3116,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2794,
        "end": 2797,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2798,
          "end": 2813,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2799,
            "end": 2813,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2801,
              "end": 2813,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 2801,
                  "end": 2806,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2801,
                    "end": 2806,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 2809,
                  "end": 2813
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2815,
          "end": 2828,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2820,
            "end": 2828,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2822,
              "end": 2828
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3144,
      "end": 3578,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3206,
        "end": 3578,
        "body": [
          {
            "type": "IfStatement",
            "start": 3212,
            "end": 3266,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3234,
              "end": 3266,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3244,
                  "end": 3250,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3244,
                    "end": 3249,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3244,
                      "end": 3245,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3246,
                      "end": 3249,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3216,
              "end": 3232,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 3216,
                "end": 3222,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3216,
                  "end": 3222,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 3216,
                    "end": 3217,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 3219,
                    "end": 3222,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 3227,
                "end": 3232,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3271,
            "end": 3332,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3297,
              "end": 3332,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3307,
                  "end": 3316,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3307,
                    "end": 3315,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 3307,
                      "end": 3308,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 3309,
                      "end": 3314,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3275,
              "end": 3295,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 3275,
                "end": 3285,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3275,
                  "end": 3285,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 3275,
                    "end": 3276,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Literal",
                    "start": 3279,
                    "end": 3284,
                    "raw": "\"foo\"",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 3290,
                "end": 3295,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3337,
            "end": 3393,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3361,
              "end": 3393,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3371,
                  "end": 3377,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3371,
                    "end": 3376,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3371,
                      "end": 3372,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3373,
                      "end": 3376,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3341,
              "end": 3359,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 3341,
                "end": 3349,
                "expression": {
                  "type": "CallExpression",
                  "start": 3341,
                  "end": 3349,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3341,
                    "end": 3347,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3341,
                      "end": 3342,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 3344,
                      "end": 3347,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 3354,
                "end": 3359,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3398,
            "end": 3451,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3419,
              "end": 3451,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3429,
                  "end": 3435,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3429,
                    "end": 3434,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3429,
                      "end": 3430,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3431,
                      "end": 3434,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3402,
              "end": 3417,
              "operator": "==",
              "left": {
                "type": "ChainExpression",
                "start": 3402,
                "end": 3408,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3402,
                  "end": 3408,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 3402,
                    "end": 3403,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 3405,
                    "end": 3408,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 3412,
                "end": 3417,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3456,
            "end": 3516,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3481,
              "end": 3516,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3491,
                  "end": 3500,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3491,
                    "end": 3499,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 3491,
                      "end": 3492,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 3493,
                      "end": 3498,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3460,
              "end": 3479,
              "operator": "==",
              "left": {
                "type": "ChainExpression",
                "start": 3460,
                "end": 3470,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3460,
                  "end": 3470,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 3460,
                    "end": 3461,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Literal",
                    "start": 3464,
                    "end": 3469,
                    "raw": "\"foo\"",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 3474,
                "end": 3479,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3521,
            "end": 3576,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3544,
              "end": 3576,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3554,
                  "end": 3560,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3554,
                    "end": 3559,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3554,
                      "end": 3555,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3556,
                      "end": 3559,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3525,
              "end": 3542,
              "operator": "==",
              "left": {
                "type": "ChainExpression",
                "start": 3525,
                "end": 3533,
                "expression": {
                  "type": "CallExpression",
                  "start": 3525,
                  "end": 3533,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3525,
                    "end": 3531,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3525,
                      "end": 3526,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 3528,
                      "end": 3531,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 3537,
                "end": 3542,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3153,
        "end": 3156,
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3157,
          "end": 3177,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3158,
            "end": 3177,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3160,
              "end": 3177,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3160,
                  "end": 3165,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3160,
                    "end": 3165,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3168,
                  "end": 3177
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3179,
          "end": 3204,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3184,
            "end": 3204,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3186,
              "end": 3204,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 3186,
                  "end": 3192
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3195,
                  "end": 3204
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3580,
      "end": 3980,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3638,
        "end": 3980,
        "body": [
          {
            "type": "IfStatement",
            "start": 3644,
            "end": 3688,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3666,
              "end": 3688,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3676,
                  "end": 3682,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3676,
                    "end": 3681,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3676,
                      "end": 3677,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3678,
                      "end": 3681,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3648,
              "end": 3664,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 3648,
                "end": 3654,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3648,
                  "end": 3654,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 3648,
                    "end": 3649,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 3651,
                    "end": 3654,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 3659,
                "end": 3664,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3693,
            "end": 3744,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3719,
              "end": 3744,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3729,
                  "end": 3738,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3729,
                    "end": 3737,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 3729,
                      "end": 3730,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 3731,
                      "end": 3736,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3697,
              "end": 3717,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 3697,
                "end": 3707,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3697,
                  "end": 3707,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 3697,
                    "end": 3698,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Literal",
                    "start": 3701,
                    "end": 3706,
                    "raw": "\"foo\"",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 3712,
                "end": 3717,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3749,
            "end": 3795,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3773,
              "end": 3795,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3783,
                  "end": 3789,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3783,
                    "end": 3788,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3783,
                      "end": 3784,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3785,
                      "end": 3788,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3753,
              "end": 3771,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 3753,
                "end": 3761,
                "expression": {
                  "type": "CallExpression",
                  "start": 3753,
                  "end": 3761,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3753,
                    "end": 3759,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3753,
                      "end": 3754,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 3756,
                      "end": 3759,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 3766,
                "end": 3771,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3800,
            "end": 3853,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3821,
              "end": 3853,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3831,
                  "end": 3837,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3831,
                    "end": 3836,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3831,
                      "end": 3832,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3833,
                      "end": 3836,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3804,
              "end": 3819,
              "operator": "==",
              "left": {
                "type": "ChainExpression",
                "start": 3804,
                "end": 3810,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3804,
                  "end": 3810,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 3804,
                    "end": 3805,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 3807,
                    "end": 3810,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 3814,
                "end": 3819,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3858,
            "end": 3918,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3883,
              "end": 3918,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3893,
                  "end": 3902,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3893,
                    "end": 3901,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 3893,
                      "end": 3894,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 3895,
                      "end": 3900,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3862,
              "end": 3881,
              "operator": "==",
              "left": {
                "type": "ChainExpression",
                "start": 3862,
                "end": 3872,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3862,
                  "end": 3872,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 3862,
                    "end": 3863,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Literal",
                    "start": 3866,
                    "end": 3871,
                    "raw": "\"foo\"",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 3876,
                "end": 3881,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3923,
            "end": 3978,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3946,
              "end": 3978,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3956,
                  "end": 3962,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3956,
                    "end": 3961,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3956,
                      "end": 3957,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3958,
                      "end": 3961,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3927,
              "end": 3944,
              "operator": "==",
              "left": {
                "type": "ChainExpression",
                "start": 3927,
                "end": 3935,
                "expression": {
                  "type": "CallExpression",
                  "start": 3927,
                  "end": 3935,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3927,
                    "end": 3933,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3927,
                      "end": 3928,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 3930,
                      "end": 3933,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 3939,
                "end": 3944,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3589,
        "end": 3593,
        "decorators": [],
        "name": "f12a",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3594,
          "end": 3614,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3595,
            "end": 3614,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3597,
              "end": 3614,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3597,
                  "end": 3602,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3597,
                    "end": 3602,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3605,
                  "end": 3614
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3616,
          "end": 3636,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3621,
            "end": 3636,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3623,
              "end": 3636,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 3623,
                  "end": 3629
                },
                {
                  "type": "TSNullKeyword",
                  "start": 3632,
                  "end": 3636
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3982,
      "end": 4353,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4017,
        "end": 4353,
        "body": [
          {
            "type": "IfStatement",
            "start": 4023,
            "end": 4071,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4049,
              "end": 4071,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4059,
                  "end": 4065,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4059,
                    "end": 4064,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4059,
                      "end": 4060,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4061,
                      "end": 4064,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4027,
              "end": 4047,
              "operator": "!==",
              "left": {
                "type": "ChainExpression",
                "start": 4027,
                "end": 4033,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4027,
                  "end": 4033,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 4027,
                    "end": 4028,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 4030,
                    "end": 4033,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 4038,
                "end": 4047,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 4076,
            "end": 4131,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4106,
              "end": 4131,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4116,
                  "end": 4125,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4116,
                    "end": 4124,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 4116,
                      "end": 4117,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 4118,
                      "end": 4123,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4080,
              "end": 4104,
              "operator": "!==",
              "left": {
                "type": "ChainExpression",
                "start": 4080,
                "end": 4090,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4080,
                  "end": 4090,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 4080,
                    "end": 4081,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Literal",
                    "start": 4084,
                    "end": 4089,
                    "raw": "\"foo\"",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 4095,
                "end": 4104,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 4136,
            "end": 4186,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4164,
              "end": 4186,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4174,
                  "end": 4180,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4174,
                    "end": 4179,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4174,
                      "end": 4175,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4176,
                      "end": 4179,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4140,
              "end": 4162,
              "operator": "!==",
              "left": {
                "type": "ChainExpression",
                "start": 4140,
                "end": 4148,
                "expression": {
                  "type": "CallExpression",
                  "start": 4140,
                  "end": 4148,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4140,
                    "end": 4146,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4140,
                      "end": 4141,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 4143,
                      "end": 4146,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 4153,
                "end": 4162,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 4191,
            "end": 4238,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4216,
              "end": 4238,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4226,
                  "end": 4232,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4226,
                    "end": 4231,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4226,
                      "end": 4227,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4228,
                      "end": 4231,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4195,
              "end": 4214,
              "operator": "!=",
              "left": {
                "type": "ChainExpression",
                "start": 4195,
                "end": 4201,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4195,
                  "end": 4201,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 4195,
                    "end": 4196,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 4198,
                    "end": 4201,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 4205,
                "end": 4214,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 4243,
            "end": 4297,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4272,
              "end": 4297,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4282,
                  "end": 4291,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4282,
                    "end": 4290,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 4282,
                      "end": 4283,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 4284,
                      "end": 4289,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4247,
              "end": 4270,
              "operator": "!=",
              "left": {
                "type": "ChainExpression",
                "start": 4247,
                "end": 4257,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4247,
                  "end": 4257,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 4247,
                    "end": 4248,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Literal",
                    "start": 4251,
                    "end": 4256,
                    "raw": "\"foo\"",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 4261,
                "end": 4270,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 4302,
            "end": 4351,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4329,
              "end": 4351,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4339,
                  "end": 4345,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4339,
                    "end": 4344,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4339,
                      "end": 4340,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4341,
                      "end": 4344,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4306,
              "end": 4327,
              "operator": "!=",
              "left": {
                "type": "ChainExpression",
                "start": 4306,
                "end": 4314,
                "expression": {
                  "type": "CallExpression",
                  "start": 4306,
                  "end": 4314,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4306,
                    "end": 4312,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4306,
                      "end": 4307,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 4309,
                      "end": 4312,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 4318,
                "end": 4327,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3991,
        "end": 3994,
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3995,
          "end": 4015,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3996,
            "end": 4015,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3998,
              "end": 4015,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3998,
                  "end": 4003,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3998,
                    "end": 4003,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 4006,
                  "end": 4015
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4355,
      "end": 4727,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4391,
        "end": 4727,
        "body": [
          {
            "type": "IfStatement",
            "start": 4397,
            "end": 4450,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4418,
              "end": 4450,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4428,
                  "end": 4434,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4428,
                    "end": 4433,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4428,
                      "end": 4429,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4430,
                      "end": 4433,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4401,
              "end": 4416,
              "operator": "!==",
              "left": {
                "type": "ChainExpression",
                "start": 4401,
                "end": 4407,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4401,
                  "end": 4407,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 4401,
                    "end": 4402,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 4404,
                    "end": 4407,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Literal",
                "start": 4412,
                "end": 4416,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 4455,
            "end": 4515,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4480,
              "end": 4515,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4490,
                  "end": 4499,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4490,
                    "end": 4498,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 4490,
                      "end": 4491,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 4492,
                      "end": 4497,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4459,
              "end": 4478,
              "operator": "!==",
              "left": {
                "type": "ChainExpression",
                "start": 4459,
                "end": 4469,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4459,
                  "end": 4469,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 4459,
                    "end": 4460,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Literal",
                    "start": 4463,
                    "end": 4468,
                    "raw": "\"foo\"",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "right": {
                "type": "Literal",
                "start": 4474,
                "end": 4478,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 4520,
            "end": 4575,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4543,
              "end": 4575,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4553,
                  "end": 4559,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4553,
                    "end": 4558,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4553,
                      "end": 4554,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4555,
                      "end": 4558,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4524,
              "end": 4541,
              "operator": "!==",
              "left": {
                "type": "ChainExpression",
                "start": 4524,
                "end": 4532,
                "expression": {
                  "type": "CallExpression",
                  "start": 4524,
                  "end": 4532,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4524,
                    "end": 4530,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4524,
                      "end": 4525,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 4527,
                      "end": 4530,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 4537,
                "end": 4541,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 4580,
            "end": 4622,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4600,
              "end": 4622,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4610,
                  "end": 4616,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4610,
                    "end": 4615,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4610,
                      "end": 4611,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4612,
                      "end": 4615,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4584,
              "end": 4598,
              "operator": "!=",
              "left": {
                "type": "ChainExpression",
                "start": 4584,
                "end": 4590,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4584,
                  "end": 4590,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 4584,
                    "end": 4585,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 4587,
                    "end": 4590,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Literal",
                "start": 4594,
                "end": 4598,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 4627,
            "end": 4676,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4651,
              "end": 4676,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4661,
                  "end": 4670,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4661,
                    "end": 4669,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 4661,
                      "end": 4662,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 4663,
                      "end": 4668,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4631,
              "end": 4649,
              "operator": "!=",
              "left": {
                "type": "ChainExpression",
                "start": 4631,
                "end": 4641,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4631,
                  "end": 4641,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 4631,
                    "end": 4632,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Literal",
                    "start": 4635,
                    "end": 4640,
                    "raw": "\"foo\"",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "right": {
                "type": "Literal",
                "start": 4645,
                "end": 4649,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 4681,
            "end": 4725,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4703,
              "end": 4725,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4713,
                  "end": 4719,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4713,
                    "end": 4718,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4713,
                      "end": 4714,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4715,
                      "end": 4718,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4685,
              "end": 4701,
              "operator": "!=",
              "left": {
                "type": "ChainExpression",
                "start": 4685,
                "end": 4693,
                "expression": {
                  "type": "CallExpression",
                  "start": 4685,
                  "end": 4693,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4685,
                    "end": 4691,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4685,
                      "end": 4686,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 4688,
                      "end": 4691,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 4697,
                "end": 4701,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4364,
        "end": 4368,
        "decorators": [],
        "name": "f13a",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4369,
          "end": 4389,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4370,
            "end": 4389,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4372,
              "end": 4389,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 4372,
                  "end": 4377,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4372,
                    "end": 4377,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 4380,
                  "end": 4389
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4729,
      "end": 4930,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4759,
        "end": 4930,
        "body": [
          {
            "type": "IfStatement",
            "start": 4765,
            "end": 4813,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4791,
              "end": 4813,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4801,
                  "end": 4807,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4801,
                    "end": 4806,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4801,
                      "end": 4802,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4803,
                      "end": 4806,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4769,
              "end": 4789,
              "operator": "!==",
              "left": {
                "type": "ChainExpression",
                "start": 4769,
                "end": 4775,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4769,
                  "end": 4775,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 4769,
                    "end": 4770,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 4772,
                    "end": 4775,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 4780,
                "end": 4789,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 4818,
            "end": 4873,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4848,
              "end": 4873,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4858,
                  "end": 4867,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4858,
                    "end": 4866,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 4858,
                      "end": 4859,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 4860,
                      "end": 4865,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4822,
              "end": 4846,
              "operator": "!==",
              "left": {
                "type": "ChainExpression",
                "start": 4822,
                "end": 4832,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4822,
                  "end": 4832,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 4822,
                    "end": 4823,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Literal",
                    "start": 4826,
                    "end": 4831,
                    "raw": "\"foo\"",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 4837,
                "end": 4846,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 4878,
            "end": 4928,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4906,
              "end": 4928,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4916,
                  "end": 4922,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4916,
                    "end": 4921,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4916,
                      "end": 4917,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4918,
                      "end": 4921,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4882,
              "end": 4904,
              "operator": "!==",
              "left": {
                "type": "ChainExpression",
                "start": 4882,
                "end": 4890,
                "expression": {
                  "type": "CallExpression",
                  "start": 4882,
                  "end": 4890,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4882,
                    "end": 4888,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4882,
                      "end": 4883,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 4885,
                      "end": 4888,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 4895,
                "end": 4904,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4738,
        "end": 4741,
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4742,
          "end": 4757,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4743,
            "end": 4757,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4745,
              "end": 4757,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 4745,
                  "end": 4750,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4745,
                    "end": 4750,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 4753,
                  "end": 4757
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4932,
      "end": 5347,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4982,
        "end": 5347,
        "body": [
          {
            "type": "IfStatement",
            "start": 4988,
            "end": 5074,
            "alternate": {
              "type": "BlockStatement",
              "start": 5042,
              "end": 5074,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5052,
                  "end": 5058,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5052,
                    "end": 5057,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5052,
                      "end": 5053,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5054,
                      "end": 5057,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5010,
              "end": 5032,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5020,
                  "end": 5026,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5020,
                    "end": 5025,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5020,
                      "end": 5021,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5022,
                      "end": 5025,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4992,
              "end": 5008,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 4992,
                "end": 4998,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4992,
                  "end": 4998,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 4992,
                    "end": 4993,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 4995,
                    "end": 4998,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 5003,
                "end": 5008,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 5079,
            "end": 5165,
            "alternate": {
              "type": "BlockStatement",
              "start": 5143,
              "end": 5165,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5153,
                  "end": 5159,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5153,
                    "end": 5158,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5153,
                      "end": 5154,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5155,
                      "end": 5158,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5101,
              "end": 5133,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5111,
                  "end": 5117,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5111,
                    "end": 5116,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5111,
                      "end": 5112,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5113,
                      "end": 5116,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 5083,
              "end": 5099,
              "operator": "!==",
              "left": {
                "type": "ChainExpression",
                "start": 5083,
                "end": 5089,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5083,
                  "end": 5089,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 5083,
                    "end": 5084,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 5086,
                    "end": 5089,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 5094,
                "end": 5099,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 5170,
            "end": 5255,
            "alternate": {
              "type": "BlockStatement",
              "start": 5223,
              "end": 5255,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5233,
                  "end": 5239,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5233,
                    "end": 5238,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5233,
                      "end": 5234,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5235,
                      "end": 5238,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5191,
              "end": 5213,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5201,
                  "end": 5207,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5201,
                    "end": 5206,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5201,
                      "end": 5202,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5203,
                      "end": 5206,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 5174,
              "end": 5189,
              "operator": "==",
              "left": {
                "type": "ChainExpression",
                "start": 5174,
                "end": 5180,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5174,
                  "end": 5180,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 5174,
                    "end": 5175,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 5177,
                    "end": 5180,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 5184,
                "end": 5189,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 5260,
            "end": 5345,
            "alternate": {
              "type": "BlockStatement",
              "start": 5323,
              "end": 5345,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5333,
                  "end": 5339,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5333,
                    "end": 5338,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5333,
                      "end": 5334,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5335,
                      "end": 5338,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5281,
              "end": 5313,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5291,
                  "end": 5297,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5291,
                    "end": 5296,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5291,
                      "end": 5292,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5293,
                      "end": 5296,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 5264,
              "end": 5279,
              "operator": "!=",
              "left": {
                "type": "ChainExpression",
                "start": 5264,
                "end": 5270,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5264,
                  "end": 5270,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 5264,
                    "end": 5265,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 5267,
                    "end": 5270,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 5274,
                "end": 5279,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4941,
        "end": 4944,
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4945,
          "end": 4965,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4946,
            "end": 4965,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4948,
              "end": 4965,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 4948,
                  "end": 4953,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4948,
                    "end": 4953,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 4956,
                  "end": 4965
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4967,
          "end": 4980,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4972,
            "end": 4980,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 4974,
              "end": 4980
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5349,
      "end": 5806,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5401,
        "end": 5806,
        "body": [
          {
            "type": "IfStatement",
            "start": 5407,
            "end": 5503,
            "alternate": {
              "type": "BlockStatement",
              "start": 5471,
              "end": 5503,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5481,
                  "end": 5487,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5481,
                    "end": 5486,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5481,
                      "end": 5482,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5483,
                      "end": 5486,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5429,
              "end": 5461,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5439,
                  "end": 5445,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5439,
                    "end": 5444,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5439,
                      "end": 5440,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5441,
                      "end": 5444,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 5411,
              "end": 5427,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 5411,
                "end": 5417,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5411,
                  "end": 5417,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 5411,
                    "end": 5412,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 5414,
                    "end": 5417,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 5422,
                "end": 5427,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 5508,
            "end": 5604,
            "alternate": {
              "type": "BlockStatement",
              "start": 5572,
              "end": 5604,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5582,
                  "end": 5588,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5582,
                    "end": 5587,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5582,
                      "end": 5583,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5584,
                      "end": 5587,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5530,
              "end": 5562,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5540,
                  "end": 5546,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5540,
                    "end": 5545,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5540,
                      "end": 5541,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5542,
                      "end": 5545,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 5512,
              "end": 5528,
              "operator": "!==",
              "left": {
                "type": "ChainExpression",
                "start": 5512,
                "end": 5518,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5512,
                  "end": 5518,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 5512,
                    "end": 5513,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 5515,
                    "end": 5518,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 5523,
                "end": 5528,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 5609,
            "end": 5704,
            "alternate": {
              "type": "BlockStatement",
              "start": 5672,
              "end": 5704,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5682,
                  "end": 5688,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5682,
                    "end": 5687,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5682,
                      "end": 5683,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5684,
                      "end": 5687,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5630,
              "end": 5662,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5640,
                  "end": 5646,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5640,
                    "end": 5645,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5640,
                      "end": 5641,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5642,
                      "end": 5645,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 5613,
              "end": 5628,
              "operator": "==",
              "left": {
                "type": "ChainExpression",
                "start": 5613,
                "end": 5619,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5613,
                  "end": 5619,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 5613,
                    "end": 5614,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 5616,
                    "end": 5619,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 5623,
                "end": 5628,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 5709,
            "end": 5804,
            "alternate": {
              "type": "BlockStatement",
              "start": 5772,
              "end": 5804,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5782,
                  "end": 5788,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5782,
                    "end": 5787,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5782,
                      "end": 5783,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5784,
                      "end": 5787,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5730,
              "end": 5762,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5740,
                  "end": 5746,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5740,
                    "end": 5745,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5740,
                      "end": 5741,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5742,
                      "end": 5745,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 5713,
              "end": 5728,
              "operator": "!=",
              "left": {
                "type": "ChainExpression",
                "start": 5713,
                "end": 5719,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5713,
                  "end": 5719,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 5713,
                    "end": 5714,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 5716,
                    "end": 5719,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 5723,
                "end": 5728,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5358,
        "end": 5362,
        "decorators": [],
        "name": "f15a",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5363,
          "end": 5383,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5364,
            "end": 5383,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 5366,
              "end": 5383,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 5366,
                  "end": 5371,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5366,
                    "end": 5371,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 5374,
                  "end": 5383
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 5385,
          "end": 5399,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5390,
            "end": 5399,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5392,
              "end": 5399
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5808,
      "end": 6224,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5843,
        "end": 6224,
        "body": [
          {
            "type": "IfStatement",
            "start": 5849,
            "end": 5939,
            "alternate": {
              "type": "BlockStatement",
              "start": 5917,
              "end": 5939,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5927,
                  "end": 5933,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5927,
                    "end": 5932,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5927,
                      "end": 5928,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5929,
                      "end": 5932,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5875,
              "end": 5907,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5885,
                  "end": 5891,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5885,
                    "end": 5890,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5885,
                      "end": 5886,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5887,
                      "end": 5890,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 5853,
              "end": 5873,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 5853,
                "end": 5859,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5853,
                  "end": 5859,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 5853,
                    "end": 5854,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 5856,
                    "end": 5859,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 5864,
                "end": 5873,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 5944,
            "end": 6034,
            "alternate": {
              "type": "BlockStatement",
              "start": 6002,
              "end": 6034,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6012,
                  "end": 6018,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6012,
                    "end": 6017,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6012,
                      "end": 6013,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6014,
                      "end": 6017,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5970,
              "end": 5992,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5980,
                  "end": 5986,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5980,
                    "end": 5985,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5980,
                      "end": 5981,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5982,
                      "end": 5985,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 5948,
              "end": 5968,
              "operator": "!==",
              "left": {
                "type": "ChainExpression",
                "start": 5948,
                "end": 5954,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5948,
                  "end": 5954,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 5948,
                    "end": 5949,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 5951,
                    "end": 5954,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 5959,
                "end": 5968,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 6039,
            "end": 6128,
            "alternate": {
              "type": "BlockStatement",
              "start": 6106,
              "end": 6128,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6116,
                  "end": 6122,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6116,
                    "end": 6121,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6116,
                      "end": 6117,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6118,
                      "end": 6121,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6064,
              "end": 6096,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6074,
                  "end": 6080,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6074,
                    "end": 6079,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6074,
                      "end": 6075,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6076,
                      "end": 6079,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 6043,
              "end": 6062,
              "operator": "==",
              "left": {
                "type": "ChainExpression",
                "start": 6043,
                "end": 6049,
                "expression": {
                  "type": "MemberExpression",
                  "start": 6043,
                  "end": 6049,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6043,
                    "end": 6044,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 6046,
                    "end": 6049,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 6053,
                "end": 6062,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 6133,
            "end": 6222,
            "alternate": {
              "type": "BlockStatement",
              "start": 6190,
              "end": 6222,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6200,
                  "end": 6206,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6200,
                    "end": 6205,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6200,
                      "end": 6201,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6202,
                      "end": 6205,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6158,
              "end": 6180,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6168,
                  "end": 6174,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6168,
                    "end": 6173,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6168,
                      "end": 6169,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6170,
                      "end": 6173,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 6137,
              "end": 6156,
              "operator": "!=",
              "left": {
                "type": "ChainExpression",
                "start": 6137,
                "end": 6143,
                "expression": {
                  "type": "MemberExpression",
                  "start": 6137,
                  "end": 6143,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6137,
                    "end": 6138,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 6140,
                    "end": 6143,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 6147,
                "end": 6156,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5817,
        "end": 5820,
        "decorators": [],
        "name": "f16",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5821,
          "end": 5841,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5822,
            "end": 5841,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 5824,
              "end": 5841,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 5824,
                  "end": 5829,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5824,
                    "end": 5829,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 5832,
                  "end": 5841
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 6226,
      "end": 6506,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 6261,
        "end": 6506,
        "body": [
          {
            "type": "IfStatement",
            "start": 6267,
            "end": 6321,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 6299,
              "end": 6321,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6309,
                  "end": 6315,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6309,
                    "end": 6314,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6309,
                      "end": 6310,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6311,
                      "end": 6314,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 6271,
              "end": 6297,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 6271,
                "end": 6284,
                "argument": {
                  "type": "ChainExpression",
                  "start": 6278,
                  "end": 6284,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6278,
                    "end": 6284,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6278,
                      "end": 6279,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 6281,
                      "end": 6284,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 6289,
                "end": 6297,
                "raw": "\"number\"",
                "value": "number",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 6326,
            "end": 6387,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 6362,
              "end": 6387,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6372,
                  "end": 6381,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6372,
                    "end": 6380,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 6372,
                      "end": 6373,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 6374,
                      "end": 6379,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 6330,
              "end": 6360,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 6330,
                "end": 6347,
                "argument": {
                  "type": "ChainExpression",
                  "start": 6337,
                  "end": 6347,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6337,
                    "end": 6347,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 6337,
                      "end": 6338,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Literal",
                      "start": 6341,
                      "end": 6346,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 6352,
                "end": 6360,
                "raw": "\"number\"",
                "value": "number",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 6392,
            "end": 6448,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 6426,
              "end": 6448,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6436,
                  "end": 6442,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6436,
                    "end": 6441,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6436,
                      "end": 6437,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6438,
                      "end": 6441,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 6396,
              "end": 6424,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 6396,
                "end": 6411,
                "argument": {
                  "type": "ChainExpression",
                  "start": 6403,
                  "end": 6411,
                  "expression": {
                    "type": "CallExpression",
                    "start": 6403,
                    "end": 6411,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 6403,
                      "end": 6409,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 6403,
                        "end": 6404,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": true,
                      "property": {
                        "type": "Identifier",
                        "start": 6406,
                        "end": 6409,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 6416,
                "end": 6424,
                "raw": "\"number\"",
                "value": "number",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 6453,
            "end": 6504,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 6482,
              "end": 6504,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6492,
                  "end": 6498,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6492,
                    "end": 6497,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6492,
                      "end": 6493,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6494,
                      "end": 6497,
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 6457,
              "end": 6480,
              "operator": "instanceof",
              "left": {
                "type": "ChainExpression",
                "start": 6457,
                "end": 6463,
                "expression": {
                  "type": "MemberExpression",
                  "start": 6457,
                  "end": 6463,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6457,
                    "end": 6458,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 6460,
                    "end": 6463,
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 6475,
                "end": 6480,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 6235,
        "end": 6238,
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 6239,
          "end": 6259,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6240,
            "end": 6259,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 6242,
              "end": 6259,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 6242,
                  "end": 6247,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6242,
                    "end": 6247,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 6250,
                  "end": 6259
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 6508,
      "end": 6783,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 6538,
        "end": 6783,
        "body": [
          {
            "type": "IfStatement",
            "start": 6544,
            "end": 6598,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 6576,
              "end": 6598,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6586,
                  "end": 6592,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6586,
                    "end": 6591,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6586,
                      "end": 6587,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6588,
                      "end": 6591,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 6548,
              "end": 6574,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 6548,
                "end": 6561,
                "argument": {
                  "type": "ChainExpression",
                  "start": 6555,
                  "end": 6561,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6555,
                    "end": 6561,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6555,
                      "end": 6556,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 6558,
                      "end": 6561,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 6566,
                "end": 6574,
                "raw": "\"number\"",
                "value": "number",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 6603,
            "end": 6664,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 6639,
              "end": 6664,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6649,
                  "end": 6658,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6649,
                    "end": 6657,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 6649,
                      "end": 6650,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 6651,
                      "end": 6656,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 6607,
              "end": 6637,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 6607,
                "end": 6624,
                "argument": {
                  "type": "ChainExpression",
                  "start": 6614,
                  "end": 6624,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6614,
                    "end": 6624,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 6614,
                      "end": 6615,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Literal",
                      "start": 6618,
                      "end": 6623,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 6629,
                "end": 6637,
                "raw": "\"number\"",
                "value": "number",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 6669,
            "end": 6725,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 6703,
              "end": 6725,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6713,
                  "end": 6719,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6713,
                    "end": 6718,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6713,
                      "end": 6714,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6715,
                      "end": 6718,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 6673,
              "end": 6701,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 6673,
                "end": 6688,
                "argument": {
                  "type": "ChainExpression",
                  "start": 6680,
                  "end": 6688,
                  "expression": {
                    "type": "CallExpression",
                    "start": 6680,
                    "end": 6688,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 6680,
                      "end": 6686,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 6680,
                        "end": 6681,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": true,
                      "property": {
                        "type": "Identifier",
                        "start": 6683,
                        "end": 6686,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 6693,
                "end": 6701,
                "raw": "\"number\"",
                "value": "number",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 6730,
            "end": 6781,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 6759,
              "end": 6781,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6769,
                  "end": 6775,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6769,
                    "end": 6774,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6769,
                      "end": 6770,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6771,
                      "end": 6774,
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 6734,
              "end": 6757,
              "operator": "instanceof",
              "left": {
                "type": "ChainExpression",
                "start": 6734,
                "end": 6740,
                "expression": {
                  "type": "MemberExpression",
                  "start": 6734,
                  "end": 6740,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6734,
                    "end": 6735,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 6737,
                    "end": 6740,
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 6752,
                "end": 6757,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 6517,
        "end": 6520,
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 6521,
          "end": 6536,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6522,
            "end": 6536,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 6524,
              "end": 6536,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 6524,
                  "end": 6529,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6524,
                    "end": 6529,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 6532,
                  "end": 6536
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 6785,
      "end": 7225,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 6820,
        "end": 7225,
        "body": [
          {
            "type": "IfStatement",
            "start": 6826,
            "end": 6922,
            "alternate": {
              "type": "BlockStatement",
              "start": 6890,
              "end": 6922,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6900,
                  "end": 6906,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6900,
                    "end": 6905,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6900,
                      "end": 6901,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6902,
                      "end": 6905,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6858,
              "end": 6880,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6868,
                  "end": 6874,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6868,
                    "end": 6873,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6868,
                      "end": 6869,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6870,
                      "end": 6873,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 6830,
              "end": 6856,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 6830,
                "end": 6843,
                "argument": {
                  "type": "ChainExpression",
                  "start": 6837,
                  "end": 6843,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6837,
                    "end": 6843,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6837,
                      "end": 6838,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 6840,
                      "end": 6843,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 6848,
                "end": 6856,
                "raw": "\"number\"",
                "value": "number",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 6927,
            "end": 7023,
            "alternate": {
              "type": "BlockStatement",
              "start": 7001,
              "end": 7023,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7011,
                  "end": 7017,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7011,
                    "end": 7016,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7011,
                      "end": 7012,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 7013,
                      "end": 7016,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6959,
              "end": 6991,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6969,
                  "end": 6975,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6969,
                    "end": 6974,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6969,
                      "end": 6970,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6971,
                      "end": 6974,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 6931,
              "end": 6957,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 6931,
                "end": 6944,
                "argument": {
                  "type": "ChainExpression",
                  "start": 6938,
                  "end": 6944,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6938,
                    "end": 6944,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6938,
                      "end": 6939,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 6941,
                      "end": 6944,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 6949,
                "end": 6957,
                "raw": "\"number\"",
                "value": "number",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 7028,
            "end": 7123,
            "alternate": {
              "type": "BlockStatement",
              "start": 7091,
              "end": 7123,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7101,
                  "end": 7107,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7101,
                    "end": 7106,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7101,
                      "end": 7102,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 7103,
                      "end": 7106,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 7059,
              "end": 7081,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7069,
                  "end": 7075,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7069,
                    "end": 7074,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7069,
                      "end": 7070,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 7071,
                      "end": 7074,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 7032,
              "end": 7057,
              "operator": "==",
              "left": {
                "type": "UnaryExpression",
                "start": 7032,
                "end": 7045,
                "argument": {
                  "type": "ChainExpression",
                  "start": 7039,
                  "end": 7045,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7039,
                    "end": 7045,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7039,
                      "end": 7040,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 7042,
                      "end": 7045,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 7049,
                "end": 7057,
                "raw": "\"number\"",
                "value": "number",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 7128,
            "end": 7223,
            "alternate": {
              "type": "BlockStatement",
              "start": 7201,
              "end": 7223,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7211,
                  "end": 7217,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7211,
                    "end": 7216,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7211,
                      "end": 7212,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 7213,
                      "end": 7216,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 7159,
              "end": 7191,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7169,
                  "end": 7175,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7169,
                    "end": 7174,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7169,
                      "end": 7170,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 7171,
                      "end": 7174,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 7132,
              "end": 7157,
              "operator": "!=",
              "left": {
                "type": "UnaryExpression",
                "start": 7132,
                "end": 7145,
                "argument": {
                  "type": "ChainExpression",
                  "start": 7139,
                  "end": 7145,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7139,
                    "end": 7145,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7139,
                      "end": 7140,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 7142,
                      "end": 7145,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 7149,
                "end": 7157,
                "raw": "\"number\"",
                "value": "number",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 6794,
        "end": 6797,
        "decorators": [],
        "name": "f22",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 6798,
          "end": 6818,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6799,
            "end": 6818,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 6801,
              "end": 6818,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 6801,
                  "end": 6806,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6801,
                    "end": 6806,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 6809,
                  "end": 6818
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 7227,
      "end": 7679,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 7262,
        "end": 7679,
        "body": [
          {
            "type": "IfStatement",
            "start": 7268,
            "end": 7367,
            "alternate": {
              "type": "BlockStatement",
              "start": 7345,
              "end": 7367,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7355,
                  "end": 7361,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7355,
                    "end": 7360,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7355,
                      "end": 7356,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 7357,
                      "end": 7360,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 7303,
              "end": 7335,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7313,
                  "end": 7319,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7313,
                    "end": 7318,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7313,
                      "end": 7314,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 7315,
                      "end": 7318,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 7272,
              "end": 7301,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 7272,
                "end": 7285,
                "argument": {
                  "type": "ChainExpression",
                  "start": 7279,
                  "end": 7285,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7279,
                    "end": 7285,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7279,
                      "end": 7280,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 7282,
                      "end": 7285,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 7290,
                "end": 7301,
                "raw": "\"undefined\"",
                "value": "undefined",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 7372,
            "end": 7471,
            "alternate": {
              "type": "BlockStatement",
              "start": 7439,
              "end": 7471,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7449,
                  "end": 7455,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7449,
                    "end": 7454,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7449,
                      "end": 7450,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 7451,
                      "end": 7454,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 7407,
              "end": 7429,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7417,
                  "end": 7423,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7417,
                    "end": 7422,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7417,
                      "end": 7418,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 7419,
                      "end": 7422,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 7376,
              "end": 7405,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 7376,
                "end": 7389,
                "argument": {
                  "type": "ChainExpression",
                  "start": 7383,
                  "end": 7389,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7383,
                    "end": 7389,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7383,
                      "end": 7384,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 7386,
                      "end": 7389,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 7394,
                "end": 7405,
                "raw": "\"undefined\"",
                "value": "undefined",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 7476,
            "end": 7574,
            "alternate": {
              "type": "BlockStatement",
              "start": 7552,
              "end": 7574,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7562,
                  "end": 7568,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7562,
                    "end": 7567,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7562,
                      "end": 7563,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 7564,
                      "end": 7567,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 7510,
              "end": 7542,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7520,
                  "end": 7526,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7520,
                    "end": 7525,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7520,
                      "end": 7521,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 7522,
                      "end": 7525,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 7480,
              "end": 7508,
              "operator": "==",
              "left": {
                "type": "UnaryExpression",
                "start": 7480,
                "end": 7493,
                "argument": {
                  "type": "ChainExpression",
                  "start": 7487,
                  "end": 7493,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7487,
                    "end": 7493,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7487,
                      "end": 7488,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 7490,
                      "end": 7493,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 7497,
                "end": 7508,
                "raw": "\"undefined\"",
                "value": "undefined",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 7579,
            "end": 7677,
            "alternate": {
              "type": "BlockStatement",
              "start": 7645,
              "end": 7677,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7655,
                  "end": 7661,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7655,
                    "end": 7660,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7655,
                      "end": 7656,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 7657,
                      "end": 7660,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 7613,
              "end": 7635,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7623,
                  "end": 7629,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7623,
                    "end": 7628,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7623,
                      "end": 7624,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 7625,
                      "end": 7628,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 7583,
              "end": 7611,
              "operator": "!=",
              "left": {
                "type": "UnaryExpression",
                "start": 7583,
                "end": 7596,
                "argument": {
                  "type": "ChainExpression",
                  "start": 7590,
                  "end": 7596,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7590,
                    "end": 7596,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7590,
                      "end": 7591,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 7593,
                      "end": 7596,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 7600,
                "end": 7611,
                "raw": "\"undefined\"",
                "value": "undefined",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 7236,
        "end": 7239,
        "decorators": [],
        "name": "f23",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 7240,
          "end": 7260,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7241,
            "end": 7260,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 7243,
              "end": 7260,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 7243,
                  "end": 7248,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 7243,
                    "end": 7248,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 7251,
                  "end": 7260
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 7681,
      "end": 7728,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 7698,
        "end": 7704,
        "decorators": [],
        "name": "assert",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 7705,
          "end": 7715,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7706,
            "end": 7715,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 7708,
              "end": 7715
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 7716,
        "end": 7727,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 7718,
          "end": 7727,
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "start": 7726,
            "end": 7727,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 7729,
      "end": 7798,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 7746,
        "end": 7759,
        "decorators": [],
        "name": "assertNonNull",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 7763,
          "end": 7767,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7764,
            "end": 7767,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 7766,
              "end": 7767,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 7766,
                "end": 7767,
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
        "start": 7768,
        "end": 7797,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 7770,
          "end": 7797,
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "start": 7778,
            "end": 7779,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7783,
            "end": 7797,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 7783,
              "end": 7797,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 7794,
                "end": 7797,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 7795,
                    "end": 7796,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7795,
                      "end": 7796,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 7783,
                "end": 7794,
                "decorators": [],
                "name": "NonNullable",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7759,
        "end": 7762,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 7760,
            "end": 7761,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 7760,
              "end": 7761,
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
      "type": "FunctionDeclaration",
      "start": 7800,
      "end": 8124,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 7835,
        "end": 8124,
        "body": [
          {
            "type": "IfStatement",
            "start": 7841,
            "end": 7899,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 7853,
              "end": 7899,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7863,
                  "end": 7878,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 7863,
                    "end": 7877,
                    "arguments": [
                      {
                        "type": "ChainExpression",
                        "start": 7870,
                        "end": 7876,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 7870,
                          "end": 7876,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 7870,
                            "end": 7871,
                            "decorators": [],
                            "name": "o",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": true,
                          "property": {
                            "type": "Identifier",
                            "start": 7873,
                            "end": 7876,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 7863,
                      "end": 7869,
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 7887,
                  "end": 7893,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7887,
                    "end": 7892,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7887,
                      "end": 7888,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 7889,
                      "end": 7892,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 7845,
              "end": 7851,
              "argument": {
                "type": "UnaryExpression",
                "start": 7846,
                "end": 7851,
                "argument": {
                  "type": "Literal",
                  "start": 7847,
                  "end": 7851,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "IfStatement",
            "start": 7904,
            "end": 7969,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 7916,
              "end": 7969,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7926,
                  "end": 7948,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 7926,
                    "end": 7947,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 7933,
                        "end": 7946,
                        "operator": "===",
                        "left": {
                          "type": "ChainExpression",
                          "start": 7933,
                          "end": 7939,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 7933,
                            "end": 7939,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 7933,
                              "end": 7934,
                              "decorators": [],
                              "name": "o",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": true,
                            "property": {
                              "type": "Identifier",
                              "start": 7936,
                              "end": 7939,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 7944,
                          "end": 7946,
                          "raw": "42",
                          "value": 42,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 7926,
                      "end": 7932,
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 7957,
                  "end": 7963,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7957,
                    "end": 7962,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 7957,
                      "end": 7958,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 7959,
                      "end": 7962,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 7908,
              "end": 7914,
              "argument": {
                "type": "UnaryExpression",
                "start": 7909,
                "end": 7914,
                "argument": {
                  "type": "Literal",
                  "start": 7910,
                  "end": 7914,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "IfStatement",
            "start": 7974,
            "end": 8052,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 7986,
              "end": 8052,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7996,
                  "end": 8031,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 7996,
                    "end": 8030,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 8003,
                        "end": 8029,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 8003,
                          "end": 8016,
                          "argument": {
                            "type": "ChainExpression",
                            "start": 8010,
                            "end": 8016,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 8010,
                              "end": 8016,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 8010,
                                "end": 8011,
                                "decorators": [],
                                "name": "o",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": true,
                              "property": {
                                "type": "Identifier",
                                "start": 8013,
                                "end": 8016,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 8021,
                          "end": 8029,
                          "raw": "\"number\"",
                          "value": "number",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 7996,
                      "end": 8002,
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 8040,
                  "end": 8046,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 8040,
                    "end": 8045,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 8040,
                      "end": 8041,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 8042,
                      "end": 8045,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 7978,
              "end": 7984,
              "argument": {
                "type": "UnaryExpression",
                "start": 7979,
                "end": 7984,
                "argument": {
                  "type": "Literal",
                  "start": 7980,
                  "end": 7984,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "IfStatement",
            "start": 8057,
            "end": 8122,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 8069,
              "end": 8122,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 8079,
                  "end": 8101,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 8079,
                    "end": 8100,
                    "arguments": [
                      {
                        "type": "ChainExpression",
                        "start": 8093,
                        "end": 8099,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 8093,
                          "end": 8099,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 8093,
                            "end": 8094,
                            "decorators": [],
                            "name": "o",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": true,
                          "property": {
                            "type": "Identifier",
                            "start": 8096,
                            "end": 8099,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 8079,
                      "end": 8092,
                      "decorators": [],
                      "name": "assertNonNull",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 8110,
                  "end": 8116,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 8110,
                    "end": 8115,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 8110,
                      "end": 8111,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 8112,
                      "end": 8115,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 8061,
              "end": 8067,
              "argument": {
                "type": "UnaryExpression",
                "start": 8062,
                "end": 8067,
                "argument": {
                  "type": "Literal",
                  "start": 8063,
                  "end": 8067,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 7809,
        "end": 7812,
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 7813,
          "end": 7833,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7814,
            "end": 7833,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 7816,
              "end": 7833,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 7816,
                  "end": 7821,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 7816,
                    "end": 7821,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 7824,
                  "end": 7833
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 8126,
      "end": 8442,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 8161,
        "end": 8442,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 8167,
            "end": 8440,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 8193,
                "end": 8242,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8217,
                    "end": 8223,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 8217,
                      "end": 8222,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 8217,
                        "end": 8218,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 8219,
                        "end": 8222,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 8236,
                    "end": 8242,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 8198,
                  "end": 8203,
                  "raw": "\"abc\"",
                  "value": "abc",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 8251,
                "end": 8297,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8272,
                    "end": 8278,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 8272,
                      "end": 8277,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 8272,
                        "end": 8273,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 8274,
                        "end": 8277,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 8291,
                    "end": 8297,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 8256,
                  "end": 8258,
                  "raw": "42",
                  "value": 42,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 8306,
                "end": 8369,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8334,
                    "end": 8340,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 8334,
                      "end": 8339,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 8334,
                        "end": 8335,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 8336,
                        "end": 8339,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 8363,
                    "end": 8369,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "start": 8311,
                  "end": 8320,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 8378,
                "end": 8434,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8399,
                    "end": 8405,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 8399,
                      "end": 8404,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 8399,
                        "end": 8400,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 8401,
                        "end": 8404,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 8428,
                    "end": 8434,
                    "label": null
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "ChainExpression",
              "start": 8175,
              "end": 8181,
              "expression": {
                "type": "MemberExpression",
                "start": 8175,
                "end": 8181,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 8175,
                  "end": 8176,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 8178,
                  "end": 8181,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 8135,
        "end": 8138,
        "decorators": [],
        "name": "f40",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 8139,
          "end": 8159,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 8140,
            "end": 8159,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 8142,
              "end": 8159,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 8142,
                  "end": 8147,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 8142,
                    "end": 8147,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 8150,
                  "end": 8159
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 8444,
      "end": 8778,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 8479,
        "end": 8778,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 8485,
            "end": 8776,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 8518,
                "end": 8570,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8545,
                    "end": 8551,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 8545,
                      "end": 8550,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 8545,
                        "end": 8546,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 8547,
                        "end": 8550,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 8564,
                    "end": 8570,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 8523,
                  "end": 8531,
                  "raw": "\"string\"",
                  "value": "string",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 8579,
                "end": 8631,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8606,
                    "end": 8612,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 8606,
                      "end": 8611,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 8606,
                        "end": 8607,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 8608,
                        "end": 8611,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 8625,
                    "end": 8631,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 8584,
                  "end": 8592,
                  "raw": "\"number\"",
                  "value": "number",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 8640,
                "end": 8705,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8670,
                    "end": 8676,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 8670,
                      "end": 8675,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 8670,
                        "end": 8671,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 8672,
                        "end": 8675,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 8699,
                    "end": 8705,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 8645,
                  "end": 8656,
                  "raw": "\"undefined\"",
                  "value": "undefined",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 8714,
                "end": 8770,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8735,
                    "end": 8741,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 8735,
                      "end": 8740,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 8735,
                        "end": 8736,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 8737,
                        "end": 8740,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 8764,
                    "end": 8770,
                    "label": null
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "UnaryExpression",
              "start": 8493,
              "end": 8506,
              "argument": {
                "type": "ChainExpression",
                "start": 8500,
                "end": 8506,
                "expression": {
                  "type": "MemberExpression",
                  "start": 8500,
                  "end": 8506,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 8500,
                    "end": 8501,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 8503,
                    "end": 8506,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "operator": "typeof",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 8453,
        "end": 8456,
        "decorators": [],
        "name": "f41",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 8457,
          "end": 8477,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 8458,
            "end": 8477,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 8460,
              "end": 8477,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 8460,
                  "end": 8465,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 8460,
                    "end": 8465,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 8468,
                  "end": 8477
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 8803,
      "end": 8915,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 8808,
        "end": 8813,
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 8820,
        "end": 8915,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 8822,
            "end": 8874,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 8824,
                "end": 8842,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8824,
                  "end": 8828,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 8828,
                  "end": 8841,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 8830,
                    "end": 8841,
                    "literal": {
                      "type": "Literal",
                      "start": 8830,
                      "end": 8841,
                      "raw": "'rectangle'",
                      "value": "rectangle",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 8843,
                "end": 8857,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8843,
                  "end": 8848,
                  "decorators": [],
                  "name": "width",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 8848,
                  "end": 8856,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 8850,
                    "end": 8856
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 8858,
                "end": 8872,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8858,
                  "end": 8864,
                  "decorators": [],
                  "name": "height",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 8864,
                  "end": 8872,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 8866,
                    "end": 8872
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 8881,
            "end": 8915,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 8883,
                "end": 8898,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8883,
                  "end": 8887,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 8887,
                  "end": 8897,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 8889,
                    "end": 8897,
                    "literal": {
                      "type": "Literal",
                      "start": 8889,
                      "end": 8897,
                      "raw": "'circle'",
                      "value": "circle",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 8899,
                "end": 8913,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8899,
                  "end": 8905,
                  "decorators": [],
                  "name": "radius",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 8905,
                  "end": 8913,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 8907,
                    "end": 8913
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 8917,
      "end": 9165,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 8949,
        "end": 9165,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 8955,
            "end": 9163,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 8986,
                "end": 9047,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 9013,
                    "end": 9047,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 9020,
                      "end": 9047,
                      "operator": "*",
                      "left": {
                        "type": "MemberExpression",
                        "start": 9020,
                        "end": 9027,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 9020,
                          "end": 9024,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 9025,
                          "end": 9027,
                          "decorators": [],
                          "name": "PI",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 9030,
                        "end": 9047,
                        "operator": "**",
                        "left": {
                          "type": "MemberExpression",
                          "start": 9030,
                          "end": 9042,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 9030,
                            "end": 9035,
                            "decorators": [],
                            "name": "shape",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 9036,
                            "end": 9042,
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 9046,
                          "end": 9047,
                          "raw": "2",
                          "value": 2,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 8991,
                  "end": 8999,
                  "raw": "'circle'",
                  "value": "circle",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 9056,
                "end": 9119,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 9086,
                    "end": 9119,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 9093,
                      "end": 9119,
                      "operator": "*",
                      "left": {
                        "type": "MemberExpression",
                        "start": 9093,
                        "end": 9104,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 9093,
                          "end": 9098,
                          "decorators": [],
                          "name": "shape",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 9099,
                          "end": 9104,
                          "decorators": [],
                          "name": "width",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 9107,
                        "end": 9119,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 9107,
                          "end": 9112,
                          "decorators": [],
                          "name": "shape",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 9113,
                          "end": 9119,
                          "decorators": [],
                          "name": "height",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 9061,
                  "end": 9072,
                  "raw": "'rectangle'",
                  "value": "rectangle",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 9128,
                "end": 9157,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 9149,
                    "end": 9157,
                    "argument": {
                      "type": "Literal",
                      "start": 9156,
                      "end": 9157,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "ChainExpression",
              "start": 8963,
              "end": 8974,
              "expression": {
                "type": "MemberExpression",
                "start": 8963,
                "end": 8974,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 8963,
                  "end": 8968,
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 8970,
                  "end": 8974,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 8926,
        "end": 8933,
        "decorators": [],
        "name": "getArea",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 8934,
          "end": 8947,
          "decorators": [],
          "name": "shape",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 8940,
            "end": 8947,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 8942,
              "end": 8947,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 8942,
                "end": 8947,
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 9167,
      "end": 9265,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 9172,
        "end": 9179,
        "decorators": [],
        "name": "Feature",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9182,
        "end": 9264,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 9186,
            "end": 9197,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 9186,
              "end": 9188,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9188,
              "end": 9196,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9190,
                "end": 9196
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 9200,
            "end": 9262,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 9200,
              "end": 9208,
              "decorators": [],
              "name": "geometry",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9209,
              "end": 9261,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 9211,
                "end": 9261,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 9217,
                    "end": 9230,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9217,
                      "end": 9221,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 9221,
                      "end": 9229,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 9223,
                        "end": 9229
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 9235,
                    "end": 9257,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9235,
                      "end": 9246,
                      "decorators": [],
                      "name": "coordinates",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 9246,
                      "end": 9256,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 9248,
                        "end": 9256,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 9248,
                          "end": 9254
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 9268,
      "end": 9420,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 9318,
        "end": 9420,
        "body": [
          {
            "type": "IfStatement",
            "start": 9324,
            "end": 9383,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 9357,
              "end": 9383,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 9367,
                  "end": 9377,
                  "argument": {
                    "type": "ArrayExpression",
                    "start": 9374,
                    "end": 9376,
                    "elements": []
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 9328,
              "end": 9355,
              "operator": "!==",
              "left": {
                "type": "ChainExpression",
                "start": 9328,
                "end": 9344,
                "expression": {
                  "type": "MemberExpression",
                  "start": 9328,
                  "end": 9344,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 9328,
                    "end": 9338,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 9328,
                      "end": 9329,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 9330,
                      "end": 9338,
                      "decorators": [],
                      "name": "geometry",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 9340,
                    "end": 9344,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Literal",
                "start": 9349,
                "end": 9355,
                "raw": "'test'",
                "value": "test",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 9388,
            "end": 9418,
            "argument": {
              "type": "MemberExpression",
              "start": 9395,
              "end": 9417,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 9395,
                "end": 9405,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 9395,
                  "end": 9396,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 9397,
                  "end": 9405,
                  "decorators": [],
                  "name": "geometry",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 9406,
                "end": 9417,
                "decorators": [],
                "name": "coordinates",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9277,
        "end": 9295,
        "decorators": [],
        "name": "extractCoordinates",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 9296,
          "end": 9306,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 9297,
            "end": 9306,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 9299,
              "end": 9306,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 9299,
                "end": 9306,
                "decorators": [],
                "name": "Feature",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 9307,
        "end": 9317,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 9309,
          "end": 9317,
          "elementType": {
            "type": "TSNumberKeyword",
            "start": 9309,
            "end": 9315
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 9444,
      "end": 9495,
      "body": {
        "type": "TSInterfaceBody",
        "start": 9465,
        "end": 9495,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 9471,
            "end": 9493,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 9471,
              "end": 9483,
              "decorators": [],
              "name": "someProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9483,
              "end": 9492,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 9485,
                "end": 9492
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 9454,
        "end": 9464,
        "decorators": [],
        "name": "SomeObject",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 9497,
      "end": 9539,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9501,
          "end": 9538,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9501,
            "end": 9538,
            "decorators": [],
            "name": "lastSomeProperty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9517,
              "end": 9538,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 9519,
                "end": 9538,
                "types": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 9519,
                    "end": 9526
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 9529,
                    "end": 9538
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 9541,
      "end": 9853,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 9613,
        "end": 9853,
        "body": [
          {
            "type": "IfStatement",
            "start": 9619,
            "end": 9851,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 9678,
              "end": 9851,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 9688,
                  "end": 9720,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 9688,
                    "end": 9719,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 9700,
                        "end": 9718,
                        "decorators": [],
                        "name": "someOptionalObject",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 9688,
                      "end": 9699,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 9688,
                        "end": 9695,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 9696,
                        "end": 9699,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 9729,
                  "end": 9774,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 9729,
                    "end": 9773,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 9741,
                        "end": 9772,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 9741,
                          "end": 9759,
                          "decorators": [],
                          "name": "someOptionalObject",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 9760,
                          "end": 9772,
                          "decorators": [],
                          "name": "someProperty",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 9729,
                      "end": 9740,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 9729,
                        "end": 9736,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 9737,
                        "end": 9740,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 9793,
                  "end": 9845,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 9793,
                    "end": 9844,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 9793,
                      "end": 9809,
                      "decorators": [],
                      "name": "lastSomeProperty",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ChainExpression",
                      "start": 9812,
                      "end": 9844,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 9812,
                        "end": 9844,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 9812,
                          "end": 9830,
                          "decorators": [],
                          "name": "someOptionalObject",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "property": {
                          "type": "Identifier",
                          "start": 9832,
                          "end": 9844,
                          "decorators": [],
                          "name": "someProperty",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 9623,
              "end": 9676,
              "operator": "!==",
              "left": {
                "type": "ChainExpression",
                "start": 9623,
                "end": 9655,
                "expression": {
                  "type": "MemberExpression",
                  "start": 9623,
                  "end": 9655,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 9623,
                    "end": 9641,
                    "decorators": [],
                    "name": "someOptionalObject",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 9643,
                    "end": 9655,
                    "decorators": [],
                    "name": "someProperty",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 9660,
                "end": 9676,
                "decorators": [],
                "name": "lastSomeProperty",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9550,
        "end": 9562,
        "decorators": [],
        "name": "someFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 9563,
          "end": 9605,
          "decorators": [],
          "name": "someOptionalObject",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 9581,
            "end": 9605,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 9583,
              "end": 9605,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 9583,
                  "end": 9593,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 9583,
                    "end": 9593,
                    "decorators": [],
                    "name": "SomeObject",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 9596,
                  "end": 9605
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 9606,
        "end": 9612,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 9608,
          "end": 9612
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 9855,
      "end": 9911,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9861,
          "end": 9910,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9861,
            "end": 9883,
            "decorators": [],
            "name": "someObject",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9871,
              "end": 9883,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9873,
                "end": 9883,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 9873,
                  "end": 9883,
                  "decorators": [],
                  "name": "SomeObject",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 9886,
            "end": 9910,
            "properties": [
              {
                "type": "Property",
                "start": 9892,
                "end": 9908,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 9892,
                  "end": 9904,
                  "decorators": [],
                  "name": "someProperty",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 9906,
                  "end": 9908,
                  "raw": "42",
                  "value": 42,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 9913,
      "end": 9938,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 9913,
        "end": 9937,
        "arguments": [
          {
            "type": "Identifier",
            "start": 9926,
            "end": 9936,
            "decorators": [],
            "name": "someObject",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 9913,
          "end": 9925,
          "decorators": [],
          "name": "someFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 9939,
      "end": 9963,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 9939,
        "end": 9962,
        "arguments": [
          {
            "type": "Identifier",
            "start": 9952,
            "end": 9961,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 9939,
          "end": 9951,
          "decorators": [],
          "name": "someFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 9987,
      "end": 9997,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9991,
          "end": 9996,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9991,
            "end": 9992,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 9995,
            "end": 9996,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 9998,
      "end": 10047,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 10012,
          "end": 10046,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 10012,
            "end": 10046,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10015,
              "end": 10046,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 10017,
                "end": 10046,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 10017,
                  "end": 10044,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 10019,
                      "end": 10042,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 10019,
                        "end": 10022,
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 10022,
                        "end": 10042,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 10025,
                          "end": 10041,
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "start": 10025,
                              "end": 10031,
                              "literal": {
                                "type": "Literal",
                                "start": 10025,
                                "end": 10031,
                                "raw": "\"left\"",
                                "value": "left",
                                "regex": null,
                                "bigint": null
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 10034,
                              "end": 10041,
                              "literal": {
                                "type": "Literal",
                                "start": 10034,
                                "end": 10041,
                                "raw": "\"right\"",
                                "value": "right",
                                "regex": null,
                                "bigint": null
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
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "WhileStatement",
      "start": 10049,
      "end": 10187,
      "body": {
        "type": "BlockStatement",
        "start": 10080,
        "end": 10187,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 10086,
            "end": 10093,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 10086,
              "end": 10092,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 10086,
                "end": 10087,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 10091,
                "end": 10092,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 10098,
            "end": 10185,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 10127,
              "end": 10185,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 10137,
                  "end": 10179,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 10137,
                    "end": 10178,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 10149,
                        "end": 10177,
                        "raw": "\"I should ALSO be reachable\"",
                        "value": "I should ALSO be reachable",
                        "regex": null,
                        "bigint": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 10137,
                      "end": 10148,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 10137,
                        "end": 10144,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 10145,
                        "end": 10148,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 10102,
              "end": 10125,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 10102,
                "end": 10113,
                "expression": {
                  "type": "MemberExpression",
                  "start": 10102,
                  "end": 10113,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 10102,
                    "end": 10108,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 10102,
                      "end": 10105,
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 10106,
                      "end": 10107,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 10110,
                    "end": 10113,
                    "decorators": [],
                    "name": "tag",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Literal",
                "start": 10118,
                "end": 10125,
                "raw": "\"right\"",
                "value": "right",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 10056,
        "end": 10078,
        "operator": "===",
        "left": {
          "type": "ChainExpression",
          "start": 10056,
          "end": 10067,
          "expression": {
            "type": "MemberExpression",
            "start": 10056,
            "end": 10067,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 10056,
              "end": 10062,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 10056,
                "end": 10059,
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 10060,
                "end": 10061,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 10064,
              "end": 10067,
              "decorators": [],
              "name": "tag",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "right": {
          "type": "Literal",
          "start": 10072,
          "end": 10078,
          "raw": "\"left\"",
          "value": "left",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 10212,
      "end": 10280,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 10217,
        "end": 10222,
        "decorators": [],
        "name": "Test5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 10225,
        "end": 10279,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 10229,
            "end": 10277,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 10229,
              "end": 10233,
              "decorators": [],
              "name": "main",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10234,
              "end": 10276,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 10236,
                "end": 10276,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 10242,
                    "end": 10272,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 10242,
                      "end": 10248,
                      "decorators": [],
                      "name": "childs",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10248,
                      "end": 10271,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10250,
                        "end": 10271,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 10256,
                          "end": 10271,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 10257,
                              "end": 10263
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 10265,
                              "end": 10270,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 10265,
                                "end": 10270,
                                "decorators": [],
                                "name": "Test5",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 10250,
                          "end": 10256,
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 10282,
      "end": 10442,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 10307,
        "end": 10442,
        "body": [
          {
            "type": "ForInStatement",
            "start": 10312,
            "end": 10424,
            "body": {
              "type": "BlockStatement",
              "start": 10348,
              "end": 10424,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 10356,
                  "end": 10419,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 10390,
                    "end": 10419,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 10400,
                        "end": 10411,
                        "argument": {
                          "type": "Identifier",
                          "start": 10407,
                          "end": 10410,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 10360,
                    "end": 10388,
                    "operator": "===",
                    "left": {
                      "type": "MemberExpression",
                      "start": 10360,
                      "end": 10380,
                      "computed": true,
                      "object": {
                        "type": "MemberExpression",
                        "start": 10360,
                        "end": 10375,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 10360,
                          "end": 10368,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 10360,
                            "end": 10363,
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 10364,
                            "end": 10368,
                            "decorators": [],
                            "name": "main",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 10369,
                          "end": 10375,
                          "decorators": [],
                          "name": "childs",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 10376,
                        "end": 10379,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 10385,
                      "end": 10388,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 10317,
              "end": 10326,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 10323,
                  "end": 10326,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 10323,
                    "end": 10326,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "ChainExpression",
              "start": 10330,
              "end": 10346,
              "expression": {
                "type": "MemberExpression",
                "start": 10330,
                "end": 10346,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 10330,
                  "end": 10338,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 10330,
                    "end": 10333,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 10334,
                    "end": 10338,
                    "decorators": [],
                    "name": "main",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 10340,
                  "end": 10346,
                  "decorators": [],
                  "name": "childs",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 10428,
            "end": 10440,
            "argument": {
              "type": "Literal",
              "start": 10435,
              "end": 10439,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 10291,
        "end": 10294,
        "decorators": [],
        "name": "f50",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 10295,
          "end": 10305,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 10298,
            "end": 10305,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 10300,
              "end": 10305,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 10300,
                "end": 10305,
                "decorators": [],
                "name": "Test5",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
