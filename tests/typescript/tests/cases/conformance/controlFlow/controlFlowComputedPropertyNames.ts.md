__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 935,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
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
          "start": 12,
          "end": 40,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
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
          }
        },
        {
          "type": "Identifier",
          "start": 42,
          "end": 53,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 45,
            "end": 53,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 47,
              "end": 53
            }
          }
        }
      ],
      "returnType": null,
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
                "argument": {
                  "type": "MemberExpression",
                  "start": 72,
                  "end": 80,
                  "object": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 75,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 79,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "prefix": true
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
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 112,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 125,
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 138,
      "end": 481,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 149,
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
          "start": 150,
          "end": 189,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
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
          }
        },
        {
          "type": "Identifier",
          "start": 191,
          "end": 202,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 194,
            "end": 202,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 196,
              "end": 202
            }
          }
        }
      ],
      "returnType": null,
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
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 221,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 227,
                "end": 236,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
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
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 252,
                          "end": 255,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 268,
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 286,
                "end": 302,
                "id": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 290,
                  "decorators": [],
                  "name": "key2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 293,
                  "end": 302,
                  "left": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 296,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 302,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
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
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 320,
                  "decorators": [],
                  "name": "key2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 326,
                "end": 335,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
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
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 351,
                          "end": 355,
                          "decorators": [],
                          "name": "key2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 368,
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 388,
                "end": 404,
                "id": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 392,
                  "decorators": [],
                  "name": "key3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 395,
                  "end": 404,
                  "left": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 398,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 401,
                    "end": 404,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
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
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 418,
                  "end": 422,
                  "decorators": [],
                  "name": "key3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 428,
                "end": 437,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
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
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 453,
                          "end": 457,
                          "decorators": [],
                          "name": "key3",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 459,
                        "end": 470,
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
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
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 483,
      "end": 535,
      "id": {
        "type": "Identifier",
        "start": 488,
        "end": 493,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
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
          "start": 549,
          "end": 559,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 561,
          "end": 577,
          "decorators": [],
          "name": "key",
          "optional": false,
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
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": null,
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
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 596,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 602,
                "end": 611,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
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
                      "argument": {
                        "type": "MemberExpression",
                        "start": 634,
                        "end": 642,
                        "object": {
                          "type": "Identifier",
                          "start": 634,
                          "end": 637,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 638,
                          "end": 641,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "prefix": true
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
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 675,
                                "end": 678,
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": true
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 680,
                              "end": 691,
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
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
                      "argument": {
                        "type": "MemberExpression",
                        "start": 724,
                        "end": 732,
                        "object": {
                          "type": "Identifier",
                          "start": 724,
                          "end": 727,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 728,
                          "end": 731,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "prefix": true
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
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 765,
                                "end": 768,
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": true
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 770,
                              "end": 777,
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
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
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 800,
      "end": 935,
      "id": {
        "type": "Identifier",
        "start": 809,
        "end": 811,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 830,
          "end": 864,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
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
          }
        },
        {
          "type": "Identifier",
          "start": 866,
          "end": 872,
          "decorators": [],
          "name": "key",
          "optional": false,
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
                "decorators": [],
                "name": "K",
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
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 888,
                "end": 891,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
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
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 908,
                          "end": 911,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 913,
                        "end": 924,
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
