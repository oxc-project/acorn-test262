__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 553,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
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
          "start": 11,
          "end": 22,
          "name": "n",
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
                "name": "Function",
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
        "start": 24,
        "end": 27,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 30,
            "end": 45,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 42,
              "end": 45,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "get",
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
                "start": 73,
                "end": 101,
                "name": "handler",
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
                        "name": "bar",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 86,
                          "end": 94,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 88,
                            "end": 94
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": false
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
        "name": "baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "get",
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
                "start": 137,
                "end": 155,
                "name": "callback",
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
                      "name": "Function",
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 184,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 184,
            "name": "barbaz",
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
                  "name": "baz",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 186,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 199,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 199,
            "name": "test",
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
                  "name": "foo",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 207,
            "end": 210,
            "name": "get",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 211,
            "end": 272,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 221,
                "end": 226,
                "name": "param",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 228,
              "end": 272,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 234,
                  "end": 270,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 238,
                      "end": 269,
                      "id": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 239,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "name": "barbaz",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 249,
                            "end": 252,
                            "name": "get",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "FunctionExpression",
                            "start": 253,
                            "end": 268,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 265,
                              "end": 268,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
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
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
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
        "name": "f2",
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
          "start": 288,
          "end": 301,
          "name": "n",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 303,
        "end": 306,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 310,
            "end": 346,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 316,
              "end": 346,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 322,
                  "end": 333,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 326,
                      "end": 332,
                      "id": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 327,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "kind": "var",
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
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
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
        "name": "f3",
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
          "start": 362,
          "end": 390,
          "name": "a",
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "b",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 392,
        "end": 395,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "f3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 403,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 405,
                  "end": 406,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 408,
                "end": 412,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 409,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 411,
                  "end": 412,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
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
        "name": "callb",
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
          "start": 434,
          "end": 457,
          "name": "lam",
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
                  "name": "l",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 440,
                    "end": 448,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 442,
                      "end": 448
                    }
                  },
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 461,
      "end": 499,
      "id": {
        "type": "Identifier",
        "start": 470,
        "end": 475,
        "name": "callb",
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
          "start": 476,
          "end": 497,
          "name": "lam",
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
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 482,
                    "end": 490,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 484,
                      "end": 490
                    }
                  },
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 500,
      "end": 521,
      "id": {
        "type": "Identifier",
        "start": 509,
        "end": 514,
        "name": "callb",
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
          "start": 515,
          "end": 516,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 518,
        "end": 521,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "callb",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 529,
            "end": 548,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 530,
                "end": 531,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 539,
                      "end": 545,
                      "name": "length",
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
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
