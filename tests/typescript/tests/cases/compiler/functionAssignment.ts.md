__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 552,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 22,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 22,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 14,
              "end": 22,
              "typeName": {
                "type": "Identifier",
                "start": 14,
                "end": 22,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 27,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 47,
      "expression": {
        "type": "CallExpression",
        "start": 28,
        "end": 46,
        "callee": {
          "type": "Identifier",
          "start": 28,
          "end": 29,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 30,
            "end": 45,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 42,
              "end": 45,
              "body": []
            },
            "expression": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 49,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 62,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 63,
        "end": 111,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 69,
            "end": 109,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 73,
                "end": 101,
                "decorators": [],
                "name": "handler",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 80,
                  "end": 101,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 82,
                    "end": 101,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 83,
                        "end": 94,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 86,
                          "end": 94,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 88,
                            "end": 94
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 95,
                      "end": 101,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 97,
                        "end": 101
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 108,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 104,
                "end": 108
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
      "start": 113,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 127,
        "end": 167,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 133,
            "end": 165,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 136,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 137,
                "end": 155,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 145,
                  "end": 155,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 147,
                    "end": 155,
                    "typeName": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 155,
                      "decorators": [],
                      "name": "Function",
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
              "start": 156,
              "end": 164,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 158,
                "end": 164
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
      "type": "VariableDeclaration",
      "start": 169,
      "end": 185,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 184,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 184,
            "decorators": [],
            "name": "barbaz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 184,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 181,
                "end": 184,
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 184,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 186,
      "end": 200,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 199,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 199,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 199,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 196,
                "end": 199,
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 199,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 202,
      "end": 274,
      "expression": {
        "type": "CallExpression",
        "start": 202,
        "end": 273,
        "callee": {
          "type": "MemberExpression",
          "start": 202,
          "end": 210,
          "object": {
            "type": "Identifier",
            "start": 202,
            "end": 206,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 207,
            "end": 210,
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 211,
            "end": 272,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 221,
                "end": 226,
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 228,
              "end": 272,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 234,
                  "end": 270,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 238,
                      "end": 269,
                      "id": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 239,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 242,
                        "end": 269,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 242,
                          "end": 252,
                          "object": {
                            "type": "Identifier",
                            "start": 242,
                            "end": 248,
                            "decorators": [],
                            "name": "barbaz",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 249,
                            "end": 252,
                            "decorators": [],
                            "name": "get",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "FunctionExpression",
                            "start": 253,
                            "end": 268,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 265,
                              "end": 268,
                              "body": []
                            },
                            "expression": false
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 276,
      "end": 306,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 287,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 288,
          "end": 301,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 289,
            "end": 301,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 291,
              "end": 301,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 294,
                "end": 301,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 297,
                  "end": 301
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 303,
        "end": 306,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 307,
      "end": 348,
      "expression": {
        "type": "CallExpression",
        "start": 307,
        "end": 347,
        "callee": {
          "type": "Identifier",
          "start": 307,
          "end": 309,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 310,
            "end": 346,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 316,
              "end": 346,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 322,
                  "end": 333,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 326,
                      "end": 332,
                      "id": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 327,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 330,
                        "end": 332,
                        "value": "",
                        "raw": "''"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 338,
                  "end": 344,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 338,
                    "end": 343,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 338,
                      "end": 339,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 342,
                      "end": 343,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 350,
      "end": 395,
      "id": {
        "type": "Identifier",
        "start": 359,
        "end": 361,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 362,
          "end": 390,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 363,
            "end": 390,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 365,
              "end": 390,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 367,
                  "end": 377,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 368,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 368,
                    "end": 376,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 370,
                      "end": 376
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 378,
                  "end": 388,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 378,
                    "end": 379,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
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
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 392,
        "end": 395,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 397,
      "end": 416,
      "expression": {
        "type": "CallExpression",
        "start": 397,
        "end": 415,
        "callee": {
          "type": "Identifier",
          "start": 397,
          "end": 399,
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 400,
            "end": 414,
            "properties": [
              {
                "type": "Property",
                "start": 402,
                "end": 406,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 403,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 405,
                  "end": 406,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 408,
                "end": 412,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 409,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 411,
                  "end": 412,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 419,
      "end": 460,
      "id": {
        "type": "Identifier",
        "start": 428,
        "end": 433,
        "decorators": [],
        "name": "callb",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 434,
          "end": 457,
          "decorators": [],
          "name": "lam",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 437,
            "end": 457,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 438,
              "end": 457,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 439,
                  "end": 448,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 440,
                    "end": 448,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 442,
                      "end": 448
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 450,
                "end": 457,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 453,
                  "end": 457
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 461,
      "end": 499,
      "id": {
        "type": "Identifier",
        "start": 470,
        "end": 475,
        "decorators": [],
        "name": "callb",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 476,
          "end": 497,
          "decorators": [],
          "name": "lam",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 479,
            "end": 497,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 480,
              "end": 497,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 481,
                  "end": 490,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 482,
                    "end": 490,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 484,
                      "end": 490
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 491,
                "end": 497,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 493,
                  "end": 497
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 500,
      "end": 521,
      "id": {
        "type": "Identifier",
        "start": 509,
        "end": 514,
        "decorators": [],
        "name": "callb",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 515,
          "end": 516,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 518,
        "end": 521,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 523,
      "end": 550,
      "expression": {
        "type": "CallExpression",
        "start": 523,
        "end": 549,
        "callee": {
          "type": "Identifier",
          "start": 523,
          "end": 528,
          "decorators": [],
          "name": "callb",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 529,
            "end": 548,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 530,
                "end": 531,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 535,
              "end": 548,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 537,
                  "end": 546,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 537,
                    "end": 545,
                    "object": {
                      "type": "Identifier",
                      "start": 537,
                      "end": 538,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 539,
                      "end": 545,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
