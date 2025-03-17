__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 936,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
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
          "start": 12,
          "end": 40,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 40,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 17,
              "end": 40,
              "typeName": {
                "type": "Identifier",
                "start": 17,
                "end": 23,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 23,
                "end": 40,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 24,
                    "end": 30
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 32,
                    "end": 39
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 42,
          "end": 53,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 45,
            "end": 53,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 47,
              "end": 53
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 55,
        "end": 136,
        "body": [
          {
            "type": "IfStatement",
            "start": 61,
            "end": 134,
            "test": {
              "type": "BinaryExpression",
              "start": 65,
              "end": 93,
              "left": {
                "type": "UnaryExpression",
                "start": 65,
                "end": 80,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "start": 72,
                  "end": 80,
                  "object": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 75,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 79,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 85,
                "end": 93,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 95,
              "end": 134,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 105,
                  "end": 128,
                  "expression": {
                    "type": "CallExpression",
                    "start": 105,
                    "end": 127,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 105,
                      "end": 125,
                      "object": {
                        "type": "MemberExpression",
                        "start": 105,
                        "end": 113,
                        "object": {
                          "type": "Identifier",
                          "start": 105,
                          "end": 108,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 112,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 125,
                        "name": "toUpperCase",
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
      "start": 138,
      "end": 481,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 149,
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
          "start": 150,
          "end": 189,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 153,
            "end": 189,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 155,
              "end": 189,
              "typeName": {
                "type": "Identifier",
                "start": 155,
                "end": 161,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 161,
                "end": 189,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 162,
                    "end": 168
                  },
                  {
                    "type": "TSUnionType",
                    "start": 170,
                    "end": 188,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 170,
                        "end": 176
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 179,
                        "end": 188
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
        {
          "type": "Identifier",
          "start": 191,
          "end": 202,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 194,
            "end": 202,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 196,
              "end": 202
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 204,
        "end": 481,
        "body": [
          {
            "type": "IfStatement",
            "start": 210,
            "end": 277,
            "test": {
              "type": "BinaryExpression",
              "start": 214,
              "end": 236,
              "left": {
                "type": "MemberExpression",
                "start": 214,
                "end": 222,
                "object": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 217,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 221,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 227,
                "end": 236,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 238,
              "end": 277,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 248,
                  "end": 271,
                  "expression": {
                    "type": "CallExpression",
                    "start": 248,
                    "end": 270,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 248,
                      "end": 268,
                      "object": {
                        "type": "MemberExpression",
                        "start": 248,
                        "end": 256,
                        "object": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 251,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 252,
                          "end": 255,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 268,
                        "name": "toUpperCase",
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
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 282,
            "end": 303,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 286,
                "end": 302,
                "id": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 290,
                  "name": "key2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 293,
                  "end": 302,
                  "left": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 296,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 302,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 308,
            "end": 377,
            "test": {
              "type": "BinaryExpression",
              "start": 312,
              "end": 335,
              "left": {
                "type": "MemberExpression",
                "start": 312,
                "end": 321,
                "object": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 315,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 320,
                  "name": "key2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 326,
                "end": 335,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 337,
              "end": 377,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 347,
                  "end": 371,
                  "expression": {
                    "type": "CallExpression",
                    "start": 347,
                    "end": 370,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 347,
                      "end": 368,
                      "object": {
                        "type": "MemberExpression",
                        "start": 347,
                        "end": 356,
                        "object": {
                          "type": "Identifier",
                          "start": 347,
                          "end": 350,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 351,
                          "end": 355,
                          "name": "key2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 368,
                        "name": "toUpperCase",
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
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 382,
            "end": 405,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 388,
                "end": 404,
                "id": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 392,
                  "name": "key3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 395,
                  "end": 404,
                  "left": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 398,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 401,
                    "end": 404,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 410,
            "end": 479,
            "test": {
              "type": "BinaryExpression",
              "start": 414,
              "end": 437,
              "left": {
                "type": "MemberExpression",
                "start": 414,
                "end": 423,
                "object": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 417,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 418,
                  "end": 422,
                  "name": "key3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 428,
                "end": 437,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 439,
              "end": 479,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 449,
                  "end": 473,
                  "expression": {
                    "type": "CallExpression",
                    "start": 449,
                    "end": 472,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 449,
                      "end": 470,
                      "object": {
                        "type": "MemberExpression",
                        "start": 449,
                        "end": 458,
                        "object": {
                          "type": "Identifier",
                          "start": 449,
                          "end": 452,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 453,
                          "end": 457,
                          "name": "key3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 459,
                        "end": 470,
                        "name": "toUpperCase",
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
      "start": 483,
      "end": 535,
      "id": {
        "type": "Identifier",
        "start": 488,
        "end": 493,
        "name": "Thing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 496,
        "end": 534,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 498,
            "end": 509,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 498,
              "end": 499,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 500,
              "end": 508,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 502,
                "end": 508
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 510,
            "end": 521,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 510,
              "end": 511,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 512,
              "end": 520,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 514,
                "end": 520
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 522,
            "end": 532,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 522,
              "end": 523,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 524,
              "end": 532,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 526,
                "end": 532
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
      "start": 537,
      "end": 798,
      "id": {
        "type": "Identifier",
        "start": 546,
        "end": 548,
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
          "start": 549,
          "end": 559,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 552,
            "end": 559,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 554,
              "end": 559,
              "typeName": {
                "type": "Identifier",
                "start": 554,
                "end": 559,
                "name": "Thing",
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
        {
          "type": "Identifier",
          "start": 561,
          "end": 577,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 564,
            "end": 577,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 566,
              "end": 577,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 572,
                "end": 577,
                "typeName": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 577,
                  "name": "Thing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 579,
        "end": 798,
        "body": [
          {
            "type": "IfStatement",
            "start": 585,
            "end": 796,
            "test": {
              "type": "BinaryExpression",
              "start": 589,
              "end": 611,
              "left": {
                "type": "MemberExpression",
                "start": 589,
                "end": 597,
                "object": {
                  "type": "Identifier",
                  "start": 589,
                  "end": 592,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 596,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 602,
                "end": 611,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 613,
              "end": 796,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 623,
                  "end": 704,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 627,
                    "end": 655,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 627,
                      "end": 642,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 634,
                        "end": 642,
                        "object": {
                          "type": "Identifier",
                          "start": 634,
                          "end": 637,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 638,
                          "end": 641,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 647,
                      "end": 655,
                      "value": "string",
                      "raw": "\"string\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 657,
                    "end": 704,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 671,
                        "end": 694,
                        "expression": {
                          "type": "CallExpression",
                          "start": 671,
                          "end": 693,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 671,
                            "end": 691,
                            "object": {
                              "type": "MemberExpression",
                              "start": 671,
                              "end": 679,
                              "object": {
                                "type": "Identifier",
                                "start": 671,
                                "end": 674,
                                "name": "obj",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 675,
                                "end": 678,
                                "name": "key",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": true,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 680,
                              "end": 691,
                              "name": "toUpperCase",
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
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "start": 713,
                  "end": 790,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 717,
                    "end": 745,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 717,
                      "end": 732,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 724,
                        "end": 732,
                        "object": {
                          "type": "Identifier",
                          "start": 724,
                          "end": 727,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 728,
                          "end": 731,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 737,
                      "end": 745,
                      "value": "number",
                      "raw": "\"number\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 747,
                    "end": 790,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 761,
                        "end": 780,
                        "expression": {
                          "type": "CallExpression",
                          "start": 761,
                          "end": 779,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 761,
                            "end": 777,
                            "object": {
                              "type": "MemberExpression",
                              "start": 761,
                              "end": 769,
                              "object": {
                                "type": "Identifier",
                                "start": 761,
                                "end": 764,
                                "name": "obj",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 765,
                                "end": 768,
                                "name": "key",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": true,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 770,
                              "end": 777,
                              "name": "toFixed",
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
                      }
                    ]
                  },
                  "alternate": null
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
      "start": 800,
      "end": 935,
      "id": {
        "type": "Identifier",
        "start": 809,
        "end": 811,
        "name": "f4",
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
          "start": 830,
          "end": 864,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 833,
            "end": 864,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 835,
              "end": 864,
              "typeName": {
                "type": "Identifier",
                "start": 835,
                "end": 841,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 841,
                "end": 864,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 842,
                    "end": 843,
                    "typeName": {
                      "type": "Identifier",
                      "start": 842,
                      "end": 843,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUnionType",
                    "start": 845,
                    "end": 863,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 845,
                        "end": 851
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 854,
                        "end": 863
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
        {
          "type": "Identifier",
          "start": 866,
          "end": 872,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 869,
            "end": 872,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 871,
              "end": 872,
              "typeName": {
                "type": "Identifier",
                "start": 871,
                "end": 872,
                "name": "K",
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
        "start": 874,
        "end": 935,
        "body": [
          {
            "type": "IfStatement",
            "start": 880,
            "end": 933,
            "test": {
              "type": "MemberExpression",
              "start": 884,
              "end": 892,
              "object": {
                "type": "Identifier",
                "start": 884,
                "end": 887,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 888,
                "end": 891,
                "name": "key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 894,
              "end": 933,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 904,
                  "end": 927,
                  "expression": {
                    "type": "CallExpression",
                    "start": 904,
                    "end": 926,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 904,
                      "end": 924,
                      "object": {
                        "type": "MemberExpression",
                        "start": 904,
                        "end": 912,
                        "object": {
                          "type": "Identifier",
                          "start": 904,
                          "end": 907,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 908,
                          "end": 911,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 913,
                        "end": 924,
                        "name": "toUpperCase",
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
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 811,
        "end": 829,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 812,
            "end": 828,
            "name": {
              "type": "Identifier",
              "start": 812,
              "end": 813,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 822,
              "end": 828
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
