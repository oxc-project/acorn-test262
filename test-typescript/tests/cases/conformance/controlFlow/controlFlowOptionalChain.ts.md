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
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 144,
            "name": "o",
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
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 73,
                            "end": 84,
                            "name": "key",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 76,
                              "end": 84,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 78,
                                "end": 84
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 85,
                          "end": 90,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 87,
                            "end": 90
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      },
                      {
                        "type": "TSIndexSignature",
                        "start": 96,
                        "end": 115,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 97,
                            "end": 108,
                            "name": "key",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 100,
                              "end": 108,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 102,
                                "end": 108
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 120,
                        "end": 142,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 121,
                            "end": 135,
                            "argument": {
                              "type": "Identifier",
                              "start": 124,
                              "end": 128,
                              "name": "args",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        }
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
      "type": "VariableDeclaration",
      "start": 147,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 160,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 160,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 154,
                "end": 160
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
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 173,
      "expression": {
        "type": "ChainExpression",
        "start": 162,
        "end": 172,
        "expression": {
          "type": "MemberExpression",
          "start": 162,
          "end": 172,
          "object": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "AssignmentExpression",
            "start": 166,
            "end": 171,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 170,
              "end": 171,
              "value": 1,
              "raw": "1"
            }
          },
          "computed": true,
          "optional": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 187,
      "expression": {
        "type": "CallExpression",
        "start": 174,
        "end": 186,
        "callee": {
          "type": "MemberExpression",
          "start": 174,
          "end": 184,
          "object": {
            "type": "Identifier",
            "start": 174,
            "end": 175,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 176,
            "end": 184,
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 202,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 202,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 196,
                "end": 202
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
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 216,
      "expression": {
        "type": "ChainExpression",
        "start": 204,
        "end": 215,
        "expression": {
          "type": "MemberExpression",
          "start": 204,
          "end": 215,
          "object": {
            "type": "MemberExpression",
            "start": 204,
            "end": 208,
            "object": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
          },
          "property": {
            "type": "AssignmentExpression",
            "start": 209,
            "end": 214,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 213,
              "end": 214,
              "value": 1,
              "raw": "1"
            }
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 230,
      "expression": {
        "type": "CallExpression",
        "start": 217,
        "end": 229,
        "callee": {
          "type": "MemberExpression",
          "start": 217,
          "end": 227,
          "object": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 219,
            "end": 227,
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 245,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 245,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 239,
                "end": 245
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
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 247,
      "end": 257,
      "expression": {
        "type": "ChainExpression",
        "start": 247,
        "end": 257,
        "expression": {
          "type": "CallExpression",
          "start": 247,
          "end": 257,
          "callee": {
            "type": "Identifier",
            "start": 247,
            "end": 248,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 255,
                "end": 256,
                "value": 1,
                "raw": "1"
              }
            }
          ],
          "optional": true,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 258,
      "end": 271,
      "expression": {
        "type": "CallExpression",
        "start": 258,
        "end": 270,
        "callee": {
          "type": "MemberExpression",
          "start": 258,
          "end": 268,
          "object": {
            "type": "Identifier",
            "start": 258,
            "end": 259,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 260,
            "end": 268,
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 286,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 286,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 280,
                "end": 286
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
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 288,
      "end": 300,
      "expression": {
        "type": "ChainExpression",
        "start": 288,
        "end": 299,
        "expression": {
          "type": "CallExpression",
          "start": 288,
          "end": 299,
          "callee": {
            "type": "MemberExpression",
            "start": 288,
            "end": 292,
            "object": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
          },
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
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 297,
                "end": 298,
                "value": 1,
                "raw": "1"
              }
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 301,
      "end": 314,
      "expression": {
        "type": "CallExpression",
        "start": 301,
        "end": 313,
        "callee": {
          "type": "MemberExpression",
          "start": 301,
          "end": 311,
          "object": {
            "type": "Identifier",
            "start": 301,
            "end": 302,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 303,
            "end": 311,
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 389,
            "name": "f",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 366,
                        "end": 372,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 367,
                          "end": 372,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 369,
                            "end": 372
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                        "parameterName": {
                          "type": "Identifier",
                          "start": 377,
                          "end": 378,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "asserts": false,
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
                    }
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
      "type": "VariableDeclaration",
      "start": 391,
      "end": 424,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 423,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 423,
            "name": "x",
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
      "type": "IfStatement",
      "start": 425,
      "end": 534,
      "test": {
        "type": "ChainExpression",
        "start": 429,
        "end": 435,
        "expression": {
          "type": "CallExpression",
          "start": 429,
          "end": 435,
          "callee": {
            "type": "Identifier",
            "start": 429,
            "end": 430,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 433,
              "end": 434,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": true,
          "typeArguments": null
        }
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
            "expression": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 460,
            "end": 462,
            "expression": {
              "type": "Identifier",
              "start": 460,
              "end": 461,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 494,
            "end": 499,
            "expression": {
              "type": "CallExpression",
              "start": 494,
              "end": 498,
              "callee": {
                "type": "Identifier",
                "start": 494,
                "end": 495,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 496,
                  "end": 497,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 507,
        "end": 534,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 513,
            "end": 515,
            "expression": {
              "type": "Identifier",
              "start": 513,
              "end": 514,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 520,
            "end": 522,
            "expression": {
              "type": "Identifier",
              "start": 520,
              "end": 521,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 527,
            "end": 532,
            "expression": {
              "type": "CallExpression",
              "start": 527,
              "end": 531,
              "callee": {
                "type": "Identifier",
                "start": 527,
                "end": 528,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 529,
                  "end": 530,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 535,
      "end": 537,
      "expression": {
        "type": "Identifier",
        "start": 535,
        "end": 536,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 538,
      "end": 540,
      "expression": {
        "type": "Identifier",
        "start": 538,
        "end": 539,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 541,
      "end": 546,
      "expression": {
        "type": "CallExpression",
        "start": 541,
        "end": 545,
        "callee": {
          "type": "Identifier",
          "start": 541,
          "end": 542,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 543,
            "end": 544,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 562,
            "end": 605,
            "name": "o2",
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
                        "key": {
                          "type": "Identifier",
                          "start": 568,
                          "end": 569,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 570,
                            "end": 576,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 571,
                              "end": 576,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 573,
                                "end": 576
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 577,
                          "end": 590,
                          "typeAnnotation": {
                            "type": "TSTypePredicate",
                            "start": 579,
                            "end": 590,
                            "parameterName": {
                              "type": "Identifier",
                              "start": 579,
                              "end": 580,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "asserts": false,
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
                        "accessibility": null,
                        "readonly": false,
                        "static": false
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
      "type": "IfStatement",
      "start": 607,
      "end": 748,
      "test": {
        "type": "ChainExpression",
        "start": 611,
        "end": 619,
        "expression": {
          "type": "CallExpression",
          "start": 611,
          "end": 619,
          "callee": {
            "type": "MemberExpression",
            "start": 611,
            "end": 616,
            "object": {
              "type": "Identifier",
              "start": 611,
              "end": 613,
              "name": "o2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 615,
              "end": 616,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 617,
              "end": 618,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        }
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
            "expression": {
              "type": "Identifier",
              "start": 627,
              "end": 628,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 644,
            "end": 649,
            "expression": {
              "type": "MemberExpression",
              "start": 644,
              "end": 648,
              "object": {
                "type": "Identifier",
                "start": 644,
                "end": 646,
                "name": "o2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 647,
                "end": 648,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 681,
            "end": 687,
            "expression": {
              "type": "ChainExpression",
              "start": 681,
              "end": 686,
              "expression": {
                "type": "MemberExpression",
                "start": 681,
                "end": 686,
                "object": {
                  "type": "Identifier",
                  "start": 681,
                  "end": 683,
                  "name": "o2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 685,
                  "end": 686,
                  "name": "f",
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
            "start": 692,
            "end": 701,
            "expression": {
              "type": "ChainExpression",
              "start": 692,
              "end": 700,
              "expression": {
                "type": "CallExpression",
                "start": 692,
                "end": 700,
                "callee": {
                  "type": "MemberExpression",
                  "start": 692,
                  "end": 697,
                  "object": {
                    "type": "Identifier",
                    "start": 692,
                    "end": 694,
                    "name": "o2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 697,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 698,
                    "end": 699,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 709,
        "end": 748,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 715,
            "end": 717,
            "expression": {
              "type": "Identifier",
              "start": 715,
              "end": 716,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 722,
            "end": 725,
            "expression": {
              "type": "Identifier",
              "start": 722,
              "end": 724,
              "name": "o2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 730,
            "end": 736,
            "expression": {
              "type": "ChainExpression",
              "start": 730,
              "end": 735,
              "expression": {
                "type": "MemberExpression",
                "start": 730,
                "end": 735,
                "object": {
                  "type": "Identifier",
                  "start": 730,
                  "end": 732,
                  "name": "o2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 734,
                  "end": 735,
                  "name": "f",
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
            "start": 741,
            "end": 746,
            "expression": {
              "type": "MemberExpression",
              "start": 741,
              "end": 745,
              "object": {
                "type": "Identifier",
                "start": 741,
                "end": 743,
                "name": "o2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 744,
                "end": 745,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 749,
      "end": 751,
      "expression": {
        "type": "Identifier",
        "start": 749,
        "end": 750,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 752,
      "end": 755,
      "expression": {
        "type": "Identifier",
        "start": 752,
        "end": 754,
        "name": "o2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 756,
      "end": 762,
      "expression": {
        "type": "ChainExpression",
        "start": 756,
        "end": 761,
        "expression": {
          "type": "MemberExpression",
          "start": 756,
          "end": 761,
          "object": {
            "type": "Identifier",
            "start": 756,
            "end": 758,
            "name": "o2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 760,
            "end": 761,
            "name": "f",
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
      "start": 763,
      "end": 768,
      "expression": {
        "type": "MemberExpression",
        "start": 763,
        "end": 767,
        "object": {
          "type": "Identifier",
          "start": 763,
          "end": 765,
          "name": "o2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 766,
          "end": 767,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 784,
            "end": 841,
            "name": "o3",
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 790,
                          "end": 791,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 796,
                        "end": 805,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 796,
                          "end": 797,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 797,
                          "end": 805,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 799,
                            "end": 805
                          }
                        },
                        "accessibility": null,
                        "static": false
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 812,
                          "end": 813,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                              "value": 2,
                              "raw": "2"
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 818,
                        "end": 827,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 818,
                          "end": 819,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 819,
                          "end": 827,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 821,
                            "end": 827
                          }
                        },
                        "accessibility": null,
                        "static": false
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
      "type": "IfStatement",
      "start": 843,
      "end": 930,
      "test": {
        "type": "BinaryExpression",
        "start": 847,
        "end": 858,
        "left": {
          "type": "ChainExpression",
          "start": 847,
          "end": 852,
          "expression": {
            "type": "MemberExpression",
            "start": 847,
            "end": 852,
            "object": {
              "type": "Identifier",
              "start": 847,
              "end": 849,
              "name": "o3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 851,
              "end": 852,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 857,
          "end": 858,
          "value": 1,
          "raw": "1"
        }
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
            "expression": {
              "type": "Identifier",
              "start": 866,
              "end": 868,
              "name": "o3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 874,
            "end": 879,
            "expression": {
              "type": "MemberExpression",
              "start": 874,
              "end": 878,
              "object": {
                "type": "Identifier",
                "start": 874,
                "end": 876,
                "name": "o3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 877,
                "end": 878,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 884,
            "end": 890,
            "expression": {
              "type": "ChainExpression",
              "start": 884,
              "end": 889,
              "expression": {
                "type": "MemberExpression",
                "start": 884,
                "end": 889,
                "object": {
                  "type": "Identifier",
                  "start": 884,
                  "end": 886,
                  "name": "o3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 888,
                  "end": 889,
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
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 898,
        "end": 930,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 904,
            "end": 907,
            "expression": {
              "type": "Identifier",
              "start": 904,
              "end": 906,
              "name": "o3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 912,
            "end": 918,
            "expression": {
              "type": "ChainExpression",
              "start": 912,
              "end": 917,
              "expression": {
                "type": "MemberExpression",
                "start": 912,
                "end": 917,
                "object": {
                  "type": "Identifier",
                  "start": 912,
                  "end": 914,
                  "name": "o3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 916,
                  "end": 917,
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
            "start": 923,
            "end": 928,
            "expression": {
              "type": "MemberExpression",
              "start": 923,
              "end": 927,
              "object": {
                "type": "Identifier",
                "start": 923,
                "end": 925,
                "name": "o3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 926,
                "end": 927,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 931,
      "end": 934,
      "expression": {
        "type": "Identifier",
        "start": 931,
        "end": 933,
        "name": "o3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 935,
      "end": 941,
      "expression": {
        "type": "ChainExpression",
        "start": 935,
        "end": 940,
        "expression": {
          "type": "MemberExpression",
          "start": 935,
          "end": 940,
          "object": {
            "type": "Identifier",
            "start": 935,
            "end": 937,
            "name": "o3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 939,
            "end": 940,
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
      "start": 942,
      "end": 947,
      "expression": {
        "type": "MemberExpression",
        "start": 942,
        "end": 946,
        "object": {
          "type": "Identifier",
          "start": 942,
          "end": 944,
          "name": "o3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 945,
          "end": 946,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 963,
            "end": 989,
            "name": "o4",
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
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 969,
                      "end": 970,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 975,
                              "end": 976,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 976,
                              "end": 985,
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 978,
                                "end": 985
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
      "type": "IfStatement",
      "start": 991,
      "end": 1120,
      "test": {
        "type": "ChainExpression",
        "start": 995,
        "end": 1002,
        "expression": {
          "type": "MemberExpression",
          "start": 995,
          "end": 1002,
          "object": {
            "type": "MemberExpression",
            "start": 995,
            "end": 999,
            "object": {
              "type": "Identifier",
              "start": 995,
              "end": 997,
              "name": "o4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 998,
              "end": 999,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1001,
            "end": 1002,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": true
        }
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
            "expression": {
              "type": "MemberExpression",
              "start": 1010,
              "end": 1014,
              "object": {
                "type": "Identifier",
                "start": 1010,
                "end": 1012,
                "name": "o4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1013,
                "end": 1014,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1038,
            "end": 1045,
            "expression": {
              "type": "MemberExpression",
              "start": 1038,
              "end": 1044,
              "object": {
                "type": "MemberExpression",
                "start": 1038,
                "end": 1042,
                "object": {
                  "type": "Identifier",
                  "start": 1038,
                  "end": 1040,
                  "name": "o4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1041,
                  "end": 1042,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1043,
                "end": 1044,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1058,
            "end": 1066,
            "expression": {
              "type": "ChainExpression",
              "start": 1058,
              "end": 1065,
              "expression": {
                "type": "MemberExpression",
                "start": 1058,
                "end": 1065,
                "object": {
                  "type": "MemberExpression",
                  "start": 1058,
                  "end": 1062,
                  "object": {
                    "type": "Identifier",
                    "start": 1058,
                    "end": 1060,
                    "name": "o4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1061,
                    "end": 1062,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1064,
                  "end": 1065,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": true
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1082,
        "end": 1120,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1088,
            "end": 1093,
            "expression": {
              "type": "MemberExpression",
              "start": 1088,
              "end": 1092,
              "object": {
                "type": "Identifier",
                "start": 1088,
                "end": 1090,
                "name": "o4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1091,
                "end": 1092,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1098,
            "end": 1106,
            "expression": {
              "type": "ChainExpression",
              "start": 1098,
              "end": 1105,
              "expression": {
                "type": "MemberExpression",
                "start": 1098,
                "end": 1105,
                "object": {
                  "type": "MemberExpression",
                  "start": 1098,
                  "end": 1102,
                  "object": {
                    "type": "Identifier",
                    "start": 1098,
                    "end": 1100,
                    "name": "o4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1101,
                    "end": 1102,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1104,
                  "end": 1105,
                  "name": "y",
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
            "start": 1111,
            "end": 1118,
            "expression": {
              "type": "MemberExpression",
              "start": 1111,
              "end": 1117,
              "object": {
                "type": "MemberExpression",
                "start": 1111,
                "end": 1115,
                "object": {
                  "type": "Identifier",
                  "start": 1111,
                  "end": 1113,
                  "name": "o4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1114,
                  "end": 1115,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1116,
                "end": 1117,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1121,
      "end": 1126,
      "expression": {
        "type": "MemberExpression",
        "start": 1121,
        "end": 1125,
        "object": {
          "type": "Identifier",
          "start": 1121,
          "end": 1123,
          "name": "o4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1124,
          "end": 1125,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1127,
      "end": 1135,
      "expression": {
        "type": "ChainExpression",
        "start": 1127,
        "end": 1134,
        "expression": {
          "type": "MemberExpression",
          "start": 1127,
          "end": 1134,
          "object": {
            "type": "MemberExpression",
            "start": 1127,
            "end": 1131,
            "object": {
              "type": "Identifier",
              "start": 1127,
              "end": 1129,
              "name": "o4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1130,
              "end": 1131,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1133,
            "end": 1134,
            "name": "y",
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
      "start": 1136,
      "end": 1143,
      "expression": {
        "type": "MemberExpression",
        "start": 1136,
        "end": 1142,
        "object": {
          "type": "MemberExpression",
          "start": 1136,
          "end": 1140,
          "object": {
            "type": "Identifier",
            "start": 1136,
            "end": 1138,
            "name": "o4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1139,
            "end": 1140,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1141,
          "end": 1142,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 1159,
            "end": 1200,
            "name": "o5",
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
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1165,
                      "end": 1166,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1171,
                              "end": 1172,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                    "computed": false,
                                    "optional": true,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1176,
                                      "end": 1177,
                                      "name": "z",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
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
                                            "computed": false,
                                            "optional": false,
                                            "readonly": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 1182,
                                              "end": 1183,
                                              "name": "w",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1183,
                                              "end": 1192,
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1185,
                                                "end": 1192
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
      "type": "IfStatement",
      "start": 1202,
      "end": 1452,
      "test": {
        "type": "ChainExpression",
        "start": 1206,
        "end": 1218,
        "expression": {
          "type": "MemberExpression",
          "start": 1206,
          "end": 1218,
          "object": {
            "type": "MemberExpression",
            "start": 1206,
            "end": 1215,
            "object": {
              "type": "MemberExpression",
              "start": 1206,
              "end": 1213,
              "object": {
                "type": "MemberExpression",
                "start": 1206,
                "end": 1210,
                "object": {
                  "type": "Identifier",
                  "start": 1206,
                  "end": 1208,
                  "name": "o5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1209,
                  "end": 1210,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1212,
                "end": 1213,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": true
            },
            "property": {
              "type": "Identifier",
              "start": 1214,
              "end": 1215,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1217,
            "end": 1218,
            "name": "w",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": true
        }
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
            "expression": {
              "type": "MemberExpression",
              "start": 1226,
              "end": 1230,
              "object": {
                "type": "Identifier",
                "start": 1226,
                "end": 1228,
                "name": "o5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1229,
                "end": 1230,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1236,
            "end": 1243,
            "expression": {
              "type": "MemberExpression",
              "start": 1236,
              "end": 1242,
              "object": {
                "type": "MemberExpression",
                "start": 1236,
                "end": 1240,
                "object": {
                  "type": "Identifier",
                  "start": 1236,
                  "end": 1238,
                  "name": "o5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1239,
                  "end": 1240,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1241,
                "end": 1242,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1248,
            "end": 1257,
            "expression": {
              "type": "MemberExpression",
              "start": 1248,
              "end": 1256,
              "object": {
                "type": "MemberExpression",
                "start": 1248,
                "end": 1254,
                "object": {
                  "type": "MemberExpression",
                  "start": 1248,
                  "end": 1252,
                  "object": {
                    "type": "Identifier",
                    "start": 1248,
                    "end": 1250,
                    "name": "o5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1251,
                    "end": 1252,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1253,
                  "end": 1254,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1255,
                "end": 1256,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1262,
            "end": 1273,
            "expression": {
              "type": "MemberExpression",
              "start": 1262,
              "end": 1272,
              "object": {
                "type": "MemberExpression",
                "start": 1262,
                "end": 1270,
                "object": {
                  "type": "MemberExpression",
                  "start": 1262,
                  "end": 1268,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1262,
                    "end": 1266,
                    "object": {
                      "type": "Identifier",
                      "start": 1262,
                      "end": 1264,
                      "name": "o5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1265,
                      "end": 1266,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1267,
                    "end": 1268,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1269,
                  "end": 1270,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1271,
                "end": 1272,
                "name": "w",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1286,
            "end": 1298,
            "expression": {
              "type": "ChainExpression",
              "start": 1286,
              "end": 1297,
              "expression": {
                "type": "MemberExpression",
                "start": 1286,
                "end": 1297,
                "object": {
                  "type": "MemberExpression",
                  "start": 1286,
                  "end": 1294,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1286,
                    "end": 1292,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1286,
                      "end": 1290,
                      "object": {
                        "type": "Identifier",
                        "start": 1286,
                        "end": 1288,
                        "name": "o5",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1289,
                        "end": 1290,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1291,
                      "end": 1292,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1293,
                    "end": 1294,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1296,
                  "end": 1297,
                  "name": "w",
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
            "start": 1311,
            "end": 1323,
            "expression": {
              "type": "ChainExpression",
              "start": 1311,
              "end": 1322,
              "expression": {
                "type": "MemberExpression",
                "start": 1311,
                "end": 1322,
                "object": {
                  "type": "MemberExpression",
                  "start": 1311,
                  "end": 1320,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1311,
                    "end": 1318,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1311,
                      "end": 1315,
                      "object": {
                        "type": "Identifier",
                        "start": 1311,
                        "end": 1313,
                        "name": "o5",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1314,
                        "end": 1315,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1317,
                      "end": 1318,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1319,
                    "end": 1320,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1321,
                  "end": 1322,
                  "name": "w",
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
            "start": 1336,
            "end": 1349,
            "expression": {
              "type": "ChainExpression",
              "start": 1336,
              "end": 1348,
              "expression": {
                "type": "MemberExpression",
                "start": 1336,
                "end": 1348,
                "object": {
                  "type": "MemberExpression",
                  "start": 1336,
                  "end": 1345,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1336,
                    "end": 1343,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1336,
                      "end": 1340,
                      "object": {
                        "type": "Identifier",
                        "start": 1336,
                        "end": 1338,
                        "name": "o5",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1339,
                        "end": 1340,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1342,
                      "end": 1343,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1344,
                    "end": 1345,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1347,
                  "end": 1348,
                  "name": "w",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": true
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1365,
        "end": 1452,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1371,
            "end": 1376,
            "expression": {
              "type": "MemberExpression",
              "start": 1371,
              "end": 1375,
              "object": {
                "type": "Identifier",
                "start": 1371,
                "end": 1373,
                "name": "o5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1374,
                "end": 1375,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1381,
            "end": 1389,
            "expression": {
              "type": "ChainExpression",
              "start": 1381,
              "end": 1388,
              "expression": {
                "type": "MemberExpression",
                "start": 1381,
                "end": 1388,
                "object": {
                  "type": "MemberExpression",
                  "start": 1381,
                  "end": 1385,
                  "object": {
                    "type": "Identifier",
                    "start": 1381,
                    "end": 1383,
                    "name": "o5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1384,
                    "end": 1385,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1387,
                  "end": 1388,
                  "name": "y",
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
            "start": 1394,
            "end": 1404,
            "expression": {
              "type": "ChainExpression",
              "start": 1394,
              "end": 1403,
              "expression": {
                "type": "MemberExpression",
                "start": 1394,
                "end": 1403,
                "object": {
                  "type": "MemberExpression",
                  "start": 1394,
                  "end": 1401,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1394,
                    "end": 1398,
                    "object": {
                      "type": "Identifier",
                      "start": 1394,
                      "end": 1396,
                      "name": "o5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1397,
                      "end": 1398,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1400,
                    "end": 1401,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                },
                "property": {
                  "type": "Identifier",
                  "start": 1402,
                  "end": 1403,
                  "name": "z",
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
            "start": 1409,
            "end": 1422,
            "expression": {
              "type": "ChainExpression",
              "start": 1409,
              "end": 1421,
              "expression": {
                "type": "MemberExpression",
                "start": 1409,
                "end": 1421,
                "object": {
                  "type": "MemberExpression",
                  "start": 1409,
                  "end": 1418,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1409,
                    "end": 1416,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1409,
                      "end": 1413,
                      "object": {
                        "type": "Identifier",
                        "start": 1409,
                        "end": 1411,
                        "name": "o5",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1412,
                        "end": 1413,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1415,
                      "end": 1416,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1417,
                    "end": 1418,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1420,
                  "end": 1421,
                  "name": "w",
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
            "start": 1427,
            "end": 1434,
            "expression": {
              "type": "MemberExpression",
              "start": 1427,
              "end": 1433,
              "object": {
                "type": "MemberExpression",
                "start": 1427,
                "end": 1431,
                "object": {
                  "type": "Identifier",
                  "start": 1427,
                  "end": 1429,
                  "name": "o5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1430,
                  "end": 1431,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1432,
                "end": 1433,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1439,
            "end": 1450,
            "expression": {
              "type": "MemberExpression",
              "start": 1439,
              "end": 1449,
              "object": {
                "type": "MemberExpression",
                "start": 1439,
                "end": 1447,
                "object": {
                  "type": "MemberExpression",
                  "start": 1439,
                  "end": 1445,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1439,
                    "end": 1443,
                    "object": {
                      "type": "Identifier",
                      "start": 1439,
                      "end": 1441,
                      "name": "o5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1442,
                      "end": 1443,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1444,
                    "end": 1445,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1446,
                  "end": 1447,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1448,
                "end": 1449,
                "name": "w",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1453,
      "end": 1458,
      "expression": {
        "type": "MemberExpression",
        "start": 1453,
        "end": 1457,
        "object": {
          "type": "Identifier",
          "start": 1453,
          "end": 1455,
          "name": "o5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1456,
          "end": 1457,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1459,
      "end": 1467,
      "expression": {
        "type": "ChainExpression",
        "start": 1459,
        "end": 1466,
        "expression": {
          "type": "MemberExpression",
          "start": 1459,
          "end": 1466,
          "object": {
            "type": "MemberExpression",
            "start": 1459,
            "end": 1463,
            "object": {
              "type": "Identifier",
              "start": 1459,
              "end": 1461,
              "name": "o5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1462,
              "end": 1463,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1465,
            "end": 1466,
            "name": "y",
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
      "start": 1468,
      "end": 1478,
      "expression": {
        "type": "ChainExpression",
        "start": 1468,
        "end": 1477,
        "expression": {
          "type": "MemberExpression",
          "start": 1468,
          "end": 1477,
          "object": {
            "type": "MemberExpression",
            "start": 1468,
            "end": 1475,
            "object": {
              "type": "MemberExpression",
              "start": 1468,
              "end": 1472,
              "object": {
                "type": "Identifier",
                "start": 1468,
                "end": 1470,
                "name": "o5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1471,
                "end": 1472,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1474,
              "end": 1475,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
          },
          "property": {
            "type": "Identifier",
            "start": 1476,
            "end": 1477,
            "name": "z",
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
      "start": 1479,
      "end": 1492,
      "expression": {
        "type": "ChainExpression",
        "start": 1479,
        "end": 1491,
        "expression": {
          "type": "MemberExpression",
          "start": 1479,
          "end": 1491,
          "object": {
            "type": "MemberExpression",
            "start": 1479,
            "end": 1488,
            "object": {
              "type": "MemberExpression",
              "start": 1479,
              "end": 1486,
              "object": {
                "type": "MemberExpression",
                "start": 1479,
                "end": 1483,
                "object": {
                  "type": "Identifier",
                  "start": 1479,
                  "end": 1481,
                  "name": "o5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1482,
                  "end": 1483,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1485,
                "end": 1486,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": true
            },
            "property": {
              "type": "Identifier",
              "start": 1487,
              "end": 1488,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1490,
            "end": 1491,
            "name": "w",
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
      "start": 1493,
      "end": 1500,
      "expression": {
        "type": "MemberExpression",
        "start": 1493,
        "end": 1499,
        "object": {
          "type": "MemberExpression",
          "start": 1493,
          "end": 1497,
          "object": {
            "type": "Identifier",
            "start": 1493,
            "end": 1495,
            "name": "o5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1496,
            "end": 1497,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1498,
          "end": 1499,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1501,
      "end": 1512,
      "expression": {
        "type": "MemberExpression",
        "start": 1501,
        "end": 1511,
        "object": {
          "type": "MemberExpression",
          "start": 1501,
          "end": 1509,
          "object": {
            "type": "MemberExpression",
            "start": 1501,
            "end": 1507,
            "object": {
              "type": "MemberExpression",
              "start": 1501,
              "end": 1505,
              "object": {
                "type": "Identifier",
                "start": 1501,
                "end": 1503,
                "name": "o5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1504,
                "end": 1505,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1506,
              "end": 1507,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1508,
            "end": 1509,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1510,
          "end": 1511,
          "name": "w",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1514,
      "end": 1558,
      "id": {
        "type": "Identifier",
        "start": 1524,
        "end": 1528,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1529,
        "end": 1558,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1535,
            "end": 1556,
            "key": {
              "type": "Identifier",
              "start": 1535,
              "end": 1536,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1538,
              "end": 1555,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 1540,
                "end": 1555,
                "parameterName": {
                  "type": "TSThisType",
                  "start": 1540,
                  "end": 1544
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1548,
                  "end": 1555,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1548,
                    "end": 1555,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1548,
                      "end": 1555,
                      "name": "Derived",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
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
      "start": 1560,
      "end": 1609,
      "id": {
        "type": "Identifier",
        "start": 1570,
        "end": 1577,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1586,
          "end": 1590,
          "expression": {
            "type": "Identifier",
            "start": 1586,
            "end": 1590,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1591,
        "end": 1609,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1597,
            "end": 1607,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1597,
              "end": 1598,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1598,
              "end": 1606,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1600,
                "end": 1606
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1625,
            "end": 1645,
            "name": "o6",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 1629,
                      "end": 1633,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1636,
                    "end": 1645
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
      "type": "IfStatement",
      "start": 1647,
      "end": 1730,
      "test": {
        "type": "ChainExpression",
        "start": 1651,
        "end": 1658,
        "expression": {
          "type": "CallExpression",
          "start": 1651,
          "end": 1658,
          "callee": {
            "type": "MemberExpression",
            "start": 1651,
            "end": 1656,
            "object": {
              "type": "Identifier",
              "start": 1651,
              "end": 1653,
              "name": "o6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1655,
              "end": 1656,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
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
            "expression": {
              "type": "Identifier",
              "start": 1666,
              "end": 1668,
              "name": "o6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1685,
            "end": 1690,
            "expression": {
              "type": "MemberExpression",
              "start": 1685,
              "end": 1689,
              "object": {
                "type": "Identifier",
                "start": 1685,
                "end": 1687,
                "name": "o6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1688,
                "end": 1689,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1698,
        "end": 1730,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1704,
            "end": 1707,
            "expression": {
              "type": "Identifier",
              "start": 1704,
              "end": 1706,
              "name": "o6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1712,
            "end": 1718,
            "expression": {
              "type": "ChainExpression",
              "start": 1712,
              "end": 1717,
              "expression": {
                "type": "MemberExpression",
                "start": 1712,
                "end": 1717,
                "object": {
                  "type": "Identifier",
                  "start": 1712,
                  "end": 1714,
                  "name": "o6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1716,
                  "end": 1717,
                  "name": "f",
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
            "start": 1723,
            "end": 1728,
            "expression": {
              "type": "MemberExpression",
              "start": 1723,
              "end": 1727,
              "object": {
                "type": "Identifier",
                "start": 1723,
                "end": 1725,
                "name": "o6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1726,
                "end": 1727,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1731,
      "end": 1734,
      "expression": {
        "type": "Identifier",
        "start": 1731,
        "end": 1733,
        "name": "o6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1735,
      "end": 1741,
      "expression": {
        "type": "ChainExpression",
        "start": 1735,
        "end": 1740,
        "expression": {
          "type": "MemberExpression",
          "start": 1735,
          "end": 1740,
          "object": {
            "type": "Identifier",
            "start": 1735,
            "end": 1737,
            "name": "o6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1739,
            "end": 1740,
            "name": "f",
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
      "start": 1742,
      "end": 1747,
      "expression": {
        "type": "MemberExpression",
        "start": 1742,
        "end": 1746,
        "object": {
          "type": "Identifier",
          "start": 1742,
          "end": 1744,
          "name": "o6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1745,
          "end": 1746,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 1774,
            "end": 1833,
            "name": "isDefined",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1783,
              "end": 1833,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1785,
                "end": 1833,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1785,
                  "end": 1788,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1786,
                      "end": 1787,
                      "name": {
                        "type": "Identifier",
                        "start": 1786,
                        "end": 1787,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1789,
                    "end": 1797,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1794,
                      "end": 1797,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1796,
                        "end": 1797,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1796,
                          "end": 1797,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1799,
                  "end": 1833,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 1802,
                    "end": 1833,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 1810,
                      "end": 1815,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "asserts": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1819,
                      "end": 1833,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1819,
                        "end": 1833,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1819,
                          "end": 1830,
                          "name": "NonNullable",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1830,
                          "end": 1833,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1831,
                              "end": 1832,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1831,
                                "end": 1832,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
      "type": "VariableDeclaration",
      "start": 1835,
      "end": 1903,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1849,
          "end": 1902,
          "id": {
            "type": "Identifier",
            "start": 1849,
            "end": 1902,
            "name": "isString",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1857,
              "end": 1902,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1859,
                "end": 1902,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1860,
                    "end": 1874,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1865,
                      "end": 1874,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 1867,
                        "end": 1874
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "parameterName": {
                      "type": "Identifier",
                      "start": 1887,
                      "end": 1892,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "asserts": true,
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
      "type": "VariableDeclaration",
      "start": 1904,
      "end": 1991,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1918,
          "end": 1990,
          "id": {
            "type": "Identifier",
            "start": 1918,
            "end": 1990,
            "name": "maybeIsString",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1947,
                        "end": 1961,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1952,
                          "end": 1961,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 1954,
                            "end": 1961
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                        "parameterName": {
                          "type": "Identifier",
                          "start": 1974,
                          "end": 1979,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "asserts": true,
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
                    }
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
      "type": "VariableDeclaration",
      "start": 1992,
      "end": 2044,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2006,
          "end": 2043,
          "id": {
            "type": "Identifier",
            "start": 2006,
            "end": 2043,
            "name": "maybeNever",
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
                    "typeParameters": null,
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
                    }
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
      "type": "FunctionDeclaration",
      "start": 2046,
      "end": 2351,
      "id": {
        "type": "Identifier",
        "start": 2055,
        "end": 2058,
        "name": "f01",
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
          "start": 2059,
          "end": 2069,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2060,
            "end": 2069,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 2062,
              "end": 2069
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2071,
        "end": 2351,
        "body": [
          {
            "type": "IfStatement",
            "start": 2077,
            "end": 2130,
            "test": {
              "type": "UnaryExpression",
              "start": 2081,
              "end": 2087,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 2082,
                "end": 2087,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 2083,
                  "end": 2087,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2089,
              "end": 2130,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2099,
                  "end": 2113,
                  "expression": {
                    "type": "ChainExpression",
                    "start": 2099,
                    "end": 2112,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2099,
                      "end": 2112,
                      "callee": {
                        "type": "Identifier",
                        "start": 2099,
                        "end": 2107,
                        "name": "isString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2110,
                          "end": 2111,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": true,
                      "typeArguments": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2122,
                  "end": 2124,
                  "expression": {
                    "type": "Identifier",
                    "start": 2122,
                    "end": 2123,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2135,
            "end": 2193,
            "test": {
              "type": "UnaryExpression",
              "start": 2139,
              "end": 2145,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 2140,
                "end": 2145,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 2141,
                  "end": 2145,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2147,
              "end": 2193,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2157,
                  "end": 2176,
                  "expression": {
                    "type": "ChainExpression",
                    "start": 2157,
                    "end": 2175,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2157,
                      "end": 2175,
                      "callee": {
                        "type": "Identifier",
                        "start": 2157,
                        "end": 2170,
                        "name": "maybeIsString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2173,
                          "end": 2174,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": true,
                      "typeArguments": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2185,
                  "end": 2187,
                  "expression": {
                    "type": "Identifier",
                    "start": 2185,
                    "end": 2186,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2198,
            "end": 2290,
            "test": {
              "type": "UnaryExpression",
              "start": 2202,
              "end": 2208,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 2203,
                "end": 2208,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 2204,
                  "end": 2208,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2210,
              "end": 2290,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2220,
                  "end": 2245,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2220,
                    "end": 2244,
                    "callee": {
                      "type": "Identifier",
                      "start": 2220,
                      "end": 2229,
                      "name": "isDefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2230,
                        "end": 2243,
                        "name": "maybeIsString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2254,
                  "end": 2273,
                  "expression": {
                    "type": "ChainExpression",
                    "start": 2254,
                    "end": 2272,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2254,
                      "end": 2272,
                      "callee": {
                        "type": "Identifier",
                        "start": 2254,
                        "end": 2267,
                        "name": "maybeIsString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2270,
                          "end": 2271,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": true,
                      "typeArguments": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2282,
                  "end": 2284,
                  "expression": {
                    "type": "Identifier",
                    "start": 2282,
                    "end": 2283,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2295,
            "end": 2349,
            "test": {
              "type": "UnaryExpression",
              "start": 2299,
              "end": 2305,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 2300,
                "end": 2305,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 2301,
                  "end": 2305,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2307,
              "end": 2349,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2317,
                  "end": 2332,
                  "expression": {
                    "type": "ChainExpression",
                    "start": 2317,
                    "end": 2331,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2317,
                      "end": 2331,
                      "callee": {
                        "type": "Identifier",
                        "start": 2317,
                        "end": 2327,
                        "name": "maybeNever",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": true,
                      "typeArguments": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2341,
                  "end": 2343,
                  "expression": {
                    "type": "Identifier",
                    "start": 2341,
                    "end": 2342,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2353,
      "end": 2419,
      "id": {
        "type": "Identifier",
        "start": 2358,
        "end": 2363,
        "name": "Thing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2366,
        "end": 2418,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2368,
            "end": 2389,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2368,
              "end": 2371,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 2390,
            "end": 2404,
            "key": {
              "type": "Identifier",
              "start": 2390,
              "end": 2393,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2405,
            "end": 2416,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2405,
              "end": 2408,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2408,
              "end": 2416,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 2410,
                "end": 2416
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2421,
      "end": 2783,
      "id": {
        "type": "Identifier",
        "start": 2430,
        "end": 2433,
        "name": "f10",
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
          "start": 2434,
          "end": 2454,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 2437,
                    "end": 2442,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 2445,
                  "end": 2454
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 2456,
          "end": 2469,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2461,
            "end": 2469,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2463,
              "end": 2469
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2471,
        "end": 2783,
        "body": [
          {
            "type": "IfStatement",
            "start": 2477,
            "end": 2521,
            "test": {
              "type": "BinaryExpression",
              "start": 2481,
              "end": 2497,
              "left": {
                "type": "ChainExpression",
                "start": 2481,
                "end": 2487,
                "expression": {
                  "type": "MemberExpression",
                  "start": 2481,
                  "end": 2487,
                  "object": {
                    "type": "Identifier",
                    "start": 2481,
                    "end": 2482,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2484,
                    "end": 2487,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2492,
                "end": 2497,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2499,
              "end": 2521,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2509,
                  "end": 2515,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2509,
                    "end": 2514,
                    "object": {
                      "type": "Identifier",
                      "start": 2509,
                      "end": 2510,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2511,
                      "end": 2514,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2526,
            "end": 2577,
            "test": {
              "type": "BinaryExpression",
              "start": 2530,
              "end": 2550,
              "left": {
                "type": "ChainExpression",
                "start": 2530,
                "end": 2540,
                "expression": {
                  "type": "MemberExpression",
                  "start": 2530,
                  "end": 2540,
                  "object": {
                    "type": "Identifier",
                    "start": 2530,
                    "end": 2531,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 2534,
                    "end": 2539,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "computed": true,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2545,
                "end": 2550,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2552,
              "end": 2577,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2562,
                  "end": 2571,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2562,
                    "end": 2570,
                    "object": {
                      "type": "Identifier",
                      "start": 2562,
                      "end": 2563,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 2564,
                      "end": 2569,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2582,
            "end": 2628,
            "test": {
              "type": "BinaryExpression",
              "start": 2586,
              "end": 2604,
              "left": {
                "type": "ChainExpression",
                "start": 2586,
                "end": 2594,
                "expression": {
                  "type": "CallExpression",
                  "start": 2586,
                  "end": 2594,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2586,
                    "end": 2592,
                    "object": {
                      "type": "Identifier",
                      "start": 2586,
                      "end": 2587,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2589,
                      "end": 2592,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2599,
                "end": 2604,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2606,
              "end": 2628,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2616,
                  "end": 2622,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2616,
                    "end": 2621,
                    "object": {
                      "type": "Identifier",
                      "start": 2616,
                      "end": 2617,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2618,
                      "end": 2621,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2633,
            "end": 2676,
            "test": {
              "type": "BinaryExpression",
              "start": 2637,
              "end": 2652,
              "left": {
                "type": "ChainExpression",
                "start": 2637,
                "end": 2643,
                "expression": {
                  "type": "MemberExpression",
                  "start": 2637,
                  "end": 2643,
                  "object": {
                    "type": "Identifier",
                    "start": 2637,
                    "end": 2638,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2640,
                    "end": 2643,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 2647,
                "end": 2652,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2654,
              "end": 2676,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2664,
                  "end": 2670,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2664,
                    "end": 2669,
                    "object": {
                      "type": "Identifier",
                      "start": 2664,
                      "end": 2665,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2666,
                      "end": 2669,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2681,
            "end": 2731,
            "test": {
              "type": "BinaryExpression",
              "start": 2685,
              "end": 2704,
              "left": {
                "type": "ChainExpression",
                "start": 2685,
                "end": 2695,
                "expression": {
                  "type": "MemberExpression",
                  "start": 2685,
                  "end": 2695,
                  "object": {
                    "type": "Identifier",
                    "start": 2685,
                    "end": 2686,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 2689,
                    "end": 2694,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "computed": true,
                  "optional": true
                }
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 2699,
                "end": 2704,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2706,
              "end": 2731,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2716,
                  "end": 2725,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2716,
                    "end": 2724,
                    "object": {
                      "type": "Identifier",
                      "start": 2716,
                      "end": 2717,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 2718,
                      "end": 2723,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2736,
            "end": 2781,
            "test": {
              "type": "BinaryExpression",
              "start": 2740,
              "end": 2757,
              "left": {
                "type": "ChainExpression",
                "start": 2740,
                "end": 2748,
                "expression": {
                  "type": "CallExpression",
                  "start": 2740,
                  "end": 2748,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2740,
                    "end": 2746,
                    "object": {
                      "type": "Identifier",
                      "start": 2740,
                      "end": 2741,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2743,
                      "end": 2746,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 2752,
                "end": 2757,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2759,
              "end": 2781,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2769,
                  "end": 2775,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2769,
                    "end": 2774,
                    "object": {
                      "type": "Identifier",
                      "start": 2769,
                      "end": 2770,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2771,
                      "end": 2774,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2785,
      "end": 3142,
      "id": {
        "type": "Identifier",
        "start": 2794,
        "end": 2797,
        "name": "f11",
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
          "start": 2798,
          "end": 2813,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 2801,
                    "end": 2806,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNullKeyword",
                  "start": 2809,
                  "end": 2813
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 2815,
          "end": 2828,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2820,
            "end": 2828,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2822,
              "end": 2828
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2830,
        "end": 3142,
        "body": [
          {
            "type": "IfStatement",
            "start": 2836,
            "end": 2880,
            "test": {
              "type": "BinaryExpression",
              "start": 2840,
              "end": 2856,
              "left": {
                "type": "ChainExpression",
                "start": 2840,
                "end": 2846,
                "expression": {
                  "type": "MemberExpression",
                  "start": 2840,
                  "end": 2846,
                  "object": {
                    "type": "Identifier",
                    "start": 2840,
                    "end": 2841,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2843,
                    "end": 2846,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2851,
                "end": 2856,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2858,
              "end": 2880,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2868,
                  "end": 2874,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2868,
                    "end": 2873,
                    "object": {
                      "type": "Identifier",
                      "start": 2868,
                      "end": 2869,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2870,
                      "end": 2873,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2885,
            "end": 2936,
            "test": {
              "type": "BinaryExpression",
              "start": 2889,
              "end": 2909,
              "left": {
                "type": "ChainExpression",
                "start": 2889,
                "end": 2899,
                "expression": {
                  "type": "MemberExpression",
                  "start": 2889,
                  "end": 2899,
                  "object": {
                    "type": "Identifier",
                    "start": 2889,
                    "end": 2890,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 2893,
                    "end": 2898,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "computed": true,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2904,
                "end": 2909,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2911,
              "end": 2936,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2921,
                  "end": 2930,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2921,
                    "end": 2929,
                    "object": {
                      "type": "Identifier",
                      "start": 2921,
                      "end": 2922,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 2923,
                      "end": 2928,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2941,
            "end": 2987,
            "test": {
              "type": "BinaryExpression",
              "start": 2945,
              "end": 2963,
              "left": {
                "type": "ChainExpression",
                "start": 2945,
                "end": 2953,
                "expression": {
                  "type": "CallExpression",
                  "start": 2945,
                  "end": 2953,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2945,
                    "end": 2951,
                    "object": {
                      "type": "Identifier",
                      "start": 2945,
                      "end": 2946,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2948,
                      "end": 2951,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2958,
                "end": 2963,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2965,
              "end": 2987,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2975,
                  "end": 2981,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2975,
                    "end": 2980,
                    "object": {
                      "type": "Identifier",
                      "start": 2975,
                      "end": 2976,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2977,
                      "end": 2980,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2992,
            "end": 3035,
            "test": {
              "type": "BinaryExpression",
              "start": 2996,
              "end": 3011,
              "left": {
                "type": "ChainExpression",
                "start": 2996,
                "end": 3002,
                "expression": {
                  "type": "MemberExpression",
                  "start": 2996,
                  "end": 3002,
                  "object": {
                    "type": "Identifier",
                    "start": 2996,
                    "end": 2997,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2999,
                    "end": 3002,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 3006,
                "end": 3011,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3013,
              "end": 3035,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3023,
                  "end": 3029,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3023,
                    "end": 3028,
                    "object": {
                      "type": "Identifier",
                      "start": 3023,
                      "end": 3024,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3025,
                      "end": 3028,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3040,
            "end": 3090,
            "test": {
              "type": "BinaryExpression",
              "start": 3044,
              "end": 3063,
              "left": {
                "type": "ChainExpression",
                "start": 3044,
                "end": 3054,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3044,
                  "end": 3054,
                  "object": {
                    "type": "Identifier",
                    "start": 3044,
                    "end": 3045,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 3048,
                    "end": 3053,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "computed": true,
                  "optional": true
                }
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 3058,
                "end": 3063,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3065,
              "end": 3090,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3075,
                  "end": 3084,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3075,
                    "end": 3083,
                    "object": {
                      "type": "Identifier",
                      "start": 3075,
                      "end": 3076,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 3077,
                      "end": 3082,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3095,
            "end": 3140,
            "test": {
              "type": "BinaryExpression",
              "start": 3099,
              "end": 3116,
              "left": {
                "type": "ChainExpression",
                "start": 3099,
                "end": 3107,
                "expression": {
                  "type": "CallExpression",
                  "start": 3099,
                  "end": 3107,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3099,
                    "end": 3105,
                    "object": {
                      "type": "Identifier",
                      "start": 3099,
                      "end": 3100,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3102,
                      "end": 3105,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 3111,
                "end": 3116,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3118,
              "end": 3140,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3128,
                  "end": 3134,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3128,
                    "end": 3133,
                    "object": {
                      "type": "Identifier",
                      "start": 3128,
                      "end": 3129,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3130,
                      "end": 3133,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3144,
      "end": 3578,
      "id": {
        "type": "Identifier",
        "start": 3153,
        "end": 3156,
        "name": "f12",
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
          "start": 3157,
          "end": 3177,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 3160,
                    "end": 3165,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3168,
                  "end": 3177
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3179,
          "end": 3204,
          "name": "value",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3206,
        "end": 3578,
        "body": [
          {
            "type": "IfStatement",
            "start": 3212,
            "end": 3266,
            "test": {
              "type": "BinaryExpression",
              "start": 3216,
              "end": 3232,
              "left": {
                "type": "ChainExpression",
                "start": 3216,
                "end": 3222,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3216,
                  "end": 3222,
                  "object": {
                    "type": "Identifier",
                    "start": 3216,
                    "end": 3217,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3219,
                    "end": 3222,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3227,
                "end": 3232,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3234,
              "end": 3266,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3244,
                  "end": 3250,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3244,
                    "end": 3249,
                    "object": {
                      "type": "Identifier",
                      "start": 3244,
                      "end": 3245,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3246,
                      "end": 3249,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3271,
            "end": 3332,
            "test": {
              "type": "BinaryExpression",
              "start": 3275,
              "end": 3295,
              "left": {
                "type": "ChainExpression",
                "start": 3275,
                "end": 3285,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3275,
                  "end": 3285,
                  "object": {
                    "type": "Identifier",
                    "start": 3275,
                    "end": 3276,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 3279,
                    "end": 3284,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "computed": true,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3290,
                "end": 3295,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3297,
              "end": 3332,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3307,
                  "end": 3316,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3307,
                    "end": 3315,
                    "object": {
                      "type": "Identifier",
                      "start": 3307,
                      "end": 3308,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 3309,
                      "end": 3314,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3337,
            "end": 3393,
            "test": {
              "type": "BinaryExpression",
              "start": 3341,
              "end": 3359,
              "left": {
                "type": "ChainExpression",
                "start": 3341,
                "end": 3349,
                "expression": {
                  "type": "CallExpression",
                  "start": 3341,
                  "end": 3349,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3341,
                    "end": 3347,
                    "object": {
                      "type": "Identifier",
                      "start": 3341,
                      "end": 3342,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3344,
                      "end": 3347,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3354,
                "end": 3359,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3361,
              "end": 3393,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3371,
                  "end": 3377,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3371,
                    "end": 3376,
                    "object": {
                      "type": "Identifier",
                      "start": 3371,
                      "end": 3372,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3373,
                      "end": 3376,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3398,
            "end": 3451,
            "test": {
              "type": "BinaryExpression",
              "start": 3402,
              "end": 3417,
              "left": {
                "type": "ChainExpression",
                "start": 3402,
                "end": 3408,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3402,
                  "end": 3408,
                  "object": {
                    "type": "Identifier",
                    "start": 3402,
                    "end": 3403,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3405,
                    "end": 3408,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 3412,
                "end": 3417,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3419,
              "end": 3451,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3429,
                  "end": 3435,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3429,
                    "end": 3434,
                    "object": {
                      "type": "Identifier",
                      "start": 3429,
                      "end": 3430,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3431,
                      "end": 3434,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3456,
            "end": 3516,
            "test": {
              "type": "BinaryExpression",
              "start": 3460,
              "end": 3479,
              "left": {
                "type": "ChainExpression",
                "start": 3460,
                "end": 3470,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3460,
                  "end": 3470,
                  "object": {
                    "type": "Identifier",
                    "start": 3460,
                    "end": 3461,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 3464,
                    "end": 3469,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "computed": true,
                  "optional": true
                }
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 3474,
                "end": 3479,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3481,
              "end": 3516,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3491,
                  "end": 3500,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3491,
                    "end": 3499,
                    "object": {
                      "type": "Identifier",
                      "start": 3491,
                      "end": 3492,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 3493,
                      "end": 3498,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3521,
            "end": 3576,
            "test": {
              "type": "BinaryExpression",
              "start": 3525,
              "end": 3542,
              "left": {
                "type": "ChainExpression",
                "start": 3525,
                "end": 3533,
                "expression": {
                  "type": "CallExpression",
                  "start": 3525,
                  "end": 3533,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3525,
                    "end": 3531,
                    "object": {
                      "type": "Identifier",
                      "start": 3525,
                      "end": 3526,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3528,
                      "end": 3531,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 3537,
                "end": 3542,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3544,
              "end": 3576,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3554,
                  "end": 3560,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3554,
                    "end": 3559,
                    "object": {
                      "type": "Identifier",
                      "start": 3554,
                      "end": 3555,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3556,
                      "end": 3559,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3580,
      "end": 3980,
      "id": {
        "type": "Identifier",
        "start": 3589,
        "end": 3593,
        "name": "f12a",
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
          "start": 3594,
          "end": 3614,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 3597,
                    "end": 3602,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3605,
                  "end": 3614
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3616,
          "end": 3636,
          "name": "value",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3638,
        "end": 3980,
        "body": [
          {
            "type": "IfStatement",
            "start": 3644,
            "end": 3688,
            "test": {
              "type": "BinaryExpression",
              "start": 3648,
              "end": 3664,
              "left": {
                "type": "ChainExpression",
                "start": 3648,
                "end": 3654,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3648,
                  "end": 3654,
                  "object": {
                    "type": "Identifier",
                    "start": 3648,
                    "end": 3649,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3651,
                    "end": 3654,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3659,
                "end": 3664,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3666,
              "end": 3688,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3676,
                  "end": 3682,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3676,
                    "end": 3681,
                    "object": {
                      "type": "Identifier",
                      "start": 3676,
                      "end": 3677,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3678,
                      "end": 3681,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3693,
            "end": 3744,
            "test": {
              "type": "BinaryExpression",
              "start": 3697,
              "end": 3717,
              "left": {
                "type": "ChainExpression",
                "start": 3697,
                "end": 3707,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3697,
                  "end": 3707,
                  "object": {
                    "type": "Identifier",
                    "start": 3697,
                    "end": 3698,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 3701,
                    "end": 3706,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "computed": true,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3712,
                "end": 3717,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3719,
              "end": 3744,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3729,
                  "end": 3738,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3729,
                    "end": 3737,
                    "object": {
                      "type": "Identifier",
                      "start": 3729,
                      "end": 3730,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 3731,
                      "end": 3736,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3749,
            "end": 3795,
            "test": {
              "type": "BinaryExpression",
              "start": 3753,
              "end": 3771,
              "left": {
                "type": "ChainExpression",
                "start": 3753,
                "end": 3761,
                "expression": {
                  "type": "CallExpression",
                  "start": 3753,
                  "end": 3761,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3753,
                    "end": 3759,
                    "object": {
                      "type": "Identifier",
                      "start": 3753,
                      "end": 3754,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3756,
                      "end": 3759,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3766,
                "end": 3771,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3773,
              "end": 3795,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3783,
                  "end": 3789,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3783,
                    "end": 3788,
                    "object": {
                      "type": "Identifier",
                      "start": 3783,
                      "end": 3784,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3785,
                      "end": 3788,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3800,
            "end": 3853,
            "test": {
              "type": "BinaryExpression",
              "start": 3804,
              "end": 3819,
              "left": {
                "type": "ChainExpression",
                "start": 3804,
                "end": 3810,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3804,
                  "end": 3810,
                  "object": {
                    "type": "Identifier",
                    "start": 3804,
                    "end": 3805,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3807,
                    "end": 3810,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 3814,
                "end": 3819,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3821,
              "end": 3853,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3831,
                  "end": 3837,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3831,
                    "end": 3836,
                    "object": {
                      "type": "Identifier",
                      "start": 3831,
                      "end": 3832,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3833,
                      "end": 3836,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3858,
            "end": 3918,
            "test": {
              "type": "BinaryExpression",
              "start": 3862,
              "end": 3881,
              "left": {
                "type": "ChainExpression",
                "start": 3862,
                "end": 3872,
                "expression": {
                  "type": "MemberExpression",
                  "start": 3862,
                  "end": 3872,
                  "object": {
                    "type": "Identifier",
                    "start": 3862,
                    "end": 3863,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 3866,
                    "end": 3871,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "computed": true,
                  "optional": true
                }
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 3876,
                "end": 3881,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3883,
              "end": 3918,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3893,
                  "end": 3902,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3893,
                    "end": 3901,
                    "object": {
                      "type": "Identifier",
                      "start": 3893,
                      "end": 3894,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 3895,
                      "end": 3900,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3923,
            "end": 3978,
            "test": {
              "type": "BinaryExpression",
              "start": 3927,
              "end": 3944,
              "left": {
                "type": "ChainExpression",
                "start": 3927,
                "end": 3935,
                "expression": {
                  "type": "CallExpression",
                  "start": 3927,
                  "end": 3935,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3927,
                    "end": 3933,
                    "object": {
                      "type": "Identifier",
                      "start": 3927,
                      "end": 3928,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3930,
                      "end": 3933,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 3939,
                "end": 3944,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3946,
              "end": 3978,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3956,
                  "end": 3962,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3956,
                    "end": 3961,
                    "object": {
                      "type": "Identifier",
                      "start": 3956,
                      "end": 3957,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3958,
                      "end": 3961,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3982,
      "end": 4353,
      "id": {
        "type": "Identifier",
        "start": 3991,
        "end": 3994,
        "name": "f13",
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
          "start": 3995,
          "end": 4015,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 3998,
                    "end": 4003,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 4006,
                  "end": 4015
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 4017,
        "end": 4353,
        "body": [
          {
            "type": "IfStatement",
            "start": 4023,
            "end": 4071,
            "test": {
              "type": "BinaryExpression",
              "start": 4027,
              "end": 4047,
              "left": {
                "type": "ChainExpression",
                "start": 4027,
                "end": 4033,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4027,
                  "end": 4033,
                  "object": {
                    "type": "Identifier",
                    "start": 4027,
                    "end": 4028,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4030,
                    "end": 4033,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 4038,
                "end": 4047,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4049,
              "end": 4071,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4059,
                  "end": 4065,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4059,
                    "end": 4064,
                    "object": {
                      "type": "Identifier",
                      "start": 4059,
                      "end": 4060,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4061,
                      "end": 4064,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 4076,
            "end": 4131,
            "test": {
              "type": "BinaryExpression",
              "start": 4080,
              "end": 4104,
              "left": {
                "type": "ChainExpression",
                "start": 4080,
                "end": 4090,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4080,
                  "end": 4090,
                  "object": {
                    "type": "Identifier",
                    "start": 4080,
                    "end": 4081,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 4084,
                    "end": 4089,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "computed": true,
                  "optional": true
                }
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 4095,
                "end": 4104,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4106,
              "end": 4131,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4116,
                  "end": 4125,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4116,
                    "end": 4124,
                    "object": {
                      "type": "Identifier",
                      "start": 4116,
                      "end": 4117,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 4118,
                      "end": 4123,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 4136,
            "end": 4186,
            "test": {
              "type": "BinaryExpression",
              "start": 4140,
              "end": 4162,
              "left": {
                "type": "ChainExpression",
                "start": 4140,
                "end": 4148,
                "expression": {
                  "type": "CallExpression",
                  "start": 4140,
                  "end": 4148,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4140,
                    "end": 4146,
                    "object": {
                      "type": "Identifier",
                      "start": 4140,
                      "end": 4141,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4143,
                      "end": 4146,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 4153,
                "end": 4162,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4164,
              "end": 4186,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4174,
                  "end": 4180,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4174,
                    "end": 4179,
                    "object": {
                      "type": "Identifier",
                      "start": 4174,
                      "end": 4175,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4176,
                      "end": 4179,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 4191,
            "end": 4238,
            "test": {
              "type": "BinaryExpression",
              "start": 4195,
              "end": 4214,
              "left": {
                "type": "ChainExpression",
                "start": 4195,
                "end": 4201,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4195,
                  "end": 4201,
                  "object": {
                    "type": "Identifier",
                    "start": 4195,
                    "end": 4196,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4198,
                    "end": 4201,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "start": 4205,
                "end": 4214,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4216,
              "end": 4238,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4226,
                  "end": 4232,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4226,
                    "end": 4231,
                    "object": {
                      "type": "Identifier",
                      "start": 4226,
                      "end": 4227,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4228,
                      "end": 4231,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 4243,
            "end": 4297,
            "test": {
              "type": "BinaryExpression",
              "start": 4247,
              "end": 4270,
              "left": {
                "type": "ChainExpression",
                "start": 4247,
                "end": 4257,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4247,
                  "end": 4257,
                  "object": {
                    "type": "Identifier",
                    "start": 4247,
                    "end": 4248,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 4251,
                    "end": 4256,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "computed": true,
                  "optional": true
                }
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "start": 4261,
                "end": 4270,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4272,
              "end": 4297,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4282,
                  "end": 4291,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4282,
                    "end": 4290,
                    "object": {
                      "type": "Identifier",
                      "start": 4282,
                      "end": 4283,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 4284,
                      "end": 4289,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 4302,
            "end": 4351,
            "test": {
              "type": "BinaryExpression",
              "start": 4306,
              "end": 4327,
              "left": {
                "type": "ChainExpression",
                "start": 4306,
                "end": 4314,
                "expression": {
                  "type": "CallExpression",
                  "start": 4306,
                  "end": 4314,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4306,
                    "end": 4312,
                    "object": {
                      "type": "Identifier",
                      "start": 4306,
                      "end": 4307,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4309,
                      "end": 4312,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "start": 4318,
                "end": 4327,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4329,
              "end": 4351,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4339,
                  "end": 4345,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4339,
                    "end": 4344,
                    "object": {
                      "type": "Identifier",
                      "start": 4339,
                      "end": 4340,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4341,
                      "end": 4344,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4355,
      "end": 4727,
      "id": {
        "type": "Identifier",
        "start": 4364,
        "end": 4368,
        "name": "f13a",
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
          "start": 4369,
          "end": 4389,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 4372,
                    "end": 4377,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 4380,
                  "end": 4389
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 4391,
        "end": 4727,
        "body": [
          {
            "type": "IfStatement",
            "start": 4397,
            "end": 4450,
            "test": {
              "type": "BinaryExpression",
              "start": 4401,
              "end": 4416,
              "left": {
                "type": "ChainExpression",
                "start": 4401,
                "end": 4407,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4401,
                  "end": 4407,
                  "object": {
                    "type": "Identifier",
                    "start": 4401,
                    "end": 4402,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4404,
                    "end": 4407,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 4412,
                "end": 4416,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4418,
              "end": 4450,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4428,
                  "end": 4434,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4428,
                    "end": 4433,
                    "object": {
                      "type": "Identifier",
                      "start": 4428,
                      "end": 4429,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4430,
                      "end": 4433,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 4455,
            "end": 4515,
            "test": {
              "type": "BinaryExpression",
              "start": 4459,
              "end": 4478,
              "left": {
                "type": "ChainExpression",
                "start": 4459,
                "end": 4469,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4459,
                  "end": 4469,
                  "object": {
                    "type": "Identifier",
                    "start": 4459,
                    "end": 4460,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 4463,
                    "end": 4468,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "computed": true,
                  "optional": true
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 4474,
                "end": 4478,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4480,
              "end": 4515,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4490,
                  "end": 4499,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4490,
                    "end": 4498,
                    "object": {
                      "type": "Identifier",
                      "start": 4490,
                      "end": 4491,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 4492,
                      "end": 4497,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 4520,
            "end": 4575,
            "test": {
              "type": "BinaryExpression",
              "start": 4524,
              "end": 4541,
              "left": {
                "type": "ChainExpression",
                "start": 4524,
                "end": 4532,
                "expression": {
                  "type": "CallExpression",
                  "start": 4524,
                  "end": 4532,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4524,
                    "end": 4530,
                    "object": {
                      "type": "Identifier",
                      "start": 4524,
                      "end": 4525,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4527,
                      "end": 4530,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 4537,
                "end": 4541,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4543,
              "end": 4575,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4553,
                  "end": 4559,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4553,
                    "end": 4558,
                    "object": {
                      "type": "Identifier",
                      "start": 4553,
                      "end": 4554,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4555,
                      "end": 4558,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 4580,
            "end": 4622,
            "test": {
              "type": "BinaryExpression",
              "start": 4584,
              "end": 4598,
              "left": {
                "type": "ChainExpression",
                "start": 4584,
                "end": 4590,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4584,
                  "end": 4590,
                  "object": {
                    "type": "Identifier",
                    "start": 4584,
                    "end": 4585,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4587,
                    "end": 4590,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "start": 4594,
                "end": 4598,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4600,
              "end": 4622,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4610,
                  "end": 4616,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4610,
                    "end": 4615,
                    "object": {
                      "type": "Identifier",
                      "start": 4610,
                      "end": 4611,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4612,
                      "end": 4615,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 4627,
            "end": 4676,
            "test": {
              "type": "BinaryExpression",
              "start": 4631,
              "end": 4649,
              "left": {
                "type": "ChainExpression",
                "start": 4631,
                "end": 4641,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4631,
                  "end": 4641,
                  "object": {
                    "type": "Identifier",
                    "start": 4631,
                    "end": 4632,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 4635,
                    "end": 4640,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "computed": true,
                  "optional": true
                }
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "start": 4645,
                "end": 4649,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4651,
              "end": 4676,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4661,
                  "end": 4670,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4661,
                    "end": 4669,
                    "object": {
                      "type": "Identifier",
                      "start": 4661,
                      "end": 4662,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 4663,
                      "end": 4668,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 4681,
            "end": 4725,
            "test": {
              "type": "BinaryExpression",
              "start": 4685,
              "end": 4701,
              "left": {
                "type": "ChainExpression",
                "start": 4685,
                "end": 4693,
                "expression": {
                  "type": "CallExpression",
                  "start": 4685,
                  "end": 4693,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4685,
                    "end": 4691,
                    "object": {
                      "type": "Identifier",
                      "start": 4685,
                      "end": 4686,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4688,
                      "end": 4691,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "start": 4697,
                "end": 4701,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4703,
              "end": 4725,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4713,
                  "end": 4719,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4713,
                    "end": 4718,
                    "object": {
                      "type": "Identifier",
                      "start": 4713,
                      "end": 4714,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4715,
                      "end": 4718,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4729,
      "end": 4930,
      "id": {
        "type": "Identifier",
        "start": 4738,
        "end": 4741,
        "name": "f14",
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
          "start": 4742,
          "end": 4757,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 4745,
                    "end": 4750,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNullKeyword",
                  "start": 4753,
                  "end": 4757
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 4759,
        "end": 4930,
        "body": [
          {
            "type": "IfStatement",
            "start": 4765,
            "end": 4813,
            "test": {
              "type": "BinaryExpression",
              "start": 4769,
              "end": 4789,
              "left": {
                "type": "ChainExpression",
                "start": 4769,
                "end": 4775,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4769,
                  "end": 4775,
                  "object": {
                    "type": "Identifier",
                    "start": 4769,
                    "end": 4770,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4772,
                    "end": 4775,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 4780,
                "end": 4789,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4791,
              "end": 4813,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4801,
                  "end": 4807,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4801,
                    "end": 4806,
                    "object": {
                      "type": "Identifier",
                      "start": 4801,
                      "end": 4802,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4803,
                      "end": 4806,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 4818,
            "end": 4873,
            "test": {
              "type": "BinaryExpression",
              "start": 4822,
              "end": 4846,
              "left": {
                "type": "ChainExpression",
                "start": 4822,
                "end": 4832,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4822,
                  "end": 4832,
                  "object": {
                    "type": "Identifier",
                    "start": 4822,
                    "end": 4823,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 4826,
                    "end": 4831,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "computed": true,
                  "optional": true
                }
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 4837,
                "end": 4846,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4848,
              "end": 4873,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4858,
                  "end": 4867,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4858,
                    "end": 4866,
                    "object": {
                      "type": "Identifier",
                      "start": 4858,
                      "end": 4859,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 4860,
                      "end": 4865,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 4878,
            "end": 4928,
            "test": {
              "type": "BinaryExpression",
              "start": 4882,
              "end": 4904,
              "left": {
                "type": "ChainExpression",
                "start": 4882,
                "end": 4890,
                "expression": {
                  "type": "CallExpression",
                  "start": 4882,
                  "end": 4890,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4882,
                    "end": 4888,
                    "object": {
                      "type": "Identifier",
                      "start": 4882,
                      "end": 4883,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4885,
                      "end": 4888,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 4895,
                "end": 4904,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4906,
              "end": 4928,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4916,
                  "end": 4922,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4916,
                    "end": 4921,
                    "object": {
                      "type": "Identifier",
                      "start": 4916,
                      "end": 4917,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4918,
                      "end": 4921,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4932,
      "end": 5347,
      "id": {
        "type": "Identifier",
        "start": 4941,
        "end": 4944,
        "name": "f15",
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
          "start": 4945,
          "end": 4965,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 4948,
                    "end": 4953,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 4956,
                  "end": 4965
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 4967,
          "end": 4980,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4972,
            "end": 4980,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 4974,
              "end": 4980
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 4982,
        "end": 5347,
        "body": [
          {
            "type": "IfStatement",
            "start": 4988,
            "end": 5074,
            "test": {
              "type": "BinaryExpression",
              "start": 4992,
              "end": 5008,
              "left": {
                "type": "ChainExpression",
                "start": 4992,
                "end": 4998,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4992,
                  "end": 4998,
                  "object": {
                    "type": "Identifier",
                    "start": 4992,
                    "end": 4993,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4995,
                    "end": 4998,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 5003,
                "end": 5008,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5020,
                    "end": 5025,
                    "object": {
                      "type": "Identifier",
                      "start": 5020,
                      "end": 5021,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5022,
                      "end": 5025,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 5042,
              "end": 5074,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5052,
                  "end": 5058,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5052,
                    "end": 5057,
                    "object": {
                      "type": "Identifier",
                      "start": 5052,
                      "end": 5053,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5054,
                      "end": 5057,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 5079,
            "end": 5165,
            "test": {
              "type": "BinaryExpression",
              "start": 5083,
              "end": 5099,
              "left": {
                "type": "ChainExpression",
                "start": 5083,
                "end": 5089,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5083,
                  "end": 5089,
                  "object": {
                    "type": "Identifier",
                    "start": 5083,
                    "end": 5084,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5086,
                    "end": 5089,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 5094,
                "end": 5099,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5111,
                    "end": 5116,
                    "object": {
                      "type": "Identifier",
                      "start": 5111,
                      "end": 5112,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5113,
                      "end": 5116,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 5143,
              "end": 5165,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5153,
                  "end": 5159,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5153,
                    "end": 5158,
                    "object": {
                      "type": "Identifier",
                      "start": 5153,
                      "end": 5154,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5155,
                      "end": 5158,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 5170,
            "end": 5255,
            "test": {
              "type": "BinaryExpression",
              "start": 5174,
              "end": 5189,
              "left": {
                "type": "ChainExpression",
                "start": 5174,
                "end": 5180,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5174,
                  "end": 5180,
                  "object": {
                    "type": "Identifier",
                    "start": 5174,
                    "end": 5175,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5177,
                    "end": 5180,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 5184,
                "end": 5189,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5201,
                    "end": 5206,
                    "object": {
                      "type": "Identifier",
                      "start": 5201,
                      "end": 5202,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5203,
                      "end": 5206,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 5223,
              "end": 5255,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5233,
                  "end": 5239,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5233,
                    "end": 5238,
                    "object": {
                      "type": "Identifier",
                      "start": 5233,
                      "end": 5234,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5235,
                      "end": 5238,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 5260,
            "end": 5345,
            "test": {
              "type": "BinaryExpression",
              "start": 5264,
              "end": 5279,
              "left": {
                "type": "ChainExpression",
                "start": 5264,
                "end": 5270,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5264,
                  "end": 5270,
                  "object": {
                    "type": "Identifier",
                    "start": 5264,
                    "end": 5265,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5267,
                    "end": 5270,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "start": 5274,
                "end": 5279,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5291,
                    "end": 5296,
                    "object": {
                      "type": "Identifier",
                      "start": 5291,
                      "end": 5292,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5293,
                      "end": 5296,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 5323,
              "end": 5345,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5333,
                  "end": 5339,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5333,
                    "end": 5338,
                    "object": {
                      "type": "Identifier",
                      "start": 5333,
                      "end": 5334,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5335,
                      "end": 5338,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5349,
      "end": 5806,
      "id": {
        "type": "Identifier",
        "start": 5358,
        "end": 5362,
        "name": "f15a",
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
          "start": 5363,
          "end": 5383,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 5366,
                    "end": 5371,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 5374,
                  "end": 5383
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 5385,
          "end": 5399,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5390,
            "end": 5399,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5392,
              "end": 5399
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 5401,
        "end": 5806,
        "body": [
          {
            "type": "IfStatement",
            "start": 5407,
            "end": 5503,
            "test": {
              "type": "BinaryExpression",
              "start": 5411,
              "end": 5427,
              "left": {
                "type": "ChainExpression",
                "start": 5411,
                "end": 5417,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5411,
                  "end": 5417,
                  "object": {
                    "type": "Identifier",
                    "start": 5411,
                    "end": 5412,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5414,
                    "end": 5417,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 5422,
                "end": 5427,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5439,
                    "end": 5444,
                    "object": {
                      "type": "Identifier",
                      "start": 5439,
                      "end": 5440,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5441,
                      "end": 5444,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 5471,
              "end": 5503,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5481,
                  "end": 5487,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5481,
                    "end": 5486,
                    "object": {
                      "type": "Identifier",
                      "start": 5481,
                      "end": 5482,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5483,
                      "end": 5486,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 5508,
            "end": 5604,
            "test": {
              "type": "BinaryExpression",
              "start": 5512,
              "end": 5528,
              "left": {
                "type": "ChainExpression",
                "start": 5512,
                "end": 5518,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5512,
                  "end": 5518,
                  "object": {
                    "type": "Identifier",
                    "start": 5512,
                    "end": 5513,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5515,
                    "end": 5518,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 5523,
                "end": 5528,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5540,
                    "end": 5545,
                    "object": {
                      "type": "Identifier",
                      "start": 5540,
                      "end": 5541,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5542,
                      "end": 5545,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 5572,
              "end": 5604,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5582,
                  "end": 5588,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5582,
                    "end": 5587,
                    "object": {
                      "type": "Identifier",
                      "start": 5582,
                      "end": 5583,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5584,
                      "end": 5587,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 5609,
            "end": 5704,
            "test": {
              "type": "BinaryExpression",
              "start": 5613,
              "end": 5628,
              "left": {
                "type": "ChainExpression",
                "start": 5613,
                "end": 5619,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5613,
                  "end": 5619,
                  "object": {
                    "type": "Identifier",
                    "start": 5613,
                    "end": 5614,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5616,
                    "end": 5619,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 5623,
                "end": 5628,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5640,
                    "end": 5645,
                    "object": {
                      "type": "Identifier",
                      "start": 5640,
                      "end": 5641,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5642,
                      "end": 5645,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 5672,
              "end": 5704,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5682,
                  "end": 5688,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5682,
                    "end": 5687,
                    "object": {
                      "type": "Identifier",
                      "start": 5682,
                      "end": 5683,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5684,
                      "end": 5687,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 5709,
            "end": 5804,
            "test": {
              "type": "BinaryExpression",
              "start": 5713,
              "end": 5728,
              "left": {
                "type": "ChainExpression",
                "start": 5713,
                "end": 5719,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5713,
                  "end": 5719,
                  "object": {
                    "type": "Identifier",
                    "start": 5713,
                    "end": 5714,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5716,
                    "end": 5719,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "start": 5723,
                "end": 5728,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5740,
                    "end": 5745,
                    "object": {
                      "type": "Identifier",
                      "start": 5740,
                      "end": 5741,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5742,
                      "end": 5745,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 5772,
              "end": 5804,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5782,
                  "end": 5788,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5782,
                    "end": 5787,
                    "object": {
                      "type": "Identifier",
                      "start": 5782,
                      "end": 5783,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5784,
                      "end": 5787,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5808,
      "end": 6224,
      "id": {
        "type": "Identifier",
        "start": 5817,
        "end": 5820,
        "name": "f16",
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
          "start": 5821,
          "end": 5841,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 5824,
                    "end": 5829,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 5832,
                  "end": 5841
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 5843,
        "end": 6224,
        "body": [
          {
            "type": "IfStatement",
            "start": 5849,
            "end": 5939,
            "test": {
              "type": "BinaryExpression",
              "start": 5853,
              "end": 5873,
              "left": {
                "type": "ChainExpression",
                "start": 5853,
                "end": 5859,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5853,
                  "end": 5859,
                  "object": {
                    "type": "Identifier",
                    "start": 5853,
                    "end": 5854,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5856,
                    "end": 5859,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 5864,
                "end": 5873,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5885,
                    "end": 5890,
                    "object": {
                      "type": "Identifier",
                      "start": 5885,
                      "end": 5886,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5887,
                      "end": 5890,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 5917,
              "end": 5939,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5927,
                  "end": 5933,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5927,
                    "end": 5932,
                    "object": {
                      "type": "Identifier",
                      "start": 5927,
                      "end": 5928,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5929,
                      "end": 5932,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 5944,
            "end": 6034,
            "test": {
              "type": "BinaryExpression",
              "start": 5948,
              "end": 5968,
              "left": {
                "type": "ChainExpression",
                "start": 5948,
                "end": 5954,
                "expression": {
                  "type": "MemberExpression",
                  "start": 5948,
                  "end": 5954,
                  "object": {
                    "type": "Identifier",
                    "start": 5948,
                    "end": 5949,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5951,
                    "end": 5954,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 5959,
                "end": 5968,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 5980,
                    "end": 5985,
                    "object": {
                      "type": "Identifier",
                      "start": 5980,
                      "end": 5981,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5982,
                      "end": 5985,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 6002,
              "end": 6034,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6012,
                  "end": 6018,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6012,
                    "end": 6017,
                    "object": {
                      "type": "Identifier",
                      "start": 6012,
                      "end": 6013,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6014,
                      "end": 6017,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 6039,
            "end": 6128,
            "test": {
              "type": "BinaryExpression",
              "start": 6043,
              "end": 6062,
              "left": {
                "type": "ChainExpression",
                "start": 6043,
                "end": 6049,
                "expression": {
                  "type": "MemberExpression",
                  "start": 6043,
                  "end": 6049,
                  "object": {
                    "type": "Identifier",
                    "start": 6043,
                    "end": 6044,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6046,
                    "end": 6049,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 6053,
                "end": 6062,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6074,
                    "end": 6079,
                    "object": {
                      "type": "Identifier",
                      "start": 6074,
                      "end": 6075,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6076,
                      "end": 6079,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 6106,
              "end": 6128,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6116,
                  "end": 6122,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6116,
                    "end": 6121,
                    "object": {
                      "type": "Identifier",
                      "start": 6116,
                      "end": 6117,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6118,
                      "end": 6121,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 6133,
            "end": 6222,
            "test": {
              "type": "BinaryExpression",
              "start": 6137,
              "end": 6156,
              "left": {
                "type": "ChainExpression",
                "start": 6137,
                "end": 6143,
                "expression": {
                  "type": "MemberExpression",
                  "start": 6137,
                  "end": 6143,
                  "object": {
                    "type": "Identifier",
                    "start": 6137,
                    "end": 6138,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6140,
                    "end": 6143,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "start": 6147,
                "end": 6156,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6168,
                    "end": 6173,
                    "object": {
                      "type": "Identifier",
                      "start": 6168,
                      "end": 6169,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6170,
                      "end": 6173,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 6190,
              "end": 6222,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6200,
                  "end": 6206,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6200,
                    "end": 6205,
                    "object": {
                      "type": "Identifier",
                      "start": 6200,
                      "end": 6201,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6202,
                      "end": 6205,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 6226,
      "end": 6506,
      "id": {
        "type": "Identifier",
        "start": 6235,
        "end": 6238,
        "name": "f20",
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
          "start": 6239,
          "end": 6259,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 6242,
                    "end": 6247,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 6250,
                  "end": 6259
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 6261,
        "end": 6506,
        "body": [
          {
            "type": "IfStatement",
            "start": 6267,
            "end": 6321,
            "test": {
              "type": "BinaryExpression",
              "start": 6271,
              "end": 6297,
              "left": {
                "type": "UnaryExpression",
                "start": 6271,
                "end": 6284,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 6278,
                  "end": 6284,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6278,
                    "end": 6284,
                    "object": {
                      "type": "Identifier",
                      "start": 6278,
                      "end": 6279,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6281,
                      "end": 6284,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 6289,
                "end": 6297,
                "value": "number",
                "raw": "\"number\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6299,
              "end": 6321,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6309,
                  "end": 6315,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6309,
                    "end": 6314,
                    "object": {
                      "type": "Identifier",
                      "start": 6309,
                      "end": 6310,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6311,
                      "end": 6314,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 6326,
            "end": 6387,
            "test": {
              "type": "BinaryExpression",
              "start": 6330,
              "end": 6360,
              "left": {
                "type": "UnaryExpression",
                "start": 6330,
                "end": 6347,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 6337,
                  "end": 6347,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6337,
                    "end": 6347,
                    "object": {
                      "type": "Identifier",
                      "start": 6337,
                      "end": 6338,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 6341,
                      "end": 6346,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": true
                  }
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 6352,
                "end": 6360,
                "value": "number",
                "raw": "\"number\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6362,
              "end": 6387,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6372,
                  "end": 6381,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6372,
                    "end": 6380,
                    "object": {
                      "type": "Identifier",
                      "start": 6372,
                      "end": 6373,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 6374,
                      "end": 6379,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 6392,
            "end": 6448,
            "test": {
              "type": "BinaryExpression",
              "start": 6396,
              "end": 6424,
              "left": {
                "type": "UnaryExpression",
                "start": 6396,
                "end": 6411,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 6403,
                  "end": 6411,
                  "expression": {
                    "type": "CallExpression",
                    "start": 6403,
                    "end": 6411,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 6403,
                      "end": 6409,
                      "object": {
                        "type": "Identifier",
                        "start": 6403,
                        "end": 6404,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 6406,
                        "end": 6409,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": true
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 6416,
                "end": 6424,
                "value": "number",
                "raw": "\"number\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6426,
              "end": 6448,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6436,
                  "end": 6442,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6436,
                    "end": 6441,
                    "object": {
                      "type": "Identifier",
                      "start": 6436,
                      "end": 6437,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6438,
                      "end": 6441,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 6453,
            "end": 6504,
            "test": {
              "type": "BinaryExpression",
              "start": 6457,
              "end": 6480,
              "left": {
                "type": "ChainExpression",
                "start": 6457,
                "end": 6463,
                "expression": {
                  "type": "MemberExpression",
                  "start": 6457,
                  "end": 6463,
                  "object": {
                    "type": "Identifier",
                    "start": 6457,
                    "end": 6458,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6460,
                    "end": 6463,
                    "name": "baz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 6475,
                "end": 6480,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6482,
              "end": 6504,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6492,
                  "end": 6498,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6492,
                    "end": 6497,
                    "object": {
                      "type": "Identifier",
                      "start": 6492,
                      "end": 6493,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6494,
                      "end": 6497,
                      "name": "baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 6508,
      "end": 6783,
      "id": {
        "type": "Identifier",
        "start": 6517,
        "end": 6520,
        "name": "f21",
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
          "start": 6521,
          "end": 6536,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 6524,
                    "end": 6529,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNullKeyword",
                  "start": 6532,
                  "end": 6536
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 6538,
        "end": 6783,
        "body": [
          {
            "type": "IfStatement",
            "start": 6544,
            "end": 6598,
            "test": {
              "type": "BinaryExpression",
              "start": 6548,
              "end": 6574,
              "left": {
                "type": "UnaryExpression",
                "start": 6548,
                "end": 6561,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 6555,
                  "end": 6561,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6555,
                    "end": 6561,
                    "object": {
                      "type": "Identifier",
                      "start": 6555,
                      "end": 6556,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6558,
                      "end": 6561,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 6566,
                "end": 6574,
                "value": "number",
                "raw": "\"number\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6576,
              "end": 6598,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6586,
                  "end": 6592,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6586,
                    "end": 6591,
                    "object": {
                      "type": "Identifier",
                      "start": 6586,
                      "end": 6587,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6588,
                      "end": 6591,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 6603,
            "end": 6664,
            "test": {
              "type": "BinaryExpression",
              "start": 6607,
              "end": 6637,
              "left": {
                "type": "UnaryExpression",
                "start": 6607,
                "end": 6624,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 6614,
                  "end": 6624,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6614,
                    "end": 6624,
                    "object": {
                      "type": "Identifier",
                      "start": 6614,
                      "end": 6615,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 6618,
                      "end": 6623,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": true
                  }
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 6629,
                "end": 6637,
                "value": "number",
                "raw": "\"number\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6639,
              "end": 6664,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6649,
                  "end": 6658,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6649,
                    "end": 6657,
                    "object": {
                      "type": "Identifier",
                      "start": 6649,
                      "end": 6650,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 6651,
                      "end": 6656,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 6669,
            "end": 6725,
            "test": {
              "type": "BinaryExpression",
              "start": 6673,
              "end": 6701,
              "left": {
                "type": "UnaryExpression",
                "start": 6673,
                "end": 6688,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 6680,
                  "end": 6688,
                  "expression": {
                    "type": "CallExpression",
                    "start": 6680,
                    "end": 6688,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 6680,
                      "end": 6686,
                      "object": {
                        "type": "Identifier",
                        "start": 6680,
                        "end": 6681,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 6683,
                        "end": 6686,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": true
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 6693,
                "end": 6701,
                "value": "number",
                "raw": "\"number\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6703,
              "end": 6725,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6713,
                  "end": 6719,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6713,
                    "end": 6718,
                    "object": {
                      "type": "Identifier",
                      "start": 6713,
                      "end": 6714,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6715,
                      "end": 6718,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 6730,
            "end": 6781,
            "test": {
              "type": "BinaryExpression",
              "start": 6734,
              "end": 6757,
              "left": {
                "type": "ChainExpression",
                "start": 6734,
                "end": 6740,
                "expression": {
                  "type": "MemberExpression",
                  "start": 6734,
                  "end": 6740,
                  "object": {
                    "type": "Identifier",
                    "start": 6734,
                    "end": 6735,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6737,
                    "end": 6740,
                    "name": "baz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 6752,
                "end": 6757,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6759,
              "end": 6781,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6769,
                  "end": 6775,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6769,
                    "end": 6774,
                    "object": {
                      "type": "Identifier",
                      "start": 6769,
                      "end": 6770,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6771,
                      "end": 6774,
                      "name": "baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 6785,
      "end": 7225,
      "id": {
        "type": "Identifier",
        "start": 6794,
        "end": 6797,
        "name": "f22",
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
          "start": 6798,
          "end": 6818,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 6801,
                    "end": 6806,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 6809,
                  "end": 6818
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 6820,
        "end": 7225,
        "body": [
          {
            "type": "IfStatement",
            "start": 6826,
            "end": 6922,
            "test": {
              "type": "BinaryExpression",
              "start": 6830,
              "end": 6856,
              "left": {
                "type": "UnaryExpression",
                "start": 6830,
                "end": 6843,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 6837,
                  "end": 6843,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6837,
                    "end": 6843,
                    "object": {
                      "type": "Identifier",
                      "start": 6837,
                      "end": 6838,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6840,
                      "end": 6843,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 6848,
                "end": 6856,
                "value": "number",
                "raw": "\"number\""
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6868,
                    "end": 6873,
                    "object": {
                      "type": "Identifier",
                      "start": 6868,
                      "end": 6869,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6870,
                      "end": 6873,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 6890,
              "end": 6922,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6900,
                  "end": 6906,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6900,
                    "end": 6905,
                    "object": {
                      "type": "Identifier",
                      "start": 6900,
                      "end": 6901,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6902,
                      "end": 6905,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 6927,
            "end": 7023,
            "test": {
              "type": "BinaryExpression",
              "start": 6931,
              "end": 6957,
              "left": {
                "type": "UnaryExpression",
                "start": 6931,
                "end": 6944,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 6938,
                  "end": 6944,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6938,
                    "end": 6944,
                    "object": {
                      "type": "Identifier",
                      "start": 6938,
                      "end": 6939,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6941,
                      "end": 6944,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 6949,
                "end": 6957,
                "value": "number",
                "raw": "\"number\""
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 6969,
                    "end": 6974,
                    "object": {
                      "type": "Identifier",
                      "start": 6969,
                      "end": 6970,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6971,
                      "end": 6974,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 7001,
              "end": 7023,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7011,
                  "end": 7017,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7011,
                    "end": 7016,
                    "object": {
                      "type": "Identifier",
                      "start": 7011,
                      "end": 7012,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7013,
                      "end": 7016,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 7028,
            "end": 7123,
            "test": {
              "type": "BinaryExpression",
              "start": 7032,
              "end": 7057,
              "left": {
                "type": "UnaryExpression",
                "start": 7032,
                "end": 7045,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 7039,
                  "end": 7045,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7039,
                    "end": 7045,
                    "object": {
                      "type": "Identifier",
                      "start": 7039,
                      "end": 7040,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7042,
                      "end": 7045,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                }
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 7049,
                "end": 7057,
                "value": "number",
                "raw": "\"number\""
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7069,
                    "end": 7074,
                    "object": {
                      "type": "Identifier",
                      "start": 7069,
                      "end": 7070,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7071,
                      "end": 7074,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 7091,
              "end": 7123,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7101,
                  "end": 7107,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7101,
                    "end": 7106,
                    "object": {
                      "type": "Identifier",
                      "start": 7101,
                      "end": 7102,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7103,
                      "end": 7106,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 7128,
            "end": 7223,
            "test": {
              "type": "BinaryExpression",
              "start": 7132,
              "end": 7157,
              "left": {
                "type": "UnaryExpression",
                "start": 7132,
                "end": 7145,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 7139,
                  "end": 7145,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7139,
                    "end": 7145,
                    "object": {
                      "type": "Identifier",
                      "start": 7139,
                      "end": 7140,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7142,
                      "end": 7145,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                }
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "start": 7149,
                "end": 7157,
                "value": "number",
                "raw": "\"number\""
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7169,
                    "end": 7174,
                    "object": {
                      "type": "Identifier",
                      "start": 7169,
                      "end": 7170,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7171,
                      "end": 7174,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 7201,
              "end": 7223,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7211,
                  "end": 7217,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7211,
                    "end": 7216,
                    "object": {
                      "type": "Identifier",
                      "start": 7211,
                      "end": 7212,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7213,
                      "end": 7216,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 7227,
      "end": 7679,
      "id": {
        "type": "Identifier",
        "start": 7236,
        "end": 7239,
        "name": "f23",
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
          "start": 7240,
          "end": 7260,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 7243,
                    "end": 7248,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 7251,
                  "end": 7260
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 7262,
        "end": 7679,
        "body": [
          {
            "type": "IfStatement",
            "start": 7268,
            "end": 7367,
            "test": {
              "type": "BinaryExpression",
              "start": 7272,
              "end": 7301,
              "left": {
                "type": "UnaryExpression",
                "start": 7272,
                "end": 7285,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 7279,
                  "end": 7285,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7279,
                    "end": 7285,
                    "object": {
                      "type": "Identifier",
                      "start": 7279,
                      "end": 7280,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7282,
                      "end": 7285,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 7290,
                "end": 7301,
                "value": "undefined",
                "raw": "\"undefined\""
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7313,
                    "end": 7318,
                    "object": {
                      "type": "Identifier",
                      "start": 7313,
                      "end": 7314,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7315,
                      "end": 7318,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 7345,
              "end": 7367,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7355,
                  "end": 7361,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7355,
                    "end": 7360,
                    "object": {
                      "type": "Identifier",
                      "start": 7355,
                      "end": 7356,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7357,
                      "end": 7360,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 7372,
            "end": 7471,
            "test": {
              "type": "BinaryExpression",
              "start": 7376,
              "end": 7405,
              "left": {
                "type": "UnaryExpression",
                "start": 7376,
                "end": 7389,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 7383,
                  "end": 7389,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7383,
                    "end": 7389,
                    "object": {
                      "type": "Identifier",
                      "start": 7383,
                      "end": 7384,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7386,
                      "end": 7389,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 7394,
                "end": 7405,
                "value": "undefined",
                "raw": "\"undefined\""
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7417,
                    "end": 7422,
                    "object": {
                      "type": "Identifier",
                      "start": 7417,
                      "end": 7418,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7419,
                      "end": 7422,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 7439,
              "end": 7471,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7449,
                  "end": 7455,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7449,
                    "end": 7454,
                    "object": {
                      "type": "Identifier",
                      "start": 7449,
                      "end": 7450,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7451,
                      "end": 7454,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 7476,
            "end": 7574,
            "test": {
              "type": "BinaryExpression",
              "start": 7480,
              "end": 7508,
              "left": {
                "type": "UnaryExpression",
                "start": 7480,
                "end": 7493,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 7487,
                  "end": 7493,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7487,
                    "end": 7493,
                    "object": {
                      "type": "Identifier",
                      "start": 7487,
                      "end": 7488,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7490,
                      "end": 7493,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                }
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 7497,
                "end": 7508,
                "value": "undefined",
                "raw": "\"undefined\""
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7520,
                    "end": 7525,
                    "object": {
                      "type": "Identifier",
                      "start": 7520,
                      "end": 7521,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7522,
                      "end": 7525,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 7552,
              "end": 7574,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7562,
                  "end": 7568,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7562,
                    "end": 7567,
                    "object": {
                      "type": "Identifier",
                      "start": 7562,
                      "end": 7563,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7564,
                      "end": 7567,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 7579,
            "end": 7677,
            "test": {
              "type": "BinaryExpression",
              "start": 7583,
              "end": 7611,
              "left": {
                "type": "UnaryExpression",
                "start": 7583,
                "end": 7596,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 7590,
                  "end": 7596,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7590,
                    "end": 7596,
                    "object": {
                      "type": "Identifier",
                      "start": 7590,
                      "end": 7591,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7593,
                      "end": 7596,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                }
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "start": 7600,
                "end": 7611,
                "value": "undefined",
                "raw": "\"undefined\""
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7623,
                    "end": 7628,
                    "object": {
                      "type": "Identifier",
                      "start": 7623,
                      "end": 7624,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7625,
                      "end": 7628,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 7645,
              "end": 7677,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7655,
                  "end": 7661,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7655,
                    "end": 7660,
                    "object": {
                      "type": "Identifier",
                      "start": 7655,
                      "end": 7656,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7657,
                      "end": 7660,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 7681,
      "end": 7728,
      "id": {
        "type": "Identifier",
        "start": 7698,
        "end": 7704,
        "name": "assert",
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
          "start": 7705,
          "end": 7715,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7706,
            "end": 7715,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 7708,
              "end": 7715
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 7716,
        "end": 7727,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 7718,
          "end": 7727,
          "parameterName": {
            "type": "Identifier",
            "start": 7726,
            "end": 7727,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": true,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 7729,
      "end": 7798,
      "id": {
        "type": "Identifier",
        "start": 7746,
        "end": 7759,
        "name": "assertNonNull",
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
          "start": 7763,
          "end": 7767,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7764,
            "end": 7767,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 7766,
              "end": 7767,
              "typeName": {
                "type": "Identifier",
                "start": 7766,
                "end": 7767,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7759,
        "end": 7762,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 7760,
            "end": 7761,
            "name": {
              "type": "Identifier",
              "start": 7760,
              "end": 7761,
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
        "start": 7768,
        "end": 7797,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 7770,
          "end": 7797,
          "parameterName": {
            "type": "Identifier",
            "start": 7778,
            "end": 7779,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7783,
            "end": 7797,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 7783,
              "end": 7797,
              "typeName": {
                "type": "Identifier",
                "start": 7783,
                "end": 7794,
                "name": "NonNullable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 7794,
                "end": 7797,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 7795,
                    "end": 7796,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7795,
                      "end": 7796,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 7800,
      "end": 8124,
      "id": {
        "type": "Identifier",
        "start": 7809,
        "end": 7812,
        "name": "f30",
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
          "start": 7813,
          "end": 7833,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 7816,
                    "end": 7821,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 7824,
                  "end": 7833
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 7835,
        "end": 8124,
        "body": [
          {
            "type": "IfStatement",
            "start": 7841,
            "end": 7899,
            "test": {
              "type": "UnaryExpression",
              "start": 7845,
              "end": 7851,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 7846,
                "end": 7851,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 7847,
                  "end": 7851,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 7853,
              "end": 7899,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7863,
                  "end": 7878,
                  "expression": {
                    "type": "CallExpression",
                    "start": 7863,
                    "end": 7877,
                    "callee": {
                      "type": "Identifier",
                      "start": 7863,
                      "end": 7869,
                      "name": "assert",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ChainExpression",
                        "start": 7870,
                        "end": 7876,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 7870,
                          "end": 7876,
                          "object": {
                            "type": "Identifier",
                            "start": 7870,
                            "end": 7871,
                            "name": "o",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 7873,
                            "end": 7876,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": true
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 7887,
                  "end": 7893,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7887,
                    "end": 7892,
                    "object": {
                      "type": "Identifier",
                      "start": 7887,
                      "end": 7888,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7889,
                      "end": 7892,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 7904,
            "end": 7969,
            "test": {
              "type": "UnaryExpression",
              "start": 7908,
              "end": 7914,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 7909,
                "end": 7914,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 7910,
                  "end": 7914,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 7916,
              "end": 7969,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7926,
                  "end": 7948,
                  "expression": {
                    "type": "CallExpression",
                    "start": 7926,
                    "end": 7947,
                    "callee": {
                      "type": "Identifier",
                      "start": 7926,
                      "end": 7932,
                      "name": "assert",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 7933,
                        "end": 7946,
                        "left": {
                          "type": "ChainExpression",
                          "start": 7933,
                          "end": 7939,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 7933,
                            "end": 7939,
                            "object": {
                              "type": "Identifier",
                              "start": 7933,
                              "end": 7934,
                              "name": "o",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 7936,
                              "end": 7939,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": true
                          }
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 7944,
                          "end": 7946,
                          "value": 42,
                          "raw": "42"
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 7957,
                  "end": 7963,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 7957,
                    "end": 7962,
                    "object": {
                      "type": "Identifier",
                      "start": 7957,
                      "end": 7958,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 7959,
                      "end": 7962,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 7974,
            "end": 8052,
            "test": {
              "type": "UnaryExpression",
              "start": 7978,
              "end": 7984,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 7979,
                "end": 7984,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 7980,
                  "end": 7984,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 7986,
              "end": 8052,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 7996,
                  "end": 8031,
                  "expression": {
                    "type": "CallExpression",
                    "start": 7996,
                    "end": 8030,
                    "callee": {
                      "type": "Identifier",
                      "start": 7996,
                      "end": 8002,
                      "name": "assert",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 8003,
                        "end": 8029,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 8003,
                          "end": 8016,
                          "operator": "typeof",
                          "prefix": true,
                          "argument": {
                            "type": "ChainExpression",
                            "start": 8010,
                            "end": 8016,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 8010,
                              "end": 8016,
                              "object": {
                                "type": "Identifier",
                                "start": 8010,
                                "end": 8011,
                                "name": "o",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 8013,
                                "end": 8016,
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": true
                            }
                          }
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 8021,
                          "end": 8029,
                          "value": "number",
                          "raw": "\"number\""
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 8040,
                  "end": 8046,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 8040,
                    "end": 8045,
                    "object": {
                      "type": "Identifier",
                      "start": 8040,
                      "end": 8041,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 8042,
                      "end": 8045,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 8057,
            "end": 8122,
            "test": {
              "type": "UnaryExpression",
              "start": 8061,
              "end": 8067,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 8062,
                "end": 8067,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 8063,
                  "end": 8067,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 8069,
              "end": 8122,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 8079,
                  "end": 8101,
                  "expression": {
                    "type": "CallExpression",
                    "start": 8079,
                    "end": 8100,
                    "callee": {
                      "type": "Identifier",
                      "start": 8079,
                      "end": 8092,
                      "name": "assertNonNull",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ChainExpression",
                        "start": 8093,
                        "end": 8099,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 8093,
                          "end": 8099,
                          "object": {
                            "type": "Identifier",
                            "start": 8093,
                            "end": 8094,
                            "name": "o",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 8096,
                            "end": 8099,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": true
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 8110,
                  "end": 8116,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 8110,
                    "end": 8115,
                    "object": {
                      "type": "Identifier",
                      "start": 8110,
                      "end": 8111,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 8112,
                      "end": 8115,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 8126,
      "end": 8442,
      "id": {
        "type": "Identifier",
        "start": 8135,
        "end": 8138,
        "name": "f40",
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
          "start": 8139,
          "end": 8159,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 8142,
                    "end": 8147,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 8150,
                  "end": 8159
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 8161,
        "end": 8442,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 8167,
            "end": 8440,
            "discriminant": {
              "type": "ChainExpression",
              "start": 8175,
              "end": 8181,
              "expression": {
                "type": "MemberExpression",
                "start": 8175,
                "end": 8181,
                "object": {
                  "type": "Identifier",
                  "start": 8175,
                  "end": 8176,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 8178,
                  "end": 8181,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": true
              }
            },
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
                    "expression": {
                      "type": "MemberExpression",
                      "start": 8217,
                      "end": 8222,
                      "object": {
                        "type": "Identifier",
                        "start": 8217,
                        "end": 8218,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 8219,
                        "end": 8222,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
                  "value": "abc",
                  "raw": "\"abc\""
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
                    "expression": {
                      "type": "MemberExpression",
                      "start": 8272,
                      "end": 8277,
                      "object": {
                        "type": "Identifier",
                        "start": 8272,
                        "end": 8273,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 8274,
                        "end": 8277,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
                  "value": 42,
                  "raw": "42"
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
                    "expression": {
                      "type": "MemberExpression",
                      "start": 8334,
                      "end": 8339,
                      "object": {
                        "type": "Identifier",
                        "start": 8334,
                        "end": 8335,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 8336,
                        "end": 8339,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "expression": {
                      "type": "MemberExpression",
                      "start": 8399,
                      "end": 8404,
                      "object": {
                        "type": "Identifier",
                        "start": 8399,
                        "end": 8400,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 8401,
                        "end": 8404,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 8444,
      "end": 8778,
      "id": {
        "type": "Identifier",
        "start": 8453,
        "end": 8456,
        "name": "f41",
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
          "start": 8457,
          "end": 8477,
          "name": "o",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 8460,
                    "end": 8465,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 8468,
                  "end": 8477
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 8479,
        "end": 8778,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 8485,
            "end": 8776,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 8493,
              "end": 8506,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "ChainExpression",
                "start": 8500,
                "end": 8506,
                "expression": {
                  "type": "MemberExpression",
                  "start": 8500,
                  "end": 8506,
                  "object": {
                    "type": "Identifier",
                    "start": 8500,
                    "end": 8501,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 8503,
                    "end": 8506,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              }
            },
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
                    "expression": {
                      "type": "MemberExpression",
                      "start": 8545,
                      "end": 8550,
                      "object": {
                        "type": "Identifier",
                        "start": 8545,
                        "end": 8546,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 8547,
                        "end": 8550,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
                  "value": "string",
                  "raw": "\"string\""
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
                    "expression": {
                      "type": "MemberExpression",
                      "start": 8606,
                      "end": 8611,
                      "object": {
                        "type": "Identifier",
                        "start": 8606,
                        "end": 8607,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 8608,
                        "end": 8611,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
                  "value": "number",
                  "raw": "\"number\""
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
                    "expression": {
                      "type": "MemberExpression",
                      "start": 8670,
                      "end": 8675,
                      "object": {
                        "type": "Identifier",
                        "start": 8670,
                        "end": 8671,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 8672,
                        "end": 8675,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
                  "value": "undefined",
                  "raw": "\"undefined\""
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
                    "expression": {
                      "type": "MemberExpression",
                      "start": 8735,
                      "end": 8740,
                      "object": {
                        "type": "Identifier",
                        "start": 8735,
                        "end": 8736,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 8737,
                        "end": 8740,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 8803,
      "end": 8915,
      "id": {
        "type": "Identifier",
        "start": 8808,
        "end": 8813,
        "name": "Shape",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 8824,
                  "end": 8828,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "value": "rectangle",
                      "raw": "'rectangle'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 8843,
                "end": 8857,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 8843,
                  "end": 8848,
                  "name": "width",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 8848,
                  "end": 8856,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 8850,
                    "end": 8856
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 8858,
                "end": 8872,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 8858,
                  "end": 8864,
                  "name": "height",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 8864,
                  "end": 8872,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 8866,
                    "end": 8872
                  }
                },
                "accessibility": null,
                "static": false
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 8883,
                  "end": 8887,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "value": "circle",
                      "raw": "'circle'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 8899,
                "end": 8913,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 8899,
                  "end": 8905,
                  "name": "radius",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 8905,
                  "end": 8913,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 8907,
                    "end": 8913
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 8917,
      "end": 9165,
      "id": {
        "type": "Identifier",
        "start": 8926,
        "end": 8933,
        "name": "getArea",
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
          "start": 8934,
          "end": 8947,
          "name": "shape",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 8940,
            "end": 8947,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 8942,
              "end": 8947,
              "typeName": {
                "type": "Identifier",
                "start": 8942,
                "end": 8947,
                "name": "Shape",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 8949,
        "end": 9165,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 8955,
            "end": 9163,
            "discriminant": {
              "type": "ChainExpression",
              "start": 8963,
              "end": 8974,
              "expression": {
                "type": "MemberExpression",
                "start": 8963,
                "end": 8974,
                "object": {
                  "type": "Identifier",
                  "start": 8963,
                  "end": 8968,
                  "name": "shape",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 8970,
                  "end": 8974,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": true
              }
            },
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
                      "left": {
                        "type": "MemberExpression",
                        "start": 9020,
                        "end": 9027,
                        "object": {
                          "type": "Identifier",
                          "start": 9020,
                          "end": 9024,
                          "name": "Math",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 9025,
                          "end": 9027,
                          "name": "PI",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "*",
                      "right": {
                        "type": "BinaryExpression",
                        "start": 9030,
                        "end": 9047,
                        "left": {
                          "type": "MemberExpression",
                          "start": 9030,
                          "end": 9042,
                          "object": {
                            "type": "Identifier",
                            "start": 9030,
                            "end": 9035,
                            "name": "shape",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 9036,
                            "end": 9042,
                            "name": "radius",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "operator": "**",
                        "right": {
                          "type": "Literal",
                          "start": 9046,
                          "end": 9047,
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 8991,
                  "end": 8999,
                  "value": "circle",
                  "raw": "'circle'"
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
                      "left": {
                        "type": "MemberExpression",
                        "start": 9093,
                        "end": 9104,
                        "object": {
                          "type": "Identifier",
                          "start": 9093,
                          "end": 9098,
                          "name": "shape",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 9099,
                          "end": 9104,
                          "name": "width",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "start": 9107,
                        "end": 9119,
                        "object": {
                          "type": "Identifier",
                          "start": 9107,
                          "end": 9112,
                          "name": "shape",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 9113,
                          "end": 9119,
                          "name": "height",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 9061,
                  "end": 9072,
                  "value": "rectangle",
                  "raw": "'rectangle'"
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
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ],
                "test": null
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 9167,
      "end": 9265,
      "id": {
        "type": "Identifier",
        "start": 9172,
        "end": 9179,
        "name": "Feature",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9182,
        "end": 9264,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 9186,
            "end": 9197,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 9186,
              "end": 9188,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9188,
              "end": 9196,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9190,
                "end": 9196
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 9200,
            "end": 9262,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 9200,
              "end": 9208,
              "name": "geometry",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9217,
                      "end": 9221,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 9221,
                      "end": 9229,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 9223,
                        "end": 9229
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 9235,
                    "end": 9257,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9235,
                      "end": 9246,
                      "name": "coordinates",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 9268,
      "end": 9420,
      "id": {
        "type": "Identifier",
        "start": 9277,
        "end": 9295,
        "name": "extractCoordinates",
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
          "start": 9296,
          "end": 9306,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 9297,
            "end": 9306,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 9299,
              "end": 9306,
              "typeName": {
                "type": "Identifier",
                "start": 9299,
                "end": 9306,
                "name": "Feature",
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
        "start": 9318,
        "end": 9420,
        "body": [
          {
            "type": "IfStatement",
            "start": 9324,
            "end": 9383,
            "test": {
              "type": "BinaryExpression",
              "start": 9328,
              "end": 9355,
              "left": {
                "type": "ChainExpression",
                "start": 9328,
                "end": 9344,
                "expression": {
                  "type": "MemberExpression",
                  "start": 9328,
                  "end": 9344,
                  "object": {
                    "type": "MemberExpression",
                    "start": 9328,
                    "end": 9338,
                    "object": {
                      "type": "Identifier",
                      "start": 9328,
                      "end": 9329,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 9330,
                      "end": 9338,
                      "name": "geometry",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 9340,
                    "end": 9344,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 9349,
                "end": 9355,
                "value": "test",
                "raw": "'test'"
              }
            },
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
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 9388,
            "end": 9418,
            "argument": {
              "type": "MemberExpression",
              "start": 9395,
              "end": 9417,
              "object": {
                "type": "MemberExpression",
                "start": 9395,
                "end": 9405,
                "object": {
                  "type": "Identifier",
                  "start": 9395,
                  "end": 9396,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 9397,
                  "end": 9405,
                  "name": "geometry",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9406,
                "end": 9417,
                "name": "coordinates",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 9444,
      "end": 9495,
      "id": {
        "type": "Identifier",
        "start": 9454,
        "end": 9464,
        "name": "SomeObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 9465,
        "end": 9495,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 9471,
            "end": 9493,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 9471,
              "end": 9483,
              "name": "someProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9483,
              "end": 9492,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 9485,
                "end": 9492
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9501,
            "end": 9538,
            "name": "lastSomeProperty",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 9541,
      "end": 9853,
      "id": {
        "type": "Identifier",
        "start": 9550,
        "end": 9562,
        "name": "someFunction",
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
          "start": 9563,
          "end": 9605,
          "name": "someOptionalObject",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 9583,
                    "end": 9593,
                    "name": "SomeObject",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 9596,
                  "end": 9605
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 9613,
        "end": 9853,
        "body": [
          {
            "type": "IfStatement",
            "start": 9619,
            "end": 9851,
            "test": {
              "type": "BinaryExpression",
              "start": 9623,
              "end": 9676,
              "left": {
                "type": "ChainExpression",
                "start": 9623,
                "end": 9655,
                "expression": {
                  "type": "MemberExpression",
                  "start": 9623,
                  "end": 9655,
                  "object": {
                    "type": "Identifier",
                    "start": 9623,
                    "end": 9641,
                    "name": "someOptionalObject",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 9643,
                    "end": 9655,
                    "name": "someProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 9660,
                "end": 9676,
                "name": "lastSomeProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 9678,
              "end": 9851,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 9688,
                  "end": 9720,
                  "expression": {
                    "type": "CallExpression",
                    "start": 9688,
                    "end": 9719,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 9688,
                      "end": 9699,
                      "object": {
                        "type": "Identifier",
                        "start": 9688,
                        "end": 9695,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 9696,
                        "end": 9699,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 9700,
                        "end": 9718,
                        "name": "someOptionalObject",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 9729,
                  "end": 9774,
                  "expression": {
                    "type": "CallExpression",
                    "start": 9729,
                    "end": 9773,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 9729,
                      "end": 9740,
                      "object": {
                        "type": "Identifier",
                        "start": 9729,
                        "end": 9736,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 9737,
                        "end": 9740,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 9741,
                        "end": 9772,
                        "object": {
                          "type": "Identifier",
                          "start": 9741,
                          "end": 9759,
                          "name": "someOptionalObject",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 9760,
                          "end": 9772,
                          "name": "someProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 9793,
                  "end": 9845,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 9793,
                    "end": 9844,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 9793,
                      "end": 9809,
                      "name": "lastSomeProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "ChainExpression",
                      "start": 9812,
                      "end": 9844,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 9812,
                        "end": 9844,
                        "object": {
                          "type": "Identifier",
                          "start": 9812,
                          "end": 9830,
                          "name": "someOptionalObject",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 9832,
                          "end": 9844,
                          "name": "someProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": true
                      }
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 9606,
        "end": 9612,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 9608,
          "end": 9612
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 9861,
            "end": 9883,
            "name": "someObject",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9871,
              "end": 9883,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9873,
                "end": 9883,
                "typeName": {
                  "type": "Identifier",
                  "start": 9873,
                  "end": 9883,
                  "name": "SomeObject",
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
            "type": "ObjectExpression",
            "start": 9886,
            "end": 9910,
            "properties": [
              {
                "type": "Property",
                "start": 9892,
                "end": 9908,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 9892,
                  "end": 9904,
                  "name": "someProperty",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 9906,
                  "end": 9908,
                  "value": 42,
                  "raw": "42"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 9913,
      "end": 9938,
      "expression": {
        "type": "CallExpression",
        "start": 9913,
        "end": 9937,
        "callee": {
          "type": "Identifier",
          "start": 9913,
          "end": 9925,
          "name": "someFunction",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 9926,
            "end": 9936,
            "name": "someObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 9939,
      "end": 9963,
      "expression": {
        "type": "CallExpression",
        "start": 9939,
        "end": 9962,
        "callee": {
          "type": "Identifier",
          "start": 9939,
          "end": 9951,
          "name": "someFunction",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 9952,
            "end": 9961,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 9991,
            "end": 9992,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 9995,
            "end": 9996,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 10012,
            "end": 10046,
            "name": "arr",
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 10019,
                        "end": 10022,
                        "name": "tag",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                                "value": "left",
                                "raw": "\"left\""
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
                                "value": "right",
                                "raw": "\"right\""
                              }
                            }
                          ]
                        }
                      },
                      "accessibility": null,
                      "static": false
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "WhileStatement",
      "start": 10049,
      "end": 10187,
      "test": {
        "type": "BinaryExpression",
        "start": 10056,
        "end": 10078,
        "left": {
          "type": "ChainExpression",
          "start": 10056,
          "end": 10067,
          "expression": {
            "type": "MemberExpression",
            "start": 10056,
            "end": 10067,
            "object": {
              "type": "MemberExpression",
              "start": 10056,
              "end": 10062,
              "object": {
                "type": "Identifier",
                "start": 10056,
                "end": 10059,
                "name": "arr",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 10060,
                "end": 10061,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 10064,
              "end": 10067,
              "name": "tag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 10072,
          "end": 10078,
          "value": "left",
          "raw": "\"left\""
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 10080,
        "end": 10187,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 10086,
            "end": 10093,
            "expression": {
              "type": "AssignmentExpression",
              "start": 10086,
              "end": 10092,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 10086,
                "end": 10087,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 10091,
                "end": 10092,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 10098,
            "end": 10185,
            "test": {
              "type": "BinaryExpression",
              "start": 10102,
              "end": 10125,
              "left": {
                "type": "ChainExpression",
                "start": 10102,
                "end": 10113,
                "expression": {
                  "type": "MemberExpression",
                  "start": 10102,
                  "end": 10113,
                  "object": {
                    "type": "MemberExpression",
                    "start": 10102,
                    "end": 10108,
                    "object": {
                      "type": "Identifier",
                      "start": 10102,
                      "end": 10105,
                      "name": "arr",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 10106,
                      "end": 10107,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": true,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 10110,
                    "end": 10113,
                    "name": "tag",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 10118,
                "end": 10125,
                "value": "right",
                "raw": "\"right\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 10127,
              "end": 10185,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 10137,
                  "end": 10179,
                  "expression": {
                    "type": "CallExpression",
                    "start": 10137,
                    "end": 10178,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 10137,
                      "end": 10148,
                      "object": {
                        "type": "Identifier",
                        "start": 10137,
                        "end": 10144,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 10145,
                        "end": 10148,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 10149,
                        "end": 10177,
                        "value": "I should ALSO be reachable",
                        "raw": "\"I should ALSO be reachable\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 10212,
      "end": 10280,
      "id": {
        "type": "Identifier",
        "start": 10217,
        "end": 10222,
        "name": "Test5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 10225,
        "end": 10279,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 10229,
            "end": 10277,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 10229,
              "end": 10233,
              "name": "main",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 10242,
                      "end": 10248,
                      "name": "childs",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10248,
                      "end": 10271,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10250,
                        "end": 10271,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10250,
                          "end": 10256,
                          "name": "Record",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 10265,
                                "end": 10270,
                                "name": "Test5",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
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
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 10282,
      "end": 10442,
      "id": {
        "type": "Identifier",
        "start": 10291,
        "end": 10294,
        "name": "f50",
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
          "start": 10295,
          "end": 10305,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 10298,
            "end": 10305,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 10300,
              "end": 10305,
              "typeName": {
                "type": "Identifier",
                "start": 10300,
                "end": 10305,
                "name": "Test5",
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
        "start": 10307,
        "end": 10442,
        "body": [
          {
            "type": "ForInStatement",
            "start": 10312,
            "end": 10424,
            "left": {
              "type": "VariableDeclaration",
              "start": 10317,
              "end": 10326,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 10323,
                  "end": 10326,
                  "id": {
                    "type": "Identifier",
                    "start": 10323,
                    "end": 10326,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "ChainExpression",
              "start": 10330,
              "end": 10346,
              "expression": {
                "type": "MemberExpression",
                "start": 10330,
                "end": 10346,
                "object": {
                  "type": "MemberExpression",
                  "start": 10330,
                  "end": 10338,
                  "object": {
                    "type": "Identifier",
                    "start": 10330,
                    "end": 10333,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 10334,
                    "end": 10338,
                    "name": "main",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 10340,
                  "end": 10346,
                  "name": "childs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": true
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 10348,
              "end": 10424,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 10356,
                  "end": 10419,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 10360,
                    "end": 10388,
                    "left": {
                      "type": "MemberExpression",
                      "start": 10360,
                      "end": 10380,
                      "object": {
                        "type": "MemberExpression",
                        "start": 10360,
                        "end": 10375,
                        "object": {
                          "type": "MemberExpression",
                          "start": 10360,
                          "end": 10368,
                          "object": {
                            "type": "Identifier",
                            "start": 10360,
                            "end": 10363,
                            "name": "obj",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 10364,
                            "end": 10368,
                            "name": "main",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 10369,
                          "end": 10375,
                          "name": "childs",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 10376,
                        "end": 10379,
                        "name": "key",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Identifier",
                      "start": 10385,
                      "end": 10388,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
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
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
